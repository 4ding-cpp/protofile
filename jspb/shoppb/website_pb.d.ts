import * as jspb from 'google-protobuf'

import * as seo_pb from './seo_pb';
import * as sql_pb from './sql_pb';
import * as a$submessage_pb from './a-submessage_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class Website extends jspb.Message {
  getStoreId(): string;
  setStoreId(value: string): Website;

  getStyle(): number;
  setStyle(value: number): Website;

  getLogo(): a$submessage_pb.Image | undefined;
  setLogo(value?: a$submessage_pb.Image): Website;
  hasLogo(): boolean;
  clearLogo(): Website;

  getStyleColor(): a$submessage_pb.StyleColor | undefined;
  setStyleColor(value?: a$submessage_pb.StyleColor): Website;
  hasStyleColor(): boolean;
  clearStyleColor(): Website;

  getFavicon(): a$submessage_pb.Image | undefined;
  setFavicon(value?: a$submessage_pb.Image): Website;
  hasFavicon(): boolean;
  clearFavicon(): Website;

  getSeo(): seo_pb.SEO | undefined;
  setSeo(value?: seo_pb.SEO): Website;
  hasSeo(): boolean;
  clearSeo(): Website;

  getNavList(): Array<a$submessage_pb.Layout>;
  setNavList(value: Array<a$submessage_pb.Layout>): Website;
  clearNavList(): Website;
  addNav(value?: a$submessage_pb.Layout, index?: number): a$submessage_pb.Layout;

  getFooterList(): Array<a$submessage_pb.Layout>;
  setFooterList(value: Array<a$submessage_pb.Layout>): Website;
  clearFooterList(): Website;
  addFooter(value?: a$submessage_pb.Layout, index?: number): a$submessage_pb.Layout;

  getLayoutList(): Array<a$submessage_pb.Layout>;
  setLayoutList(value: Array<a$submessage_pb.Layout>): Website;
  clearLayoutList(): Website;
  addLayout(value?: a$submessage_pb.Layout, index?: number): a$submessage_pb.Layout;

  getMenuList(): Array<a$submessage_pb.Layout>;
  setMenuList(value: Array<a$submessage_pb.Layout>): Website;
  clearMenuList(): Website;
  addMenu(value?: a$submessage_pb.Layout, index?: number): a$submessage_pb.Layout;

  getLabelxMap(): jspb.Map<string, number>;
  clearLabelxMap(): Website;

  getOperator(): string;
  setOperator(value: string): Website;

  getCreateAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateAt(value?: google_protobuf_timestamp_pb.Timestamp): Website;
  hasCreateAt(): boolean;
  clearCreateAt(): Website;

  getUpdateAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateAt(value?: google_protobuf_timestamp_pb.Timestamp): Website;
  hasUpdateAt(): boolean;
  clearUpdateAt(): Website;

  getColsList(): Array<string>;
  setColsList(value: Array<string>): Website;
  clearColsList(): Website;
  addCols(value: string, index?: number): Website;

  getConditionList(): Array<sql_pb.Condition>;
  setConditionList(value: Array<sql_pb.Condition>): Website;
  clearConditionList(): Website;
  addCondition(value?: sql_pb.Condition, index?: number): sql_pb.Condition;

  getSelf(): google_protobuf_struct_pb.Struct | undefined;
  setSelf(value?: google_protobuf_struct_pb.Struct): Website;
  hasSelf(): boolean;
  clearSelf(): Website;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Website.AsObject;
  static toObject(includeInstance: boolean, msg: Website): Website.AsObject;
  static serializeBinaryToWriter(message: Website, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Website;
  static deserializeBinaryFromReader(message: Website, reader: jspb.BinaryReader): Website;
}

export namespace Website {
  export type AsObject = {
    storeId: string,
    style: number,
    logo?: a$submessage_pb.Image.AsObject,
    styleColor?: a$submessage_pb.StyleColor.AsObject,
    favicon?: a$submessage_pb.Image.AsObject,
    seo?: seo_pb.SEO.AsObject,
    navList: Array<a$submessage_pb.Layout.AsObject>,
    footerList: Array<a$submessage_pb.Layout.AsObject>,
    layoutList: Array<a$submessage_pb.Layout.AsObject>,
    menuList: Array<a$submessage_pb.Layout.AsObject>,
    labelxMap: Array<[string, number]>,
    operator: string,
    createAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    colsList: Array<string>,
    conditionList: Array<sql_pb.Condition.AsObject>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

