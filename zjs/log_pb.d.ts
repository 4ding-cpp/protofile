import * as jspb from "google-protobuf"

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class Log extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getLogAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLogAt(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasLogAt(): boolean;
  clearLogAt(): void;

  getOperator(): string;
  setOperator(value: string): void;

  getTargetId(): number;
  setTargetId(value: number): void;

  getDifferent(): string;
  setDifferent(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Log.AsObject;
  static toObject(includeInstance: boolean, msg: Log): Log.AsObject;
  static serializeBinaryToWriter(message: Log, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Log;
  static deserializeBinaryFromReader(message: Log, reader: jspb.BinaryReader): Log;
}

export namespace Log {
  export type AsObject = {
    id: number,
    logAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    operator: string,
    targetId: number,
    different: string,
  }
}

export class Different extends jspb.Message {
  getF(): string;
  setF(value: string): void;

  getOld(): string;
  setOld(value: string): void;

  getNew(): string;
  setNew(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Different.AsObject;
  static toObject(includeInstance: boolean, msg: Different): Different.AsObject;
  static serializeBinaryToWriter(message: Different, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Different;
  static deserializeBinaryFromReader(message: Different, reader: jspb.BinaryReader): Different;
}

export namespace Different {
  export type AsObject = {
    f: string,
    old: string,
    pb_new: string,
  }
}

