import * as jspb from 'google-protobuf'

import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class SEO extends jspb.Message {
  getTitle(): google_protobuf_struct_pb.Value | undefined;
  setTitle(value?: google_protobuf_struct_pb.Value): SEO;
  hasTitle(): boolean;
  clearTitle(): SEO;

  getKeywords(): google_protobuf_struct_pb.Value | undefined;
  setKeywords(value?: google_protobuf_struct_pb.Value): SEO;
  hasKeywords(): boolean;
  clearKeywords(): SEO;

  getDescription(): google_protobuf_struct_pb.Value | undefined;
  setDescription(value?: google_protobuf_struct_pb.Value): SEO;
  hasDescription(): boolean;
  clearDescription(): SEO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SEO.AsObject;
  static toObject(includeInstance: boolean, msg: SEO): SEO.AsObject;
  static serializeBinaryToWriter(message: SEO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SEO;
  static deserializeBinaryFromReader(message: SEO, reader: jspb.BinaryReader): SEO;
}

export namespace SEO {
  export type AsObject = {
    title?: google_protobuf_struct_pb.Value.AsObject,
    keywords?: google_protobuf_struct_pb.Value.AsObject,
    description?: google_protobuf_struct_pb.Value.AsObject,
  }
}

export class Block extends jspb.Message {
  getTitle(): google_protobuf_struct_pb.Value | undefined;
  setTitle(value?: google_protobuf_struct_pb.Value): Block;
  hasTitle(): boolean;
  clearTitle(): Block;

  getUrl(): string;
  setUrl(value: string): Block;

  getTemplate(): Template | undefined;
  setTemplate(value?: Template): Block;
  hasTemplate(): boolean;
  clearTemplate(): Block;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Block.AsObject;
  static toObject(includeInstance: boolean, msg: Block): Block.AsObject;
  static serializeBinaryToWriter(message: Block, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Block;
  static deserializeBinaryFromReader(message: Block, reader: jspb.BinaryReader): Block;
}

export namespace Block {
  export type AsObject = {
    title?: google_protobuf_struct_pb.Value.AsObject,
    url: string,
    template?: Template.AsObject,
  }
}

export class Template extends jspb.Message {
  getTemplateId(): string;
  setTemplateId(value: string): Template;

  getStoreId(): string;
  setStoreId(value: string): Template;

  getName(): string;
  setName(value: string): Template;

  getIsHtml(): boolean;
  setIsHtml(value: boolean): Template;

  getContent(): string;
  setContent(value: string): Template;

  getLabelxMap(): jspb.Map<string, number>;
  clearLabelxMap(): Template;

  getOperator(): string;
  setOperator(value: string): Template;

  getCreateAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateAt(value?: google_protobuf_timestamp_pb.Timestamp): Template;
  hasCreateAt(): boolean;
  clearCreateAt(): Template;

  getUpdateAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateAt(value?: google_protobuf_timestamp_pb.Timestamp): Template;
  hasUpdateAt(): boolean;
  clearUpdateAt(): Template;

  getColsList(): Array<string>;
  setColsList(value: Array<string>): Template;
  clearColsList(): Template;
  addCols(value: string, index?: number): Template;

  getSelf(): google_protobuf_struct_pb.Struct | undefined;
  setSelf(value?: google_protobuf_struct_pb.Struct): Template;
  hasSelf(): boolean;
  clearSelf(): Template;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Template.AsObject;
  static toObject(includeInstance: boolean, msg: Template): Template.AsObject;
  static serializeBinaryToWriter(message: Template, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Template;
  static deserializeBinaryFromReader(message: Template, reader: jspb.BinaryReader): Template;
}

export namespace Template {
  export type AsObject = {
    templateId: string,
    storeId: string,
    name: string,
    isHtml: boolean,
    content: string,
    labelxMap: Array<[string, number]>,
    operator: string,
    createAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    colsList: Array<string>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

