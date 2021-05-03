import * as jspb from "google-protobuf"

import * as sql_pb from './sql_pb';
import * as product$goods_pb from './product-goods_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class Car extends jspb.Message {
  getCarId(): string;
  setCarId(value: string): void;

  getStoreId(): string;
  setStoreId(value: string): void;

  getSalesId(): string;
  setSalesId(value: string): void;

  getCustomerId(): string;
  setCustomerId(value: string): void;

  getCouponId(): string;
  setCouponId(value: string): void;

  getPromoteId(): string;
  setPromoteId(value: string): void;

  getState(): number;
  setState(value: number): void;

  getBuyList(): Array<Buy>;
  setBuyList(value: Array<Buy>): void;
  clearBuyList(): void;
  addBuy(value?: Buy, index?: number): Buy;

  getActivityList(): Array<product$goods_pb.ActivityGoods>;
  setActivityList(value: Array<product$goods_pb.ActivityGoods>): void;
  clearActivityList(): void;
  addActivity(value?: product$goods_pb.ActivityGoods, index?: number): product$goods_pb.ActivityGoods;

  getGoodsList(): Array<product$goods_pb.ProductGoods>;
  setGoodsList(value: Array<product$goods_pb.ProductGoods>): void;
  clearGoodsList(): void;
  addGoods(value?: product$goods_pb.ProductGoods, index?: number): product$goods_pb.ProductGoods;

  getIsFreeShipping(): boolean;
  setIsFreeShipping(value: boolean): void;

  getAmount(): number;
  setAmount(value: number): void;

  getPrice(): number;
  setPrice(value: number): void;

  getDiscount(): number;
  setDiscount(value: number): void;

  getOperator(): string;
  setOperator(value: string): void;

  getCreateAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateAt(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasCreateAt(): boolean;
  clearCreateAt(): void;

  getUpdateAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateAt(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasUpdateAt(): boolean;
  clearUpdateAt(): void;

  getColsList(): Array<string>;
  setColsList(value: Array<string>): void;
  clearColsList(): void;
  addCols(value: string, index?: number): void;

  getConditionList(): Array<sql_pb.Condition>;
  setConditionList(value: Array<sql_pb.Condition>): void;
  clearConditionList(): void;
  addCondition(value?: sql_pb.Condition, index?: number): sql_pb.Condition;

  getSelf(): google_protobuf_struct_pb.Struct | undefined;
  setSelf(value?: google_protobuf_struct_pb.Struct): void;
  hasSelf(): boolean;
  clearSelf(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Car.AsObject;
  static toObject(includeInstance: boolean, msg: Car): Car.AsObject;
  static serializeBinaryToWriter(message: Car, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Car;
  static deserializeBinaryFromReader(message: Car, reader: jspb.BinaryReader): Car;
}

export namespace Car {
  export type AsObject = {
    carId: string,
    storeId: string,
    salesId: string,
    customerId: string,
    couponId: string,
    promoteId: string,
    state: number,
    buyList: Array<Buy.AsObject>,
    activityList: Array<product$goods_pb.ActivityGoods.AsObject>,
    goodsList: Array<product$goods_pb.ProductGoods.AsObject>,
    isFreeShipping: boolean,
    amount: number,
    price: number,
    discount: number,
    operator: string,
    createAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    colsList: Array<string>,
    conditionList: Array<sql_pb.Condition.AsObject>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class Buy extends jspb.Message {
  getShellId(): number;
  setShellId(value: number): void;

  getSku(): string;
  setSku(value: string): void;

  getAmount(): number;
  setAmount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Buy.AsObject;
  static toObject(includeInstance: boolean, msg: Buy): Buy.AsObject;
  static serializeBinaryToWriter(message: Buy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Buy;
  static deserializeBinaryFromReader(message: Buy, reader: jspb.BinaryReader): Buy;
}

export namespace Buy {
  export type AsObject = {
    shellId: number,
    sku: string,
    amount: number,
  }
}

