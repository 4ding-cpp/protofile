import * as jspb from "google-protobuf"

import * as sql_pb from './sql_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class Linker extends jspb.Message {
  getLinkerId(): string;
  setLinkerId(value: string): void;

  getType(): string;
  setType(value: string): void;

  getStatus(): number;
  setStatus(value: number): void;

  getLabelId(): string;
  setLabelId(value: string): void;

  getStoreId(): string;
  setStoreId(value: string): void;

  getReward(): number;
  setReward(value: number): void;

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
  toObject(includeInstance?: boolean): Linker.AsObject;
  static toObject(includeInstance: boolean, msg: Linker): Linker.AsObject;
  static serializeBinaryToWriter(message: Linker, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Linker;
  static deserializeBinaryFromReader(message: Linker, reader: jspb.BinaryReader): Linker;
}

export namespace Linker {
  export type AsObject = {
    linkerId: string,
    type: string,
    status: number,
    labelId: string,
    storeId: string,
    reward: number,
    operator: string,
    createAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    colsList: Array<string>,
    conditionList: Array<sql_pb.Condition.AsObject>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

