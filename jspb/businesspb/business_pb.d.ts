import * as jspb from "google-protobuf"

import * as permission_pb from './permission_pb';
import * as address_pb from './address_pb';
import * as sql_pb from './sql_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class Business extends jspb.Message {
  getBusinessId(): string;
  setBusinessId(value: string): void;

  getMainId(): string;
  setMainId(value: string): void;

  getStatus(): number;
  setStatus(value: number): void;

  getDomain(): string;
  setDomain(value: string): void;

  getName(): string;
  setName(value: string): void;

  getPoint(): number;
  setPoint(value: number): void;

  getPassword(): string;
  setPassword(value: string): void;

  getFee(): number;
  setFee(value: number): void;

  getType(): number;
  setType(value: number): void;

  getContact(): string;
  setContact(value: string): void;

  getPhone(): string;
  setPhone(value: string): void;

  getPhoneVerify(): boolean;
  setPhoneVerify(value: boolean): void;

  getEmail(): string;
  setEmail(value: string): void;

  getEmailVerify(): boolean;
  setEmailVerify(value: boolean): void;

  getAddress(): address_pb.Address | undefined;
  setAddress(value?: address_pb.Address): void;
  hasAddress(): boolean;
  clearAddress(): void;

  getCompany(): string;
  setCompany(value: string): void;

  getIdentify(): string;
  setIdentify(value: string): void;

  getPermissionList(): Array<permission_pb.Option>;
  setPermissionList(value: Array<permission_pb.Option>): void;
  clearPermissionList(): void;
  addPermission(value?: permission_pb.Option, index?: number): permission_pb.Option;

  getWhiteList(): Array<string>;
  setWhiteList(value: Array<string>): void;
  clearWhiteList(): void;
  addWhite(value: string, index?: number): void;

  getOtpToken(): string;
  setOtpToken(value: string): void;

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
  toObject(includeInstance?: boolean): Business.AsObject;
  static toObject(includeInstance: boolean, msg: Business): Business.AsObject;
  static serializeBinaryToWriter(message: Business, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Business;
  static deserializeBinaryFromReader(message: Business, reader: jspb.BinaryReader): Business;
}

export namespace Business {
  export type AsObject = {
    businessId: string,
    mainId: string,
    status: number,
    domain: string,
    name: string,
    point: number,
    password: string,
    fee: number,
    type: number,
    contact: string,
    phone: string,
    phoneVerify: boolean,
    email: string,
    emailVerify: boolean,
    address?: address_pb.Address.AsObject,
    company: string,
    identify: string,
    permissionList: Array<permission_pb.Option.AsObject>,
    whiteList: Array<string>,
    otpToken: string,
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

