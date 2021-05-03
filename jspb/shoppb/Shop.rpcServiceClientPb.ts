/**
 * @fileoverview gRPC-Web generated client stub for ding4
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as password_pb from './password_pb';
import * as sql_pb from './sql_pb';
import * as customer_pb from './customer_pb';
import * as product$goods_pb from './product-goods_pb';
import * as car_pb from './car_pb';
import * as activity$promote$coupon_pb from './activity-promote-coupon_pb';
import * as order_pb from './order_pb';
import * as freeback_pb from './freeback_pb';
import * as browse_pb from './browse_pb';

export class ShopRPCClient {
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

  methodInfoSignIn = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: customer_pb.Customer) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  signIn(
    request: customer_pb.Customer,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.ShopRPC/SignIn',
      request,
      metadata || {},
      this.methodInfoSignIn,
      callback);
  }

  methodInfoSignUp = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: customer_pb.Customer) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  signUp(
    request: customer_pb.Customer,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.ShopRPC/SignUp',
      request,
      metadata || {},
      this.methodInfoSignUp,
      callback);
  }

  methodInfoSignFb = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: customer_pb.Customer) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  signFb(
    request: customer_pb.Customer,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.ShopRPC/SignFb',
      request,
      metadata || {},
      this.methodInfoSignFb,
      callback);
  }

  methodInfoSignOut = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: customer_pb.Customer) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  signOut(
    request: customer_pb.Customer,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.ShopRPC/SignOut',
      request,
      metadata || {},
      this.methodInfoSignOut,
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
        '/ding4.ShopRPC/WhoAmI',
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
        '/ding4.ShopRPC/ChangePassword',
      request,
      metadata || {},
      this.methodInfoChangePassword,
      callback);
  }

  methodInfoChangeInfo = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: customer_pb.Customer) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  changeInfo(
    request: customer_pb.Customer,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.ShopRPC/ChangeInfo',
      request,
      metadata || {},
      this.methodInfoChangeInfo,
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
        '/ding4.ShopRPC/FindSign',
      request,
      metadata || {},
      this.methodInfoFindSign,
      callback);
  }

  methodInfoUploadBrowse = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: browse_pb.BrowseRecord) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  uploadBrowse(
    request: browse_pb.BrowseRecord,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.ShopRPC/UploadBrowse',
      request,
      metadata || {},
      this.methodInfoUploadBrowse,
      callback);
  }

  methodInfoAddProductFavorite = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: product$goods_pb.ProductGoods) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  addProductFavorite(
    request: product$goods_pb.ProductGoods,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.ShopRPC/AddProductFavorite',
      request,
      metadata || {},
      this.methodInfoAddProductFavorite,
      callback);
  }

  methodInfoDelProductFavorite = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: product$goods_pb.ProductGoods) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  delProductFavorite(
    request: product$goods_pb.ProductGoods,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.ShopRPC/DelProductFavorite',
      request,
      metadata || {},
      this.methodInfoDelProductFavorite,
      callback);
  }

  methodInfoFindFavorite = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  findFavorite(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.ShopRPC/FindFavorite',
      request,
      metadata || {},
      this.methodInfoFindFavorite,
      callback);
  }

  methodInfoFindLevel = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  findLevel(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.ShopRPC/FindLevel',
      request,
      metadata || {},
      this.methodInfoFindLevel,
      callback);
  }

  methodInfoExchangeCoupon = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: activity$promote$coupon_pb.Coupon) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  exchangeCoupon(
    request: activity$promote$coupon_pb.Coupon,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.ShopRPC/ExchangeCoupon',
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
        '/ding4.ShopRPC/FindCoupon',
      request,
      metadata || {},
      this.methodInfoFindCoupon,
      callback);
  }

  methodInfoLoadPromote = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: activity$promote$coupon_pb.Promote) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  loadPromote(
    request: activity$promote$coupon_pb.Promote,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.ShopRPC/LoadPromote',
      request,
      metadata || {},
      this.methodInfoLoadPromote,
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
        '/ding4.ShopRPC/CompleteCar',
      request,
      metadata || {},
      this.methodInfoCompleteCar,
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
        '/ding4.ShopRPC/CreateOrder',
      request,
      metadata || {},
      this.methodInfoCreateOrder,
      callback);
  }

  methodInfoCompleteOrder = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: order_pb.Order) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  completeOrder(
    request: order_pb.Order,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.ShopRPC/CompleteOrder',
      request,
      metadata || {},
      this.methodInfoCompleteOrder,
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
        '/ding4.ShopRPC/CancelOrder',
      request,
      metadata || {},
      this.methodInfoCancelOrder,
      callback);
  }

  methodInfoReturnApplication = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: order_pb.Order) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  returnApplication(
    request: order_pb.Order,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.ShopRPC/ReturnApplication',
      request,
      metadata || {},
      this.methodInfoReturnApplication,
      callback);
  }

  methodInfoReturnOrder = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: order_pb.Order) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  returnOrder(
    request: order_pb.Order,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.ShopRPC/ReturnOrder',
      request,
      metadata || {},
      this.methodInfoReturnOrder,
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
        '/ding4.ShopRPC/FindOrder',
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
        '/ding4.ShopRPC/DetailOrder',
      request,
      metadata || {},
      this.methodInfoDetailOrder,
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
        '/ding4.ShopRPC/CreateFreeback',
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
        '/ding4.ShopRPC/ReadFreeback',
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
        '/ding4.ShopRPC/AppendFreeback',
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
        '/ding4.ShopRPC/FindFreeback',
      request,
      metadata || {},
      this.methodInfoFindFreeback,
      callback);
  }

  methodInfoUpgradeWebsite = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Upgrade) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  upgradeWebsite(
    request: sql_pb.Upgrade,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.ShopRPC/UpgradeWebsite',
      request,
      metadata || {},
      this.methodInfoUpgradeWebsite,
      callback);
  }

  methodInfoUpgradeProduct = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Upgrade) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  upgradeProduct(
    request: sql_pb.Upgrade,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.ShopRPC/UpgradeProduct',
      request,
      metadata || {},
      this.methodInfoUpgradeProduct,
      callback);
  }

  methodInfoUpgradeSpec = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Upgrade) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  upgradeSpec(
    request: sql_pb.Upgrade,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.ShopRPC/UpgradeSpec',
      request,
      metadata || {},
      this.methodInfoUpgradeSpec,
      callback);
  }

  methodInfoUpgradeMember = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Upgrade) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  upgradeMember(
    request: sql_pb.Upgrade,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.ShopRPC/UpgradeMember',
      request,
      metadata || {},
      this.methodInfoUpgradeMember,
      callback);
  }

  methodInfoUpgradeOrder = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Upgrade) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  upgradeOrder(
    request: sql_pb.Upgrade,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.ShopRPC/UpgradeOrder',
      request,
      metadata || {},
      this.methodInfoUpgradeOrder,
      callback);
  }

}

