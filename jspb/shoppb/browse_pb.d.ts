import * as jspb from "google-protobuf"

export class Browse extends jspb.Message {
  getTarget(): string;
  setTarget(value: string): void;

  getTargetId(): string;
  setTargetId(value: string): void;

  getTargetName(): string;
  setTargetName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Browse.AsObject;
  static toObject(includeInstance: boolean, msg: Browse): Browse.AsObject;
  static serializeBinaryToWriter(message: Browse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Browse;
  static deserializeBinaryFromReader(message: Browse, reader: jspb.BinaryReader): Browse;
}

export namespace Browse {
  export type AsObject = {
    target: string,
    targetId: string,
    targetName: string,
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

