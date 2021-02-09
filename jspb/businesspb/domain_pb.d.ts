import * as jspb from 'google-protobuf'

import * as sql_pb from './sql_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class Domain extends jspb.Message {
  getId(): number;
  setId(value: number): Domain;

  getName(): string;
  setName(value: string): Domain;

  getState(): number;
  setState(value: number): Domain;

  getBusinessId(): string;
  setBusinessId(value: string): Domain;

  getStoreId(): string;
  setStoreId(value: string): Domain;

  getCustom(): boolean;
  setCustom(value: boolean): Domain;

  getOperator(): string;
  setOperator(value: string): Domain;

  getCreateAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateAt(value?: google_protobuf_timestamp_pb.Timestamp): Domain;
  hasCreateAt(): boolean;
  clearCreateAt(): Domain;

  getUpdateAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateAt(value?: google_protobuf_timestamp_pb.Timestamp): Domain;
  hasUpdateAt(): boolean;
  clearUpdateAt(): Domain;

  getColsList(): Array<string>;
  setColsList(value: Array<string>): Domain;
  clearColsList(): Domain;
  addCols(value: string, index?: number): Domain;

  getConditionList(): Array<sql_pb.Condition>;
  setConditionList(value: Array<sql_pb.Condition>): Domain;
  clearConditionList(): Domain;
  addCondition(value?: sql_pb.Condition, index?: number): sql_pb.Condition;

  getSelf(): google_protobuf_struct_pb.Struct | undefined;
  setSelf(value?: google_protobuf_struct_pb.Struct): Domain;
  hasSelf(): boolean;
  clearSelf(): Domain;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Domain.AsObject;
  static toObject(includeInstance: boolean, msg: Domain): Domain.AsObject;
  static serializeBinaryToWriter(message: Domain, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Domain;
  static deserializeBinaryFromReader(message: Domain, reader: jspb.BinaryReader): Domain;
}

export namespace Domain {
  export type AsObject = {
    id: number,
    name: string,
    state: number,
    businessId: string,
    storeId: string,
    custom: boolean,
    operator: string,
    createAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    colsList: Array<string>,
    conditionList: Array<sql_pb.Condition.AsObject>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

