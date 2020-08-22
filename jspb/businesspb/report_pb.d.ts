import * as jspb from "google-protobuf"

import * as sql_pb from './sql_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';

export class QueryRp extends jspb.Message {
  getEq(): string;
  setEq(value: string): void;

  getNe(): string;
  setNe(value: string): void;

  getLt(): string;
  setLt(value: string): void;

  getLte(): string;
  setLte(value: string): void;

  getGt(): string;
  setGt(value: string): void;

  getGte(): string;
  setGte(value: string): void;

  getInList(): Array<string>;
  setInList(value: Array<string>): void;
  clearInList(): void;
  addIn(value: string, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryRp.AsObject;
  static toObject(includeInstance: boolean, msg: QueryRp): QueryRp.AsObject;
  static serializeBinaryToWriter(message: QueryRp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryRp;
  static deserializeBinaryFromReader(message: QueryRp, reader: jspb.BinaryReader): QueryRp;
}

export namespace QueryRp {
  export type AsObject = {
    eq: string,
    ne: string,
    lt: string,
    lte: string,
    gt: string,
    gte: string,
    inList: Array<string>,
  }
}

export class PaymentRp extends jspb.Message {
  getQuery(): PaymentRp.Query | undefined;
  setQuery(value?: PaymentRp.Query): void;
  hasQuery(): boolean;
  clearQuery(): void;

  getDataList(): Array<PaymentRp.Data>;
  setDataList(value: Array<PaymentRp.Data>): void;
  clearDataList(): void;
  addData(value?: PaymentRp.Data, index?: number): PaymentRp.Data;

  getPageLimit(): sql_pb.PageLimit | undefined;
  setPageLimit(value?: sql_pb.PageLimit): void;
  hasPageLimit(): boolean;
  clearPageLimit(): void;

  getSelf(): google_protobuf_struct_pb.Struct | undefined;
  setSelf(value?: google_protobuf_struct_pb.Struct): void;
  hasSelf(): boolean;
  clearSelf(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaymentRp.AsObject;
  static toObject(includeInstance: boolean, msg: PaymentRp): PaymentRp.AsObject;
  static serializeBinaryToWriter(message: PaymentRp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaymentRp;
  static deserializeBinaryFromReader(message: PaymentRp, reader: jspb.BinaryReader): PaymentRp;
}

export namespace PaymentRp {
  export type AsObject = {
    query?: PaymentRp.Query.AsObject,
    dataList: Array<PaymentRp.Data.AsObject>,
    pageLimit?: sql_pb.PageLimit.AsObject,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }

  export class Query extends jspb.Message {
    getCreateAt(): QueryRp | undefined;
    setCreateAt(value?: QueryRp): void;
    hasCreateAt(): boolean;
    clearCreateAt(): void;

    getCloseAt(): QueryRp | undefined;
    setCloseAt(value?: QueryRp): void;
    hasCloseAt(): boolean;
    clearCloseAt(): void;

    getState(): QueryRp | undefined;
    setState(value?: QueryRp): void;
    hasState(): boolean;
    clearState(): void;

    getStoreId(): QueryRp | undefined;
    setStoreId(value?: QueryRp): void;
    hasStoreId(): boolean;
    clearStoreId(): void;

    getPaymentService(): QueryRp | undefined;
    setPaymentService(value?: QueryRp): void;
    hasPaymentService(): boolean;
    clearPaymentService(): void;

    getPaymentType(): QueryRp | undefined;
    setPaymentType(value?: QueryRp): void;
    hasPaymentType(): boolean;
    clearPaymentType(): void;

    getLogisticsService(): QueryRp | undefined;
    setLogisticsService(value?: QueryRp): void;
    hasLogisticsService(): boolean;
    clearLogisticsService(): void;

    getLogisticsType(): QueryRp | undefined;
    setLogisticsType(value?: QueryRp): void;
    hasLogisticsType(): boolean;
    clearLogisticsType(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Query.AsObject;
    static toObject(includeInstance: boolean, msg: Query): Query.AsObject;
    static serializeBinaryToWriter(message: Query, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Query;
    static deserializeBinaryFromReader(message: Query, reader: jspb.BinaryReader): Query;
  }

  export namespace Query {
    export type AsObject = {
      createAt?: QueryRp.AsObject,
      closeAt?: QueryRp.AsObject,
      state?: QueryRp.AsObject,
      storeId?: QueryRp.AsObject,
      paymentService?: QueryRp.AsObject,
      paymentType?: QueryRp.AsObject,
      logisticsService?: QueryRp.AsObject,
      logisticsType?: QueryRp.AsObject,
    }
  }


  export class Data extends jspb.Message {
    getCreateAt(): string;
    setCreateAt(value: string): void;

    getPickupAt(): string;
    setPickupAt(value: string): void;

    getCloseAt(): string;
    setCloseAt(value: string): void;

    getPrice(): number;
    setPrice(value: number): void;

    getPaymentService(): string;
    setPaymentService(value: string): void;

    getPaymentType(): number;
    setPaymentType(value: number): void;

    getLogisticsService(): string;
    setLogisticsService(value: string): void;

    getLogisticsType(): number;
    setLogisticsType(value: number): void;

    getDevice(): string;
    setDevice(value: string): void;

    getPercentage(): number;
    setPercentage(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Data.AsObject;
    static toObject(includeInstance: boolean, msg: Data): Data.AsObject;
    static serializeBinaryToWriter(message: Data, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Data;
    static deserializeBinaryFromReader(message: Data, reader: jspb.BinaryReader): Data;
  }

  export namespace Data {
    export type AsObject = {
      createAt: string,
      pickupAt: string,
      closeAt: string,
      price: number,
      paymentService: string,
      paymentType: number,
      logisticsService: string,
      logisticsType: number,
      device: string,
      percentage: number,
    }
  }

}

