/**
 * @fileoverview gRPC-Web generated client stub for ding4
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as sql_pb from './sql_pb';
import * as password_pb from './password_pb';
import * as admin_pb from './admin_pb';
import * as business_pb from './business_pb';
import * as host$map_pb from './host-map_pb';
import * as label_pb from './label_pb';
import * as info_pb from './info_pb';
import * as announcement_pb from './announcement_pb';
import * as point_pb from './point_pb';
import * as adv_pb from './adv_pb';
import * as app_pb from './app_pb';
import * as setting_pb from './setting_pb';
import * as external_pb from './external_pb';

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
    google_protobuf_struct_pb.Value,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    google_protobuf_struct_pb.Value.deserializeBinary
  );

  ping(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_struct_pb.Value) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.AdminRPC/Ping',
      request,
      metadata || {},
      this.methodInfoPing,
      callback);
  }

  methodInfoTime = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_struct_pb.Value,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    google_protobuf_struct_pb.Value.deserializeBinary
  );

  time(
    request: sql_pb.Query,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/ding4.AdminRPC/Time',
      request,
      metadata || {},
      this.methodInfoTime);
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
        '/ding4.AdminRPC/WhoAmI',
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
        '/ding4.AdminRPC/FindPermission',
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
        '/ding4.AdminRPC/FindRecord',
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
        '/ding4.AdminRPC/FindSign',
      request,
      metadata || {},
      this.methodInfoFindSign,
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

  methodInfoSignAdmin = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  signAdmin(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.AdminRPC/SignAdmin',
      request,
      metadata || {},
      this.methodInfoSignAdmin,
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

  methodInfoPrepareBusiness = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: business_pb.Business) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  prepareBusiness(
    request: business_pb.Business,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.AdminRPC/PrepareBusiness',
      request,
      metadata || {},
      this.methodInfoPrepareBusiness,
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

  methodInfoCreateHostMap = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: host$map_pb.HostMap) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  createHostMap(
    request: host$map_pb.HostMap,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.AdminRPC/CreateHostMap',
      request,
      metadata || {},
      this.methodInfoCreateHostMap,
      callback);
  }

  methodInfoDeleteHostMap = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: host$map_pb.HostMap) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  deleteHostMap(
    request: host$map_pb.HostMap,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.AdminRPC/DeleteHostMap',
      request,
      metadata || {},
      this.methodInfoDeleteHostMap,
      callback);
  }

  methodInfoFindHostMap = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  findHostMap(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.AdminRPC/FindHostMap',
      request,
      metadata || {},
      this.methodInfoFindHostMap,
      callback);
  }

  methodInfoRecordHostMap = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  recordHostMap(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.AdminRPC/RecordHostMap',
      request,
      metadata || {},
      this.methodInfoRecordHostMap,
      callback);
  }

  methodInfoFlushHostMap = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  flushHostMap(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.AdminRPC/FlushHostMap',
      request,
      metadata || {},
      this.methodInfoFlushHostMap,
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
        '/ding4.AdminRPC/CreateLabel',
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
        '/ding4.AdminRPC/UpdateLabel',
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
        '/ding4.AdminRPC/AppendLabel',
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
        '/ding4.AdminRPC/SubtractLabel',
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
        '/ding4.AdminRPC/FindLabel',
      request,
      metadata || {},
      this.methodInfoFindLabel,
      callback);
  }

  methodInfoRecordLabel = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  recordLabel(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.AdminRPC/RecordLabel',
      request,
      metadata || {},
      this.methodInfoRecordLabel,
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

  methodInfoDeleteInfo = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: info_pb.Info) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  deleteInfo(
    request: info_pb.Info,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.AdminRPC/DeleteInfo',
      request,
      metadata || {},
      this.methodInfoDeleteInfo,
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

  methodInfoRecordInfo = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  recordInfo(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.AdminRPC/RecordInfo',
      request,
      metadata || {},
      this.methodInfoRecordInfo,
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

  methodInfoDeleteAnnouncement = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: announcement_pb.Announcement) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  deleteAnnouncement(
    request: announcement_pb.Announcement,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.AdminRPC/DeleteAnnouncement',
      request,
      metadata || {},
      this.methodInfoDeleteAnnouncement,
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

  methodInfoRecordAnnouncement = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  recordAnnouncement(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.AdminRPC/RecordAnnouncement',
      request,
      metadata || {},
      this.methodInfoRecordAnnouncement,
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

  methodInfoRecordPointBonus = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  recordPointBonus(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.AdminRPC/RecordPointBonus',
      request,
      metadata || {},
      this.methodInfoRecordPointBonus,
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
        '/ding4.AdminRPC/CancelPoint',
      request,
      metadata || {},
      this.methodInfoCancelPoint,
      callback);
  }

  methodInfoUpdatePoint = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: point_pb.Point) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  updatePoint(
    request: point_pb.Point,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.AdminRPC/UpdatePoint',
      request,
      metadata || {},
      this.methodInfoUpdatePoint,
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

  methodInfoRecordPoint = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  recordPoint(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.AdminRPC/RecordPoint',
      request,
      metadata || {},
      this.methodInfoRecordPoint,
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

  methodInfoComfirmPointBill = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: point_pb.PointBill) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  comfirmPointBill(
    request: point_pb.PointBill,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.AdminRPC/ComfirmPointBill',
      request,
      metadata || {},
      this.methodInfoComfirmPointBill,
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
        '/ding4.AdminRPC/FindPointDetail',
      request,
      metadata || {},
      this.methodInfoFindPointDetail,
      callback);
  }

  methodInfoRecordPointBill = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  recordPointBill(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.AdminRPC/RecordPointBill',
      request,
      metadata || {},
      this.methodInfoRecordPointBill,
      callback);
  }

  methodInfoRecordPointDetail = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  recordPointDetail(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.AdminRPC/RecordPointDetail',
      request,
      metadata || {},
      this.methodInfoRecordPointDetail,
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

  methodInfoRecordPointFlow = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  recordPointFlow(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.AdminRPC/RecordPointFlow',
      request,
      metadata || {},
      this.methodInfoRecordPointFlow,
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

  methodInfoExchangeAdv = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: adv_pb.Adv) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  exchangeAdv(
    request: adv_pb.Adv,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.AdminRPC/ExchangeAdv',
      request,
      metadata || {},
      this.methodInfoExchangeAdv,
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

  methodInfoRecordAdv = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  recordAdv(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.AdminRPC/RecordAdv',
      request,
      metadata || {},
      this.methodInfoRecordAdv,
      callback);
  }

  methodInfoCreateAdvItem = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: adv_pb.AdvItem) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  createAdvItem(
    request: adv_pb.AdvItem,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.AdminRPC/CreateAdvItem',
      request,
      metadata || {},
      this.methodInfoCreateAdvItem,
      callback);
  }

  methodInfoUpdateAdvItem = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: adv_pb.AdvItem) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  updateAdvItem(
    request: adv_pb.AdvItem,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.AdminRPC/UpdateAdvItem',
      request,
      metadata || {},
      this.methodInfoUpdateAdvItem,
      callback);
  }

  methodInfoDeleteAdvItem = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: adv_pb.AdvItem) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  deleteAdvItem(
    request: adv_pb.AdvItem,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.AdminRPC/DeleteAdvItem',
      request,
      metadata || {},
      this.methodInfoDeleteAdvItem,
      callback);
  }

  methodInfoFindAdvItem = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  findAdvItem(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.AdminRPC/FindAdvItem',
      request,
      metadata || {},
      this.methodInfoFindAdvItem,
      callback);
  }

  methodInfoRecordAdvItem = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  recordAdvItem(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.AdminRPC/RecordAdvItem',
      request,
      metadata || {},
      this.methodInfoRecordAdvItem,
      callback);
  }

  methodInfoCreateApp = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: app_pb.App) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  createApp(
    request: app_pb.App,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.AdminRPC/CreateApp',
      request,
      metadata || {},
      this.methodInfoCreateApp,
      callback);
  }

  methodInfoApproveApp = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: app_pb.App) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  approveApp(
    request: app_pb.App,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.AdminRPC/ApproveApp',
      request,
      metadata || {},
      this.methodInfoApproveApp,
      callback);
  }

  methodInfoCancelApp = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: app_pb.App) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  cancelApp(
    request: app_pb.App,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.AdminRPC/CancelApp',
      request,
      metadata || {},
      this.methodInfoCancelApp,
      callback);
  }

  methodInfoUpdateApp = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: app_pb.App) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  updateApp(
    request: app_pb.App,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.AdminRPC/UpdateApp',
      request,
      metadata || {},
      this.methodInfoUpdateApp,
      callback);
  }

  methodInfoFindApp = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  findApp(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.AdminRPC/FindApp',
      request,
      metadata || {},
      this.methodInfoFindApp,
      callback);
  }

  methodInfoRecordApp = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  recordApp(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.AdminRPC/RecordApp',
      request,
      metadata || {},
      this.methodInfoRecordApp,
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
        '/ding4.AdminRPC/CreateSetting',
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
        '/ding4.AdminRPC/UpdateSetting',
      request,
      metadata || {},
      this.methodInfoUpdateSetting,
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
        '/ding4.AdminRPC/FindSetting',
      request,
      metadata || {},
      this.methodInfoFindSetting,
      callback);
  }

  methodInfoRecordSetting = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  recordSetting(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.AdminRPC/RecordSetting',
      request,
      metadata || {},
      this.methodInfoRecordSetting,
      callback);
  }

  methodInfoCreateExternal = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: external_pb.External) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  createExternal(
    request: external_pb.External,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.AdminRPC/CreateExternal',
      request,
      metadata || {},
      this.methodInfoCreateExternal,
      callback);
  }

  methodInfoUpdateExternal = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: external_pb.External) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  updateExternal(
    request: external_pb.External,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.AdminRPC/UpdateExternal',
      request,
      metadata || {},
      this.methodInfoUpdateExternal,
      callback);
  }

  methodInfoFindExternal = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  findExternal(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.AdminRPC/FindExternal',
      request,
      metadata || {},
      this.methodInfoFindExternal,
      callback);
  }

  methodInfoRecordExternal = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  recordExternal(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.AdminRPC/RecordExternal',
      request,
      metadata || {},
      this.methodInfoRecordExternal,
      callback);
  }

}

