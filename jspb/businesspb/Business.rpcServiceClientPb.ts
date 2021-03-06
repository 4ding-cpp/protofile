/**
 * @fileoverview gRPC-Web generated client stub for ding4
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as pingpong_pb from './pingpong_pb';
import * as template_pb from './template_pb';
import * as sql_pb from './sql_pb';
import * as password_pb from './password_pb';
import * as business_pb from './business_pb';
import * as business$sub_pb from './business-sub_pb';
import * as point_pb from './point_pb';
import * as manager_pb from './manager_pb';
import * as customer_pb from './customer_pb';
import * as user$level_pb from './user-level_pb';
import * as product_pb from './product_pb';
import * as label_pb from './label_pb';
import * as user$group_pb from './user-group_pb';
import * as store_pb from './store_pb';
import * as remind_pb from './remind_pb';
import * as order_pb from './order_pb';
import * as purchase_pb from './purchase_pb';
import * as setting_pb from './setting_pb';
import * as freeback_pb from './freeback_pb';
import * as message_pb from './message_pb';
import * as domain_pb from './domain_pb';
import * as sales_pb from './sales_pb';
import * as report_pb from './report_pb';
import * as browse_pb from './browse_pb';

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

  methodInfoChangeOTPToken = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: password_pb.OTP) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  changeOTPToken(
    request: password_pb.OTP,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/ChangeOTPToken',
      request,
      metadata || {},
      this.methodInfoChangeOTPToken,
      callback);
  }

  methodInfoConfirmOTPToken = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: password_pb.OTP) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  confirmOTPToken(
    request: password_pb.OTP,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/ConfirmOTPToken',
      request,
      metadata || {},
      this.methodInfoConfirmOTPToken,
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

  methodInfoFindRecordSelf = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  findRecordSelf(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/FindRecordSelf',
      request,
      metadata || {},
      this.methodInfoFindRecordSelf,
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
        '/ding4.BusinessRPC/FindAnnouncement',
      request,
      metadata || {},
      this.methodInfoFindAnnouncement,
      callback);
  }

  methodInfoFindAnnouncementTemplate = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  findAnnouncementTemplate(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/FindAnnouncementTemplate',
      request,
      metadata || {},
      this.methodInfoFindAnnouncementTemplate,
      callback);
  }

  methodInfoFindInfo = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  findInfo(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/FindInfo',
      request,
      metadata || {},
      this.methodInfoFindInfo,
      callback);
  }

  methodInfoDuplicate = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  duplicate(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/Duplicate',
      request,
      metadata || {},
      this.methodInfoDuplicate,
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

  methodInfoDashboard = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  dashboard(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/Dashboard',
      request,
      metadata || {},
      this.methodInfoDashboard,
      callback);
  }

  methodInfoRank = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  rank(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/Rank',
      request,
      metadata || {},
      this.methodInfoRank,
      callback);
  }

  methodInfoBrowseRecord = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: browse_pb.Browse) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  browseRecord(
    request: browse_pb.Browse,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/BrowseRecord',
      request,
      metadata || {},
      this.methodInfoBrowseRecord,
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

  methodInfoCreateBusinessSub = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: business$sub_pb.BusinessSub) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  createBusinessSub(
    request: business$sub_pb.BusinessSub,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/CreateBusinessSub',
      request,
      metadata || {},
      this.methodInfoCreateBusinessSub,
      callback);
  }

  methodInfoUpdateBusinessSub = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: business$sub_pb.BusinessSub) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  updateBusinessSub(
    request: business$sub_pb.BusinessSub,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/UpdateBusinessSub',
      request,
      metadata || {},
      this.methodInfoUpdateBusinessSub,
      callback);
  }

  methodInfoFindBusinessSub = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  findBusinessSub(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/FindBusinessSub',
      request,
      metadata || {},
      this.methodInfoFindBusinessSub,
      callback);
  }

  methodInfoSignBusinessSub = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  signBusinessSub(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/SignBusinessSub',
      request,
      metadata || {},
      this.methodInfoSignBusinessSub,
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

  methodInfoSignManager = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  signManager(
    request: sql_pb.Query,
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

  methodInfoSignCustomer = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  signCustomer(
    request: sql_pb.Query,
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

  methodInfoCreateUserGroup = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: user$group_pb.UserGroup) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  createUserGroup(
    request: user$group_pb.UserGroup,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/CreateUserGroup',
      request,
      metadata || {},
      this.methodInfoCreateUserGroup,
      callback);
  }

  methodInfoUpdateUserGroup = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: user$group_pb.UserGroup) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  updateUserGroup(
    request: user$group_pb.UserGroup,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/UpdateUserGroup',
      request,
      metadata || {},
      this.methodInfoUpdateUserGroup,
      callback);
  }

  methodInfoFindUserGroup = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  findUserGroup(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/FindUserGroup',
      request,
      metadata || {},
      this.methodInfoFindUserGroup,
      callback);
  }

  methodInfoCreateUserLevel = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: user$level_pb.UserLevel) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  createUserLevel(
    request: user$level_pb.UserLevel,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/CreateUserLevel',
      request,
      metadata || {},
      this.methodInfoCreateUserLevel,
      callback);
  }

  methodInfoUpdateUserLevel = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: user$level_pb.UserLevel) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  updateUserLevel(
    request: user$level_pb.UserLevel,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/UpdateUserLevel',
      request,
      metadata || {},
      this.methodInfoUpdateUserLevel,
      callback);
  }

  methodInfoAddUserToLevel = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: user$level_pb.UserLevel) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  addUserToLevel(
    request: user$level_pb.UserLevel,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/AddUserToLevel',
      request,
      metadata || {},
      this.methodInfoAddUserToLevel,
      callback);
  }

  methodInfoDelUserFromLevel = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: user$level_pb.UserLevel) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  delUserFromLevel(
    request: user$level_pb.UserLevel,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/DelUserFromLevel',
      request,
      metadata || {},
      this.methodInfoDelUserFromLevel,
      callback);
  }

  methodInfoFindUserLevel = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  findUserLevel(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/FindUserLevel',
      request,
      metadata || {},
      this.methodInfoFindUserLevel,
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

  methodInfoModifyProduct = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: product_pb.ProductBatch) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  modifyProduct(
    request: product_pb.ProductBatch,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/ModifyProduct',
      request,
      metadata || {},
      this.methodInfoModifyProduct,
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

  methodInfoQuickProduct = new grpcWeb.AbstractClientBase.MethodInfo(
    product_pb.Product,
    (request: product_pb.Product) => {
      return request.serializeBinary();
    },
    product_pb.Product.deserializeBinary
  );

  quickProduct(
    request: product_pb.Product,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: product_pb.Product) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/QuickProduct',
      request,
      metadata || {},
      this.methodInfoQuickProduct,
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
        '/ding4.BusinessRPC/FindProductShell',
      request,
      metadata || {},
      this.methodInfoFindProductShell,
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
        '/ding4.BusinessRPC/FindActivity',
      request,
      metadata || {},
      this.methodInfoFindActivity,
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
        '/ding4.BusinessRPC/StateOrder',
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
        '/ding4.BusinessRPC/DetailOrder',
      request,
      metadata || {},
      this.methodInfoDetailOrder,
      callback);
  }

  methodInfoUpdateOrderOther = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: order_pb.Order) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  updateOrderOther(
    request: order_pb.Order,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/UpdateOrderOther',
      request,
      metadata || {},
      this.methodInfoUpdateOrderOther,
      callback);
  }

  methodInfoPickUpGoods = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  pickUpGoods(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/PickUpGoods',
      request,
      metadata || {},
      this.methodInfoPickUpGoods,
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
        '/ding4.BusinessRPC/CreateTemplate',
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
        '/ding4.BusinessRPC/UpdateTemplate',
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
        '/ding4.BusinessRPC/DeleteTemplate',
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
        '/ding4.BusinessRPC/FindTemplate',
      request,
      metadata || {},
      this.methodInfoFindTemplate,
      callback);
  }

  methodInfoFindRemindTemplate = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: remind_pb.Remind) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  findRemindTemplate(
    request: remind_pb.Remind,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/FindRemindTemplate',
      request,
      metadata || {},
      this.methodInfoFindRemindTemplate,
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
        '/ding4.BusinessRPC/CreateFreeback',
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
        '/ding4.BusinessRPC/ReadFreeback',
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
        '/ding4.BusinessRPC/AppendFreeback',
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
        '/ding4.BusinessRPC/FindFreeback',
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
        '/ding4.BusinessRPC/SMS',
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
        '/ding4.BusinessRPC/EDM',
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
        '/ding4.BusinessRPC/FindMessage',
      request,
      metadata || {},
      this.methodInfoFindMessage,
      callback);
  }

  methodInfoCreateLogistics = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: order_pb.OrderBatch) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  createLogistics(
    request: order_pb.OrderBatch,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/CreateLogistics',
      request,
      metadata || {},
      this.methodInfoCreateLogistics,
      callback);
  }

  methodInfoCreateReturn = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: order_pb.Order) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  createReturn(
    request: order_pb.Order,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/CreateReturn',
      request,
      metadata || {},
      this.methodInfoCreateReturn,
      callback);
  }

  methodInfoClearReturn = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: order_pb.Order) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  clearReturn(
    request: order_pb.Order,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/ClearReturn',
      request,
      metadata || {},
      this.methodInfoClearReturn,
      callback);
  }

  methodInfoFindOrderFlow = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  findOrderFlow(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/FindOrderFlow',
      request,
      metadata || {},
      this.methodInfoFindOrderFlow,
      callback);
  }

  methodInfoFindPublicIP = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  findPublicIP(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/FindPublicIP',
      request,
      metadata || {},
      this.methodInfoFindPublicIP,
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
        '/ding4.BusinessRPC/UpgradeDomain',
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
        '/ding4.BusinessRPC/DeleteDomain',
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
        '/ding4.BusinessRPC/FindDomain',
      request,
      metadata || {},
      this.methodInfoFindDomain,
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
        '/ding4.BusinessRPC/CreateSales',
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
        '/ding4.BusinessRPC/UpdateSales',
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
        '/ding4.BusinessRPC/FindSales',
      request,
      metadata || {},
      this.methodInfoFindSales,
      callback);
  }

  methodInfoReportPayment = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: report_pb.PaymentRp) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  reportPayment(
    request: report_pb.PaymentRp,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/ReportPayment',
      request,
      metadata || {},
      this.methodInfoReportPayment,
      callback);
  }

  methodInfoReportStore = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: report_pb.StoreRp) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  reportStore(
    request: report_pb.StoreRp,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/ReportStore',
      request,
      metadata || {},
      this.methodInfoReportStore,
      callback);
  }

  methodInfoReportSales = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: report_pb.SalesRp) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  reportSales(
    request: report_pb.SalesRp,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/ReportSales',
      request,
      metadata || {},
      this.methodInfoReportSales,
      callback);
  }

  methodInfoReportCustomer = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: report_pb.CustomerRp) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  reportCustomer(
    request: report_pb.CustomerRp,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/ReportCustomer',
      request,
      metadata || {},
      this.methodInfoReportCustomer,
      callback);
  }

  methodInfoReportProduct = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: report_pb.ProductRp) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  reportProduct(
    request: report_pb.ProductRp,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/ReportProduct',
      request,
      metadata || {},
      this.methodInfoReportProduct,
      callback);
  }

  methodInfoReportFavorite = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: report_pb.FavoriteRp) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  reportFavorite(
    request: report_pb.FavoriteRp,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/ReportFavorite',
      request,
      metadata || {},
      this.methodInfoReportFavorite,
      callback);
  }

  methodInfoReportCar = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: report_pb.CarRp) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  reportCar(
    request: report_pb.CarRp,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/ReportCar',
      request,
      metadata || {},
      this.methodInfoReportCar,
      callback);
  }

  methodInfoReportRegister = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: report_pb.RegisterRp) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  reportRegister(
    request: report_pb.RegisterRp,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.BusinessRPC/ReportRegister',
      request,
      metadata || {},
      this.methodInfoReportRegister,
      callback);
  }

}

