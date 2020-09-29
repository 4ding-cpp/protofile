import * as jspb from 'google-protobuf'

import * as sql_pb from './sql_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class Label extends jspb.Message {
  getLabelId(): string;
  setLabelId(value: string): Label;

  getType(): string;
  setType(value: string): Label;

  getName(): string;
  setName(value: string): Label;

  getItemList(): Array<string>;
  setItemList(value: Array<string>): Label;
  clearItemList(): Label;
  addItem(value: string, index?: number): Label;

  getOperator(): string;
  setOperator(value: string): Label;

  getCreateAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateAt(value?: google_protobuf_timestamp_pb.Timestamp): Label;
  hasCreateAt(): boolean;
  clearCreateAt(): Label;

  getUpdateAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateAt(value?: google_protobuf_timestamp_pb.Timestamp): Label;
  hasUpdateAt(): boolean;
  clearUpdateAt(): Label;

  getColsList(): Array<string>;
  setColsList(value: Array<string>): Label;
  clearColsList(): Label;
  addCols(value: string, index?: number): Label;

  getConditionList(): Array<sql_pb.Condition>;
  setConditionList(value: Array<sql_pb.Condition>): Label;
  clearConditionList(): Label;
  addCondition(value?: sql_pb.Condition, index?: number): sql_pb.Condition;

  getSelf(): google_protobuf_struct_pb.Struct | undefined;
  setSelf(value?: google_protobuf_struct_pb.Struct): Label;
  hasSelf(): boolean;
  clearSelf(): Label;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Label.AsObject;
  static toObject(includeInstance: boolean, msg: Label): Label.AsObject;
  static serializeBinaryToWriter(message: Label, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Label;
  static deserializeBinaryFromReader(message: Label, reader: jspb.BinaryReader): Label;
}

export namespace Label {
  export type AsObject = {
    labelId: string,
    type: string,
    name: string,
    itemList: Array<string>,
    operator: string,
    createAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    colsList: Array<string>,
    conditionList: Array<sql_pb.Condition.AsObject>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

