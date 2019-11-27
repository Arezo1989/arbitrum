/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter, Signer } from 'ethers';
import { Listener, Provider } from 'ethers/providers';
import { Arrayish, BigNumber, BigNumberish, Interface } from 'ethers/utils';
import { TransactionOverrides, TypedEventDescription, TypedFunctionDescription } from '.';

interface ArbChainInterface extends Interface {
    functions: {
        completeChallenge: TypedFunctionDescription<{
            encode([_players, _rewards]: [(string)[], (BigNumberish)[]]): string;
        }>;

        initiateChallenge: TypedFunctionDescription<{
            encode([_assertPreHash]: [Arrayish]): string;
        }>;

        activateVM: TypedFunctionDescription<{ encode([]: []): string }>;

        ownerShutdown: TypedFunctionDescription<{ encode([]: []): string }>;

        confirmDisputableAsserted: TypedFunctionDescription<{
            encode([_preconditionHash, _afterHash, _numSteps, _messages, _logsAccHash]: [
                Arrayish,
                Arrayish,
                BigNumberish,
                Arrayish,
                Arrayish,
            ]): string;
        }>;

        pendingDisputableAssert: TypedFunctionDescription<{
            encode([_beforeHash, _beforeInbox, _afterHash, _messagesAccHash, _logsAccHash, _numSteps, _timeBounds]: [
                Arrayish,
                Arrayish,
                Arrayish,
                Arrayish,
                Arrayish,
                BigNumberish,
                (BigNumberish)[],
            ]): string;
        }>;

        increaseDeposit: TypedFunctionDescription<{ encode([]: []): string }>;
    };

    events: {
        PendingDisputableAssertion: TypedEventDescription<{
            encodeTopics([
                beforeHash,
                beforeInbox,
                afterHash,
                messagesAccHash,
                logsAccHash,
                asserter,
                timeBounds,
                numSteps,
            ]: [null, null, null, null, null, null, null, null]): string[];
        }>;

        ConfirmedDisputableAssertion: TypedEventDescription<{
            encodeTopics([newState, logsAccHash]: [null, null]): string[];
        }>;

        InitiatedChallenge: TypedEventDescription<{
            encodeTopics([challenger]: [null]): string[];
        }>;
    };
}

export class ArbChain extends Contract {
    connect(signerOrProvider: Signer | Provider | string): ArbChain;
    attach(addressOrName: string): ArbChain;
    deployed(): Promise<ArbChain>;

    on(event: EventFilter | string, listener: Listener): ArbChain;
    once(event: EventFilter | string, listener: Listener): ArbChain;
    addListener(eventName: EventFilter | string, listener: Listener): ArbChain;
    removeAllListeners(eventName: EventFilter | string): ArbChain;
    removeListener(eventName: any, listener: Listener): ArbChain;

    interface: ArbChainInterface;

    functions: {
        currentDeposit(validator: string): Promise<BigNumber>;

        vm(): Promise<{
            machineHash: string;
            pendingHash: string;
            inbox: string;
            asserter: string;
            escrowRequired: BigNumber;
            deadline: BigNumber;
            sequenceNum: BigNumber;
            gracePeriod: number;
            maxExecutionSteps: number;
            state: number;
            inChallenge: boolean;
            0: string;
            1: string;
            2: string;
            3: string;
            4: BigNumber;
            5: BigNumber;
            6: BigNumber;
            7: number;
            8: number;
            9: number;
            10: boolean;
        }>;

        completeChallenge(
            _players: (string)[],
            _rewards: (BigNumberish)[],
            overrides?: TransactionOverrides,
        ): Promise<ContractTransaction>;

        initiateChallenge(_assertPreHash: Arrayish, overrides?: TransactionOverrides): Promise<ContractTransaction>;

        activateVM(overrides?: TransactionOverrides): Promise<ContractTransaction>;

        ownerShutdown(overrides?: TransactionOverrides): Promise<ContractTransaction>;

        confirmDisputableAsserted(
            _preconditionHash: Arrayish,
            _afterHash: Arrayish,
            _numSteps: BigNumberish,
            _messages: Arrayish,
            _logsAccHash: Arrayish,
            overrides?: TransactionOverrides,
        ): Promise<ContractTransaction>;

        pendingDisputableAssert(
            _beforeHash: Arrayish,
            _beforeInbox: Arrayish,
            _afterHash: Arrayish,
            _messagesAccHash: Arrayish,
            _logsAccHash: Arrayish,
            _numSteps: BigNumberish,
            _timeBounds: (BigNumberish)[],
            overrides?: TransactionOverrides,
        ): Promise<ContractTransaction>;

        increaseDeposit(overrides?: TransactionOverrides): Promise<ContractTransaction>;

        challengeManager(): Promise<string>;
        getState(): Promise<number>;
        terminateAddress(): Promise<string>;
        exitAddress(): Promise<string>;
        owner(): Promise<string>;
        escrowRequired(): Promise<BigNumber>;
        globalInbox(): Promise<string>;
    };

    filters: {
        PendingDisputableAssertion(
            beforeHash: null,
            beforeInbox: null,
            afterHash: null,
            messagesAccHash: null,
            logsAccHash: null,
            asserter: null,
            timeBounds: null,
            numSteps: null,
        ): EventFilter;

        ConfirmedDisputableAssertion(newState: null, logsAccHash: null): EventFilter;

        InitiatedChallenge(challenger: null): EventFilter;
    };

    estimate: {
        completeChallenge(_players: (string)[], _rewards: (BigNumberish)[]): Promise<BigNumber>;

        initiateChallenge(_assertPreHash: Arrayish): Promise<BigNumber>;

        activateVM(): Promise<BigNumber>;

        ownerShutdown(): Promise<BigNumber>;

        confirmDisputableAsserted(
            _preconditionHash: Arrayish,
            _afterHash: Arrayish,
            _numSteps: BigNumberish,
            _messages: Arrayish,
            _logsAccHash: Arrayish,
        ): Promise<BigNumber>;

        pendingDisputableAssert(
            _beforeHash: Arrayish,
            _beforeInbox: Arrayish,
            _afterHash: Arrayish,
            _messagesAccHash: Arrayish,
            _logsAccHash: Arrayish,
            _numSteps: BigNumberish,
            _timeBounds: (BigNumberish)[],
        ): Promise<BigNumber>;

        increaseDeposit(): Promise<BigNumber>;
    };
}
