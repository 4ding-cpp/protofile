import * as jspb from "google-protobuf"

import * as sql_pb from './sql_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class Adv extends jspb.Message {
  getAdvId(): string;
  setAdvId(value: string): void;

  getState(): number;
  setState(value: number): void;

  getCompany(): string;
  setCompany(value: string): void;

  getIdentify(): string;
  setIdentify(value: string): void;

  getName(): string;
  setName(value: string): void;

  getTitle(): string;
  setTitle(value: string): void;

  getPhone(): string;
  setPhone(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  getPrice(): number;
  setPrice(value: number): void;

  getBankCode(): string;
  setBankCode(value: string): void;

  getLastCode(): string;
  setLastCode(value: string): void;

  getLocation(): string;
  setLocation(value: string): void;

  getMotive(): string;
  setMotive(value: string): void;

  getMgrType(): string;
  setMgrType(value: string): void;

  getTurnover(): number;
  setTurnover(value: number): void;

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
    company: string,
    identify: string,
    name: string,
    title: string,
    phone: string,
    email: string,
    price: number,
    bankCode: string,
    lastCode: string,
    location: string,
    motive: string,
    mgrType: string,
    turnover: number,
    other?: google_protobuf_struct_pb.Value.AsObject,
    operator: string,
    createAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    colsList: Array<string>,
    conditionList: Array<sql_pb.Condition.AsObject>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class AdvRecord extends jspb.Message {
  getAdvRecordId(): string;
  setAdvRecordId(value: string): void;

  getAdvId(): string;
  setAdvId(value: string): void;

  getPhoneAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setPhoneAt(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasPhoneAt(): boolean;
  clearPhoneAt(): void;

  getInterviewAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setInterviewAt(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasInterviewAt(): boolean;
  clearInterviewAt(): void;

  getCancelReason(): string;
  setCancelReason(value: string): void;

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
  toObject(includeInstance?: boolean): AdvRecord.AsObject;
  static toObject(includeInstance: boolean, msg: AdvRecord): AdvRecord.AsObject;
  static serializeBinaryToWriter(message: AdvRecord, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdvRecord;
  static deserializeBinaryFromReader(message: AdvRecord, reader: jspb.BinaryReader): AdvRecord;
}

export namespace AdvRecord {
  export type AsObject = {
    advRecordId: string,
    advId: string,
    phoneAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    interviewAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    cancelReason: string,
    operator: string,
    createAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    colsList: Array<string>,
    conditionList: Array<sql_pb.Condition.AsObject>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

