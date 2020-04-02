import * as jspb from "google-protobuf"

import * as type_pb from './type_pb';
import * as sql_pb from './sql_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class Admin extends jspb.Message {
  getAdminId(): string;
  setAdminId(value: string): void;

  getStatus(): number;
  setStatus(value: number): void;

  getPhone(): string;
  setPhone(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  getName(): string;
  setName(value: string): void;

  getTitle(): string;
  setTitle(value: string): void;

  getIsLive(): boolean;
  setIsLive(value: boolean): void;

  getPassword(): string;
  setPassword(value: string): void;

  getIsSuper(): boolean;
  setIsSuper(value: boolean): void;

  getPermissionList(): Array<type_pb.Option>;
  setPermissionList(value: Array<type_pb.Option>): void;
  clearPermissionList(): void;
  addPermission(value?: type_pb.Option, index?: number): type_pb.Option;

  getWhiteList(): Array<string>;
  setWhiteList(value: Array<string>): void;
  clearWhiteList(): void;
  addWhite(value: string, index?: number): void;

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
  toObject(includeInstance?: boolean): Admin.AsObject;
  static toObject(includeInstance: boolean, msg: Admin): Admin.AsObject;
  static serializeBinaryToWriter(message: Admin, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Admin;
  static deserializeBinaryFromReader(message: Admin, reader: jspb.BinaryReader): Admin;
}

export namespace Admin {
  export type AsObject = {
    adminId: string,
    status: number,
    phone: string,
    email: string,
    name: string,
    title: string,
    isLive: boolean,
    password: string,
    isSuper: boolean,
    permissionList: Array<type_pb.Option.AsObject>,
    whiteList: Array<string>,
    operator: string,
    createAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    colsList: Array<string>,
    conditionList: Array<sql_pb.Condition.AsObject>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

