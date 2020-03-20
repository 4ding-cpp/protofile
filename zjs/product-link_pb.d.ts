import * as jspb from "google-protobuf"

import * as type_pb from './type_pb';
import * as sql_pb from './sql_pb';
import * as product_pb from './product_pb';
import * as image_pb from './image_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class ProductLink extends jspb.Message {
  getProductLinkId(): string;
  setProductLinkId(value: string): void;

  getStoreId(): string;
  setStoreId(value: string): void;

  getProductId(): string;
  setProductId(value: string): void;

  getProductClassId(): string;
  setProductClassId(value: string): void;

  getIsDisplay(): boolean;
  setIsDisplay(value: boolean): void;

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
  toObject(includeInstance?: boolean): ProductLink.AsObject;
  static toObject(includeInstance: boolean, msg: ProductLink): ProductLink.AsObject;
  static serializeBinaryToWriter(message: ProductLink, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductLink;
  static deserializeBinaryFromReader(message: ProductLink, reader: jspb.BinaryReader): ProductLink;
}

export namespace ProductLink {
  export type AsObject = {
    productLinkId: string,
    storeId: string,
    productId: string,
    productClassId: string,
    isDisplay: boolean,
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
  getProductLinkId(): string;
  setProductLinkId(value: string): void;

  getProductId(): string;
  setProductId(value: string): void;

  getProductClassId(): string;
  setProductClassId(value: string): void;

  getIsDisplay(): boolean;
  setIsDisplay(value: boolean): void;

  getStatus(): number;
  setStatus(value: number): void;

  getName(): google_protobuf_struct_pb.Value | undefined;
  setName(value?: google_protobuf_struct_pb.Value): void;
  hasName(): boolean;
  clearName(): void;

  getReduce(): number;
  setReduce(value: number): void;

  getPrice(): number;
  setPrice(value: number): void;

  getPhoto(): string;
  setPhoto(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductF.AsObject;
  static toObject(includeInstance: boolean, msg: ProductF): ProductF.AsObject;
  static serializeBinaryToWriter(message: ProductF, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductF;
  static deserializeBinaryFromReader(message: ProductF, reader: jspb.BinaryReader): ProductF;
}

export namespace ProductF {
  export type AsObject = {
    productLinkId: string,
    productId: string,
    productClassId: string,
    isDisplay: boolean,
    status: number,
    name?: google_protobuf_struct_pb.Value.AsObject,
    reduce: number,
    price: number,
    photo: string,
  }
}

export class ProductG extends jspb.Message {
  getProductLinkId(): string;
  setProductLinkId(value: string): void;

  getState(): string;
  setState(value: string): void;

  getIsPreorder(): boolean;
  setIsPreorder(value: boolean): void;

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

  getProductClassId(): string;
  setProductClassId(value: string): void;

  getStatus(): string;
  setStatus(value: string): void;

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

  getPhotoList(): Array<string>;
  setPhotoList(value: Array<string>): void;
  clearPhotoList(): void;
  addPhoto(value: string, index?: number): void;

  getWeight(): number;
  setWeight(value: number): void;

  getIsPickup(): boolean;
  setIsPickup(value: boolean): void;

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
    productLinkId: string,
    state: string,
    isPreorder: boolean,
    url: string,
    freightAdd: number,
    seo?: type_pb.SEO.AsObject,
    blockList: Array<type_pb.Block.AsObject>,
    productClassId: string,
    status: string,
    name?: google_protobuf_struct_pb.Value.AsObject,
    cost: number,
    price: number,
    reduce: number,
    photoList: Array<string>,
    weight: number,
    isPickup: boolean,
    specsList: Array<product_pb.ProductSpec.AsObject>,
  }
}

export class ProductClass extends jspb.Message {
  getProductClassId(): string;
  setProductClassId(value: string): void;

  getActivityId(): string;
  setActivityId(value: string): void;

  getLabelId(): string;
  setLabelId(value: string): void;

  getPath(): string;
  setPath(value: string): void;

  getName(): google_protobuf_struct_pb.Value | undefined;
  setName(value?: google_protobuf_struct_pb.Value): void;
  hasName(): boolean;
  clearName(): void;

  getSeo(): type_pb.SEO | undefined;
  setSeo(value?: type_pb.SEO): void;
  hasSeo(): boolean;
  clearSeo(): void;

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
  toObject(includeInstance?: boolean): ProductClass.AsObject;
  static toObject(includeInstance: boolean, msg: ProductClass): ProductClass.AsObject;
  static serializeBinaryToWriter(message: ProductClass, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductClass;
  static deserializeBinaryFromReader(message: ProductClass, reader: jspb.BinaryReader): ProductClass;
}

export namespace ProductClass {
  export type AsObject = {
    productClassId: string,
    activityId: string,
    labelId: string,
    path: string,
    name?: google_protobuf_struct_pb.Value.AsObject,
    seo?: type_pb.SEO.AsObject,
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

