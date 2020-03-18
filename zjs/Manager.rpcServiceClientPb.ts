/**
 * @fileoverview gRPC-Web generated client stub for ding4
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as sql_pb from './sql_pb';
import * as label_pb from './label_pb';
import * as car_pb from './car_pb';
import * as manager_pb from './manager_pb';
import * as customer$link_pb from './customer-link_pb';
import * as product$link_pb from './product-link_pb';
import * as activity_pb from './activity_pb';
import * as order_pb from './order_pb';
import * as remind_pb from './remind_pb';
import * as image_pb from './image_pb';
import * as setting_pb from './setting_pb';
import * as web$layout_pb from './web-layout_pb';
import * as web$page_pb from './web-page_pb';
import * as web$item_pb from './web-item_pb';
import * as web$base_pb from './web-base_pb';

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
    sql_pb.Response,
    (request: manager_pb.Manager) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  changePassword(
    request: manager_pb.Manager,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.ManagerRPC/ChangePassword',
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
        '/ding4.ManagerRPC/ChangeInfo',
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
        '/ding4.ManagerRPC/ChangeWhitelist',
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
        '/ding4.ManagerRPC/FindPermission',
      request,
      metadata || {},
      this.methodInfoFindPermission,
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
        '/ding4.ManagerRPC/CreateLabel',
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
        '/ding4.ManagerRPC/UpdateLabel',
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
        '/ding4.ManagerRPC/AppendLabel',
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
        '/ding4.ManagerRPC/SubtractLabel',
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
        '/ding4.ManagerRPC/FindLabel',
      request,
      metadata || {},
      this.methodInfoFindLabel,
      callback);
  }

  methodInfoCreateActivity = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: activity_pb.Activity) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  createActivity(
    request: activity_pb.Activity,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.ManagerRPC/CreateActivity',
      request,
      metadata || {},
      this.methodInfoCreateActivity,
      callback);
  }

  methodInfoUpdateActivity = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: activity_pb.Activity) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  updateActivity(
    request: activity_pb.Activity,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.ManagerRPC/UpdateActivity',
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
        '/ding4.ManagerRPC/FindActivity',
      request,
      metadata || {},
      this.methodInfoFindActivity,
      callback);
  }

  methodInfoAppendActivityProduct = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: activity_pb.ActivityProduct) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  appendActivityProduct(
    request: activity_pb.ActivityProduct,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.ManagerRPC/AppendActivityProduct',
      request,
      metadata || {},
      this.methodInfoAppendActivityProduct,
      callback);
  }

  methodInfoSubstractActivityProduct = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: activity_pb.ActivityProduct) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  substractActivityProduct(
    request: activity_pb.ActivityProduct,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.ManagerRPC/SubstractActivityProduct',
      request,
      metadata || {},
      this.methodInfoSubstractActivityProduct,
      callback);
  }

  methodInfoFindActivityProduct = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: activity_pb.ActivityProduct) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  findActivityProduct(
    request: activity_pb.ActivityProduct,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.ManagerRPC/FindActivityProduct',
      request,
      metadata || {},
      this.methodInfoFindActivityProduct,
      callback);
  }

  methodInfoCreateDiscount = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: activity_pb.Discount) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  createDiscount(
    request: activity_pb.Discount,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.ManagerRPC/CreateDiscount',
      request,
      metadata || {},
      this.methodInfoCreateDiscount,
      callback);
  }

  methodInfoUpdateDiscount = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: activity_pb.Discount) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  updateDiscount(
    request: activity_pb.Discount,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.ManagerRPC/UpdateDiscount',
      request,
      metadata || {},
      this.methodInfoUpdateDiscount,
      callback);
  }

  methodInfoFindDiscount = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  findDiscount(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.ManagerRPC/FindDiscount',
      request,
      metadata || {},
      this.methodInfoFindDiscount,
      callback);
  }

  methodInfoFindDiscountCustomer = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  findDiscountCustomer(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.ManagerRPC/FindDiscountCustomer',
      request,
      metadata || {},
      this.methodInfoFindDiscountCustomer,
      callback);
  }

  methodInfoExchangeDiscount = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: activity_pb.DiscountItem) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  exchangeDiscount(
    request: activity_pb.DiscountItem,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.ManagerRPC/ExchangeDiscount',
      request,
      metadata || {},
      this.methodInfoExchangeDiscount,
      callback);
  }

  methodInfoCreateCustomerLink = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: customer$link_pb.CustomerLink) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  createCustomerLink(
    request: customer$link_pb.CustomerLink,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.ManagerRPC/CreateCustomerLink',
      request,
      metadata || {},
      this.methodInfoCreateCustomerLink,
      callback);
  }

  methodInfoUpdateCustomerLink = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: customer$link_pb.CustomerLink) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  updateCustomerLink(
    request: customer$link_pb.CustomerLink,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.ManagerRPC/UpdateCustomerLink',
      request,
      metadata || {},
      this.methodInfoUpdateCustomerLink,
      callback);
  }

  methodInfoFindCustomerLink = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  findCustomerLink(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.ManagerRPC/FindCustomerLink',
      request,
      metadata || {},
      this.methodInfoFindCustomerLink,
      callback);
  }

  methodInfoCreateCustomerLevel = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: customer$link_pb.CustomerLevel) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  createCustomerLevel(
    request: customer$link_pb.CustomerLevel,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.ManagerRPC/CreateCustomerLevel',
      request,
      metadata || {},
      this.methodInfoCreateCustomerLevel,
      callback);
  }

  methodInfoUpdateCustomerLevel = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: customer$link_pb.CustomerLevel) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  updateCustomerLevel(
    request: customer$link_pb.CustomerLevel,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.ManagerRPC/UpdateCustomerLevel',
      request,
      metadata || {},
      this.methodInfoUpdateCustomerLevel,
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
        '/ding4.ManagerRPC/FindCustomerLevel',
      request,
      metadata || {},
      this.methodInfoFindCustomerLevel,
      callback);
  }

  methodInfoFindProductF = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  findProductF(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.ManagerRPC/FindProductF',
      request,
      metadata || {},
      this.methodInfoFindProductF,
      callback);
  }

  methodInfoFindProductSpec = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  findProductSpec(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.ManagerRPC/FindProductSpec',
      request,
      metadata || {},
      this.methodInfoFindProductSpec,
      callback);
  }

  methodInfoCreateProductLink = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: product$link_pb.ProductLink) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  createProductLink(
    request: product$link_pb.ProductLink,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.ManagerRPC/CreateProductLink',
      request,
      metadata || {},
      this.methodInfoCreateProductLink,
      callback);
  }

  methodInfoUpdateProductLink = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: product$link_pb.ProductLink) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  updateProductLink(
    request: product$link_pb.ProductLink,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.ManagerRPC/UpdateProductLink',
      request,
      metadata || {},
      this.methodInfoUpdateProductLink,
      callback);
  }

  methodInfoFindProductLink = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  findProductLink(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.ManagerRPC/FindProductLink',
      request,
      metadata || {},
      this.methodInfoFindProductLink,
      callback);
  }

  methodInfoCreateProductClass = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: product$link_pb.ProductClass) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  createProductClass(
    request: product$link_pb.ProductClass,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.ManagerRPC/CreateProductClass',
      request,
      metadata || {},
      this.methodInfoCreateProductClass,
      callback);
  }

  methodInfoUpdateProductClass = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: product$link_pb.ProductClass) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  updateProductClass(
    request: product$link_pb.ProductClass,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.ManagerRPC/UpdateProductClass',
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
        '/ding4.ManagerRPC/FindProductClass',
      request,
      metadata || {},
      this.methodInfoFindProductClass,
      callback);
  }

  methodInfoCreateProductClassImage = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: image_pb.Image) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  createProductClassImage(
    request: image_pb.Image,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.ManagerRPC/CreateProductClassImage',
      request,
      metadata || {},
      this.methodInfoCreateProductClassImage,
      callback);
  }

  methodInfoUpdateProductClassImage = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: image_pb.Image) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  updateProductClassImage(
    request: image_pb.Image,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.ManagerRPC/UpdateProductClassImage',
      request,
      metadata || {},
      this.methodInfoUpdateProductClassImage,
      callback);
  }

  methodInfoDeleteProductClassImage = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: image_pb.Image) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  deleteProductClassImage(
    request: image_pb.Image,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.ManagerRPC/DeleteProductClassImage',
      request,
      metadata || {},
      this.methodInfoDeleteProductClassImage,
      callback);
  }

  methodInfoFindProductStack = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  findProductStack(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.ManagerRPC/FindProductStack',
      request,
      metadata || {},
      this.methodInfoFindProductStack,
      callback);
  }

  methodInfoFindSpecStack = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  findSpecStack(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.ManagerRPC/FindSpecStack',
      request,
      metadata || {},
      this.methodInfoFindSpecStack,
      callback);
  }

  methodInfoCreateCar = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: car_pb.Car) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  createCar(
    request: car_pb.Car,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.ManagerRPC/CreateCar',
      request,
      metadata || {},
      this.methodInfoCreateCar,
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
        '/ding4.ManagerRPC/DeleteCar',
      request,
      metadata || {},
      this.methodInfoDeleteCar,
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
        '/ding4.ManagerRPC/CompleteCar',
      request,
      metadata || {},
      this.methodInfoCompleteCar,
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
        '/ding4.ManagerRPC/FindCar',
      request,
      metadata || {},
      this.methodInfoFindCar,
      callback);
  }

  methodInfoAppendCommodity = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: car_pb.Commodity) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  appendCommodity(
    request: car_pb.Commodity,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.ManagerRPC/AppendCommodity',
      request,
      metadata || {},
      this.methodInfoAppendCommodity,
      callback);
  }

  methodInfoSubtractCommodity = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: car_pb.Commodity) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  subtractCommodity(
    request: car_pb.Commodity,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.ManagerRPC/SubtractCommodity',
      request,
      metadata || {},
      this.methodInfoSubtractCommodity,
      callback);
  }

  methodInfoAppendDiscount = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: car_pb.Car) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  appendDiscount(
    request: car_pb.Car,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.ManagerRPC/AppendDiscount',
      request,
      metadata || {},
      this.methodInfoAppendDiscount,
      callback);
  }

  methodInfoSubtractDiscount = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: car_pb.Car) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  subtractDiscount(
    request: car_pb.Car,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.ManagerRPC/SubtractDiscount',
      request,
      metadata || {},
      this.methodInfoSubtractDiscount,
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
        '/ding4.ManagerRPC/CreateOrder',
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
        '/ding4.ManagerRPC/PaymentOrder',
      request,
      metadata || {},
      this.methodInfoPaymentOrder,
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
        '/ding4.ManagerRPC/FindOrder',
      request,
      metadata || {},
      this.methodInfoFindOrder,
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
        '/ding4.ManagerRPC/UpdateRemind',
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
        '/ding4.ManagerRPC/FindRemind',
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
        '/ding4.ManagerRPC/CreateSetting',
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
        '/ding4.ManagerRPC/UpdateSetting',
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
        '/ding4.ManagerRPC/DeleteSetting',
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
        '/ding4.ManagerRPC/FindSetting',
      request,
      metadata || {},
      this.methodInfoFindSetting,
      callback);
  }

  methodInfoCreateWebLayout = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: web$layout_pb.WebLayout) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  createWebLayout(
    request: web$layout_pb.WebLayout,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.ManagerRPC/CreateWebLayout',
      request,
      metadata || {},
      this.methodInfoCreateWebLayout,
      callback);
  }

  methodInfoUpdateWebLayout = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: web$layout_pb.WebLayout) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  updateWebLayout(
    request: web$layout_pb.WebLayout,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.ManagerRPC/UpdateWebLayout',
      request,
      metadata || {},
      this.methodInfoUpdateWebLayout,
      callback);
  }

  methodInfoDeleteWebLayout = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: web$layout_pb.WebLayout) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  deleteWebLayout(
    request: web$layout_pb.WebLayout,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.ManagerRPC/DeleteWebLayout',
      request,
      metadata || {},
      this.methodInfoDeleteWebLayout,
      callback);
  }

  methodInfoFindWebLayout = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  findWebLayout(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.ManagerRPC/FindWebLayout',
      request,
      metadata || {},
      this.methodInfoFindWebLayout,
      callback);
  }

  methodInfoCreateWebLayoutImage = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: image_pb.Image) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  createWebLayoutImage(
    request: image_pb.Image,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.ManagerRPC/CreateWebLayoutImage',
      request,
      metadata || {},
      this.methodInfoCreateWebLayoutImage,
      callback);
  }

  methodInfoUpdateWebLayoutImage = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: image_pb.Image) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  updateWebLayoutImage(
    request: image_pb.Image,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.ManagerRPC/UpdateWebLayoutImage',
      request,
      metadata || {},
      this.methodInfoUpdateWebLayoutImage,
      callback);
  }

  methodInfoDeleteWebLayoutImage = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: image_pb.Image) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  deleteWebLayoutImage(
    request: image_pb.Image,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.ManagerRPC/DeleteWebLayoutImage',
      request,
      metadata || {},
      this.methodInfoDeleteWebLayoutImage,
      callback);
  }

  methodInfoCreateWebPage = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: web$page_pb.WebPage) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  createWebPage(
    request: web$page_pb.WebPage,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.ManagerRPC/CreateWebPage',
      request,
      metadata || {},
      this.methodInfoCreateWebPage,
      callback);
  }

  methodInfoUpdateWebPage = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: web$page_pb.WebPage) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  updateWebPage(
    request: web$page_pb.WebPage,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.ManagerRPC/UpdateWebPage',
      request,
      metadata || {},
      this.methodInfoUpdateWebPage,
      callback);
  }

  methodInfoDeleteWebPage = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: web$page_pb.WebPage) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  deleteWebPage(
    request: web$page_pb.WebPage,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.ManagerRPC/DeleteWebPage',
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
        '/ding4.ManagerRPC/FindWebPage',
      request,
      metadata || {},
      this.methodInfoFindWebPage,
      callback);
  }

  methodInfoCreateWebItem = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: web$item_pb.WebItem) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  createWebItem(
    request: web$item_pb.WebItem,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.ManagerRPC/CreateWebItem',
      request,
      metadata || {},
      this.methodInfoCreateWebItem,
      callback);
  }

  methodInfoUpdateWebItem = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: web$item_pb.WebItem) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  updateWebItem(
    request: web$item_pb.WebItem,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.ManagerRPC/UpdateWebItem',
      request,
      metadata || {},
      this.methodInfoUpdateWebItem,
      callback);
  }

  methodInfoDeleteWebItem = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: web$item_pb.WebItem) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  deleteWebItem(
    request: web$item_pb.WebItem,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.ManagerRPC/DeleteWebItem',
      request,
      metadata || {},
      this.methodInfoDeleteWebItem,
      callback);
  }

  methodInfoFindWebItem = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  findWebItem(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.ManagerRPC/FindWebItem',
      request,
      metadata || {},
      this.methodInfoFindWebItem,
      callback);
  }

  methodInfoUpdateWebBase = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: web$base_pb.WebBase) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  updateWebBase(
    request: web$base_pb.WebBase,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.ManagerRPC/UpdateWebBase',
      request,
      metadata || {},
      this.methodInfoUpdateWebBase,
      callback);
  }

  methodInfoFindWebBase = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  findWebBase(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.ManagerRPC/FindWebBase',
      request,
      metadata || {},
      this.methodInfoFindWebBase,
      callback);
  }

}

