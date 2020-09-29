import * as jspb from 'google-protobuf'

import * as sql_pb from './sql_pb';
import * as a$submessage_pb from './a-submessage_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class Product extends jspb.Message {
  getProductId(): string;
  setProductId(value: string): Product;

  getStatus(): number;
  setStatus(value: number): Product;

  getCode(): string;
  setCode(value: string): Product;

  getName(): google_protobuf_struct_pb.Value | undefined;
  setName(value?: google_protobuf_struct_pb.Value): Product;
  hasName(): boolean;
  clearName(): Product;

  getUrn(): string;
  setUrn(value: string): Product;

  getCost(): number;
  setCost(value: number): Product;

  getPrice(): number;
  setPrice(value: number): Product;

  getWeight(): number;
  setWeight(value: number): Product;

  getVolume(): number;
  setVolume(value: number): Product;

  getIsPickup(): boolean;
  setIsPickup(value: boolean): Product;

  getSpecxList(): Array<ProductSpec>;
  setSpecxList(value: Array<ProductSpec>): Product;
  clearSpecxList(): Product;
  addSpecx(value?: ProductSpec, index?: number): ProductSpec;

  getPhotoxList(): Array<a$submessage_pb.Image>;
  setPhotoxList(value: Array<a$submessage_pb.Image>): Product;
  clearPhotoxList(): Product;
  addPhotox(value?: a$submessage_pb.Image, index?: number): a$submessage_pb.Image;

  getLabelxMap(): jspb.Map<string, number>;
  clearLabelxMap(): Product;

  getOperator(): string;
  setOperator(value: string): Product;

  getCreateAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateAt(value?: google_protobuf_timestamp_pb.Timestamp): Product;
  hasCreateAt(): boolean;
  clearCreateAt(): Product;

  getUpdateAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateAt(value?: google_protobuf_timestamp_pb.Timestamp): Product;
  hasUpdateAt(): boolean;
  clearUpdateAt(): Product;

  getColsList(): Array<string>;
  setColsList(value: Array<string>): Product;
  clearColsList(): Product;
  addCols(value: string, index?: number): Product;

  getConditionList(): Array<sql_pb.Condition>;
  setConditionList(value: Array<sql_pb.Condition>): Product;
  clearConditionList(): Product;
  addCondition(value?: sql_pb.Condition, index?: number): sql_pb.Condition;

  getSelf(): google_protobuf_struct_pb.Struct | undefined;
  setSelf(value?: google_protobuf_struct_pb.Struct): Product;
  hasSelf(): boolean;
  clearSelf(): Product;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Product.AsObject;
  static toObject(includeInstance: boolean, msg: Product): Product.AsObject;
  static serializeBinaryToWriter(message: Product, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Product;
  static deserializeBinaryFromReader(message: Product, reader: jspb.BinaryReader): Product;
}

export namespace Product {
  export type AsObject = {
    productId: string,
    status: number,
    code: string,
    name?: google_protobuf_struct_pb.Value.AsObject,
    urn: string,
    cost: number,
    price: number,
    weight: number,
    volume: number,
    isPickup: boolean,
    specxList: Array<ProductSpec.AsObject>,
    photoxList: Array<a$submessage_pb.Image.AsObject>,
    labelxMap: Array<[string, number]>,
    operator: string,
    createAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    colsList: Array<string>,
    conditionList: Array<sql_pb.Condition.AsObject>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class ProductSpec extends jspb.Message {
  getSku(): string;
  setSku(value: string): ProductSpec;

  getProductId(): string;
  setProductId(value: string): ProductSpec;

  getStock(): number;
  setStock(value: number): ProductSpec;

  getSold(): number;
  setSold(value: number): ProductSpec;

  getItemxList(): Array<google_protobuf_struct_pb.Value>;
  setItemxList(value: Array<google_protobuf_struct_pb.Value>): ProductSpec;
  clearItemxList(): ProductSpec;
  addItemx(value?: google_protobuf_struct_pb.Value, index?: number): google_protobuf_struct_pb.Value;

  getPhoto(): a$submessage_pb.Image | undefined;
  setPhoto(value?: a$submessage_pb.Image): ProductSpec;
  hasPhoto(): boolean;
  clearPhoto(): ProductSpec;

  getDeleted(): boolean;
  setDeleted(value: boolean): ProductSpec;

  getOperator(): string;
  setOperator(value: string): ProductSpec;

  getCreateAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateAt(value?: google_protobuf_timestamp_pb.Timestamp): ProductSpec;
  hasCreateAt(): boolean;
  clearCreateAt(): ProductSpec;

  getUpdateAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateAt(value?: google_protobuf_timestamp_pb.Timestamp): ProductSpec;
  hasUpdateAt(): boolean;
  clearUpdateAt(): ProductSpec;

  getColsList(): Array<string>;
  setColsList(value: Array<string>): ProductSpec;
  clearColsList(): ProductSpec;
  addCols(value: string, index?: number): ProductSpec;

  getConditionList(): Array<sql_pb.Condition>;
  setConditionList(value: Array<sql_pb.Condition>): ProductSpec;
  clearConditionList(): ProductSpec;
  addCondition(value?: sql_pb.Condition, index?: number): sql_pb.Condition;

  getSelf(): google_protobuf_struct_pb.Struct | undefined;
  setSelf(value?: google_protobuf_struct_pb.Struct): ProductSpec;
  hasSelf(): boolean;
  clearSelf(): ProductSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ProductSpec): ProductSpec.AsObject;
  static serializeBinaryToWriter(message: ProductSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductSpec;
  static deserializeBinaryFromReader(message: ProductSpec, reader: jspb.BinaryReader): ProductSpec;
}

export namespace ProductSpec {
  export type AsObject = {
    sku: string,
    productId: string,
    stock: number,
    sold: number,
    itemxList: Array<google_protobuf_struct_pb.Value.AsObject>,
    photo?: a$submessage_pb.Image.AsObject,
    deleted: boolean,
    operator: string,
    createAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    colsList: Array<string>,
    conditionList: Array<sql_pb.Condition.AsObject>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class ProductBatch extends jspb.Message {
  getProductList(): Array<Product>;
  setProductList(value: Array<Product>): ProductBatch;
  clearProductList(): ProductBatch;
  addProduct(value?: Product, index?: number): Product;

  getSelf(): google_protobuf_struct_pb.Struct | undefined;
  setSelf(value?: google_protobuf_struct_pb.Struct): ProductBatch;
  hasSelf(): boolean;
  clearSelf(): ProductBatch;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductBatch.AsObject;
  static toObject(includeInstance: boolean, msg: ProductBatch): ProductBatch.AsObject;
  static serializeBinaryToWriter(message: ProductBatch, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductBatch;
  static deserializeBinaryFromReader(message: ProductBatch, reader: jspb.BinaryReader): ProductBatch;
}

export namespace ProductBatch {
  export type AsObject = {
    productList: Array<Product.AsObject>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

