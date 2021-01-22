import * as jspb from "google-protobuf"

import * as sql_pb from './sql_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class Adapter extends jspb.Message {
  getAdapterId(): string;
  setAdapterId(value: string): void;

  getStoreId(): string;
  setStoreId(value: string): void;

  getService(): string;
  setService(value: string): void;

  getCategory(): number;
  setCategory(value: number): void;

  getType(): number;
  setType(value: number): void;

  getSubType(): number;
  setSubType(value: number): void;

  getIsEnable(): boolean;
  setIsEnable(value: boolean): void;

  getName(): google_protobuf_struct_pb.Value | undefined;
  setName(value?: google_protobuf_struct_pb.Value): void;
  hasName(): boolean;
  clearName(): void;

  getAddPrice(): number;
  setAddPrice(value: number): void;

  getAddPercent(): number;
  setAddPercent(value: number): void;

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
  toObject(includeInstance?: boolean): Adapter.AsObject;
  static toObject(includeInstance: boolean, msg: Adapter): Adapter.AsObject;
  static serializeBinaryToWriter(message: Adapter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Adapter;
  static deserializeBinaryFromReader(message: Adapter, reader: jspb.BinaryReader): Adapter;
}

export namespace Adapter {
  export type AsObject = {
    adapterId: string,
    storeId: string,
    service: string,
    category: number,
    type: number,
    subType: number,
    isEnable: boolean,
    name?: google_protobuf_struct_pb.Value.AsObject,
    addPrice: number,
    addPercent: number,
    remark: string,
    operator: string,
    createAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    colsList: Array<string>,
    conditionList: Array<sql_pb.Condition.AsObject>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class AdapterBatch extends jspb.Message {
  getAdapterList(): Array<Adapter>;
  setAdapterList(value: Array<Adapter>): void;
  clearAdapterList(): void;
  addAdapter(value?: Adapter, index?: number): Adapter;

  getSelf(): google_protobuf_struct_pb.Struct | undefined;
  setSelf(value?: google_protobuf_struct_pb.Struct): void;
  hasSelf(): boolean;
  clearSelf(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdapterBatch.AsObject;
  static toObject(includeInstance: boolean, msg: AdapterBatch): AdapterBatch.AsObject;
  static serializeBinaryToWriter(message: AdapterBatch, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdapterBatch;
  static deserializeBinaryFromReader(message: AdapterBatch, reader: jspb.BinaryReader): AdapterBatch;
}

export namespace AdapterBatch {
  export type AsObject = {
    adapterList: Array<Adapter.AsObject>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

