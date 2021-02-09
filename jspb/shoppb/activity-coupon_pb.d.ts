import * as jspb from 'google-protobuf'

import * as seo_pb from './seo_pb';
import * as sql_pb from './sql_pb';
import * as a$submessage_pb from './a-submessage_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class Activity extends jspb.Message {
  getActivityId(): string;
  setActivityId(value: string): Activity;

  getStoreId(): string;
  setStoreId(value: string): Activity;

  getType(): number;
  setType(value: number): Activity;

  getBeginAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setBeginAt(value?: google_protobuf_timestamp_pb.Timestamp): Activity;
  hasBeginAt(): boolean;
  clearBeginAt(): Activity;

  getEndAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndAt(value?: google_protobuf_timestamp_pb.Timestamp): Activity;
  hasEndAt(): boolean;
  clearEndAt(): Activity;

  getName(): google_protobuf_struct_pb.Value | undefined;
  setName(value?: google_protobuf_struct_pb.Value): Activity;
  hasName(): boolean;
  clearName(): Activity;

  getUrn(): string;
  setUrn(value: string): Activity;

  getSeo(): seo_pb.SEO | undefined;
  setSeo(value?: seo_pb.SEO): Activity;
  hasSeo(): boolean;
  clearSeo(): Activity;

  getPhoto(): a$submessage_pb.Image | undefined;
  setPhoto(value?: a$submessage_pb.Image): Activity;
  hasPhoto(): boolean;
  clearPhoto(): Activity;

  getRule(): a$submessage_pb.Rule | undefined;
  setRule(value?: a$submessage_pb.Rule): Activity;
  hasRule(): boolean;
  clearRule(): Activity;

  getNow(): a$submessage_pb.Rule | undefined;
  setNow(value?: a$submessage_pb.Rule): Activity;
  hasNow(): boolean;
  clearNow(): Activity;

  getActive(): a$submessage_pb.Active | undefined;
  setActive(value?: a$submessage_pb.Active): Activity;
  hasActive(): boolean;
  clearActive(): Activity;

  getTarget(): a$submessage_pb.ProductTarget | undefined;
  setTarget(value?: a$submessage_pb.ProductTarget): Activity;
  hasTarget(): boolean;
  clearTarget(): Activity;

  getReached(): boolean;
  setReached(value: boolean): Activity;

  getUsedMap(): jspb.Map<string, number>;
  clearUsedMap(): Activity;

  getUseByCustomer(): number;
  setUseByCustomer(value: number): Activity;

  getUseByOrder(): number;
  setUseByOrder(value: number): Activity;

  getLabelxMap(): jspb.Map<string, number>;
  clearLabelxMap(): Activity;

  getOperator(): string;
  setOperator(value: string): Activity;

  getCreateAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateAt(value?: google_protobuf_timestamp_pb.Timestamp): Activity;
  hasCreateAt(): boolean;
  clearCreateAt(): Activity;

  getUpdateAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateAt(value?: google_protobuf_timestamp_pb.Timestamp): Activity;
  hasUpdateAt(): boolean;
  clearUpdateAt(): Activity;

  getColsList(): Array<string>;
  setColsList(value: Array<string>): Activity;
  clearColsList(): Activity;
  addCols(value: string, index?: number): Activity;

  getConditionList(): Array<sql_pb.Condition>;
  setConditionList(value: Array<sql_pb.Condition>): Activity;
  clearConditionList(): Activity;
  addCondition(value?: sql_pb.Condition, index?: number): sql_pb.Condition;

  getSelf(): google_protobuf_struct_pb.Struct | undefined;
  setSelf(value?: google_protobuf_struct_pb.Struct): Activity;
  hasSelf(): boolean;
  clearSelf(): Activity;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Activity.AsObject;
  static toObject(includeInstance: boolean, msg: Activity): Activity.AsObject;
  static serializeBinaryToWriter(message: Activity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Activity;
  static deserializeBinaryFromReader(message: Activity, reader: jspb.BinaryReader): Activity;
}

export namespace Activity {
  export type AsObject = {
    activityId: string,
    storeId: string,
    type: number,
    beginAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    name?: google_protobuf_struct_pb.Value.AsObject,
    urn: string,
    seo?: seo_pb.SEO.AsObject,
    photo?: a$submessage_pb.Image.AsObject,
    rule?: a$submessage_pb.Rule.AsObject,
    now?: a$submessage_pb.Rule.AsObject,
    active?: a$submessage_pb.Active.AsObject,
    target?: a$submessage_pb.ProductTarget.AsObject,
    reached: boolean,
    usedMap: Array<[string, number]>,
    useByCustomer: number,
    useByOrder: number,
    labelxMap: Array<[string, number]>,
    operator: string,
    createAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    colsList: Array<string>,
    conditionList: Array<sql_pb.Condition.AsObject>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class Coupon extends jspb.Message {
  getCouponId(): string;
  setCouponId(value: string): Coupon;

  getStoreId(): string;
  setStoreId(value: string): Coupon;

  getBeginAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setBeginAt(value?: google_protobuf_timestamp_pb.Timestamp): Coupon;
  hasBeginAt(): boolean;
  clearBeginAt(): Coupon;

  getEndAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndAt(value?: google_protobuf_timestamp_pb.Timestamp): Coupon;
  hasEndAt(): boolean;
  clearEndAt(): Coupon;

  getName(): google_protobuf_struct_pb.Value | undefined;
  setName(value?: google_protobuf_struct_pb.Value): Coupon;
  hasName(): boolean;
  clearName(): Coupon;

  getIsAuto(): boolean;
  setIsAuto(value: boolean): Coupon;

  getCode(): string;
  setCode(value: string): Coupon;

  getRule(): a$submessage_pb.Rule | undefined;
  setRule(value?: a$submessage_pb.Rule): Coupon;
  hasRule(): boolean;
  clearRule(): Coupon;

  getActive(): a$submessage_pb.Active | undefined;
  setActive(value?: a$submessage_pb.Active): Coupon;
  hasActive(): boolean;
  clearActive(): Coupon;

  getTarget(): a$submessage_pb.CustomerTarget | undefined;
  setTarget(value?: a$submessage_pb.CustomerTarget): Coupon;
  hasTarget(): boolean;
  clearTarget(): Coupon;

  getUsedMap(): jspb.Map<string, number>;
  clearUsedMap(): Coupon;

  getIsUse(): number;
  setIsUse(value: number): Coupon;

  getOrderId(): string;
  setOrderId(value: string): Coupon;

  getOrderAt(): string;
  setOrderAt(value: string): Coupon;

  getLabelxMap(): jspb.Map<string, number>;
  clearLabelxMap(): Coupon;

  getOperator(): string;
  setOperator(value: string): Coupon;

  getCreateAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateAt(value?: google_protobuf_timestamp_pb.Timestamp): Coupon;
  hasCreateAt(): boolean;
  clearCreateAt(): Coupon;

  getUpdateAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateAt(value?: google_protobuf_timestamp_pb.Timestamp): Coupon;
  hasUpdateAt(): boolean;
  clearUpdateAt(): Coupon;

  getColsList(): Array<string>;
  setColsList(value: Array<string>): Coupon;
  clearColsList(): Coupon;
  addCols(value: string, index?: number): Coupon;

  getConditionList(): Array<sql_pb.Condition>;
  setConditionList(value: Array<sql_pb.Condition>): Coupon;
  clearConditionList(): Coupon;
  addCondition(value?: sql_pb.Condition, index?: number): sql_pb.Condition;

  getSelf(): google_protobuf_struct_pb.Struct | undefined;
  setSelf(value?: google_protobuf_struct_pb.Struct): Coupon;
  hasSelf(): boolean;
  clearSelf(): Coupon;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Coupon.AsObject;
  static toObject(includeInstance: boolean, msg: Coupon): Coupon.AsObject;
  static serializeBinaryToWriter(message: Coupon, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Coupon;
  static deserializeBinaryFromReader(message: Coupon, reader: jspb.BinaryReader): Coupon;
}

export namespace Coupon {
  export type AsObject = {
    couponId: string,
    storeId: string,
    beginAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    name?: google_protobuf_struct_pb.Value.AsObject,
    isAuto: boolean,
    code: string,
    rule?: a$submessage_pb.Rule.AsObject,
    active?: a$submessage_pb.Active.AsObject,
    target?: a$submessage_pb.CustomerTarget.AsObject,
    usedMap: Array<[string, number]>,
    isUse: number,
    orderId: string,
    orderAt: string,
    labelxMap: Array<[string, number]>,
    operator: string,
    createAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    colsList: Array<string>,
    conditionList: Array<sql_pb.Condition.AsObject>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

