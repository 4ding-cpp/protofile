/**
 * @fileoverview gRPC-Web generated client stub for ding4
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as sql_pb from './sql_pb';
import * as admin_pb from './admin_pb';
import * as business_pb from './business_pb';
import * as info_pb from './info_pb';
import * as announcement_pb from './announcement_pb';
import * as point_pb from './point_pb';
import * as adv_pb from './adv_pb';

export class AdminRPCClient {
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
    google_protobuf_wrappers_pb.StringValue,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    google_protobuf_wrappers_pb.StringValue.deserializeBinary
  );

  ping(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_wrappers_pb.StringValue) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.AdminRPC/Ping',
      request,
      metadata || {},
      this.methodInfoPing,
      callback);
  }

  methodInfoWhoAmI = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  whoAmI(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.AdminRPC/WhoAmI',
      request,
      metadata || {},
      this.methodInfoWhoAmI,
      callback);
  }

  methodInfoChangePassword = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: admin_pb.Admin) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  changePassword(
    request: admin_pb.Admin,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.AdminRPC/ChangePassword',
      request,
      metadata || {},
      this.methodInfoChangePassword,
      callback);
  }

  methodInfoChangeInfo = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: admin_pb.Admin) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  changeInfo(
    request: admin_pb.Admin,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.AdminRPC/ChangeInfo',
      request,
      metadata || {},
      this.methodInfoChangeInfo,
      callback);
  }

  methodInfoChangeWhitelist = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: admin_pb.Admin) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  changeWhitelist(
    request: admin_pb.Admin,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.AdminRPC/ChangeWhitelist',
      request,
      metadata || {},
      this.methodInfoChangeWhitelist,
      callback);
  }

  methodInfoCreateAdmin = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: admin_pb.Admin) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  createAdmin(
    request: admin_pb.Admin,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.AdminRPC/CreateAdmin',
      request,
      metadata || {},
      this.methodInfoCreateAdmin,
      callback);
  }

  methodInfoUpdateAdmin = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: admin_pb.Admin) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  updateAdmin(
    request: admin_pb.Admin,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.AdminRPC/UpdateAdmin',
      request,
      metadata || {},
      this.methodInfoUpdateAdmin,
      callback);
  }

  methodInfoFindAdmin = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  findAdmin(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.AdminRPC/FindAdmin',
      request,
      metadata || {},
      this.methodInfoFindAdmin,
      callback);
  }

  methodInfoRecordAdmin = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  recordAdmin(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.AdminRPC/RecordAdmin',
      request,
      metadata || {},
      this.methodInfoRecordAdmin,
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
        '/ding4.AdminRPC/CreateBusiness',
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
        '/ding4.AdminRPC/UpdateBusiness',
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
        '/ding4.AdminRPC/FindBusiness',
      request,
      metadata || {},
      this.methodInfoFindBusiness,
      callback);
  }

  methodInfoSignBusiness = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  signBusiness(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.AdminRPC/SignBusiness',
      request,
      metadata || {},
      this.methodInfoSignBusiness,
      callback);
  }

  methodInfoRecordBusiness = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  recordBusiness(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.AdminRPC/RecordBusiness',
      request,
      metadata || {},
      this.methodInfoRecordBusiness,
      callback);
  }

  methodInfoCreateInfo = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: info_pb.Info) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  createInfo(
    request: info_pb.Info,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.AdminRPC/CreateInfo',
      request,
      metadata || {},
      this.methodInfoCreateInfo,
      callback);
  }

  methodInfoUpdateInfo = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: info_pb.Info) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  updateInfo(
    request: info_pb.Info,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.AdminRPC/UpdateInfo',
      request,
      metadata || {},
      this.methodInfoUpdateInfo,
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
        '/ding4.AdminRPC/FindInfo',
      request,
      metadata || {},
      this.methodInfoFindInfo,
      callback);
  }

  methodInfoCreateAnnouncement = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: announcement_pb.Announcement) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  createAnnouncement(
    request: announcement_pb.Announcement,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.AdminRPC/CreateAnnouncement',
      request,
      metadata || {},
      this.methodInfoCreateAnnouncement,
      callback);
  }

  methodInfoUpdateAnnouncement = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: announcement_pb.Announcement) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  updateAnnouncement(
    request: announcement_pb.Announcement,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.AdminRPC/UpdateAnnouncement',
      request,
      metadata || {},
      this.methodInfoUpdateAnnouncement,
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
        '/ding4.AdminRPC/FindAnnouncement',
      request,
      metadata || {},
      this.methodInfoFindAnnouncement,
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
        '/ding4.AdminRPC/CreatePoint',
      request,
      metadata || {},
      this.methodInfoCreatePoint,
      callback);
  }

  methodInfoComfirmPoint = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: point_pb.Point) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  comfirmPoint(
    request: point_pb.Point,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.AdminRPC/ComfirmPoint',
      request,
      metadata || {},
      this.methodInfoComfirmPoint,
      callback);
  }

  methodInfoApprovePoint = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: point_pb.Point) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  approvePoint(
    request: point_pb.Point,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.AdminRPC/ApprovePoint',
      request,
      metadata || {},
      this.methodInfoApprovePoint,
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
        '/ding4.AdminRPC/FindPoint',
      request,
      metadata || {},
      this.methodInfoFindPoint,
      callback);
  }

  methodInfoCreatePointFlow = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: point_pb.PointFlow) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  createPointFlow(
    request: point_pb.PointFlow,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.AdminRPC/CreatePointFlow',
      request,
      metadata || {},
      this.methodInfoCreatePointFlow,
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
        '/ding4.AdminRPC/FindPointFlow',
      request,
      metadata || {},
      this.methodInfoFindPointFlow,
      callback);
  }

  methodInfoCreatePointBill = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: point_pb.PointBill) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  createPointBill(
    request: point_pb.PointBill,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.AdminRPC/CreatePointBill',
      request,
      metadata || {},
      this.methodInfoCreatePointBill,
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
        '/ding4.AdminRPC/FindPointBill',
      request,
      metadata || {},
      this.methodInfoFindPointBill,
      callback);
  }

  methodInfoCreatePointBonus = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: point_pb.PointBonus) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  createPointBonus(
    request: point_pb.PointBonus,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.AdminRPC/CreatePointBonus',
      request,
      metadata || {},
      this.methodInfoCreatePointBonus,
      callback);
  }

  methodInfoFindPointBonus = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  findPointBonus(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.AdminRPC/FindPointBonus',
      request,
      metadata || {},
      this.methodInfoFindPointBonus,
      callback);
  }

  methodInfoCreateAdv = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: adv_pb.Adv) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  createAdv(
    request: adv_pb.Adv,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.AdminRPC/CreateAdv',
      request,
      metadata || {},
      this.methodInfoCreateAdv,
      callback);
  }

  methodInfoApproveAdv = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: adv_pb.Adv) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  approveAdv(
    request: adv_pb.Adv,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.AdminRPC/ApproveAdv',
      request,
      metadata || {},
      this.methodInfoApproveAdv,
      callback);
  }

  methodInfoUpdateAdv = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: adv_pb.Adv) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  updateAdv(
    request: adv_pb.Adv,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.AdminRPC/UpdateAdv',
      request,
      metadata || {},
      this.methodInfoUpdateAdv,
      callback);
  }

  methodInfoFindAdv = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  findAdv(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.AdminRPC/FindAdv',
      request,
      metadata || {},
      this.methodInfoFindAdv,
      callback);
  }

  methodInfoCreateAdvRecord = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: adv_pb.AdvRecord) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  createAdvRecord(
    request: adv_pb.AdvRecord,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.AdminRPC/CreateAdvRecord',
      request,
      metadata || {},
      this.methodInfoCreateAdvRecord,
      callback);
  }

  methodInfoUpdateAdvRecord = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: adv_pb.AdvRecord) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  updateAdvRecord(
    request: adv_pb.AdvRecord,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.AdminRPC/UpdateAdvRecord',
      request,
      metadata || {},
      this.methodInfoUpdateAdvRecord,
      callback);
  }

  methodInfoFindAdvRecord = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  findAdvRecord(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.AdminRPC/FindAdvRecord',
      request,
      metadata || {},
      this.methodInfoFindAdvRecord,
      callback);
  }

}

