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
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface ITreasuryInterface extends utils.Interface {
  functions: {
    "buyBonds(uint256,uint256)": FunctionFragment;
    "epoch()": FunctionFragment;
    "getJiraPrice()": FunctionFragment;
    "nextEpochPoint()": FunctionFragment;
    "redeemBonds(uint256,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "buyBonds",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "epoch", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getJiraPrice",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "nextEpochPoint",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "redeemBonds",
    values: [BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "buyBonds", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "epoch", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getJiraPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "nextEpochPoint",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "redeemBonds",
    data: BytesLike
  ): Result;

  events: {};
}

export interface ITreasury extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ITreasuryInterface;

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
    buyBonds(
      amount: BigNumberish,
      targetPrice: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    epoch(overrides?: CallOverrides): Promise<[BigNumber]>;

    getJiraPrice(overrides?: CallOverrides): Promise<[BigNumber]>;

    nextEpochPoint(overrides?: CallOverrides): Promise<[BigNumber]>;

    redeemBonds(
      amount: BigNumberish,
      targetPrice: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  buyBonds(
    amount: BigNumberish,
    targetPrice: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  epoch(overrides?: CallOverrides): Promise<BigNumber>;

  getJiraPrice(overrides?: CallOverrides): Promise<BigNumber>;

  nextEpochPoint(overrides?: CallOverrides): Promise<BigNumber>;

  redeemBonds(
    amount: BigNumberish,
    targetPrice: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    buyBonds(
      amount: BigNumberish,
      targetPrice: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    epoch(overrides?: CallOverrides): Promise<BigNumber>;

    getJiraPrice(overrides?: CallOverrides): Promise<BigNumber>;

    nextEpochPoint(overrides?: CallOverrides): Promise<BigNumber>;

    redeemBonds(
      amount: BigNumberish,
      targetPrice: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    buyBonds(
      amount: BigNumberish,
      targetPrice: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    epoch(overrides?: CallOverrides): Promise<BigNumber>;

    getJiraPrice(overrides?: CallOverrides): Promise<BigNumber>;

    nextEpochPoint(overrides?: CallOverrides): Promise<BigNumber>;

    redeemBonds(
      amount: BigNumberish,
      targetPrice: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    buyBonds(
      amount: BigNumberish,
      targetPrice: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    epoch(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getJiraPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nextEpochPoint(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    redeemBonds(
      amount: BigNumberish,
      targetPrice: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
