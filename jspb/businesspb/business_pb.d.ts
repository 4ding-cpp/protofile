import * as jspb from 'google-protobuf'

import * as permission_pb from './permission_pb';
import * as sql_pb from './sql_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class Business extends jspb.Message {
  getBusinessId(): string;
  setBusinessId(value: string): Business;

  getMainId(): string;
  setMainId(value: string): Business;

  getStatus(): number;
  setStatus(value: number): Business;

  getDomain(): string;
  setDomain(value: string): Business;

  getName(): string;
  setName(value: string): Business;

  getPoint(): number;
  setPoint(value: number): Business;

  getPassword(): string;
  setPassword(value: string): Business;

  getFee(): number;
  setFee(value: number): Business;

  getType(): number;
  setType(value: number): Business;

  getContacter(): string;
  setContacter(value: string): Business;

  getPhone(): string;
  setPhone(value: string): Business;

  getPhoneVerify(): boolean;
  setPhoneVerify(value: boolean): Business;

  getEmail(): string;
  setEmail(value: string): Business;

  getEmailVerify(): boolean;
  setEmailVerify(value: boolean): Business;

  getLocation(): string;
  setLocation(value: string): Business;

  getMgrType(): number;
  setMgrType(value: number): Business;

  getTurnover(): number;
  setTurnover(value: number): Business;

  getCompany(): string;
  setCompany(value: string): Business;

  getIdentify(): string;
  setIdentify(value: string): Business;

  getPermissionList(): Array<permission_pb.Option>;
  setPermissionList(value: Array<permission_pb.Option>): Business;
  clearPermissionList(): Business;
  addPermission(value?: permission_pb.Option, index?: number): permission_pb.Option;

  getWhiteList(): Array<string>;
  setWhiteList(value: Array<string>): Business;
  clearWhiteList(): Business;
  addWhite(value: string, index?: number): Business;

  getLabelxMap(): jspb.Map<string, number>;
  clearLabelxMap(): Business;

  getOperator(): string;
  setOperator(value: string): Business;

  getCreateAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateAt(value?: google_protobuf_timestamp_pb.Timestamp): Business;
  hasCreateAt(): boolean;
  clearCreateAt(): Business;

  getUpdateAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateAt(value?: google_protobuf_timestamp_pb.Timestamp): Business;
  hasUpdateAt(): boolean;
  clearUpdateAt(): Business;

  getColsList(): Array<string>;
  setColsList(value: Array<string>): Business;
  clearColsList(): Business;
  addCols(value: string, index?: number): Business;

  getConditionList(): Array<sql_pb.Condition>;
  setConditionList(value: Array<sql_pb.Condition>): Business;
  clearConditionList(): Business;
  addCondition(value?: sql_pb.Condition, index?: number): sql_pb.Condition;

  getSelf(): google_protobuf_struct_pb.Struct | undefined;
  setSelf(value?: google_protobuf_struct_pb.Struct): Business;
  hasSelf(): boolean;
  clearSelf(): Business;

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
    contacter: string,
    phone: string,
    phoneVerify: boolean,
    email: string,
    emailVerify: boolean,
    location: string,
    mgrType: number,
    turnover: number,
    company: string,
    identify: string,
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

