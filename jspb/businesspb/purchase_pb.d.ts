import * as jspb from "google-protobuf"

import * as sql_pb from './sql_pb';
import * as inventory_pb from './inventory_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class Purchase extends jspb.Message {
  getPurchaseId(): string;
  setPurchaseId(value: string): void;

  getSupplierId(): string;
  setSupplierId(value: string): void;

  getInventoryList(): Array<inventory_pb.Inventory>;
  setInventoryList(value: Array<inventory_pb.Inventory>): void;
  clearInventoryList(): void;
  addInventory(value?: inventory_pb.Inventory, index?: number): inventory_pb.Inventory;

  getPurchaseAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setPurchaseAt(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasPurchaseAt(): boolean;
  clearPurchaseAt(): void;

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
  toObject(includeInstance?: boolean): Purchase.AsObject;
  static toObject(includeInstance: boolean, msg: Purchase): Purchase.AsObject;
  static serializeBinaryToWriter(message: Purchase, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Purchase;
  static deserializeBinaryFromReader(message: Purchase, reader: jspb.BinaryReader): Purchase;
}

export namespace Purchase {
  export type AsObject = {
    purchaseId: string,
    supplierId: string,
    inventoryList: Array<inventory_pb.Inventory.AsObject>,
    purchaseAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    operator: string,
    createAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class Supplier extends jspb.Message {
  getSupplierId(): string;
  setSupplierId(value: string): void;

  getStatus(): number;
  setStatus(value: number): void;

  getIdentify(): string;
  setIdentify(value: string): void;

  getName(): string;
  setName(value: string): void;

  getContacter(): string;
  setContacter(value: string): void;

  getPhone(): string;
  setPhone(value: string): void;

  getAddress(): string;
  setAddress(value: string): void;

  getRemark(): string;
  setRemark(value: string): void;

  getLabelxMap(): jspb.Map<string, number>;
  clearLabelxMap(): void;

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

  getColsList(): Array<string>;
  setColsList(value: Array<string>): void;
  clearColsList(): void;
  addCols(value: string, index?: number): void;

  getConditionList(): Array<sql_pb.Condition>;
  setConditionList(value: Array<sql_pb.Condition>): void;
  clearConditionList(): void;
  addCondition(value?: sql_pb.Condition, index?: number): sql_pb.Condition;

  getSelf(): google_protobuf_struct_pb.Struct | undefined;
  setSelf(value?: google_protobuf_struct_pb.Struct): void;
  hasSelf(): boolean;
  clearSelf(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Supplier.AsObject;
  static toObject(includeInstance: boolean, msg: Supplier): Supplier.AsObject;
  static serializeBinaryToWriter(message: Supplier, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Supplier;
  static deserializeBinaryFromReader(message: Supplier, reader: jspb.BinaryReader): Supplier;
}

export namespace Supplier {
  export type AsObject = {
    supplierId: string,
    status: number,
    identify: string,
    name: string,
    contacter: string,
    phone: string,
    address: string,
    remark: string,
    labelxMap: Array<[string, number]>,
    operator: string,
    createAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    colsList: Array<string>,
    conditionList: Array<sql_pb.Condition.AsObject>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

