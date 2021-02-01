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

  getAmount(): string;
  setAmount(value: string): void;

  getPrice(): string;
  setPrice(value: string): void;

  getFreight(): string;
  setFreight(value: string): void;

  getProfit(): string;
  setProfit(value: string): void;

  getBrowseWeekRankList(): Array<ProductDashboard>;
  setBrowseWeekRankList(value: Array<ProductDashboard>): void;
  clearBrowseWeekRankList(): void;
  addBrowseWeekRank(value?: ProductDashboard, index?: number): ProductDashboard;

  getBrowseMonthRankList(): Array<ProductDashboard>;
  setBrowseMonthRankList(value: Array<ProductDashboard>): void;
  clearBrowseMonthRankList(): void;
  addBrowseMonthRank(value?: ProductDashboard, index?: number): ProductDashboard;

  getOrdersWeekRankList(): Array<ProductDashboard>;
  setOrdersWeekRankList(value: Array<ProductDashboard>): void;
  clearOrdersWeekRankList(): void;
  addOrdersWeekRank(value?: ProductDashboard, index?: number): ProductDashboard;

  getOrdersMonthRankList(): Array<ProductDashboard>;
  setOrdersMonthRankList(value: Array<ProductDashboard>): void;
  clearOrdersMonthRankList(): void;
  addOrdersMonthRank(value?: ProductDashboard, index?: number): ProductDashboard;

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
    amount: string,
    price: string,
    freight: string,
    profit: string,
    browseWeekRankList: Array<ProductDashboard.AsObject>,
    browseMonthRankList: Array<ProductDashboard.AsObject>,
    ordersWeekRankList: Array<ProductDashboard.AsObject>,
    ordersMonthRankList: Array<ProductDashboard.AsObject>,
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

  getBrowseMonth(): number;
  setBrowseMonth(value: number): void;

  getOrders(): number;
  setOrders(value: number): void;

  getOrdersWeek(): number;
  setOrdersWeek(value: number): void;

  getOrdersMonth(): number;
  setOrdersMonth(value: number): void;

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
    browseMonth: number,
    orders: number,
    ordersWeek: number,
    ordersMonth: number,
  }
}

