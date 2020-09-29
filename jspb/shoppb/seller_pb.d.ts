import * as jspb from 'google-protobuf'

import * as sql_pb from './sql_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class Seller extends jspb.Message {
  getSellerId(): string;
  setSellerId(value: string): Seller;

  getStoreId(): string;
  setStoreId(value: string): Seller;

  getStatus(): number;
  setStatus(value: number): Seller;

  getPhone(): string;
  setPhone(value: string): Seller;

  getEmail(): string;
  setEmail(value: string): Seller;

  getName(): string;
  setName(value: string): Seller;

  getPassword(): string;
  setPassword(value: string): Seller;

  getLabelxMap(): jspb.Map<string, number>;
  clearLabelxMap(): Seller;

  getOperator(): string;
  setOperator(value: string): Seller;

  getCreateAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateAt(value?: google_protobuf_timestamp_pb.Timestamp): Seller;
  hasCreateAt(): boolean;
  clearCreateAt(): Seller;

  getUpdateAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateAt(value?: google_protobuf_timestamp_pb.Timestamp): Seller;
  hasUpdateAt(): boolean;
  clearUpdateAt(): Seller;

  getColsList(): Array<string>;
  setColsList(value: Array<string>): Seller;
  clearColsList(): Seller;
  addCols(value: string, index?: number): Seller;

  getConditionList(): Array<sql_pb.Condition>;
  setConditionList(value: Array<sql_pb.Condition>): Seller;
  clearConditionList(): Seller;
  addCondition(value?: sql_pb.Condition, index?: number): sql_pb.Condition;

  getSelf(): google_protobuf_struct_pb.Struct | undefined;
  setSelf(value?: google_protobuf_struct_pb.Struct): Seller;
  hasSelf(): boolean;
  clearSelf(): Seller;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Seller.AsObject;
  static toObject(includeInstance: boolean, msg: Seller): Seller.AsObject;
  static serializeBinaryToWriter(message: Seller, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Seller;
  static deserializeBinaryFromReader(message: Seller, reader: jspb.BinaryReader): Seller;
}

export namespace Seller {
  export type AsObject = {
    sellerId: string,
    storeId: string,
    status: number,
    phone: string,
    email: string,
    name: string,
    password: string,
    labelxMap: Array<[string, number]>,
    operator: string,
    createAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    colsList: Array<string>,
    conditionList: Array<sql_pb.Condition.AsObject>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

