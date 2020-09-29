import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';


export class Message extends jspb.Message {
  getMessageId(): string;
  setMessageId(value: string): Message;

  getBusinessId(): string;
  setBusinessId(value: string): Message;

  getStoreId(): string;
  setStoreId(value: string): Message;

  getState(): number;
  setState(value: number): Message;

  getType(): number;
  setType(value: number): Message;

  getService(): string;
  setService(value: string): Message;

  getTotal(): number;
  setTotal(value: number): Message;

  getSuccess(): number;
  setSuccess(value: number): Message;

  getCharge(): number;
  setCharge(value: number): Message;

  getResponse(): google_protobuf_struct_pb.Value | undefined;
  setResponse(value?: google_protobuf_struct_pb.Value): Message;
  hasResponse(): boolean;
  clearResponse(): Message;

  getSubject(): string;
  setSubject(value: string): Message;

  getContent(): string;
  setContent(value: string): Message;

  getFromUser(): Message.User | undefined;
  setFromUser(value?: Message.User): Message;
  hasFromUser(): boolean;
  clearFromUser(): Message;

  getToUserList(): Array<Message.User>;
  setToUserList(value: Array<Message.User>): Message;
  clearToUserList(): Message;
  addToUser(value?: Message.User, index?: number): Message.User;

  getScheduledTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setScheduledTime(value?: google_protobuf_timestamp_pb.Timestamp): Message;
  hasScheduledTime(): boolean;
  clearScheduledTime(): Message;

  getGa(): Message.GA | undefined;
  setGa(value?: Message.GA): Message;
  hasGa(): boolean;
  clearGa(): Message;

  getOpenedMap(): jspb.Map<string, number>;
  clearOpenedMap(): Message;

  getLabelxMap(): jspb.Map<string, number>;
  clearLabelxMap(): Message;

  getOperator(): string;
  setOperator(value: string): Message;

  getCreateAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateAt(value?: google_protobuf_timestamp_pb.Timestamp): Message;
  hasCreateAt(): boolean;
  clearCreateAt(): Message;

  getUpdateAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateAt(value?: google_protobuf_timestamp_pb.Timestamp): Message;
  hasUpdateAt(): boolean;
  clearUpdateAt(): Message;

  getColsList(): Array<string>;
  setColsList(value: Array<string>): Message;
  clearColsList(): Message;
  addCols(value: string, index?: number): Message;

  getSelf(): google_protobuf_struct_pb.Struct | undefined;
  setSelf(value?: google_protobuf_struct_pb.Struct): Message;
  hasSelf(): boolean;
  clearSelf(): Message;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Message.AsObject;
  static toObject(includeInstance: boolean, msg: Message): Message.AsObject;
  static serializeBinaryToWriter(message: Message, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Message;
  static deserializeBinaryFromReader(message: Message, reader: jspb.BinaryReader): Message;
}

export namespace Message {
  export type AsObject = {
    messageId: string,
    businessId: string,
    storeId: string,
    state: number,
    type: number,
    service: string,
    total: number,
    success: number,
    charge: number,
    response?: google_protobuf_struct_pb.Value.AsObject,
    subject: string,
    content: string,
    fromUser?: Message.User.AsObject,
    toUserList: Array<Message.User.AsObject>,
    scheduledTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    ga?: Message.GA.AsObject,
    openedMap: Array<[string, number]>,
    labelxMap: Array<[string, number]>,
    operator: string,
    createAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    colsList: Array<string>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }

  export class User extends jspb.Message {
    getName(): string;
    setName(value: string): User;

    getSex(): string;
    setSex(value: string): User;

    getEmail(): string;
    setEmail(value: string): User;

    getPhone(): string;
    setPhone(value: string): User;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): User.AsObject;
    static toObject(includeInstance: boolean, msg: User): User.AsObject;
    static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): User;
    static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
  }

  export namespace User {
    export type AsObject = {
      name: string,
      sex: string,
      email: string,
      phone: string,
    }
  }


  export class GA extends jspb.Message {
    getEnable(): string;
    setEnable(value: string): GA;

    getEcommerceenable(): string;
    setEcommerceenable(value: string): GA;

    getUtmcampaign(): string;
    setUtmcampaign(value: string): GA;

    getUtmcontent(): string;
    setUtmcontent(value: string): GA;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GA.AsObject;
    static toObject(includeInstance: boolean, msg: GA): GA.AsObject;
    static serializeBinaryToWriter(message: GA, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GA;
    static deserializeBinaryFromReader(message: GA, reader: jspb.BinaryReader): GA;
  }

  export namespace GA {
    export type AsObject = {
      enable: string,
      ecommerceenable: string,
      utmcampaign: string,
      utmcontent: string,
    }
  }

}

