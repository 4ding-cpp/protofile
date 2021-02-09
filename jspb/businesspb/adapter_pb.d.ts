import * as jspb from 'google-protobuf'

import * as sql_pb from './sql_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class Adapter extends jspb.Message {
  getAdapterId(): string;
  setAdapterId(value: string): Adapter;

  getStoreId(): string;
  setStoreId(value: string): Adapter;

  getService(): string;
  setService(value: string): Adapter;

  getConf(): string;
  setConf(value: string): Adapter;

  getCategory(): number;
  setCategory(value: number): Adapter;

  getType(): number;
  setType(value: number): Adapter;

  getSubType(): number;
  setSubType(value: number): Adapter;

  getIsEnable(): boolean;
  setIsEnable(value: boolean): Adapter;

  getName(): google_protobuf_struct_pb.Value | undefined;
  setName(value?: google_protobuf_struct_pb.Value): Adapter;
  hasName(): boolean;
  clearName(): Adapter;

  getAddPrice(): number;
  setAddPrice(value: number): Adapter;

  getAddPercent(): number;
  setAddPercent(value: number): Adapter;

  getRemark(): string;
  setRemark(value: string): Adapter;

  getOperator(): string;
  setOperator(value: string): Adapter;

  getCreateAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateAt(value?: google_protobuf_timestamp_pb.Timestamp): Adapter;
  hasCreateAt(): boolean;
  clearCreateAt(): Adapter;

  getUpdateAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateAt(value?: google_protobuf_timestamp_pb.Timestamp): Adapter;
  hasUpdateAt(): boolean;
  clearUpdateAt(): Adapter;

  getColsList(): Array<string>;
  setColsList(value: Array<string>): Adapter;
  clearColsList(): Adapter;
  addCols(value: string, index?: number): Adapter;

  getConditionList(): Array<sql_pb.Condition>;
  setConditionList(value: Array<sql_pb.Condition>): Adapter;
  clearConditionList(): Adapter;
  addCondition(value?: sql_pb.Condition, index?: number): sql_pb.Condition;

  getSelf(): google_protobuf_struct_pb.Struct | undefined;
  setSelf(value?: google_protobuf_struct_pb.Struct): Adapter;
  hasSelf(): boolean;
  clearSelf(): Adapter;

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
    conf: string,
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
  setAdapterList(value: Array<Adapter>): AdapterBatch;
  clearAdapterList(): AdapterBatch;
  addAdapter(value?: Adapter, index?: number): Adapter;

  getSelf(): google_protobuf_struct_pb.Struct | undefined;
  setSelf(value?: google_protobuf_struct_pb.Struct): AdapterBatch;
  hasSelf(): boolean;
  clearSelf(): AdapterBatch;

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

