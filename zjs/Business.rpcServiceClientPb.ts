/**
 * @fileoverview gRPC-Web generated client stub for ding4
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as type_pb from './type_pb';
import * as sql_pb from './sql_pb';
import * as business_pb from './business_pb';
import * as product_pb from './product_pb';
import * as customer_pb from './customer_pb';
import * as store_pb from './store_pb';
import * as order_pb from './order_pb';
import * as address_pb from './address_pb';
import * as stack_pb from './stack_pb';
import * as supplier_pb from './supplier_pb';

export class BusinessRPCClient {
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
    (request: business_pb.Business) => {
      return request.serializeBinary();
    },
    sql_pb.DBMessage.deserializeBinary
  );

  changePassword(
    request: business_pb.Business,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.DBMessage) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/ChangePassword',
      request,
      metadata || {},
      this.methodInfoChangePassword,
      callback);
  }

  methodInfoChangeInfo = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.DBMessage,
    (request: business_pb.Business) => {
      return request.serializeBinary();
    },
    sql_pb.DBMessage.deserializeBinary
  );

  changeInfo(
    request: business_pb.Business,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.DBMessage) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/ChangeInfo',
      request,
      metadata || {},
      this.methodInfoChangeInfo,
      callback);
  }

  methodInfoChangeWhitelist = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.DBMessage,
    (request: business_pb.Business) => {
      return request.serializeBinary();
    },
    sql_pb.DBMessage.deserializeBinary
  );

  changeWhitelist(
    request: business_pb.Business,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.DBMessage) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/ChangeWhitelist',
      request,
      metadata || {},
      this.methodInfoChangeWhitelist,
      callback);
  }

  methodInfoFindPoint = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Result,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Result.deserializeBinary
  );

  findPoint(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Result) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/FindPoint',
      request,
      metadata || {},
      this.methodInfoFindPoint,
      callback);
  }

  methodInfoFindPointFlow = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Result,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Result.deserializeBinary
  );

  findPointFlow(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Result) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/FindPointFlow',
      request,
      metadata || {},
      this.methodInfoFindPointFlow,
      callback);
  }

  methodInfoFindPointBill = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Result,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Result.deserializeBinary
  );

  findPointBill(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Result) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/FindPointBill',
      request,
      metadata || {},
      this.methodInfoFindPointBill,
      callback);
  }

  methodInfoFindPermission = new grpcWeb.AbstractClientBase.MethodInfo(
    type_pb.Permission,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    type_pb.Permission.deserializeBinary
  );

  findPermission(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: type_pb.Permission) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/FindPermission',
      request,
      metadata || {},
      this.methodInfoFindPermission,
      callback);
  }

  methodInfoCreateBusiness = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.DBMessage,
    (request: business_pb.Business) => {
      return request.serializeBinary();
    },
    sql_pb.DBMessage.deserializeBinary
  );

  createBusiness(
    request: business_pb.Business,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.DBMessage) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/CreateBusiness',
      request,
      metadata || {},
      this.methodInfoCreateBusiness,
      callback);
  }

  methodInfoUpdateBusiness = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.DBMessage,
    (request: business_pb.Business) => {
      return request.serializeBinary();
    },
    sql_pb.DBMessage.deserializeBinary
  );

  updateBusiness(
    request: business_pb.Business,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.DBMessage) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/UpdateBusiness',
      request,
      metadata || {},
      this.methodInfoUpdateBusiness,
      callback);
  }

  methodInfoFindBusiness = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Result,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Result.deserializeBinary
  );

  findBusiness(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Result) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/FindBusiness',
      request,
      metadata || {},
      this.methodInfoFindBusiness,
      callback);
  }

  methodInfoCreateProduct = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.DBMessage,
    (request: product_pb.Product) => {
      return request.serializeBinary();
    },
    sql_pb.DBMessage.deserializeBinary
  );

  createProduct(
    request: product_pb.Product,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.DBMessage) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/CreateProduct',
      request,
      metadata || {},
      this.methodInfoCreateProduct,
      callback);
  }

  methodInfoUpdateProduct = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.DBMessage,
    (request: product_pb.Product) => {
      return request.serializeBinary();
    },
    sql_pb.DBMessage.deserializeBinary
  );

  updateProduct(
    request: product_pb.Product,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.DBMessage) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/UpdateProduct',
      request,
      metadata || {},
      this.methodInfoUpdateProduct,
      callback);
  }

  methodInfoFindProduct = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Result,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Result.deserializeBinary
  );

  findProduct(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Result) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/FindProduct',
      request,
      metadata || {},
      this.methodInfoFindProduct,
      callback);
  }

  methodInfoRecordProduct = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Result,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Result.deserializeBinary
  );

  recordProduct(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Result) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/RecordProduct',
      request,
      metadata || {},
      this.methodInfoRecordProduct,
      callback);
  }

  methodInfoCreateProductLabel = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.DBMessage,
    (request: product_pb.ProductLabel) => {
      return request.serializeBinary();
    },
    sql_pb.DBMessage.deserializeBinary
  );

  createProductLabel(
    request: product_pb.ProductLabel,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.DBMessage) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/CreateProductLabel',
      request,
      metadata || {},
      this.methodInfoCreateProductLabel,
      callback);
  }

  methodInfoUpdateProductLabel = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.DBMessage,
    (request: product_pb.ProductLabel) => {
      return request.serializeBinary();
    },
    sql_pb.DBMessage.deserializeBinary
  );

  updateProductLabel(
    request: product_pb.ProductLabel,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.DBMessage) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/UpdateProductLabel',
      request,
      metadata || {},
      this.methodInfoUpdateProductLabel,
      callback);
  }

  methodInfoFindProductLabel = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Result,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Result.deserializeBinary
  );

  findProductLabel(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Result) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/FindProductLabel',
      request,
      metadata || {},
      this.methodInfoFindProductLabel,
      callback);
  }

  methodInfoCreateProductGroup = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.DBMessage,
    (request: product_pb.ProductGroup) => {
      return request.serializeBinary();
    },
    sql_pb.DBMessage.deserializeBinary
  );

  createProductGroup(
    request: product_pb.ProductGroup,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.DBMessage) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/CreateProductGroup',
      request,
      metadata || {},
      this.methodInfoCreateProductGroup,
      callback);
  }

  methodInfoUpdateProductGroup = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.DBMessage,
    (request: product_pb.ProductGroup) => {
      return request.serializeBinary();
    },
    sql_pb.DBMessage.deserializeBinary
  );

  updateProductGroup(
    request: product_pb.ProductGroup,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.DBMessage) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/UpdateProductGroup',
      request,
      metadata || {},
      this.methodInfoUpdateProductGroup,
      callback);
  }

  methodInfoFindProductGroup = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Result,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Result.deserializeBinary
  );

  findProductGroup(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Result) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/FindProductGroup',
      request,
      metadata || {},
      this.methodInfoFindProductGroup,
      callback);
  }

  methodInfoCreateProductLinker = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.DBMessage,
    (request: product_pb.ProductLinker) => {
      return request.serializeBinary();
    },
    sql_pb.DBMessage.deserializeBinary
  );

  createProductLinker(
    request: product_pb.ProductLinker,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.DBMessage) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/CreateProductLinker',
      request,
      metadata || {},
      this.methodInfoCreateProductLinker,
      callback);
  }

  methodInfoUpdateProductLinker = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.DBMessage,
    (request: product_pb.ProductLinker) => {
      return request.serializeBinary();
    },
    sql_pb.DBMessage.deserializeBinary
  );

  updateProductLinker(
    request: product_pb.ProductLinker,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.DBMessage) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/UpdateProductLinker',
      request,
      metadata || {},
      this.methodInfoUpdateProductLinker,
      callback);
  }

  methodInfoFindProductLinker = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Result,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Result.deserializeBinary
  );

  findProductLinker(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Result) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/FindProductLinker',
      request,
      metadata || {},
      this.methodInfoFindProductLinker,
      callback);
  }

  methodInfoCreateProductSpec = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.DBMessage,
    (request: product_pb.ProductSpec) => {
      return request.serializeBinary();
    },
    sql_pb.DBMessage.deserializeBinary
  );

  createProductSpec(
    request: product_pb.ProductSpec,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.DBMessage) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/CreateProductSpec',
      request,
      metadata || {},
      this.methodInfoCreateProductSpec,
      callback);
  }

  methodInfoUpdateProductSpec = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.DBMessage,
    (request: product_pb.ProductSpec) => {
      return request.serializeBinary();
    },
    sql_pb.DBMessage.deserializeBinary
  );

  updateProductSpec(
    request: product_pb.ProductSpec,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.DBMessage) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/UpdateProductSpec',
      request,
      metadata || {},
      this.methodInfoUpdateProductSpec,
      callback);
  }

  methodInfoFindProductSpec = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Result,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Result.deserializeBinary
  );

  findProductSpec(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Result) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/FindProductSpec',
      request,
      metadata || {},
      this.methodInfoFindProductSpec,
      callback);
  }

  methodInfoCreateImage = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.DBMessage,
    (request: type_pb.Image) => {
      return request.serializeBinary();
    },
    sql_pb.DBMessage.deserializeBinary
  );

  createImage(
    request: type_pb.Image,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.DBMessage) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/CreateImage',
      request,
      metadata || {},
      this.methodInfoCreateImage,
      callback);
  }

  methodInfoUpdateImage = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.DBMessage,
    (request: type_pb.Image) => {
      return request.serializeBinary();
    },
    sql_pb.DBMessage.deserializeBinary
  );

  updateImage(
    request: type_pb.Image,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.DBMessage) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/UpdateImage',
      request,
      metadata || {},
      this.methodInfoUpdateImage,
      callback);
  }

  methodInfoFindImage = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Result,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Result.deserializeBinary
  );

  findImage(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Result) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/FindImage',
      request,
      metadata || {},
      this.methodInfoFindImage,
      callback);
  }

  methodInfoCreateCustomer = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.DBMessage,
    (request: customer_pb.Customer) => {
      return request.serializeBinary();
    },
    sql_pb.DBMessage.deserializeBinary
  );

  createCustomer(
    request: customer_pb.Customer,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.DBMessage) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/CreateCustomer',
      request,
      metadata || {},
      this.methodInfoCreateCustomer,
      callback);
  }

  methodInfoUpdateCustomer = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.DBMessage,
    (request: customer_pb.Customer) => {
      return request.serializeBinary();
    },
    sql_pb.DBMessage.deserializeBinary
  );

  updateCustomer(
    request: customer_pb.Customer,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.DBMessage) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/UpdateCustomer',
      request,
      metadata || {},
      this.methodInfoUpdateCustomer,
      callback);
  }

  methodInfoFindCustomer = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Result,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Result.deserializeBinary
  );

  findCustomer(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Result) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/FindCustomer',
      request,
      metadata || {},
      this.methodInfoFindCustomer,
      callback);
  }

  methodInfoRecordCustomer = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Result,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Result.deserializeBinary
  );

  recordCustomer(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Result) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/RecordCustomer',
      request,
      metadata || {},
      this.methodInfoRecordCustomer,
      callback);
  }

  methodInfoCreateCustomerLabel = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.DBMessage,
    (request: customer_pb.CustomerLabel) => {
      return request.serializeBinary();
    },
    sql_pb.DBMessage.deserializeBinary
  );

  createCustomerLabel(
    request: customer_pb.CustomerLabel,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.DBMessage) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/CreateCustomerLabel',
      request,
      metadata || {},
      this.methodInfoCreateCustomerLabel,
      callback);
  }

  methodInfoUpdateCustomerLabel = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.DBMessage,
    (request: customer_pb.CustomerLabel) => {
      return request.serializeBinary();
    },
    sql_pb.DBMessage.deserializeBinary
  );

  updateCustomerLabel(
    request: customer_pb.CustomerLabel,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.DBMessage) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/UpdateCustomerLabel',
      request,
      metadata || {},
      this.methodInfoUpdateCustomerLabel,
      callback);
  }

  methodInfoFindCustomerLabel = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Result,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Result.deserializeBinary
  );

  findCustomerLabel(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Result) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/FindCustomerLabel',
      request,
      metadata || {},
      this.methodInfoFindCustomerLabel,
      callback);
  }

  methodInfoCreateCustomerGroup = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.DBMessage,
    (request: customer_pb.CustomerGroup) => {
      return request.serializeBinary();
    },
    sql_pb.DBMessage.deserializeBinary
  );

  createCustomerGroup(
    request: customer_pb.CustomerGroup,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.DBMessage) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/CreateCustomerGroup',
      request,
      metadata || {},
      this.methodInfoCreateCustomerGroup,
      callback);
  }

  methodInfoUpdateCustomerGroup = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.DBMessage,
    (request: customer_pb.CustomerGroup) => {
      return request.serializeBinary();
    },
    sql_pb.DBMessage.deserializeBinary
  );

  updateCustomerGroup(
    request: customer_pb.CustomerGroup,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.DBMessage) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/UpdateCustomerGroup',
      request,
      metadata || {},
      this.methodInfoUpdateCustomerGroup,
      callback);
  }

  methodInfoFindCustomerGroup = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Result,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Result.deserializeBinary
  );

  findCustomerGroup(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Result) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/FindCustomerGroup',
      request,
      metadata || {},
      this.methodInfoFindCustomerGroup,
      callback);
  }

  methodInfoCreateCustomerLinker = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.DBMessage,
    (request: customer_pb.CustomerLinker) => {
      return request.serializeBinary();
    },
    sql_pb.DBMessage.deserializeBinary
  );

  createCustomerLinker(
    request: customer_pb.CustomerLinker,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.DBMessage) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/CreateCustomerLinker',
      request,
      metadata || {},
      this.methodInfoCreateCustomerLinker,
      callback);
  }

  methodInfoUpdateCustomerLinker = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.DBMessage,
    (request: customer_pb.CustomerLinker) => {
      return request.serializeBinary();
    },
    sql_pb.DBMessage.deserializeBinary
  );

  updateCustomerLinker(
    request: customer_pb.CustomerLinker,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.DBMessage) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/UpdateCustomerLinker',
      request,
      metadata || {},
      this.methodInfoUpdateCustomerLinker,
      callback);
  }

  methodInfoFindCustomerLinker = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Result,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Result.deserializeBinary
  );

  findCustomerLinker(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Result) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/FindCustomerLinker',
      request,
      metadata || {},
      this.methodInfoFindCustomerLinker,
      callback);
  }

  methodInfoCreateStore = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.DBMessage,
    (request: store_pb.Store) => {
      return request.serializeBinary();
    },
    sql_pb.DBMessage.deserializeBinary
  );

  createStore(
    request: store_pb.Store,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.DBMessage) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/CreateStore',
      request,
      metadata || {},
      this.methodInfoCreateStore,
      callback);
  }

  methodInfoUpdateStore = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.DBMessage,
    (request: store_pb.Store) => {
      return request.serializeBinary();
    },
    sql_pb.DBMessage.deserializeBinary
  );

  updateStore(
    request: store_pb.Store,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.DBMessage) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/UpdateStore',
      request,
      metadata || {},
      this.methodInfoUpdateStore,
      callback);
  }

  methodInfoFindStore = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Result,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Result.deserializeBinary
  );

  findStore(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Result) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/FindStore',
      request,
      metadata || {},
      this.methodInfoFindStore,
      callback);
  }

  methodInfoRecordStore = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Result,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Result.deserializeBinary
  );

  recordStore(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Result) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/RecordStore',
      request,
      metadata || {},
      this.methodInfoRecordStore,
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
        '/ding4.BusinessRPC/CreateOrder',
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
        '/ding4.BusinessRPC/UpdateOrder',
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
        '/ding4.BusinessRPC/FindOrder',
      request,
      metadata || {},
      this.methodInfoFindOrder,
      callback);
  }

  methodInfoUpdateAddress = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.DBMessage,
    (request: address_pb.Address) => {
      return request.serializeBinary();
    },
    sql_pb.DBMessage.deserializeBinary
  );

  updateAddress(
    request: address_pb.Address,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.DBMessage) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/UpdateAddress',
      request,
      metadata || {},
      this.methodInfoUpdateAddress,
      callback);
  }

  methodInfoFindAddress = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Result,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Result.deserializeBinary
  );

  findAddress(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Result) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/FindAddress',
      request,
      metadata || {},
      this.methodInfoFindAddress,
      callback);
  }

  methodInfoCreateStack = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.DBMessage,
    (request: stack_pb.Stack) => {
      return request.serializeBinary();
    },
    sql_pb.DBMessage.deserializeBinary
  );

  createStack(
    request: stack_pb.Stack,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.DBMessage) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/CreateStack',
      request,
      metadata || {},
      this.methodInfoCreateStack,
      callback);
  }

  methodInfoFindStack = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Result,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Result.deserializeBinary
  );

  findStack(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Result) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/FindStack',
      request,
      metadata || {},
      this.methodInfoFindStack,
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
        '/ding4.BusinessRPC/FindProductStack',
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
        '/ding4.BusinessRPC/FindSpecStack',
      request,
      metadata || {},
      this.methodInfoFindSpecStack,
      callback);
  }

  methodInfoCreateSupplier = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.DBMessage,
    (request: supplier_pb.Supplier) => {
      return request.serializeBinary();
    },
    sql_pb.DBMessage.deserializeBinary
  );

  createSupplier(
    request: supplier_pb.Supplier,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.DBMessage) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/CreateSupplier',
      request,
      metadata || {},
      this.methodInfoCreateSupplier,
      callback);
  }

  methodInfoUpdateSupplier = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.DBMessage,
    (request: supplier_pb.Supplier) => {
      return request.serializeBinary();
    },
    sql_pb.DBMessage.deserializeBinary
  );

  updateSupplier(
    request: supplier_pb.Supplier,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.DBMessage) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/UpdateSupplier',
      request,
      metadata || {},
      this.methodInfoUpdateSupplier,
      callback);
  }

  methodInfoFindSupplier = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Result,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Result.deserializeBinary
  );

  findSupplier(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Result) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/FindSupplier',
      request,
      metadata || {},
      this.methodInfoFindSupplier,
      callback);
  }

}

