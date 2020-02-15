import * as jspb from "google-protobuf"

import * as type_pb from './type_pb';
import * as sql_pb from './sql_pb';
import * as product_pb from './product_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class ProductD extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getStore(): number;
  setStore(value: number): void;

  getProductId(): number;
  setProductId(value: number): void;

  getClassId(): number;
  setClassId(value: number): void;

  getState(): string;
  setState(value: string): void;

  getPreOrder(): boolean;
  setPreOrder(value: boolean): void;

  getUrl(): string;
  setUrl(value: string): void;

  getSeo(): type_pb.SEO | undefined;
  setSeo(value?: type_pb.SEO): void;
  hasSeo(): boolean;
  clearSeo(): void;

  getBlockList(): Array<type_pb.Block>;
  setBlockList(value: Array<type_pb.Block>): void;
  clearBlockList(): void;
  addBlock(value?: type_pb.Block, index?: number): type_pb.Block;

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
  toObject(includeInstance?: boolean): ProductD.AsObject;
  static toObject(includeInstance: boolean, msg: ProductD): ProductD.AsObject;
  static serializeBinaryToWriter(message: ProductD, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductD;
  static deserializeBinaryFromReader(message: ProductD, reader: jspb.BinaryReader): ProductD;
}

export namespace ProductD {
  export type AsObject = {
    id: number,
    store: number,
    productId: number,
    classId: number,
    state: string,
    preOrder: boolean,
    url: string,
    seo?: type_pb.SEO.AsObject,
    blockList: Array<type_pb.Block.AsObject>,
    operator: string,
    createAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    colsList: Array<string>,
    conditionList: Array<sql_pb.Condition.AsObject>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class ProductF extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getProductId(): number;
  setProductId(value: number): void;

  getState(): string;
  setState(value: string): void;

  getClassName(): google_protobuf_struct_pb.Struct | undefined;
  setClassName(value?: google_protobuf_struct_pb.Struct): void;
  hasClassName(): boolean;
  clearClassName(): void;

  getName(): google_protobuf_struct_pb.Struct | undefined;
  setName(value?: google_protobuf_struct_pb.Struct): void;
  hasName(): boolean;
  clearName(): void;

  getReduce(): google_protobuf_struct_pb.Struct | undefined;
  setReduce(value?: google_protobuf_struct_pb.Struct): void;
  hasReduce(): boolean;
  clearReduce(): void;

  getPrice(): google_protobuf_struct_pb.Struct | undefined;
  setPrice(value?: google_protobuf_struct_pb.Struct): void;
  hasPrice(): boolean;
  clearPrice(): void;

  getStatus(): string;
  setStatus(value: string): void;

  getPhotoList(): Array<string>;
  setPhotoList(value: Array<string>): void;
  clearPhotoList(): void;
  addPhoto(value: string, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductF.AsObject;
  static toObject(includeInstance: boolean, msg: ProductF): ProductF.AsObject;
  static serializeBinaryToWriter(message: ProductF, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductF;
  static deserializeBinaryFromReader(message: ProductF, reader: jspb.BinaryReader): ProductF;
}

export namespace ProductF {
  export type AsObject = {
    id: number,
    productId: number,
    state: string,
    className?: google_protobuf_struct_pb.Struct.AsObject,
    name?: google_protobuf_struct_pb.Struct.AsObject,
    reduce?: google_protobuf_struct_pb.Struct.AsObject,
    price?: google_protobuf_struct_pb.Struct.AsObject,
    status: string,
    photoList: Array<string>,
  }
}

export class ProductG extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getState(): string;
  setState(value: string): void;

  getPreOrder(): boolean;
  setPreOrder(value: boolean): void;

  getUrl(): string;
  setUrl(value: string): void;

  getFreightAdd(): number;
  setFreightAdd(value: number): void;

  getSeo(): type_pb.SEO | undefined;
  setSeo(value?: type_pb.SEO): void;
  hasSeo(): boolean;
  clearSeo(): void;

  getBlockList(): Array<type_pb.Block>;
  setBlockList(value: Array<type_pb.Block>): void;
  clearBlockList(): void;
  addBlock(value?: type_pb.Block, index?: number): type_pb.Block;

  getClassId(): number;
  setClassId(value: number): void;

  getStatus(): string;
  setStatus(value: string): void;

  getName(): google_protobuf_struct_pb.Struct | undefined;
  setName(value?: google_protobuf_struct_pb.Struct): void;
  hasName(): boolean;
  clearName(): void;

  getCost(): google_protobuf_struct_pb.Struct | undefined;
  setCost(value?: google_protobuf_struct_pb.Struct): void;
  hasCost(): boolean;
  clearCost(): void;

  getPrice(): google_protobuf_struct_pb.Struct | undefined;
  setPrice(value?: google_protobuf_struct_pb.Struct): void;
  hasPrice(): boolean;
  clearPrice(): void;

  getReduce(): google_protobuf_struct_pb.Struct | undefined;
  setReduce(value?: google_protobuf_struct_pb.Struct): void;
  hasReduce(): boolean;
  clearReduce(): void;

  getPhotoList(): Array<string>;
  setPhotoList(value: Array<string>): void;
  clearPhotoList(): void;
  addPhoto(value: string, index?: number): void;

  getWeight(): number;
  setWeight(value: number): void;

  getStorePickup(): boolean;
  setStorePickup(value: boolean): void;

  getSpecsList(): Array<product_pb.ProductSpec>;
  setSpecsList(value: Array<product_pb.ProductSpec>): void;
  clearSpecsList(): void;
  addSpecs(value?: product_pb.ProductSpec, index?: number): product_pb.ProductSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductG.AsObject;
  static toObject(includeInstance: boolean, msg: ProductG): ProductG.AsObject;
  static serializeBinaryToWriter(message: ProductG, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductG;
  static deserializeBinaryFromReader(message: ProductG, reader: jspb.BinaryReader): ProductG;
}

export namespace ProductG {
  export type AsObject = {
    id: number,
    state: string,
    preOrder: boolean,
    url: string,
    freightAdd: number,
    seo?: type_pb.SEO.AsObject,
    blockList: Array<type_pb.Block.AsObject>,
    classId: number,
    status: string,
    name?: google_protobuf_struct_pb.Struct.AsObject,
    cost?: google_protobuf_struct_pb.Struct.AsObject,
    price?: google_protobuf_struct_pb.Struct.AsObject,
    reduce?: google_protobuf_struct_pb.Struct.AsObject,
    photoList: Array<string>,
    weight: number,
    storePickup: boolean,
    specsList: Array<product_pb.ProductSpec.AsObject>,
  }
}

export class ProductClass extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getPath(): string;
  setPath(value: string): void;

  getName(): google_protobuf_struct_pb.Struct | undefined;
  setName(value?: google_protobuf_struct_pb.Struct): void;
  hasName(): boolean;
  clearName(): void;

  getSeo(): type_pb.SEO | undefined;
  setSeo(value?: type_pb.SEO): void;
  hasSeo(): boolean;
  clearSeo(): void;

  getPhoto(): string;
  setPhoto(value: string): void;

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
  toObject(includeInstance?: boolean): ProductClass.AsObject;
  static toObject(includeInstance: boolean, msg: ProductClass): ProductClass.AsObject;
  static serializeBinaryToWriter(message: ProductClass, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductClass;
  static deserializeBinaryFromReader(message: ProductClass, reader: jspb.BinaryReader): ProductClass;
}

export namespace ProductClass {
  export type AsObject = {
    id: number,
    path: string,
    name?: google_protobuf_struct_pb.Struct.AsObject,
    seo?: type_pb.SEO.AsObject,
    photo: string,
    operator: string,
    createAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    colsList: Array<string>,
    conditionList: Array<sql_pb.Condition.AsObject>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class StoreStock extends jspb.Message {
  getProductId(): number;
  setProductId(value: number): void;

  getSales(): number;
  setSales(value: number): void;

  getPhotoList(): Array<string>;
  setPhotoList(value: Array<string>): void;
  clearPhotoList(): void;
  addPhoto(value: string, index?: number): void;

  getName(): google_protobuf_struct_pb.Struct | undefined;
  setName(value?: google_protobuf_struct_pb.Struct): void;
  hasName(): boolean;
  clearName(): void;

  getAmount(): number;
  setAmount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StoreStock.AsObject;
  static toObject(includeInstance: boolean, msg: StoreStock): StoreStock.AsObject;
  static serializeBinaryToWriter(message: StoreStock, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StoreStock;
  static deserializeBinaryFromReader(message: StoreStock, reader: jspb.BinaryReader): StoreStock;
}

export namespace StoreStock {
  export type AsObject = {
    productId: number,
    sales: number,
    photoList: Array<string>,
    name?: google_protobuf_struct_pb.Struct.AsObject,
    amount: number,
  }
}

export class StoreStockSpec extends jspb.Message {
  getProductId(): number;
  setProductId(value: number): void;

  getSpecId(): number;
  setSpecId(value: number): void;

  getSales(): number;
  setSales(value: number): void;

  getSku(): string;
  setSku(value: string): void;

  getSpec1(): google_protobuf_struct_pb.Struct | undefined;
  setSpec1(value?: google_protobuf_struct_pb.Struct): void;
  hasSpec1(): boolean;
  clearSpec1(): void;

  getSpec2(): google_protobuf_struct_pb.Struct | undefined;
  setSpec2(value?: google_protobuf_struct_pb.Struct): void;
  hasSpec2(): boolean;
  clearSpec2(): void;

  getSpec3(): google_protobuf_struct_pb.Struct | undefined;
  setSpec3(value?: google_protobuf_struct_pb.Struct): void;
  hasSpec3(): boolean;
  clearSpec3(): void;

  getAmount(): number;
  setAmount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StoreStockSpec.AsObject;
  static toObject(includeInstance: boolean, msg: StoreStockSpec): StoreStockSpec.AsObject;
  static serializeBinaryToWriter(message: StoreStockSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StoreStockSpec;
  static deserializeBinaryFromReader(message: StoreStockSpec, reader: jspb.BinaryReader): StoreStockSpec;
}

export namespace StoreStockSpec {
  export type AsObject = {
    productId: number,
    specId: number,
    sales: number,
    sku: string,
    spec1?: google_protobuf_struct_pb.Struct.AsObject,
    spec2?: google_protobuf_struct_pb.Struct.AsObject,
    spec3?: google_protobuf_struct_pb.Struct.AsObject,
    amount: number,
  }
}

