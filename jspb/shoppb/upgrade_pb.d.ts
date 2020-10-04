import * as jspb from "google-protobuf"

export class Upgrade extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Upgrade.AsObject;
  static toObject(includeInstance: boolean, msg: Upgrade): Upgrade.AsObject;
  static serializeBinaryToWriter(message: Upgrade, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Upgrade;
  static deserializeBinaryFromReader(message: Upgrade, reader: jspb.BinaryReader): Upgrade;
}

export namespace Upgrade {
  export type AsObject = {
    id: number,
  }
}

