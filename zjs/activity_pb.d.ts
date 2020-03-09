import * as jspb from "google-protobuf"

import * as sql_pb from './sql_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class Activity extends jspb.Message {
  getActivityId(): string;
  setActivityId(value: string): void;

  getStoreId(): string;
  setStoreId(value: string): void;

  getBeginAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setBeginAt(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasBeginAt(): boolean;
  clearBeginAt(): void;

  getEndAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndAt(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasEndAt(): boolean;
  clearEndAt(): void;

  getName(): google_protobuf_struct_pb.Value | undefined;
  setName(value?: google_protobuf_struct_pb.Value): void;
  hasName(): boolean;
  clearName(): void;

  getType(): number;
  setType(value: number): void;

  getItem(): number;
  setItem(value: number): void;

  getCond(): number;
  setCond(value: number): void;

  getCondV(): number;
  setCondV(value: number): void;

  getRepeated(): boolean;
  setRepeated(value: boolean): void;

  getActive(): number;
  setActive(value: number): void;

  getActiveV(): number;
  setActiveV(value: number): void;

  getValue(): number;
  setValue(value: number): void;

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
  toObject(includeInstance?: boolean): Activity.AsObject;
  static toObject(includeInstance: boolean, msg: Activity): Activity.AsObject;
  static serializeBinaryToWriter(message: Activity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Activity;
  static deserializeBinaryFromReader(message: Activity, reader: jspb.BinaryReader): Activity;
}

export namespace Activity {
  export type AsObject = {
    activityId: string,
    storeId: string,
    beginAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    name?: google_protobuf_struct_pb.Value.AsObject,
    type: number,
    item: number,
    cond: number,
    condV: number,
    repeated: boolean,
    active: number,
    activeV: number,
    value: number,
    operator: string,
    createAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    colsList: Array<string>,
    conditionList: Array<sql_pb.Condition.AsObject>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class ActivityProduct extends jspb.Message {
  getActivityId(): string;
  setActivityId(value: string): void;

  getProductIdList(): Array<string>;
  setProductIdList(value: Array<string>): void;
  clearProductIdList(): void;
  addProductId(value: string, index?: number): void;

  getSelf(): google_protobuf_struct_pb.Struct | undefined;
  setSelf(value?: google_protobuf_struct_pb.Struct): void;
  hasSelf(): boolean;
  clearSelf(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActivityProduct.AsObject;
  static toObject(includeInstance: boolean, msg: ActivityProduct): ActivityProduct.AsObject;
  static serializeBinaryToWriter(message: ActivityProduct, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActivityProduct;
  static deserializeBinaryFromReader(message: ActivityProduct, reader: jspb.BinaryReader): ActivityProduct;
}

export namespace ActivityProduct {
  export type AsObject = {
    activityId: string,
    productIdList: Array<string>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class Discount extends jspb.Message {
  getDiscountId(): string;
  setDiscountId(value: string): void;

  getStoreId(): string;
  setStoreId(value: string): void;

  getLevelId(): string;
  setLevelId(value: string): void;

  getBeginAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setBeginAt(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasBeginAt(): boolean;
  clearBeginAt(): void;

  getEndAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndAt(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasEndAt(): boolean;
  clearEndAt(): void;

  getName(): google_protobuf_struct_pb.Value | undefined;
  setName(value?: google_protobuf_struct_pb.Value): void;
  hasName(): boolean;
  clearName(): void;

  getCond(): number;
  setCond(value: number): void;

  getCondV(): number;
  setCondV(value: number): void;

  getActive(): number;
  setActive(value: number): void;

  getActiveV(): number;
  setActiveV(value: number): void;

  getAutoSet(): boolean;
  setAutoSet(value: boolean): void;

  getSetCode(): string;
  setSetCode(value: string): void;

  getTimes(): number;
  setTimes(value: number): void;

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
  toObject(includeInstance?: boolean): Discount.AsObject;
  static toObject(includeInstance: boolean, msg: Discount): Discount.AsObject;
  static serializeBinaryToWriter(message: Discount, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Discount;
  static deserializeBinaryFromReader(message: Discount, reader: jspb.BinaryReader): Discount;
}

export namespace Discount {
  export type AsObject = {
    discountId: string,
    storeId: string,
    levelId: string,
    beginAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    name?: google_protobuf_struct_pb.Value.AsObject,
    cond: number,
    condV: number,
    active: number,
    activeV: number,
    autoSet: boolean,
    setCode: string,
    times: number,
    operator: string,
    createAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    colsList: Array<string>,
    conditionList: Array<sql_pb.Condition.AsObject>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class DiscountMap extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getDiscountId(): string;
  setDiscountId(value: string): void;

  getCustomerId(): string;
  setCustomerId(value: string): void;

  getCode(): string;
  setCode(value: string): void;

  getSelf(): google_protobuf_struct_pb.Struct | undefined;
  setSelf(value?: google_protobuf_struct_pb.Struct): void;
  hasSelf(): boolean;
  clearSelf(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DiscountMap.AsObject;
  static toObject(includeInstance: boolean, msg: DiscountMap): DiscountMap.AsObject;
  static serializeBinaryToWriter(message: DiscountMap, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DiscountMap;
  static deserializeBinaryFromReader(message: DiscountMap, reader: jspb.BinaryReader): DiscountMap;
}

export namespace DiscountMap {
  export type AsObject = {
    id: number,
    discountId: string,
    customerId: string,
    code: string,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

