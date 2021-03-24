import * as jspb from "google-protobuf"

import * as sql_pb from './sql_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class Adv extends jspb.Message {
  getAdvId(): string;
  setAdvId(value: string): void;

  getBusinessId(): string;
  setBusinessId(value: string): void;

  getState(): number;
  setState(value: number): void;

  getType(): number;
  setType(value: number): void;

  getName(): string;
  setName(value: string): void;

  getPhone(): string;
  setPhone(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  getLocation(): string;
  setLocation(value: string): void;

  getContact(): number;
  setContact(value: number): void;

  getTitle(): string;
  setTitle(value: string): void;

  getMgrType(): number;
  setMgrType(value: number): void;

  getTurnover(): number;
  setTurnover(value: number): void;

  getCompany(): string;
  setCompany(value: string): void;

  getIdentify(): string;
  setIdentify(value: string): void;

  getMotive(): number;
  setMotive(value: number): void;

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
    businessId: string,
    state: number,
    type: number,
    name: string,
    phone: string,
    email: string,
    location: string,
    contact: number,
    title: string,
    mgrType: number,
    turnover: number,
    company: string,
    identify: string,
    motive: number,
    other?: google_protobuf_struct_pb.Value.AsObject,
    operator: string,
    createAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    colsList: Array<string>,
    conditionList: Array<sql_pb.Condition.AsObject>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class AdvItem extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getAdvId(): string;
  setAdvId(value: string): void;

  getPhoneAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setPhoneAt(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasPhoneAt(): boolean;
  clearPhoneAt(): void;

  getViewAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setViewAt(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasViewAt(): boolean;
  clearViewAt(): void;

  getRemark(): string;
  setRemark(value: string): void;

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
  toObject(includeInstance?: boolean): AdvItem.AsObject;
  static toObject(includeInstance: boolean, msg: AdvItem): AdvItem.AsObject;
  static serializeBinaryToWriter(message: AdvItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdvItem;
  static deserializeBinaryFromReader(message: AdvItem, reader: jspb.BinaryReader): AdvItem;
}

export namespace AdvItem {
  export type AsObject = {
    id: number,
    advId: string,
    phoneAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    viewAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    remark: string,
    operator: string,
    createAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    colsList: Array<string>,
    conditionList: Array<sql_pb.Condition.AsObject>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

