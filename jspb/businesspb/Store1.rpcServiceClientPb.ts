/**
 * @fileoverview gRPC-Web generated client stub for ding4
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as pingpong_pb from './pingpong_pb';
import * as sql_pb from './sql_pb';
import * as template_pb from './template_pb';
import * as password_pb from './password_pb';
import * as label_pb from './label_pb';
import * as car_pb from './car_pb';
import * as manager_pb from './manager_pb';
import * as sales_pb from './sales_pb';
import * as customer_pb from './customer_pb';
import * as customer$level_pb from './customer-level_pb';
import * as product$shell_pb from './product-shell_pb';
import * as product$class_pb from './product-class_pb';
import * as activity$coupon_pb from './activity-coupon_pb';
import * as order_pb from './order_pb';
import * as remind_pb from './remind_pb';
import * as setting_pb from './setting_pb';
import * as adapter_pb from './adapter_pb';
import * as webpage_pb from './webpage_pb';
import * as website_pb from './website_pb';
import * as freeback_pb from './freeback_pb';
import * as message_pb from './message_pb';
import * as domain_pb from './domain_pb';
import * as store$dashboard_pb from './store-dashboard_pb';

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

  methodInfoFindAnnouncement = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  findAnnouncement(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/FindAnnouncement',
      request,
      metadata || {},
      this.methodInfoFindAnnouncement,
      callback);
  }

  methodInfoBrowseDashboard = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: store$dashboard_pb.StoreDashboard) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  browseDashboard(
    request: store$dashboard_pb.StoreDashboard,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/BrowseDashboard',
      request,
      metadata || {},
      this.methodInfoBrowseDashboard,
      callback);
  }

  methodInfoExistsManagerSub = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: manager_pb.ManagerSub) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  existsManagerSub(
    request: manager_pb.ManagerSub,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/ExistsManagerSub',
      request,
      metadata || {},
      this.methodInfoExistsManagerSub,
      callback);
  }

  methodInfoCreateManagerSub = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: manager_pb.ManagerSub) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  createManagerSub(
    request: manager_pb.ManagerSub,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/CreateManagerSub',
      request,
      metadata || {},
      this.methodInfoCreateManagerSub,
      callback);
  }

  methodInfoUpdateManagerSub = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: manager_pb.ManagerSub) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  updateManagerSub(
    request: manager_pb.ManagerSub,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/UpdateManagerSub',
      request,
      metadata || {},
      this.methodInfoUpdateManagerSub,
      callback);
  }

  methodInfoFindManagerSub = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  findManagerSub(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/FindManagerSub',
      request,
      metadata || {},
      this.methodInfoFindManagerSub,
      callback);
  }

  methodInfoRecordManagerSub = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: manager_pb.ManagerSub) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  recordManagerSub(
    request: manager_pb.ManagerSub,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/RecordManagerSub',
      request,
      metadata || {},
      this.methodInfoRecordManagerSub,
      callback);
  }

  methodInfoSignManagerSub = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: manager_pb.ManagerSub) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  signManagerSub(
    request: manager_pb.ManagerSub,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/SignManagerSub',
      request,
      metadata || {},
      this.methodInfoSignManagerSub,
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

  methodInfoCancelActivity = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: activity$coupon_pb.Activity) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  cancelActivity(
    request: activity$coupon_pb.Activity,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/CancelActivity',
      request,
      metadata || {},
      this.methodInfoCancelActivity,
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

  methodInfoCancelCoupon = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: activity$coupon_pb.Coupon) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  cancelCoupon(
    request: activity$coupon_pb.Coupon,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/CancelCoupon',
      request,
      metadata || {},
      this.methodInfoCancelCoupon,
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

  methodInfoExistsSales = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sales_pb.Sales) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  existsSales(
    request: sales_pb.Sales,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/ExistsSales',
      request,
      metadata || {},
      this.methodInfoExistsSales,
      callback);
  }

  methodInfoCreateSales = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sales_pb.Sales) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  createSales(
    request: sales_pb.Sales,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/CreateSales',
      request,
      metadata || {},
      this.methodInfoCreateSales,
      callback);
  }

  methodInfoUpdateSales = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sales_pb.Sales) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  updateSales(
    request: sales_pb.Sales,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/UpdateSales',
      request,
      metadata || {},
      this.methodInfoUpdateSales,
      callback);
  }

  methodInfoFindSales = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  findSales(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/FindSales',
      request,
      metadata || {},
      this.methodInfoFindSales,
      callback);
  }

  methodInfoExistsCustomer = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: customer_pb.Customer) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  existsCustomer(
    request: customer_pb.Customer,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/ExistsCustomer',
      request,
      metadata || {},
      this.methodInfoExistsCustomer,
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

  methodInfoFindCustomer = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  findCustomer(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/FindCustomer',
      request,
      metadata || {},
      this.methodInfoFindCustomer,
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

  methodInfoFindCansetAdditional = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  findCansetAdditional(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/FindCansetAdditional',
      request,
      metadata || {},
      this.methodInfoFindCansetAdditional,
      callback);
  }

  methodInfoFindCansetGiveaway = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  findCansetGiveaway(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/FindCansetGiveaway',
      request,
      metadata || {},
      this.methodInfoFindCansetGiveaway,
      callback);
  }

  methodInfoDisplayProductShell = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: product$shell_pb.ProductShell) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  displayProductShell(
    request: product$shell_pb.ProductShell,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/DisplayProductShell',
      request,
      metadata || {},
      this.methodInfoDisplayProductShell,
      callback);
  }

  methodInfoCreateProductShell = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: product$shell_pb.ProductShell) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  createProductShell(
    request: product$shell_pb.ProductShell,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/CreateProductShell',
      request,
      metadata || {},
      this.methodInfoCreateProductShell,
      callback);
  }

  methodInfoUpdateProductShell = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: product$shell_pb.ProductShell) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  updateProductShell(
    request: product$shell_pb.ProductShell,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/UpdateProductShell',
      request,
      metadata || {},
      this.methodInfoUpdateProductShell,
      callback);
  }

  methodInfoDeleteProductShell = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: product$shell_pb.ProductShell) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  deleteProductShell(
    request: product$shell_pb.ProductShell,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/DeleteProductShell',
      request,
      metadata || {},
      this.methodInfoDeleteProductShell,
      callback);
  }

  methodInfoFindProductShell = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  findProductShell(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/FindProductShell',
      request,
      metadata || {},
      this.methodInfoFindProductShell,
      callback);
  }

  methodInfoQuickProductShell = new grpcWeb.AbstractClientBase.MethodInfo(
    product$shell_pb.ProductShell,
    (request: product$shell_pb.ProductShell) => {
      return request.serializeBinary();
    },
    product$shell_pb.ProductShell.deserializeBinary
  );

  quickProductShell(
    request: product$shell_pb.ProductShell,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: product$shell_pb.ProductShell) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/QuickProductShell',
      request,
      metadata || {},
      this.methodInfoQuickProductShell,
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

  methodInfoStateOrder = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: order_pb.OrderBatch) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  stateOrder(
    request: order_pb.OrderBatch,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/StateOrder',
      request,
      metadata || {},
      this.methodInfoStateOrder,
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

  methodInfoDetailOrder = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: order_pb.Order) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  detailOrder(
    request: order_pb.Order,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/DetailOrder',
      request,
      metadata || {},
      this.methodInfoDetailOrder,
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

  methodInfoCreateAdapter = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: adapter_pb.Adapter) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  createAdapter(
    request: adapter_pb.Adapter,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/CreateAdapter',
      request,
      metadata || {},
      this.methodInfoCreateAdapter,
      callback);
  }

  methodInfoUpdateAdapter = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: adapter_pb.Adapter) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  updateAdapter(
    request: adapter_pb.Adapter,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/UpdateAdapter',
      request,
      metadata || {},
      this.methodInfoUpdateAdapter,
      callback);
  }

  methodInfoDeleteAdapter = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: adapter_pb.Adapter) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  deleteAdapter(
    request: adapter_pb.Adapter,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/DeleteAdapter',
      request,
      metadata || {},
      this.methodInfoDeleteAdapter,
      callback);
  }

  methodInfoFindAdapter = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  findAdapter(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/FindAdapter',
      request,
      metadata || {},
      this.methodInfoFindAdapter,
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

  methodInfoFindNav = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  findNav(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/FindNav',
      request,
      metadata || {},
      this.methodInfoFindNav,
      callback);
  }

  methodInfoUpdateNav = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: website_pb.Website) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  updateNav(
    request: website_pb.Website,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/UpdateNav',
      request,
      metadata || {},
      this.methodInfoUpdateNav,
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

  methodInfoCreateFreeback = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: freeback_pb.Freeback) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  createFreeback(
    request: freeback_pb.Freeback,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/CreateFreeback',
      request,
      metadata || {},
      this.methodInfoCreateFreeback,
      callback);
  }

  methodInfoReadFreeback = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: freeback_pb.Freeback) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  readFreeback(
    request: freeback_pb.Freeback,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/ReadFreeback',
      request,
      metadata || {},
      this.methodInfoReadFreeback,
      callback);
  }

  methodInfoAppendFreeback = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: freeback_pb.Dialogue) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  appendFreeback(
    request: freeback_pb.Dialogue,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/AppendFreeback',
      request,
      metadata || {},
      this.methodInfoAppendFreeback,
      callback);
  }

  methodInfoFindFreeback = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  findFreeback(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/FindFreeback',
      request,
      metadata || {},
      this.methodInfoFindFreeback,
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

  methodInfoUpgradeDomain = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: domain_pb.Domain) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  upgradeDomain(
    request: domain_pb.Domain,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/UpgradeDomain',
      request,
      metadata || {},
      this.methodInfoUpgradeDomain,
      callback);
  }

  methodInfoDeleteDomain = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: domain_pb.Domain) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  deleteDomain(
    request: domain_pb.Domain,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/DeleteDomain',
      request,
      metadata || {},
      this.methodInfoDeleteDomain,
      callback);
  }

  methodInfoFindDomain = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  findDomain(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/FindDomain',
      request,
      metadata || {},
      this.methodInfoFindDomain,
      callback);
  }

  methodInfoCreateTemplate = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: template_pb.Template) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  createTemplate(
    request: template_pb.Template,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/CreateTemplate',
      request,
      metadata || {},
      this.methodInfoCreateTemplate,
      callback);
  }

  methodInfoUpdateTemplate = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: template_pb.Template) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  updateTemplate(
    request: template_pb.Template,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/UpdateTemplate',
      request,
      metadata || {},
      this.methodInfoUpdateTemplate,
      callback);
  }

  methodInfoDeleteTemplate = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: template_pb.Template) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  deleteTemplate(
    request: template_pb.Template,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.Store1RPC/DeleteTemplate',
      request,
      metadata || {},
      this.methodInfoDeleteTemplate,
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

}

