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
import * as business_pb from './business_pb';
import * as point_pb from './point_pb';
import * as manager_pb from './manager_pb';
import * as linker_pb from './linker_pb';
import * as customer_pb from './customer_pb';
import * as customer$level_pb from './customer-level_pb';
import * as product_pb from './product_pb';
import * as product$class_pb from './product-class_pb';
import * as label_pb from './label_pb';
import * as store_pb from './store_pb';
import * as remind_pb from './remind_pb';
import * as order_pb from './order_pb';
import * as purchase_pb from './purchase_pb';
import * as seller_pb from './seller_pb';
import * as setting_pb from './setting_pb';

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
        '/ding4.BusinessRPC/Ping',
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
        '/ding4.BusinessRPC/WhoAmI',
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
        '/ding4.BusinessRPC/ChangePassword',
      request,
      metadata || {},
      this.methodInfoChangePassword,
      callback);
  }

  methodInfoChangeInfo = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: business_pb.Business) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  changeInfo(
    request: business_pb.Business,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/ChangeInfo',
      request,
      metadata || {},
      this.methodInfoChangeInfo,
      callback);
  }

  methodInfoChangeWhitelist = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: business_pb.Business) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  changeWhitelist(
    request: business_pb.Business,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/ChangeWhitelist',
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
        '/ding4.BusinessRPC/FindPermission',
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
        '/ding4.BusinessRPC/FindRecord',
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
        '/ding4.BusinessRPC/FindSign',
      request,
      metadata || {},
      this.methodInfoFindSign,
      callback);
  }

  methodInfoCreatePoint = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: point_pb.Point) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  createPoint(
    request: point_pb.Point,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/CreatePoint',
      request,
      metadata || {},
      this.methodInfoCreatePoint,
      callback);
  }

  methodInfoCancelPoint = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: point_pb.Point) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  cancelPoint(
    request: point_pb.Point,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/CancelPoint',
      request,
      metadata || {},
      this.methodInfoCancelPoint,
      callback);
  }

  methodInfoConfirmPoint = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: point_pb.Point) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  confirmPoint(
    request: point_pb.Point,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/ConfirmPoint',
      request,
      metadata || {},
      this.methodInfoConfirmPoint,
      callback);
  }

  methodInfoConfirmPointBill = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: point_pb.PointBill) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  confirmPointBill(
    request: point_pb.PointBill,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/ConfirmPointBill',
      request,
      metadata || {},
      this.methodInfoConfirmPointBill,
      callback);
  }

  methodInfoFindPoint = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  findPoint(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/FindPoint',
      request,
      metadata || {},
      this.methodInfoFindPoint,
      callback);
  }

  methodInfoFindPointFlow = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  findPointFlow(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/FindPointFlow',
      request,
      metadata || {},
      this.methodInfoFindPointFlow,
      callback);
  }

  methodInfoFindPointBill = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  findPointBill(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/FindPointBill',
      request,
      metadata || {},
      this.methodInfoFindPointBill,
      callback);
  }

  methodInfoFindPointDetail = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  findPointDetail(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/FindPointDetail',
      request,
      metadata || {},
      this.methodInfoFindPointDetail,
      callback);
  }

  methodInfoCreateBusiness = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: business_pb.Business) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  createBusiness(
    request: business_pb.Business,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/CreateBusiness',
      request,
      metadata || {},
      this.methodInfoCreateBusiness,
      callback);
  }

  methodInfoUpdateBusiness = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: business_pb.Business) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  updateBusiness(
    request: business_pb.Business,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/UpdateBusiness',
      request,
      metadata || {},
      this.methodInfoUpdateBusiness,
      callback);
  }

  methodInfoFindBusiness = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  findBusiness(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/FindBusiness',
      request,
      metadata || {},
      this.methodInfoFindBusiness,
      callback);
  }

  methodInfoRecordBusiness = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: business_pb.Business) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  recordBusiness(
    request: business_pb.Business,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/RecordBusiness',
      request,
      metadata || {},
      this.methodInfoRecordBusiness,
      callback);
  }

  methodInfoSignBusiness = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: business_pb.Business) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  signBusiness(
    request: business_pb.Business,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/SignBusiness',
      request,
      metadata || {},
      this.methodInfoSignBusiness,
      callback);
  }

  methodInfoExistsManager = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: manager_pb.Manager) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  existsManager(
    request: manager_pb.Manager,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/ExistsManager',
      request,
      metadata || {},
      this.methodInfoExistsManager,
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
        '/ding4.BusinessRPC/CreateManager',
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
        '/ding4.BusinessRPC/UpdateManager',
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
        '/ding4.BusinessRPC/FindManager',
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
        '/ding4.BusinessRPC/RecordManager',
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
        '/ding4.BusinessRPC/SignManager',
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
        '/ding4.BusinessRPC/CreateLabel',
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
        '/ding4.BusinessRPC/UpdateLabel',
      request,
      metadata || {},
      this.methodInfoUpdateLabel,
      callback);
  }

  methodInfoDeleteLabel = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: label_pb.Label) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  deleteLabel(
    request: label_pb.Label,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/DeleteLabel',
      request,
      metadata || {},
      this.methodInfoDeleteLabel,
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
        '/ding4.BusinessRPC/AppendLabel',
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
        '/ding4.BusinessRPC/SubtractLabel',
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
        '/ding4.BusinessRPC/FindLabel',
      request,
      metadata || {},
      this.methodInfoFindLabel,
      callback);
  }

  methodInfoRecordLabel = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: label_pb.Label) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  recordLabel(
    request: label_pb.Label,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/RecordLabel',
      request,
      metadata || {},
      this.methodInfoRecordLabel,
      callback);
  }

  methodInfoCreateLinker = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: linker_pb.Linker) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  createLinker(
    request: linker_pb.Linker,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/CreateLinker',
      request,
      metadata || {},
      this.methodInfoCreateLinker,
      callback);
  }

  methodInfoUpdateLinker = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: linker_pb.Linker) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  updateLinker(
    request: linker_pb.Linker,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/UpdateLinker',
      request,
      metadata || {},
      this.methodInfoUpdateLinker,
      callback);
  }

  methodInfoFindLinker = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  findLinker(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/FindLinker',
      request,
      metadata || {},
      this.methodInfoFindLinker,
      callback);
  }

  methodInfoRecordLinker = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: linker_pb.Linker) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  recordLinker(
    request: linker_pb.Linker,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/RecordLinker',
      request,
      metadata || {},
      this.methodInfoRecordLinker,
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
        '/ding4.BusinessRPC/ExistsCustomer',
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
        '/ding4.BusinessRPC/CreateCustomer',
      request,
      metadata || {},
      this.methodInfoCreateCustomer,
      callback);
  }

  methodInfoUploadCustomer = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: customer_pb.CustomerBatch) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  uploadCustomer(
    request: customer_pb.CustomerBatch,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/UploadCustomer',
      request,
      metadata || {},
      this.methodInfoUploadCustomer,
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
        '/ding4.BusinessRPC/UpdateCustomer',
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
        '/ding4.BusinessRPC/FindCustomer',
      request,
      metadata || {},
      this.methodInfoFindCustomer,
      callback);
  }

  methodInfoRecordCustomer = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: customer_pb.Customer) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  recordCustomer(
    request: customer_pb.Customer,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/RecordCustomer',
      request,
      metadata || {},
      this.methodInfoRecordCustomer,
      callback);
  }

  methodInfoSignCustomer = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: customer_pb.Customer) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  signCustomer(
    request: customer_pb.Customer,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/SignCustomer',
      request,
      metadata || {},
      this.methodInfoSignCustomer,
      callback);
  }

  methodInfoLinkCustomer = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: customer_pb.CustomerLink) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  linkCustomer(
    request: customer_pb.CustomerLink,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/LinkCustomer',
      request,
      metadata || {},
      this.methodInfoLinkCustomer,
      callback);
  }

  methodInfoSetCustomerLevel = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: customer$level_pb.CustomerLevel) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  setCustomerLevel(
    request: customer$level_pb.CustomerLevel,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/SetCustomerLevel',
      request,
      metadata || {},
      this.methodInfoSetCustomerLevel,
      callback);
  }

  methodInfoSignInCustomer = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: customer_pb.Customer) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  signInCustomer(
    request: customer_pb.Customer,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/SignInCustomer',
      request,
      metadata || {},
      this.methodInfoSignInCustomer,
      callback);
  }

  methodInfoCreateProduct = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: product_pb.Product) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  createProduct(
    request: product_pb.Product,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/CreateProduct',
      request,
      metadata || {},
      this.methodInfoCreateProduct,
      callback);
  }

  methodInfoUploadProduct = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: product_pb.ProductBatch) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  uploadProduct(
    request: product_pb.ProductBatch,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/UploadProduct',
      request,
      metadata || {},
      this.methodInfoUploadProduct,
      callback);
  }

  methodInfoUpdateProduct = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: product_pb.Product) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  updateProduct(
    request: product_pb.Product,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/UpdateProduct',
      request,
      metadata || {},
      this.methodInfoUpdateProduct,
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
        '/ding4.BusinessRPC/FindProduct',
      request,
      metadata || {},
      this.methodInfoFindProduct,
      callback);
  }

  methodInfoRecordProduct = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: product_pb.Product) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  recordProduct(
    request: product_pb.Product,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/RecordProduct',
      request,
      metadata || {},
      this.methodInfoRecordProduct,
      callback);
  }

  methodInfoLinkProduct = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: product_pb.ProductLink) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  linkProduct(
    request: product_pb.ProductLink,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/LinkProduct',
      request,
      metadata || {},
      this.methodInfoLinkProduct,
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
        '/ding4.BusinessRPC/AddProductToClass',
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
        '/ding4.BusinessRPC/DelProductFromClass',
      request,
      metadata || {},
      this.methodInfoDelProductFromClass,
      callback);
  }

  methodInfoRegisterStore = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: store_pb.Store) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  registerStore(
    request: store_pb.Store,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/RegisterStore',
      request,
      metadata || {},
      this.methodInfoRegisterStore,
      callback);
  }

  methodInfoOpenStore = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: store_pb.Store) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  openStore(
    request: store_pb.Store,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/OpenStore',
      request,
      metadata || {},
      this.methodInfoOpenStore,
      callback);
  }

  methodInfoUpdateStore = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: store_pb.Store) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  updateStore(
    request: store_pb.Store,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/UpdateStore',
      request,
      metadata || {},
      this.methodInfoUpdateStore,
      callback);
  }

  methodInfoFindStore = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  findStore(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/FindStore',
      request,
      metadata || {},
      this.methodInfoFindStore,
      callback);
  }

  methodInfoRecordStore = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: store_pb.Store) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  recordStore(
    request: store_pb.Store,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/RecordStore',
      request,
      metadata || {},
      this.methodInfoRecordStore,
      callback);
  }

  methodInfoCreateRemind = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: remind_pb.Remind) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  createRemind(
    request: remind_pb.Remind,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/CreateRemind',
      request,
      metadata || {},
      this.methodInfoCreateRemind,
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
        '/ding4.BusinessRPC/UpdateRemind',
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
        '/ding4.BusinessRPC/FindRemind',
      request,
      metadata || {},
      this.methodInfoFindRemind,
      callback);
  }

  methodInfoRecordRemind = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: remind_pb.Remind) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  recordRemind(
    request: remind_pb.Remind,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/RecordRemind',
      request,
      metadata || {},
      this.methodInfoRecordRemind,
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
        '/ding4.BusinessRPC/CreateOrder',
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
        '/ding4.BusinessRPC/PaymentOrder',
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
        '/ding4.BusinessRPC/CancelOrder',
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
        '/ding4.BusinessRPC/FindOrder',
      request,
      metadata || {},
      this.methodInfoFindOrder,
      callback);
  }

  methodInfoRecordOrder = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: order_pb.Order) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  recordOrder(
    request: order_pb.Order,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/RecordOrder',
      request,
      metadata || {},
      this.methodInfoRecordOrder,
      callback);
  }

  methodInfoCreateSupplier = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: purchase_pb.Supplier) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  createSupplier(
    request: purchase_pb.Supplier,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/CreateSupplier',
      request,
      metadata || {},
      this.methodInfoCreateSupplier,
      callback);
  }

  methodInfoUpdateSupplier = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: purchase_pb.Supplier) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  updateSupplier(
    request: purchase_pb.Supplier,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/UpdateSupplier',
      request,
      metadata || {},
      this.methodInfoUpdateSupplier,
      callback);
  }

  methodInfoFindSupplier = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  findSupplier(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/FindSupplier',
      request,
      metadata || {},
      this.methodInfoFindSupplier,
      callback);
  }

  methodInfoRecordSupplier = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: purchase_pb.Supplier) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  recordSupplier(
    request: purchase_pb.Supplier,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/RecordSupplier',
      request,
      metadata || {},
      this.methodInfoRecordSupplier,
      callback);
  }

  methodInfoCreateSeller = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: seller_pb.Seller) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  createSeller(
    request: seller_pb.Seller,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/CreateSeller',
      request,
      metadata || {},
      this.methodInfoCreateSeller,
      callback);
  }

  methodInfoUpdateSeller = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: seller_pb.Seller) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  updateSeller(
    request: seller_pb.Seller,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/UpdateSeller',
      request,
      metadata || {},
      this.methodInfoUpdateSeller,
      callback);
  }

  methodInfoFindSeller = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  findSeller(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/FindSeller',
      request,
      metadata || {},
      this.methodInfoFindSeller,
      callback);
  }

  methodInfoRecordSeller = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: seller_pb.Seller) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  recordSeller(
    request: seller_pb.Seller,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/RecordSeller',
      request,
      metadata || {},
      this.methodInfoRecordSeller,
      callback);
  }

  methodInfoCreatePurchase = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: purchase_pb.Purchase) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  createPurchase(
    request: purchase_pb.Purchase,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/CreatePurchase',
      request,
      metadata || {},
      this.methodInfoCreatePurchase,
      callback);
  }

  methodInfoDeletePurchase = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: purchase_pb.Purchase) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  deletePurchase(
    request: purchase_pb.Purchase,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/DeletePurchase',
      request,
      metadata || {},
      this.methodInfoDeletePurchase,
      callback);
  }

  methodInfoFindPurchase = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  findPurchase(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/FindPurchase',
      request,
      metadata || {},
      this.methodInfoFindPurchase,
      callback);
  }

  methodInfoFindInventory = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  findInventory(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/FindInventory',
      request,
      metadata || {},
      this.methodInfoFindInventory,
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
        '/ding4.BusinessRPC/CreateSetting',
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
        '/ding4.BusinessRPC/UpdateSetting',
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
        '/ding4.BusinessRPC/DeleteSetting',
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
        '/ding4.BusinessRPC/FindSetting',
      request,
      metadata || {},
      this.methodInfoFindSetting,
      callback);
  }

  methodInfoRecordSetting = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: setting_pb.Setting) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  recordSetting(
    request: setting_pb.Setting,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/RecordSetting',
      request,
      metadata || {},
      this.methodInfoRecordSetting,
      callback);
  }

}

