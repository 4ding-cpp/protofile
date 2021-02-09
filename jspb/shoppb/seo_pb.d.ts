import * as jspb from 'google-protobuf'

import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';


export class SEO extends jspb.Message {
  getTitle(): google_protobuf_struct_pb.Value | undefined;
  setTitle(value?: google_protobuf_struct_pb.Value): SEO;
  hasTitle(): boolean;
  clearTitle(): SEO;

  getKeywords(): google_protobuf_struct_pb.Value | undefined;
  setKeywords(value?: google_protobuf_struct_pb.Value): SEO;
  hasKeywords(): boolean;
  clearKeywords(): SEO;

  getDescription(): google_protobuf_struct_pb.Value | undefined;
  setDescription(value?: google_protobuf_struct_pb.Value): SEO;
  hasDescription(): boolean;
  clearDescription(): SEO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SEO.AsObject;
  static toObject(includeInstance: boolean, msg: SEO): SEO.AsObject;
  static serializeBinaryToWriter(message: SEO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SEO;
  static deserializeBinaryFromReader(message: SEO, reader: jspb.BinaryReader): SEO;
}

export namespace SEO {
  export type AsObject = {
    title?: google_protobuf_struct_pb.Value.AsObject,
    keywords?: google_protobuf_struct_pb.Value.AsObject,
    description?: google_protobuf_struct_pb.Value.AsObject,
  }
}

