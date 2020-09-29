import * as jspb from 'google-protobuf'

import * as sql_pb from './sql_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class SystemSet extends jspb.Message {
  getSetId(): string;
  setSetId(value: string): SystemSet;

  getType(): string;
  setType(value: string): SystemSet;

  getName(): string;
  setName(value: string): SystemSet;

  getConf(): string;
  setConf(value: string): SystemSet;

  getLabelxMap(): jspb.Map<string, number>;
  clearLabelxMap(): SystemSet;

  getOperator(): string;
  setOperator(value: string): SystemSet;

  getCreateAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateAt(value?: google_protobuf_timestamp_pb.Timestamp): SystemSet;
  hasCreateAt(): boolean;
  clearCreateAt(): SystemSet;

  getUpdateAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateAt(value?: google_protobuf_timestamp_pb.Timestamp): SystemSet;
  hasUpdateAt(): boolean;
  clearUpdateAt(): SystemSet;

  getColsList(): Array<string>;
  setColsList(value: Array<string>): SystemSet;
  clearColsList(): SystemSet;
  addCols(value: string, index?: number): SystemSet;

  getConditionList(): Array<sql_pb.Condition>;
  setConditionList(value: Array<sql_pb.Condition>): SystemSet;
  clearConditionList(): SystemSet;
  addCondition(value?: sql_pb.Condition, index?: number): sql_pb.Condition;

  getSelf(): google_protobuf_struct_pb.Struct | undefined;
  setSelf(value?: google_protobuf_struct_pb.Struct): SystemSet;
  hasSelf(): boolean;
  clearSelf(): SystemSet;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SystemSet.AsObject;
  static toObject(includeInstance: boolean, msg: SystemSet): SystemSet.AsObject;
  static serializeBinaryToWriter(message: SystemSet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SystemSet;
  static deserializeBinaryFromReader(message: SystemSet, reader: jspb.BinaryReader): SystemSet;
}

export namespace SystemSet {
  export type AsObject = {
    setId: string,
    type: string,
    name: string,
    conf: string,
    labelxMap: Array<[string, number]>,
    operator: string,
    createAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    colsList: Array<string>,
    conditionList: Array<sql_pb.Condition.AsObject>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

