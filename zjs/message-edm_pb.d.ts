import * as jspb from "google-protobuf"

export class Email extends jspb.Message {
  getGroupname(): string;
  setGroupname(value: string): void;

  getFieldsList(): Array<string>;
  setFieldsList(value: Array<string>): void;
  clearFieldsList(): void;
  addFields(value: string, index?: number): void;

  getValuesList(): Array<string>;
  setValuesList(value: Array<string>): void;
  clearValuesList(): void;
  addValues(value: string, index?: number): void;

  getFormname(): string;
  setFormname(value: string): void;

  getContent(): Email.Content | undefined;
  setContent(value?: Email.Content): void;
  hasContent(): boolean;
  clearContent(): void;

  getSchedule(): Email.Schedule | undefined;
  setSchedule(value?: Email.Schedule): void;
  hasSchedule(): boolean;
  clearSchedule(): void;

  getGa(): Email.GA | undefined;
  setGa(value?: Email.GA): void;
  hasGa(): boolean;
  clearGa(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Email.AsObject;
  static toObject(includeInstance: boolean, msg: Email): Email.AsObject;
  static serializeBinaryToWriter(message: Email, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Email;
  static deserializeBinaryFromReader(message: Email, reader: jspb.BinaryReader): Email;
}

export namespace Email {
  export type AsObject = {
    groupname: string,
    fieldsList: Array<string>,
    valuesList: Array<string>,
    formname: string,
    content?: Email.Content.AsObject,
    schedule?: Email.Schedule.AsObject,
    ga?: Email.GA.AsObject,
  }

  export class Content extends jspb.Message {
    getSubject(): string;
    setSubject(value: string): void;

    getFromname(): string;
    setFromname(value: string): void;

    getFromaddress(): string;
    setFromaddress(value: string): void;

    getHtmlcontent(): string;
    setHtmlcontent(value: string): void;

    getFooterLang(): number;
    setFooterLang(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Content.AsObject;
    static toObject(includeInstance: boolean, msg: Content): Content.AsObject;
    static serializeBinaryToWriter(message: Content, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Content;
    static deserializeBinaryFromReader(message: Content, reader: jspb.BinaryReader): Content;
  }

  export namespace Content {
    export type AsObject = {
      subject: string,
      fromname: string,
      fromaddress: string,
      htmlcontent: string,
      footerLang: number,
    }
  }


  export class Schedule extends jspb.Message {
    getType(): number;
    setType(value: number): void;

    getTimezone(): number;
    setTimezone(value: number): void;

    getScheduleDate(): string;
    setScheduleDate(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Schedule.AsObject;
    static toObject(includeInstance: boolean, msg: Schedule): Schedule.AsObject;
    static serializeBinaryToWriter(message: Schedule, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Schedule;
    static deserializeBinaryFromReader(message: Schedule, reader: jspb.BinaryReader): Schedule;
  }

  export namespace Schedule {
    export type AsObject = {
      type: number,
      timezone: number,
      scheduleDate: string,
    }
  }


  export class GA extends jspb.Message {
    getEnable(): boolean;
    setEnable(value: boolean): void;

    getEcommerceEnable(): boolean;
    setEcommerceEnable(value: boolean): void;

    getUtmcampaign(): string;
    setUtmcampaign(value: string): void;

    getUtmcontent(): string;
    setUtmcontent(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GA.AsObject;
    static toObject(includeInstance: boolean, msg: GA): GA.AsObject;
    static serializeBinaryToWriter(message: GA, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GA;
    static deserializeBinaryFromReader(message: GA, reader: jspb.BinaryReader): GA;
  }

  export namespace GA {
    export type AsObject = {
      enable: boolean,
      ecommerceEnable: boolean,
      utmcampaign: string,
      utmcontent: string,
    }
  }

}

export class EmailResult extends jspb.Message {
  getSn(): string;
  setSn(value: string): void;

  getImportsn(): string;
  setImportsn(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmailResult.AsObject;
  static toObject(includeInstance: boolean, msg: EmailResult): EmailResult.AsObject;
  static serializeBinaryToWriter(message: EmailResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmailResult;
  static deserializeBinaryFromReader(message: EmailResult, reader: jspb.BinaryReader): EmailResult;
}

export namespace EmailResult {
  export type AsObject = {
    sn: string,
    importsn: string,
  }
}

