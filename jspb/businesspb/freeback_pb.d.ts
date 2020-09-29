import * as jspb from 'google-protobuf'

import * as sql_pb from './sql_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class Freeback extends jspb.Message {
  getFreebackId(): string;
  setFreebackId(value: string): Freeback;

  getType(): number;
  setType(value: number): Freeback;

  getStoreId(): string;
  setStoreId(value: string): Freeback;

  getCustomerId(): string;
  setCustomerId(value: string): Freeback;

  getOrderId(): string;
  setOrderId(value: string): Freeback;

  getDescription(): string;
  setDescription(value: string): Freeback;

  getDialogueList(): Array<Dialogue>;
  setDialogueList(value: Array<Dialogue>): Freeback;
  clearDialogueList(): Freeback;
  addDialogue(value?: Dialogue, index?: number): Dialogue;

  getLabelxMap(): jspb.Map<string, number>;
  clearLabelxMap(): Freeback;

  getOperator(): string;
  setOperator(value: string): Freeback;

  getCreateAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateAt(value?: google_protobuf_timestamp_pb.Timestamp): Freeback;
  hasCreateAt(): boolean;
  clearCreateAt(): Freeback;

  getUpdateAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateAt(value?: google_protobuf_timestamp_pb.Timestamp): Freeback;
  hasUpdateAt(): boolean;
  clearUpdateAt(): Freeback;

  getColsList(): Array<string>;
  setColsList(value: Array<string>): Freeback;
  clearColsList(): Freeback;
  addCols(value: string, index?: number): Freeback;

  getConditionList(): Array<sql_pb.Condition>;
  setConditionList(value: Array<sql_pb.Condition>): Freeback;
  clearConditionList(): Freeback;
  addCondition(value?: sql_pb.Condition, index?: number): sql_pb.Condition;

  getSelf(): google_protobuf_struct_pb.Struct | undefined;
  setSelf(value?: google_protobuf_struct_pb.Struct): Freeback;
  hasSelf(): boolean;
  clearSelf(): Freeback;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Freeback.AsObject;
  static toObject(includeInstance: boolean, msg: Freeback): Freeback.AsObject;
  static serializeBinaryToWriter(message: Freeback, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Freeback;
  static deserializeBinaryFromReader(message: Freeback, reader: jspb.BinaryReader): Freeback;
}

export namespace Freeback {
  export type AsObject = {
    freebackId: string,
    type: number,
    storeId: string,
    customerId: string,
    orderId: string,
    description: string,
    dialogueList: Array<Dialogue.AsObject>,
    labelxMap: Array<[string, number]>,
    operator: string,
    createAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    colsList: Array<string>,
    conditionList: Array<sql_pb.Condition.AsObject>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class Dialogue extends jspb.Message {
  getFreebackId(): string;
  setFreebackId(value: string): Dialogue;

  getTimeAt(): string;
  setTimeAt(value: string): Dialogue;

  getMessage(): string;
  setMessage(value: string): Dialogue;

  getResponder(): string;
  setResponder(value: string): Dialogue;

  getSelf(): google_protobuf_struct_pb.Struct | undefined;
  setSelf(value?: google_protobuf_struct_pb.Struct): Dialogue;
  hasSelf(): boolean;
  clearSelf(): Dialogue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dialogue.AsObject;
  static toObject(includeInstance: boolean, msg: Dialogue): Dialogue.AsObject;
  static serializeBinaryToWriter(message: Dialogue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dialogue;
  static deserializeBinaryFromReader(message: Dialogue, reader: jspb.BinaryReader): Dialogue;
}

export namespace Dialogue {
  export type AsObject = {
    freebackId: string,
    timeAt: string,
    message: string,
    responder: string,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

