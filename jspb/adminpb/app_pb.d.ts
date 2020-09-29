import * as jspb from 'google-protobuf'

import * as sql_pb from './sql_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class App extends jspb.Message {
  getAppId(): string;
  setAppId(value: string): App;

  getAdvId(): string;
  setAdvId(value: string): App;

  getState(): number;
  setState(value: number): App;

  getType(): number;
  setType(value: number): App;

  getContacter(): string;
  setContacter(value: string): App;

  getPhone(): string;
  setPhone(value: string): App;

  getEmail(): string;
  setEmail(value: string): App;

  getLocation(): string;
  setLocation(value: string): App;

  getMgrType(): number;
  setMgrType(value: number): App;

  getTurnover(): number;
  setTurnover(value: number): App;

  getCompany(): string;
  setCompany(value: string): App;

  getIdentify(): string;
  setIdentify(value: string): App;

  getBankCode(): string;
  setBankCode(value: string): App;

  getLastCode(): string;
  setLastCode(value: string): App;

  getPrice(): number;
  setPrice(value: number): App;

  getOperator(): string;
  setOperator(value: string): App;

  getCreateAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateAt(value?: google_protobuf_timestamp_pb.Timestamp): App;
  hasCreateAt(): boolean;
  clearCreateAt(): App;

  getUpdateAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateAt(value?: google_protobuf_timestamp_pb.Timestamp): App;
  hasUpdateAt(): boolean;
  clearUpdateAt(): App;

  getColsList(): Array<string>;
  setColsList(value: Array<string>): App;
  clearColsList(): App;
  addCols(value: string, index?: number): App;

  getConditionList(): Array<sql_pb.Condition>;
  setConditionList(value: Array<sql_pb.Condition>): App;
  clearConditionList(): App;
  addCondition(value?: sql_pb.Condition, index?: number): sql_pb.Condition;

  getSelf(): google_protobuf_struct_pb.Struct | undefined;
  setSelf(value?: google_protobuf_struct_pb.Struct): App;
  hasSelf(): boolean;
  clearSelf(): App;

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
    advId: string,
    state: number,
    type: number,
    contacter: string,
    phone: string,
    email: string,
    location: string,
    mgrType: number,
    turnover: number,
    company: string,
    identify: string,
    bankCode: string,
    lastCode: string,
    price: number,
    operator: string,
    createAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    colsList: Array<string>,
    conditionList: Array<sql_pb.Condition.AsObject>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

