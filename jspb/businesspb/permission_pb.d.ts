import * as jspb from "google-protobuf"

export class Permission extends jspb.Message {
  getOptionList(): Array<Option>;
  setOptionList(value: Array<Option>): void;
  clearOptionList(): void;
  addOption(value?: Option, index?: number): Option;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Permission.AsObject;
  static toObject(includeInstance: boolean, msg: Permission): Permission.AsObject;
  static serializeBinaryToWriter(message: Permission, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Permission;
  static deserializeBinaryFromReader(message: Permission, reader: jspb.BinaryReader): Permission;
}

export namespace Permission {
  export type AsObject = {
    optionList: Array<Option.AsObject>,
  }
}

export class Option extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getOpen(): boolean;
  setOpen(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Option.AsObject;
  static toObject(includeInstance: boolean, msg: Option): Option.AsObject;
  static serializeBinaryToWriter(message: Option, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Option;
  static deserializeBinaryFromReader(message: Option, reader: jspb.BinaryReader): Option;
}

export namespace Option {
  export type AsObject = {
    name: string,
    open: boolean,
  }
}

