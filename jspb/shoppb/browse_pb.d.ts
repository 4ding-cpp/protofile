import * as jspb from 'google-protobuf'



export class Browse extends jspb.Message {
  getDate(): string;
  setDate(value: string): Browse;

  getStoreId(): string;
  setStoreId(value: string): Browse;

  getTarget(): string;
  setTarget(value: string): Browse;

  getTargetId(): string;
  setTargetId(value: string): Browse;

  getBrowse(): number;
  setBrowse(value: number): Browse;

  getTimes(): number;
  setTimes(value: number): Browse;

  getProfit(): number;
  setProfit(value: number): Browse;

  getCustomer(): number;
  setCustomer(value: number): Browse;

  getOrders(): number;
  setOrders(value: number): Browse;

  getAmount(): number;
  setAmount(value: number): Browse;

  getPrice(): number;
  setPrice(value: number): Browse;

  getFreight(): number;
  setFreight(value: number): Browse;

  getIsMobile(): boolean;
  setIsMobile(value: boolean): Browse;

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
  setBrowseList(value: Array<Browse>): BrowseRecord;
  clearBrowseList(): BrowseRecord;
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

