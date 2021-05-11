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

export class ReportTotal extends jspb.Message {
  getTimes(): number;
  setTimes(value: number): void;

  getAmount(): number;
  setAmount(value: number): void;

  getPrice(): number;
  setPrice(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReportTotal.AsObject;
  static toObject(includeInstance: boolean, msg: ReportTotal): ReportTotal.AsObject;
  static serializeBinaryToWriter(message: ReportTotal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReportTotal;
  static deserializeBinaryFromReader(message: ReportTotal, reader: jspb.BinaryReader): ReportTotal;
}

export namespace ReportTotal {
  export type AsObject = {
    times: number,
    amount: number,
    price: number,
  }
}

export class PaymentRp extends jspb.Message {
  getSortList(): Array<sql_pb.Sort>;
  setSortList(value: Array<sql_pb.Sort>): void;
  clearSortList(): void;
  addSort(value?: sql_pb.Sort, index?: number): sql_pb.Sort;

  getQuery(): PaymentRp.Query | undefined;
  setQuery(value?: PaymentRp.Query): void;
  hasQuery(): boolean;
  clearQuery(): void;

  getDataList(): Array<PaymentRp.Data>;
  setDataList(value: Array<PaymentRp.Data>): void;
  clearDataList(): void;
  addData(value?: PaymentRp.Data, index?: number): PaymentRp.Data;

  getGetAnalysis(): boolean;
  setGetAnalysis(value: boolean): void;

  getAs(): PaymentRp.Analysis | undefined;
  setAs(value?: PaymentRp.Analysis): void;
  hasAs(): boolean;
  clearAs(): void;

  getPageLimit(): sql_pb.PageLimit | undefined;
  setPageLimit(value?: sql_pb.PageLimit): void;
  hasPageLimit(): boolean;
  clearPageLimit(): void;

  getExportsList(): Array<string>;
  setExportsList(value: Array<string>): void;
  clearExportsList(): void;
  addExports(value: string, index?: number): void;

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
    sortList: Array<sql_pb.Sort.AsObject>,
    query?: PaymentRp.Query.AsObject,
    dataList: Array<PaymentRp.Data.AsObject>,
    getAnalysis: boolean,
    as?: PaymentRp.Analysis.AsObject,
    pageLimit?: sql_pb.PageLimit.AsObject,
    exportsList: Array<string>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }

  export class Data extends jspb.Message {
    getOrderId(): string;
    setOrderId(value: string): void;

    getStoreId(): string;
    setStoreId(value: string): void;

    getCloseAt(): string;
    setCloseAt(value: string): void;

    getPrice(): number;
    setPrice(value: number): void;

    getTotal(): ReportTotal | undefined;
    setTotal(value?: ReportTotal): void;
    hasTotal(): boolean;
    clearTotal(): void;

    getCreateAtData(): string;
    setCreateAtData(value: string): void;

    getCreateAtHour(): string;
    setCreateAtHour(value: string): void;

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
      storeId: string,
      closeAt: string,
      price: number,
      total?: ReportTotal.AsObject,
      createAtData: string,
      createAtHour: string,
      paymentService: string,
      paymentType: number,
      logisticsService: string,
      logisticsType: number,
      device: string,
    }
  }


  export class Query extends jspb.Message {
    getCloseAt(): QueryRp | undefined;
    setCloseAt(value?: QueryRp): void;
    hasCloseAt(): boolean;
    clearCloseAt(): void;

    getStoreId(): QueryRp | undefined;
    setStoreId(value?: QueryRp): void;
    hasStoreId(): boolean;
    clearStoreId(): void;

    getSalesId(): QueryRp | undefined;
    setSalesId(value?: QueryRp): void;
    hasSalesId(): boolean;
    clearSalesId(): void;

    getOrderId(): QueryRp | undefined;
    setOrderId(value?: QueryRp): void;
    hasOrderId(): boolean;
    clearOrderId(): void;

    getCustomerId(): QueryRp | undefined;
    setCustomerId(value?: QueryRp): void;
    hasCustomerId(): boolean;
    clearCustomerId(): void;

    getPrice(): QueryRp | undefined;
    setPrice(value?: QueryRp): void;
    hasPrice(): boolean;
    clearPrice(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Query.AsObject;
    static toObject(includeInstance: boolean, msg: Query): Query.AsObject;
    static serializeBinaryToWriter(message: Query, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Query;
    static deserializeBinaryFromReader(message: Query, reader: jspb.BinaryReader): Query;
  }

  export namespace Query {
    export type AsObject = {
      closeAt?: QueryRp.AsObject,
      storeId?: QueryRp.AsObject,
      salesId?: QueryRp.AsObject,
      orderId?: QueryRp.AsObject,
      customerId?: QueryRp.AsObject,
      price?: QueryRp.AsObject,
    }
  }


  export class Analysis extends jspb.Message {
    getTotal(): number;
    setTotal(value: number): void;

    getCreateAtDateMap(): jspb.Map<string, number>;
    clearCreateAtDateMap(): void;

    getCreateAtHourMap(): jspb.Map<string, number>;
    clearCreateAtHourMap(): void;

    getCloseAtDateMap(): jspb.Map<string, number>;
    clearCloseAtDateMap(): void;

    getPaymentTypeMap(): jspb.Map<string, number>;
    clearPaymentTypeMap(): void;

    getLogisticsTypeMap(): jspb.Map<string, number>;
    clearLogisticsTypeMap(): void;

    getCityMap(): jspb.Map<string, number>;
    clearCityMap(): void;

    getDeviceMap(): jspb.Map<string, number>;
    clearDeviceMap(): void;

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

export class StoreRp extends jspb.Message {
  getSortList(): Array<sql_pb.Sort>;
  setSortList(value: Array<sql_pb.Sort>): void;
  clearSortList(): void;
  addSort(value?: sql_pb.Sort, index?: number): sql_pb.Sort;

  getQuery(): StoreRp.Query | undefined;
  setQuery(value?: StoreRp.Query): void;
  hasQuery(): boolean;
  clearQuery(): void;

  getDataList(): Array<StoreRp.Data>;
  setDataList(value: Array<StoreRp.Data>): void;
  clearDataList(): void;
  addData(value?: StoreRp.Data, index?: number): StoreRp.Data;

  getPageLimit(): sql_pb.PageLimit | undefined;
  setPageLimit(value?: sql_pb.PageLimit): void;
  hasPageLimit(): boolean;
  clearPageLimit(): void;

  getSelf(): google_protobuf_struct_pb.Struct | undefined;
  setSelf(value?: google_protobuf_struct_pb.Struct): void;
  hasSelf(): boolean;
  clearSelf(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StoreRp.AsObject;
  static toObject(includeInstance: boolean, msg: StoreRp): StoreRp.AsObject;
  static serializeBinaryToWriter(message: StoreRp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StoreRp;
  static deserializeBinaryFromReader(message: StoreRp, reader: jspb.BinaryReader): StoreRp;
}

export namespace StoreRp {
  export type AsObject = {
    sortList: Array<sql_pb.Sort.AsObject>,
    query?: StoreRp.Query.AsObject,
    dataList: Array<StoreRp.Data.AsObject>,
    pageLimit?: sql_pb.PageLimit.AsObject,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }

  export class Data extends jspb.Message {
    getGroupId(): string;
    setGroupId(value: string): void;

    getStoreId(): string;
    setStoreId(value: string): void;

    getName(): string;
    setName(value: string): void;

    getTimes(): number;
    setTimes(value: number): void;

    getAmount(): number;
    setAmount(value: number): void;

    getPrice(): number;
    setPrice(value: number): void;

    getTotal(): ReportTotal | undefined;
    setTotal(value?: ReportTotal): void;
    hasTotal(): boolean;
    clearTotal(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Data.AsObject;
    static toObject(includeInstance: boolean, msg: Data): Data.AsObject;
    static serializeBinaryToWriter(message: Data, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Data;
    static deserializeBinaryFromReader(message: Data, reader: jspb.BinaryReader): Data;
  }

  export namespace Data {
    export type AsObject = {
      groupId: string,
      storeId: string,
      name: string,
      times: number,
      amount: number,
      price: number,
      total?: ReportTotal.AsObject,
    }
  }


  export class Query extends jspb.Message {
    getCloseAt(): QueryRp | undefined;
    setCloseAt(value?: QueryRp): void;
    hasCloseAt(): boolean;
    clearCloseAt(): void;

    getGroupId(): QueryRp | undefined;
    setGroupId(value?: QueryRp): void;
    hasGroupId(): boolean;
    clearGroupId(): void;

    getTimes(): QueryRp | undefined;
    setTimes(value?: QueryRp): void;
    hasTimes(): boolean;
    clearTimes(): void;

    getAmount(): QueryRp | undefined;
    setAmount(value?: QueryRp): void;
    hasAmount(): boolean;
    clearAmount(): void;

    getPrice(): QueryRp | undefined;
    setPrice(value?: QueryRp): void;
    hasPrice(): boolean;
    clearPrice(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Query.AsObject;
    static toObject(includeInstance: boolean, msg: Query): Query.AsObject;
    static serializeBinaryToWriter(message: Query, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Query;
    static deserializeBinaryFromReader(message: Query, reader: jspb.BinaryReader): Query;
  }

  export namespace Query {
    export type AsObject = {
      closeAt?: QueryRp.AsObject,
      groupId?: QueryRp.AsObject,
      times?: QueryRp.AsObject,
      amount?: QueryRp.AsObject,
      price?: QueryRp.AsObject,
    }
  }

}

export class CustomerRp extends jspb.Message {
  getSortList(): Array<sql_pb.Sort>;
  setSortList(value: Array<sql_pb.Sort>): void;
  clearSortList(): void;
  addSort(value?: sql_pb.Sort, index?: number): sql_pb.Sort;

  getQuery(): CustomerRp.Query | undefined;
  setQuery(value?: CustomerRp.Query): void;
  hasQuery(): boolean;
  clearQuery(): void;

  getDataList(): Array<CustomerRp.Data>;
  setDataList(value: Array<CustomerRp.Data>): void;
  clearDataList(): void;
  addData(value?: CustomerRp.Data, index?: number): CustomerRp.Data;

  getPageLimit(): sql_pb.PageLimit | undefined;
  setPageLimit(value?: sql_pb.PageLimit): void;
  hasPageLimit(): boolean;
  clearPageLimit(): void;

  getExportsList(): Array<string>;
  setExportsList(value: Array<string>): void;
  clearExportsList(): void;
  addExports(value: string, index?: number): void;

  getSelf(): google_protobuf_struct_pb.Struct | undefined;
  setSelf(value?: google_protobuf_struct_pb.Struct): void;
  hasSelf(): boolean;
  clearSelf(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerRp.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerRp): CustomerRp.AsObject;
  static serializeBinaryToWriter(message: CustomerRp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerRp;
  static deserializeBinaryFromReader(message: CustomerRp, reader: jspb.BinaryReader): CustomerRp;
}

export namespace CustomerRp {
  export type AsObject = {
    sortList: Array<sql_pb.Sort.AsObject>,
    query?: CustomerRp.Query.AsObject,
    dataList: Array<CustomerRp.Data.AsObject>,
    pageLimit?: sql_pb.PageLimit.AsObject,
    exportsList: Array<string>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }

  export class Data extends jspb.Message {
    getCustomerId(): string;
    setCustomerId(value: string): void;

    getGroupId(): string;
    setGroupId(value: string): void;

    getName(): string;
    setName(value: string): void;

    getEmail(): string;
    setEmail(value: string): void;

    getPhone(): string;
    setPhone(value: string): void;

    getTimes(): number;
    setTimes(value: number): void;

    getAmount(): number;
    setAmount(value: number): void;

    getPrice(): number;
    setPrice(value: number): void;

    getTotal(): ReportTotal | undefined;
    setTotal(value?: ReportTotal): void;
    hasTotal(): boolean;
    clearTotal(): void;

    getLabelxMap(): jspb.Map<string, number>;
    clearLabelxMap(): void;

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
      groupId: string,
      name: string,
      email: string,
      phone: string,
      times: number,
      amount: number,
      price: number,
      total?: ReportTotal.AsObject,
      labelxMap: Array<[string, number]>,
    }
  }


  export class Query extends jspb.Message {
    getCloseAt(): QueryRp | undefined;
    setCloseAt(value?: QueryRp): void;
    hasCloseAt(): boolean;
    clearCloseAt(): void;

    getGroupId(): QueryRp | undefined;
    setGroupId(value?: QueryRp): void;
    hasGroupId(): boolean;
    clearGroupId(): void;

    getStoreId(): QueryRp | undefined;
    setStoreId(value?: QueryRp): void;
    hasStoreId(): boolean;
    clearStoreId(): void;

    getSalesId(): QueryRp | undefined;
    setSalesId(value?: QueryRp): void;
    hasSalesId(): boolean;
    clearSalesId(): void;

    getCustomerId(): QueryRp | undefined;
    setCustomerId(value?: QueryRp): void;
    hasCustomerId(): boolean;
    clearCustomerId(): void;

    getOrderId(): QueryRp | undefined;
    setOrderId(value?: QueryRp): void;
    hasOrderId(): boolean;
    clearOrderId(): void;

    getTimes(): QueryRp | undefined;
    setTimes(value?: QueryRp): void;
    hasTimes(): boolean;
    clearTimes(): void;

    getAmount(): QueryRp | undefined;
    setAmount(value?: QueryRp): void;
    hasAmount(): boolean;
    clearAmount(): void;

    getPrice(): QueryRp | undefined;
    setPrice(value?: QueryRp): void;
    hasPrice(): boolean;
    clearPrice(): void;

    getLabelId(): string;
    setLabelId(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Query.AsObject;
    static toObject(includeInstance: boolean, msg: Query): Query.AsObject;
    static serializeBinaryToWriter(message: Query, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Query;
    static deserializeBinaryFromReader(message: Query, reader: jspb.BinaryReader): Query;
  }

  export namespace Query {
    export type AsObject = {
      closeAt?: QueryRp.AsObject,
      groupId?: QueryRp.AsObject,
      storeId?: QueryRp.AsObject,
      salesId?: QueryRp.AsObject,
      customerId?: QueryRp.AsObject,
      orderId?: QueryRp.AsObject,
      times?: QueryRp.AsObject,
      amount?: QueryRp.AsObject,
      price?: QueryRp.AsObject,
      labelId: string,
    }
  }

}

export class SalesRp extends jspb.Message {
  getSortList(): Array<sql_pb.Sort>;
  setSortList(value: Array<sql_pb.Sort>): void;
  clearSortList(): void;
  addSort(value?: sql_pb.Sort, index?: number): sql_pb.Sort;

  getQuery(): SalesRp.Query | undefined;
  setQuery(value?: SalesRp.Query): void;
  hasQuery(): boolean;
  clearQuery(): void;

  getDataList(): Array<SalesRp.Data>;
  setDataList(value: Array<SalesRp.Data>): void;
  clearDataList(): void;
  addData(value?: SalesRp.Data, index?: number): SalesRp.Data;

  getPageLimit(): sql_pb.PageLimit | undefined;
  setPageLimit(value?: sql_pb.PageLimit): void;
  hasPageLimit(): boolean;
  clearPageLimit(): void;

  getExportsList(): Array<string>;
  setExportsList(value: Array<string>): void;
  clearExportsList(): void;
  addExports(value: string, index?: number): void;

  getSelf(): google_protobuf_struct_pb.Struct | undefined;
  setSelf(value?: google_protobuf_struct_pb.Struct): void;
  hasSelf(): boolean;
  clearSelf(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SalesRp.AsObject;
  static toObject(includeInstance: boolean, msg: SalesRp): SalesRp.AsObject;
  static serializeBinaryToWriter(message: SalesRp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SalesRp;
  static deserializeBinaryFromReader(message: SalesRp, reader: jspb.BinaryReader): SalesRp;
}

export namespace SalesRp {
  export type AsObject = {
    sortList: Array<sql_pb.Sort.AsObject>,
    query?: SalesRp.Query.AsObject,
    dataList: Array<SalesRp.Data.AsObject>,
    pageLimit?: sql_pb.PageLimit.AsObject,
    exportsList: Array<string>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }

  export class Data extends jspb.Message {
    getSalesId(): string;
    setSalesId(value: string): void;

    getStoreId(): string;
    setStoreId(value: string): void;

    getTimes(): number;
    setTimes(value: number): void;

    getAmount(): number;
    setAmount(value: number): void;

    getPrice(): number;
    setPrice(value: number): void;

    getCommission(): number;
    setCommission(value: number): void;

    getTotal(): ReportTotal | undefined;
    setTotal(value?: ReportTotal): void;
    hasTotal(): boolean;
    clearTotal(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Data.AsObject;
    static toObject(includeInstance: boolean, msg: Data): Data.AsObject;
    static serializeBinaryToWriter(message: Data, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Data;
    static deserializeBinaryFromReader(message: Data, reader: jspb.BinaryReader): Data;
  }

  export namespace Data {
    export type AsObject = {
      salesId: string,
      storeId: string,
      times: number,
      amount: number,
      price: number,
      commission: number,
      total?: ReportTotal.AsObject,
    }
  }


  export class Query extends jspb.Message {
    getSalesId(): QueryRp | undefined;
    setSalesId(value?: QueryRp): void;
    hasSalesId(): boolean;
    clearSalesId(): void;

    getCloseAt(): QueryRp | undefined;
    setCloseAt(value?: QueryRp): void;
    hasCloseAt(): boolean;
    clearCloseAt(): void;

    getStoreId(): QueryRp | undefined;
    setStoreId(value?: QueryRp): void;
    hasStoreId(): boolean;
    clearStoreId(): void;

    getTimes(): QueryRp | undefined;
    setTimes(value?: QueryRp): void;
    hasTimes(): boolean;
    clearTimes(): void;

    getAmount(): QueryRp | undefined;
    setAmount(value?: QueryRp): void;
    hasAmount(): boolean;
    clearAmount(): void;

    getPrice(): QueryRp | undefined;
    setPrice(value?: QueryRp): void;
    hasPrice(): boolean;
    clearPrice(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Query.AsObject;
    static toObject(includeInstance: boolean, msg: Query): Query.AsObject;
    static serializeBinaryToWriter(message: Query, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Query;
    static deserializeBinaryFromReader(message: Query, reader: jspb.BinaryReader): Query;
  }

  export namespace Query {
    export type AsObject = {
      salesId?: QueryRp.AsObject,
      closeAt?: QueryRp.AsObject,
      storeId?: QueryRp.AsObject,
      times?: QueryRp.AsObject,
      amount?: QueryRp.AsObject,
      price?: QueryRp.AsObject,
    }
  }

}

export class ProductRp extends jspb.Message {
  getSortList(): Array<sql_pb.Sort>;
  setSortList(value: Array<sql_pb.Sort>): void;
  clearSortList(): void;
  addSort(value?: sql_pb.Sort, index?: number): sql_pb.Sort;

  getQuery(): ProductRp.Query | undefined;
  setQuery(value?: ProductRp.Query): void;
  hasQuery(): boolean;
  clearQuery(): void;

  getDataList(): Array<ProductRp.Data>;
  setDataList(value: Array<ProductRp.Data>): void;
  clearDataList(): void;
  addData(value?: ProductRp.Data, index?: number): ProductRp.Data;

  getPageLimit(): sql_pb.PageLimit | undefined;
  setPageLimit(value?: sql_pb.PageLimit): void;
  hasPageLimit(): boolean;
  clearPageLimit(): void;

  getSelf(): google_protobuf_struct_pb.Struct | undefined;
  setSelf(value?: google_protobuf_struct_pb.Struct): void;
  hasSelf(): boolean;
  clearSelf(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductRp.AsObject;
  static toObject(includeInstance: boolean, msg: ProductRp): ProductRp.AsObject;
  static serializeBinaryToWriter(message: ProductRp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductRp;
  static deserializeBinaryFromReader(message: ProductRp, reader: jspb.BinaryReader): ProductRp;
}

export namespace ProductRp {
  export type AsObject = {
    sortList: Array<sql_pb.Sort.AsObject>,
    query?: ProductRp.Query.AsObject,
    dataList: Array<ProductRp.Data.AsObject>,
    pageLimit?: sql_pb.PageLimit.AsObject,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }

  export class Data extends jspb.Message {
    getProductId(): string;
    setProductId(value: string): void;

    getPhotoSrc(): string;
    setPhotoSrc(value: string): void;

    getName(): string;
    setName(value: string): void;

    getSku(): string;
    setSku(value: string): void;

    getTimes(): number;
    setTimes(value: number): void;

    getAmount(): number;
    setAmount(value: number): void;

    getPrice(): number;
    setPrice(value: number): void;

    getTotal(): ReportTotal | undefined;
    setTotal(value?: ReportTotal): void;
    hasTotal(): boolean;
    clearTotal(): void;

    getLabelxMap(): jspb.Map<string, number>;
    clearLabelxMap(): void;

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
      times: number,
      amount: number,
      price: number,
      total?: ReportTotal.AsObject,
      labelxMap: Array<[string, number]>,
    }
  }


  export class Query extends jspb.Message {
    getCloseAt(): QueryRp | undefined;
    setCloseAt(value?: QueryRp): void;
    hasCloseAt(): boolean;
    clearCloseAt(): void;

    getStoreId(): QueryRp | undefined;
    setStoreId(value?: QueryRp): void;
    hasStoreId(): boolean;
    clearStoreId(): void;

    getSalesId(): QueryRp | undefined;
    setSalesId(value?: QueryRp): void;
    hasSalesId(): boolean;
    clearSalesId(): void;

    getOrderId(): QueryRp | undefined;
    setOrderId(value?: QueryRp): void;
    hasOrderId(): boolean;
    clearOrderId(): void;

    getCustomerId(): QueryRp | undefined;
    setCustomerId(value?: QueryRp): void;
    hasCustomerId(): boolean;
    clearCustomerId(): void;

    getProductId(): QueryRp | undefined;
    setProductId(value?: QueryRp): void;
    hasProductId(): boolean;
    clearProductId(): void;

    getSku(): QueryRp | undefined;
    setSku(value?: QueryRp): void;
    hasSku(): boolean;
    clearSku(): void;

    getTimes(): QueryRp | undefined;
    setTimes(value?: QueryRp): void;
    hasTimes(): boolean;
    clearTimes(): void;

    getAmount(): QueryRp | undefined;
    setAmount(value?: QueryRp): void;
    hasAmount(): boolean;
    clearAmount(): void;

    getPrice(): QueryRp | undefined;
    setPrice(value?: QueryRp): void;
    hasPrice(): boolean;
    clearPrice(): void;

    getLabelId(): string;
    setLabelId(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Query.AsObject;
    static toObject(includeInstance: boolean, msg: Query): Query.AsObject;
    static serializeBinaryToWriter(message: Query, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Query;
    static deserializeBinaryFromReader(message: Query, reader: jspb.BinaryReader): Query;
  }

  export namespace Query {
    export type AsObject = {
      closeAt?: QueryRp.AsObject,
      storeId?: QueryRp.AsObject,
      salesId?: QueryRp.AsObject,
      orderId?: QueryRp.AsObject,
      customerId?: QueryRp.AsObject,
      productId?: QueryRp.AsObject,
      sku?: QueryRp.AsObject,
      times?: QueryRp.AsObject,
      amount?: QueryRp.AsObject,
      price?: QueryRp.AsObject,
      labelId: string,
    }
  }

}

export class FavoriteRp extends jspb.Message {
  getSortList(): Array<sql_pb.Sort>;
  setSortList(value: Array<sql_pb.Sort>): void;
  clearSortList(): void;
  addSort(value?: sql_pb.Sort, index?: number): sql_pb.Sort;

  getQuery(): FavoriteRp.Query | undefined;
  setQuery(value?: FavoriteRp.Query): void;
  hasQuery(): boolean;
  clearQuery(): void;

  getDataList(): Array<FavoriteRp.Data>;
  setDataList(value: Array<FavoriteRp.Data>): void;
  clearDataList(): void;
  addData(value?: FavoriteRp.Data, index?: number): FavoriteRp.Data;

  getPageLimit(): sql_pb.PageLimit | undefined;
  setPageLimit(value?: sql_pb.PageLimit): void;
  hasPageLimit(): boolean;
  clearPageLimit(): void;

  getSelf(): google_protobuf_struct_pb.Struct | undefined;
  setSelf(value?: google_protobuf_struct_pb.Struct): void;
  hasSelf(): boolean;
  clearSelf(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FavoriteRp.AsObject;
  static toObject(includeInstance: boolean, msg: FavoriteRp): FavoriteRp.AsObject;
  static serializeBinaryToWriter(message: FavoriteRp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FavoriteRp;
  static deserializeBinaryFromReader(message: FavoriteRp, reader: jspb.BinaryReader): FavoriteRp;
}

export namespace FavoriteRp {
  export type AsObject = {
    sortList: Array<sql_pb.Sort.AsObject>,
    query?: FavoriteRp.Query.AsObject,
    dataList: Array<FavoriteRp.Data.AsObject>,
    pageLimit?: sql_pb.PageLimit.AsObject,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }

  export class Data extends jspb.Message {
    getStoreId(): string;
    setStoreId(value: string): void;

    getProductId(): string;
    setProductId(value: string): void;

    getName(): string;
    setName(value: string): void;

    getPhotoSrc(): string;
    setPhotoSrc(value: string): void;

    getTimes(): number;
    setTimes(value: number): void;

    getTotal(): ReportTotal | undefined;
    setTotal(value?: ReportTotal): void;
    hasTotal(): boolean;
    clearTotal(): void;

    getLabelxMap(): jspb.Map<string, number>;
    clearLabelxMap(): void;

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
      name: string,
      photoSrc: string,
      times: number,
      total?: ReportTotal.AsObject,
      labelxMap: Array<[string, number]>,
    }
  }


  export class Query extends jspb.Message {
    getStoreId(): QueryRp | undefined;
    setStoreId(value?: QueryRp): void;
    hasStoreId(): boolean;
    clearStoreId(): void;

    getTimes(): QueryRp | undefined;
    setTimes(value?: QueryRp): void;
    hasTimes(): boolean;
    clearTimes(): void;

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
      times?: QueryRp.AsObject,
    }
  }

}

export class CarRp extends jspb.Message {
  getSortList(): Array<sql_pb.Sort>;
  setSortList(value: Array<sql_pb.Sort>): void;
  clearSortList(): void;
  addSort(value?: sql_pb.Sort, index?: number): sql_pb.Sort;

  getQuery(): CarRp.Query | undefined;
  setQuery(value?: CarRp.Query): void;
  hasQuery(): boolean;
  clearQuery(): void;

  getDataList(): Array<CarRp.Data>;
  setDataList(value: Array<CarRp.Data>): void;
  clearDataList(): void;
  addData(value?: CarRp.Data, index?: number): CarRp.Data;

  getPageLimit(): sql_pb.PageLimit | undefined;
  setPageLimit(value?: sql_pb.PageLimit): void;
  hasPageLimit(): boolean;
  clearPageLimit(): void;

  getSelf(): google_protobuf_struct_pb.Struct | undefined;
  setSelf(value?: google_protobuf_struct_pb.Struct): void;
  hasSelf(): boolean;
  clearSelf(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CarRp.AsObject;
  static toObject(includeInstance: boolean, msg: CarRp): CarRp.AsObject;
  static serializeBinaryToWriter(message: CarRp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CarRp;
  static deserializeBinaryFromReader(message: CarRp, reader: jspb.BinaryReader): CarRp;
}

export namespace CarRp {
  export type AsObject = {
    sortList: Array<sql_pb.Sort.AsObject>,
    query?: CarRp.Query.AsObject,
    dataList: Array<CarRp.Data.AsObject>,
    pageLimit?: sql_pb.PageLimit.AsObject,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }

  export class Data extends jspb.Message {
    getStoreId(): string;
    setStoreId(value: string): void;

    getProductId(): string;
    setProductId(value: string): void;

    getName(): string;
    setName(value: string): void;

    getPhotoSrc(): string;
    setPhotoSrc(value: string): void;

    getTimes(): number;
    setTimes(value: number): void;

    getAmount(): number;
    setAmount(value: number): void;

    getTotal(): ReportTotal | undefined;
    setTotal(value?: ReportTotal): void;
    hasTotal(): boolean;
    clearTotal(): void;

    getLabelxMap(): jspb.Map<string, number>;
    clearLabelxMap(): void;

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
      name: string,
      photoSrc: string,
      times: number,
      amount: number,
      total?: ReportTotal.AsObject,
      labelxMap: Array<[string, number]>,
    }
  }


  export class Query extends jspb.Message {
    getStoreId(): QueryRp | undefined;
    setStoreId(value?: QueryRp): void;
    hasStoreId(): boolean;
    clearStoreId(): void;

    getTimes(): QueryRp | undefined;
    setTimes(value?: QueryRp): void;
    hasTimes(): boolean;
    clearTimes(): void;

    getAmount(): QueryRp | undefined;
    setAmount(value?: QueryRp): void;
    hasAmount(): boolean;
    clearAmount(): void;

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
      times?: QueryRp.AsObject,
      amount?: QueryRp.AsObject,
    }
  }

}

export class RegisterRp extends jspb.Message {
  getSortList(): Array<sql_pb.Sort>;
  setSortList(value: Array<sql_pb.Sort>): void;
  clearSortList(): void;
  addSort(value?: sql_pb.Sort, index?: number): sql_pb.Sort;

  getQuery(): RegisterRp.Query | undefined;
  setQuery(value?: RegisterRp.Query): void;
  hasQuery(): boolean;
  clearQuery(): void;

  getDataList(): Array<RegisterRp.Data>;
  setDataList(value: Array<RegisterRp.Data>): void;
  clearDataList(): void;
  addData(value?: RegisterRp.Data, index?: number): RegisterRp.Data;

  getGetAnalysis(): boolean;
  setGetAnalysis(value: boolean): void;

  getAs(): RegisterRp.Analysis | undefined;
  setAs(value?: RegisterRp.Analysis): void;
  hasAs(): boolean;
  clearAs(): void;

  getPageLimit(): sql_pb.PageLimit | undefined;
  setPageLimit(value?: sql_pb.PageLimit): void;
  hasPageLimit(): boolean;
  clearPageLimit(): void;

  getSelf(): google_protobuf_struct_pb.Struct | undefined;
  setSelf(value?: google_protobuf_struct_pb.Struct): void;
  hasSelf(): boolean;
  clearSelf(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterRp.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterRp): RegisterRp.AsObject;
  static serializeBinaryToWriter(message: RegisterRp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterRp;
  static deserializeBinaryFromReader(message: RegisterRp, reader: jspb.BinaryReader): RegisterRp;
}

export namespace RegisterRp {
  export type AsObject = {
    sortList: Array<sql_pb.Sort.AsObject>,
    query?: RegisterRp.Query.AsObject,
    dataList: Array<RegisterRp.Data.AsObject>,
    getAnalysis: boolean,
    as?: RegisterRp.Analysis.AsObject,
    pageLimit?: sql_pb.PageLimit.AsObject,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }

  export class Data extends jspb.Message {
    getStoreId(): string;
    setStoreId(value: string): void;

    getCreateAtDate(): string;
    setCreateAtDate(value: string): void;

    getCreateAtHour(): string;
    setCreateAtHour(value: string): void;

    getTimes(): number;
    setTimes(value: number): void;

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
      createAtDate: string,
      createAtHour: string,
      times: number,
    }
  }


  export class Query extends jspb.Message {
    getStoreId(): QueryRp | undefined;
    setStoreId(value?: QueryRp): void;
    hasStoreId(): boolean;
    clearStoreId(): void;

    getGroupId(): QueryRp | undefined;
    setGroupId(value?: QueryRp): void;
    hasGroupId(): boolean;
    clearGroupId(): void;

    getCreateAt(): QueryRp | undefined;
    setCreateAt(value?: QueryRp): void;
    hasCreateAt(): boolean;
    clearCreateAt(): void;

    getTimes(): QueryRp | undefined;
    setTimes(value?: QueryRp): void;
    hasTimes(): boolean;
    clearTimes(): void;

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
      groupId?: QueryRp.AsObject,
      createAt?: QueryRp.AsObject,
      times?: QueryRp.AsObject,
    }
  }


  export class Analysis extends jspb.Message {
    getTotal(): number;
    setTotal(value: number): void;

    getGroupIdMap(): jspb.Map<string, number>;
    clearGroupIdMap(): void;

    getStoreIdMap(): jspb.Map<string, number>;
    clearStoreIdMap(): void;

    getCreateAtDateMap(): jspb.Map<string, number>;
    clearCreateAtDateMap(): void;

    getCreateAtHourMap(): jspb.Map<string, number>;
    clearCreateAtHourMap(): void;

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
      groupIdMap: Array<[string, number]>,
      storeIdMap: Array<[string, number]>,
      createAtDateMap: Array<[string, number]>,
      createAtHourMap: Array<[string, number]>,
    }
  }

}

