import * as jspb from 'google-protobuf'

import * as sql_pb from './sql_pb';
import * as inventory_pb from './inventory_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class Purchase extends jspb.Message {
  getPurchaseId(): string;
  setPurchaseId(value: string): Purchase;

  getSupplierId(): string;
  setSupplierId(value: string): Purchase;

  getInventoryList(): Array<inventory_pb.Inventory>;
  setInventoryList(value: Array<inventory_pb.Inventory>): Purchase;
  clearInventoryList(): Purchase;
  addInventory(value?: inventory_pb.Inventory, index?: number): inventory_pb.Inventory;

  getPurchaseAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setPurchaseAt(value?: google_protobuf_timestamp_pb.Timestamp): Purchase;
  hasPurchaseAt(): boolean;
  clearPurchaseAt(): Purchase;

  getOperator(): string;
  setOperator(value: string): Purchase;

  getCreateAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateAt(value?: google_protobuf_timestamp_pb.Timestamp): Purchase;
  hasCreateAt(): boolean;
  clearCreateAt(): Purchase;

  getUpdateAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateAt(value?: google_protobuf_timestamp_pb.Timestamp): Purchase;
  hasUpdateAt(): boolean;
  clearUpdateAt(): Purchase;

  getSelf(): google_protobuf_struct_pb.Struct | undefined;
  setSelf(value?: google_protobuf_struct_pb.Struct): Purchase;
  hasSelf(): boolean;
  clearSelf(): Purchase;

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
  setSupplierId(value: string): Supplier;

  getStatus(): number;
  setStatus(value: number): Supplier;

  getIdentify(): string;
  setIdentify(value: string): Supplier;

  getName(): string;
  setName(value: string): Supplier;

  getContacter(): string;
  setContacter(value: string): Supplier;

  getPhone(): string;
  setPhone(value: string): Supplier;

  getAddress(): string;
  setAddress(value: string): Supplier;

  getRemark(): string;
  setRemark(value: string): Supplier;

  getLabelxMap(): jspb.Map<string, number>;
  clearLabelxMap(): Supplier;

  getOperator(): string;
  setOperator(value: string): Supplier;

  getCreateAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateAt(value?: google_protobuf_timestamp_pb.Timestamp): Supplier;
  hasCreateAt(): boolean;
  clearCreateAt(): Supplier;

  getUpdateAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateAt(value?: google_protobuf_timestamp_pb.Timestamp): Supplier;
  hasUpdateAt(): boolean;
  clearUpdateAt(): Supplier;

  getColsList(): Array<string>;
  setColsList(value: Array<string>): Supplier;
  clearColsList(): Supplier;
  addCols(value: string, index?: number): Supplier;

  getConditionList(): Array<sql_pb.Condition>;
  setConditionList(value: Array<sql_pb.Condition>): Supplier;
  clearConditionList(): Supplier;
  addCondition(value?: sql_pb.Condition, index?: number): sql_pb.Condition;

  getSelf(): google_protobuf_struct_pb.Struct | undefined;
  setSelf(value?: google_protobuf_struct_pb.Struct): Supplier;
  hasSelf(): boolean;
  clearSelf(): Supplier;

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

