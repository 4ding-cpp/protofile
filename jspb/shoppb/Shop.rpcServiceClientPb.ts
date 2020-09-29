/**
 * @fileoverview gRPC-Web generated client stub for ding4
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as activity$coupon_pb from './activity-coupon_pb';
import * as adapter_pb from './adapter_pb';
import * as sql_pb from './sql_pb';
import * as password_pb from './password_pb';
import * as product$goods_pb from './product-goods_pb';
import * as car_pb from './car_pb';
import * as freeback_pb from './freeback_pb';
import * as order_pb from './order_pb';
import * as customer_pb from './customer_pb';


export class ShopRPCClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  signIn(
    request: customer_pb.Customer,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  signIn(
    request: customer_pb.Customer,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.ShopRPC/SignIn',
        request,
        metadata || {},
        this.methodInfoSignIn,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.ShopRPC/SignIn',
    request,
    metadata || {},
    this.methodInfoSignIn);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  signUp(
    request: customer_pb.Customer,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  signUp(
    request: customer_pb.Customer,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.ShopRPC/SignUp',
        request,
        metadata || {},
        this.methodInfoSignUp,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.ShopRPC/SignUp',
    request,
    metadata || {},
    this.methodInfoSignUp);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  signFb(
    request: customer_pb.Customer,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  signFb(
    request: customer_pb.Customer,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.ShopRPC/SignFb',
        request,
        metadata || {},
        this.methodInfoSignFb,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.ShopRPC/SignFb',
    request,
    metadata || {},
    this.methodInfoSignFb);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  whoAmI(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  whoAmI(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.ShopRPC/WhoAmI',
        request,
        metadata || {},
        this.methodInfoWhoAmI,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.ShopRPC/WhoAmI',
    request,
    metadata || {},
    this.methodInfoWhoAmI);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  changePassword(
    request: password_pb.Password,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  changePassword(
    request: password_pb.Password,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.ShopRPC/ChangePassword',
        request,
        metadata || {},
        this.methodInfoChangePassword,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.ShopRPC/ChangePassword',
    request,
    metadata || {},
    this.methodInfoChangePassword);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  changeInfo(
    request: customer_pb.Customer,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  changeInfo(
    request: customer_pb.Customer,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.ShopRPC/ChangeInfo',
        request,
        metadata || {},
        this.methodInfoChangeInfo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.ShopRPC/ChangeInfo',
    request,
    metadata || {},
    this.methodInfoChangeInfo);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  findSign(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  findSign(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.ShopRPC/FindSign',
        request,
        metadata || {},
        this.methodInfoFindSign,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.ShopRPC/FindSign',
    request,
    metadata || {},
    this.methodInfoFindSign);
  }

  methodInfoIndexWebsite = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  indexWebsite(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  indexWebsite(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  indexWebsite(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.ShopRPC/IndexWebsite',
        request,
        metadata || {},
        this.methodInfoIndexWebsite,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.ShopRPC/IndexWebsite',
    request,
    metadata || {},
    this.methodInfoIndexWebsite);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  findWebPage(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  findWebPage(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.ShopRPC/FindWebPage',
        request,
        metadata || {},
        this.methodInfoFindWebPage,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.ShopRPC/FindWebPage',
    request,
    metadata || {},
    this.methodInfoFindWebPage);
  }

  methodInfoAppConf = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  appConf(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  appConf(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  appConf(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.ShopRPC/AppConf',
        request,
        metadata || {},
        this.methodInfoAppConf,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.ShopRPC/AppConf',
    request,
    metadata || {},
    this.methodInfoAppConf);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  findProductClass(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  findProductClass(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.ShopRPC/FindProductClass',
        request,
        metadata || {},
        this.methodInfoFindProductClass,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.ShopRPC/FindProductClass',
    request,
    metadata || {},
    this.methodInfoFindProductClass);
  }

  methodInfoFindProductGoods = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  findProductGoods(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  findProductGoods(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  findProductGoods(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.ShopRPC/FindProductGoods',
        request,
        metadata || {},
        this.methodInfoFindProductGoods,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.ShopRPC/FindProductGoods',
    request,
    metadata || {},
    this.methodInfoFindProductGoods);
  }

  methodInfoFindProductGoodsOfActivity = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: activity$coupon_pb.Activity) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  findProductGoodsOfActivity(
    request: activity$coupon_pb.Activity,
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  findProductGoodsOfActivity(
    request: activity$coupon_pb.Activity,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  findProductGoodsOfActivity(
    request: activity$coupon_pb.Activity,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.ShopRPC/FindProductGoodsOfActivity',
        request,
        metadata || {},
        this.methodInfoFindProductGoodsOfActivity,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.ShopRPC/FindProductGoodsOfActivity',
    request,
    metadata || {},
    this.methodInfoFindProductGoodsOfActivity);
  }

  methodInfoBrowseProductGoods = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: product$goods_pb.ProductGoods) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  browseProductGoods(
    request: product$goods_pb.ProductGoods,
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  browseProductGoods(
    request: product$goods_pb.ProductGoods,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  browseProductGoods(
    request: product$goods_pb.ProductGoods,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.ShopRPC/BrowseProductGoods',
        request,
        metadata || {},
        this.methodInfoBrowseProductGoods,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.ShopRPC/BrowseProductGoods',
    request,
    metadata || {},
    this.methodInfoBrowseProductGoods);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  addProductFavorite(
    request: product$goods_pb.ProductGoods,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  addProductFavorite(
    request: product$goods_pb.ProductGoods,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.ShopRPC/AddProductFavorite',
        request,
        metadata || {},
        this.methodInfoAddProductFavorite,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.ShopRPC/AddProductFavorite',
    request,
    metadata || {},
    this.methodInfoAddProductFavorite);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  delProductFavorite(
    request: product$goods_pb.ProductGoods,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  delProductFavorite(
    request: product$goods_pb.ProductGoods,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.ShopRPC/DelProductFavorite',
        request,
        metadata || {},
        this.methodInfoDelProductFavorite,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.ShopRPC/DelProductFavorite',
    request,
    metadata || {},
    this.methodInfoDelProductFavorite);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  findFavorite(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  findFavorite(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.ShopRPC/FindFavorite',
        request,
        metadata || {},
        this.methodInfoFindFavorite,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.ShopRPC/FindFavorite',
    request,
    metadata || {},
    this.methodInfoFindFavorite);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  exchangeCoupon(
    request: activity$coupon_pb.Coupon,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  exchangeCoupon(
    request: activity$coupon_pb.Coupon,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.ShopRPC/ExchangeCoupon',
        request,
        metadata || {},
        this.methodInfoExchangeCoupon,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.ShopRPC/ExchangeCoupon',
    request,
    metadata || {},
    this.methodInfoExchangeCoupon);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  findCoupon(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  findCoupon(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.ShopRPC/FindCoupon',
        request,
        metadata || {},
        this.methodInfoFindCoupon,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.ShopRPC/FindCoupon',
    request,
    metadata || {},
    this.methodInfoFindCoupon);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  completeCar(
    request: car_pb.Car,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  completeCar(
    request: car_pb.Car,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.ShopRPC/CompleteCar',
        request,
        metadata || {},
        this.methodInfoCompleteCar,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.ShopRPC/CompleteCar',
    request,
    metadata || {},
    this.methodInfoCompleteCar);
  }

  methodInfoFindPayment = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  findPayment(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  findPayment(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  findPayment(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.ShopRPC/FindPayment',
        request,
        metadata || {},
        this.methodInfoFindPayment,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.ShopRPC/FindPayment',
    request,
    metadata || {},
    this.methodInfoFindPayment);
  }

  methodInfoFindLogistics = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  findLogistics(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  findLogistics(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  findLogistics(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.ShopRPC/FindLogistics',
        request,
        metadata || {},
        this.methodInfoFindLogistics,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.ShopRPC/FindLogistics',
    request,
    metadata || {},
    this.methodInfoFindLogistics);
  }

  methodInfoChooseCVSStore = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: adapter_pb.Adapter) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  chooseCVSStore(
    request: adapter_pb.Adapter,
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  chooseCVSStore(
    request: adapter_pb.Adapter,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  chooseCVSStore(
    request: adapter_pb.Adapter,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.ShopRPC/ChooseCVSStore',
        request,
        metadata || {},
        this.methodInfoChooseCVSStore,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.ShopRPC/ChooseCVSStore',
    request,
    metadata || {},
    this.methodInfoChooseCVSStore);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  createOrder(
    request: order_pb.Order,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  createOrder(
    request: order_pb.Order,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.ShopRPC/CreateOrder',
        request,
        metadata || {},
        this.methodInfoCreateOrder,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.ShopRPC/CreateOrder',
    request,
    metadata || {},
    this.methodInfoCreateOrder);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  completeOrder(
    request: order_pb.Order,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  completeOrder(
    request: order_pb.Order,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.ShopRPC/CompleteOrder',
        request,
        metadata || {},
        this.methodInfoCompleteOrder,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.ShopRPC/CompleteOrder',
    request,
    metadata || {},
    this.methodInfoCompleteOrder);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  cancelOrder(
    request: order_pb.Order,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  cancelOrder(
    request: order_pb.Order,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.ShopRPC/CancelOrder',
        request,
        metadata || {},
        this.methodInfoCancelOrder,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.ShopRPC/CancelOrder',
    request,
    metadata || {},
    this.methodInfoCancelOrder);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  findOrder(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  findOrder(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.ShopRPC/FindOrder',
        request,
        metadata || {},
        this.methodInfoFindOrder,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.ShopRPC/FindOrder',
    request,
    metadata || {},
    this.methodInfoFindOrder);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  detailOrder(
    request: order_pb.Order,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  detailOrder(
    request: order_pb.Order,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.ShopRPC/DetailOrder',
        request,
        metadata || {},
        this.methodInfoDetailOrder,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.ShopRPC/DetailOrder',
    request,
    metadata || {},
    this.methodInfoDetailOrder);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  createFreeback(
    request: freeback_pb.Freeback,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  createFreeback(
    request: freeback_pb.Freeback,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.ShopRPC/CreateFreeback',
        request,
        metadata || {},
        this.methodInfoCreateFreeback,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.ShopRPC/CreateFreeback',
    request,
    metadata || {},
    this.methodInfoCreateFreeback);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  readFreeback(
    request: freeback_pb.Freeback,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  readFreeback(
    request: freeback_pb.Freeback,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.ShopRPC/ReadFreeback',
        request,
        metadata || {},
        this.methodInfoReadFreeback,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.ShopRPC/ReadFreeback',
    request,
    metadata || {},
    this.methodInfoReadFreeback);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  appendFreeback(
    request: freeback_pb.Dialogue,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  appendFreeback(
    request: freeback_pb.Dialogue,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.ShopRPC/AppendFreeback',
        request,
        metadata || {},
        this.methodInfoAppendFreeback,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.ShopRPC/AppendFreeback',
    request,
    metadata || {},
    this.methodInfoAppendFreeback);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  findFreeback(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  findFreeback(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.ShopRPC/FindFreeback',
        request,
        metadata || {},
        this.methodInfoFindFreeback,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.ShopRPC/FindFreeback',
    request,
    metadata || {},
    this.methodInfoFindFreeback);
  }

}

