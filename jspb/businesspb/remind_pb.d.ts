import * as jspb from 'google-protobuf'

import * as sql_pb from './sql_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class Remind extends jspb.Message {
  getRemindId(): string;
  setRemindId(value: string): Remind;

  getItem(): string;
  setItem(value: string): Remind;

  getDescription(): string;
  setDescription(value: string): Remind;

  getIsEmail(): boolean;
  setIsEmail(value: boolean): Remind;

  getDefaultEmail(): boolean;
  setDefaultEmail(value: boolean): Remind;

  getEmailTemplate(): string;
  setEmailTemplate(value: string): Remind;

  getIsLetter(): boolean;
  setIsLetter(value: boolean): Remind;

  getDefaultLetter(): boolean;
  setDefaultLetter(value: boolean): Remind;

  getLetterTemplate(): string;
  setLetterTemplate(value: string): Remind;

  getLabelxMap(): jspb.Map<string, number>;
  clearLabelxMap(): Remind;

  getOperator(): string;
  setOperator(value: string): Remind;

  getCreateAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateAt(value?: google_protobuf_timestamp_pb.Timestamp): Remind;
  hasCreateAt(): boolean;
  clearCreateAt(): Remind;

  getUpdateAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateAt(value?: google_protobuf_timestamp_pb.Timestamp): Remind;
  hasUpdateAt(): boolean;
  clearUpdateAt(): Remind;

  getColsList(): Array<string>;
  setColsList(value: Array<string>): Remind;
  clearColsList(): Remind;
  addCols(value: string, index?: number): Remind;

  getConditionList(): Array<sql_pb.Condition>;
  setConditionList(value: Array<sql_pb.Condition>): Remind;
  clearConditionList(): Remind;
  addCondition(value?: sql_pb.Condition, index?: number): sql_pb.Condition;

  getSelf(): google_protobuf_struct_pb.Struct | undefined;
  setSelf(value?: google_protobuf_struct_pb.Struct): Remind;
  hasSelf(): boolean;
  clearSelf(): Remind;

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
    item: string,
    description: string,
    isEmail: boolean,
    defaultEmail: boolean,
    emailTemplate: string,
    isLetter: boolean,
    defaultLetter: boolean,
    letterTemplate: string,
    labelxMap: Array<[string, number]>,
    operator: string,
    createAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    colsList: Array<string>,
    conditionList: Array<sql_pb.Condition.AsObject>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

