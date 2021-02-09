import * as jspb from 'google-protobuf'

import * as sql_pb from './sql_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';


export class QueryRp extends jspb.Message {
  getEq(): string;
  setEq(value: string): QueryRp;

  getNe(): string;
  setNe(value: string): QueryRp;

  getLt(): string;
  setLt(value: string): QueryRp;

  getLte(): string;
  setLte(value: string): QueryRp;

  getGt(): string;
  setGt(value: string): QueryRp;

  getGte(): string;
  setGte(value: string): QueryRp;

  getInList(): Array<string>;
  setInList(value: Array<string>): QueryRp;
  clearInList(): QueryRp;
  addIn(value: string, index?: number): QueryRp;

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

export class ReportTotal extends jspb.Message {
  getCount(): number;
  setCount(value: number): ReportTotal;

  getAmount(): number;
  setAmount(value: number): ReportTotal;

  getPrice(): number;
  setPrice(value: number): ReportTotal;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReportTotal.AsObject;
  static toObject(includeInstance: boolean, msg: ReportTotal): ReportTotal.AsObject;
  static serializeBinaryToWriter(message: ReportTotal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReportTotal;
  static deserializeBinaryFromReader(message: ReportTotal, reader: jspb.BinaryReader): ReportTotal;
}

export namespace ReportTotal {
  export type AsObject = {
    count: number,
    amount: number,
    price: number,
  }
}

export class PaymentRp extends jspb.Message {
  getGetAnalysis(): boolean;
  setGetAnalysis(value: boolean): PaymentRp;

  getSortList(): Array<sql_pb.Sort>;
  setSortList(value: Array<sql_pb.Sort>): PaymentRp;
  clearSortList(): PaymentRp;
  addSort(value?: sql_pb.Sort, index?: number): sql_pb.Sort;

  getQuery(): PaymentRp.Query | undefined;
  setQuery(value?: PaymentRp.Query): PaymentRp;
  hasQuery(): boolean;
  clearQuery(): PaymentRp;

  getDataList(): Array<PaymentRp.Data>;
  setDataList(value: Array<PaymentRp.Data>): PaymentRp;
  clearDataList(): PaymentRp;
  addData(value?: PaymentRp.Data, index?: number): PaymentRp.Data;

  getAs(): PaymentRp.Analysis | undefined;
  setAs(value?: PaymentRp.Analysis): PaymentRp;
  hasAs(): boolean;
  clearAs(): PaymentRp;

  getPageLimit(): sql_pb.PageLimit | undefined;
  setPageLimit(value?: sql_pb.PageLimit): PaymentRp;
  hasPageLimit(): boolean;
  clearPageLimit(): PaymentRp;

  getSelf(): google_protobuf_struct_pb.Struct | undefined;
  setSelf(value?: google_protobuf_struct_pb.Struct): PaymentRp;
  hasSelf(): boolean;
  clearSelf(): PaymentRp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaymentRp.AsObject;
  static toObject(includeInstance: boolean, msg: PaymentRp): PaymentRp.AsObject;
  static serializeBinaryToWriter(message: PaymentRp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaymentRp;
  static deserializeBinaryFromReader(message: PaymentRp, reader: jspb.BinaryReader): PaymentRp;
}

export namespace PaymentRp {
  export type AsObject = {
    getAnalysis: boolean,
    sortList: Array<sql_pb.Sort.AsObject>,
    query?: PaymentRp.Query.AsObject,
    dataList: Array<PaymentRp.Data.AsObject>,
    as?: PaymentRp.Analysis.AsObject,
    pageLimit?: sql_pb.PageLimit.AsObject,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }

  export class Data extends jspb.Message {
    getOrderId(): string;
    setOrderId(value: string): Data;

    getCreateAt(): string;
    setCreateAt(value: string): Data;

    getPickupAt(): string;
    setPickupAt(value: string): Data;

    getCloseAt(): string;
    setCloseAt(value: string): Data;

    getPrice(): number;
    setPrice(value: number): Data;

    getTotal(): ReportTotal | undefined;
    setTotal(value?: ReportTotal): Data;
    hasTotal(): boolean;
    clearTotal(): Data;

    getPaymentService(): string;
    setPaymentService(value: string): Data;

    getPaymentType(): number;
    setPaymentType(value: number): Data;

    getLogisticsService(): string;
    setLogisticsService(value: string): Data;

    getLogisticsType(): number;
    setLogisticsType(value: number): Data;

    getDevice(): string;
    setDevice(value: string): Data;

    getPercentage(): number;
    setPercentage(value: number): Data;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Data.AsObject;
    static toObject(includeInstance: boolean, msg: Data): Data.AsObject;
    static serializeBinaryToWriter(message: Data, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Data;
    static deserializeBinaryFromReader(message: Data, reader: jspb.BinaryReader): Data;
  }

  export namespace Data {
    export type AsObject = {
      orderId: string,
      createAt: string,
      pickupAt: string,
      closeAt: string,
      price: number,
      total?: ReportTotal.AsObject,
      paymentService: string,
      paymentType: number,
      logisticsService: string,
      logisticsType: number,
      device: string,
      percentage: number,
    }
  }


  export class Query extends jspb.Message {
    getCreateAt(): QueryRp | undefined;
    setCreateAt(value?: QueryRp): Query;
    hasCreateAt(): boolean;
    clearCreateAt(): Query;

    getCloseAt(): QueryRp | undefined;
    setCloseAt(value?: QueryRp): Query;
    hasCloseAt(): boolean;
    clearCloseAt(): Query;

    getState(): QueryRp | undefined;
    setState(value?: QueryRp): Query;
    hasState(): boolean;
    clearState(): Query;

    getStoreId(): QueryRp | undefined;
    setStoreId(value?: QueryRp): Query;
    hasStoreId(): boolean;
    clearStoreId(): Query;

    getOrderId(): QueryRp | undefined;
    setOrderId(value?: QueryRp): Query;
    hasOrderId(): boolean;
    clearOrderId(): Query;

    getCustomerId(): QueryRp | undefined;
    setCustomerId(value?: QueryRp): Query;
    hasCustomerId(): boolean;
    clearCustomerId(): Query;

    getProductId(): QueryRp | undefined;
    setProductId(value?: QueryRp): Query;
    hasProductId(): boolean;
    clearProductId(): Query;

    getPaymentService(): QueryRp | undefined;
    setPaymentService(value?: QueryRp): Query;
    hasPaymentService(): boolean;
    clearPaymentService(): Query;

    getPaymentType(): QueryRp | undefined;
    setPaymentType(value?: QueryRp): Query;
    hasPaymentType(): boolean;
    clearPaymentType(): Query;

    getLogisticsService(): QueryRp | undefined;
    setLogisticsService(value?: QueryRp): Query;
    hasLogisticsService(): boolean;
    clearLogisticsService(): Query;

    getLogisticsType(): QueryRp | undefined;
    setLogisticsType(value?: QueryRp): Query;
    hasLogisticsType(): boolean;
    clearLogisticsType(): Query;

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
      orderId?: QueryRp.AsObject,
      customerId?: QueryRp.AsObject,
      productId?: QueryRp.AsObject,
      paymentService?: QueryRp.AsObject,
      paymentType?: QueryRp.AsObject,
      logisticsService?: QueryRp.AsObject,
      logisticsType?: QueryRp.AsObject,
    }
  }


  export class Analysis extends jspb.Message {
    getTotal(): number;
    setTotal(value: number): Analysis;

    getCreateAtDateMap(): jspb.Map<string, number>;
    clearCreateAtDateMap(): Analysis;

    getCreateAtHourMap(): jspb.Map<string, number>;
    clearCreateAtHourMap(): Analysis;

    getCloseAtDateMap(): jspb.Map<string, number>;
    clearCloseAtDateMap(): Analysis;

    getPaymentTypeMap(): jspb.Map<string, number>;
    clearPaymentTypeMap(): Analysis;

    getLogisticsTypeMap(): jspb.Map<string, number>;
    clearLogisticsTypeMap(): Analysis;

    getCityMap(): jspb.Map<string, number>;
    clearCityMap(): Analysis;

    getDeviceMap(): jspb.Map<string, number>;
    clearDeviceMap(): Analysis;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Analysis.AsObject;
    static toObject(includeInstance: boolean, msg: Analysis): Analysis.AsObject;
    static serializeBinaryToWriter(message: Analysis, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Analysis;
    static deserializeBinaryFromReader(message: Analysis, reader: jspb.BinaryReader): Analysis;
  }

  export namespace Analysis {
    export type AsObject = {
      total: number,
      createAtDateMap: Array<[string, number]>,
      createAtHourMap: Array<[string, number]>,
      closeAtDateMap: Array<[string, number]>,
      paymentTypeMap: Array<[string, number]>,
      logisticsTypeMap: Array<[string, number]>,
      cityMap: Array<[string, number]>,
      deviceMap: Array<[string, number]>,
    }
  }

}

export class CustomerRp extends jspb.Message {
  getGroupList(): Array<string>;
  setGroupList(value: Array<string>): CustomerRp;
  clearGroupList(): CustomerRp;
  addGroup(value: string, index?: number): CustomerRp;

  getSortList(): Array<sql_pb.Sort>;
  setSortList(value: Array<sql_pb.Sort>): CustomerRp;
  clearSortList(): CustomerRp;
  addSort(value?: sql_pb.Sort, index?: number): sql_pb.Sort;

  getQuery(): CustomerRp.Query | undefined;
  setQuery(value?: CustomerRp.Query): CustomerRp;
  hasQuery(): boolean;
  clearQuery(): CustomerRp;

  getDataList(): Array<CustomerRp.Data>;
  setDataList(value: Array<CustomerRp.Data>): CustomerRp;
  clearDataList(): CustomerRp;
  addData(value?: CustomerRp.Data, index?: number): CustomerRp.Data;

  getPageLimit(): sql_pb.PageLimit | undefined;
  setPageLimit(value?: sql_pb.PageLimit): CustomerRp;
  hasPageLimit(): boolean;
  clearPageLimit(): CustomerRp;

  getSelf(): google_protobuf_struct_pb.Struct | undefined;
  setSelf(value?: google_protobuf_struct_pb.Struct): CustomerRp;
  hasSelf(): boolean;
  clearSelf(): CustomerRp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerRp.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerRp): CustomerRp.AsObject;
  static serializeBinaryToWriter(message: CustomerRp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerRp;
  static deserializeBinaryFromReader(message: CustomerRp, reader: jspb.BinaryReader): CustomerRp;
}

export namespace CustomerRp {
  export type AsObject = {
    groupList: Array<string>,
    sortList: Array<sql_pb.Sort.AsObject>,
    query?: CustomerRp.Query.AsObject,
    dataList: Array<CustomerRp.Data.AsObject>,
    pageLimit?: sql_pb.PageLimit.AsObject,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }

  export class Data extends jspb.Message {
    getCustomerId(): string;
    setCustomerId(value: string): Data;

    getName(): string;
    setName(value: string): Data;

    getEmail(): string;
    setEmail(value: string): Data;

    getPhone(): string;
    setPhone(value: string): Data;

    getCount(): number;
    setCount(value: number): Data;

    getAmount(): number;
    setAmount(value: number): Data;

    getPrice(): number;
    setPrice(value: number): Data;

    getTotal(): ReportTotal | undefined;
    setTotal(value?: ReportTotal): Data;
    hasTotal(): boolean;
    clearTotal(): Data;

    getStatus(): number;
    setStatus(value: number): Data;

    getLevelId(): string;
    setLevelId(value: string): Data;

    getLabelxMap(): jspb.Map<string, number>;
    clearLabelxMap(): Data;

    getRegisterAt(): string;
    setRegisterAt(value: string): Data;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Data.AsObject;
    static toObject(includeInstance: boolean, msg: Data): Data.AsObject;
    static serializeBinaryToWriter(message: Data, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Data;
    static deserializeBinaryFromReader(message: Data, reader: jspb.BinaryReader): Data;
  }

  export namespace Data {
    export type AsObject = {
      customerId: string,
      name: string,
      email: string,
      phone: string,
      count: number,
      amount: number,
      price: number,
      total?: ReportTotal.AsObject,
      status: number,
      levelId: string,
      labelxMap: Array<[string, number]>,
      registerAt: string,
    }
  }


  export class Query extends jspb.Message {
    getCreateAt(): QueryRp | undefined;
    setCreateAt(value?: QueryRp): Query;
    hasCreateAt(): boolean;
    clearCreateAt(): Query;

    getCloseAt(): QueryRp | undefined;
    setCloseAt(value?: QueryRp): Query;
    hasCloseAt(): boolean;
    clearCloseAt(): Query;

    getState(): QueryRp | undefined;
    setState(value?: QueryRp): Query;
    hasState(): boolean;
    clearState(): Query;

    getBusinessId(): QueryRp | undefined;
    setBusinessId(value?: QueryRp): Query;
    hasBusinessId(): boolean;
    clearBusinessId(): Query;

    getStoreId(): QueryRp | undefined;
    setStoreId(value?: QueryRp): Query;
    hasStoreId(): boolean;
    clearStoreId(): Query;

    getOrderId(): QueryRp | undefined;
    setOrderId(value?: QueryRp): Query;
    hasOrderId(): boolean;
    clearOrderId(): Query;

    getCustomerId(): QueryRp | undefined;
    setCustomerId(value?: QueryRp): Query;
    hasCustomerId(): boolean;
    clearCustomerId(): Query;

    getEmail(): QueryRp | undefined;
    setEmail(value?: QueryRp): Query;
    hasEmail(): boolean;
    clearEmail(): Query;

    getPhone(): QueryRp | undefined;
    setPhone(value?: QueryRp): Query;
    hasPhone(): boolean;
    clearPhone(): Query;

    getCount(): QueryRp | undefined;
    setCount(value?: QueryRp): Query;
    hasCount(): boolean;
    clearCount(): Query;

    getAmount(): QueryRp | undefined;
    setAmount(value?: QueryRp): Query;
    hasAmount(): boolean;
    clearAmount(): Query;

    getPrice(): QueryRp | undefined;
    setPrice(value?: QueryRp): Query;
    hasPrice(): boolean;
    clearPrice(): Query;

    getStatus(): QueryRp | undefined;
    setStatus(value?: QueryRp): Query;
    hasStatus(): boolean;
    clearStatus(): Query;

    getLevelId(): QueryRp | undefined;
    setLevelId(value?: QueryRp): Query;
    hasLevelId(): boolean;
    clearLevelId(): Query;

    getLabelId(): string;
    setLabelId(value: string): Query;

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
      businessId?: QueryRp.AsObject,
      storeId?: QueryRp.AsObject,
      orderId?: QueryRp.AsObject,
      customerId?: QueryRp.AsObject,
      email?: QueryRp.AsObject,
      phone?: QueryRp.AsObject,
      count?: QueryRp.AsObject,
      amount?: QueryRp.AsObject,
      price?: QueryRp.AsObject,
      status?: QueryRp.AsObject,
      levelId?: QueryRp.AsObject,
      labelId: string,
    }
  }

}

export class ProductRp extends jspb.Message {
  getGroupList(): Array<string>;
  setGroupList(value: Array<string>): ProductRp;
  clearGroupList(): ProductRp;
  addGroup(value: string, index?: number): ProductRp;

  getSortList(): Array<sql_pb.Sort>;
  setSortList(value: Array<sql_pb.Sort>): ProductRp;
  clearSortList(): ProductRp;
  addSort(value?: sql_pb.Sort, index?: number): sql_pb.Sort;

  getQuery(): ProductRp.Query | undefined;
  setQuery(value?: ProductRp.Query): ProductRp;
  hasQuery(): boolean;
  clearQuery(): ProductRp;

  getDataList(): Array<ProductRp.Data>;
  setDataList(value: Array<ProductRp.Data>): ProductRp;
  clearDataList(): ProductRp;
  addData(value?: ProductRp.Data, index?: number): ProductRp.Data;

  getPageLimit(): sql_pb.PageLimit | undefined;
  setPageLimit(value?: sql_pb.PageLimit): ProductRp;
  hasPageLimit(): boolean;
  clearPageLimit(): ProductRp;

  getSelf(): google_protobuf_struct_pb.Struct | undefined;
  setSelf(value?: google_protobuf_struct_pb.Struct): ProductRp;
  hasSelf(): boolean;
  clearSelf(): ProductRp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductRp.AsObject;
  static toObject(includeInstance: boolean, msg: ProductRp): ProductRp.AsObject;
  static serializeBinaryToWriter(message: ProductRp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductRp;
  static deserializeBinaryFromReader(message: ProductRp, reader: jspb.BinaryReader): ProductRp;
}

export namespace ProductRp {
  export type AsObject = {
    groupList: Array<string>,
    sortList: Array<sql_pb.Sort.AsObject>,
    query?: ProductRp.Query.AsObject,
    dataList: Array<ProductRp.Data.AsObject>,
    pageLimit?: sql_pb.PageLimit.AsObject,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }

  export class Data extends jspb.Message {
    getProductId(): string;
    setProductId(value: string): Data;

    getPhotoSrc(): string;
    setPhotoSrc(value: string): Data;

    getName(): string;
    setName(value: string): Data;

    getSku(): string;
    setSku(value: string): Data;

    getCount(): number;
    setCount(value: number): Data;

    getAmount(): number;
    setAmount(value: number): Data;

    getPrice(): number;
    setPrice(value: number): Data;

    getTotal(): ReportTotal | undefined;
    setTotal(value?: ReportTotal): Data;
    hasTotal(): boolean;
    clearTotal(): Data;

    getStatus(): number;
    setStatus(value: number): Data;

    getLabelxMap(): jspb.Map<string, number>;
    clearLabelxMap(): Data;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Data.AsObject;
    static toObject(includeInstance: boolean, msg: Data): Data.AsObject;
    static serializeBinaryToWriter(message: Data, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Data;
    static deserializeBinaryFromReader(message: Data, reader: jspb.BinaryReader): Data;
  }

  export namespace Data {
    export type AsObject = {
      productId: string,
      photoSrc: string,
      name: string,
      sku: string,
      count: number,
      amount: number,
      price: number,
      total?: ReportTotal.AsObject,
      status: number,
      labelxMap: Array<[string, number]>,
    }
  }


  export class Query extends jspb.Message {
    getCreateAt(): QueryRp | undefined;
    setCreateAt(value?: QueryRp): Query;
    hasCreateAt(): boolean;
    clearCreateAt(): Query;

    getCloseAt(): QueryRp | undefined;
    setCloseAt(value?: QueryRp): Query;
    hasCloseAt(): boolean;
    clearCloseAt(): Query;

    getClosed(): QueryRp | undefined;
    setClosed(value?: QueryRp): Query;
    hasClosed(): boolean;
    clearClosed(): Query;

    getBusinessId(): QueryRp | undefined;
    setBusinessId(value?: QueryRp): Query;
    hasBusinessId(): boolean;
    clearBusinessId(): Query;

    getStoreId(): QueryRp | undefined;
    setStoreId(value?: QueryRp): Query;
    hasStoreId(): boolean;
    clearStoreId(): Query;

    getOrderId(): QueryRp | undefined;
    setOrderId(value?: QueryRp): Query;
    hasOrderId(): boolean;
    clearOrderId(): Query;

    getCustomerId(): QueryRp | undefined;
    setCustomerId(value?: QueryRp): Query;
    hasCustomerId(): boolean;
    clearCustomerId(): Query;

    getProductId(): QueryRp | undefined;
    setProductId(value?: QueryRp): Query;
    hasProductId(): boolean;
    clearProductId(): Query;

    getSku(): QueryRp | undefined;
    setSku(value?: QueryRp): Query;
    hasSku(): boolean;
    clearSku(): Query;

    getCount(): QueryRp | undefined;
    setCount(value?: QueryRp): Query;
    hasCount(): boolean;
    clearCount(): Query;

    getAmount(): QueryRp | undefined;
    setAmount(value?: QueryRp): Query;
    hasAmount(): boolean;
    clearAmount(): Query;

    getPrice(): QueryRp | undefined;
    setPrice(value?: QueryRp): Query;
    hasPrice(): boolean;
    clearPrice(): Query;

    getStatus(): QueryRp | undefined;
    setStatus(value?: QueryRp): Query;
    hasStatus(): boolean;
    clearStatus(): Query;

    getLabelId(): string;
    setLabelId(value: string): Query;

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
      closed?: QueryRp.AsObject,
      businessId?: QueryRp.AsObject,
      storeId?: QueryRp.AsObject,
      orderId?: QueryRp.AsObject,
      customerId?: QueryRp.AsObject,
      productId?: QueryRp.AsObject,
      sku?: QueryRp.AsObject,
      count?: QueryRp.AsObject,
      amount?: QueryRp.AsObject,
      price?: QueryRp.AsObject,
      status?: QueryRp.AsObject,
      labelId: string,
    }
  }

}

export class FavoriteRp extends jspb.Message {
  getGroupList(): Array<string>;
  setGroupList(value: Array<string>): FavoriteRp;
  clearGroupList(): FavoriteRp;
  addGroup(value: string, index?: number): FavoriteRp;

  getSortList(): Array<sql_pb.Sort>;
  setSortList(value: Array<sql_pb.Sort>): FavoriteRp;
  clearSortList(): FavoriteRp;
  addSort(value?: sql_pb.Sort, index?: number): sql_pb.Sort;

  getQuery(): FavoriteRp.Query | undefined;
  setQuery(value?: FavoriteRp.Query): FavoriteRp;
  hasQuery(): boolean;
  clearQuery(): FavoriteRp;

  getDataList(): Array<FavoriteRp.Data>;
  setDataList(value: Array<FavoriteRp.Data>): FavoriteRp;
  clearDataList(): FavoriteRp;
  addData(value?: FavoriteRp.Data, index?: number): FavoriteRp.Data;

  getPageLimit(): sql_pb.PageLimit | undefined;
  setPageLimit(value?: sql_pb.PageLimit): FavoriteRp;
  hasPageLimit(): boolean;
  clearPageLimit(): FavoriteRp;

  getSelf(): google_protobuf_struct_pb.Struct | undefined;
  setSelf(value?: google_protobuf_struct_pb.Struct): FavoriteRp;
  hasSelf(): boolean;
  clearSelf(): FavoriteRp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FavoriteRp.AsObject;
  static toObject(includeInstance: boolean, msg: FavoriteRp): FavoriteRp.AsObject;
  static serializeBinaryToWriter(message: FavoriteRp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FavoriteRp;
  static deserializeBinaryFromReader(message: FavoriteRp, reader: jspb.BinaryReader): FavoriteRp;
}

export namespace FavoriteRp {
  export type AsObject = {
    groupList: Array<string>,
    sortList: Array<sql_pb.Sort.AsObject>,
    query?: FavoriteRp.Query.AsObject,
    dataList: Array<FavoriteRp.Data.AsObject>,
    pageLimit?: sql_pb.PageLimit.AsObject,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }

  export class Data extends jspb.Message {
    getStoreId(): string;
    setStoreId(value: string): Data;

    getProductId(): string;
    setProductId(value: string): Data;

    getPhotoSrc(): string;
    setPhotoSrc(value: string): Data;

    getShellId(): string;
    setShellId(value: string): Data;

    getCount(): number;
    setCount(value: number): Data;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Data.AsObject;
    static toObject(includeInstance: boolean, msg: Data): Data.AsObject;
    static serializeBinaryToWriter(message: Data, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Data;
    static deserializeBinaryFromReader(message: Data, reader: jspb.BinaryReader): Data;
  }

  export namespace Data {
    export type AsObject = {
      storeId: string,
      productId: string,
      photoSrc: string,
      shellId: string,
      count: number,
    }
  }


  export class Query extends jspb.Message {
    getStoreId(): QueryRp | undefined;
    setStoreId(value?: QueryRp): Query;
    hasStoreId(): boolean;
    clearStoreId(): Query;

    getProductId(): QueryRp | undefined;
    setProductId(value?: QueryRp): Query;
    hasProductId(): boolean;
    clearProductId(): Query;

    getShellId(): QueryRp | undefined;
    setShellId(value?: QueryRp): Query;
    hasShellId(): boolean;
    clearShellId(): Query;

    getCustomerId(): QueryRp | undefined;
    setCustomerId(value?: QueryRp): Query;
    hasCustomerId(): boolean;
    clearCustomerId(): Query;

    getCount(): QueryRp | undefined;
    setCount(value?: QueryRp): Query;
    hasCount(): boolean;
    clearCount(): Query;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Query.AsObject;
    static toObject(includeInstance: boolean, msg: Query): Query.AsObject;
    static serializeBinaryToWriter(message: Query, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Query;
    static deserializeBinaryFromReader(message: Query, reader: jspb.BinaryReader): Query;
  }

  export namespace Query {
    export type AsObject = {
      storeId?: QueryRp.AsObject,
      productId?: QueryRp.AsObject,
      shellId?: QueryRp.AsObject,
      customerId?: QueryRp.AsObject,
      count?: QueryRp.AsObject,
    }
  }

}

export class CarRp extends jspb.Message {
  getGroupList(): Array<string>;
  setGroupList(value: Array<string>): CarRp;
  clearGroupList(): CarRp;
  addGroup(value: string, index?: number): CarRp;

  getSortList(): Array<sql_pb.Sort>;
  setSortList(value: Array<sql_pb.Sort>): CarRp;
  clearSortList(): CarRp;
  addSort(value?: sql_pb.Sort, index?: number): sql_pb.Sort;

  getQuery(): CarRp.Query | undefined;
  setQuery(value?: CarRp.Query): CarRp;
  hasQuery(): boolean;
  clearQuery(): CarRp;

  getDataList(): Array<CarRp.Data>;
  setDataList(value: Array<CarRp.Data>): CarRp;
  clearDataList(): CarRp;
  addData(value?: CarRp.Data, index?: number): CarRp.Data;

  getPageLimit(): sql_pb.PageLimit | undefined;
  setPageLimit(value?: sql_pb.PageLimit): CarRp;
  hasPageLimit(): boolean;
  clearPageLimit(): CarRp;

  getSelf(): google_protobuf_struct_pb.Struct | undefined;
  setSelf(value?: google_protobuf_struct_pb.Struct): CarRp;
  hasSelf(): boolean;
  clearSelf(): CarRp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CarRp.AsObject;
  static toObject(includeInstance: boolean, msg: CarRp): CarRp.AsObject;
  static serializeBinaryToWriter(message: CarRp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CarRp;
  static deserializeBinaryFromReader(message: CarRp, reader: jspb.BinaryReader): CarRp;
}

export namespace CarRp {
  export type AsObject = {
    groupList: Array<string>,
    sortList: Array<sql_pb.Sort.AsObject>,
    query?: CarRp.Query.AsObject,
    dataList: Array<CarRp.Data.AsObject>,
    pageLimit?: sql_pb.PageLimit.AsObject,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }

  export class Data extends jspb.Message {
    getStoreId(): string;
    setStoreId(value: string): Data;

    getProductId(): string;
    setProductId(value: string): Data;

    getSku(): string;
    setSku(value: string): Data;

    getPhotoSrc(): string;
    setPhotoSrc(value: string): Data;

    getCount(): number;
    setCount(value: number): Data;

    getAmount(): number;
    setAmount(value: number): Data;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Data.AsObject;
    static toObject(includeInstance: boolean, msg: Data): Data.AsObject;
    static serializeBinaryToWriter(message: Data, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Data;
    static deserializeBinaryFromReader(message: Data, reader: jspb.BinaryReader): Data;
  }

  export namespace Data {
    export type AsObject = {
      storeId: string,
      productId: string,
      sku: string,
      photoSrc: string,
      count: number,
      amount: number,
    }
  }


  export class Query extends jspb.Message {
    getStoreId(): QueryRp | undefined;
    setStoreId(value?: QueryRp): Query;
    hasStoreId(): boolean;
    clearStoreId(): Query;

    getCustomerId(): QueryRp | undefined;
    setCustomerId(value?: QueryRp): Query;
    hasCustomerId(): boolean;
    clearCustomerId(): Query;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Query.AsObject;
    static toObject(includeInstance: boolean, msg: Query): Query.AsObject;
    static serializeBinaryToWriter(message: Query, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Query;
    static deserializeBinaryFromReader(message: Query, reader: jspb.BinaryReader): Query;
  }

  export namespace Query {
    export type AsObject = {
      storeId?: QueryRp.AsObject,
      customerId?: QueryRp.AsObject,
    }
  }

}

