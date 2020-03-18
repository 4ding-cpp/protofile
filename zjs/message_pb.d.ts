import * as jspb from "google-protobuf"

import * as sql_pb from './sql_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';

export class Message extends jspb.Message {
  getMessageId(): string;
  setMessageId(value: string): void;

  getStoreId(): string;
  setStoreId(value: string): void;

  getLabelId(): string;
  setLabelId(value: string): void;

  getType(): string;
  setType(value: string): void;

  getCount(): number;
  setCount(value: number): void;

  getState(): number;
  setState(value: number): void;

  getRunAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setRunAt(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasRunAt(): boolean;
  clearRunAt(): void;

  getFinishAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFinishAt(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasFinishAt(): boolean;
  clearFinishAt(): void;

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
  toObject(includeInstance?: boolean): Message.AsObject;
  static toObject(includeInstance: boolean, msg: Message): Message.AsObject;
  static serializeBinaryToWriter(message: Message, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Message;
  static deserializeBinaryFromReader(message: Message, reader: jspb.BinaryReader): Message;
}

export namespace Message {
  export type AsObject = {
    messageId: string,
    storeId: string,
    labelId: string,
    type: string,
    count: number,
    state: number,
    runAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    finishAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    operator: string,
    createAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    colsList: Array<string>,
    conditionList: Array<sql_pb.Condition.AsObject>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class Template extends jspb.Message {
  getTemplateId(): string;
  setTemplateId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Template.AsObject;
  static toObject(includeInstance: boolean, msg: Template): Template.AsObject;
  static serializeBinaryToWriter(message: Template, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Template;
  static deserializeBinaryFromReader(message: Template, reader: jspb.BinaryReader): Template;
}

export namespace Template {
  export type AsObject = {
    templateId: string,
  }
}

