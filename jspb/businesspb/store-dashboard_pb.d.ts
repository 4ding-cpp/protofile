import * as jspb from 'google-protobuf'



export class StoreDashboard extends jspb.Message {
  getDate(): string;
  setDate(value: string): StoreDashboard;

  getBrowse(): string;
  setBrowse(value: string): StoreDashboard;

  getTimes(): string;
  setTimes(value: string): StoreDashboard;

  getCustomer(): string;
  setCustomer(value: string): StoreDashboard;

  getOrders(): string;
  setOrders(value: string): StoreDashboard;

  getSales(): string;
  setSales(value: string): StoreDashboard;

  getProfit(): string;
  setProfit(value: string): StoreDashboard;

  getBrowseRankList(): Array<ProductDashboard>;
  setBrowseRankList(value: Array<ProductDashboard>): StoreDashboard;
  clearBrowseRankList(): StoreDashboard;
  addBrowseRank(value?: ProductDashboard, index?: number): ProductDashboard;

  getOrdersRankList(): Array<ProductDashboard>;
  setOrdersRankList(value: Array<ProductDashboard>): StoreDashboard;
  clearOrdersRankList(): StoreDashboard;
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
    profit: string,
    browseRankList: Array<ProductDashboard.AsObject>,
    ordersRankList: Array<ProductDashboard.AsObject>,
  }
}

export class ProductDashboard extends jspb.Message {
  getProductId(): string;
  setProductId(value: string): ProductDashboard;

  getName(): string;
  setName(value: string): ProductDashboard;

  getBrowse(): number;
  setBrowse(value: number): ProductDashboard;

  getBrowseWeek(): number;
  setBrowseWeek(value: number): ProductDashboard;

  getOrders(): number;
  setOrders(value: number): ProductDashboard;

  getOrdersWeek(): number;
  setOrdersWeek(value: number): ProductDashboard;

  getSales(): number;
  setSales(value: number): ProductDashboard;

  getSalasWeek(): number;
  setSalasWeek(value: number): ProductDashboard;

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

