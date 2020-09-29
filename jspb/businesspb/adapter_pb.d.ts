import * as jspb from 'google-protobuf'

import * as sql_pb from './sql_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class Adapter extends jspb.Message {
  getAdapterId(): string;
  setAdapterId(value: string): Adapter;

  getStoreId(): string;
  setStoreId(value: string): Adapter;

  getType(): number;
  setType(value: number): Adapter;

  getService(): string;
  setService(value: string): Adapter;

  getIsEnable(): boolean;
  setIsEnable(value: boolean): Adapter;

  getName(): google_protobuf_struct_pb.Value | undefined;
  setName(value?: google_protobuf_struct_pb.Value): Adapter;
  hasName(): boolean;
  clearName(): Adapter;

  getPaymentType(): number;
  setPaymentType(value: number): Adapter;

  getPaymentAddAmount(): number;
  setPaymentAddAmount(value: number): Adapter;

  getPaymentAddPercent(): number;
  setPaymentAddPercent(value: number): Adapter;

  getExpireDay(): number;
  setExpireDay(value: number): Adapter;

  getLogisticsType(): number;
  setLogisticsType(value: number): Adapter;

  getLogisticsSubType(): number;
  setLogisticsSubType(value: number): Adapter;

  getLogisticsFee(): number;
  setLogisticsFee(value: number): Adapter;

  getRemark(): string;
  setRemark(value: string): Adapter;

  getRedirect(): string;
  setRedirect(value: string): Adapter;

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
    type: number,
    service: string,
    isEnable: boolean,
    name?: google_protobuf_struct_pb.Value.AsObject,
    paymentType: number,
    paymentAddAmount: number,
    paymentAddPercent: number,
    expireDay: number,
    logisticsType: number,
    logisticsSubType: number,
    logisticsFee: number,
    remark: string,
    redirect: string,
    operator: string,
    createAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    colsList: Array<string>,
    conditionList: Array<sql_pb.Condition.AsObject>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

