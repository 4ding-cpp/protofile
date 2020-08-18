import * as jspb from "google-protobuf"

import * as sql_pb from './sql_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class B2B extends jspb.Message {
  getB2bId(): number;
  setB2bId(value: number): void;

  getExportId(): string;
  setExportId(value: string): void;

  getImportId(): string;
  setImportId(value: string): void;

  getSecret(): string;
  setSecret(value: string): void;

  getExportState(): number;
  setExportState(value: number): void;

  getImportState(): number;
  setImportState(value: number): void;

  getTarget(): B2BTarget | undefined;
  setTarget(value?: B2BTarget): void;
  hasTarget(): boolean;
  clearTarget(): void;

  getLabelxMap(): jspb.Map<string, number>;
  clearLabelxMap(): void;

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
  toObject(includeInstance?: boolean): B2B.AsObject;
  static toObject(includeInstance: boolean, msg: B2B): B2B.AsObject;
  static serializeBinaryToWriter(message: B2B, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): B2B;
  static deserializeBinaryFromReader(message: B2B, reader: jspb.BinaryReader): B2B;
}

export namespace B2B {
  export type AsObject = {
    b2bId: number,
    exportId: string,
    importId: string,
    secret: string,
    exportState: number,
    importState: number,
    target?: B2BTarget.AsObject,
    labelxMap: Array<[string, number]>,
    operator: string,
    createAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    colsList: Array<string>,
    conditionList: Array<sql_pb.Condition.AsObject>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class B2BTarget extends jspb.Message {
  getInList(): Array<string>;
  setInList(value: Array<string>): void;
  clearInList(): void;
  addIn(value: string, index?: number): void;

  getOmitList(): Array<string>;
  setOmitList(value: Array<string>): void;
  clearOmitList(): void;
  addOmit(value: string, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): B2BTarget.AsObject;
  static toObject(includeInstance: boolean, msg: B2BTarget): B2BTarget.AsObject;
  static serializeBinaryToWriter(message: B2BTarget, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): B2BTarget;
  static deserializeBinaryFromReader(message: B2BTarget, reader: jspb.BinaryReader): B2BTarget;
}

export namespace B2BTarget {
  export type AsObject = {
    inList: Array<string>,
    omitList: Array<string>,
  }
}

