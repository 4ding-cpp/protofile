import * as jspb from "google-protobuf"

import * as seo_pb from './seo_pb';
import * as template_pb from './template_pb';
import * as a$submessage_pb from './a-submessage_pb';
import * as product_pb from './product_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';

export class ProductGoods extends jspb.Message {
  getShellId(): number;
  setShellId(value: number): void;

  getProductId(): string;
  setProductId(value: string): void;

  getClassId(): string;
  setClassId(value: string): void;

  getType(): number;
  setType(value: number): void;

  getSeo(): seo_pb.SEO | undefined;
  setSeo(value?: seo_pb.SEO): void;
  hasSeo(): boolean;
  clearSeo(): void;

  getBlockList(): Array<template_pb.Template>;
  setBlockList(value: Array<template_pb.Template>): void;
  clearBlockList(): void;
  addBlock(value?: template_pb.Template, index?: number): template_pb.Template;

  getName(): google_protobuf_struct_pb.Value | undefined;
  setName(value?: google_protobuf_struct_pb.Value): void;
  hasName(): boolean;
  clearName(): void;

  getUrn(): string;
  setUrn(value: string): void;

  getSku(): string;
  setSku(value: string): void;

  getPhotoSrc(): string;
  setPhotoSrc(value: string): void;

  getOriginal(): number;
  setOriginal(value: number): void;

  getPrice(): number;
  setPrice(value: number): void;

  getWeight(): number;
  setWeight(value: number): void;

  getVolume(): number;
  setVolume(value: number): void;

  getIsPickup(): boolean;
  setIsPickup(value: boolean): void;

  getIsPreorder(): boolean;
  setIsPreorder(value: boolean): void;

  getStock(): number;
  setStock(value: number): void;

  getSpecxList(): Array<product_pb.ProductSpec>;
  setSpecxList(value: Array<product_pb.ProductSpec>): void;
  clearSpecxList(): void;
  addSpecx(value?: product_pb.ProductSpec, index?: number): product_pb.ProductSpec;

  getPhotoxList(): Array<a$submessage_pb.Image>;
  setPhotoxList(value: Array<a$submessage_pb.Image>): void;
  clearPhotoxList(): void;
  addPhotox(value?: a$submessage_pb.Image, index?: number): a$submessage_pb.Image;

  getActivityList(): Array<ActivityGoods>;
  setActivityList(value: Array<ActivityGoods>): void;
  clearActivityList(): void;
  addActivity(value?: ActivityGoods, index?: number): ActivityGoods;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductGoods.AsObject;
  static toObject(includeInstance: boolean, msg: ProductGoods): ProductGoods.AsObject;
  static serializeBinaryToWriter(message: ProductGoods, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductGoods;
  static deserializeBinaryFromReader(message: ProductGoods, reader: jspb.BinaryReader): ProductGoods;
}

export namespace ProductGoods {
  export type AsObject = {
    shellId: number,
    productId: string,
    classId: string,
    type: number,
    seo?: seo_pb.SEO.AsObject,
    blockList: Array<template_pb.Template.AsObject>,
    name?: google_protobuf_struct_pb.Value.AsObject,
    urn: string,
    sku: string,
    photoSrc: string,
    original: number,
    price: number,
    weight: number,
    volume: number,
    isPickup: boolean,
    isPreorder: boolean,
    stock: number,
    specxList: Array<product_pb.ProductSpec.AsObject>,
    photoxList: Array<a$submessage_pb.Image.AsObject>,
    activityList: Array<ActivityGoods.AsObject>,
  }
}

export class ActivityGoods extends jspb.Message {
  getActivityId(): string;
  setActivityId(value: string): void;

  getSku(): string;
  setSku(value: string): void;

  getName(): google_protobuf_struct_pb.Value | undefined;
  setName(value?: google_protobuf_struct_pb.Value): void;
  hasName(): boolean;
  clearName(): void;

  getReached(): boolean;
  setReached(value: boolean): void;

  getAmount(): number;
  setAmount(value: number): void;

  getDiscount(): number;
  setDiscount(value: number): void;

  getCoupon(): number;
  setCoupon(value: number): void;

  getPromote(): number;
  setPromote(value: number): void;

  getRule(): a$submessage_pb.Rule | undefined;
  setRule(value?: a$submessage_pb.Rule): void;
  hasRule(): boolean;
  clearRule(): void;

  getNow(): a$submessage_pb.Rule | undefined;
  setNow(value?: a$submessage_pb.Rule): void;
  hasNow(): boolean;
  clearNow(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActivityGoods.AsObject;
  static toObject(includeInstance: boolean, msg: ActivityGoods): ActivityGoods.AsObject;
  static serializeBinaryToWriter(message: ActivityGoods, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActivityGoods;
  static deserializeBinaryFromReader(message: ActivityGoods, reader: jspb.BinaryReader): ActivityGoods;
}

export namespace ActivityGoods {
  export type AsObject = {
    activityId: string,
    sku: string,
    name?: google_protobuf_struct_pb.Value.AsObject,
    reached: boolean,
    amount: number,
    discount: number,
    coupon: number,
    promote: number,
    rule?: a$submessage_pb.Rule.AsObject,
    now?: a$submessage_pb.Rule.AsObject,
  }
}

