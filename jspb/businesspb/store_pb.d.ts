import * as jspb from "google-protobuf"

import * as sql_pb from './sql_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class Store extends jspb.Message {
  getStoreId(): string;
  setStoreId(value: string): void;

  getModel(): number;
  setModel(value: number): void;

  getType(): number;
  setType(value: number): void;

  getName(): string;
  setName(value: string): void;

  getHost(): string;
  setHost(value: string): void;

  getIdentify(): string;
  setIdentify(value: string): void;

  getProductBusinessId(): string;
  setProductBusinessId(value: string): void;

  getProductLabelId(): string;
  setProductLabelId(value: string): void;

  getProductStatus(): string;
  setProductStatus(value: string): void;

  getCustomerBusinessId(): string;
  setCustomerBusinessId(value: string): void;

  getCustomerLabelId(): string;
  setCustomerLabelId(value: string): void;

  getCustomerStatus(): string;
  setCustomerStatus(value: string): void;

  getIsOpen(): boolean;
  setIsOpen(value: boolean): void;

  getPhone(): string;
  setPhone(value: string): void;

  getAddressCode(): string;
  setAddressCode(value: string): void;

  getAddressCity(): string;
  setAddressCity(value: string): void;

  getAddressTownship(): string;
  setAddressTownship(value: string): void;

  getAddressDetail(): string;
  setAddressDetail(value: string): void;

  getFacebook(): string;
  setFacebook(value: string): void;

  getFacebookMessage(): string;
  setFacebookMessage(value: string): void;

  getInstagramId(): string;
  setInstagramId(value: string): void;

  getLineId(): string;
  setLineId(value: string): void;

  getLineAt(): string;
  setLineAt(value: string): void;

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
  toObject(includeInstance?: boolean): Store.AsObject;
  static toObject(includeInstance: boolean, msg: Store): Store.AsObject;
  static serializeBinaryToWriter(message: Store, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Store;
  static deserializeBinaryFromReader(message: Store, reader: jspb.BinaryReader): Store;
}

export namespace Store {
  export type AsObject = {
    storeId: string,
    model: number,
    type: number,
    name: string,
    host: string,
    identify: string,
    productBusinessId: string,
    productLabelId: string,
    productStatus: string,
    customerBusinessId: string,
    customerLabelId: string,
    customerStatus: string,
    isOpen: boolean,
    phone: string,
    addressCode: string,
    addressCity: string,
    addressTownship: string,
    addressDetail: string,
    facebook: string,
    facebookMessage: string,
    instagramId: string,
    lineId: string,
    lineAt: string,
    operator: string,
    createAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    colsList: Array<string>,
    conditionList: Array<sql_pb.Condition.AsObject>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

