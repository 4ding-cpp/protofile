import * as jspb from "google-protobuf"

import * as web$base_pb from './web-base_pb';
import * as web$item_pb from './web-item_pb';
import * as web$layout_pb from './web-layout_pb';

export class WebIndex extends jspb.Message {
  getBase(): web$base_pb.WebBase | undefined;
  setBase(value?: web$base_pb.WebBase): void;
  hasBase(): boolean;
  clearBase(): void;

  getItemList(): Array<web$item_pb.WebItem>;
  setItemList(value: Array<web$item_pb.WebItem>): void;
  clearItemList(): void;
  addItem(value?: web$item_pb.WebItem, index?: number): web$item_pb.WebItem;

  getLayoutList(): Array<web$layout_pb.WebLayout>;
  setLayoutList(value: Array<web$layout_pb.WebLayout>): void;
  clearLayoutList(): void;
  addLayout(value?: web$layout_pb.WebLayout, index?: number): web$layout_pb.WebLayout;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WebIndex.AsObject;
  static toObject(includeInstance: boolean, msg: WebIndex): WebIndex.AsObject;
  static serializeBinaryToWriter(message: WebIndex, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebIndex;
  static deserializeBinaryFromReader(message: WebIndex, reader: jspb.BinaryReader): WebIndex;
}

export namespace WebIndex {
  export type AsObject = {
    base?: web$base_pb.WebBase.AsObject,
    itemList: Array<web$item_pb.WebItem.AsObject>,
    layoutList: Array<web$layout_pb.WebLayout.AsObject>,
  }
}

