import * as jspb from "google-protobuf"

import * as sql_pb from './sql_pb';
import * as customer_pb from './customer_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class UserLevel extends jspb.Message {
  getLevelId(): string;
  setLevelId(value: string): void;

  getGroupId(): string;
  setGroupId(value: string): void;

  getStatus(): number;
  setStatus(value: number): void;

  getName(): google_protobuf_struct_pb.Value | undefined;
  setName(value?: google_protobuf_struct_pb.Value): void;
  hasName(): boolean;
  clearName(): void;

  getLevel(): number;
  setLevel(value: number): void;

  getPayOnce(): number;
  setPayOnce(value: number): void;

  getPayAmount(): number;
  setPayAmount(value: number): void;

  getPayTimes(): number;
  setPayTimes(value: number): void;

  getIsAuto(): boolean;
  setIsAuto(value: boolean): void;

  getPriority(): number;
  setPriority(value: number): void;

  getCustomerList(): Array<customer_pb.Customer>;
  setCustomerList(value: Array<customer_pb.Customer>): void;
  clearCustomerList(): void;
  addCustomer(value?: customer_pb.Customer, index?: number): customer_pb.Customer;

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
  toObject(includeInstance?: boolean): UserLevel.AsObject;
  static toObject(includeInstance: boolean, msg: UserLevel): UserLevel.AsObject;
  static serializeBinaryToWriter(message: UserLevel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserLevel;
  static deserializeBinaryFromReader(message: UserLevel, reader: jspb.BinaryReader): UserLevel;
}

export namespace UserLevel {
  export type AsObject = {
    levelId: string,
    groupId: string,
    status: number,
    name?: google_protobuf_struct_pb.Value.AsObject,
    level: number,
    payOnce: number,
    payAmount: number,
    payTimes: number,
    isAuto: boolean,
    priority: number,
    customerList: Array<customer_pb.Customer.AsObject>,
    labelxMap: Array<[string, number]>,
    operator: string,
    createAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    colsList: Array<string>,
    conditionList: Array<sql_pb.Condition.AsObject>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

