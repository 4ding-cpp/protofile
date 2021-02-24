import * as jspb from "google-protobuf"

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';

export class Message extends jspb.Message {
  getMessageId(): string;
  setMessageId(value: string): void;

  getBusinessId(): string;
  setBusinessId(value: string): void;

  getStoreId(): string;
  setStoreId(value: string): void;

  getState(): number;
  setState(value: number): void;

  getCategory(): number;
  setCategory(value: number): void;

  getService(): string;
  setService(value: string): void;

  getRemindEvent(): string;
  setRemindEvent(value: string): void;

  getTotal(): number;
  setTotal(value: number): void;

  getSuccess(): number;
  setSuccess(value: number): void;

  getCharge(): number;
  setCharge(value: number): void;

  getResponse(): google_protobuf_struct_pb.Value | undefined;
  setResponse(value?: google_protobuf_struct_pb.Value): void;
  hasResponse(): boolean;
  clearResponse(): void;

  getSubject(): string;
  setSubject(value: string): void;

  getContent(): string;
  setContent(value: string): void;

  getFromUser(): Message.User | undefined;
  setFromUser(value?: Message.User): void;
  hasFromUser(): boolean;
  clearFromUser(): void;

  getToUserList(): Array<Message.User>;
  setToUserList(value: Array<Message.User>): void;
  clearToUserList(): void;
  addToUser(value?: Message.User, index?: number): Message.User;

  getScheduledTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setScheduledTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasScheduledTime(): boolean;
  clearScheduledTime(): void;

  getOpenedMap(): jspb.Map<string, number>;
  clearOpenedMap(): void;

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

  getSelf(): google_protobuf_struct_pb.Struct | undefined;
  setSelf(value?: google_protobuf_struct_pb.Struct): void;
  hasSelf(): boolean;
  clearSelf(): void;

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
    category: number,
    service: string,
    remindEvent: string,
    total: number,
    success: number,
    charge: number,
    response?: google_protobuf_struct_pb.Value.AsObject,
    subject: string,
    content: string,
    fromUser?: Message.User.AsObject,
    toUserList: Array<Message.User.AsObject>,
    scheduledTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    openedMap: Array<[string, number]>,
    operator: string,
    createAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    colsList: Array<string>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }

  export class User extends jspb.Message {
    getName(): string;
    setName(value: string): void;

    getSex(): string;
    setSex(value: string): void;

    getEmail(): string;
    setEmail(value: string): void;

    getPhone(): string;
    setPhone(value: string): void;

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

}

