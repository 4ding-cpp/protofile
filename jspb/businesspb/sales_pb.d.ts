import * as jspb from 'google-protobuf'

import * as sql_pb from './sql_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class Sales extends jspb.Message {
  getSalesId(): string;
  setSalesId(value: string): Sales;

  getBusinessId(): string;
  setBusinessId(value: string): Sales;

  getStoreId(): string;
  setStoreId(value: string): Sales;

  getStatus(): number;
  setStatus(value: number): Sales;

  getName(): string;
  setName(value: string): Sales;

  getEmail(): string;
  setEmail(value: string): Sales;

  getPhone(): string;
  setPhone(value: string): Sales;

  getUrn(): string;
  setUrn(value: string): Sales;

  getPassword(): string;
  setPassword(value: string): Sales;

  getLabelxMap(): jspb.Map<string, number>;
  clearLabelxMap(): Sales;

  getOperator(): string;
  setOperator(value: string): Sales;

  getCreateAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateAt(value?: google_protobuf_timestamp_pb.Timestamp): Sales;
  hasCreateAt(): boolean;
  clearCreateAt(): Sales;

  getUpdateAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateAt(value?: google_protobuf_timestamp_pb.Timestamp): Sales;
  hasUpdateAt(): boolean;
  clearUpdateAt(): Sales;

  getColsList(): Array<string>;
  setColsList(value: Array<string>): Sales;
  clearColsList(): Sales;
  addCols(value: string, index?: number): Sales;

  getConditionList(): Array<sql_pb.Condition>;
  setConditionList(value: Array<sql_pb.Condition>): Sales;
  clearConditionList(): Sales;
  addCondition(value?: sql_pb.Condition, index?: number): sql_pb.Condition;

  getSelf(): google_protobuf_struct_pb.Struct | undefined;
  setSelf(value?: google_protobuf_struct_pb.Struct): Sales;
  hasSelf(): boolean;
  clearSelf(): Sales;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Sales.AsObject;
  static toObject(includeInstance: boolean, msg: Sales): Sales.AsObject;
  static serializeBinaryToWriter(message: Sales, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Sales;
  static deserializeBinaryFromReader(message: Sales, reader: jspb.BinaryReader): Sales;
}

export namespace Sales {
  export type AsObject = {
    salesId: string,
    businessId: string,
    storeId: string,
    status: number,
    name: string,
    email: string,
    phone: string,
    urn: string,
    password: string,
    labelxMap: Array<[string, number]>,
    operator: string,
    createAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    colsList: Array<string>,
    conditionList: Array<sql_pb.Condition.AsObject>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

