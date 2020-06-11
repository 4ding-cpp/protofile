/**
 * @fileoverview gRPC-Web generated client stub for ding4
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as pingpong_pb from './pingpong_pb';
import * as sql_pb from './sql_pb';
import * as password_pb from './password_pb';
import * as label_pb from './label_pb';
import * as car_pb from './car_pb';
import * as manager_pb from './manager_pb';
import * as customer_pb from './customer_pb';
import * as customer$level_pb from './customer-level_pb';
import * as product_pb from './product_pb';
import * as product$class_pb from './product-class_pb';
import * as activity$coupon_pb from './activity-coupon_pb';
import * as order_pb from './order_pb';
import * as remind_pb from './remind_pb';
import * as setting_pb from './setting_pb';
import * as webpage_pb from './webpage_pb';
import * as website_pb from './website_pb';
import * as message_pb from './message_pb';

export class Store1RPCClient {
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

  methodInfoPing = new grpcWeb.AbstractClientBase.MethodInfo(
    pingpong_pb.PingPong,
    (request: pingpong_pb.PingPong) => {
      return request.serializeBinary();
    },
    pingpong_pb.PingPong.deserializeBinary
  );

  ping(
    request: pingpong_pb.PingPong,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: pingpong_pb.PingPong) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/Ping',
      request,
      metadata || {},
      this.methodInfoPing,
      callback);
  }

  methodInfoWhoAmI = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  whoAmI(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/WhoAmI',
      request,
      metadata || {},
      this.methodInfoWhoAmI,
      callback);
  }

  methodInfoChangePassword = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: password_pb.Password) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  changePassword(
    request: password_pb.Password,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/ChangePassword',
      request,
      metadata || {},
      this.methodInfoChangePassword,
      callback);
  }

  methodInfoChangeInfo = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: manager_pb.Manager) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  changeInfo(
    request: manager_pb.Manager,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/ChangeInfo',
      request,
      metadata || {},
      this.methodInfoChangeInfo,
      callback);
  }

  methodInfoChangeWhitelist = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: manager_pb.Manager) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  changeWhitelist(
    request: manager_pb.Manager,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/ChangeWhitelist',
      request,
      metadata || {},
      this.methodInfoChangeWhitelist,
      callback);
  }

  methodInfoFindPermission = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  findPermission(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/FindPermission',
      request,
      metadata || {},
      this.methodInfoFindPermission,
      callback);
  }

  methodInfoFindRecord = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  findRecord(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/FindRecord',
      request,
      metadata || {},
      this.methodInfoFindRecord,
      callback);
  }

  methodInfoFindSign = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  findSign(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/FindSign',
      request,
      metadata || {},
      this.methodInfoFindSign,
      callback);
  }

  methodInfoCreateManager = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: manager_pb.Manager) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  createManager(
    request: manager_pb.Manager,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/CreateManager',
      request,
      metadata || {},
      this.methodInfoCreateManager,
      callback);
  }

  methodInfoUpdateManager = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: manager_pb.Manager) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  updateManager(
    request: manager_pb.Manager,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/UpdateManager',
      request,
      metadata || {},
      this.methodInfoUpdateManager,
      callback);
  }

  methodInfoFindManager = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  findManager(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/FindManager',
      request,
      metadata || {},
      this.methodInfoFindManager,
      callback);
  }

  methodInfoRecordManager = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: manager_pb.Manager) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  recordManager(
    request: manager_pb.Manager,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/RecordManager',
      request,
      metadata || {},
      this.methodInfoRecordManager,
      callback);
  }

  methodInfoSignManager = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: manager_pb.Manager) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  signManager(
    request: manager_pb.Manager,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/SignManager',
      request,
      metadata || {},
      this.methodInfoSignManager,
      callback);
  }

  methodInfoCreateLabel = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: label_pb.Label) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  createLabel(
    request: label_pb.Label,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/CreateLabel',
      request,
      metadata || {},
      this.methodInfoCreateLabel,
      callback);
  }

  methodInfoUpdateLabel = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: label_pb.Label) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  updateLabel(
    request: label_pb.Label,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/UpdateLabel',
      request,
      metadata || {},
      this.methodInfoUpdateLabel,
      callback);
  }

  methodInfoAppendLabel = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: label_pb.Label) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  appendLabel(
    request: label_pb.Label,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/AppendLabel',
      request,
      metadata || {},
      this.methodInfoAppendLabel,
      callback);
  }

  methodInfoSubtractLabel = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: label_pb.Label) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  subtractLabel(
    request: label_pb.Label,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/SubtractLabel',
      request,
      metadata || {},
      this.methodInfoSubtractLabel,
      callback);
  }

  methodInfoFindLabel = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  findLabel(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/FindLabel',
      request,
      metadata || {},
      this.methodInfoFindLabel,
      callback);
  }

  methodInfoCreateActivity = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: activity$coupon_pb.Activity) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  createActivity(
    request: activity$coupon_pb.Activity,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/CreateActivity',
      request,
      metadata || {},
      this.methodInfoCreateActivity,
      callback);
  }

  methodInfoUpdateActivity = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: activity$coupon_pb.Activity) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  updateActivity(
    request: activity$coupon_pb.Activity,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/UpdateActivity',
      request,
      metadata || {},
      this.methodInfoUpdateActivity,
      callback);
  }

  methodInfoFindActivity = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  findActivity(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/FindActivity',
      request,
      metadata || {},
      this.methodInfoFindActivity,
      callback);
  }

  methodInfoCreateCoupon = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: activity$coupon_pb.Coupon) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  createCoupon(
    request: activity$coupon_pb.Coupon,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/CreateCoupon',
      request,
      metadata || {},
      this.methodInfoCreateCoupon,
      callback);
  }

  methodInfoDistributeCoupon = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: activity$coupon_pb.Coupon) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  distributeCoupon(
    request: activity$coupon_pb.Coupon,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/DistributeCoupon',
      request,
      metadata || {},
      this.methodInfoDistributeCoupon,
      callback);
  }

  methodInfoUpdateCoupon = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: activity$coupon_pb.Coupon) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  updateCoupon(
    request: activity$coupon_pb.Coupon,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/UpdateCoupon',
      request,
      metadata || {},
      this.methodInfoUpdateCoupon,
      callback);
  }

  methodInfoExchangeCoupon = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: activity$coupon_pb.Coupon) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  exchangeCoupon(
    request: activity$coupon_pb.Coupon,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/ExchangeCoupon',
      request,
      metadata || {},
      this.methodInfoExchangeCoupon,
      callback);
  }

  methodInfoFindCoupon = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  findCoupon(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/FindCoupon',
      request,
      metadata || {},
      this.methodInfoFindCoupon,
      callback);
  }

  methodInfoCreateCustomer = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: customer_pb.Customer) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  createCustomer(
    request: customer_pb.Customer,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/CreateCustomer',
      request,
      metadata || {},
      this.methodInfoCreateCustomer,
      callback);
  }

  methodInfoUpdateCustomer = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: customer_pb.Customer) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  updateCustomer(
    request: customer_pb.Customer,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/UpdateCustomer',
      request,
      metadata || {},
      this.methodInfoUpdateCustomer,
      callback);
  }

  methodInfoLinkCustomer = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: customer_pb.Customer) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  linkCustomer(
    request: customer_pb.Customer,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/LinkCustomer',
      request,
      metadata || {},
      this.methodInfoLinkCustomer,
      callback);
  }

  methodInfoFindCustomerLinked = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  findCustomerLinked(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/FindCustomerLinked',
      request,
      metadata || {},
      this.methodInfoFindCustomerLinked,
      callback);
  }

  methodInfoCreateCustomerLevel = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: customer$level_pb.CustomerLevel) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  createCustomerLevel(
    request: customer$level_pb.CustomerLevel,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/CreateCustomerLevel',
      request,
      metadata || {},
      this.methodInfoCreateCustomerLevel,
      callback);
  }

  methodInfoUpdateCustomerLevel = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: customer$level_pb.CustomerLevel) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  updateCustomerLevel(
    request: customer$level_pb.CustomerLevel,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/UpdateCustomerLevel',
      request,
      metadata || {},
      this.methodInfoUpdateCustomerLevel,
      callback);
  }

  methodInfoAddCustomerToLevel = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: customer$level_pb.CustomerLevel) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  addCustomerToLevel(
    request: customer$level_pb.CustomerLevel,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/AddCustomerToLevel',
      request,
      metadata || {},
      this.methodInfoAddCustomerToLevel,
      callback);
  }

  methodInfoDelCustomerFromLevel = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: customer$level_pb.CustomerLevel) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  delCustomerFromLevel(
    request: customer$level_pb.CustomerLevel,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/DelCustomerFromLevel',
      request,
      metadata || {},
      this.methodInfoDelCustomerFromLevel,
      callback);
  }

  methodInfoFindCustomerLevel = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  findCustomerLevel(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/FindCustomerLevel',
      request,
      metadata || {},
      this.methodInfoFindCustomerLevel,
      callback);
  }

  methodInfoFindProduct = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  findProduct(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/FindProduct',
      request,
      metadata || {},
      this.methodInfoFindProduct,
      callback);
  }

  methodInfoFindProductUnlink = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  findProductUnlink(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/FindProductUnlink',
      request,
      metadata || {},
      this.methodInfoFindProductUnlink,
      callback);
  }

  methodInfoFindProductLinked = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  findProductLinked(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/FindProductLinked',
      request,
      metadata || {},
      this.methodInfoFindProductLinked,
      callback);
  }

  methodInfoLinkProduct = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: product_pb.Product) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  linkProduct(
    request: product_pb.Product,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/LinkProduct',
      request,
      metadata || {},
      this.methodInfoLinkProduct,
      callback);
  }

  methodInfoLinkProductBatch = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: product_pb.ProductBatch) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  linkProductBatch(
    request: product_pb.ProductBatch,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/LinkProductBatch',
      request,
      metadata || {},
      this.methodInfoLinkProductBatch,
      callback);
  }

  methodInfoFindProductByClass = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: product$class_pb.ProductClass) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  findProductByClass(
    request: product$class_pb.ProductClass,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/FindProductByClass',
      request,
      metadata || {},
      this.methodInfoFindProductByClass,
      callback);
  }

  methodInfoFindTemplate = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  findTemplate(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/FindTemplate',
      request,
      metadata || {},
      this.methodInfoFindTemplate,
      callback);
  }

  methodInfoCreateProductClass = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: product$class_pb.ProductClass) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  createProductClass(
    request: product$class_pb.ProductClass,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/CreateProductClass',
      request,
      metadata || {},
      this.methodInfoCreateProductClass,
      callback);
  }

  methodInfoUpdateProductClass = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: product$class_pb.ProductClass) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  updateProductClass(
    request: product$class_pb.ProductClass,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/UpdateProductClass',
      request,
      metadata || {},
      this.methodInfoUpdateProductClass,
      callback);
  }

  methodInfoFindProductClass = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  findProductClass(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/FindProductClass',
      request,
      metadata || {},
      this.methodInfoFindProductClass,
      callback);
  }

  methodInfoAddProductToClass = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: product$class_pb.ProductClass) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  addProductToClass(
    request: product$class_pb.ProductClass,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/AddProductToClass',
      request,
      metadata || {},
      this.methodInfoAddProductToClass,
      callback);
  }

  methodInfoDelProductFromClass = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: product$class_pb.ProductClass) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  delProductFromClass(
    request: product$class_pb.ProductClass,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/DelProductFromClass',
      request,
      metadata || {},
      this.methodInfoDelProductFromClass,
      callback);
  }

  methodInfoCompleteCar = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: car_pb.Car) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  completeCar(
    request: car_pb.Car,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/CompleteCar',
      request,
      metadata || {},
      this.methodInfoCompleteCar,
      callback);
  }

  methodInfoDeleteCar = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: car_pb.Car) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  deleteCar(
    request: car_pb.Car,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/DeleteCar',
      request,
      metadata || {},
      this.methodInfoDeleteCar,
      callback);
  }

  methodInfoFindCar = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  findCar(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/FindCar',
      request,
      metadata || {},
      this.methodInfoFindCar,
      callback);
  }

  methodInfoCreateOrder = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: order_pb.Order) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  createOrder(
    request: order_pb.Order,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/CreateOrder',
      request,
      metadata || {},
      this.methodInfoCreateOrder,
      callback);
  }

  methodInfoPaymentOrder = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: order_pb.Order) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  paymentOrder(
    request: order_pb.Order,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/PaymentOrder',
      request,
      metadata || {},
      this.methodInfoPaymentOrder,
      callback);
  }

  methodInfoCancelOrder = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: order_pb.Order) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  cancelOrder(
    request: order_pb.Order,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/CancelOrder',
      request,
      metadata || {},
      this.methodInfoCancelOrder,
      callback);
  }

  methodInfoFindOrder = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  findOrder(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/FindOrder',
      request,
      metadata || {},
      this.methodInfoFindOrder,
      callback);
  }

  methodInfoChooseCVSStore = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: order_pb.Logistics) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  chooseCVSStore(
    request: order_pb.Logistics,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/ChooseCVSStore',
      request,
      metadata || {},
      this.methodInfoChooseCVSStore,
      callback);
  }

  methodInfoGetCVSStore = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: order_pb.Logistics) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  getCVSStore(
    request: order_pb.Logistics,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/GetCVSStore',
      request,
      metadata || {},
      this.methodInfoGetCVSStore,
      callback);
  }

  methodInfoUpdateRemind = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: remind_pb.Remind) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  updateRemind(
    request: remind_pb.Remind,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/UpdateRemind',
      request,
      metadata || {},
      this.methodInfoUpdateRemind,
      callback);
  }

  methodInfoFindRemind = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  findRemind(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/FindRemind',
      request,
      metadata || {},
      this.methodInfoFindRemind,
      callback);
  }

  methodInfoCreateSetting = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: setting_pb.Setting) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  createSetting(
    request: setting_pb.Setting,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/CreateSetting',
      request,
      metadata || {},
      this.methodInfoCreateSetting,
      callback);
  }

  methodInfoUpdateSetting = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: setting_pb.Setting) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  updateSetting(
    request: setting_pb.Setting,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/UpdateSetting',
      request,
      metadata || {},
      this.methodInfoUpdateSetting,
      callback);
  }

  methodInfoDeleteSetting = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: setting_pb.Setting) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  deleteSetting(
    request: setting_pb.Setting,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/DeleteSetting',
      request,
      metadata || {},
      this.methodInfoDeleteSetting,
      callback);
  }

  methodInfoFindSetting = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  findSetting(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/FindSetting',
      request,
      metadata || {},
      this.methodInfoFindSetting,
      callback);
  }

  methodInfoCreateWebPage = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: webpage_pb.WebPage) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  createWebPage(
    request: webpage_pb.WebPage,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/CreateWebPage',
      request,
      metadata || {},
      this.methodInfoCreateWebPage,
      callback);
  }

  methodInfoUpdateWebPage = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: webpage_pb.WebPage) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  updateWebPage(
    request: webpage_pb.WebPage,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/UpdateWebPage',
      request,
      metadata || {},
      this.methodInfoUpdateWebPage,
      callback);
  }

  methodInfoDeleteWebPage = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: webpage_pb.WebPage) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  deleteWebPage(
    request: webpage_pb.WebPage,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/DeleteWebPage',
      request,
      metadata || {},
      this.methodInfoDeleteWebPage,
      callback);
  }

  methodInfoFindWebPage = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  findWebPage(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/FindWebPage',
      request,
      metadata || {},
      this.methodInfoFindWebPage,
      callback);
  }

  methodInfoFindWebsite = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  findWebsite(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/FindWebsite',
      request,
      metadata || {},
      this.methodInfoFindWebsite,
      callback);
  }

  methodInfoUpdateWebsite = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: website_pb.Website) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  updateWebsite(
    request: website_pb.Website,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/UpdateWebsite',
      request,
      metadata || {},
      this.methodInfoUpdateWebsite,
      callback);
  }

  methodInfoFindMenu = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  findMenu(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/FindMenu',
      request,
      metadata || {},
      this.methodInfoFindMenu,
      callback);
  }

  methodInfoUpdateMenu = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: website_pb.Website) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  updateMenu(
    request: website_pb.Website,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/UpdateMenu',
      request,
      metadata || {},
      this.methodInfoUpdateMenu,
      callback);
  }

  methodInfoFindFooter = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  findFooter(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/FindFooter',
      request,
      metadata || {},
      this.methodInfoFindFooter,
      callback);
  }

  methodInfoUpdateFooter = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: website_pb.Website) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  updateFooter(
    request: website_pb.Website,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/UpdateFooter',
      request,
      metadata || {},
      this.methodInfoUpdateFooter,
      callback);
  }

  methodInfoFindLayout = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  findLayout(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/FindLayout',
      request,
      metadata || {},
      this.methodInfoFindLayout,
      callback);
  }

  methodInfoUpdateLayout = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: website_pb.Website) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  updateLayout(
    request: website_pb.Website,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/UpdateLayout',
      request,
      metadata || {},
      this.methodInfoUpdateLayout,
      callback);
  }

  methodInfoSMS = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: message_pb.Message) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  sMS(
    request: message_pb.Message,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/SMS',
      request,
      metadata || {},
      this.methodInfoSMS,
      callback);
  }

  methodInfoEDM = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: message_pb.Message) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  eDM(
    request: message_pb.Message,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/EDM',
      request,
      metadata || {},
      this.methodInfoEDM,
      callback);
  }

  methodInfoFindMessage = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  findMessage(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/FindMessage',
      request,
      metadata || {},
      this.methodInfoFindMessage,
      callback);
  }

}

