import * as jspb from 'google-protobuf'

import * as sql_pb from './sql_pb';
import * as customer_pb from './customer_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class CustomerLevel extends jspb.Message {
  getLevelId(): string;
  setLevelId(value: string): CustomerLevel;

  getStoreId(): string;
  setStoreId(value: string): CustomerLevel;

  getStatus(): number;
  setStatus(value: number): CustomerLevel;

  getName(): google_protobuf_struct_pb.Value | undefined;
  setName(value?: google_protobuf_struct_pb.Value): CustomerLevel;
  hasName(): boolean;
  clearName(): CustomerLevel;

  getLevel(): number;
  setLevel(value: number): CustomerLevel;

  getPayOnce(): number;
  setPayOnce(value: number): CustomerLevel;

  getPayAmount(): number;
  setPayAmount(value: number): CustomerLevel;

  getPayTimes(): number;
  setPayTimes(value: number): CustomerLevel;

  getIsAuto(): boolean;
  setIsAuto(value: boolean): CustomerLevel;

  getPriority(): number;
  setPriority(value: number): CustomerLevel;

  getCustomerList(): Array<customer_pb.Customer>;
  setCustomerList(value: Array<customer_pb.Customer>): CustomerLevel;
  clearCustomerList(): CustomerLevel;
  addCustomer(value?: customer_pb.Customer, index?: number): customer_pb.Customer;

  getLabelxMap(): jspb.Map<string, number>;
  clearLabelxMap(): CustomerLevel;

  getOperator(): string;
  setOperator(value: string): CustomerLevel;

  getCreateAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateAt(value?: google_protobuf_timestamp_pb.Timestamp): CustomerLevel;
  hasCreateAt(): boolean;
  clearCreateAt(): CustomerLevel;

  getUpdateAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateAt(value?: google_protobuf_timestamp_pb.Timestamp): CustomerLevel;
  hasUpdateAt(): boolean;
  clearUpdateAt(): CustomerLevel;

  getColsList(): Array<string>;
  setColsList(value: Array<string>): CustomerLevel;
  clearColsList(): CustomerLevel;
  addCols(value: string, index?: number): CustomerLevel;

  getConditionList(): Array<sql_pb.Condition>;
  setConditionList(value: Array<sql_pb.Condition>): CustomerLevel;
  clearConditionList(): CustomerLevel;
  addCondition(value?: sql_pb.Condition, index?: number): sql_pb.Condition;

  getSelf(): google_protobuf_struct_pb.Struct | undefined;
  setSelf(value?: google_protobuf_struct_pb.Struct): CustomerLevel;
  hasSelf(): boolean;
  clearSelf(): CustomerLevel;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerLevel.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerLevel): CustomerLevel.AsObject;
  static serializeBinaryToWriter(message: CustomerLevel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerLevel;
  static deserializeBinaryFromReader(message: CustomerLevel, reader: jspb.BinaryReader): CustomerLevel;
}

export namespace CustomerLevel {
  export type AsObject = {
    levelId: string,
    storeId: string,
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

