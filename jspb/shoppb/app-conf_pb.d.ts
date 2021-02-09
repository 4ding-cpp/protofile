import * as jspb from 'google-protobuf'

import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';


export class AppConf extends jspb.Message {
  getCurrency(): google_protobuf_struct_pb.Struct | undefined;
  setCurrency(value?: google_protobuf_struct_pb.Struct): AppConf;
  hasCurrency(): boolean;
  clearCurrency(): AppConf;

  getLanguage(): google_protobuf_struct_pb.Struct | undefined;
  setLanguage(value?: google_protobuf_struct_pb.Struct): AppConf;
  hasLanguage(): boolean;
  clearLanguage(): AppConf;

  getWebsite(): google_protobuf_struct_pb.Struct | undefined;
  setWebsite(value?: google_protobuf_struct_pb.Struct): AppConf;
  hasWebsite(): boolean;
  clearWebsite(): AppConf;

  getShop(): google_protobuf_struct_pb.Struct | undefined;
  setShop(value?: google_protobuf_struct_pb.Struct): AppConf;
  hasShop(): boolean;
  clearShop(): AppConf;

  getGoogleTagManager(): ExternalApp | undefined;
  setGoogleTagManager(value?: ExternalApp): AppConf;
  hasGoogleTagManager(): boolean;
  clearGoogleTagManager(): AppConf;

  getFacebookPixel(): ExternalApp | undefined;
  setFacebookPixel(value?: ExternalApp): AppConf;
  hasFacebookPixel(): boolean;
  clearFacebookPixel(): AppConf;

  getFacebookSign(): ExternalApp | undefined;
  setFacebookSign(value?: ExternalApp): AppConf;
  hasFacebookSign(): boolean;
  clearFacebookSign(): AppConf;

  getLineSign(): ExternalApp | undefined;
  setLineSign(value?: ExternalApp): AppConf;
  hasLineSign(): boolean;
  clearLineSign(): AppConf;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AppConf.AsObject;
  static toObject(includeInstance: boolean, msg: AppConf): AppConf.AsObject;
  static serializeBinaryToWriter(message: AppConf, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AppConf;
  static deserializeBinaryFromReader(message: AppConf, reader: jspb.BinaryReader): AppConf;
}

export namespace AppConf {
  export type AsObject = {
    currency?: google_protobuf_struct_pb.Struct.AsObject,
    language?: google_protobuf_struct_pb.Struct.AsObject,
    website?: google_protobuf_struct_pb.Struct.AsObject,
    shop?: google_protobuf_struct_pb.Struct.AsObject,
    googleTagManager?: ExternalApp.AsObject,
    facebookPixel?: ExternalApp.AsObject,
    facebookSign?: ExternalApp.AsObject,
    lineSign?: ExternalApp.AsObject,
  }
}

export class ExternalApp extends jspb.Message {
  getIsEnable(): boolean;
  setIsEnable(value: boolean): ExternalApp;

  getAppId(): string;
  setAppId(value: string): ExternalApp;

  getAppSecret(): string;
  setAppSecret(value: string): ExternalApp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalApp.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalApp): ExternalApp.AsObject;
  static serializeBinaryToWriter(message: ExternalApp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalApp;
  static deserializeBinaryFromReader(message: ExternalApp, reader: jspb.BinaryReader): ExternalApp;
}

export namespace ExternalApp {
  export type AsObject = {
    isEnable: boolean,
    appId: string,
    appSecret: string,
  }
}

