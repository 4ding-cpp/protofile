import * as jspb from 'google-protobuf'

import * as sql_pb from './sql_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class PointBonus extends jspb.Message {
  getPointBonusId(): string;
  setPointBonusId(value: string): PointBonus;

  getOnEvent(): number;
  setOnEvent(value: number): PointBonus;

  getBeginAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setBeginAt(value?: google_protobuf_timestamp_pb.Timestamp): PointBonus;
  hasBeginAt(): boolean;
  clearBeginAt(): PointBonus;

  getEndAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndAt(value?: google_protobuf_timestamp_pb.Timestamp): PointBonus;
  hasEndAt(): boolean;
  clearEndAt(): PointBonus;

  getItem(): string;
  setItem(value: string): PointBonus;

  getCond(): number;
  setCond(value: number): PointBonus;

  getPoint(): number;
  setPoint(value: number): PointBonus;

  getPercent(): number;
  setPercent(value: number): PointBonus;

  getIsRepeat(): boolean;
  setIsRepeat(value: boolean): PointBonus;

  getLabelxMap(): jspb.Map<string, number>;
  clearLabelxMap(): PointBonus;

  getOperator(): string;
  setOperator(value: string): PointBonus;

  getCreateAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateAt(value?: google_protobuf_timestamp_pb.Timestamp): PointBonus;
  hasCreateAt(): boolean;
  clearCreateAt(): PointBonus;

  getUpdateAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateAt(value?: google_protobuf_timestamp_pb.Timestamp): PointBonus;
  hasUpdateAt(): boolean;
  clearUpdateAt(): PointBonus;

  getColsList(): Array<string>;
  setColsList(value: Array<string>): PointBonus;
  clearColsList(): PointBonus;
  addCols(value: string, index?: number): PointBonus;

  getConditionList(): Array<sql_pb.Condition>;
  setConditionList(value: Array<sql_pb.Condition>): PointBonus;
  clearConditionList(): PointBonus;
  addCondition(value?: sql_pb.Condition, index?: number): sql_pb.Condition;

  getSelf(): google_protobuf_struct_pb.Struct | undefined;
  setSelf(value?: google_protobuf_struct_pb.Struct): PointBonus;
  hasSelf(): boolean;
  clearSelf(): PointBonus;

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
    onEvent: number,
    beginAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    item: string,
    cond: number,
    point: number,
    percent: number,
    isRepeat: boolean,
    labelxMap: Array<[string, number]>,
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
  setPointId(value: string): Point;

  getBusinessId(): string;
  setBusinessId(value: string): Point;

  getType(): number;
  setType(value: number): Point;

  getState(): number;
  setState(value: number): Point;

  getPrice(): number;
  setPrice(value: number): Point;

  getBankCode(): string;
  setBankCode(value: string): Point;

  getLastCode(): string;
  setLastCode(value: string): Point;

  getLabelxMap(): jspb.Map<string, number>;
  clearLabelxMap(): Point;

  getOperator(): string;
  setOperator(value: string): Point;

  getCreateAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateAt(value?: google_protobuf_timestamp_pb.Timestamp): Point;
  hasCreateAt(): boolean;
  clearCreateAt(): Point;

  getUpdateAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateAt(value?: google_protobuf_timestamp_pb.Timestamp): Point;
  hasUpdateAt(): boolean;
  clearUpdateAt(): Point;

  getColsList(): Array<string>;
  setColsList(value: Array<string>): Point;
  clearColsList(): Point;
  addCols(value: string, index?: number): Point;

  getConditionList(): Array<sql_pb.Condition>;
  setConditionList(value: Array<sql_pb.Condition>): Point;
  clearConditionList(): Point;
  addCondition(value?: sql_pb.Condition, index?: number): sql_pb.Condition;

  getSelf(): google_protobuf_struct_pb.Struct | undefined;
  setSelf(value?: google_protobuf_struct_pb.Struct): Point;
  hasSelf(): boolean;
  clearSelf(): Point;

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
    labelxMap: Array<[string, number]>,
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
  setPointBillId(value: string): PointBill;

  getBusinessId(): string;
  setBusinessId(value: string): PointBill;

  getItem(): string;
  setItem(value: string): PointBill;

  getState(): number;
  setState(value: number): PointBill;

  getAmount(): number;
  setAmount(value: number): PointBill;

  getDetailList(): Array<PointDetail>;
  setDetailList(value: Array<PointDetail>): PointBill;
  clearDetailList(): PointBill;
  addDetail(value?: PointDetail, index?: number): PointDetail;

  getLabelxMap(): jspb.Map<string, number>;
  clearLabelxMap(): PointBill;

  getOperator(): string;
  setOperator(value: string): PointBill;

  getCreateAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateAt(value?: google_protobuf_timestamp_pb.Timestamp): PointBill;
  hasCreateAt(): boolean;
  clearCreateAt(): PointBill;

  getUpdateAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateAt(value?: google_protobuf_timestamp_pb.Timestamp): PointBill;
  hasUpdateAt(): boolean;
  clearUpdateAt(): PointBill;

  getColsList(): Array<string>;
  setColsList(value: Array<string>): PointBill;
  clearColsList(): PointBill;
  addCols(value: string, index?: number): PointBill;

  getConditionList(): Array<sql_pb.Condition>;
  setConditionList(value: Array<sql_pb.Condition>): PointBill;
  clearConditionList(): PointBill;
  addCondition(value?: sql_pb.Condition, index?: number): sql_pb.Condition;

  getSelf(): google_protobuf_struct_pb.Struct | undefined;
  setSelf(value?: google_protobuf_struct_pb.Struct): PointBill;
  hasSelf(): boolean;
  clearSelf(): PointBill;

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
    labelxMap: Array<[string, number]>,
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
  setPointDetailId(value: string): PointDetail;

  getBusinessId(): string;
  setBusinessId(value: string): PointDetail;

  getStoreId(): string;
  setStoreId(value: string): PointDetail;

  getPointFlowId(): string;
  setPointFlowId(value: string): PointDetail;

  getItem(): string;
  setItem(value: string): PointDetail;

  getUnitPrice(): number;
  setUnitPrice(value: number): PointDetail;

  getUseVal(): number;
  setUseVal(value: number): PointDetail;

  getSubTotal(): number;
  setSubTotal(value: number): PointDetail;

  getLabelxMap(): jspb.Map<string, number>;
  clearLabelxMap(): PointDetail;

  getOperator(): string;
  setOperator(value: string): PointDetail;

  getCreateAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateAt(value?: google_protobuf_timestamp_pb.Timestamp): PointDetail;
  hasCreateAt(): boolean;
  clearCreateAt(): PointDetail;

  getUpdateAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateAt(value?: google_protobuf_timestamp_pb.Timestamp): PointDetail;
  hasUpdateAt(): boolean;
  clearUpdateAt(): PointDetail;

  getColsList(): Array<string>;
  setColsList(value: Array<string>): PointDetail;
  clearColsList(): PointDetail;
  addCols(value: string, index?: number): PointDetail;

  getConditionList(): Array<sql_pb.Condition>;
  setConditionList(value: Array<sql_pb.Condition>): PointDetail;
  clearConditionList(): PointDetail;
  addCondition(value?: sql_pb.Condition, index?: number): sql_pb.Condition;

  getSelf(): google_protobuf_struct_pb.Struct | undefined;
  setSelf(value?: google_protobuf_struct_pb.Struct): PointDetail;
  hasSelf(): boolean;
  clearSelf(): PointDetail;

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
    labelxMap: Array<[string, number]>,
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
  setPointFlowId(value: string): PointFlow;

  getBusinessId(): string;
  setBusinessId(value: string): PointFlow;

  getItem(): string;
  setItem(value: string): PointFlow;

  getPoint(): number;
  setPoint(value: number): PointFlow;

  getRelated(): string;
  setRelated(value: string): PointFlow;

  getOperator(): string;
  setOperator(value: string): PointFlow;

  getCreateAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateAt(value?: google_protobuf_timestamp_pb.Timestamp): PointFlow;
  hasCreateAt(): boolean;
  clearCreateAt(): PointFlow;

  getUpdateAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateAt(value?: google_protobuf_timestamp_pb.Timestamp): PointFlow;
  hasUpdateAt(): boolean;
  clearUpdateAt(): PointFlow;

  getColsList(): Array<string>;
  setColsList(value: Array<string>): PointFlow;
  clearColsList(): PointFlow;
  addCols(value: string, index?: number): PointFlow;

  getConditionList(): Array<sql_pb.Condition>;
  setConditionList(value: Array<sql_pb.Condition>): PointFlow;
  clearConditionList(): PointFlow;
  addCondition(value?: sql_pb.Condition, index?: number): sql_pb.Condition;

  getSelf(): google_protobuf_struct_pb.Struct | undefined;
  setSelf(value?: google_protobuf_struct_pb.Struct): PointFlow;
  hasSelf(): boolean;
  clearSelf(): PointFlow;

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

