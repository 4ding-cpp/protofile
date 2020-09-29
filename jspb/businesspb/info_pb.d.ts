import * as jspb from 'google-protobuf'

import * as sql_pb from './sql_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class Info extends jspb.Message {
  getInfoId(): string;
  setInfoId(value: string): Info;

  getArea(): string;
  setArea(value: string): Info;

  getItem(): string;
  setItem(value: string): Info;

  getContent(): string;
  setContent(value: string): Info;

  getLabelxMap(): jspb.Map<string, number>;
  clearLabelxMap(): Info;

  getOperator(): string;
  setOperator(value: string): Info;

  getCreateAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateAt(value?: google_protobuf_timestamp_pb.Timestamp): Info;
  hasCreateAt(): boolean;
  clearCreateAt(): Info;

  getUpdateAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateAt(value?: google_protobuf_timestamp_pb.Timestamp): Info;
  hasUpdateAt(): boolean;
  clearUpdateAt(): Info;

  getColsList(): Array<string>;
  setColsList(value: Array<string>): Info;
  clearColsList(): Info;
  addCols(value: string, index?: number): Info;

  getConditionList(): Array<sql_pb.Condition>;
  setConditionList(value: Array<sql_pb.Condition>): Info;
  clearConditionList(): Info;
  addCondition(value?: sql_pb.Condition, index?: number): sql_pb.Condition;

  getSelf(): google_protobuf_struct_pb.Struct | undefined;
  setSelf(value?: google_protobuf_struct_pb.Struct): Info;
  hasSelf(): boolean;
  clearSelf(): Info;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Info.AsObject;
  static toObject(includeInstance: boolean, msg: Info): Info.AsObject;
  static serializeBinaryToWriter(message: Info, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Info;
  static deserializeBinaryFromReader(message: Info, reader: jspb.BinaryReader): Info;
}

export namespace Info {
  export type AsObject = {
    infoId: string,
    area: string,
    item: string,
    content: string,
    labelxMap: Array<[string, number]>,
    operator: string,
    createAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    colsList: Array<string>,
    conditionList: Array<sql_pb.Condition.AsObject>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

