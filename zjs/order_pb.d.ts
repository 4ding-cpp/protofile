import * as jspb from "google-protobuf"

import * as sql_pb from './sql_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class Order extends jspb.Message {
  getOrderId(): string;
  setOrderId(value: string): void;

  getStoreId(): string;
  setStoreId(value: string): void;

  getActivityId(): string;
  setActivityId(value: string): void;

  getCustomerId(): string;
  setCustomerId(value: string): void;

  getCarId(): string;
  setCarId(value: string): void;

  getDiscountId(): string;
  setDiscountId(value: string): void;

  getPayMethod(): number;
  setPayMethod(value: number): void;

  getDeliveryMethod(): number;
  setDeliveryMethod(value: number): void;

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

  getPayerEmail(): string;
  setPayerEmail(value: string): void;

  getPayerName(): string;
  setPayerName(value: string): void;

  getPayerPhone(): string;
  setPayerPhone(value: string): void;

  getPayerAddressCode(): string;
  setPayerAddressCode(value: string): void;

  getPayerAddressCity(): string;
  setPayerAddressCity(value: string): void;

  getPayerAddressTownship(): string;
  setPayerAddressTownship(value: string): void;

  getPayerAddressDetail(): string;
  setPayerAddressDetail(value: string): void;

  getReceiverName(): string;
  setReceiverName(value: string): void;

  getReceiverPhone(): string;
  setReceiverPhone(value: string): void;

  getReceiverAddressCode(): string;
  setReceiverAddressCode(value: string): void;

  getReceiverAddressCity(): string;
  setReceiverAddressCity(value: string): void;

  getReceiverAddressTownship(): string;
  setReceiverAddressTownship(value: string): void;

  getReceiverAddressDetail(): string;
  setReceiverAddressDetail(value: string): void;

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
    orderId: string,
    storeId: string,
    activityId: string,
    customerId: string,
    carId: string,
    discountId: string,
    payMethod: number,
    deliveryMethod: number,
    state: number,
    payState: number,
    deliveryState: number,
    comeFrom: string,
    count: number,
    amount: number,
    freight: number,
    reOrder: boolean,
    track: number,
    payerEmail: string,
    payerName: string,
    payerPhone: string,
    payerAddressCode: string,
    payerAddressCity: string,
    payerAddressTownship: string,
    payerAddressDetail: string,
    receiverName: string,
    receiverPhone: string,
    receiverAddressCode: string,
    receiverAddressCity: string,
    receiverAddressTownship: string,
    receiverAddressDetail: string,
    operator: string,
    createAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    colsList: Array<string>,
    conditionList: Array<sql_pb.Condition.AsObject>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class OrderD extends jspb.Message {
  getCustomerId(): number;
  setCustomerId(value: number): void;

  getPayerEmail(): string;
  setPayerEmail(value: string): void;

  getPayerName(): string;
  setPayerName(value: string): void;

  getPayerPhone(): string;
  setPayerPhone(value: string): void;

  getPayerAddressCode(): string;
  setPayerAddressCode(value: string): void;

  getPayerAddressCity(): string;
  setPayerAddressCity(value: string): void;

  getPayerAddressTownship(): string;
  setPayerAddressTownship(value: string): void;

  getPayerAddressDetail(): string;
  setPayerAddressDetail(value: string): void;

  getReceiverName(): string;
  setReceiverName(value: string): void;

  getReceiverPhone(): string;
  setReceiverPhone(value: string): void;

  getReceiverAddressCode(): string;
  setReceiverAddressCode(value: string): void;

  getReceiverAddressCity(): string;
  setReceiverAddressCity(value: string): void;

  getReceiverAddressTownship(): string;
  setReceiverAddressTownship(value: string): void;

  getReceiverAddressDetail(): string;
  setReceiverAddressDetail(value: string): void;

  getSelf(): google_protobuf_struct_pb.Struct | undefined;
  setSelf(value?: google_protobuf_struct_pb.Struct): void;
  hasSelf(): boolean;
  clearSelf(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderD.AsObject;
  static toObject(includeInstance: boolean, msg: OrderD): OrderD.AsObject;
  static serializeBinaryToWriter(message: OrderD, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderD;
  static deserializeBinaryFromReader(message: OrderD, reader: jspb.BinaryReader): OrderD;
}

export namespace OrderD {
  export type AsObject = {
    customerId: number,
    payerEmail: string,
    payerName: string,
    payerPhone: string,
    payerAddressCode: string,
    payerAddressCity: string,
    payerAddressTownship: string,
    payerAddressDetail: string,
    receiverName: string,
    receiverPhone: string,
    receiverAddressCode: string,
    receiverAddressCity: string,
    receiverAddressTownship: string,
    receiverAddressDetail: string,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

