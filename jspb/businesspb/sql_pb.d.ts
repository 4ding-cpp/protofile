import * as jspb from "google-protobuf"

import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class Response extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getMessage(): string;
  setMessage(value: string): void;

  getInsertId(): string;
  setInsertId(value: string): void;

  getAffectRow(): number;
  setAffectRow(value: number): void;

  getPagelimit(): PageLimit | undefined;
  setPagelimit(value?: PageLimit): void;
  hasPagelimit(): boolean;
  clearPagelimit(): void;

  getSortList(): Array<Sort>;
  setSortList(value: Array<Sort>): void;
  clearSortList(): void;
  addSort(value?: Sort, index?: number): Sort;

  getConditionList(): Array<Condition>;
  setConditionList(value: Array<Condition>): void;
  clearConditionList(): void;
  addCondition(value?: Condition, index?: number): Condition;

  getResult(): google_protobuf_struct_pb.Value | undefined;
  setResult(value?: google_protobuf_struct_pb.Value): void;
  hasResult(): boolean;
  clearResult(): void;

  getLastSql(): string;
  setLastSql(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Response.AsObject;
  static toObject(includeInstance: boolean, msg: Response): Response.AsObject;
  static serializeBinaryToWriter(message: Response, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Response;
  static deserializeBinaryFromReader(message: Response, reader: jspb.BinaryReader): Response;
}

export namespace Response {
  export type AsObject = {
    code: number,
    message: string,
    insertId: string,
    affectRow: number,
    pagelimit?: PageLimit.AsObject,
    sortList: Array<Sort.AsObject>,
    conditionList: Array<Condition.AsObject>,
    result?: google_protobuf_struct_pb.Value.AsObject,
    lastSql: string,
  }
}

export class DBMessage extends jspb.Message {
  getInsertId(): number;
  setInsertId(value: number): void;

  getAffectRow(): number;
  setAffectRow(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DBMessage.AsObject;
  static toObject(includeInstance: boolean, msg: DBMessage): DBMessage.AsObject;
  static serializeBinaryToWriter(message: DBMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DBMessage;
  static deserializeBinaryFromReader(message: DBMessage, reader: jspb.BinaryReader): DBMessage;
}

export namespace DBMessage {
  export type AsObject = {
    insertId: number,
    affectRow: number,
  }
}

export class PageLimit extends jspb.Message {
  getLength(): number;
  setLength(value: number): void;

  getPageIndex(): number;
  setPageIndex(value: number): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PageLimit.AsObject;
  static toObject(includeInstance: boolean, msg: PageLimit): PageLimit.AsObject;
  static serializeBinaryToWriter(message: PageLimit, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PageLimit;
  static deserializeBinaryFromReader(message: PageLimit, reader: jspb.BinaryReader): PageLimit;
}

export namespace PageLimit {
  export type AsObject = {
    length: number,
    pageIndex: number,
    pageSize: number,
  }
}

export class Sort extends jspb.Message {
  getDesc(): boolean;
  setDesc(value: boolean): void;

  getF(): string;
  setF(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Sort.AsObject;
  static toObject(includeInstance: boolean, msg: Sort): Sort.AsObject;
  static serializeBinaryToWriter(message: Sort, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Sort;
  static deserializeBinaryFromReader(message: Sort, reader: jspb.BinaryReader): Sort;
}

export namespace Sort {
  export type AsObject = {
    desc: boolean,
    f: string,
  }
}

export class Condition extends jspb.Message {
  getF(): string;
  setF(value: string): void;

  getV(): string;
  setV(value: string): void;

  getSList(): Array<string>;
  setSList(value: Array<string>): void;
  clearSList(): void;
  addS(value: string, index?: number): void;

  getO(): Condition.Operand;
  setO(value: Condition.Operand): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Condition.AsObject;
  static toObject(includeInstance: boolean, msg: Condition): Condition.AsObject;
  static serializeBinaryToWriter(message: Condition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Condition;
  static deserializeBinaryFromReader(message: Condition, reader: jspb.BinaryReader): Condition;
}

export namespace Condition {
  export type AsObject = {
    f: string,
    v: string,
    sList: Array<string>,
    o: Condition.Operand,
  }

  export enum Operand { 
    UNIVERSAL = 0,
    LT = 1,
    LTE = 2,
    GT = 3,
    GTE = 4,
    IN = 5,
    LIKE = 6,
    LABEL = 7,
    UNLABEL = 8,
    NOTIN = 9,
    NE = 10,
  }
}

export class Query extends jspb.Message {
  getPageLimit(): PageLimit | undefined;
  setPageLimit(value?: PageLimit): void;
  hasPageLimit(): boolean;
  clearPageLimit(): void;

  getSortList(): Array<Sort>;
  setSortList(value: Array<Sort>): void;
  clearSortList(): void;
  addSort(value?: Sort, index?: number): Sort;

  getInnerList(): Array<Condition>;
  setInnerList(value: Array<Condition>): void;
  clearInnerList(): void;
  addInner(value?: Condition, index?: number): Condition;

  getConditionList(): Array<Condition>;
  setConditionList(value: Array<Condition>): void;
  clearConditionList(): void;
  addCondition(value?: Condition, index?: number): Condition;

  getAlias(): string;
  setAlias(value: string): void;

  getExtraList(): Array<string>;
  setExtraList(value: Array<string>): void;
  clearExtraList(): void;
  addExtra(value: string, index?: number): void;

  getSelf(): google_protobuf_struct_pb.Struct | undefined;
  setSelf(value?: google_protobuf_struct_pb.Struct): void;
  hasSelf(): boolean;
  clearSelf(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Query.AsObject;
  static toObject(includeInstance: boolean, msg: Query): Query.AsObject;
  static serializeBinaryToWriter(message: Query, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Query;
  static deserializeBinaryFromReader(message: Query, reader: jspb.BinaryReader): Query;
}

export namespace Query {
  export type AsObject = {
    pageLimit?: PageLimit.AsObject,
    sortList: Array<Sort.AsObject>,
    innerList: Array<Condition.AsObject>,
    conditionList: Array<Condition.AsObject>,
    alias: string,
    extraList: Array<string>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class Record extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getLogAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLogAt(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasLogAt(): boolean;
  clearLogAt(): void;

  getOperator(): string;
  setOperator(value: string): void;

  getTargetId(): string;
  setTargetId(value: string): void;

  getDifferent(): google_protobuf_struct_pb.Struct | undefined;
  setDifferent(value?: google_protobuf_struct_pb.Struct): void;
  hasDifferent(): boolean;
  clearDifferent(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Record.AsObject;
  static toObject(includeInstance: boolean, msg: Record): Record.AsObject;
  static serializeBinaryToWriter(message: Record, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Record;
  static deserializeBinaryFromReader(message: Record, reader: jspb.BinaryReader): Record;
}

export namespace Record {
  export type AsObject = {
    id: number,
    logAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    operator: string,
    targetId: string,
    different?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class Upgrade extends jspb.Message {
  getLast(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLast(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasLast(): boolean;
  clearLast(): void;

  getPageIndex(): number;
  setPageIndex(value: number): void;

  getCatchList(): Array<string>;
  setCatchList(value: Array<string>): void;
  clearCatchList(): void;
  addCatch(value: string, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Upgrade.AsObject;
  static toObject(includeInstance: boolean, msg: Upgrade): Upgrade.AsObject;
  static serializeBinaryToWriter(message: Upgrade, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Upgrade;
  static deserializeBinaryFromReader(message: Upgrade, reader: jspb.BinaryReader): Upgrade;
}

export namespace Upgrade {
  export type AsObject = {
    last?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    pageIndex: number,
    catchList: Array<string>,
  }
}

