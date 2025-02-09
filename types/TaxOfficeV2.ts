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
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface TaxOfficeV2Interface extends utils.Interface {
  functions: {
    "addLiquidityETHTaxFree(uint256,uint256,uint256)": FunctionFragment;
    "addLiquidityTaxFree(address,uint256,uint256,uint256,uint256)": FunctionFragment;
    "disableAutoCalculateTax()": FunctionFragment;
    "enableAutoCalculateTax()": FunctionFragment;
    "excludeAddressFromTax(address)": FunctionFragment;
    "includeAddressInTax(address)": FunctionFragment;
    "isOperator()": FunctionFragment;
    "jira()": FunctionFragment;
    "operator()": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setBurnThreshold(uint256)": FunctionFragment;
    "setTaxCollectorAddress(address)": FunctionFragment;
    "setTaxExclusionForAddress(address,bool)": FunctionFragment;
    "setTaxRate(uint256)": FunctionFragment;
    "setTaxTiersRate(uint8,uint256)": FunctionFragment;
    "setTaxTiersTwap(uint8,uint256)": FunctionFragment;
    "setTaxableJiraOracle(address)": FunctionFragment;
    "taxExclusionEnabled(address)": FunctionFragment;
    "taxFreeTransferFrom(address,address,uint256)": FunctionFragment;
    "taxRate()": FunctionFragment;
    "transferOperator(address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "transferTaxOffice(address)": FunctionFragment;
    "uniRouter()": FunctionFragment;
    "weth()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addLiquidityETHTaxFree",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "addLiquidityTaxFree",
    values: [string, BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "disableAutoCalculateTax",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "enableAutoCalculateTax",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "excludeAddressFromTax",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "includeAddressInTax",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "isOperator",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "jira", values?: undefined): string;
  encodeFunctionData(functionFragment: "operator", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setBurnThreshold",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setTaxCollectorAddress",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setTaxExclusionForAddress",
    values: [string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setTaxRate",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setTaxTiersRate",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setTaxTiersTwap",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setTaxableJiraOracle",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "taxExclusionEnabled",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "taxFreeTransferFrom",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "taxRate", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transferOperator",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferTaxOffice",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "uniRouter", values?: undefined): string;
  encodeFunctionData(functionFragment: "weth", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "addLiquidityETHTaxFree",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addLiquidityTaxFree",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "disableAutoCalculateTax",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "enableAutoCalculateTax",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "excludeAddressFromTax",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "includeAddressInTax",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isOperator", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "jira", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "operator", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setBurnThreshold",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTaxCollectorAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTaxExclusionForAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setTaxRate", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setTaxTiersRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTaxTiersTwap",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTaxableJiraOracle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "taxExclusionEnabled",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "taxFreeTransferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "taxRate", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOperator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferTaxOffice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "uniRouter", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "weth", data: BytesLike): Result;

  events: {
    "OperatorTransferred(address,address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OperatorTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

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

export interface TaxOfficeV2 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TaxOfficeV2Interface;

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
    addLiquidityETHTaxFree(
      amtJira: BigNumberish,
      amtJiraMin: BigNumberish,
      amtEthMin: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addLiquidityTaxFree(
      token: string,
      amtJira: BigNumberish,
      amtToken: BigNumberish,
      amtJiraMin: BigNumberish,
      amtTokenMin: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    disableAutoCalculateTax(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    enableAutoCalculateTax(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    excludeAddressFromTax(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    includeAddressInTax(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isOperator(overrides?: CallOverrides): Promise<[boolean]>;

    jira(overrides?: CallOverrides): Promise<[string]>;

    operator(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setBurnThreshold(
      _burnThreshold: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setTaxCollectorAddress(
      _taxCollectorAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setTaxExclusionForAddress(
      _address: string,
      _excluded: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setTaxRate(
      _taxRate: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setTaxTiersRate(
      _index: BigNumberish,
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setTaxTiersTwap(
      _index: BigNumberish,
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setTaxableJiraOracle(
      _jiraOracle: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    taxExclusionEnabled(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    taxFreeTransferFrom(
      _sender: string,
      _recipient: string,
      _amt: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    taxRate(
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

    transferTaxOffice(
      _newTaxOffice: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    uniRouter(overrides?: CallOverrides): Promise<[string]>;

    weth(overrides?: CallOverrides): Promise<[string]>;
  };

  addLiquidityETHTaxFree(
    amtJira: BigNumberish,
    amtJiraMin: BigNumberish,
    amtEthMin: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addLiquidityTaxFree(
    token: string,
    amtJira: BigNumberish,
    amtToken: BigNumberish,
    amtJiraMin: BigNumberish,
    amtTokenMin: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  disableAutoCalculateTax(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  enableAutoCalculateTax(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  excludeAddressFromTax(
    _address: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  includeAddressInTax(
    _address: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isOperator(overrides?: CallOverrides): Promise<boolean>;

  jira(overrides?: CallOverrides): Promise<string>;

  operator(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setBurnThreshold(
    _burnThreshold: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setTaxCollectorAddress(
    _taxCollectorAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setTaxExclusionForAddress(
    _address: string,
    _excluded: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setTaxRate(
    _taxRate: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setTaxTiersRate(
    _index: BigNumberish,
    _value: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setTaxTiersTwap(
    _index: BigNumberish,
    _value: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setTaxableJiraOracle(
    _jiraOracle: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  taxExclusionEnabled(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  taxFreeTransferFrom(
    _sender: string,
    _recipient: string,
    _amt: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  taxRate(
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

  transferTaxOffice(
    _newTaxOffice: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  uniRouter(overrides?: CallOverrides): Promise<string>;

  weth(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    addLiquidityETHTaxFree(
      amtJira: BigNumberish,
      amtJiraMin: BigNumberish,
      amtEthMin: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber, BigNumber]>;

    addLiquidityTaxFree(
      token: string,
      amtJira: BigNumberish,
      amtToken: BigNumberish,
      amtJiraMin: BigNumberish,
      amtTokenMin: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber, BigNumber]>;

    disableAutoCalculateTax(overrides?: CallOverrides): Promise<void>;

    enableAutoCalculateTax(overrides?: CallOverrides): Promise<void>;

    excludeAddressFromTax(
      _address: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    includeAddressInTax(
      _address: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isOperator(overrides?: CallOverrides): Promise<boolean>;

    jira(overrides?: CallOverrides): Promise<string>;

    operator(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setBurnThreshold(
      _burnThreshold: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setTaxCollectorAddress(
      _taxCollectorAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setTaxExclusionForAddress(
      _address: string,
      _excluded: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    setTaxRate(
      _taxRate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setTaxTiersRate(
      _index: BigNumberish,
      _value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    setTaxTiersTwap(
      _index: BigNumberish,
      _value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    setTaxableJiraOracle(
      _jiraOracle: string,
      overrides?: CallOverrides
    ): Promise<void>;

    taxExclusionEnabled(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    taxFreeTransferFrom(
      _sender: string,
      _recipient: string,
      _amt: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    taxRate(overrides?: CallOverrides): Promise<BigNumber>;

    transferOperator(
      newOperator_: string,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    transferTaxOffice(
      _newTaxOffice: string,
      overrides?: CallOverrides
    ): Promise<void>;

    uniRouter(overrides?: CallOverrides): Promise<string>;

    weth(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
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
  };

  estimateGas: {
    addLiquidityETHTaxFree(
      amtJira: BigNumberish,
      amtJiraMin: BigNumberish,
      amtEthMin: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addLiquidityTaxFree(
      token: string,
      amtJira: BigNumberish,
      amtToken: BigNumberish,
      amtJiraMin: BigNumberish,
      amtTokenMin: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    disableAutoCalculateTax(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    enableAutoCalculateTax(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    excludeAddressFromTax(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    includeAddressInTax(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isOperator(overrides?: CallOverrides): Promise<BigNumber>;

    jira(overrides?: CallOverrides): Promise<BigNumber>;

    operator(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setBurnThreshold(
      _burnThreshold: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setTaxCollectorAddress(
      _taxCollectorAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setTaxExclusionForAddress(
      _address: string,
      _excluded: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setTaxRate(
      _taxRate: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setTaxTiersRate(
      _index: BigNumberish,
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setTaxTiersTwap(
      _index: BigNumberish,
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setTaxableJiraOracle(
      _jiraOracle: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    taxExclusionEnabled(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    taxFreeTransferFrom(
      _sender: string,
      _recipient: string,
      _amt: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    taxRate(
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

    transferTaxOffice(
      _newTaxOffice: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    uniRouter(overrides?: CallOverrides): Promise<BigNumber>;

    weth(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    addLiquidityETHTaxFree(
      amtJira: BigNumberish,
      amtJiraMin: BigNumberish,
      amtEthMin: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addLiquidityTaxFree(
      token: string,
      amtJira: BigNumberish,
      amtToken: BigNumberish,
      amtJiraMin: BigNumberish,
      amtTokenMin: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    disableAutoCalculateTax(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    enableAutoCalculateTax(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    excludeAddressFromTax(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    includeAddressInTax(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isOperator(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    jira(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    operator(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setBurnThreshold(
      _burnThreshold: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setTaxCollectorAddress(
      _taxCollectorAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setTaxExclusionForAddress(
      _address: string,
      _excluded: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setTaxRate(
      _taxRate: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setTaxTiersRate(
      _index: BigNumberish,
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setTaxTiersTwap(
      _index: BigNumberish,
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setTaxableJiraOracle(
      _jiraOracle: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    taxExclusionEnabled(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    taxFreeTransferFrom(
      _sender: string,
      _recipient: string,
      _amt: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    taxRate(
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

    transferTaxOffice(
      _newTaxOffice: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    uniRouter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    weth(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
