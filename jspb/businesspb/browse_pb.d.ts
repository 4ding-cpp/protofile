import * as jspb from "google-protobuf"

export class Browse extends jspb.Message {
  getDate(): string;
  setDate(value: string): void;

  getStoreId(): string;
  setStoreId(value: string): void;

  getTarget(): string;
  setTarget(value: string): void;

  getTargetId(): string;
  setTargetId(value: string): void;

  getBrowse(): number;
  setBrowse(value: number): void;

  getTimes(): number;
  setTimes(value: number): void;

  getProfit(): number;
  setProfit(value: number): void;

  getCustomer(): number;
  setCustomer(value: number): void;

  getOrders(): number;
  setOrders(value: number): void;

  getAmount(): number;
  setAmount(value: number): void;

  getPrice(): number;
  setPrice(value: number): void;

  getFreight(): number;
  setFreight(value: number): void;

  getIsMobile(): boolean;
  setIsMobile(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Browse.AsObject;
  static toObject(includeInstance: boolean, msg: Browse): Browse.AsObject;
  static serializeBinaryToWriter(message: Browse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Browse;
  static deserializeBinaryFromReader(message: Browse, reader: jspb.BinaryReader): Browse;
}

export namespace Browse {
  export type AsObject = {
    date: string,
    storeId: string,
    target: string,
    targetId: string,
    browse: number,
    times: number,
    profit: number,
    customer: number,
    orders: number,
    amount: number,
    price: number,
    freight: number,
    isMobile: boolean,
  }
}

export class BrowseRecord extends jspb.Message {
  getBrowseList(): Array<Browse>;
  setBrowseList(value: Array<Browse>): void;
  clearBrowseList(): void;
  addBrowse(value?: Browse, index?: number): Browse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BrowseRecord.AsObject;
  static toObject(includeInstance: boolean, msg: BrowseRecord): BrowseRecord.AsObject;
  static serializeBinaryToWriter(message: BrowseRecord, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BrowseRecord;
  static deserializeBinaryFromReader(message: BrowseRecord, reader: jspb.BinaryReader): BrowseRecord;
}

export namespace BrowseRecord {
  export type AsObject = {
    browseList: Array<Browse.AsObject>,
  }
}

