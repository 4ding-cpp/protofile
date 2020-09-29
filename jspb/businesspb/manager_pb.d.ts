import * as jspb from 'google-protobuf'

import * as permission_pb from './permission_pb';
import * as sql_pb from './sql_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class Manager extends jspb.Message {
  getManagerId(): string;
  setManagerId(value: string): Manager;

  getBusinessId(): string;
  setBusinessId(value: string): Manager;

  getStoreId(): string;
  setStoreId(value: string): Manager;

  getStatus(): number;
  setStatus(value: number): Manager;

  getName(): string;
  setName(value: string): Manager;

  getEmail(): string;
  setEmail(value: string): Manager;

  getPhone(): string;
  setPhone(value: string): Manager;

  getPassword(): string;
  setPassword(value: string): Manager;

  getPhoneVerify(): boolean;
  setPhoneVerify(value: boolean): Manager;

  getEmailVerify(): boolean;
  setEmailVerify(value: boolean): Manager;

  getPermissionList(): Array<permission_pb.Option>;
  setPermissionList(value: Array<permission_pb.Option>): Manager;
  clearPermissionList(): Manager;
  addPermission(value?: permission_pb.Option, index?: number): permission_pb.Option;

  getWhiteList(): Array<string>;
  setWhiteList(value: Array<string>): Manager;
  clearWhiteList(): Manager;
  addWhite(value: string, index?: number): Manager;

  getLabelxMap(): jspb.Map<string, number>;
  clearLabelxMap(): Manager;

  getOperator(): string;
  setOperator(value: string): Manager;

  getCreateAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateAt(value?: google_protobuf_timestamp_pb.Timestamp): Manager;
  hasCreateAt(): boolean;
  clearCreateAt(): Manager;

  getUpdateAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateAt(value?: google_protobuf_timestamp_pb.Timestamp): Manager;
  hasUpdateAt(): boolean;
  clearUpdateAt(): Manager;

  getColsList(): Array<string>;
  setColsList(value: Array<string>): Manager;
  clearColsList(): Manager;
  addCols(value: string, index?: number): Manager;

  getConditionList(): Array<sql_pb.Condition>;
  setConditionList(value: Array<sql_pb.Condition>): Manager;
  clearConditionList(): Manager;
  addCondition(value?: sql_pb.Condition, index?: number): sql_pb.Condition;

  getSelf(): google_protobuf_struct_pb.Struct | undefined;
  setSelf(value?: google_protobuf_struct_pb.Struct): Manager;
  hasSelf(): boolean;
  clearSelf(): Manager;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Manager.AsObject;
  static toObject(includeInstance: boolean, msg: Manager): Manager.AsObject;
  static serializeBinaryToWriter(message: Manager, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Manager;
  static deserializeBinaryFromReader(message: Manager, reader: jspb.BinaryReader): Manager;
}

export namespace Manager {
  export type AsObject = {
    managerId: string,
    businessId: string,
    storeId: string,
    status: number,
    name: string,
    email: string,
    phone: string,
    password: string,
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

export class ManagerSub extends jspb.Message {
  getSubId(): string;
  setSubId(value: string): ManagerSub;

  getManagerId(): string;
  setManagerId(value: string): ManagerSub;

  getBusinessId(): string;
  setBusinessId(value: string): ManagerSub;

  getStoreId(): string;
  setStoreId(value: string): ManagerSub;

  getStatus(): number;
  setStatus(value: number): ManagerSub;

  getName(): string;
  setName(value: string): ManagerSub;

  getEmail(): string;
  setEmail(value: string): ManagerSub;

  getPhone(): string;
  setPhone(value: string): ManagerSub;

  getPassword(): string;
  setPassword(value: string): ManagerSub;

  getPhoneVerify(): boolean;
  setPhoneVerify(value: boolean): ManagerSub;

  getEmailVerify(): boolean;
  setEmailVerify(value: boolean): ManagerSub;

  getPermissionList(): Array<permission_pb.Option>;
  setPermissionList(value: Array<permission_pb.Option>): ManagerSub;
  clearPermissionList(): ManagerSub;
  addPermission(value?: permission_pb.Option, index?: number): permission_pb.Option;

  getWhiteList(): Array<string>;
  setWhiteList(value: Array<string>): ManagerSub;
  clearWhiteList(): ManagerSub;
  addWhite(value: string, index?: number): ManagerSub;

  getLabelxMap(): jspb.Map<string, number>;
  clearLabelxMap(): ManagerSub;

  getOperator(): string;
  setOperator(value: string): ManagerSub;

  getCreateAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateAt(value?: google_protobuf_timestamp_pb.Timestamp): ManagerSub;
  hasCreateAt(): boolean;
  clearCreateAt(): ManagerSub;

  getUpdateAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateAt(value?: google_protobuf_timestamp_pb.Timestamp): ManagerSub;
  hasUpdateAt(): boolean;
  clearUpdateAt(): ManagerSub;

  getColsList(): Array<string>;
  setColsList(value: Array<string>): ManagerSub;
  clearColsList(): ManagerSub;
  addCols(value: string, index?: number): ManagerSub;

  getConditionList(): Array<sql_pb.Condition>;
  setConditionList(value: Array<sql_pb.Condition>): ManagerSub;
  clearConditionList(): ManagerSub;
  addCondition(value?: sql_pb.Condition, index?: number): sql_pb.Condition;

  getSelf(): google_protobuf_struct_pb.Struct | undefined;
  setSelf(value?: google_protobuf_struct_pb.Struct): ManagerSub;
  hasSelf(): boolean;
  clearSelf(): ManagerSub;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ManagerSub.AsObject;
  static toObject(includeInstance: boolean, msg: ManagerSub): ManagerSub.AsObject;
  static serializeBinaryToWriter(message: ManagerSub, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ManagerSub;
  static deserializeBinaryFromReader(message: ManagerSub, reader: jspb.BinaryReader): ManagerSub;
}

export namespace ManagerSub {
  export type AsObject = {
    subId: string,
    managerId: string,
    businessId: string,
    storeId: string,
    status: number,
    name: string,
    email: string,
    phone: string,
    password: string,
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

