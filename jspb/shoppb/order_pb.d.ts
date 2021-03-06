import * as jspb from "google-protobuf"

import * as address_pb from './address_pb';
import * as sql_pb from './sql_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class Order extends jspb.Message {
  getOrderId(): string;
  setOrderId(value: string): void;

  getStoreId(): string;
  setStoreId(value: string): void;

  getCustomerId(): string;
  setCustomerId(value: string): void;

  getIsCustomer(): boolean;
  setIsCustomer(value: boolean): void;

  getCarId(): string;
  setCarId(value: string): void;

  getCouponId(): string;
  setCouponId(value: string): void;

  getSalesId(): string;
  setSalesId(value: string): void;

  getPromoteId(): string;
  setPromoteId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  getPhone(): string;
  setPhone(value: string): void;

  getAmount(): number;
  setAmount(value: number): void;

  getFreight(): number;
  setFreight(value: number): void;

  getPrice(): number;
  setPrice(value: number): void;

  getOrderCharge(): number;
  setOrderCharge(value: number): void;

  getBusinessCharge(): number;
  setBusinessCharge(value: number): void;

  getSalesCharge(): number;
  setSalesCharge(value: number): void;

  getPaymentCharge(): number;
  setPaymentCharge(value: number): void;

  getLogisticsCharge(): number;
  setLogisticsCharge(value: number): void;

  getState(): number;
  setState(value: number): void;

  getPaymentState(): number;
  setPaymentState(value: number): void;

  getLogisticsState(): number;
  setLogisticsState(value: number): void;

  getPaymentAdapter(): string;
  setPaymentAdapter(value: string): void;

  getPaymentService(): string;
  setPaymentService(value: string): void;

  getPaymentType(): number;
  setPaymentType(value: number): void;

  getLogisticsAdapter(): string;
  setLogisticsAdapter(value: string): void;

  getLogisticsService(): string;
  setLogisticsService(value: string): void;

  getLogisticsType(): number;
  setLogisticsType(value: number): void;

  getLogisticsSubType(): number;
  setLogisticsSubType(value: number): void;

  getReturnAdapter(): string;
  setReturnAdapter(value: string): void;

  getReturnService(): string;
  setReturnService(value: string): void;

  getReturnType(): number;
  setReturnType(value: number): void;

  getReturnSubType(): number;
  setReturnSubType(value: number): void;

  getIsTimeout(): boolean;
  setIsTimeout(value: boolean): void;

  getIsBack(): boolean;
  setIsBack(value: boolean): void;

  getIsExchange(): boolean;
  setIsExchange(value: boolean): void;

  getReason(): string;
  setReason(value: string): void;

  getPickupAt(): string;
  setPickupAt(value: string): void;

  getCloseAt(): string;
  setCloseAt(value: string): void;

  getPayAt(): string;
  setPayAt(value: string): void;

  getPayIp(): string;
  setPayIp(value: string): void;

  getCity(): string;
  setCity(value: string): void;

  getDevice(): string;
  setDevice(value: string): void;

  getRemark(): string;
  setRemark(value: string): void;

  getOther(): OrderOther | undefined;
  setOther(value?: OrderOther): void;
  hasOther(): boolean;
  clearOther(): void;

  getGoodsList(): Array<OrderGoods>;
  setGoodsList(value: Array<OrderGoods>): void;
  clearGoodsList(): void;
  addGoods(value?: OrderGoods, index?: number): OrderGoods;

  getActivityList(): Array<OrderActivity>;
  setActivityList(value: Array<OrderActivity>): void;
  clearActivityList(): void;
  addActivity(value?: OrderActivity, index?: number): OrderActivity;

  getLabelxMap(): jspb.Map<string, number>;
  clearLabelxMap(): void;

  getOperator(): string;
  setOperator(value: string): void;

  getCreateAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateAt(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasCreateAt(): boolean;
  clearCreateAt(): void;

  getUpdateAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateAt(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasUpdateAt(): boolean;
  clearUpdateAt(): void;

  getColsList(): Array<string>;
  setColsList(value: Array<string>): void;
  clearColsList(): void;
  addCols(value: string, index?: number): void;

  getConditionList(): Array<sql_pb.Condition>;
  setConditionList(value: Array<sql_pb.Condition>): void;
  clearConditionList(): void;
  addCondition(value?: sql_pb.Condition, index?: number): sql_pb.Condition;

  getSelf(): google_protobuf_struct_pb.Struct | undefined;
  setSelf(value?: google_protobuf_struct_pb.Struct): void;
  hasSelf(): boolean;
  clearSelf(): void;

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
    customerId: string,
    isCustomer: boolean,
    carId: string,
    couponId: string,
    salesId: string,
    promoteId: string,
    name: string,
    email: string,
    phone: string,
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
    returnAdapter: string,
    returnService: string,
    returnType: number,
    returnSubType: number,
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
  setId(value: number): void;

  getOrderId(): string;
  setOrderId(value: string): void;

  getStoreId(): string;
  setStoreId(value: string): void;

  getSalesId(): string;
  setSalesId(value: string): void;

  getActivityId(): string;
  setActivityId(value: string): void;

  getProductId(): string;
  setProductId(value: string): void;

  getSku(): string;
  setSku(value: string): void;

  getPhotoSrc(): string;
  setPhotoSrc(value: string): void;

  getName(): string;
  setName(value: string): void;

  getAmount(): number;
  setAmount(value: number): void;

  getPrice(): number;
  setPrice(value: number): void;

  getDiscount(): number;
  setDiscount(value: number): void;

  getItemxList(): Array<google_protobuf_struct_pb.Value>;
  setItemxList(value: Array<google_protobuf_struct_pb.Value>): void;
  clearItemxList(): void;
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
  setOrderId(value: string): void;

  getStoreId(): string;
  setStoreId(value: string): void;

  getActivityId(): string;
  setActivityId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getGiveaway(): number;
  setGiveaway(value: number): void;

  getAmount(): number;
  setAmount(value: number): void;

  getDiscount(): number;
  setDiscount(value: number): void;

  getReduce(): number;
  setReduce(value: number): void;

  getCoupon(): number;
  setCoupon(value: number): void;

  getPromote(): number;
  setPromote(value: number): void;

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
    promote: number,
  }
}

export class ContactInfo extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getPhone(): string;
  setPhone(value: string): void;

  getCellPhone(): string;
  setCellPhone(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  getCvs(): ContactInfo.CVS | undefined;
  setCvs(value?: ContactInfo.CVS): void;
  hasCvs(): boolean;
  clearCvs(): void;

  getAddress(): address_pb.Address | undefined;
  setAddress(value?: address_pb.Address): void;
  hasAddress(): boolean;
  clearAddress(): void;

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
    cellPhone: string,
    email: string,
    cvs?: ContactInfo.CVS.AsObject,
    address?: address_pb.Address.AsObject,
  }

  export class CVS extends jspb.Message {
    getCode(): string;
    setCode(value: string): void;

    getType(): string;
    setType(value: string): void;

    getName(): string;
    setName(value: string): void;

    getAddress(): string;
    setAddress(value: string): void;

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

}

export class OrderOther extends jspb.Message {
  getPaymentNo(): string;
  setPaymentNo(value: string): void;

  getBankCode(): string;
  setBankCode(value: string): void;

  getBankAccount(): string;
  setBankAccount(value: string): void;

  getCvsNo(): string;
  setCvsNo(value: string): void;

  getExpireDay(): number;
  setExpireDay(value: number): void;

  getLogisticsNo(): string;
  setLogisticsNo(value: string): void;

  getArrivalAt(): string;
  setArrivalAt(value: string): void;

  getCvsPaymentNo(): string;
  setCvsPaymentNo(value: string): void;

  getReturnNo(): string;
  setReturnNo(value: string): void;

  getReturnCode(): string;
  setReturnCode(value: string): void;

  getReutrnRemark(): string;
  setReutrnRemark(value: string): void;

  getSender(): ContactInfo | undefined;
  setSender(value?: ContactInfo): void;
  hasSender(): boolean;
  clearSender(): void;

  getReceiver(): ContactInfo | undefined;
  setReceiver(value?: ContactInfo): void;
  hasReceiver(): boolean;
  clearReceiver(): void;

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
    arrivalAt: string,
    cvsPaymentNo: string,
    returnNo: string,
    returnCode: string,
    reutrnRemark: string,
    sender?: ContactInfo.AsObject,
    receiver?: ContactInfo.AsObject,
  }
}

export class OrderBatch extends jspb.Message {
  getState(): number;
  setState(value: number): void;

  getPaymentState(): number;
  setPaymentState(value: number): void;

  getLogisticsState(): number;
  setLogisticsState(value: number): void;

  getTemperature(): string;
  setTemperature(value: string): void;

  getSpecification(): string;
  setSpecification(value: string): void;

  getPickupTime(): string;
  setPickupTime(value: string): void;

  getOrderList(): Array<Order>;
  setOrderList(value: Array<Order>): void;
  clearOrderList(): void;
  addOrder(value?: Order, index?: number): Order;

  getSelf(): google_protobuf_struct_pb.Struct | undefined;
  setSelf(value?: google_protobuf_struct_pb.Struct): void;
  hasSelf(): boolean;
  clearSelf(): void;

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
  setRedirect(value: string): void;

  getRtncode(): string;
  setRtncode(value: string): void;

  getRtnmsg(): string;
  setRtnmsg(value: string): void;

  getTradeno(): string;
  setTradeno(value: string): void;

  getTrandamt(): string;
  setTrandamt(value: string): void;

  getPaymenttype(): string;
  setPaymenttype(value: string): void;

  getTradedate(): string;
  setTradedate(value: string): void;

  getExpiredate(): string;
  setExpiredate(value: string): void;

  getBankcode(): string;
  setBankcode(value: string): void;

  getVaccount(): string;
  setVaccount(value: string): void;

  getPaymentno(): string;
  setPaymentno(value: string): void;

  getBarcode1(): string;
  setBarcode1(value: string): void;

  getBarcode2(): string;
  setBarcode2(value: string): void;

  getBarcode3(): string;
  setBarcode3(value: string): void;

  getSelf(): google_protobuf_struct_pb.Struct | undefined;
  setSelf(value?: google_protobuf_struct_pb.Struct): void;
  hasSelf(): boolean;
  clearSelf(): void;

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
  setRenderid(value: string): void;

  getRedirect(): string;
  setRedirect(value: string): void;

  getRtncode(): string;
  setRtncode(value: string): void;

  getRtnmsg(): string;
  setRtnmsg(value: string): void;

  getAllpaylogisticsid(): string;
  setAllpaylogisticsid(value: string): void;

  getLogisticstype(): string;
  setLogisticstype(value: string): void;

  getLogisticssubtype(): string;
  setLogisticssubtype(value: string): void;

  getGoodsamount(): string;
  setGoodsamount(value: string): void;

  getUpdatestatusdate(): string;
  setUpdatestatusdate(value: string): void;

  getSendername(): string;
  setSendername(value: string): void;

  getSenderphone(): string;
  setSenderphone(value: string): void;

  getSendercellphone(): string;
  setSendercellphone(value: string): void;

  getSenderzipcode(): string;
  setSenderzipcode(value: string): void;

  getSenderaddress(): string;
  setSenderaddress(value: string): void;

  getReceivername(): string;
  setReceivername(value: string): void;

  getReceiverphone(): string;
  setReceiverphone(value: string): void;

  getReceivercellphone(): string;
  setReceivercellphone(value: string): void;

  getReceiveremail(): string;
  setReceiveremail(value: string): void;

  getReceiverzipcode(): string;
  setReceiverzipcode(value: string): void;

  getReceiveraddress(): string;
  setReceiveraddress(value: string): void;

  getCvsstoreid(): string;
  setCvsstoreid(value: string): void;

  getCvsstorename(): string;
  setCvsstorename(value: string): void;

  getCvsaddress(): string;
  setCvsaddress(value: string): void;

  getCvstelephone(): string;
  setCvstelephone(value: string): void;

  getCvsoutside(): string;
  setCvsoutside(value: string): void;

  getCvspaymentno(): string;
  setCvspaymentno(value: string): void;

  getCvsvalidationno(): string;
  setCvsvalidationno(value: string): void;

  getStoretype(): string;
  setStoretype(value: string): void;

  getStatus(): string;
  setStatus(value: string): void;

  getTemperature(): string;
  setTemperature(value: string): void;

  getDistance(): string;
  setDistance(value: string): void;

  getSpecification(): string;
  setSpecification(value: string): void;

  getScheduledpickuptime(): string;
  setScheduledpickuptime(value: string): void;

  getScheduleddeliverytime(): string;
  setScheduleddeliverytime(value: string): void;

  getScheduleddeliverydate(): string;
  setScheduleddeliverydate(value: string): void;

  getBookingnode(): string;
  setBookingnode(value: string): void;

  getSelf(): google_protobuf_struct_pb.Struct | undefined;
  setSelf(value?: google_protobuf_struct_pb.Struct): void;
  hasSelf(): boolean;
  clearSelf(): void;

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

