import * as jspb from "google-protobuf"

import * as type_pb from './type_pb';
import * as sql_pb from './sql_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class Business extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getMainId(): number;
  setMainId(value: number): void;

  getCode(): string;
  setCode(value: string): void;

  getStatus(): number;
  setStatus(value: number): void;

  getPhone(): string;
  setPhone(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  getName(): string;
  setName(value: string): void;

  getLocation(): string;
  setLocation(value: string): void;

  getPoint(): number;
  setPoint(value: number): void;

  getPassword(): string;
  setPassword(value: string): void;

  getIdentify(): string;
  setIdentify(value: string): void;

  getPermissionList(): Array<type_pb.Option>;
  setPermissionList(value: Array<type_pb.Option>): void;
  clearPermissionList(): void;
  addPermission(value?: type_pb.Option, index?: number): type_pb.Option;

  getWhitelistList(): Array<string>;
  setWhitelistList(value: Array<string>): void;
  clearWhitelistList(): void;
  addWhitelist(value: string, index?: number): void;

  getAdvId(): number;
  setAdvId(value: number): void;

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
  toObject(includeInstance?: boolean): Business.AsObject;
  static toObject(includeInstance: boolean, msg: Business): Business.AsObject;
  static serializeBinaryToWriter(message: Business, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Business;
  static deserializeBinaryFromReader(message: Business, reader: jspb.BinaryReader): Business;
}

export namespace Business {
  export type AsObject = {
    id: number,
    mainId: number,
    code: string,
    status: number,
    phone: string,
    email: string,
    name: string,
    location: string,
    point: number,
    password: string,
    identify: string,
    permissionList: Array<type_pb.Option.AsObject>,
    whitelistList: Array<string>,
    advId: number,
    operator: string,
    createAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    colsList: Array<string>,
    conditionList: Array<sql_pb.Condition.AsObject>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

