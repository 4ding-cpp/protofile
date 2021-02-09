import * as jspb from 'google-protobuf'



export class Address extends jspb.Message {
  getCountry(): string;
  setCountry(value: string): Address;

  getCity(): string;
  setCity(value: string): Address;

  getTownship(): string;
  setTownship(value: string): Address;

  getZipcode(): string;
  setZipcode(value: string): Address;

  getDetail(): string;
  setDetail(value: string): Address;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Address.AsObject;
  static toObject(includeInstance: boolean, msg: Address): Address.AsObject;
  static serializeBinaryToWriter(message: Address, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Address;
  static deserializeBinaryFromReader(message: Address, reader: jspb.BinaryReader): Address;
}

export namespace Address {
  export type AsObject = {
    country: string,
    city: string,
    township: string,
    zipcode: string,
    detail: string,
  }
}

