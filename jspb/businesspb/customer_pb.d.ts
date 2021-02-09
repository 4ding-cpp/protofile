import * as jspb from 'google-protobuf'

import * as sql_pb from './sql_pb';
import * as address_pb from './address_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class Customer extends jspb.Message {
  getCustomerId(): string;
  setCustomerId(value: string): Customer;

  getBusinessId(): string;
  setBusinessId(value: string): Customer;

  getStoreId(): string;
  setStoreId(value: string): Customer;

  getStatus(): number;
  setStatus(value: number): Customer;

  getName(): string;
  setName(value: string): Customer;

  getFbAccesstoken(): string;
  setFbAccesstoken(value: string): Customer;

  getEmail(): string;
  setEmail(value: string): Customer;

  getPhone(): string;
  setPhone(value: string): Customer;

  getPassword(): string;
  setPassword(value: string): Customer;

  getPhoneVerify(): boolean;
  setPhoneVerify(value: boolean): Customer;

  getEmailVerify(): boolean;
  setEmailVerify(value: boolean): Customer;

  getAddress(): address_pb.Address | undefined;
  setAddress(value?: address_pb.Address): Customer;
  hasAddress(): boolean;
  clearAddress(): Customer;

  getRecaptcha(): string;
  setRecaptcha(value: string): Customer;

  getBirthday(): string;
  setBirthday(value: string): Customer;

  getSex(): number;
  setSex(value: number): Customer;

  getLevelId(): string;
  setLevelId(value: string): Customer;

  getIsReceive(): boolean;
  setIsReceive(value: boolean): Customer;

  getRegisterBy(): string;
  setRegisterBy(value: string): Customer;

  getLabelxMap(): jspb.Map<string, number>;
  clearLabelxMap(): Customer;

  getOperator(): string;
  setOperator(value: string): Customer;

  getCreateAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateAt(value?: google_protobuf_timestamp_pb.Timestamp): Customer;
  hasCreateAt(): boolean;
  clearCreateAt(): Customer;

  getUpdateAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateAt(value?: google_protobuf_timestamp_pb.Timestamp): Customer;
  hasUpdateAt(): boolean;
  clearUpdateAt(): Customer;

  getColsList(): Array<string>;
  setColsList(value: Array<string>): Customer;
  clearColsList(): Customer;
  addCols(value: string, index?: number): Customer;

  getConditionList(): Array<sql_pb.Condition>;
  setConditionList(value: Array<sql_pb.Condition>): Customer;
  clearConditionList(): Customer;
  addCondition(value?: sql_pb.Condition, index?: number): sql_pb.Condition;

  getSelf(): google_protobuf_struct_pb.Struct | undefined;
  setSelf(value?: google_protobuf_struct_pb.Struct): Customer;
  hasSelf(): boolean;
  clearSelf(): Customer;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Customer.AsObject;
  static toObject(includeInstance: boolean, msg: Customer): Customer.AsObject;
  static serializeBinaryToWriter(message: Customer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Customer;
  static deserializeBinaryFromReader(message: Customer, reader: jspb.BinaryReader): Customer;
}

export namespace Customer {
  export type AsObject = {
    customerId: string,
    businessId: string,
    storeId: string,
    status: number,
    name: string,
    fbAccesstoken: string,
    email: string,
    phone: string,
    password: string,
    phoneVerify: boolean,
    emailVerify: boolean,
    address?: address_pb.Address.AsObject,
    recaptcha: string,
    birthday: string,
    sex: number,
    levelId: string,
    isReceive: boolean,
    registerBy: string,
    labelxMap: Array<[string, number]>,
    operator: string,
    createAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    colsList: Array<string>,
    conditionList: Array<sql_pb.Condition.AsObject>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class CustomerBatch extends jspb.Message {
  getCustomerList(): Array<Customer>;
  setCustomerList(value: Array<Customer>): CustomerBatch;
  clearCustomerList(): CustomerBatch;
  addCustomer(value?: Customer, index?: number): Customer;

  getSelf(): google_protobuf_struct_pb.Struct | undefined;
  setSelf(value?: google_protobuf_struct_pb.Struct): CustomerBatch;
  hasSelf(): boolean;
  clearSelf(): CustomerBatch;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerBatch.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerBatch): CustomerBatch.AsObject;
  static serializeBinaryToWriter(message: CustomerBatch, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerBatch;
  static deserializeBinaryFromReader(message: CustomerBatch, reader: jspb.BinaryReader): CustomerBatch;
}

export namespace CustomerBatch {
  export type AsObject = {
    customerList: Array<Customer.AsObject>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

