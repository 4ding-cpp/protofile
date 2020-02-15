import * as jspb from "google-protobuf"

import * as address_pb from './address_pb';
import * as stack_pb from './stack_pb';
import * as sql_pb from './sql_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class OrderNew extends jspb.Message {
  getStore(): number;
  setStore(value: number): void;

  getCustomerId(): number;
  setCustomerId(value: number): void;

  getPayMethod(): string;
  setPayMethod(value: string): void;

  getDeliveryMethod(): string;
  setDeliveryMethod(value: string): void;

  getComeFrom(): string;
  setComeFrom(value: string): void;

  getAddress(): address_pb.Address | undefined;
  setAddress(value?: address_pb.Address): void;
  hasAddress(): boolean;
  clearAddress(): void;

  getStackList(): Array<stack_pb.Stack>;
  setStackList(value: Array<stack_pb.Stack>): void;
  clearStackList(): void;
  addStack(value?: stack_pb.Stack, index?: number): stack_pb.Stack;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderNew.AsObject;
  static toObject(includeInstance: boolean, msg: OrderNew): OrderNew.AsObject;
  static serializeBinaryToWriter(message: OrderNew, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderNew;
  static deserializeBinaryFromReader(message: OrderNew, reader: jspb.BinaryReader): OrderNew;
}

export namespace OrderNew {
  export type AsObject = {
    store: number,
    customerId: number,
    payMethod: string,
    deliveryMethod: string,
    comeFrom: string,
    address?: address_pb.Address.AsObject,
    stackList: Array<stack_pb.Stack.AsObject>,
  }
}

export class Order extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getCode(): string;
  setCode(value: string): void;

  getStore(): number;
  setStore(value: number): void;

  getActivityId(): number;
  setActivityId(value: number): void;

  getAddressId(): number;
  setAddressId(value: number): void;

  getCustomerId(): number;
  setCustomerId(value: number): void;

  getSalerId(): number;
  setSalerId(value: number): void;

  getPayMethod(): string;
  setPayMethod(value: string): void;

  getDeliveryMethod(): string;
  setDeliveryMethod(value: string): void;

  getState(): number;
  setState(value: number): void;

  getPayState(): number;
  setPayState(value: number): void;

  getDeliveryState(): number;
  setDeliveryState(value: number): void;

  getComeFrom(): string;
  setComeFrom(value: string): void;

  getCount(): number;
  setCount(value: number): void;

  getAmount(): number;
  setAmount(value: number): void;

  getFreight(): number;
  setFreight(value: number): void;

  getReOrder(): boolean;
  setReOrder(value: boolean): void;

  getTrack(): number;
  setTrack(value: number): void;

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
  toObject(includeInstance?: boolean): Order.AsObject;
  static toObject(includeInstance: boolean, msg: Order): Order.AsObject;
  static serializeBinaryToWriter(message: Order, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Order;
  static deserializeBinaryFromReader(message: Order, reader: jspb.BinaryReader): Order;
}

export namespace Order {
  export type AsObject = {
    id: number,
    code: string,
    store: number,
    activityId: number,
    addressId: number,
    customerId: number,
    salerId: number,
    payMethod: string,
    deliveryMethod: string,
    state: number,
    payState: number,
    deliveryState: number,
    comeFrom: string,
    count: number,
    amount: number,
    freight: number,
    reOrder: boolean,
    track: number,
    operator: string,
    createAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    colsList: Array<string>,
    conditionList: Array<sql_pb.Condition.AsObject>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

