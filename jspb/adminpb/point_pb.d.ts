import * as jspb from "google-protobuf"

import * as sql_pb from './sql_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class PointBonus extends jspb.Message {
  getPointBonusId(): string;
  setPointBonusId(value: string): void;

  getStatus(): number;
  setStatus(value: number): void;

  getOnEvent(): number;
  setOnEvent(value: number): void;

  getBeginAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setBeginAt(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasBeginAt(): boolean;
  clearBeginAt(): void;

  getEndAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndAt(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasEndAt(): boolean;
  clearEndAt(): void;

  getItem(): string;
  setItem(value: string): void;

  getCond(): number;
  setCond(value: number): void;

  getPoint(): number;
  setPoint(value: number): void;

  getPercent(): number;
  setPercent(value: number): void;

  getIsRepeat(): boolean;
  setIsRepeat(value: boolean): void;

  getLabelxMap(): jspb.Map<string, boolean>;
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
  toObject(includeInstance?: boolean): PointBonus.AsObject;
  static toObject(includeInstance: boolean, msg: PointBonus): PointBonus.AsObject;
  static serializeBinaryToWriter(message: PointBonus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PointBonus;
  static deserializeBinaryFromReader(message: PointBonus, reader: jspb.BinaryReader): PointBonus;
}

export namespace PointBonus {
  export type AsObject = {
    pointBonusId: string,
    status: number,
    onEvent: number,
    beginAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    item: string,
    cond: number,
    point: number,
    percent: number,
    isRepeat: boolean,
    labelxMap: Array<[string, boolean]>,
    operator: string,
    createAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    colsList: Array<string>,
    conditionList: Array<sql_pb.Condition.AsObject>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class Point extends jspb.Message {
  getPointId(): string;
  setPointId(value: string): void;

  getBusinessId(): string;
  setBusinessId(value: string): void;

  getType(): number;
  setType(value: number): void;

  getState(): number;
  setState(value: number): void;

  getPrice(): number;
  setPrice(value: number): void;

  getBankCode(): string;
  setBankCode(value: string): void;

  getLastCode(): string;
  setLastCode(value: string): void;

  getLabelxMap(): jspb.Map<string, boolean>;
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
  toObject(includeInstance?: boolean): Point.AsObject;
  static toObject(includeInstance: boolean, msg: Point): Point.AsObject;
  static serializeBinaryToWriter(message: Point, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Point;
  static deserializeBinaryFromReader(message: Point, reader: jspb.BinaryReader): Point;
}

export namespace Point {
  export type AsObject = {
    pointId: string,
    businessId: string,
    type: number,
    state: number,
    price: number,
    bankCode: string,
    lastCode: string,
    labelxMap: Array<[string, boolean]>,
    operator: string,
    createAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    colsList: Array<string>,
    conditionList: Array<sql_pb.Condition.AsObject>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class PointBill extends jspb.Message {
  getPointBillId(): string;
  setPointBillId(value: string): void;

  getBusinessId(): string;
  setBusinessId(value: string): void;

  getItem(): string;
  setItem(value: string): void;

  getState(): number;
  setState(value: number): void;

  getAmount(): number;
  setAmount(value: number): void;

  getDetailList(): Array<PointDetail>;
  setDetailList(value: Array<PointDetail>): void;
  clearDetailList(): void;
  addDetail(value?: PointDetail, index?: number): PointDetail;

  getLabelxMap(): jspb.Map<string, boolean>;
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
  toObject(includeInstance?: boolean): PointBill.AsObject;
  static toObject(includeInstance: boolean, msg: PointBill): PointBill.AsObject;
  static serializeBinaryToWriter(message: PointBill, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PointBill;
  static deserializeBinaryFromReader(message: PointBill, reader: jspb.BinaryReader): PointBill;
}

export namespace PointBill {
  export type AsObject = {
    pointBillId: string,
    businessId: string,
    item: string,
    state: number,
    amount: number,
    detailList: Array<PointDetail.AsObject>,
    labelxMap: Array<[string, boolean]>,
    operator: string,
    createAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    colsList: Array<string>,
    conditionList: Array<sql_pb.Condition.AsObject>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class PointDetail extends jspb.Message {
  getPointDetailId(): string;
  setPointDetailId(value: string): void;

  getBusinessId(): string;
  setBusinessId(value: string): void;

  getStoreId(): string;
  setStoreId(value: string): void;

  getPointFlowId(): string;
  setPointFlowId(value: string): void;

  getItem(): string;
  setItem(value: string): void;

  getUnitPrice(): number;
  setUnitPrice(value: number): void;

  getUseVal(): number;
  setUseVal(value: number): void;

  getSubTotal(): number;
  setSubTotal(value: number): void;

  getLabelxMap(): jspb.Map<string, boolean>;
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
  toObject(includeInstance?: boolean): PointDetail.AsObject;
  static toObject(includeInstance: boolean, msg: PointDetail): PointDetail.AsObject;
  static serializeBinaryToWriter(message: PointDetail, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PointDetail;
  static deserializeBinaryFromReader(message: PointDetail, reader: jspb.BinaryReader): PointDetail;
}

export namespace PointDetail {
  export type AsObject = {
    pointDetailId: string,
    businessId: string,
    storeId: string,
    pointFlowId: string,
    item: string,
    unitPrice: number,
    useVal: number,
    subTotal: number,
    labelxMap: Array<[string, boolean]>,
    operator: string,
    createAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    colsList: Array<string>,
    conditionList: Array<sql_pb.Condition.AsObject>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class PointFlow extends jspb.Message {
  getPointFlowId(): string;
  setPointFlowId(value: string): void;

  getBusinessId(): string;
  setBusinessId(value: string): void;

  getItem(): string;
  setItem(value: string): void;

  getPoint(): number;
  setPoint(value: number): void;

  getRelated(): string;
  setRelated(value: string): void;

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
  toObject(includeInstance?: boolean): PointFlow.AsObject;
  static toObject(includeInstance: boolean, msg: PointFlow): PointFlow.AsObject;
  static serializeBinaryToWriter(message: PointFlow, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PointFlow;
  static deserializeBinaryFromReader(message: PointFlow, reader: jspb.BinaryReader): PointFlow;
}

export namespace PointFlow {
  export type AsObject = {
    pointFlowId: string,
    businessId: string,
    item: string,
    point: number,
    related: string,
    operator: string,
    createAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    colsList: Array<string>,
    conditionList: Array<sql_pb.Condition.AsObject>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

