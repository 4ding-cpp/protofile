import * as jspb from 'google-protobuf'

import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class Response extends jspb.Message {
  getCode(): number;
  setCode(value: number): Response;

  getMessage(): string;
  setMessage(value: string): Response;

  getInsertId(): string;
  setInsertId(value: string): Response;

  getAffectRow(): number;
  setAffectRow(value: number): Response;

  getPagelimit(): PageLimit | undefined;
  setPagelimit(value?: PageLimit): Response;
  hasPagelimit(): boolean;
  clearPagelimit(): Response;

  getSortList(): Array<Sort>;
  setSortList(value: Array<Sort>): Response;
  clearSortList(): Response;
  addSort(value?: Sort, index?: number): Sort;

  getConditionList(): Array<Condition>;
  setConditionList(value: Array<Condition>): Response;
  clearConditionList(): Response;
  addCondition(value?: Condition, index?: number): Condition;

  getResult(): google_protobuf_struct_pb.Value | undefined;
  setResult(value?: google_protobuf_struct_pb.Value): Response;
  hasResult(): boolean;
  clearResult(): Response;

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
  }
}

export class DBMessage extends jspb.Message {
  getInsertId(): number;
  setInsertId(value: number): DBMessage;

  getAffectRow(): number;
  setAffectRow(value: number): DBMessage;

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
  setLength(value: number): PageLimit;

  getPageIndex(): number;
  setPageIndex(value: number): PageLimit;

  getPageSize(): number;
  setPageSize(value: number): PageLimit;

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
  setDesc(value: boolean): Sort;

  getF(): string;
  setF(value: string): Sort;

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
  setF(value: string): Condition;

  getV(): string;
  setV(value: string): Condition;

  getSList(): Array<string>;
  setSList(value: Array<string>): Condition;
  clearSList(): Condition;
  addS(value: string, index?: number): Condition;

  getO(): Condition.Operand;
  setO(value: Condition.Operand): Condition;

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
  }
}

export class Query extends jspb.Message {
  getPageLimit(): PageLimit | undefined;
  setPageLimit(value?: PageLimit): Query;
  hasPageLimit(): boolean;
  clearPageLimit(): Query;

  getSortList(): Array<Sort>;
  setSortList(value: Array<Sort>): Query;
  clearSortList(): Query;
  addSort(value?: Sort, index?: number): Sort;

  getInnerList(): Array<Condition>;
  setInnerList(value: Array<Condition>): Query;
  clearInnerList(): Query;
  addInner(value?: Condition, index?: number): Condition;

  getConditionList(): Array<Condition>;
  setConditionList(value: Array<Condition>): Query;
  clearConditionList(): Query;
  addCondition(value?: Condition, index?: number): Condition;

  getAlias(): string;
  setAlias(value: string): Query;

  getExtraList(): Array<string>;
  setExtraList(value: Array<string>): Query;
  clearExtraList(): Query;
  addExtra(value: string, index?: number): Query;

  getSelf(): google_protobuf_struct_pb.Struct | undefined;
  setSelf(value?: google_protobuf_struct_pb.Struct): Query;
  hasSelf(): boolean;
  clearSelf(): Query;

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

export class SignRecord extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): SignRecord;

  getAccount(): string;
  setAccount(value: string): SignRecord;

  getType(): string;
  setType(value: string): SignRecord;

  getOs(): string;
  setOs(value: string): SignRecord;

  getBrowser(): string;
  setBrowser(value: string): SignRecord;

  getCreated(): number;
  setCreated(value: number): SignRecord;

  getOnlineAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setOnlineAt(value?: google_protobuf_timestamp_pb.Timestamp): SignRecord;
  hasOnlineAt(): boolean;
  clearOnlineAt(): SignRecord;

  getOfflineAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setOfflineAt(value?: google_protobuf_timestamp_pb.Timestamp): SignRecord;
  hasOfflineAt(): boolean;
  clearOfflineAt(): SignRecord;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignRecord.AsObject;
  static toObject(includeInstance: boolean, msg: SignRecord): SignRecord.AsObject;
  static serializeBinaryToWriter(message: SignRecord, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignRecord;
  static deserializeBinaryFromReader(message: SignRecord, reader: jspb.BinaryReader): SignRecord;
}

export namespace SignRecord {
  export type AsObject = {
    userId: number,
    account: string,
    type: string,
    os: string,
    browser: string,
    created: number,
    onlineAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    offlineAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class Result extends jspb.Message {
  getPageLimit(): PageLimit | undefined;
  setPageLimit(value?: PageLimit): Result;
  hasPageLimit(): boolean;
  clearPageLimit(): Result;

  getSortList(): Array<Sort>;
  setSortList(value: Array<Sort>): Result;
  clearSortList(): Result;
  addSort(value?: Sort, index?: number): Sort;

  getResult(): google_protobuf_struct_pb.Value | undefined;
  setResult(value?: google_protobuf_struct_pb.Value): Result;
  hasResult(): boolean;
  clearResult(): Result;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Result.AsObject;
  static toObject(includeInstance: boolean, msg: Result): Result.AsObject;
  static serializeBinaryToWriter(message: Result, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Result;
  static deserializeBinaryFromReader(message: Result, reader: jspb.BinaryReader): Result;
}

export namespace Result {
  export type AsObject = {
    pageLimit?: PageLimit.AsObject,
    sortList: Array<Sort.AsObject>,
    result?: google_protobuf_struct_pb.Value.AsObject,
  }
}

