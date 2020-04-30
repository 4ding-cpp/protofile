import * as jspb from "google-protobuf"

import * as sql_pb from './sql_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class Customer extends jspb.Message {
  getCustomerId(): string;
  setCustomerId(value: string): void;

  getStatus(): string;
  setStatus(value: string): void;

  getPhone(): string;
  setPhone(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  getName(): string;
  setName(value: string): void;

  getPayTimes(): number;
  setPayTimes(value: number): void;

  getPayAmount(): number;
  setPayAmount(value: number): void;

  getPassword(): string;
  setPassword(value: string): void;

  getComeFrom(): string;
  setComeFrom(value: string): void;

  getStoreInfoMap(): jspb.Map<string, CustomerStoreInfo>;
  clearStoreInfoMap(): void;

  getLabelxMap(): jspb.Map<string, number>;
  clearLabelxMap(): void;

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
  toObject(includeInstance?: boolean): Customer.AsObject;
  static toObject(includeInstance: boolean, msg: Customer): Customer.AsObject;
  static serializeBinaryToWriter(message: Customer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Customer;
  static deserializeBinaryFromReader(message: Customer, reader: jspb.BinaryReader): Customer;
}

export namespace Customer {
  export type AsObject = {
    customerId: string,
    status: string,
    phone: string,
    email: string,
    name: string,
    payTimes: number,
    payAmount: number,
    password: string,
    comeFrom: string,
    storeInfoMap: Array<[string, CustomerStoreInfo.AsObject]>,
    labelxMap: Array<[string, number]>,
    operator: string,
    createAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    colsList: Array<string>,
    conditionList: Array<sql_pb.Condition.AsObject>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class CustomerStoreInfo extends jspb.Message {
  getLevelId(): string;
  setLevelId(value: string): void;

  getIsReceive(): boolean;
  setIsReceive(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerStoreInfo.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerStoreInfo): CustomerStoreInfo.AsObject;
  static serializeBinaryToWriter(message: CustomerStoreInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerStoreInfo;
  static deserializeBinaryFromReader(message: CustomerStoreInfo, reader: jspb.BinaryReader): CustomerStoreInfo;
}

export namespace CustomerStoreInfo {
  export type AsObject = {
    levelId: string,
    isReceive: boolean,
  }
}

