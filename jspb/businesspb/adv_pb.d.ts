import * as jspb from "google-protobuf"

import * as sql_pb from './sql_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class Adv extends jspb.Message {
  getAdvId(): string;
  setAdvId(value: string): void;

  getState(): number;
  setState(value: number): void;

  getType(): number;
  setType(value: number): void;

  getContacter(): string;
  setContacter(value: string): void;

  getPhone(): string;
  setPhone(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  getLocation(): string;
  setLocation(value: string): void;

  getContact(): string;
  setContact(value: string): void;

  getPhoneAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setPhoneAt(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasPhoneAt(): boolean;
  clearPhoneAt(): void;

  getViewAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setViewAt(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasViewAt(): boolean;
  clearViewAt(): void;

  getTitle(): string;
  setTitle(value: string): void;

  getMgrType(): string;
  setMgrType(value: string): void;

  getTurnover(): number;
  setTurnover(value: number): void;

  getCompany(): string;
  setCompany(value: string): void;

  getIdentify(): string;
  setIdentify(value: string): void;

  getMotive(): string;
  setMotive(value: string): void;

  getOther(): google_protobuf_struct_pb.Value | undefined;
  setOther(value?: google_protobuf_struct_pb.Value): void;
  hasOther(): boolean;
  clearOther(): void;

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
  toObject(includeInstance?: boolean): Adv.AsObject;
  static toObject(includeInstance: boolean, msg: Adv): Adv.AsObject;
  static serializeBinaryToWriter(message: Adv, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Adv;
  static deserializeBinaryFromReader(message: Adv, reader: jspb.BinaryReader): Adv;
}

export namespace Adv {
  export type AsObject = {
    advId: string,
    state: number,
    type: number,
    contacter: string,
    phone: string,
    email: string,
    location: string,
    contact: string,
    phoneAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    viewAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    title: string,
    mgrType: string,
    turnover: number,
    company: string,
    identify: string,
    motive: string,
    other?: google_protobuf_struct_pb.Value.AsObject,
    operator: string,
    createAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    colsList: Array<string>,
    conditionList: Array<sql_pb.Condition.AsObject>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class App extends jspb.Message {
  getAppId(): string;
  setAppId(value: string): void;

  getState(): number;
  setState(value: number): void;

  getType(): number;
  setType(value: number): void;

  getContacter(): string;
  setContacter(value: string): void;

  getPhone(): string;
  setPhone(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  getLocation(): string;
  setLocation(value: string): void;

  getContact(): string;
  setContact(value: string): void;

  getCompany(): string;
  setCompany(value: string): void;

  getIdentify(): string;
  setIdentify(value: string): void;

  getBankCode(): string;
  setBankCode(value: string): void;

  getLastCode(): string;
  setLastCode(value: string): void;

  getOther(): google_protobuf_struct_pb.Value | undefined;
  setOther(value?: google_protobuf_struct_pb.Value): void;
  hasOther(): boolean;
  clearOther(): void;

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
  toObject(includeInstance?: boolean): App.AsObject;
  static toObject(includeInstance: boolean, msg: App): App.AsObject;
  static serializeBinaryToWriter(message: App, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): App;
  static deserializeBinaryFromReader(message: App, reader: jspb.BinaryReader): App;
}

export namespace App {
  export type AsObject = {
    appId: string,
    state: number,
    type: number,
    contacter: string,
    phone: string,
    email: string,
    location: string,
    contact: string,
    company: string,
    identify: string,
    bankCode: string,
    lastCode: string,
    other?: google_protobuf_struct_pb.Value.AsObject,
    operator: string,
    createAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    colsList: Array<string>,
    conditionList: Array<sql_pb.Condition.AsObject>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}
