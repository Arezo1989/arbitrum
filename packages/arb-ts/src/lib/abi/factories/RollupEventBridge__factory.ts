/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers'
import { Provider, TransactionRequest } from '@ethersproject/providers'
import type {
  RollupEventBridge,
  RollupEventBridgeInterface,
} from '../RollupEventBridge'

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'messageNum',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'InboxMessageDelivered',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'messageNum',
        type: 'uint256',
      },
    ],
    name: 'InboxMessageDeliveredFromOrigin',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_bridge',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_rollup',
        type: 'address',
      },
    ],
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
    inputs: [
      {
        internalType: 'uint256',
        name: 'nodeNum',
        type: 'uint256',
      },
    ],
    name: 'nodeConfirmed',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'nodeNum',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'prev',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'deadline',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'asserter',
        type: 'address',
      },
    ],
    name: 'nodeCreated',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'nodeNum',
        type: 'uint256',
      },
    ],
    name: 'nodeRejected',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'confirmPeriodBlocks',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'avmGasSpeedLimitPerBlock',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: 'extraConfig',
        type: 'bytes',
      },
    ],
    name: 'rollupInitialized',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'staker',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'nodeNum',
        type: 'uint256',
      },
    ],
    name: 'stakeCreated',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
]

const _bytecode =
  '0x608060405234801561001057600080fd5b506000805460ff191660011790556108878061002d6000396000f3fe608060405234801561001057600080fd5b506004361061006d5760003560e01c806316b9109b1461007257806330a826b414610091578063485cc955146100ae5780636f791d29146100dc5780638b8ca199146100f8578063bc49accb14610130578063f03c04a5146101bc575b600080fd5b61008f6004803603602081101561008857600080fd5b50356101e8565b005b61008f600480360360208110156100a757600080fd5b5035610269565b61008f600480360360408110156100c457600080fd5b506001600160a01b03813581169160200135166102e7565b6100e461036c565b604080519115158252519081900360200190f35b61008f6004803603608081101561010e57600080fd5b50803590602081013590604081013590606001356001600160a01b0316610375565b61008f6004803603608081101561014657600080fd5b8135916020810135916001600160a01b03604083013516919081019060808101606082013564010000000081111561017d57600080fd5b82018360208201111561018f57600080fd5b803590602001918460018302840111640100000000831117156101b157600080fd5b50909250905061041c565b61008f600480360360408110156101d257600080fd5b506001600160a01b038135169060200135610687565b6001546001600160a01b03163314610235576040805162461bcd60e51b815260206004820152600b60248201526a04f4e4c595f524f4c4c55560ac1b604482015290519081900360640190fd5b60408051600160f81b6020820152602180820184905282518083039091018152604190910190915261026690610721565b50565b6001546001600160a01b031633146102b6576040805162461bcd60e51b815260206004820152600b60248201526a04f4e4c595f524f4c4c55560ac1b604482015290519081900360640190fd5b60408051600160f91b6020820152602180820184905282518083039091018152604190910190915261026690610721565b6001546001600160a01b031615610334576040805162461bcd60e51b815260206004820152600c60248201526b1053149150511657d253925560a21b604482015290519081900360640190fd5b60008054610100600160a81b0319166101006001600160a01b0394851602179055600180546001600160a01b03191691909216179055565b60005460ff1690565b6001546001600160a01b031633146103c2576040805162461bcd60e51b815260206004820152600b60248201526a04f4e4c595f524f4c4c55560ac1b604482015290519081900360640190fd5b60408051600060208201526021810186905260418101859052436061820152608181018490526001600160a01b03831660a1808301919091528251808303909101815260c190910190915261041690610721565b50505050565b6001546001600160a01b03163314610469576040805162461bcd60e51b815260206004820152600b60248201526a04f4e4c595f524f4c4c55560ac1b604482015290519081900360640190fd5b60408051774368616c6c656e6765506572696f64457468426c6f636b7360401b815281519081900360180181207214dc195959131a5b5a5d14195c94d958dbdb99606a1b825291519081900360130190206060919087906064880460405180806921b430b4b727bbb732b960b11b815250600a01905060405180910390208860601b60601c6001600160a01b03168888604051602001808981526020018881526020018781526020018681526020018581526020018481526020018383808284376040805191909301818103601f190182528084526000805483516020808601919091206302bbfad160e01b8552600b60048601526024850184905260448501529551939f50909d5061010090046001600160a01b03169b506302bbfad19a5060648082019a509398509096508690039091019350849250899150889050803b1580156105b557600080fd5b505af11580156105c9573d6000803e3d6000fd5b505050506040513d60208110156105df57600080fd5b5051604080516020808252855182820152855193945084937fff64905f73a67fb594e0f940a8075a860db489ad991e032f48c81123eb52d60b938793928392918301919085019080838360005b8381101561064457818101518382015260200161062c565b50505050905090810190601f1680156106715780820380516001836020036101000a031916815260200191505b509250505060405180910390a250505050505050565b6001546001600160a01b031633146106d4576040805162461bcd60e51b815260206004820152600b60248201526a04f4e4c595f524f4c4c55560ac1b604482015290519081900360640190fd5b60408051600360f81b60208201526001600160a01b0384166021820152604181018390524360618083019190915282518083039091018152608190910190915261071d90610721565b5050565b600080548251602080850191909120604080516302bbfad160e01b8152600860048201523360248201526044810192909252516101009093046001600160a01b0316936302bbfad193606480840194939192918390030190829087803b15801561078a57600080fd5b505af115801561079e573d6000803e3d6000fd5b505050506040513d60208110156107b457600080fd5b505160408051602080825284518282015284517fff64905f73a67fb594e0f940a8075a860db489ad991e032f48c81123eb52d60b938693928392918301919085019080838360005b838110156108145781810151838201526020016107fc565b50505050905090810190601f1680156108415780820380516001836020036101000a031916815260200191505b509250505060405180910390a25056fea2646970667358221220bfa70b301d1cc422e0f09bf41e6ceaba2584653c6b2dbb1bfc8077ffc843d51764736f6c634300060b0033'

export class RollupEventBridge__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer)
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<RollupEventBridge> {
    return super.deploy(overrides || {}) as Promise<RollupEventBridge>
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  attach(address: string): RollupEventBridge {
    return super.attach(address) as RollupEventBridge
  }
  connect(signer: Signer): RollupEventBridge__factory {
    return super.connect(signer) as RollupEventBridge__factory
  }
  static readonly bytecode = _bytecode
  static readonly abi = _abi
  static createInterface(): RollupEventBridgeInterface {
    return new utils.Interface(_abi) as RollupEventBridgeInterface
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RollupEventBridge {
    return new Contract(address, _abi, signerOrProvider) as RollupEventBridge
  }
}
