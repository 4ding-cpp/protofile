import * as jspb from "google-protobuf"

import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';

export class Secret extends jspb.Message {
  getMerchantId(): string;
  setMerchantId(value: string): void;

  getPaymentHashKey(): string;
  setPaymentHashKey(value: string): void;

  getPaymentHashIv(): string;
  setPaymentHashIv(value: string): void;

  getLogisticsHashKey(): string;
  setLogisticsHashKey(value: string): void;

  getLogisticsHashIv(): string;
  setLogisticsHashIv(value: string): void;

  getUsername(): string;
  setUsername(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  getToken(): string;
  setToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Secret.AsObject;
  static toObject(includeInstance: boolean, msg: Secret): Secret.AsObject;
  static serializeBinaryToWriter(message: Secret, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Secret;
  static deserializeBinaryFromReader(message: Secret, reader: jspb.BinaryReader): Secret;
}

export namespace Secret {
  export type AsObject = {
    merchantId: string,
    paymentHashKey: string,
    paymentHashIv: string,
    logisticsHashKey: string,
    logisticsHashIv: string,
    username: string,
    password: string,
    token: string,
  }
}

export class Service extends jspb.Message {
  getBusinessId(): string;
  setBusinessId(value: string): void;

  getStoreId(): string;
  setStoreId(value: string): void;

  getSecret(): Secret | undefined;
  setSecret(value?: Secret): void;
  hasSecret(): boolean;
  clearSecret(): void;

  getCode(): number;
  setCode(value: number): void;

  getName(): string;
  setName(value: string): void;

  getItemsList(): Array<ServiceType>;
  setItemsList(value: Array<ServiceType>): void;
  clearItemsList(): void;
  addItems(value?: ServiceType, index?: number): ServiceType;

  getSelf(): google_protobuf_struct_pb.Struct | undefined;
  setSelf(value?: google_protobuf_struct_pb.Struct): void;
  hasSelf(): boolean;
  clearSelf(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Service.AsObject;
  static toObject(includeInstance: boolean, msg: Service): Service.AsObject;
  static serializeBinaryToWriter(message: Service, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Service;
  static deserializeBinaryFromReader(message: Service, reader: jspb.BinaryReader): Service;
}

export namespace Service {
  export type AsObject = {
    businessId: string,
    storeId: string,
    secret?: Secret.AsObject,
    code: number,
    name: string,
    itemsList: Array<ServiceType.AsObject>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class ServiceType extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getName(): string;
  setName(value: string): void;

  getItemsList(): Array<ServiceItem>;
  setItemsList(value: Array<ServiceItem>): void;
  clearItemsList(): void;
  addItems(value?: ServiceItem, index?: number): ServiceItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceType.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceType): ServiceType.AsObject;
  static serializeBinaryToWriter(message: ServiceType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceType;
  static deserializeBinaryFromReader(message: ServiceType, reader: jspb.BinaryReader): ServiceType;
}

export namespace ServiceType {
  export type AsObject = {
    code: number,
    name: string,
    itemsList: Array<ServiceItem.AsObject>,
  }
}

export class ServiceItem extends jspb.Message {
  getIsEnable(): boolean;
  setIsEnable(value: boolean): void;

  getCode(): number;
  setCode(value: number): void;

  getName(): string;
  setName(value: string): void;

  getType(): string;
  setType(value: string): void;

  getSub(): string;
  setSub(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceItem.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceItem): ServiceItem.AsObject;
  static serializeBinaryToWriter(message: ServiceItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceItem;
  static deserializeBinaryFromReader(message: ServiceItem, reader: jspb.BinaryReader): ServiceItem;
}

export namespace ServiceItem {
  export type AsObject = {
    isEnable: boolean,
    code: number,
    name: string,
    type: string,
    sub: string,
  }
}

export class ServiceSecret extends jspb.Message {
  getSecretId(): string;
  setSecretId(value: string): void;

  getService(): number;
  setService(value: number): void;

  getSecret(): Secret | undefined;
  setSecret(value?: Secret): void;
  hasSecret(): boolean;
  clearSecret(): void;

  getSelf(): google_protobuf_struct_pb.Struct | undefined;
  setSelf(value?: google_protobuf_struct_pb.Struct): void;
  hasSelf(): boolean;
  clearSelf(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceSecret.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceSecret): ServiceSecret.AsObject;
  static serializeBinaryToWriter(message: ServiceSecret, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceSecret;
  static deserializeBinaryFromReader(message: ServiceSecret, reader: jspb.BinaryReader): ServiceSecret;
}

export namespace ServiceSecret {
  export type AsObject = {
    secretId: string,
    service: number,
    secret?: Secret.AsObject,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

