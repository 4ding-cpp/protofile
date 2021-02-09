import * as jspb from "google-protobuf"

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class OrderFlow extends jspb.Message {
  getFlowId(): number;
  setFlowId(value: number): void;

  getOrderId(): string;
  setOrderId(value: string): void;

  getService(): string;
  setService(value: string): void;

  getCode(): string;
  setCode(value: string): void;

  getMessage(): string;
  setMessage(value: string): void;

  getCreateAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateAt(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasCreateAt(): boolean;
  clearCreateAt(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderFlow.AsObject;
  static toObject(includeInstance: boolean, msg: OrderFlow): OrderFlow.AsObject;
  static serializeBinaryToWriter(message: OrderFlow, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderFlow;
  static deserializeBinaryFromReader(message: OrderFlow, reader: jspb.BinaryReader): OrderFlow;
}

export namespace OrderFlow {
  export type AsObject = {
    flowId: number,
    orderId: string,
    service: string,
    code: string,
    message: string,
    createAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

