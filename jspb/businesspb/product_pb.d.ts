import * as jspb from "google-protobuf"

import * as sql_pb from './sql_pb';
import * as image_pb from './image_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class Product extends jspb.Message {
  getProductId(): string;
  setProductId(value: string): void;

  getStatus(): number;
  setStatus(value: number): void;

  getCode(): string;
  setCode(value: string): void;

  getName(): google_protobuf_struct_pb.Value | undefined;
  setName(value?: google_protobuf_struct_pb.Value): void;
  hasName(): boolean;
  clearName(): void;

  getCost(): number;
  setCost(value: number): void;

  getPrice(): number;
  setPrice(value: number): void;

  getReduce(): number;
  setReduce(value: number): void;

  getWeight(): number;
  setWeight(value: number): void;

  getIsPreorder(): boolean;
  setIsPreorder(value: boolean): void;

  getIsPickup(): boolean;
  setIsPickup(value: boolean): void;

  getSpecxList(): Array<Spec>;
  setSpecxList(value: Array<Spec>): void;
  clearSpecxList(): void;
  addSpecx(value?: Spec, index?: number): Spec;

  getPhotoxList(): Array<Photo>;
  setPhotoxList(value: Array<Photo>): void;
  clearPhotoxList(): void;
  addPhotox(value?: Photo, index?: number): Photo;

  getImagexList(): Array<image_pb.Image>;
  setImagexList(value: Array<image_pb.Image>): void;
  clearImagexList(): void;
  addImagex(value?: image_pb.Image, index?: number): image_pb.Image;

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
    cost: number,
    price: number,
    reduce: number,
    weight: number,
    isPreorder: boolean,
    isPickup: boolean,
    specxList: Array<Spec.AsObject>,
    photoxList: Array<Photo.AsObject>,
    imagexList: Array<image_pb.Image.AsObject>,
    labelxMap: Array<[string, number]>,
    operator: string,
    createAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    colsList: Array<string>,
    conditionList: Array<sql_pb.Condition.AsObject>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class Spec extends jspb.Message {
  getSku(): string;
  setSku(value: string): void;

  getDisplay(): boolean;
  setDisplay(value: boolean): void;

  getStock(): number;
  setStock(value: number): void;

  getSold(): number;
  setSold(value: number): void;

  getItemxList(): Array<google_protobuf_struct_pb.Value>;
  setItemxList(value: Array<google_protobuf_struct_pb.Value>): void;
  clearItemxList(): void;
  addItemx(value?: google_protobuf_struct_pb.Value, index?: number): google_protobuf_struct_pb.Value;

  getPhoto(): string;
  setPhoto(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Spec.AsObject;
  static toObject(includeInstance: boolean, msg: Spec): Spec.AsObject;
  static serializeBinaryToWriter(message: Spec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Spec;
  static deserializeBinaryFromReader(message: Spec, reader: jspb.BinaryReader): Spec;
}

export namespace Spec {
  export type AsObject = {
    sku: string,
    display: boolean,
    stock: number,
    sold: number,
    itemxList: Array<google_protobuf_struct_pb.Value.AsObject>,
    photo: string,
  }
}

export class Photo extends jspb.Message {
  getH(): string;
  setH(value: string): void;

  getP(): string;
  setP(value: string): void;

  getN(): string;
  setN(value: string): void;

  getE(): string;
  setE(value: string): void;

  getI(): number;
  setI(value: number): void;

  getSku(): string;
  setSku(value: string): void;

  getSource(): string;
  setSource(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Photo.AsObject;
  static toObject(includeInstance: boolean, msg: Photo): Photo.AsObject;
  static serializeBinaryToWriter(message: Photo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Photo;
  static deserializeBinaryFromReader(message: Photo, reader: jspb.BinaryReader): Photo;
}

export namespace Photo {
  export type AsObject = {
    h: string,
    p: string,
    n: string,
    e: string,
    i: number,
    sku: string,
    source: string,
  }
}

export class ProductSpec extends jspb.Message {
  getProductSpecId(): string;
  setProductSpecId(value: string): void;

  getProductId(): string;
  setProductId(value: string): void;

  getStatus(): number;
  setStatus(value: number): void;

  getSpec1(): google_protobuf_struct_pb.Value | undefined;
  setSpec1(value?: google_protobuf_struct_pb.Value): void;
  hasSpec1(): boolean;
  clearSpec1(): void;

  getSpec2(): google_protobuf_struct_pb.Value | undefined;
  setSpec2(value?: google_protobuf_struct_pb.Value): void;
  hasSpec2(): boolean;
  clearSpec2(): void;

  getSpec3(): google_protobuf_struct_pb.Value | undefined;
  setSpec3(value?: google_protobuf_struct_pb.Value): void;
  hasSpec3(): boolean;
  clearSpec3(): void;

  getSku(): string;
  setSku(value: string): void;

  getPhoto(): string;
  setPhoto(value: string): void;

  getImage(): image_pb.Image | undefined;
  setImage(value?: image_pb.Image): void;
  hasImage(): boolean;
  clearImage(): void;

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
  toObject(includeInstance?: boolean): ProductSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ProductSpec): ProductSpec.AsObject;
  static serializeBinaryToWriter(message: ProductSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductSpec;
  static deserializeBinaryFromReader(message: ProductSpec, reader: jspb.BinaryReader): ProductSpec;
}

export namespace ProductSpec {
  export type AsObject = {
    productSpecId: string,
    productId: string,
    status: number,
    spec1?: google_protobuf_struct_pb.Value.AsObject,
    spec2?: google_protobuf_struct_pb.Value.AsObject,
    spec3?: google_protobuf_struct_pb.Value.AsObject,
    sku: string,
    photo: string,
    image?: image_pb.Image.AsObject,
    operator: string,
    createAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    colsList: Array<string>,
    conditionList: Array<sql_pb.Condition.AsObject>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

