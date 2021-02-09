import * as jspb from 'google-protobuf'

import * as sql_pb from './sql_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class Setting extends jspb.Message {
  getSettingId(): string;
  setSettingId(value: string): Setting;

  getStoreId(): string;
  setStoreId(value: string): Setting;

  getService(): string;
  setService(value: string): Setting;

  getConf(): string;
  setConf(value: string): Setting;

  getData(): SetData | undefined;
  setData(value?: SetData): Setting;
  hasData(): boolean;
  clearData(): Setting;

  getOperator(): string;
  setOperator(value: string): Setting;

  getCreateAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateAt(value?: google_protobuf_timestamp_pb.Timestamp): Setting;
  hasCreateAt(): boolean;
  clearCreateAt(): Setting;

  getUpdateAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateAt(value?: google_protobuf_timestamp_pb.Timestamp): Setting;
  hasUpdateAt(): boolean;
  clearUpdateAt(): Setting;

  getColsList(): Array<string>;
  setColsList(value: Array<string>): Setting;
  clearColsList(): Setting;
  addCols(value: string, index?: number): Setting;

  getConditionList(): Array<sql_pb.Condition>;
  setConditionList(value: Array<sql_pb.Condition>): Setting;
  clearConditionList(): Setting;
  addCondition(value?: sql_pb.Condition, index?: number): sql_pb.Condition;

  getSelf(): google_protobuf_struct_pb.Struct | undefined;
  setSelf(value?: google_protobuf_struct_pb.Struct): Setting;
  hasSelf(): boolean;
  clearSelf(): Setting;

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
  setStoreName(value: string): SetData;

  getStoreEmail(): string;
  setStoreEmail(value: string): SetData;

  getStorePhone(): string;
  setStorePhone(value: string): SetData;

  getStoreAddress(): string;
  setStoreAddress(value: string): SetData;

  getStoreOpen(): string;
  setStoreOpen(value: string): SetData;

  getCopyright(): string;
  setCopyright(value: string): SetData;

  getFacebook(): string;
  setFacebook(value: string): SetData;

  getCompanyName(): string;
  setCompanyName(value: string): SetData;

  getCompanyEmail(): string;
  setCompanyEmail(value: string): SetData;

  getCompanyPhone(): string;
  setCompanyPhone(value: string): SetData;

  getCompanyCellPhone(): string;
  setCompanyCellPhone(value: string): SetData;

  getCompanyZipcode(): string;
  setCompanyZipcode(value: string): SetData;

  getCompanyAddress(): string;
  setCompanyAddress(value: string): SetData;

  getCompanyRemark(): string;
  setCompanyRemark(value: string): SetData;

  getCustomerCancel(): boolean;
  setCustomerCancel(value: boolean): SetData;

  getCustomerReturn(): boolean;
  setCustomerReturn(value: boolean): SetData;

  getLimitCount(): number;
  setLimitCount(value: number): SetData;

  getMerchantId(): string;
  setMerchantId(value: string): SetData;

  getMerchantPassword(): string;
  setMerchantPassword(value: string): SetData;

  getMerchantType(): string;
  setMerchantType(value: string): SetData;

  getMerchantHashIv(): string;
  setMerchantHashIv(value: string): SetData;

  getMerchantHashKey(): string;
  setMerchantHashKey(value: string): SetData;

  getAppId(): string;
  setAppId(value: string): SetData;

  getAppSecret(): string;
  setAppSecret(value: string): SetData;

  getFromName(): string;
  setFromName(value: string): SetData;

  getFromEmail(): string;
  setFromEmail(value: string): SetData;

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

