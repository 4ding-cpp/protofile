import * as jspb from "google-protobuf"

import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class Inventory extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getSku(): string;
  setSku(value: string): void;

  getProductId(): string;
  setProductId(value: string): void;

  getOrderId(): string;
  setOrderId(value: string): void;

  getStoreId(): string;
  setStoreId(value: string): void;

  getCost(): number;
  setCost(value: number): void;

  getStock(): number;
  setStock(value: number): void;

  getSold(): number;
  setSold(value: number): void;

  getProfit(): number;
  setProfit(value: number): void;

  getOperator(): string;
  setOperator(value: string): void;

  getCreateAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateAt(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasCreateAt(): boolean;
  clearCreateAt(): void;

  getUpdateAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateAt(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasUpdateAt(): boolean;
  clearUpdateAt(): void;

  getSelf(): google_protobuf_struct_pb.Struct | undefined;
  setSelf(value?: google_protobuf_struct_pb.Struct): void;
  hasSelf(): boolean;
  clearSelf(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Inventory.AsObject;
  static toObject(includeInstance: boolean, msg: Inventory): Inventory.AsObject;
  static serializeBinaryToWriter(message: Inventory, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Inventory;
  static deserializeBinaryFromReader(message: Inventory, reader: jspb.BinaryReader): Inventory;
}

export namespace Inventory {
  export type AsObject = {
    id: number,
    sku: string,
    productId: string,
    orderId: string,
    storeId: string,
    cost: number,
    stock: number,
    sold: number,
    profit: number,
    operator: string,
    createAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}
