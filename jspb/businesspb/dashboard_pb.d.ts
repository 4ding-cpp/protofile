import * as jspb from "google-protobuf"

import * as browse_pb from './browse_pb';

export class Businessboard extends jspb.Message {
  getDashborad(): Storeboard | undefined;
  setDashborad(value?: Storeboard): void;
  hasDashborad(): boolean;
  clearDashborad(): void;

  getStoresList(): Array<Storeboard>;
  setStoresList(value: Array<Storeboard>): void;
  clearStoresList(): void;
  addStores(value?: Storeboard, index?: number): Storeboard;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Businessboard.AsObject;
  static toObject(includeInstance: boolean, msg: Businessboard): Businessboard.AsObject;
  static serializeBinaryToWriter(message: Businessboard, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Businessboard;
  static deserializeBinaryFromReader(message: Businessboard, reader: jspb.BinaryReader): Businessboard;
}

export namespace Businessboard {
  export type AsObject = {
    dashborad?: Storeboard.AsObject,
    storesList: Array<Storeboard.AsObject>,
  }
}

export class Storeboard extends jspb.Message {
  getTotal(): browse_pb.Browse | undefined;
  setTotal(value?: browse_pb.Browse): void;
  hasTotal(): boolean;
  clearTotal(): void;

  getRecentList(): Array<browse_pb.Browse>;
  setRecentList(value: Array<browse_pb.Browse>): void;
  clearRecentList(): void;
  addRecent(value?: browse_pb.Browse, index?: number): browse_pb.Browse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Storeboard.AsObject;
  static toObject(includeInstance: boolean, msg: Storeboard): Storeboard.AsObject;
  static serializeBinaryToWriter(message: Storeboard, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Storeboard;
  static deserializeBinaryFromReader(message: Storeboard, reader: jspb.BinaryReader): Storeboard;
}

export namespace Storeboard {
  export type AsObject = {
    total?: browse_pb.Browse.AsObject,
    recentList: Array<browse_pb.Browse.AsObject>,
  }
}

export class Rankboard extends jspb.Message {
  getToday(): Rank | undefined;
  setToday(value?: Rank): void;
  hasToday(): boolean;
  clearToday(): void;

  getWeek(): Rank | undefined;
  setWeek(value?: Rank): void;
  hasWeek(): boolean;
  clearWeek(): void;

  getMonth(): Rank | undefined;
  setMonth(value?: Rank): void;
  hasMonth(): boolean;
  clearMonth(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Rankboard.AsObject;
  static toObject(includeInstance: boolean, msg: Rankboard): Rankboard.AsObject;
  static serializeBinaryToWriter(message: Rankboard, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Rankboard;
  static deserializeBinaryFromReader(message: Rankboard, reader: jspb.BinaryReader): Rankboard;
}

export namespace Rankboard {
  export type AsObject = {
    today?: Rank.AsObject,
    week?: Rank.AsObject,
    month?: Rank.AsObject,
  }
}

export class Rank extends jspb.Message {
  getBrowseList(): Array<browse_pb.Browse>;
  setBrowseList(value: Array<browse_pb.Browse>): void;
  clearBrowseList(): void;
  addBrowse(value?: browse_pb.Browse, index?: number): browse_pb.Browse;

  getOrdersList(): Array<browse_pb.Browse>;
  setOrdersList(value: Array<browse_pb.Browse>): void;
  clearOrdersList(): void;
  addOrders(value?: browse_pb.Browse, index?: number): browse_pb.Browse;

  getAmountList(): Array<browse_pb.Browse>;
  setAmountList(value: Array<browse_pb.Browse>): void;
  clearAmountList(): void;
  addAmount(value?: browse_pb.Browse, index?: number): browse_pb.Browse;

  getPriceList(): Array<browse_pb.Browse>;
  setPriceList(value: Array<browse_pb.Browse>): void;
  clearPriceList(): void;
  addPrice(value?: browse_pb.Browse, index?: number): browse_pb.Browse;

  getFreightList(): Array<browse_pb.Browse>;
  setFreightList(value: Array<browse_pb.Browse>): void;
  clearFreightList(): void;
  addFreight(value?: browse_pb.Browse, index?: number): browse_pb.Browse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Rank.AsObject;
  static toObject(includeInstance: boolean, msg: Rank): Rank.AsObject;
  static serializeBinaryToWriter(message: Rank, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Rank;
  static deserializeBinaryFromReader(message: Rank, reader: jspb.BinaryReader): Rank;
}

export namespace Rank {
  export type AsObject = {
    browseList: Array<browse_pb.Browse.AsObject>,
    ordersList: Array<browse_pb.Browse.AsObject>,
    amountList: Array<browse_pb.Browse.AsObject>,
    priceList: Array<browse_pb.Browse.AsObject>,
    freightList: Array<browse_pb.Browse.AsObject>,
  }
}

