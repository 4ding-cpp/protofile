import * as jspb from 'google-protobuf'

import * as sql_pb from './sql_pb';
import * as template_pb from './template_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class Announcement extends jspb.Message {
  getAnnouncementId(): string;
  setAnnouncementId(value: string): Announcement;

  getEnableAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEnableAt(value?: google_protobuf_timestamp_pb.Timestamp): Announcement;
  hasEnableAt(): boolean;
  clearEnableAt(): Announcement;

  getArea(): number;
  setArea(value: number): Announcement;

  getType(): number;
  setType(value: number): Announcement;

  getTitle(): string;
  setTitle(value: string): Announcement;

  getTemplateGroupList(): Array<template_pb.Template>;
  setTemplateGroupList(value: Array<template_pb.Template>): Announcement;
  clearTemplateGroupList(): Announcement;
  addTemplateGroup(value?: template_pb.Template, index?: number): template_pb.Template;

  getLabelxMap(): jspb.Map<string, number>;
  clearLabelxMap(): Announcement;

  getOperator(): string;
  setOperator(value: string): Announcement;

  getCreateAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateAt(value?: google_protobuf_timestamp_pb.Timestamp): Announcement;
  hasCreateAt(): boolean;
  clearCreateAt(): Announcement;

  getUpdateAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateAt(value?: google_protobuf_timestamp_pb.Timestamp): Announcement;
  hasUpdateAt(): boolean;
  clearUpdateAt(): Announcement;

  getColsList(): Array<string>;
  setColsList(value: Array<string>): Announcement;
  clearColsList(): Announcement;
  addCols(value: string, index?: number): Announcement;

  getConditionList(): Array<sql_pb.Condition>;
  setConditionList(value: Array<sql_pb.Condition>): Announcement;
  clearConditionList(): Announcement;
  addCondition(value?: sql_pb.Condition, index?: number): sql_pb.Condition;

  getSelf(): google_protobuf_struct_pb.Struct | undefined;
  setSelf(value?: google_protobuf_struct_pb.Struct): Announcement;
  hasSelf(): boolean;
  clearSelf(): Announcement;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Announcement.AsObject;
  static toObject(includeInstance: boolean, msg: Announcement): Announcement.AsObject;
  static serializeBinaryToWriter(message: Announcement, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Announcement;
  static deserializeBinaryFromReader(message: Announcement, reader: jspb.BinaryReader): Announcement;
}

export namespace Announcement {
  export type AsObject = {
    announcementId: string,
    enableAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    area: number,
    type: number,
    title: string,
    templateGroupList: Array<template_pb.Template.AsObject>,
    labelxMap: Array<[string, number]>,
    operator: string,
    createAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    colsList: Array<string>,
    conditionList: Array<sql_pb.Condition.AsObject>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

