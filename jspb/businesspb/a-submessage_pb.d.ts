import * as jspb from "google-protobuf"

import * as seo_pb from './seo_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';

export class Rule extends jspb.Message {
  getAmount(): number;
  setAmount(value: number): void;

  getCount(): number;
  setCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Rule.AsObject;
  static toObject(includeInstance: boolean, msg: Rule): Rule.AsObject;
  static serializeBinaryToWriter(message: Rule, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Rule;
  static deserializeBinaryFromReader(message: Rule, reader: jspb.BinaryReader): Rule;
}

export namespace Rule {
  export type AsObject = {
    amount: number,
    count: number,
  }
}

export class Active extends jspb.Message {
  getFreeShipping(): boolean;
  setFreeShipping(value: boolean): void;

  getIsRepeat(): boolean;
  setIsRepeat(value: boolean): void;

  getDiscount(): number;
  setDiscount(value: number): void;

  getReduce(): number;
  setReduce(value: number): void;

  getGiveaway(): string;
  setGiveaway(value: string): void;

  getGiveawaySku(): string;
  setGiveawaySku(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Active.AsObject;
  static toObject(includeInstance: boolean, msg: Active): Active.AsObject;
  static serializeBinaryToWriter(message: Active, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Active;
  static deserializeBinaryFromReader(message: Active, reader: jspb.BinaryReader): Active;
}

export namespace Active {
  export type AsObject = {
    freeShipping: boolean,
    isRepeat: boolean,
    discount: number,
    reduce: number,
    giveaway: string,
    giveawaySku: string,
  }
}

export class CustomerTarget extends jspb.Message {
  getLevel(): string;
  setLevel(value: string): void;

  getBirthday(): number;
  setBirthday(value: number): void;

  getRegister(): number;
  setRegister(value: number): void;

  getItemsList(): Array<string>;
  setItemsList(value: Array<string>): void;
  clearItemsList(): void;
  addItems(value: string, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerTarget.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerTarget): CustomerTarget.AsObject;
  static serializeBinaryToWriter(message: CustomerTarget, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerTarget;
  static deserializeBinaryFromReader(message: CustomerTarget, reader: jspb.BinaryReader): CustomerTarget;
}

export namespace CustomerTarget {
  export type AsObject = {
    level: string,
    birthday: number,
    register: number,
    itemsList: Array<string>,
  }
}

export class ProductTarget extends jspb.Message {
  getClassList(): Array<string>;
  setClassList(value: Array<string>): void;
  clearClassList(): void;
  addClass(value: string, index?: number): void;

  getItemsList(): Array<string>;
  setItemsList(value: Array<string>): void;
  clearItemsList(): void;
  addItems(value: string, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductTarget.AsObject;
  static toObject(includeInstance: boolean, msg: ProductTarget): ProductTarget.AsObject;
  static serializeBinaryToWriter(message: ProductTarget, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductTarget;
  static deserializeBinaryFromReader(message: ProductTarget, reader: jspb.BinaryReader): ProductTarget;
}

export namespace ProductTarget {
  export type AsObject = {
    classList: Array<string>,
    itemsList: Array<string>,
  }
}

export class Image extends jspb.Message {
  getSrc(): string;
  setSrc(value: string): void;

  getAlt(): string;
  setAlt(value: string): void;

  getTitle(): string;
  setTitle(value: string): void;

  getLink(): string;
  setLink(value: string): void;

  getIsBlank(): number;
  setIsBlank(value: number): void;

  getSku(): string;
  setSku(value: string): void;

  getTarget(): ProductTarget | undefined;
  setTarget(value?: ProductTarget): void;
  hasTarget(): boolean;
  clearTarget(): void;

  getType(): string;
  setType(value: string): void;

  getSource(): string;
  setSource(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Image.AsObject;
  static toObject(includeInstance: boolean, msg: Image): Image.AsObject;
  static serializeBinaryToWriter(message: Image, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Image;
  static deserializeBinaryFromReader(message: Image, reader: jspb.BinaryReader): Image;
}

export namespace Image {
  export type AsObject = {
    src: string,
    alt: string,
    title: string,
    link: string,
    isBlank: number,
    sku: string,
    target?: ProductTarget.AsObject,
    type: string,
    source: string,
  }
}

export class Layout extends jspb.Message {
  getType(): number;
  setType(value: number): void;

  getTitle(): google_protobuf_struct_pb.Value | undefined;
  setTitle(value?: google_protobuf_struct_pb.Value): void;
  hasTitle(): boolean;
  clearTitle(): void;

  getLink(): string;
  setLink(value: string): void;

  getPage(): string;
  setPage(value: string): void;

  getIsBlank(): boolean;
  setIsBlank(value: boolean): void;

  getQuantity(): number;
  setQuantity(value: number): void;

  getSecond(): number;
  setSecond(value: number): void;

  getImageList(): Array<Image>;
  setImageList(value: Array<Image>): void;
  clearImageList(): void;
  addImage(value?: Image, index?: number): Image;

  getLayoutList(): Array<Layout>;
  setLayoutList(value: Array<Layout>): void;
  clearLayoutList(): void;
  addLayout(value?: Layout, index?: number): Layout;

  getTarget(): ProductTarget | undefined;
  setTarget(value?: ProductTarget): void;
  hasTarget(): boolean;
  clearTarget(): void;

  getTemplate(): seo_pb.Template | undefined;
  setTemplate(value?: seo_pb.Template): void;
  hasTemplate(): boolean;
  clearTemplate(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Layout.AsObject;
  static toObject(includeInstance: boolean, msg: Layout): Layout.AsObject;
  static serializeBinaryToWriter(message: Layout, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Layout;
  static deserializeBinaryFromReader(message: Layout, reader: jspb.BinaryReader): Layout;
}

export namespace Layout {
  export type AsObject = {
    type: number,
    title?: google_protobuf_struct_pb.Value.AsObject,
    link: string,
    page: string,
    isBlank: boolean,
    quantity: number,
    second: number,
    imageList: Array<Image.AsObject>,
    layoutList: Array<Layout.AsObject>,
    target?: ProductTarget.AsObject,
    template?: seo_pb.Template.AsObject,
  }
}

