import * as jspb from 'google-protobuf'

import * as browse_pb from './browse_pb';


export class Businessboard extends jspb.Message {
  getDashboard(): Storeboard | undefined;
  setDashboard(value?: Storeboard): Businessboard;
  hasDashboard(): boolean;
  clearDashboard(): Businessboard;

  getStoresList(): Array<Storeboard>;
  setStoresList(value: Array<Storeboard>): Businessboard;
  clearStoresList(): Businessboard;
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
    dashboard?: Storeboard.AsObject,
    storesList: Array<Storeboard.AsObject>,
  }
}

export class Storeboard extends jspb.Message {
  getTotal(): browse_pb.Browse | undefined;
  setTotal(value?: browse_pb.Browse): Storeboard;
  hasTotal(): boolean;
  clearTotal(): Storeboard;

  getRecentList(): Array<browse_pb.Browse>;
  setRecentList(value: Array<browse_pb.Browse>): Storeboard;
  clearRecentList(): Storeboard;
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
  setToday(value?: Rank): Rankboard;
  hasToday(): boolean;
  clearToday(): Rankboard;

  getWeek(): Rank | undefined;
  setWeek(value?: Rank): Rankboard;
  hasWeek(): boolean;
  clearWeek(): Rankboard;

  getMonth(): Rank | undefined;
  setMonth(value?: Rank): Rankboard;
  hasMonth(): boolean;
  clearMonth(): Rankboard;

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
  setBrowseList(value: Array<browse_pb.Browse>): Rank;
  clearBrowseList(): Rank;
  addBrowse(value?: browse_pb.Browse, index?: number): browse_pb.Browse;

  getOrdersList(): Array<browse_pb.Browse>;
  setOrdersList(value: Array<browse_pb.Browse>): Rank;
  clearOrdersList(): Rank;
  addOrders(value?: browse_pb.Browse, index?: number): browse_pb.Browse;

  getAmountList(): Array<browse_pb.Browse>;
  setAmountList(value: Array<browse_pb.Browse>): Rank;
  clearAmountList(): Rank;
  addAmount(value?: browse_pb.Browse, index?: number): browse_pb.Browse;

  getPriceList(): Array<browse_pb.Browse>;
  setPriceList(value: Array<browse_pb.Browse>): Rank;
  clearPriceList(): Rank;
  addPrice(value?: browse_pb.Browse, index?: number): browse_pb.Browse;

  getFreightList(): Array<browse_pb.Browse>;
  setFreightList(value: Array<browse_pb.Browse>): Rank;
  clearFreightList(): Rank;
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

