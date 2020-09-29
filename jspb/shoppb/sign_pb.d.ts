import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class Sign extends jspb.Message {
  getId(): number;
  setId(value: number): Sign;

  getType(): string;
  setType(value: string): Sign;

  getUserId(): string;
  setUserId(value: string): Sign;

  getOnlineAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setOnlineAt(value?: google_protobuf_timestamp_pb.Timestamp): Sign;
  hasOnlineAt(): boolean;
  clearOnlineAt(): Sign;

  getOfflineAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setOfflineAt(value?: google_protobuf_timestamp_pb.Timestamp): Sign;
  hasOfflineAt(): boolean;
  clearOfflineAt(): Sign;

  getAddress(): string;
  setAddress(value: string): Sign;

  getUseragent(): string;
  setUseragent(value: string): Sign;

  getCountry(): string;
  setCountry(value: string): Sign;

  getToken(): string;
  setToken(value: string): Sign;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Sign.AsObject;
  static toObject(includeInstance: boolean, msg: Sign): Sign.AsObject;
  static serializeBinaryToWriter(message: Sign, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Sign;
  static deserializeBinaryFromReader(message: Sign, reader: jspb.BinaryReader): Sign;
}

export namespace Sign {
  export type AsObject = {
    id: number,
    type: string,
    userId: string,
    onlineAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    offlineAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    address: string,
    useragent: string,
    country: string,
    token: string,
  }
}

