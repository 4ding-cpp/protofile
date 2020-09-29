import * as jspb from 'google-protobuf'

import * as sql_pb from './sql_pb';
import * as product_pb from './product_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class B2B extends jspb.Message {
  getB2bId(): number;
  setB2bId(value: number): B2B;

  getExportId(): string;
  setExportId(value: string): B2B;

  getImportId(): string;
  setImportId(value: string): B2B;

  getSecret(): string;
  setSecret(value: string): B2B;

  getExportState(): number;
  setExportState(value: number): B2B;

  getImportState(): number;
  setImportState(value: number): B2B;

  getTarget(): B2BTarget | undefined;
  setTarget(value?: B2BTarget): B2B;
  hasTarget(): boolean;
  clearTarget(): B2B;

  getLabelxMap(): jspb.Map<string, number>;
  clearLabelxMap(): B2B;

  getOperator(): string;
  setOperator(value: string): B2B;

  getCreateAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateAt(value?: google_protobuf_timestamp_pb.Timestamp): B2B;
  hasCreateAt(): boolean;
  clearCreateAt(): B2B;

  getUpdateAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateAt(value?: google_protobuf_timestamp_pb.Timestamp): B2B;
  hasUpdateAt(): boolean;
  clearUpdateAt(): B2B;

  getColsList(): Array<string>;
  setColsList(value: Array<string>): B2B;
  clearColsList(): B2B;
  addCols(value: string, index?: number): B2B;

  getConditionList(): Array<sql_pb.Condition>;
  setConditionList(value: Array<sql_pb.Condition>): B2B;
  clearConditionList(): B2B;
  addCondition(value?: sql_pb.Condition, index?: number): sql_pb.Condition;

  getSelf(): google_protobuf_struct_pb.Struct | undefined;
  setSelf(value?: google_protobuf_struct_pb.Struct): B2B;
  hasSelf(): boolean;
  clearSelf(): B2B;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): B2B.AsObject;
  static toObject(includeInstance: boolean, msg: B2B): B2B.AsObject;
  static serializeBinaryToWriter(message: B2B, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): B2B;
  static deserializeBinaryFromReader(message: B2B, reader: jspb.BinaryReader): B2B;
}

export namespace B2B {
  export type AsObject = {
    b2bId: number,
    exportId: string,
    importId: string,
    secret: string,
    exportState: number,
    importState: number,
    target?: B2BTarget.AsObject,
    labelxMap: Array<[string, number]>,
    operator: string,
    createAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    colsList: Array<string>,
    conditionList: Array<sql_pb.Condition.AsObject>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class B2BTarget extends jspb.Message {
  getInList(): Array<string>;
  setInList(value: Array<string>): B2BTarget;
  clearInList(): B2BTarget;
  addIn(value: string, index?: number): B2BTarget;

  getOmitList(): Array<string>;
  setOmitList(value: Array<string>): B2BTarget;
  clearOmitList(): B2BTarget;
  addOmit(value: string, index?: number): B2BTarget;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): B2BTarget.AsObject;
  static toObject(includeInstance: boolean, msg: B2BTarget): B2BTarget.AsObject;
  static serializeBinaryToWriter(message: B2BTarget, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): B2BTarget;
  static deserializeBinaryFromReader(message: B2BTarget, reader: jspb.BinaryReader): B2BTarget;
}

export namespace B2BTarget {
  export type AsObject = {
    inList: Array<string>,
    omitList: Array<string>,
  }
}

export class B2BProduct extends jspb.Message {
  getProductList(): Array<product_pb.Product>;
  setProductList(value: Array<product_pb.Product>): B2BProduct;
  clearProductList(): B2BProduct;
  addProduct(value?: product_pb.Product, index?: number): product_pb.Product;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): B2BProduct.AsObject;
  static toObject(includeInstance: boolean, msg: B2BProduct): B2BProduct.AsObject;
  static serializeBinaryToWriter(message: B2BProduct, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): B2BProduct;
  static deserializeBinaryFromReader(message: B2BProduct, reader: jspb.BinaryReader): B2BProduct;
}

export namespace B2BProduct {
  export type AsObject = {
    productList: Array<product_pb.Product.AsObject>,
  }
}

