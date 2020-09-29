import * as jspb from 'google-protobuf'

import * as seo_pb from './seo_pb';
import * as a$submessage_pb from './a-submessage_pb';
import * as product_pb from './product_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';


export class ProductGoods extends jspb.Message {
  getShellId(): number;
  setShellId(value: number): ProductGoods;

  getProductId(): string;
  setProductId(value: string): ProductGoods;

  getClassId(): string;
  setClassId(value: string): ProductGoods;

  getType(): number;
  setType(value: number): ProductGoods;

  getSeo(): seo_pb.SEO | undefined;
  setSeo(value?: seo_pb.SEO): ProductGoods;
  hasSeo(): boolean;
  clearSeo(): ProductGoods;

  getBlockList(): Array<seo_pb.Block>;
  setBlockList(value: Array<seo_pb.Block>): ProductGoods;
  clearBlockList(): ProductGoods;
  addBlock(value?: seo_pb.Block, index?: number): seo_pb.Block;

  getName(): google_protobuf_struct_pb.Value | undefined;
  setName(value?: google_protobuf_struct_pb.Value): ProductGoods;
  hasName(): boolean;
  clearName(): ProductGoods;

  getUrn(): string;
  setUrn(value: string): ProductGoods;

  getSku(): string;
  setSku(value: string): ProductGoods;

  getPhotoSrc(): string;
  setPhotoSrc(value: string): ProductGoods;

  getOriginal(): number;
  setOriginal(value: number): ProductGoods;

  getPrice(): number;
  setPrice(value: number): ProductGoods;

  getWeight(): number;
  setWeight(value: number): ProductGoods;

  getVolume(): number;
  setVolume(value: number): ProductGoods;

  getIsPickup(): boolean;
  setIsPickup(value: boolean): ProductGoods;

  getIsPreorder(): boolean;
  setIsPreorder(value: boolean): ProductGoods;

  getStock(): number;
  setStock(value: number): ProductGoods;

  getSpecxList(): Array<product_pb.ProductSpec>;
  setSpecxList(value: Array<product_pb.ProductSpec>): ProductGoods;
  clearSpecxList(): ProductGoods;
  addSpecx(value?: product_pb.ProductSpec, index?: number): product_pb.ProductSpec;

  getPhotoxList(): Array<a$submessage_pb.Image>;
  setPhotoxList(value: Array<a$submessage_pb.Image>): ProductGoods;
  clearPhotoxList(): ProductGoods;
  addPhotox(value?: a$submessage_pb.Image, index?: number): a$submessage_pb.Image;

  getActivityList(): Array<ActivityGoods>;
  setActivityList(value: Array<ActivityGoods>): ProductGoods;
  clearActivityList(): ProductGoods;
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
    blockList: Array<seo_pb.Block.AsObject>,
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
  setActivityId(value: string): ActivityGoods;

  getSku(): string;
  setSku(value: string): ActivityGoods;

  getName(): google_protobuf_struct_pb.Value | undefined;
  setName(value?: google_protobuf_struct_pb.Value): ActivityGoods;
  hasName(): boolean;
  clearName(): ActivityGoods;

  getReached(): boolean;
  setReached(value: boolean): ActivityGoods;

  getAmount(): number;
  setAmount(value: number): ActivityGoods;

  getDiscount(): number;
  setDiscount(value: number): ActivityGoods;

  getRule(): a$submessage_pb.Rule | undefined;
  setRule(value?: a$submessage_pb.Rule): ActivityGoods;
  hasRule(): boolean;
  clearRule(): ActivityGoods;

  getNow(): a$submessage_pb.Rule | undefined;
  setNow(value?: a$submessage_pb.Rule): ActivityGoods;
  hasNow(): boolean;
  clearNow(): ActivityGoods;

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
    rule?: a$submessage_pb.Rule.AsObject,
    now?: a$submessage_pb.Rule.AsObject,
  }
}

