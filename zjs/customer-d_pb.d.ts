import * as jspb from "google-protobuf"

import * as sql_pb from './sql_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class CustomerD extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getStore(): number;
  setStore(value: number): void;

  getCustomerId(): number;
  setCustomerId(value: number): void;

  getLevelId(): number;
  setLevelId(value: number): void;

  getReceiveNews(): boolean;
  setReceiveNews(value: boolean): void;

  getName(): string;
  setName(value: string): void;

  getPhone(): string;
  setPhone(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  getStatus(): string;
  setStatus(value: string): void;

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
  toObject(includeInstance?: boolean): CustomerD.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerD): CustomerD.AsObject;
  static serializeBinaryToWriter(message: CustomerD, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerD;
  static deserializeBinaryFromReader(message: CustomerD, reader: jspb.BinaryReader): CustomerD;
}

export namespace CustomerD {
  export type AsObject = {
    id: number,
    store: number,
    customerId: number,
    levelId: number,
    receiveNews: boolean,
    name: string,
    phone: string,
    email: string,
    password: string,
    status: string,
    operator: string,
    createAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    colsList: Array<string>,
    conditionList: Array<sql_pb.Condition.AsObject>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class CustomerLevel extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getStore(): number;
  setStore(value: number): void;

  getStatus(): number;
  setStatus(value: number): void;

  getName(): string;
  setName(value: string): void;

  getPayAmount(): number;
  setPayAmount(value: number): void;

  getPayTimes(): number;
  setPayTimes(value: number): void;

  getAuto(): boolean;
  setAuto(value: boolean): void;

  getPriority(): number;
  setPriority(value: number): void;

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
  toObject(includeInstance?: boolean): CustomerLevel.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerLevel): CustomerLevel.AsObject;
  static serializeBinaryToWriter(message: CustomerLevel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerLevel;
  static deserializeBinaryFromReader(message: CustomerLevel, reader: jspb.BinaryReader): CustomerLevel;
}

export namespace CustomerLevel {
  export type AsObject = {
    id: number,
    store: number,
    status: number,
    name: string,
    payAmount: number,
    payTimes: number,
    auto: boolean,
    priority: number,
    operator: string,
    createAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    colsList: Array<string>,
    conditionList: Array<sql_pb.Condition.AsObject>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

