import * as jspb from "google-protobuf"

import * as sql_pb from './sql_pb';
import * as template_pb from './template_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class Remind extends jspb.Message {
  getRemindId(): string;
  setRemindId(value: string): void;

  getStoreId(): string;
  setStoreId(value: string): void;

  getItem(): string;
  setItem(value: string): void;

  getCategory(): number;
  setCategory(value: number): void;

  getDescription(): string;
  setDescription(value: string): void;

  getSubject(): string;
  setSubject(value: string): void;

  getIsEnable(): boolean;
  setIsEnable(value: boolean): void;

  getTemplateGroupList(): Array<template_pb.Template>;
  setTemplateGroupList(value: Array<template_pb.Template>): void;
  clearTemplateGroupList(): void;
  addTemplateGroup(value?: template_pb.Template, index?: number): template_pb.Template;

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
  toObject(includeInstance?: boolean): Remind.AsObject;
  static toObject(includeInstance: boolean, msg: Remind): Remind.AsObject;
  static serializeBinaryToWriter(message: Remind, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Remind;
  static deserializeBinaryFromReader(message: Remind, reader: jspb.BinaryReader): Remind;
}

export namespace Remind {
  export type AsObject = {
    remindId: string,
    storeId: string,
    item: string,
    category: number,
    description: string,
    subject: string,
    isEnable: boolean,
    templateGroupList: Array<template_pb.Template.AsObject>,
    operator: string,
    createAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    colsList: Array<string>,
    conditionList: Array<sql_pb.Condition.AsObject>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

