import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';


export class Log extends jspb.Message {
  getId(): number;
  setId(value: number): Log;

  getLogAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLogAt(value?: google_protobuf_timestamp_pb.Timestamp): Log;
  hasLogAt(): boolean;
  clearLogAt(): Log;

  getOperator(): string;
  setOperator(value: string): Log;

  getTargetId(): string;
  setTargetId(value: string): Log;

  getDifferent(): google_protobuf_struct_pb.Struct | undefined;
  setDifferent(value?: google_protobuf_struct_pb.Struct): Log;
  hasDifferent(): boolean;
  clearDifferent(): Log;

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
    targetId: string,
    different?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class Upgrade extends jspb.Message {
  getLast(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLast(value?: google_protobuf_timestamp_pb.Timestamp): Upgrade;
  hasLast(): boolean;
  clearLast(): Upgrade;

  getPageIndex(): number;
  setPageIndex(value: number): Upgrade;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Upgrade.AsObject;
  static toObject(includeInstance: boolean, msg: Upgrade): Upgrade.AsObject;
  static serializeBinaryToWriter(message: Upgrade, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Upgrade;
  static deserializeBinaryFromReader(message: Upgrade, reader: jspb.BinaryReader): Upgrade;
}

export namespace Upgrade {
  export type AsObject = {
    last?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    pageIndex: number,
  }
}

