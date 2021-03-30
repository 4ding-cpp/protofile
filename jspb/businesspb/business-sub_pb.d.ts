import * as jspb from "google-protobuf"

import * as permission_pb from './permission_pb';
import * as sql_pb from './sql_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class BusinessSub extends jspb.Message {
  getSubId(): string;
  setSubId(value: string): void;

  getBusinessId(): string;
  setBusinessId(value: string): void;

  getStatus(): number;
  setStatus(value: number): void;

  getName(): string;
  setName(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  getPhone(): string;
  setPhone(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  getIsLive(): boolean;
  setIsLive(value: boolean): void;

  getPhoneVerify(): boolean;
  setPhoneVerify(value: boolean): void;

  getEmailVerify(): boolean;
  setEmailVerify(value: boolean): void;

  getPermissionList(): Array<permission_pb.Option>;
  setPermissionList(value: Array<permission_pb.Option>): void;
  clearPermissionList(): void;
  addPermission(value?: permission_pb.Option, index?: number): permission_pb.Option;

  getWhiteList(): Array<string>;
  setWhiteList(value: Array<string>): void;
  clearWhiteList(): void;
  addWhite(value: string, index?: number): void;

  getLabelxMap(): jspb.Map<string, number>;
  clearLabelxMap(): void;

  getPower(): string;
  setPower(value: string): void;

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
  toObject(includeInstance?: boolean): BusinessSub.AsObject;
  static toObject(includeInstance: boolean, msg: BusinessSub): BusinessSub.AsObject;
  static serializeBinaryToWriter(message: BusinessSub, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BusinessSub;
  static deserializeBinaryFromReader(message: BusinessSub, reader: jspb.BinaryReader): BusinessSub;
}

export namespace BusinessSub {
  export type AsObject = {
    subId: string,
    businessId: string,
    status: number,
    name: string,
    email: string,
    phone: string,
    password: string,
    isLive: boolean,
    phoneVerify: boolean,
    emailVerify: boolean,
    permissionList: Array<permission_pb.Option.AsObject>,
    whiteList: Array<string>,
    labelxMap: Array<[string, number]>,
    power: string,
    operator: string,
    createAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    colsList: Array<string>,
    conditionList: Array<sql_pb.Condition.AsObject>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

