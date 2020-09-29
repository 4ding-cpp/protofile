import * as jspb from 'google-protobuf'

import * as sql_pb from './sql_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class Adv extends jspb.Message {
  getAdvId(): string;
  setAdvId(value: string): Adv;

  getState(): number;
  setState(value: number): Adv;

  getType(): number;
  setType(value: number): Adv;

  getContacter(): string;
  setContacter(value: string): Adv;

  getPhone(): string;
  setPhone(value: string): Adv;

  getEmail(): string;
  setEmail(value: string): Adv;

  getLocation(): string;
  setLocation(value: string): Adv;

  getContact(): number;
  setContact(value: number): Adv;

  getTitle(): string;
  setTitle(value: string): Adv;

  getMgrType(): number;
  setMgrType(value: number): Adv;

  getTurnover(): number;
  setTurnover(value: number): Adv;

  getCompany(): string;
  setCompany(value: string): Adv;

  getIdentify(): string;
  setIdentify(value: string): Adv;

  getMotive(): number;
  setMotive(value: number): Adv;

  getOther(): google_protobuf_struct_pb.Value | undefined;
  setOther(value?: google_protobuf_struct_pb.Value): Adv;
  hasOther(): boolean;
  clearOther(): Adv;

  getOperator(): string;
  setOperator(value: string): Adv;

  getCreateAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateAt(value?: google_protobuf_timestamp_pb.Timestamp): Adv;
  hasCreateAt(): boolean;
  clearCreateAt(): Adv;

  getUpdateAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateAt(value?: google_protobuf_timestamp_pb.Timestamp): Adv;
  hasUpdateAt(): boolean;
  clearUpdateAt(): Adv;

  getColsList(): Array<string>;
  setColsList(value: Array<string>): Adv;
  clearColsList(): Adv;
  addCols(value: string, index?: number): Adv;

  getConditionList(): Array<sql_pb.Condition>;
  setConditionList(value: Array<sql_pb.Condition>): Adv;
  clearConditionList(): Adv;
  addCondition(value?: sql_pb.Condition, index?: number): sql_pb.Condition;

  getSelf(): google_protobuf_struct_pb.Struct | undefined;
  setSelf(value?: google_protobuf_struct_pb.Struct): Adv;
  hasSelf(): boolean;
  clearSelf(): Adv;

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
  setId(value: number): AdvItem;

  getAdvId(): string;
  setAdvId(value: string): AdvItem;

  getPhoneAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setPhoneAt(value?: google_protobuf_timestamp_pb.Timestamp): AdvItem;
  hasPhoneAt(): boolean;
  clearPhoneAt(): AdvItem;

  getViewAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setViewAt(value?: google_protobuf_timestamp_pb.Timestamp): AdvItem;
  hasViewAt(): boolean;
  clearViewAt(): AdvItem;

  getRemark(): string;
  setRemark(value: string): AdvItem;

  getOperator(): string;
  setOperator(value: string): AdvItem;

  getCreateAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateAt(value?: google_protobuf_timestamp_pb.Timestamp): AdvItem;
  hasCreateAt(): boolean;
  clearCreateAt(): AdvItem;

  getUpdateAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateAt(value?: google_protobuf_timestamp_pb.Timestamp): AdvItem;
  hasUpdateAt(): boolean;
  clearUpdateAt(): AdvItem;

  getColsList(): Array<string>;
  setColsList(value: Array<string>): AdvItem;
  clearColsList(): AdvItem;
  addCols(value: string, index?: number): AdvItem;

  getConditionList(): Array<sql_pb.Condition>;
  setConditionList(value: Array<sql_pb.Condition>): AdvItem;
  clearConditionList(): AdvItem;
  addCondition(value?: sql_pb.Condition, index?: number): sql_pb.Condition;

  getSelf(): google_protobuf_struct_pb.Struct | undefined;
  setSelf(value?: google_protobuf_struct_pb.Struct): AdvItem;
  hasSelf(): boolean;
  clearSelf(): AdvItem;

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

