import * as jspb from 'google-protobuf'

import * as sql_pb from './sql_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class Setting extends jspb.Message {
  getSettingId(): string;
  setSettingId(value: string): Setting;

  getStoreId(): string;
  setStoreId(value: string): Setting;

  getType(): string;
  setType(value: string): Setting;

  getIsEnable(): boolean;
  setIsEnable(value: boolean): Setting;

  getConf(): google_protobuf_struct_pb.Value | undefined;
  setConf(value?: google_protobuf_struct_pb.Value): Setting;
  hasConf(): boolean;
  clearConf(): Setting;

  getLabelxMap(): jspb.Map<string, number>;
  clearLabelxMap(): Setting;

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
    type: string,
    isEnable: boolean,
    conf?: google_protobuf_struct_pb.Value.AsObject,
    labelxMap: Array<[string, number]>,
    operator: string,
    createAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    colsList: Array<string>,
    conditionList: Array<sql_pb.Condition.AsObject>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class ConfigMulti extends jspb.Message {
  getLanguage(): google_protobuf_struct_pb.Value | undefined;
  setLanguage(value?: google_protobuf_struct_pb.Value): ConfigMulti;
  hasLanguage(): boolean;
  clearLanguage(): ConfigMulti;

  getCurrency(): google_protobuf_struct_pb.Value | undefined;
  setCurrency(value?: google_protobuf_struct_pb.Value): ConfigMulti;
  hasCurrency(): boolean;
  clearCurrency(): ConfigMulti;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfigMulti.AsObject;
  static toObject(includeInstance: boolean, msg: ConfigMulti): ConfigMulti.AsObject;
  static serializeBinaryToWriter(message: ConfigMulti, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfigMulti;
  static deserializeBinaryFromReader(message: ConfigMulti, reader: jspb.BinaryReader): ConfigMulti;
}

export namespace ConfigMulti {
  export type AsObject = {
    language?: google_protobuf_struct_pb.Value.AsObject,
    currency?: google_protobuf_struct_pb.Value.AsObject,
  }
}

export class ConfigWebsite extends jspb.Message {
  getName(): string;
  setName(value: string): ConfigWebsite;

  getSlogan(): string;
  setSlogan(value: string): ConfigWebsite;

  getCopyright(): string;
  setCopyright(value: string): ConfigWebsite;

  getServiceTerms(): string;
  setServiceTerms(value: string): ConfigWebsite;

  getOrganization(): string;
  setOrganization(value: string): ConfigWebsite;

  getPhone(): string;
  setPhone(value: string): ConfigWebsite;

  getEmail(): string;
  setEmail(value: string): ConfigWebsite;

  getAddress(): string;
  setAddress(value: string): ConfigWebsite;

  getFacebook(): string;
  setFacebook(value: string): ConfigWebsite;

  getLineAt(): string;
  setLineAt(value: string): ConfigWebsite;

  getInstagram(): string;
  setInstagram(value: string): ConfigWebsite;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfigWebsite.AsObject;
  static toObject(includeInstance: boolean, msg: ConfigWebsite): ConfigWebsite.AsObject;
  static serializeBinaryToWriter(message: ConfigWebsite, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfigWebsite;
  static deserializeBinaryFromReader(message: ConfigWebsite, reader: jspb.BinaryReader): ConfigWebsite;
}

export namespace ConfigWebsite {
  export type AsObject = {
    name: string,
    slogan: string,
    copyright: string,
    serviceTerms: string,
    organization: string,
    phone: string,
    email: string,
    address: string,
    facebook: string,
    lineAt: string,
    instagram: string,
  }
}

export class ConfigShop extends jspb.Message {
  getLimitCount(): number;
  setLimitCount(value: number): ConfigShop;

  getShopNotes(): string;
  setShopNotes(value: string): ConfigShop;

  getOrderNotes(): string;
  setOrderNotes(value: string): ConfigShop;

  getSenderName(): string;
  setSenderName(value: string): ConfigShop;

  getSenderPhone(): string;
  setSenderPhone(value: string): ConfigShop;

  getSenderCellPhone(): string;
  setSenderCellPhone(value: string): ConfigShop;

  getSenderZipCode(): string;
  setSenderZipCode(value: string): ConfigShop;

  getSenderAddress(): string;
  setSenderAddress(value: string): ConfigShop;

  getSenderRemark(): string;
  setSenderRemark(value: string): ConfigShop;

  getAllowCancelOrder(): number;
  setAllowCancelOrder(value: number): ConfigShop;

  getAllowReturnOrder(): number;
  setAllowReturnOrder(value: number): ConfigShop;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfigShop.AsObject;
  static toObject(includeInstance: boolean, msg: ConfigShop): ConfigShop.AsObject;
  static serializeBinaryToWriter(message: ConfigShop, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfigShop;
  static deserializeBinaryFromReader(message: ConfigShop, reader: jspb.BinaryReader): ConfigShop;
}

export namespace ConfigShop {
  export type AsObject = {
    limitCount: number,
    shopNotes: string,
    orderNotes: string,
    senderName: string,
    senderPhone: string,
    senderCellPhone: string,
    senderZipCode: string,
    senderAddress: string,
    senderRemark: string,
    allowCancelOrder: number,
    allowReturnOrder: number,
  }
}

