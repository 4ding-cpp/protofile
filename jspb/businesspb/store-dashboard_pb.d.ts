import * as jspb from "google-protobuf"

export class StoreDashboard extends jspb.Message {
  getDate(): string;
  setDate(value: string): void;

  getBrowse(): string;
  setBrowse(value: string): void;

  getTimes(): string;
  setTimes(value: string): void;

  getCustomer(): string;
  setCustomer(value: string): void;

  getOrders(): string;
  setOrders(value: string): void;

  getSales(): string;
  setSales(value: string): void;

  getBrowseRankList(): Array<ProductDashboard>;
  setBrowseRankList(value: Array<ProductDashboard>): void;
  clearBrowseRankList(): void;
  addBrowseRank(value?: ProductDashboard, index?: number): ProductDashboard;

  getOrdersRankList(): Array<ProductDashboard>;
  setOrdersRankList(value: Array<ProductDashboard>): void;
  clearOrdersRankList(): void;
  addOrdersRank(value?: ProductDashboard, index?: number): ProductDashboard;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StoreDashboard.AsObject;
  static toObject(includeInstance: boolean, msg: StoreDashboard): StoreDashboard.AsObject;
  static serializeBinaryToWriter(message: StoreDashboard, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StoreDashboard;
  static deserializeBinaryFromReader(message: StoreDashboard, reader: jspb.BinaryReader): StoreDashboard;
}

export namespace StoreDashboard {
  export type AsObject = {
    date: string,
    browse: string,
    times: string,
    customer: string,
    orders: string,
    sales: string,
    browseRankList: Array<ProductDashboard.AsObject>,
    ordersRankList: Array<ProductDashboard.AsObject>,
  }
}

export class ProductDashboard extends jspb.Message {
  getProductId(): string;
  setProductId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getBrowse(): number;
  setBrowse(value: number): void;

  getBrowseWeek(): number;
  setBrowseWeek(value: number): void;

  getOrders(): number;
  setOrders(value: number): void;

  getOrdersWeek(): number;
  setOrdersWeek(value: number): void;

  getSales(): number;
  setSales(value: number): void;

  getSalasWeek(): number;
  setSalasWeek(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductDashboard.AsObject;
  static toObject(includeInstance: boolean, msg: ProductDashboard): ProductDashboard.AsObject;
  static serializeBinaryToWriter(message: ProductDashboard, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductDashboard;
  static deserializeBinaryFromReader(message: ProductDashboard, reader: jspb.BinaryReader): ProductDashboard;
}

export namespace ProductDashboard {
  export type AsObject = {
    productId: string,
    name: string,
    browse: number,
    browseWeek: number,
    orders: number,
    ordersWeek: number,
    sales: number,
    salasWeek: number,
  }
}

