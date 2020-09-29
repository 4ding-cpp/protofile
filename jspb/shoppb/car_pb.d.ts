import * as jspb from 'google-protobuf'

import * as sql_pb from './sql_pb';
import * as product$goods_pb from './product-goods_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class Car extends jspb.Message {
  getCarId(): string;
  setCarId(value: string): Car;

  getStoreId(): string;
  setStoreId(value: string): Car;

  getCustomerId(): string;
  setCustomerId(value: string): Car;

  getCouponId(): string;
  setCouponId(value: string): Car;

  getState(): number;
  setState(value: number): Car;

  getBuyList(): Array<Buy>;
  setBuyList(value: Array<Buy>): Car;
  clearBuyList(): Car;
  addBuy(value?: Buy, index?: number): Buy;

  getActivityList(): Array<product$goods_pb.ActivityGoods>;
  setActivityList(value: Array<product$goods_pb.ActivityGoods>): Car;
  clearActivityList(): Car;
  addActivity(value?: product$goods_pb.ActivityGoods, index?: number): product$goods_pb.ActivityGoods;

  getGoodsList(): Array<product$goods_pb.ProductGoods>;
  setGoodsList(value: Array<product$goods_pb.ProductGoods>): Car;
  clearGoodsList(): Car;
  addGoods(value?: product$goods_pb.ProductGoods, index?: number): product$goods_pb.ProductGoods;

  getIsFreeShipping(): boolean;
  setIsFreeShipping(value: boolean): Car;

  getAmount(): number;
  setAmount(value: number): Car;

  getPrice(): number;
  setPrice(value: number): Car;

  getDiscount(): number;
  setDiscount(value: number): Car;

  getOperator(): string;
  setOperator(value: string): Car;

  getCreateAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateAt(value?: google_protobuf_timestamp_pb.Timestamp): Car;
  hasCreateAt(): boolean;
  clearCreateAt(): Car;

  getUpdateAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateAt(value?: google_protobuf_timestamp_pb.Timestamp): Car;
  hasUpdateAt(): boolean;
  clearUpdateAt(): Car;

  getColsList(): Array<string>;
  setColsList(value: Array<string>): Car;
  clearColsList(): Car;
  addCols(value: string, index?: number): Car;

  getConditionList(): Array<sql_pb.Condition>;
  setConditionList(value: Array<sql_pb.Condition>): Car;
  clearConditionList(): Car;
  addCondition(value?: sql_pb.Condition, index?: number): sql_pb.Condition;

  getSelf(): google_protobuf_struct_pb.Struct | undefined;
  setSelf(value?: google_protobuf_struct_pb.Struct): Car;
  hasSelf(): boolean;
  clearSelf(): Car;

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
    customerId: string,
    couponId: string,
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
  setShellId(value: number): Buy;

  getSku(): string;
  setSku(value: string): Buy;

  getAmount(): number;
  setAmount(value: number): Buy;

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

