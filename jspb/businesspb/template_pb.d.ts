import * as jspb from 'google-protobuf'

import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class Template extends jspb.Message {
  getTemplateId(): string;
  setTemplateId(value: string): Template;

  getStoreId(): string;
  setStoreId(value: string): Template;

  getName(): string;
  setName(value: string): Template;

  getGroupId(): string;
  setGroupId(value: string): Template;

  getLanguage(): string;
  setLanguage(value: string): Template;

  getTitle(): string;
  setTitle(value: string): Template;

  getIsHtml(): boolean;
  setIsHtml(value: boolean): Template;

  getIsCustomer(): boolean;
  setIsCustomer(value: boolean): Template;

  getContent(): string;
  setContent(value: string): Template;

  getIdx(): number;
  setIdx(value: number): Template;

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
    groupId: string,
    language: string,
    title: string,
    isHtml: boolean,
    isCustomer: boolean,
    content: string,
    idx: number,
    operator: string,
    createAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    colsList: Array<string>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

