/*
 * Copyright 2019-2021, Offchain Labs, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

#ifndef datastorage_hpp
#define datastorage_hpp

#include <memory>
#include <string>
#include <utility>
#include <vector>

#include <avm_values/bigint.hpp>
#include <data_storage/storageresult.hpp>

#include <rocksdb/utilities/transaction.h>
#include <rocksdb/utilities/transaction_db.h>

class Transaction;
class ReadTransaction;
class ConcurrentCounter;

class DataStorage {
    friend Transaction;
    friend ConcurrentCounter;

   public:
    enum column_family_indexes {
        DEFAULT_COLUMN = 0,
        STATE_COLUMN,
        CHECKPOINT_COLUMN,
        DELAYEDMESSAGE_COLUMN,
        SEQUENCERBATCHITEM_COLUMN,
        SEQUENCERBATCH_COLUMN,
        LOG_COLUMN,
        SEND_COLUMN,
        SIDELOAD_COLUMN,
        AGGREGATOR_COLUMN,
        REFCOUNTED_COLUMN,
        FAMILY_COLUMN_COUNT
    };
    std::string txn_db_path;
    std::unique_ptr<rocksdb::TransactionDB> txn_db;
    std::vector<rocksdb::ColumnFamilyHandle*> column_handles;
    rocksdb::FlushOptions flush_options;
    size_t next_column_to_flush{0};
    std::vector<uint8_t> secret_hash_seed;

    class shutting_down_exception : public std::exception {};

    explicit DataStorage(const std::string& db_path);
    ~DataStorage();

    rocksdb::Status flushNextColumn();
    rocksdb::Status closeDb();
    rocksdb::Status clearDBExceptInbox();
    [[nodiscard]] static std::unique_ptr<ConcurrentCounter> getCounter(
        std::shared_ptr<DataStorage> storage);

   private:
    std::atomic<bool> shutting_down;
    std::atomic<uint64_t> concurrent_database_access_counter;

    rocksdb::Status updateSecretHashSeed();

    [[nodiscard]] std::unique_ptr<rocksdb::Transaction> beginTransaction() {
        // Make sure database isn't closed while it is being used
        auto counter = getCounter();

        return std::unique_ptr<rocksdb::Transaction>{
            txn_db->BeginTransaction(rocksdb::WriteOptions())};
    }
};

class Transaction {
    friend ReadTransaction;

   public:
    std::shared_ptr<DataStorage> datastorage;
    std::unique_ptr<rocksdb::Transaction> transaction;

    Transaction(std::shared_ptr<DataStorage> datastorage_,
                std::unique_ptr<rocksdb::Transaction> transaction_)
        : datastorage(std::move(datastorage_)),
          transaction(std::move(transaction_)) {}

    rocksdb::Status commit() {
        // Make sure database isn't closed while it is being used
        auto counter = datastorage->getCounter(datastorage);

        return transaction->Commit();
    }

    rocksdb::Status rollback() {
        // Make sure database isn't closed while it is being used
        auto counter = datastorage->getCounter();

        return transaction->Rollback();
    }

   private:
    static std::unique_ptr<Transaction> makeTransaction(
        std::shared_ptr<DataStorage> store);
};

class ConcurrentCounter {
    friend DataStorage;

   private:
    std::shared_ptr<DataStorage> storage;

    ConcurrentCounter(std::shared_ptr<DataStorage> storage);
    ConcurrentCounter(const ConcurrentCounter& other) = delete;
    ConcurrentCounter(const ConcurrentCounter&& other) = delete;
    ConcurrentCounter& operator=(const ConcurrentCounter& other) = delete;
    ConcurrentCounter& operator=(const ConcurrentCounter&& other) = delete;

    static std::unique_ptr<ConcurrentCounter> Get(
        const std::shared_ptr<DataStorage>& storage);

   public:
    ~ConcurrentCounter();
};

#endif /* datastorage_hpp */
