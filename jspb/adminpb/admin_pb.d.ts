import * as jspb from 'google-protobuf'

import * as permission_pb from './permission_pb';
import * as sql_pb from './sql_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class Admin extends jspb.Message {
  getAdminId(): string;
  setAdminId(value: string): Admin;

  getIsSuper(): boolean;
  setIsSuper(value: boolean): Admin;

  getTitle(): string;
  setTitle(value: string): Admin;

  getStatus(): number;
  setStatus(value: number): Admin;

  getName(): string;
  setName(value: string): Admin;

  getEmail(): string;
  setEmail(value: string): Admin;

  getPhone(): string;
  setPhone(value: string): Admin;

  getPassword(): string;
  setPassword(value: string): Admin;

  getIsLive(): boolean;
  setIsLive(value: boolean): Admin;

  getPermissionList(): Array<permission_pb.Option>;
  setPermissionList(value: Array<permission_pb.Option>): Admin;
  clearPermissionList(): Admin;
  addPermission(value?: permission_pb.Option, index?: number): permission_pb.Option;

  getWhiteList(): Array<string>;
  setWhiteList(value: Array<string>): Admin;
  clearWhiteList(): Admin;
  addWhite(value: string, index?: number): Admin;

  getLabelxMap(): jspb.Map<string, number>;
  clearLabelxMap(): Admin;

  getOperator(): string;
  setOperator(value: string): Admin;

  getCreateAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateAt(value?: google_protobuf_timestamp_pb.Timestamp): Admin;
  hasCreateAt(): boolean;
  clearCreateAt(): Admin;

  getUpdateAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateAt(value?: google_protobuf_timestamp_pb.Timestamp): Admin;
  hasUpdateAt(): boolean;
  clearUpdateAt(): Admin;

  getColsList(): Array<string>;
  setColsList(value: Array<string>): Admin;
  clearColsList(): Admin;
  addCols(value: string, index?: number): Admin;

  getConditionList(): Array<sql_pb.Condition>;
  setConditionList(value: Array<sql_pb.Condition>): Admin;
  clearConditionList(): Admin;
  addCondition(value?: sql_pb.Condition, index?: number): sql_pb.Condition;

  getSelf(): google_protobuf_struct_pb.Struct | undefined;
  setSelf(value?: google_protobuf_struct_pb.Struct): Admin;
  hasSelf(): boolean;
  clearSelf(): Admin;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Admin.AsObject;
  static toObject(includeInstance: boolean, msg: Admin): Admin.AsObject;
  static serializeBinaryToWriter(message: Admin, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Admin;
  static deserializeBinaryFromReader(message: Admin, reader: jspb.BinaryReader): Admin;
}

export namespace Admin {
  export type AsObject = {
    adminId: string,
    isSuper: boolean,
    title: string,
    status: number,
    name: string,
    email: string,
    phone: string,
    password: string,
    isLive: boolean,
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

