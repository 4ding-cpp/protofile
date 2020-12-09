import * as jspb from "google-protobuf"

import * as sql_pb from './sql_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class Sales extends jspb.Message {
  getSalesId(): string;
  setSalesId(value: string): void;

  getBusinessId(): string;
  setBusinessId(value: string): void;

  getStoreId(): string;
  setStoreId(value: string): void;

  getStatus(): number;
  setStatus(value: number): void;

  getName(): string;
  setName(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  getPhone(): string;
  setPhone(value: string): void;

  getUrn(): string;
  setUrn(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  getOtpToken(): string;
  setOtpToken(value: string): void;

  getOtpCode(): string;
  setOtpCode(value: string): void;

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
    otpToken: string,
    otpCode: string,
    labelxMap: Array<[string, number]>,
    operator: string,
    createAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    colsList: Array<string>,
    conditionList: Array<sql_pb.Condition.AsObject>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

