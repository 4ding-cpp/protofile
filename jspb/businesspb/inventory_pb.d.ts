import * as jspb from 'google-protobuf'

import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class Inventory extends jspb.Message {
  getId(): number;
  setId(value: number): Inventory;

  getSku(): string;
  setSku(value: string): Inventory;

  getProductId(): string;
  setProductId(value: string): Inventory;

  getOrderId(): string;
  setOrderId(value: string): Inventory;

  getStoreId(): string;
  setStoreId(value: string): Inventory;

  getStock(): number;
  setStock(value: number): Inventory;

  getSold(): number;
  setSold(value: number): Inventory;

  getCost(): number;
  setCost(value: number): Inventory;

  getProfit(): number;
  setProfit(value: number): Inventory;

  getOperator(): string;
  setOperator(value: string): Inventory;

  getCreateAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateAt(value?: google_protobuf_timestamp_pb.Timestamp): Inventory;
  hasCreateAt(): boolean;
  clearCreateAt(): Inventory;

  getUpdateAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateAt(value?: google_protobuf_timestamp_pb.Timestamp): Inventory;
  hasUpdateAt(): boolean;
  clearUpdateAt(): Inventory;

  getSelf(): google_protobuf_struct_pb.Struct | undefined;
  setSelf(value?: google_protobuf_struct_pb.Struct): Inventory;
  hasSelf(): boolean;
  clearSelf(): Inventory;

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
    stock: number,
    sold: number,
    cost: number,
    profit: number,
    operator: string,
    createAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class SkuInfo extends jspb.Message {
  getSku(): string;
  setSku(value: string): SkuInfo;

  getName(): string;
  setName(value: string): SkuInfo;

  getProductId(): string;
  setProductId(value: string): SkuInfo;

  getStock(): number;
  setStock(value: number): SkuInfo;

  getSelf(): google_protobuf_struct_pb.Struct | undefined;
  setSelf(value?: google_protobuf_struct_pb.Struct): SkuInfo;
  hasSelf(): boolean;
  clearSelf(): SkuInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SkuInfo.AsObject;
  static toObject(includeInstance: boolean, msg: SkuInfo): SkuInfo.AsObject;
  static serializeBinaryToWriter(message: SkuInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SkuInfo;
  static deserializeBinaryFromReader(message: SkuInfo, reader: jspb.BinaryReader): SkuInfo;
}

export namespace SkuInfo {
  export type AsObject = {
    sku: string,
    name: string,
    productId: string,
    stock: number,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

