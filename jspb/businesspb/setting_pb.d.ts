import * as jspb from "google-protobuf"

import * as sql_pb from './sql_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class Setting extends jspb.Message {
  getSettingId(): string;
  setSettingId(value: string): void;

  getStoreId(): string;
  setStoreId(value: string): void;

  getService(): string;
  setService(value: string): void;

  getConf(): string;
  setConf(value: string): void;

  getData(): SetData | undefined;
  setData(value?: SetData): void;
  hasData(): boolean;
  clearData(): void;

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
  toObject(includeInstance?: boolean): Setting.AsObject;
  static toObject(includeInstance: boolean, msg: Setting): Setting.AsObject;
  static serializeBinaryToWriter(message: Setting, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Setting;
  static deserializeBinaryFromReader(message: Setting, reader: jspb.BinaryReader): Setting;
}

export namespace Setting {
  export type AsObject = {
    settingId: string,
    storeId: string,
    service: string,
    conf: string,
    data?: SetData.AsObject,
    operator: string,
    createAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    colsList: Array<string>,
    conditionList: Array<sql_pb.Condition.AsObject>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class SetData extends jspb.Message {
  getStoreName(): string;
  setStoreName(value: string): void;

  getStoreEmail(): string;
  setStoreEmail(value: string): void;

  getStorePhone(): string;
  setStorePhone(value: string): void;

  getStoreAddress(): string;
  setStoreAddress(value: string): void;

  getStoreOpen(): string;
  setStoreOpen(value: string): void;

  getCopyright(): string;
  setCopyright(value: string): void;

  getFacebook(): string;
  setFacebook(value: string): void;

  getCompanyName(): string;
  setCompanyName(value: string): void;

  getCompanyEmail(): string;
  setCompanyEmail(value: string): void;

  getCompanyPhone(): string;
  setCompanyPhone(value: string): void;

  getCompanyCellPhone(): string;
  setCompanyCellPhone(value: string): void;

  getCompanyZipcode(): string;
  setCompanyZipcode(value: string): void;

  getCompanyAddress(): string;
  setCompanyAddress(value: string): void;

  getCompanyRemark(): string;
  setCompanyRemark(value: string): void;

  getCustomerCancel(): boolean;
  setCustomerCancel(value: boolean): void;

  getCustomerReturn(): boolean;
  setCustomerReturn(value: boolean): void;

  getLimitCount(): number;
  setLimitCount(value: number): void;

  getMerchantId(): string;
  setMerchantId(value: string): void;

  getMerchantPassword(): string;
  setMerchantPassword(value: string): void;

  getMerchantType(): string;
  setMerchantType(value: string): void;

  getMerchantHashIv(): string;
  setMerchantHashIv(value: string): void;

  getMerchantHashKey(): string;
  setMerchantHashKey(value: string): void;

  getAppId(): string;
  setAppId(value: string): void;

  getAppSecret(): string;
  setAppSecret(value: string): void;

  getFromName(): string;
  setFromName(value: string): void;

  getFromEmail(): string;
  setFromEmail(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetData.AsObject;
  static toObject(includeInstance: boolean, msg: SetData): SetData.AsObject;
  static serializeBinaryToWriter(message: SetData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetData;
  static deserializeBinaryFromReader(message: SetData, reader: jspb.BinaryReader): SetData;
}

export namespace SetData {
  export type AsObject = {
    storeName: string,
    storeEmail: string,
    storePhone: string,
    storeAddress: string,
    storeOpen: string,
    copyright: string,
    facebook: string,
    companyName: string,
    companyEmail: string,
    companyPhone: string,
    companyCellPhone: string,
    companyZipcode: string,
    companyAddress: string,
    companyRemark: string,
    customerCancel: boolean,
    customerReturn: boolean,
    limitCount: number,
    merchantId: string,
    merchantPassword: string,
    merchantType: string,
    merchantHashIv: string,
    merchantHashKey: string,
    appId: string,
    appSecret: string,
    fromName: string,
    fromEmail: string,
  }
}

