/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers'
import { Provider, TransactionRequest } from '@ethersproject/providers'
import type { Validator, ValidatorInterface } from '../Validator'

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
      {
        internalType: 'address',
        name: 'destination',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'executeTransaction',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes[]',
        name: 'data',
        type: 'bytes[]',
      },
      {
        internalType: 'address[]',
        name: 'destination',
        type: 'address[]',
      },
      {
        internalType: 'uint256[]',
        name: 'amount',
        type: 'uint256[]',
      },
    ],
    name: 'executeTransactions',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'isMaster',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract IRollupUser',
        name: 'rollup',
        type: 'address',
      },
      {
        internalType: 'address payable[]',
        name: 'stakers',
        type: 'address[]',
      },
    ],
    name: 'returnOldDeposits',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract IChallenge[]',
        name: 'challenges',
        type: 'address[]',
      },
    ],
    name: 'timeoutChallenges',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
]

const _bytecode =
  '0x608060405234801561001057600080fd5b506065805460ff19166001179055610df58061002d6000396000f3fe6080604052600436106100765760003560e01c80636f791d291461007b578063715018a6146100a657806372f45866146100bd5780638129fc1c146100d057806381aac2d9146100e55780638da5cb5b14610105578063944f449514610127578063ce1d571f14610147578063f2fde38b1461015a575b600080fd5b34801561008757600080fd5b5061009061017a565b60405161009d9190610c29565b60405180910390f35b3480156100b257600080fd5b506100bb610183565b005b6100bb6100cb366004610a57565b610203565b3480156100dc57600080fd5b506100bb61039a565b3480156100f157600080fd5b506100bb610100366004610aed565b610425565b34801561011157600080fd5b5061011a61053e565b60405161009d9190610c15565b34801561013357600080fd5b506100bb610142366004610bb2565b61054d565b6100bb610155366004610b2d565b610672565b34801561016657600080fd5b506100bb610175366004610a34565b61075a565b60655460ff1690565b61018b610809565b6001600160a01b031661019c61053e565b6001600160a01b0316146101cb5760405162461bcd60e51b81526004016101c290610cf1565b60405180910390fd5b6033546040516000916001600160a01b031690600080516020610da0833981519152908390a3603380546001600160a01b0319169055565b61020b610809565b6001600160a01b031661021c61053e565b6001600160a01b0316146102425760405162461bcd60e51b81526004016101c290610cf1565b8460005b8181101561039057600088888381811061025c57fe5b905060200281019061026e9190610d43565b905011156102c4576102a886868381811061028557fe5b905060200201602081019061029a9190610a34565b6001600160a01b031661080d565b6102c45760405162461bcd60e51b81526004016101c290610c34565b60008686838181106102d257fe5b90506020020160208101906102e79190610a34565b6001600160a01b03168585848181106102fc57fe5b905060200201358a8a8581811061030f57fe5b90506020028101906103219190610d43565b60405161032f929190610c05565b60006040518083038185875af1925050503d806000811461036c576040519150601f19603f3d011682016040523d82523d6000602084013e610371565b606091505b5050905080610387576040513d806000833e8082fd5b50600101610246565b5050505050505050565b600054610100900460ff16806103b357506103b3610813565b806103c1575060005460ff16155b6103dd5760405162461bcd60e51b81526004016101c290610ca3565b600054610100900460ff16158015610408576000805460ff1961ff0019909116610100171660011790555b610410610824565b8015610422576000805461ff00191690555b50565b61042d610809565b6001600160a01b031661043e61053e565b6001600160a01b0316146104645760405162461bcd60e51b81526004016101c290610cf1565b8060005b818110156105385783838281811061047c57fe5b90506020020160208101906104919190610a34565b6001600160a01b03166370dea79a6040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156104cb57600080fd5b505af19250505080156104dc575060015b610530573d80801561050a576040519150601f19603f3d011682016040523d82523d6000602084013e61050f565b606091505b50805161052e5760405162461bcd60e51b81526004016101c290610d26565b505b600101610468565b50505050565b6033546001600160a01b031690565b610555610809565b6001600160a01b031661056661053e565b6001600160a01b03161461058c5760405162461bcd60e51b81526004016101c290610cf1565b8060005b8181101561066b57846001600160a01b0316637427be518585848181106105b357fe5b90506020020160208101906105c89190610a34565b6040518263ffffffff1660e01b81526004016105e49190610c15565b600060405180830381600087803b1580156105fe57600080fd5b505af192505050801561060f575060015b610663573d80801561063d576040519150601f19603f3d011682016040523d82523d6000602084013e610642565b606091505b5080516106615760405162461bcd60e51b81526004016101c290610d26565b505b600101610590565b5050505050565b61067a610809565b6001600160a01b031661068b61053e565b6001600160a01b0316146106b15760405162461bcd60e51b81526004016101c290610cf1565b82156106e5576106c9826001600160a01b031661080d565b6106e55760405162461bcd60e51b81526004016101c290610c34565b6000826001600160a01b0316828686604051610702929190610c05565b60006040518083038185875af1925050503d806000811461073f576040519150601f19603f3d011682016040523d82523d6000602084013e610744565b606091505b505090508061066b576040513d806000833e8082fd5b610762610809565b6001600160a01b031661077361053e565b6001600160a01b0316146107995760405162461bcd60e51b81526004016101c290610cf1565b6001600160a01b0381166107bf5760405162461bcd60e51b81526004016101c290610c5d565b6033546040516001600160a01b03808416921690600080516020610da083398151915290600090a3603380546001600160a01b0319166001600160a01b0392909216919091179055565b3390565b3b151590565b600061081e3061080d565b15905090565b600054610100900460ff168061083d575061083d610813565b8061084b575060005460ff16155b6108675760405162461bcd60e51b81526004016101c290610ca3565b600054610100900460ff16158015610892576000805460ff1961ff0019909116610100171660011790555b61089a6108a2565b610410610923565b600054610100900460ff16806108bb57506108bb610813565b806108c9575060005460ff16155b6108e55760405162461bcd60e51b81526004016101c290610ca3565b600054610100900460ff16158015610410576000805460ff1961ff0019909116610100171660011790558015610422576000805461ff001916905550565b600054610100900460ff168061093c575061093c610813565b8061094a575060005460ff16155b6109665760405162461bcd60e51b81526004016101c290610ca3565b600054610100900460ff16158015610991576000805460ff1961ff0019909116610100171660011790555b600061099b610809565b603380546001600160a01b0319166001600160a01b03831690811790915560405191925090600090600080516020610da0833981519152908290a3508015610422576000805461ff001916905550565b60008083601f8401126109fc578182fd5b50813567ffffffffffffffff811115610a13578182fd5b6020830191508360208083028501011115610a2d57600080fd5b9250929050565b600060208284031215610a45578081fd5b8135610a5081610d8a565b9392505050565b60008060008060008060608789031215610a6f578182fd5b863567ffffffffffffffff80821115610a86578384fd5b610a928a838b016109eb565b90985096506020890135915080821115610aaa578384fd5b610ab68a838b016109eb565b90965094506040890135915080821115610ace578384fd5b50610adb89828a016109eb565b979a9699509497509295939492505050565b60008060208385031215610aff578182fd5b823567ffffffffffffffff811115610b15578283fd5b610b21858286016109eb565b90969095509350505050565b60008060008060608587031215610b42578384fd5b843567ffffffffffffffff80821115610b59578586fd5b81870188601f820112610b6a578687fd5b8035925081831115610b7a578687fd5b886020848301011115610b8b578687fd5b6020908101965091945050850135610ba281610d8a565b9396929550929360400135925050565b600080600060408486031215610bc6578283fd5b8335610bd181610d8a565b9250602084013567ffffffffffffffff811115610bec578283fd5b610bf8868287016109eb565b9497909650939450505050565b6000828483379101908152919050565b6001600160a01b0391909116815260200190565b901515815260200190565b6020808252600f908201526e2727afa1a7a222afa0aa2fa0a2222960891b604082015260600190565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201526564647265737360d01b606082015260800190565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201526d191e481a5b9a5d1a585b1a5e995960921b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60208082526003908201526247415360e81b604082015260600190565b6000808335601e19843603018112610d59578283fd5b8084018035925067ffffffffffffffff831115610d74578384fd5b60200192505036819003821315610a2d57600080fd5b6001600160a01b038116811461042257600080fdfe8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0a2646970667358221220d99349a0f5eb6201c360896f42545166fe2aa67f1f61eb1bd9bd5d781421027164736f6c634300060b0033'

export class Validator__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer)
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Validator> {
    return super.deploy(overrides || {}) as Promise<Validator>
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  attach(address: string): Validator {
    return super.attach(address) as Validator
  }
  connect(signer: Signer): Validator__factory {
    return super.connect(signer) as Validator__factory
  }
  static readonly bytecode = _bytecode
  static readonly abi = _abi
  static createInterface(): ValidatorInterface {
    return new utils.Interface(_abi) as ValidatorInterface
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Validator {
    return new Contract(address, _abi, signerOrProvider) as Validator
  }
}
