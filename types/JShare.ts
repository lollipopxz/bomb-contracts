/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface JShareInterface extends utils.Interface {
  functions: {
    "COMMUNITY_FUND_POOL_ALLOCATION()": FunctionFragment;
    "DEV_FUND_POOL_ALLOCATION()": FunctionFragment;
    "FARMING_POOL_REWARD_ALLOCATION()": FunctionFragment;
    "VESTING_DURATION()": FunctionFragment;
    "allowance(address,address)": FunctionFragment;
    "approve(address,uint256)": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "burn(uint256)": FunctionFragment;
    "burnFrom(address,uint256)": FunctionFragment;
    "claimRewards()": FunctionFragment;
    "communityFund()": FunctionFragment;
    "communityFundLastClaimed()": FunctionFragment;
    "communityFundRewardRate()": FunctionFragment;
    "decimals()": FunctionFragment;
    "decreaseAllowance(address,uint256)": FunctionFragment;
    "devFund()": FunctionFragment;
    "devFundLastClaimed()": FunctionFragment;
    "devFundRewardRate()": FunctionFragment;
    "distributeReward(address)": FunctionFragment;
    "endTime()": FunctionFragment;
    "governanceRecoverUnsupported(address,uint256,address)": FunctionFragment;
    "increaseAllowance(address,uint256)": FunctionFragment;
    "isOperator()": FunctionFragment;
    "name()": FunctionFragment;
    "operator()": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "rewardPoolDistributed()": FunctionFragment;
    "setDevFund(address)": FunctionFragment;
    "setTreasuryFund(address)": FunctionFragment;
    "startTime()": FunctionFragment;
    "symbol()": FunctionFragment;
    "totalSupply()": FunctionFragment;
    "transfer(address,uint256)": FunctionFragment;
    "transferFrom(address,address,uint256)": FunctionFragment;
    "transferOperator(address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "unclaimedDevFund()": FunctionFragment;
    "unclaimedTreasuryFund()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "COMMUNITY_FUND_POOL_ALLOCATION",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "DEV_FUND_POOL_ALLOCATION",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "FARMING_POOL_REWARD_ALLOCATION",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "VESTING_DURATION",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "allowance",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "approve",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
  encodeFunctionData(functionFragment: "burn", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "burnFrom",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "claimRewards",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "communityFund",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "communityFundLastClaimed",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "communityFundRewardRate",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "decreaseAllowance",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "devFund", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "devFundLastClaimed",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "devFundRewardRate",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "distributeReward",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "endTime", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "governanceRecoverUnsupported",
    values: [string, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "increaseAllowance",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isOperator",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(functionFragment: "operator", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rewardPoolDistributed",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "setDevFund", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setTreasuryFund",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "startTime", values?: undefined): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transfer",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOperator",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "unclaimedDevFund",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "unclaimedTreasuryFund",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "COMMUNITY_FUND_POOL_ALLOCATION",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "DEV_FUND_POOL_ALLOCATION",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "FARMING_POOL_REWARD_ALLOCATION",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "VESTING_DURATION",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "burnFrom", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "claimRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "communityFund",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "communityFundLastClaimed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "communityFundRewardRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "decreaseAllowance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "devFund", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "devFundLastClaimed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "devFundRewardRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "distributeReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "endTime", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "governanceRecoverUnsupported",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "increaseAllowance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isOperator", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "operator", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardPoolDistributed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setDevFund", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setTreasuryFund",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "startTime", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOperator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unclaimedDevFund",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unclaimedTreasuryFund",
    data: BytesLike
  ): Result;

  events: {
    "Approval(address,address,uint256)": EventFragment;
    "OperatorTransferred(address,address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Transfer(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OperatorTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}

export type ApprovalEvent = TypedEvent<
  [string, string, BigNumber],
  { owner: string; spender: string; value: BigNumber }
>;

export type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;

export type OperatorTransferredEvent = TypedEvent<
  [string, string],
  { previousOperator: string; newOperator: string }
>;

export type OperatorTransferredEventFilter =
  TypedEventFilter<OperatorTransferredEvent>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  { previousOwner: string; newOwner: string }
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export type TransferEvent = TypedEvent<
  [string, string, BigNumber],
  { from: string; to: string; value: BigNumber }
>;

export type TransferEventFilter = TypedEventFilter<TransferEvent>;

export interface JShare extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: JShareInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    COMMUNITY_FUND_POOL_ALLOCATION(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    DEV_FUND_POOL_ALLOCATION(overrides?: CallOverrides): Promise<[BigNumber]>;

    FARMING_POOL_REWARD_ALLOCATION(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    VESTING_DURATION(overrides?: CallOverrides): Promise<[BigNumber]>;

    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    burn(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    burnFrom(
      account: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    claimRewards(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    communityFund(overrides?: CallOverrides): Promise<[string]>;

    communityFundLastClaimed(overrides?: CallOverrides): Promise<[BigNumber]>;

    communityFundRewardRate(overrides?: CallOverrides): Promise<[BigNumber]>;

    decimals(overrides?: CallOverrides): Promise<[number]>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    devFund(overrides?: CallOverrides): Promise<[string]>;

    devFundLastClaimed(overrides?: CallOverrides): Promise<[BigNumber]>;

    devFundRewardRate(overrides?: CallOverrides): Promise<[BigNumber]>;

    distributeReward(
      _farmingIncentiveFund: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    endTime(overrides?: CallOverrides): Promise<[BigNumber]>;

    governanceRecoverUnsupported(
      _token: string,
      _amount: BigNumberish,
      _to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isOperator(overrides?: CallOverrides): Promise<[boolean]>;

    name(overrides?: CallOverrides): Promise<[string]>;

    operator(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    rewardPoolDistributed(overrides?: CallOverrides): Promise<[boolean]>;

    setDevFund(
      _devFund: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setTreasuryFund(
      _communityFund: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    startTime(overrides?: CallOverrides): Promise<[BigNumber]>;

    symbol(overrides?: CallOverrides): Promise<[string]>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOperator(
      newOperator_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unclaimedDevFund(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { _pending: BigNumber }>;

    unclaimedTreasuryFund(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { _pending: BigNumber }>;
  };

  COMMUNITY_FUND_POOL_ALLOCATION(overrides?: CallOverrides): Promise<BigNumber>;

  DEV_FUND_POOL_ALLOCATION(overrides?: CallOverrides): Promise<BigNumber>;

  FARMING_POOL_REWARD_ALLOCATION(overrides?: CallOverrides): Promise<BigNumber>;

  VESTING_DURATION(overrides?: CallOverrides): Promise<BigNumber>;

  allowance(
    owner: string,
    spender: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  approve(
    spender: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

  burn(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  burnFrom(
    account: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  claimRewards(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  communityFund(overrides?: CallOverrides): Promise<string>;

  communityFundLastClaimed(overrides?: CallOverrides): Promise<BigNumber>;

  communityFundRewardRate(overrides?: CallOverrides): Promise<BigNumber>;

  decimals(overrides?: CallOverrides): Promise<number>;

  decreaseAllowance(
    spender: string,
    subtractedValue: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  devFund(overrides?: CallOverrides): Promise<string>;

  devFundLastClaimed(overrides?: CallOverrides): Promise<BigNumber>;

  devFundRewardRate(overrides?: CallOverrides): Promise<BigNumber>;

  distributeReward(
    _farmingIncentiveFund: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  endTime(overrides?: CallOverrides): Promise<BigNumber>;

  governanceRecoverUnsupported(
    _token: string,
    _amount: BigNumberish,
    _to: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  increaseAllowance(
    spender: string,
    addedValue: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isOperator(overrides?: CallOverrides): Promise<boolean>;

  name(overrides?: CallOverrides): Promise<string>;

  operator(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  rewardPoolDistributed(overrides?: CallOverrides): Promise<boolean>;

  setDevFund(
    _devFund: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setTreasuryFund(
    _communityFund: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  startTime(overrides?: CallOverrides): Promise<BigNumber>;

  symbol(overrides?: CallOverrides): Promise<string>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  transfer(
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferFrom(
    sender: string,
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOperator(
    newOperator_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unclaimedDevFund(overrides?: CallOverrides): Promise<BigNumber>;

  unclaimedTreasuryFund(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    COMMUNITY_FUND_POOL_ALLOCATION(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    DEV_FUND_POOL_ALLOCATION(overrides?: CallOverrides): Promise<BigNumber>;

    FARMING_POOL_REWARD_ALLOCATION(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    VESTING_DURATION(overrides?: CallOverrides): Promise<BigNumber>;

    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    burn(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    burnFrom(
      account: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    claimRewards(overrides?: CallOverrides): Promise<void>;

    communityFund(overrides?: CallOverrides): Promise<string>;

    communityFundLastClaimed(overrides?: CallOverrides): Promise<BigNumber>;

    communityFundRewardRate(overrides?: CallOverrides): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<number>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    devFund(overrides?: CallOverrides): Promise<string>;

    devFundLastClaimed(overrides?: CallOverrides): Promise<BigNumber>;

    devFundRewardRate(overrides?: CallOverrides): Promise<BigNumber>;

    distributeReward(
      _farmingIncentiveFund: string,
      overrides?: CallOverrides
    ): Promise<void>;

    endTime(overrides?: CallOverrides): Promise<BigNumber>;

    governanceRecoverUnsupported(
      _token: string,
      _amount: BigNumberish,
      _to: string,
      overrides?: CallOverrides
    ): Promise<void>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isOperator(overrides?: CallOverrides): Promise<boolean>;

    name(overrides?: CallOverrides): Promise<string>;

    operator(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    rewardPoolDistributed(overrides?: CallOverrides): Promise<boolean>;

    setDevFund(_devFund: string, overrides?: CallOverrides): Promise<void>;

    setTreasuryFund(
      _communityFund: string,
      overrides?: CallOverrides
    ): Promise<void>;

    startTime(overrides?: CallOverrides): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<string>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    transferOperator(
      newOperator_: string,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    unclaimedDevFund(overrides?: CallOverrides): Promise<BigNumber>;

    unclaimedTreasuryFund(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    "Approval(address,address,uint256)"(
      owner?: string | null,
      spender?: string | null,
      value?: null
    ): ApprovalEventFilter;
    Approval(
      owner?: string | null,
      spender?: string | null,
      value?: null
    ): ApprovalEventFilter;

    "OperatorTransferred(address,address)"(
      previousOperator?: string | null,
      newOperator?: string | null
    ): OperatorTransferredEventFilter;
    OperatorTransferred(
      previousOperator?: string | null,
      newOperator?: string | null
    ): OperatorTransferredEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;

    "Transfer(address,address,uint256)"(
      from?: string | null,
      to?: string | null,
      value?: null
    ): TransferEventFilter;
    Transfer(
      from?: string | null,
      to?: string | null,
      value?: null
    ): TransferEventFilter;
  };

  estimateGas: {
    COMMUNITY_FUND_POOL_ALLOCATION(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    DEV_FUND_POOL_ALLOCATION(overrides?: CallOverrides): Promise<BigNumber>;

    FARMING_POOL_REWARD_ALLOCATION(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    VESTING_DURATION(overrides?: CallOverrides): Promise<BigNumber>;

    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    burn(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    burnFrom(
      account: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    claimRewards(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    communityFund(overrides?: CallOverrides): Promise<BigNumber>;

    communityFundLastClaimed(overrides?: CallOverrides): Promise<BigNumber>;

    communityFundRewardRate(overrides?: CallOverrides): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<BigNumber>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    devFund(overrides?: CallOverrides): Promise<BigNumber>;

    devFundLastClaimed(overrides?: CallOverrides): Promise<BigNumber>;

    devFundRewardRate(overrides?: CallOverrides): Promise<BigNumber>;

    distributeReward(
      _farmingIncentiveFund: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    endTime(overrides?: CallOverrides): Promise<BigNumber>;

    governanceRecoverUnsupported(
      _token: string,
      _amount: BigNumberish,
      _to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isOperator(overrides?: CallOverrides): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    operator(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    rewardPoolDistributed(overrides?: CallOverrides): Promise<BigNumber>;

    setDevFund(
      _devFund: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setTreasuryFund(
      _communityFund: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    startTime(overrides?: CallOverrides): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOperator(
      newOperator_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unclaimedDevFund(overrides?: CallOverrides): Promise<BigNumber>;

    unclaimedTreasuryFund(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    COMMUNITY_FUND_POOL_ALLOCATION(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    DEV_FUND_POOL_ALLOCATION(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    FARMING_POOL_REWARD_ALLOCATION(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    VESTING_DURATION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    balanceOf(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    burn(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    burnFrom(
      account: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    claimRewards(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    communityFund(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    communityFundLastClaimed(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    communityFundRewardRate(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    devFund(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    devFundLastClaimed(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    devFundRewardRate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    distributeReward(
      _farmingIncentiveFund: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    endTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    governanceRecoverUnsupported(
      _token: string,
      _amount: BigNumberish,
      _to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isOperator(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    operator(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    rewardPoolDistributed(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setDevFund(
      _devFund: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setTreasuryFund(
      _communityFund: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    startTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOperator(
      newOperator_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unclaimedDevFund(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    unclaimedTreasuryFund(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
