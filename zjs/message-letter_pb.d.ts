import * as jspb from "google-protobuf"

export class Letter extends jspb.Message {
  getSubject(): string;
  setSubject(value: string): void;

  getMessage(): string;
  setMessage(value: string): void;

  getDestList(): Array<string>;
  setDestList(value: Array<string>): void;
  clearDestList(): void;
  addDest(value: string, index?: number): void;

  getScheduletime(): string;
  setScheduletime(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Letter.AsObject;
  static toObject(includeInstance: boolean, msg: Letter): Letter.AsObject;
  static serializeBinaryToWriter(message: Letter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Letter;
  static deserializeBinaryFromReader(message: Letter, reader: jspb.BinaryReader): Letter;
}

export namespace Letter {
  export type AsObject = {
    subject: string,
    message: string,
    destList: Array<string>,
    scheduletime: string,
  }
}

export class LetterResult extends jspb.Message {
  getCredit(): string;
  setCredit(value: string): void;

  getSended(): string;
  setSended(value: string): void;

  getCost(): string;
  setCost(value: string): void;

  getUnsend(): string;
  setUnsend(value: string): void;

  getBatchId(): string;
  setBatchId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LetterResult.AsObject;
  static toObject(includeInstance: boolean, msg: LetterResult): LetterResult.AsObject;
  static serializeBinaryToWriter(message: LetterResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LetterResult;
  static deserializeBinaryFromReader(message: LetterResult, reader: jspb.BinaryReader): LetterResult;
}

export namespace LetterResult {
  export type AsObject = {
    credit: string,
    sended: string,
    cost: string,
    unsend: string,
    batchId: string,
  }
}

export class LetterUndo extends jspb.Message {
  getUndo(): string;
  setUndo(value: string): void;

  getCredit(): string;
  setCredit(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LetterUndo.AsObject;
  static toObject(includeInstance: boolean, msg: LetterUndo): LetterUndo.AsObject;
  static serializeBinaryToWriter(message: LetterUndo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LetterUndo;
  static deserializeBinaryFromReader(message: LetterUndo, reader: jspb.BinaryReader): LetterUndo;
}

export namespace LetterUndo {
  export type AsObject = {
    undo: string,
    credit: string,
  }
}

