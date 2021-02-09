import * as jspb from 'google-protobuf'

import * as sql_pb from './sql_pb';
import * as manager_pb from './manager_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class Store extends jspb.Message {
  getStoreId(): string;
  setStoreId(value: string): Store;

  getBusinessId(): string;
  setBusinessId(value: string): Store;

  getModel(): number;
  setModel(value: number): Store;

  getType(): number;
  setType(value: number): Store;

  getName(): string;
  setName(value: string): Store;

  getUrn(): string;
  setUrn(value: string): Store;

  getIsOpen(): boolean;
  setIsOpen(value: boolean): Store;

  getManager(): manager_pb.Manager | undefined;
  setManager(value?: manager_pb.Manager): Store;
  hasManager(): boolean;
  clearManager(): Store;

  getLabelxMap(): jspb.Map<string, number>;
  clearLabelxMap(): Store;

  getOperator(): string;
  setOperator(value: string): Store;

  getCreateAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateAt(value?: google_protobuf_timestamp_pb.Timestamp): Store;
  hasCreateAt(): boolean;
  clearCreateAt(): Store;

  getUpdateAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateAt(value?: google_protobuf_timestamp_pb.Timestamp): Store;
  hasUpdateAt(): boolean;
  clearUpdateAt(): Store;

  getColsList(): Array<string>;
  setColsList(value: Array<string>): Store;
  clearColsList(): Store;
  addCols(value: string, index?: number): Store;

  getConditionList(): Array<sql_pb.Condition>;
  setConditionList(value: Array<sql_pb.Condition>): Store;
  clearConditionList(): Store;
  addCondition(value?: sql_pb.Condition, index?: number): sql_pb.Condition;

  getSelf(): google_protobuf_struct_pb.Struct | undefined;
  setSelf(value?: google_protobuf_struct_pb.Struct): Store;
  hasSelf(): boolean;
  clearSelf(): Store;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Store.AsObject;
  static toObject(includeInstance: boolean, msg: Store): Store.AsObject;
  static serializeBinaryToWriter(message: Store, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Store;
  static deserializeBinaryFromReader(message: Store, reader: jspb.BinaryReader): Store;
}

export namespace Store {
  export type AsObject = {
    storeId: string,
    businessId: string,
    model: number,
    type: number,
    name: string,
    urn: string,
    isOpen: boolean,
    manager?: manager_pb.Manager.AsObject,
    labelxMap: Array<[string, number]>,
    operator: string,
    createAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    colsList: Array<string>,
    conditionList: Array<sql_pb.Condition.AsObject>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

