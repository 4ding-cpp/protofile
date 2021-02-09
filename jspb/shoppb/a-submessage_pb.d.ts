import * as jspb from 'google-protobuf'

import * as template_pb from './template_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';


export class Rule extends jspb.Message {
  getAmount(): number;
  setAmount(value: number): Rule;

  getPrice(): number;
  setPrice(value: number): Rule;

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
    price: number,
  }
}

export class Active extends jspb.Message {
  getFreeShipping(): boolean;
  setFreeShipping(value: boolean): Active;

  getIsRepeat(): boolean;
  setIsRepeat(value: boolean): Active;

  getDiscount(): number;
  setDiscount(value: number): Active;

  getReduce(): number;
  setReduce(value: number): Active;

  getGiveaway(): number;
  setGiveaway(value: number): Active;

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
    giveaway: number,
  }
}

export class CustomerTarget extends jspb.Message {
  getLevel(): string;
  setLevel(value: string): CustomerTarget;

  getBirthday(): number;
  setBirthday(value: number): CustomerTarget;

  getRegister(): number;
  setRegister(value: number): CustomerTarget;

  getItemsList(): Array<string>;
  setItemsList(value: Array<string>): CustomerTarget;
  clearItemsList(): CustomerTarget;
  addItems(value: string, index?: number): CustomerTarget;

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
  setClassList(value: Array<string>): ProductTarget;
  clearClassList(): ProductTarget;
  addClass(value: string, index?: number): ProductTarget;

  getItemsList(): Array<number>;
  setItemsList(value: Array<number>): ProductTarget;
  clearItemsList(): ProductTarget;
  addItems(value: number, index?: number): ProductTarget;

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
    itemsList: Array<number>,
  }
}

export class ActivityTarget extends jspb.Message {
  getUrn(): string;
  setUrn(value: string): ActivityTarget;

  getName(): google_protobuf_struct_pb.Value | undefined;
  setName(value?: google_protobuf_struct_pb.Value): ActivityTarget;
  hasName(): boolean;
  clearName(): ActivityTarget;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActivityTarget.AsObject;
  static toObject(includeInstance: boolean, msg: ActivityTarget): ActivityTarget.AsObject;
  static serializeBinaryToWriter(message: ActivityTarget, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActivityTarget;
  static deserializeBinaryFromReader(message: ActivityTarget, reader: jspb.BinaryReader): ActivityTarget;
}

export namespace ActivityTarget {
  export type AsObject = {
    urn: string,
    name?: google_protobuf_struct_pb.Value.AsObject,
  }
}

export class Image extends jspb.Message {
  getSrc(): string;
  setSrc(value: string): Image;

  getAlt(): string;
  setAlt(value: string): Image;

  getTitle(): string;
  setTitle(value: string): Image;

  getLink(): string;
  setLink(value: string): Image;

  getIsBlank(): number;
  setIsBlank(value: number): Image;

  getSku(): string;
  setSku(value: string): Image;

  getTarget(): ProductTarget | undefined;
  setTarget(value?: ProductTarget): Image;
  hasTarget(): boolean;
  clearTarget(): Image;

  getType(): string;
  setType(value: string): Image;

  getSource(): string;
  setSource(value: string): Image;

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
  getLayoutId(): string;
  setLayoutId(value: string): Layout;

  getType(): number;
  setType(value: number): Layout;

  getTitle(): google_protobuf_struct_pb.Value | undefined;
  setTitle(value?: google_protobuf_struct_pb.Value): Layout;
  hasTitle(): boolean;
  clearTitle(): Layout;

  getQuantity(): number;
  setQuantity(value: number): Layout;

  getSecond(): number;
  setSecond(value: number): Layout;

  getImageList(): Array<Image>;
  setImageList(value: Array<Image>): Layout;
  clearImageList(): Layout;
  addImage(value?: Image, index?: number): Image;

  getItemsList(): Array<number>;
  setItemsList(value: Array<number>): Layout;
  clearItemsList(): Layout;
  addItems(value: number, index?: number): Layout;

  getTemplateGroupList(): Array<template_pb.Template>;
  setTemplateGroupList(value: Array<template_pb.Template>): Layout;
  clearTemplateGroupList(): Layout;
  addTemplateGroup(value?: template_pb.Template, index?: number): template_pb.Template;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Layout.AsObject;
  static toObject(includeInstance: boolean, msg: Layout): Layout.AsObject;
  static serializeBinaryToWriter(message: Layout, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Layout;
  static deserializeBinaryFromReader(message: Layout, reader: jspb.BinaryReader): Layout;
}

export namespace Layout {
  export type AsObject = {
    layoutId: string,
    type: number,
    title?: google_protobuf_struct_pb.Value.AsObject,
    quantity: number,
    second: number,
    imageList: Array<Image.AsObject>,
    itemsList: Array<number>,
    templateGroupList: Array<template_pb.Template.AsObject>,
  }
}

export class Nav extends jspb.Message {
  getLayoutId(): string;
  setLayoutId(value: string): Nav;

  getTitle(): google_protobuf_struct_pb.Value | undefined;
  setTitle(value?: google_protobuf_struct_pb.Value): Nav;
  hasTitle(): boolean;
  clearTitle(): Nav;

  getActivityId(): string;
  setActivityId(value: string): Nav;

  getClassId(): string;
  setClassId(value: string): Nav;

  getPageId(): string;
  setPageId(value: string): Nav;

  getLink(): string;
  setLink(value: string): Nav;

  getIsBlank(): boolean;
  setIsBlank(value: boolean): Nav;

  getCustomized(): string;
  setCustomized(value: string): Nav;

  getTemplateGroupList(): Array<template_pb.Template>;
  setTemplateGroupList(value: Array<template_pb.Template>): Nav;
  clearTemplateGroupList(): Nav;
  addTemplateGroup(value?: template_pb.Template, index?: number): template_pb.Template;

  getNavsList(): Array<Nav>;
  setNavsList(value: Array<Nav>): Nav;
  clearNavsList(): Nav;
  addNavs(value?: Nav, index?: number): Nav;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Nav.AsObject;
  static toObject(includeInstance: boolean, msg: Nav): Nav.AsObject;
  static serializeBinaryToWriter(message: Nav, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Nav;
  static deserializeBinaryFromReader(message: Nav, reader: jspb.BinaryReader): Nav;
}

export namespace Nav {
  export type AsObject = {
    layoutId: string,
    title?: google_protobuf_struct_pb.Value.AsObject,
    activityId: string,
    classId: string,
    pageId: string,
    link: string,
    isBlank: boolean,
    customized: string,
    templateGroupList: Array<template_pb.Template.AsObject>,
    navsList: Array<Nav.AsObject>,
  }
}

export class StyleColor extends jspb.Message {
  getBackground(): string;
  setBackground(value: string): StyleColor;

  getLogoStyle(): StyleColor.LogoStyle | undefined;
  setLogoStyle(value?: StyleColor.LogoStyle): StyleColor;
  hasLogoStyle(): boolean;
  clearLogoStyle(): StyleColor;

  getHeaderStyle(): StyleColor.HeaderStyle | undefined;
  setHeaderStyle(value?: StyleColor.HeaderStyle): StyleColor;
  hasHeaderStyle(): boolean;
  clearHeaderStyle(): StyleColor;

  getFooterStyle(): StyleColor.FooterStyle | undefined;
  setFooterStyle(value?: StyleColor.FooterStyle): StyleColor;
  hasFooterStyle(): boolean;
  clearFooterStyle(): StyleColor;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StyleColor.AsObject;
  static toObject(includeInstance: boolean, msg: StyleColor): StyleColor.AsObject;
  static serializeBinaryToWriter(message: StyleColor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StyleColor;
  static deserializeBinaryFromReader(message: StyleColor, reader: jspb.BinaryReader): StyleColor;
}

export namespace StyleColor {
  export type AsObject = {
    background: string,
    logoStyle?: StyleColor.LogoStyle.AsObject,
    headerStyle?: StyleColor.HeaderStyle.AsObject,
    footerStyle?: StyleColor.FooterStyle.AsObject,
  }

  export class LogoStyle extends jspb.Message {
    getHeight(): string;
    setHeight(value: string): LogoStyle;

    getWidth(): string;
    setWidth(value: string): LogoStyle;

    getPaddingTop(): string;
    setPaddingTop(value: string): LogoStyle;

    getNavTop(): string;
    setNavTop(value: string): LogoStyle;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LogoStyle.AsObject;
    static toObject(includeInstance: boolean, msg: LogoStyle): LogoStyle.AsObject;
    static serializeBinaryToWriter(message: LogoStyle, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LogoStyle;
    static deserializeBinaryFromReader(message: LogoStyle, reader: jspb.BinaryReader): LogoStyle;
  }

  export namespace LogoStyle {
    export type AsObject = {
      height: string,
      width: string,
      paddingTop: string,
      navTop: string,
    }
  }


  export class HeaderStyle extends jspb.Message {
    getColor(): string;
    setColor(value: string): HeaderStyle;

    getBackground(): string;
    setBackground(value: string): HeaderStyle;

    getToolColor(): string;
    setToolColor(value: string): HeaderStyle;

    getToolBackground(): string;
    setToolBackground(value: string): HeaderStyle;

    getMobile(): string;
    setMobile(value: string): HeaderStyle;

    getMobileBackground(): string;
    setMobileBackground(value: string): HeaderStyle;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HeaderStyle.AsObject;
    static toObject(includeInstance: boolean, msg: HeaderStyle): HeaderStyle.AsObject;
    static serializeBinaryToWriter(message: HeaderStyle, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HeaderStyle;
    static deserializeBinaryFromReader(message: HeaderStyle, reader: jspb.BinaryReader): HeaderStyle;
  }

  export namespace HeaderStyle {
    export type AsObject = {
      color: string,
      background: string,
      toolColor: string,
      toolBackground: string,
      mobile: string,
      mobileBackground: string,
    }
  }


  export class FooterStyle extends jspb.Message {
    getLabel(): string;
    setLabel(value: string): FooterStyle;

    getColor(): string;
    setColor(value: string): FooterStyle;

    getBackground(): string;
    setBackground(value: string): FooterStyle;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FooterStyle.AsObject;
    static toObject(includeInstance: boolean, msg: FooterStyle): FooterStyle.AsObject;
    static serializeBinaryToWriter(message: FooterStyle, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FooterStyle;
    static deserializeBinaryFromReader(message: FooterStyle, reader: jspb.BinaryReader): FooterStyle;
  }

  export namespace FooterStyle {
    export type AsObject = {
      label: string,
      color: string,
      background: string,
    }
  }

}

