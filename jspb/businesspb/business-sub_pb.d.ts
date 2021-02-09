import * as jspb from 'google-protobuf'

import * as permission_pb from './permission_pb';
import * as sql_pb from './sql_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class BusinessSub extends jspb.Message {
  getSubId(): string;
  setSubId(value: string): BusinessSub;

  getBusinessId(): string;
  setBusinessId(value: string): BusinessSub;

  getStatus(): number;
  setStatus(value: number): BusinessSub;

  getName(): string;
  setName(value: string): BusinessSub;

  getEmail(): string;
  setEmail(value: string): BusinessSub;

  getPhone(): string;
  setPhone(value: string): BusinessSub;

  getPassword(): string;
  setPassword(value: string): BusinessSub;

  getIsLive(): boolean;
  setIsLive(value: boolean): BusinessSub;

  getPhoneVerify(): boolean;
  setPhoneVerify(value: boolean): BusinessSub;

  getEmailVerify(): boolean;
  setEmailVerify(value: boolean): BusinessSub;

  getPermissionList(): Array<permission_pb.Option>;
  setPermissionList(value: Array<permission_pb.Option>): BusinessSub;
  clearPermissionList(): BusinessSub;
  addPermission(value?: permission_pb.Option, index?: number): permission_pb.Option;

  getWhiteList(): Array<string>;
  setWhiteList(value: Array<string>): BusinessSub;
  clearWhiteList(): BusinessSub;
  addWhite(value: string, index?: number): BusinessSub;

  getLabelxMap(): jspb.Map<string, number>;
  clearLabelxMap(): BusinessSub;

  getOperator(): string;
  setOperator(value: string): BusinessSub;

  getCreateAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateAt(value?: google_protobuf_timestamp_pb.Timestamp): BusinessSub;
  hasCreateAt(): boolean;
  clearCreateAt(): BusinessSub;

  getUpdateAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateAt(value?: google_protobuf_timestamp_pb.Timestamp): BusinessSub;
  hasUpdateAt(): boolean;
  clearUpdateAt(): BusinessSub;

  getColsList(): Array<string>;
  setColsList(value: Array<string>): BusinessSub;
  clearColsList(): BusinessSub;
  addCols(value: string, index?: number): BusinessSub;

  getConditionList(): Array<sql_pb.Condition>;
  setConditionList(value: Array<sql_pb.Condition>): BusinessSub;
  clearConditionList(): BusinessSub;
  addCondition(value?: sql_pb.Condition, index?: number): sql_pb.Condition;

  getSelf(): google_protobuf_struct_pb.Struct | undefined;
  setSelf(value?: google_protobuf_struct_pb.Struct): BusinessSub;
  hasSelf(): boolean;
  clearSelf(): BusinessSub;

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
    operator: string,
    createAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    colsList: Array<string>,
    conditionList: Array<sql_pb.Condition.AsObject>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

