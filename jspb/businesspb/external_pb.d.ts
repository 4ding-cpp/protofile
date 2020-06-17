import * as jspb from "google-protobuf"

import * as sql_pb from './sql_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class External extends jspb.Message {
  getExternalId(): string;
  setExternalId(value: string): void;

  getBusinessId(): string;
  setBusinessId(value: string): void;

  getService(): number;
  setService(value: number): void;

  getServiceType(): number;
  setServiceType(value: number): void;

  getServiceItem(): number;
  setServiceItem(value: number): void;

  getIsEnable(): boolean;
  setIsEnable(value: boolean): void;

  getStoreEnableMap(): jspb.Map<string, boolean>;
  clearStoreEnableMap(): void;

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
  toObject(includeInstance?: boolean): External.AsObject;
  static toObject(includeInstance: boolean, msg: External): External.AsObject;
  static serializeBinaryToWriter(message: External, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): External;
  static deserializeBinaryFromReader(message: External, reader: jspb.BinaryReader): External;
}

export namespace External {
  export type AsObject = {
    externalId: string,
    businessId: string,
    service: number,
    serviceType: number,
    serviceItem: number,
    isEnable: boolean,
    storeEnableMap: Array<[string, boolean]>,
    operator: string,
    createAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    colsList: Array<string>,
    conditionList: Array<sql_pb.Condition.AsObject>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class Service extends jspb.Message {
  getBusinessId(): string;
  setBusinessId(value: string): void;

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

export class Secret extends jspb.Message {
  getIsDefault(): boolean;
  setIsDefault(value: boolean): void;

  getIsVerify(): boolean;
  setIsVerify(value: boolean): void;

  getMerchantId(): string;
  setMerchantId(value: string): void;

  getAllInOneHashKey(): string;
  setAllInOneHashKey(value: string): void;

  getAllInOneHashIv(): string;
  setAllInOneHashIv(value: string): void;

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
    isDefault: boolean,
    isVerify: boolean,
    merchantId: string,
    allInOneHashKey: string,
    allInOneHashIv: string,
    username: string,
    password: string,
    token: string,
  }
}

