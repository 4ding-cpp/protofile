import * as jspb from "google-protobuf"

import * as sql_pb from './sql_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class Permission extends jspb.Message {
  getOptionList(): Array<Option>;
  setOptionList(value: Array<Option>): void;
  clearOptionList(): void;
  addOption(value?: Option, index?: number): Option;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Permission.AsObject;
  static toObject(includeInstance: boolean, msg: Permission): Permission.AsObject;
  static serializeBinaryToWriter(message: Permission, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Permission;
  static deserializeBinaryFromReader(message: Permission, reader: jspb.BinaryReader): Permission;
}

export namespace Permission {
  export type AsObject = {
    optionList: Array<Option.AsObject>,
  }
}

export class Option extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getOpen(): boolean;
  setOpen(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Option.AsObject;
  static toObject(includeInstance: boolean, msg: Option): Option.AsObject;
  static serializeBinaryToWriter(message: Option, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Option;
  static deserializeBinaryFromReader(message: Option, reader: jspb.BinaryReader): Option;
}

export namespace Option {
  export type AsObject = {
    name: string,
    open: boolean,
  }
}

export class Label extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getLink(): string;
  setLink(value: string): void;

  getName(): string;
  setName(value: string): void;

  getOperator(): string;
  setOperator(value: string): void;

  getUpdateAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateAt(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasUpdateAt(): boolean;
  clearUpdateAt(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Label.AsObject;
  static toObject(includeInstance: boolean, msg: Label): Label.AsObject;
  static serializeBinaryToWriter(message: Label, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Label;
  static deserializeBinaryFromReader(message: Label, reader: jspb.BinaryReader): Label;
}

export namespace Label {
  export type AsObject = {
    id: number,
    link: string,
    name: string,
    operator: string,
    updateAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class Setting extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getStoreId(): number;
  setStoreId(value: number): void;

  getItem(): string;
  setItem(value: string): void;

  getContent(): string;
  setContent(value: string): void;

  getOperator(): string;
  setOperator(value: string): void;

  getUpdateAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateAt(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasUpdateAt(): boolean;
  clearUpdateAt(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Setting.AsObject;
  static toObject(includeInstance: boolean, msg: Setting): Setting.AsObject;
  static serializeBinaryToWriter(message: Setting, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Setting;
  static deserializeBinaryFromReader(message: Setting, reader: jspb.BinaryReader): Setting;
}

export namespace Setting {
  export type AsObject = {
    id: number,
    storeId: number,
    item: string,
    content: string,
    operator: string,
    updateAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class SEO extends jspb.Message {
  getTitle(): google_protobuf_struct_pb.Struct | undefined;
  setTitle(value?: google_protobuf_struct_pb.Struct): void;
  hasTitle(): boolean;
  clearTitle(): void;

  getKeywords(): google_protobuf_struct_pb.Struct | undefined;
  setKeywords(value?: google_protobuf_struct_pb.Struct): void;
  hasKeywords(): boolean;
  clearKeywords(): void;

  getDescription(): google_protobuf_struct_pb.Struct | undefined;
  setDescription(value?: google_protobuf_struct_pb.Struct): void;
  hasDescription(): boolean;
  clearDescription(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SEO.AsObject;
  static toObject(includeInstance: boolean, msg: SEO): SEO.AsObject;
  static serializeBinaryToWriter(message: SEO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SEO;
  static deserializeBinaryFromReader(message: SEO, reader: jspb.BinaryReader): SEO;
}

export namespace SEO {
  export type AsObject = {
    title?: google_protobuf_struct_pb.Struct.AsObject,
    keywords?: google_protobuf_struct_pb.Struct.AsObject,
    description?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class Block extends jspb.Message {
  getTitle(): google_protobuf_struct_pb.Struct | undefined;
  setTitle(value?: google_protobuf_struct_pb.Struct): void;
  hasTitle(): boolean;
  clearTitle(): void;

  getContent(): google_protobuf_struct_pb.Struct | undefined;
  setContent(value?: google_protobuf_struct_pb.Struct): void;
  hasContent(): boolean;
  clearContent(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Block.AsObject;
  static toObject(includeInstance: boolean, msg: Block): Block.AsObject;
  static serializeBinaryToWriter(message: Block, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Block;
  static deserializeBinaryFromReader(message: Block, reader: jspb.BinaryReader): Block;
}

export namespace Block {
  export type AsObject = {
    title?: google_protobuf_struct_pb.Struct.AsObject,
    content?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class Image extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getBusiness(): number;
  setBusiness(value: number): void;

  getStore(): number;
  setStore(value: number): void;

  getProductId(): number;
  setProductId(value: number): void;

  getSpecId(): number;
  setSpecId(value: number): void;

  getPriority(): number;
  setPriority(value: number): void;

  getHost(): string;
  setHost(value: string): void;

  getPath(): string;
  setPath(value: string): void;

  getName(): string;
  setName(value: string): void;

  getVersion(): number;
  setVersion(value: number): void;

  getSource(): string;
  setSource(value: string): void;

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
  toObject(includeInstance?: boolean): Image.AsObject;
  static toObject(includeInstance: boolean, msg: Image): Image.AsObject;
  static serializeBinaryToWriter(message: Image, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Image;
  static deserializeBinaryFromReader(message: Image, reader: jspb.BinaryReader): Image;
}

export namespace Image {
  export type AsObject = {
    id: number,
    business: number,
    store: number,
    productId: number,
    specId: number,
    priority: number,
    host: string,
    path: string,
    name: string,
    version: number,
    source: string,
    operator: string,
    createAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    colsList: Array<string>,
    conditionList: Array<sql_pb.Condition.AsObject>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

