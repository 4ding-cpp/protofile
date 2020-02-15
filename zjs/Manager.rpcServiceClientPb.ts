/**
 * @fileoverview gRPC-Web generated client stub for ding4
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as sql_pb from './sql_pb';
import * as order_pb from './order_pb';
import * as manager_pb from './manager_pb';
import * as customer$d_pb from './customer-d_pb';
import * as product$d_pb from './product-d_pb';
import * as activity_pb from './activity_pb';

export class ManagerRPCClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: string; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'binary';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoChangePassword = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.DBMessage,
    (request: manager_pb.Manager) => {
      return request.serializeBinary();
    },
    sql_pb.DBMessage.deserializeBinary
  );

  changePassword(
    request: manager_pb.Manager,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.DBMessage) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.ManagerRPC/ChangePassword',
      request,
      metadata || {},
      this.methodInfoChangePassword,
      callback);
  }

  methodInfoChangeInfo = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.DBMessage,
    (request: manager_pb.Manager) => {
      return request.serializeBinary();
    },
    sql_pb.DBMessage.deserializeBinary
  );

  changeInfo(
    request: manager_pb.Manager,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.DBMessage) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.ManagerRPC/ChangeInfo',
      request,
      metadata || {},
      this.methodInfoChangeInfo,
      callback);
  }

  methodInfoChangeWhitelist = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.DBMessage,
    (request: manager_pb.Manager) => {
      return request.serializeBinary();
    },
    sql_pb.DBMessage.deserializeBinary
  );

  changeWhitelist(
    request: manager_pb.Manager,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.DBMessage) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.ManagerRPC/ChangeWhitelist',
      request,
      metadata || {},
      this.methodInfoChangeWhitelist,
      callback);
  }

  methodInfoCreateCustomerD = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.DBMessage,
    (request: customer$d_pb.CustomerD) => {
      return request.serializeBinary();
    },
    sql_pb.DBMessage.deserializeBinary
  );

  createCustomerD(
    request: customer$d_pb.CustomerD,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.DBMessage) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.ManagerRPC/CreateCustomerD',
      request,
      metadata || {},
      this.methodInfoCreateCustomerD,
      callback);
  }

  methodInfoUpdateCustomerD = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.DBMessage,
    (request: customer$d_pb.CustomerD) => {
      return request.serializeBinary();
    },
    sql_pb.DBMessage.deserializeBinary
  );

  updateCustomerD(
    request: customer$d_pb.CustomerD,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.DBMessage) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.ManagerRPC/UpdateCustomerD',
      request,
      metadata || {},
      this.methodInfoUpdateCustomerD,
      callback);
  }

  methodInfoFindCustomerD = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Result,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Result.deserializeBinary
  );

  findCustomerD(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Result) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.ManagerRPC/FindCustomerD',
      request,
      metadata || {},
      this.methodInfoFindCustomerD,
      callback);
  }

  methodInfoCreateCustomerLevel = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.DBMessage,
    (request: customer$d_pb.CustomerLevel) => {
      return request.serializeBinary();
    },
    sql_pb.DBMessage.deserializeBinary
  );

  createCustomerLevel(
    request: customer$d_pb.CustomerLevel,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.DBMessage) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.ManagerRPC/CreateCustomerLevel',
      request,
      metadata || {},
      this.methodInfoCreateCustomerLevel,
      callback);
  }

  methodInfoUpdateCustomerLevel = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.DBMessage,
    (request: customer$d_pb.CustomerLevel) => {
      return request.serializeBinary();
    },
    sql_pb.DBMessage.deserializeBinary
  );

  updateCustomerLevel(
    request: customer$d_pb.CustomerLevel,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.DBMessage) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.ManagerRPC/UpdateCustomerLevel',
      request,
      metadata || {},
      this.methodInfoUpdateCustomerLevel,
      callback);
  }

  methodInfoFindCustomerLevel = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Result,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Result.deserializeBinary
  );

  findCustomerLevel(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Result) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.ManagerRPC/FindCustomerLevel',
      request,
      metadata || {},
      this.methodInfoFindCustomerLevel,
      callback);
  }

  methodInfoCreateProductD = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.DBMessage,
    (request: product$d_pb.ProductD) => {
      return request.serializeBinary();
    },
    sql_pb.DBMessage.deserializeBinary
  );

  createProductD(
    request: product$d_pb.ProductD,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.DBMessage) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.ManagerRPC/CreateProductD',
      request,
      metadata || {},
      this.methodInfoCreateProductD,
      callback);
  }

  methodInfoUpdateProductD = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.DBMessage,
    (request: product$d_pb.ProductD) => {
      return request.serializeBinary();
    },
    sql_pb.DBMessage.deserializeBinary
  );

  updateProductD(
    request: product$d_pb.ProductD,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.DBMessage) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.ManagerRPC/UpdateProductD',
      request,
      metadata || {},
      this.methodInfoUpdateProductD,
      callback);
  }

  methodInfoGetProductG = new grpcWeb.AbstractClientBase.MethodInfo(
    product$d_pb.ProductG,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    product$d_pb.ProductG.deserializeBinary
  );

  getProductG(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: product$d_pb.ProductG) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.ManagerRPC/GetProductG',
      request,
      metadata || {},
      this.methodInfoGetProductG,
      callback);
  }

  methodInfoFindProductF = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Result,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Result.deserializeBinary
  );

  findProductF(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Result) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.ManagerRPC/FindProductF',
      request,
      metadata || {},
      this.methodInfoFindProductF,
      callback);
  }

  methodInfoCreateProductClass = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.DBMessage,
    (request: product$d_pb.ProductClass) => {
      return request.serializeBinary();
    },
    sql_pb.DBMessage.deserializeBinary
  );

  createProductClass(
    request: product$d_pb.ProductClass,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.DBMessage) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.ManagerRPC/CreateProductClass',
      request,
      metadata || {},
      this.methodInfoCreateProductClass,
      callback);
  }

  methodInfoUpdateProductClass = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.DBMessage,
    (request: product$d_pb.ProductClass) => {
      return request.serializeBinary();
    },
    sql_pb.DBMessage.deserializeBinary
  );

  updateProductClass(
    request: product$d_pb.ProductClass,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.DBMessage) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.ManagerRPC/UpdateProductClass',
      request,
      metadata || {},
      this.methodInfoUpdateProductClass,
      callback);
  }

  methodInfoFindProductClass = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Result,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Result.deserializeBinary
  );

  findProductClass(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Result) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.ManagerRPC/FindProductClass',
      request,
      metadata || {},
      this.methodInfoFindProductClass,
      callback);
  }

  methodInfoFindProductStack = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Result,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Result.deserializeBinary
  );

  findProductStack(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Result) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.ManagerRPC/FindProductStack',
      request,
      metadata || {},
      this.methodInfoFindProductStack,
      callback);
  }

  methodInfoFindSpecStack = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Result,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Result.deserializeBinary
  );

  findSpecStack(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Result) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.ManagerRPC/FindSpecStack',
      request,
      metadata || {},
      this.methodInfoFindSpecStack,
      callback);
  }

}

export class HolderClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: string; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'binary';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoCreateActivity = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.DBMessage,
    (request: activity_pb.Activity) => {
      return request.serializeBinary();
    },
    sql_pb.DBMessage.deserializeBinary
  );

  createActivity(
    request: activity_pb.Activity,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.DBMessage) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Holder/CreateActivity',
      request,
      metadata || {},
      this.methodInfoCreateActivity,
      callback);
  }

  methodInfoFindActivity = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Result,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Result.deserializeBinary
  );

  findActivity(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Result) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Holder/FindActivity',
      request,
      metadata || {},
      this.methodInfoFindActivity,
      callback);
  }

  methodInfoCreateDiscount = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.DBMessage,
    (request: activity_pb.Discount) => {
      return request.serializeBinary();
    },
    sql_pb.DBMessage.deserializeBinary
  );

  createDiscount(
    request: activity_pb.Discount,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.DBMessage) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Holder/CreateDiscount',
      request,
      metadata || {},
      this.methodInfoCreateDiscount,
      callback);
  }

  methodInfoFindDiscount = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Result,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Result.deserializeBinary
  );

  findDiscount(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Result) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Holder/FindDiscount',
      request,
      metadata || {},
      this.methodInfoFindDiscount,
      callback);
  }

  methodInfoCreateOrder = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.DBMessage,
    (request: order_pb.OrderNew) => {
      return request.serializeBinary();
    },
    sql_pb.DBMessage.deserializeBinary
  );

  createOrder(
    request: order_pb.OrderNew,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.DBMessage) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Holder/CreateOrder',
      request,
      metadata || {},
      this.methodInfoCreateOrder,
      callback);
  }

  methodInfoUpdateOrder = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.DBMessage,
    (request: order_pb.Order) => {
      return request.serializeBinary();
    },
    sql_pb.DBMessage.deserializeBinary
  );

  updateOrder(
    request: order_pb.Order,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.DBMessage) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Holder/UpdateOrder',
      request,
      metadata || {},
      this.methodInfoUpdateOrder,
      callback);
  }

  methodInfoFindOrder = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Result,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Result.deserializeBinary
  );

  findOrder(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Result) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Holder/FindOrder',
      request,
      metadata || {},
      this.methodInfoFindOrder,
      callback);
  }

}

