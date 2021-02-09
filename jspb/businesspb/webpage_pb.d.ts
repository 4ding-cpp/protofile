import * as jspb from 'google-protobuf'

import * as seo_pb from './seo_pb';
import * as template_pb from './template_pb';
import * as sql_pb from './sql_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class WebPage extends jspb.Message {
  getPageId(): string;
  setPageId(value: string): WebPage;

  getStoreId(): string;
  setStoreId(value: string): WebPage;

  getName(): string;
  setName(value: string): WebPage;

  getUrn(): string;
  setUrn(value: string): WebPage;

  getSeo(): seo_pb.SEO | undefined;
  setSeo(value?: seo_pb.SEO): WebPage;
  hasSeo(): boolean;
  clearSeo(): WebPage;

  getTemplateGroupList(): Array<template_pb.Template>;
  setTemplateGroupList(value: Array<template_pb.Template>): WebPage;
  clearTemplateGroupList(): WebPage;
  addTemplateGroup(value?: template_pb.Template, index?: number): template_pb.Template;

  getDefaultLanguage(): string;
  setDefaultLanguage(value: string): WebPage;

  getIsErrorHandle(): boolean;
  setIsErrorHandle(value: boolean): WebPage;

  getLabelxMap(): jspb.Map<string, number>;
  clearLabelxMap(): WebPage;

  getOperator(): string;
  setOperator(value: string): WebPage;

  getCreateAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateAt(value?: google_protobuf_timestamp_pb.Timestamp): WebPage;
  hasCreateAt(): boolean;
  clearCreateAt(): WebPage;

  getUpdateAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateAt(value?: google_protobuf_timestamp_pb.Timestamp): WebPage;
  hasUpdateAt(): boolean;
  clearUpdateAt(): WebPage;

  getColsList(): Array<string>;
  setColsList(value: Array<string>): WebPage;
  clearColsList(): WebPage;
  addCols(value: string, index?: number): WebPage;

  getConditionList(): Array<sql_pb.Condition>;
  setConditionList(value: Array<sql_pb.Condition>): WebPage;
  clearConditionList(): WebPage;
  addCondition(value?: sql_pb.Condition, index?: number): sql_pb.Condition;

  getSelf(): google_protobuf_struct_pb.Struct | undefined;
  setSelf(value?: google_protobuf_struct_pb.Struct): WebPage;
  hasSelf(): boolean;
  clearSelf(): WebPage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WebPage.AsObject;
  static toObject(includeInstance: boolean, msg: WebPage): WebPage.AsObject;
  static serializeBinaryToWriter(message: WebPage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebPage;
  static deserializeBinaryFromReader(message: WebPage, reader: jspb.BinaryReader): WebPage;
}

export namespace WebPage {
  export type AsObject = {
    pageId: string,
    storeId: string,
    name: string,
    urn: string,
    seo?: seo_pb.SEO.AsObject,
    templateGroupList: Array<template_pb.Template.AsObject>,
    defaultLanguage: string,
    isErrorHandle: boolean,
    labelxMap: Array<[string, number]>,
    operator: string,
    createAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    colsList: Array<string>,
    conditionList: Array<sql_pb.Condition.AsObject>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

