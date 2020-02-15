import * as jspb from "google-protobuf"

import * as type_pb from './type_pb';
import * as sql_pb from './sql_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class Product extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getStatus(): number;
  setStatus(value: number): void;

  getCode(): string;
  setCode(value: string): void;

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

  getWeight(): number;
  setWeight(value: number): void;

  getStorePickup(): boolean;
  setStorePickup(value: boolean): void;

  getPhoto(): string;
  setPhoto(value: string): void;

  getImageList(): Array<type_pb.Image>;
  setImageList(value: Array<type_pb.Image>): void;
  clearImageList(): void;
  addImage(value?: type_pb.Image, index?: number): type_pb.Image;

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
    id: number,
    status: number,
    code: string,
    name?: google_protobuf_struct_pb.Struct.AsObject,
    cost?: google_protobuf_struct_pb.Struct.AsObject,
    price?: google_protobuf_struct_pb.Struct.AsObject,
    reduce?: google_protobuf_struct_pb.Struct.AsObject,
    weight: number,
    storePickup: boolean,
    photo: string,
    imageList: Array<type_pb.Image.AsObject>,
    operator: string,
    createAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    colsList: Array<string>,
    conditionList: Array<sql_pb.Condition.AsObject>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class ProductLabel extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getTargetList(): Array<number>;
  setTargetList(value: Array<number>): void;
  clearTargetList(): void;
  addTarget(value: number, index?: number): void;

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
  toObject(includeInstance?: boolean): ProductLabel.AsObject;
  static toObject(includeInstance: boolean, msg: ProductLabel): ProductLabel.AsObject;
  static serializeBinaryToWriter(message: ProductLabel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductLabel;
  static deserializeBinaryFromReader(message: ProductLabel, reader: jspb.BinaryReader): ProductLabel;
}

export namespace ProductLabel {
  export type AsObject = {
    name: string,
    targetList: Array<number>,
    operator: string,
    createAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    colsList: Array<string>,
    conditionList: Array<sql_pb.Condition.AsObject>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class ProductGroup extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getCode(): string;
  setCode(value: string): void;

  getTargetList(): Array<number>;
  setTargetList(value: Array<number>): void;
  clearTargetList(): void;
  addTarget(value: number, index?: number): void;

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
  toObject(includeInstance?: boolean): ProductGroup.AsObject;
  static toObject(includeInstance: boolean, msg: ProductGroup): ProductGroup.AsObject;
  static serializeBinaryToWriter(message: ProductGroup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductGroup;
  static deserializeBinaryFromReader(message: ProductGroup, reader: jspb.BinaryReader): ProductGroup;
}

export namespace ProductGroup {
  export type AsObject = {
    id: number,
    code: string,
    targetList: Array<number>,
    operator: string,
    createAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    colsList: Array<string>,
    conditionList: Array<sql_pb.Condition.AsObject>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class ProductLinker extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getStatus(): string;
  setStatus(value: string): void;

  getGroupId(): number;
  setGroupId(value: number): void;

  getStoreId(): number;
  setStoreId(value: number): void;

  getReward(): number;
  setReward(value: number): void;

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
  toObject(includeInstance?: boolean): ProductLinker.AsObject;
  static toObject(includeInstance: boolean, msg: ProductLinker): ProductLinker.AsObject;
  static serializeBinaryToWriter(message: ProductLinker, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductLinker;
  static deserializeBinaryFromReader(message: ProductLinker, reader: jspb.BinaryReader): ProductLinker;
}

export namespace ProductLinker {
  export type AsObject = {
    id: number,
    status: string,
    groupId: number,
    storeId: number,
    reward: number,
    operator: string,
    createAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    colsList: Array<string>,
    conditionList: Array<sql_pb.Condition.AsObject>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class ProductSpec extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getProductId(): number;
  setProductId(value: number): void;

  getStatus(): number;
  setStatus(value: number): void;

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

  getSku(): string;
  setSku(value: string): void;

  getPhoto(): string;
  setPhoto(value: string): void;

  getImage(): type_pb.Image | undefined;
  setImage(value?: type_pb.Image): void;
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
    id: number,
    productId: number,
    status: number,
    spec1?: google_protobuf_struct_pb.Struct.AsObject,
    spec2?: google_protobuf_struct_pb.Struct.AsObject,
    spec3?: google_protobuf_struct_pb.Struct.AsObject,
    sku: string,
    photo: string,
    image?: type_pb.Image.AsObject,
    operator: string,
    createAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    colsList: Array<string>,
    conditionList: Array<sql_pb.Condition.AsObject>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

