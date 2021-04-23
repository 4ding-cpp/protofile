import * as jspb from "google-protobuf"

import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';

export class Packet extends jspb.Message {
  getNo(): number;
  setNo(value: number): void;

  getStartAt(): number;
  setStartAt(value: number): void;

  getDoneAt(): number;
  setDoneAt(value: number): void;

  getMethod(): string;
  setMethod(value: string): void;

  getIn(): google_protobuf_struct_pb.Value | undefined;
  setIn(value?: google_protobuf_struct_pb.Value): void;
  hasIn(): boolean;
  clearIn(): void;

  getOut(): google_protobuf_struct_pb.Value | undefined;
  setOut(value?: google_protobuf_struct_pb.Value): void;
  hasOut(): boolean;
  clearOut(): void;

  getCode(): number;
  setCode(value: number): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Packet.AsObject;
  static toObject(includeInstance: boolean, msg: Packet): Packet.AsObject;
  static serializeBinaryToWriter(message: Packet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Packet;
  static deserializeBinaryFromReader(message: Packet, reader: jspb.BinaryReader): Packet;
}

export namespace Packet {
  export type AsObject = {
    no: number,
    startAt: number,
    doneAt: number,
    method: string,
    pb_in?: google_protobuf_struct_pb.Value.AsObject,
    out?: google_protobuf_struct_pb.Value.AsObject,
    code: number,
    message: string,
  }
}

