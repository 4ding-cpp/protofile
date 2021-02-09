import * as jspb from 'google-protobuf'

import * as sql_pb from './sql_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class Order extends jspb.Message {
  getOrderId(): string;
  setOrderId(value: string): Order;

  getStoreId(): string;
  setStoreId(value: string): Order;

  getSalesId(): string;
  setSalesId(value: string): Order;

  getCustomerId(): string;
  setCustomerId(value: string): Order;

  getName(): string;
  setName(value: string): Order;

  getEmail(): string;
  setEmail(value: string): Order;

  getPhone(): string;
  setPhone(value: string): Order;

  getIsCustomer(): boolean;
  setIsCustomer(value: boolean): Order;

  getCarId(): string;
  setCarId(value: string): Order;

  getCouponId(): string;
  setCouponId(value: string): Order;

  getAmount(): number;
  setAmount(value: number): Order;

  getFreight(): number;
  setFreight(value: number): Order;

  getPrice(): number;
  setPrice(value: number): Order;

  getOrderCharge(): number;
  setOrderCharge(value: number): Order;

  getBusinessCharge(): number;
  setBusinessCharge(value: number): Order;

  getSalesCharge(): number;
  setSalesCharge(value: number): Order;

  getPaymentCharge(): number;
  setPaymentCharge(value: number): Order;

  getLogisticsCharge(): number;
  setLogisticsCharge(value: number): Order;

  getState(): number;
  setState(value: number): Order;

  getPaymentState(): number;
  setPaymentState(value: number): Order;

  getLogisticsState(): number;
  setLogisticsState(value: number): Order;

  getPaymentAdapter(): string;
  setPaymentAdapter(value: string): Order;

  getPaymentService(): string;
  setPaymentService(value: string): Order;

  getPaymentType(): number;
  setPaymentType(value: number): Order;

  getLogisticsAdapter(): string;
  setLogisticsAdapter(value: string): Order;

  getLogisticsService(): string;
  setLogisticsService(value: string): Order;

  getLogisticsType(): number;
  setLogisticsType(value: number): Order;

  getLogisticsSubType(): number;
  setLogisticsSubType(value: number): Order;

  getIsTimeout(): boolean;
  setIsTimeout(value: boolean): Order;

  getIsBack(): boolean;
  setIsBack(value: boolean): Order;

  getIsExchange(): boolean;
  setIsExchange(value: boolean): Order;

  getReason(): string;
  setReason(value: string): Order;

  getPickupAt(): string;
  setPickupAt(value: string): Order;

  getCloseAt(): string;
  setCloseAt(value: string): Order;

  getPayAt(): string;
  setPayAt(value: string): Order;

  getPayIp(): string;
  setPayIp(value: string): Order;

  getCity(): string;
  setCity(value: string): Order;

  getDevice(): string;
  setDevice(value: string): Order;

  getRemark(): string;
  setRemark(value: string): Order;

  getOther(): OrderOther | undefined;
  setOther(value?: OrderOther): Order;
  hasOther(): boolean;
  clearOther(): Order;

  getGoodsList(): Array<OrderGoods>;
  setGoodsList(value: Array<OrderGoods>): Order;
  clearGoodsList(): Order;
  addGoods(value?: OrderGoods, index?: number): OrderGoods;

  getActivityList(): Array<OrderActivity>;
  setActivityList(value: Array<OrderActivity>): Order;
  clearActivityList(): Order;
  addActivity(value?: OrderActivity, index?: number): OrderActivity;

  getLabelxMap(): jspb.Map<string, number>;
  clearLabelxMap(): Order;

  getOperator(): string;
  setOperator(value: string): Order;

  getCreateAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateAt(value?: google_protobuf_timestamp_pb.Timestamp): Order;
  hasCreateAt(): boolean;
  clearCreateAt(): Order;

  getUpdateAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateAt(value?: google_protobuf_timestamp_pb.Timestamp): Order;
  hasUpdateAt(): boolean;
  clearUpdateAt(): Order;

  getColsList(): Array<string>;
  setColsList(value: Array<string>): Order;
  clearColsList(): Order;
  addCols(value: string, index?: number): Order;

  getConditionList(): Array<sql_pb.Condition>;
  setConditionList(value: Array<sql_pb.Condition>): Order;
  clearConditionList(): Order;
  addCondition(value?: sql_pb.Condition, index?: number): sql_pb.Condition;

  getSelf(): google_protobuf_struct_pb.Struct | undefined;
  setSelf(value?: google_protobuf_struct_pb.Struct): Order;
  hasSelf(): boolean;
  clearSelf(): Order;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Order.AsObject;
  static toObject(includeInstance: boolean, msg: Order): Order.AsObject;
  static serializeBinaryToWriter(message: Order, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Order;
  static deserializeBinaryFromReader(message: Order, reader: jspb.BinaryReader): Order;
}

export namespace Order {
  export type AsObject = {
    orderId: string,
    storeId: string,
    salesId: string,
    customerId: string,
    name: string,
    email: string,
    phone: string,
    isCustomer: boolean,
    carId: string,
    couponId: string,
    amount: number,
    freight: number,
    price: number,
    orderCharge: number,
    businessCharge: number,
    salesCharge: number,
    paymentCharge: number,
    logisticsCharge: number,
    state: number,
    paymentState: number,
    logisticsState: number,
    paymentAdapter: string,
    paymentService: string,
    paymentType: number,
    logisticsAdapter: string,
    logisticsService: string,
    logisticsType: number,
    logisticsSubType: number,
    isTimeout: boolean,
    isBack: boolean,
    isExchange: boolean,
    reason: string,
    pickupAt: string,
    closeAt: string,
    payAt: string,
    payIp: string,
    city: string,
    device: string,
    remark: string,
    other?: OrderOther.AsObject,
    goodsList: Array<OrderGoods.AsObject>,
    activityList: Array<OrderActivity.AsObject>,
    labelxMap: Array<[string, number]>,
    operator: string,
    createAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    colsList: Array<string>,
    conditionList: Array<sql_pb.Condition.AsObject>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class OrderGoods extends jspb.Message {
  getId(): number;
  setId(value: number): OrderGoods;

  getOrderId(): string;
  setOrderId(value: string): OrderGoods;

  getStoreId(): string;
  setStoreId(value: string): OrderGoods;

  getSalesId(): string;
  setSalesId(value: string): OrderGoods;

  getActivityId(): string;
  setActivityId(value: string): OrderGoods;

  getProductId(): string;
  setProductId(value: string): OrderGoods;

  getSku(): string;
  setSku(value: string): OrderGoods;

  getPhotoSrc(): string;
  setPhotoSrc(value: string): OrderGoods;

  getName(): string;
  setName(value: string): OrderGoods;

  getAmount(): number;
  setAmount(value: number): OrderGoods;

  getPrice(): number;
  setPrice(value: number): OrderGoods;

  getDiscount(): number;
  setDiscount(value: number): OrderGoods;

  getItemxList(): Array<google_protobuf_struct_pb.Value>;
  setItemxList(value: Array<google_protobuf_struct_pb.Value>): OrderGoods;
  clearItemxList(): OrderGoods;
  addItemx(value?: google_protobuf_struct_pb.Value, index?: number): google_protobuf_struct_pb.Value;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderGoods.AsObject;
  static toObject(includeInstance: boolean, msg: OrderGoods): OrderGoods.AsObject;
  static serializeBinaryToWriter(message: OrderGoods, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderGoods;
  static deserializeBinaryFromReader(message: OrderGoods, reader: jspb.BinaryReader): OrderGoods;
}

export namespace OrderGoods {
  export type AsObject = {
    id: number,
    orderId: string,
    storeId: string,
    salesId: string,
    activityId: string,
    productId: string,
    sku: string,
    photoSrc: string,
    name: string,
    amount: number,
    price: number,
    discount: number,
    itemxList: Array<google_protobuf_struct_pb.Value.AsObject>,
  }
}

export class OrderActivity extends jspb.Message {
  getOrderId(): string;
  setOrderId(value: string): OrderActivity;

  getStoreId(): string;
  setStoreId(value: string): OrderActivity;

  getActivityId(): string;
  setActivityId(value: string): OrderActivity;

  getName(): string;
  setName(value: string): OrderActivity;

  getGiveaway(): number;
  setGiveaway(value: number): OrderActivity;

  getAmount(): number;
  setAmount(value: number): OrderActivity;

  getDiscount(): number;
  setDiscount(value: number): OrderActivity;

  getReduce(): number;
  setReduce(value: number): OrderActivity;

  getCoupon(): number;
  setCoupon(value: number): OrderActivity;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderActivity.AsObject;
  static toObject(includeInstance: boolean, msg: OrderActivity): OrderActivity.AsObject;
  static serializeBinaryToWriter(message: OrderActivity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderActivity;
  static deserializeBinaryFromReader(message: OrderActivity, reader: jspb.BinaryReader): OrderActivity;
}

export namespace OrderActivity {
  export type AsObject = {
    orderId: string,
    storeId: string,
    activityId: string,
    name: string,
    giveaway: number,
    amount: number,
    discount: number,
    reduce: number,
    coupon: number,
  }
}

export class ContactInfo extends jspb.Message {
  getName(): string;
  setName(value: string): ContactInfo;

  getPhone(): string;
  setPhone(value: string): ContactInfo;

  getEmail(): string;
  setEmail(value: string): ContactInfo;

  getCvs(): ContactInfo.CVS | undefined;
  setCvs(value?: ContactInfo.CVS): ContactInfo;
  hasCvs(): boolean;
  clearCvs(): ContactInfo;

  getAddress(): ContactInfo.Address | undefined;
  setAddress(value?: ContactInfo.Address): ContactInfo;
  hasAddress(): boolean;
  clearAddress(): ContactInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContactInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ContactInfo): ContactInfo.AsObject;
  static serializeBinaryToWriter(message: ContactInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContactInfo;
  static deserializeBinaryFromReader(message: ContactInfo, reader: jspb.BinaryReader): ContactInfo;
}

export namespace ContactInfo {
  export type AsObject = {
    name: string,
    phone: string,
    email: string,
    cvs?: ContactInfo.CVS.AsObject,
    address?: ContactInfo.Address.AsObject,
  }

  export class CVS extends jspb.Message {
    getCode(): string;
    setCode(value: string): CVS;

    getType(): string;
    setType(value: string): CVS;

    getName(): string;
    setName(value: string): CVS;

    getAddress(): string;
    setAddress(value: string): CVS;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CVS.AsObject;
    static toObject(includeInstance: boolean, msg: CVS): CVS.AsObject;
    static serializeBinaryToWriter(message: CVS, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CVS;
    static deserializeBinaryFromReader(message: CVS, reader: jspb.BinaryReader): CVS;
  }

  export namespace CVS {
    export type AsObject = {
      code: string,
      type: string,
      name: string,
      address: string,
    }
  }


  export class Address extends jspb.Message {
    getZipcode(): string;
    setZipcode(value: string): Address;

    getCountry(): string;
    setCountry(value: string): Address;

    getCity(): string;
    setCity(value: string): Address;

    getTownship(): string;
    setTownship(value: string): Address;

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
      zipcode: string,
      country: string,
      city: string,
      township: string,
      detail: string,
    }
  }

}

export class OrderOther extends jspb.Message {
  getPaymentNo(): string;
  setPaymentNo(value: string): OrderOther;

  getBankCode(): string;
  setBankCode(value: string): OrderOther;

  getBankAccount(): string;
  setBankAccount(value: string): OrderOther;

  getCvsNo(): string;
  setCvsNo(value: string): OrderOther;

  getExpireDay(): number;
  setExpireDay(value: number): OrderOther;

  getLogisticsNo(): string;
  setLogisticsNo(value: string): OrderOther;

  getCvsPaymentNo(): string;
  setCvsPaymentNo(value: string): OrderOther;

  getReturnNo(): string;
  setReturnNo(value: string): OrderOther;

  getSender(): ContactInfo | undefined;
  setSender(value?: ContactInfo): OrderOther;
  hasSender(): boolean;
  clearSender(): OrderOther;

  getReceiver(): ContactInfo | undefined;
  setReceiver(value?: ContactInfo): OrderOther;
  hasReceiver(): boolean;
  clearReceiver(): OrderOther;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderOther.AsObject;
  static toObject(includeInstance: boolean, msg: OrderOther): OrderOther.AsObject;
  static serializeBinaryToWriter(message: OrderOther, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderOther;
  static deserializeBinaryFromReader(message: OrderOther, reader: jspb.BinaryReader): OrderOther;
}

export namespace OrderOther {
  export type AsObject = {
    paymentNo: string,
    bankCode: string,
    bankAccount: string,
    cvsNo: string,
    expireDay: number,
    logisticsNo: string,
    cvsPaymentNo: string,
    returnNo: string,
    sender?: ContactInfo.AsObject,
    receiver?: ContactInfo.AsObject,
  }
}

export class OrderBatch extends jspb.Message {
  getState(): number;
  setState(value: number): OrderBatch;

  getPaymentState(): number;
  setPaymentState(value: number): OrderBatch;

  getLogisticsState(): number;
  setLogisticsState(value: number): OrderBatch;

  getTemperature(): string;
  setTemperature(value: string): OrderBatch;

  getSpecification(): string;
  setSpecification(value: string): OrderBatch;

  getPickupTime(): string;
  setPickupTime(value: string): OrderBatch;

  getOrderList(): Array<Order>;
  setOrderList(value: Array<Order>): OrderBatch;
  clearOrderList(): OrderBatch;
  addOrder(value?: Order, index?: number): Order;

  getSelf(): google_protobuf_struct_pb.Struct | undefined;
  setSelf(value?: google_protobuf_struct_pb.Struct): OrderBatch;
  hasSelf(): boolean;
  clearSelf(): OrderBatch;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderBatch.AsObject;
  static toObject(includeInstance: boolean, msg: OrderBatch): OrderBatch.AsObject;
  static serializeBinaryToWriter(message: OrderBatch, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderBatch;
  static deserializeBinaryFromReader(message: OrderBatch, reader: jspb.BinaryReader): OrderBatch;
}

export namespace OrderBatch {
  export type AsObject = {
    state: number,
    paymentState: number,
    logisticsState: number,
    temperature: string,
    specification: string,
    pickupTime: string,
    orderList: Array<Order.AsObject>,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class Payment extends jspb.Message {
  getRedirect(): string;
  setRedirect(value: string): Payment;

  getRtncode(): string;
  setRtncode(value: string): Payment;

  getRtnmsg(): string;
  setRtnmsg(value: string): Payment;

  getTradeno(): string;
  setTradeno(value: string): Payment;

  getTrandamt(): string;
  setTrandamt(value: string): Payment;

  getPaymenttype(): string;
  setPaymenttype(value: string): Payment;

  getTradedate(): string;
  setTradedate(value: string): Payment;

  getExpiredate(): string;
  setExpiredate(value: string): Payment;

  getBankcode(): string;
  setBankcode(value: string): Payment;

  getVaccount(): string;
  setVaccount(value: string): Payment;

  getPaymentno(): string;
  setPaymentno(value: string): Payment;

  getBarcode1(): string;
  setBarcode1(value: string): Payment;

  getBarcode2(): string;
  setBarcode2(value: string): Payment;

  getBarcode3(): string;
  setBarcode3(value: string): Payment;

  getSelf(): google_protobuf_struct_pb.Struct | undefined;
  setSelf(value?: google_protobuf_struct_pb.Struct): Payment;
  hasSelf(): boolean;
  clearSelf(): Payment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Payment.AsObject;
  static toObject(includeInstance: boolean, msg: Payment): Payment.AsObject;
  static serializeBinaryToWriter(message: Payment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Payment;
  static deserializeBinaryFromReader(message: Payment, reader: jspb.BinaryReader): Payment;
}

export namespace Payment {
  export type AsObject = {
    redirect: string,
    rtncode: string,
    rtnmsg: string,
    tradeno: string,
    trandamt: string,
    paymenttype: string,
    tradedate: string,
    expiredate: string,
    bankcode: string,
    vaccount: string,
    paymentno: string,
    barcode1: string,
    barcode2: string,
    barcode3: string,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class Logistics extends jspb.Message {
  getRenderid(): string;
  setRenderid(value: string): Logistics;

  getRedirect(): string;
  setRedirect(value: string): Logistics;

  getRtncode(): string;
  setRtncode(value: string): Logistics;

  getRtnmsg(): string;
  setRtnmsg(value: string): Logistics;

  getAllpaylogisticsid(): string;
  setAllpaylogisticsid(value: string): Logistics;

  getLogisticstype(): string;
  setLogisticstype(value: string): Logistics;

  getLogisticssubtype(): string;
  setLogisticssubtype(value: string): Logistics;

  getGoodsamount(): string;
  setGoodsamount(value: string): Logistics;

  getUpdatestatusdate(): string;
  setUpdatestatusdate(value: string): Logistics;

  getSendername(): string;
  setSendername(value: string): Logistics;

  getSenderphone(): string;
  setSenderphone(value: string): Logistics;

  getSendercellphone(): string;
  setSendercellphone(value: string): Logistics;

  getSenderzipcode(): string;
  setSenderzipcode(value: string): Logistics;

  getSenderaddress(): string;
  setSenderaddress(value: string): Logistics;

  getReceivername(): string;
  setReceivername(value: string): Logistics;

  getReceiverphone(): string;
  setReceiverphone(value: string): Logistics;

  getReceivercellphone(): string;
  setReceivercellphone(value: string): Logistics;

  getReceiveremail(): string;
  setReceiveremail(value: string): Logistics;

  getReceiverzipcode(): string;
  setReceiverzipcode(value: string): Logistics;

  getReceiveraddress(): string;
  setReceiveraddress(value: string): Logistics;

  getCvsstoreid(): string;
  setCvsstoreid(value: string): Logistics;

  getCvsstorename(): string;
  setCvsstorename(value: string): Logistics;

  getCvsaddress(): string;
  setCvsaddress(value: string): Logistics;

  getCvstelephone(): string;
  setCvstelephone(value: string): Logistics;

  getCvsoutside(): string;
  setCvsoutside(value: string): Logistics;

  getCvspaymentno(): string;
  setCvspaymentno(value: string): Logistics;

  getCvsvalidationno(): string;
  setCvsvalidationno(value: string): Logistics;

  getStoretype(): string;
  setStoretype(value: string): Logistics;

  getStatus(): string;
  setStatus(value: string): Logistics;

  getTemperature(): string;
  setTemperature(value: string): Logistics;

  getDistance(): string;
  setDistance(value: string): Logistics;

  getSpecification(): string;
  setSpecification(value: string): Logistics;

  getScheduledpickuptime(): string;
  setScheduledpickuptime(value: string): Logistics;

  getScheduleddeliverytime(): string;
  setScheduleddeliverytime(value: string): Logistics;

  getScheduleddeliverydate(): string;
  setScheduleddeliverydate(value: string): Logistics;

  getBookingnode(): string;
  setBookingnode(value: string): Logistics;

  getSelf(): google_protobuf_struct_pb.Struct | undefined;
  setSelf(value?: google_protobuf_struct_pb.Struct): Logistics;
  hasSelf(): boolean;
  clearSelf(): Logistics;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Logistics.AsObject;
  static toObject(includeInstance: boolean, msg: Logistics): Logistics.AsObject;
  static serializeBinaryToWriter(message: Logistics, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Logistics;
  static deserializeBinaryFromReader(message: Logistics, reader: jspb.BinaryReader): Logistics;
}

export namespace Logistics {
  export type AsObject = {
    renderid: string,
    redirect: string,
    rtncode: string,
    rtnmsg: string,
    allpaylogisticsid: string,
    logisticstype: string,
    logisticssubtype: string,
    goodsamount: string,
    updatestatusdate: string,
    sendername: string,
    senderphone: string,
    sendercellphone: string,
    senderzipcode: string,
    senderaddress: string,
    receivername: string,
    receiverphone: string,
    receivercellphone: string,
    receiveremail: string,
    receiverzipcode: string,
    receiveraddress: string,
    cvsstoreid: string,
    cvsstorename: string,
    cvsaddress: string,
    cvstelephone: string,
    cvsoutside: string,
    cvspaymentno: string,
    cvsvalidationno: string,
    storetype: string,
    status: string,
    temperature: string,
    distance: string,
    specification: string,
    scheduledpickuptime: string,
    scheduleddeliverytime: string,
    scheduleddeliverydate: string,
    bookingnode: string,
    self?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

