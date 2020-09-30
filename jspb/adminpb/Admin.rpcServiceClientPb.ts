/**
 * @fileoverview gRPC-Web generated client stub for ding4
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as adv_pb from './adv_pb';
import * as admin_pb from './admin_pb';
import * as sql_pb from './sql_pb';
import * as app_pb from './app_pb';
import * as system$set_pb from './system-set_pb';
import * as domain_pb from './domain_pb';
import * as business_pb from './business_pb';
import * as label_pb from './label_pb';
import * as pingpong_pb from './pingpong_pb';
import * as message_pb from './message_pb';
import * as info_pb from './info_pb';
import * as announcement_pb from './announcement_pb';
import * as point_pb from './point_pb';
import * as password_pb from './password_pb';


export class AdminRPCClient {
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

  methodInfoPing = new grpcWeb.AbstractClientBase.MethodInfo(
    pingpong_pb.PingPong,
    (request: pingpong_pb.PingPong) => {
      return request.serializeBinary();
    },
    pingpong_pb.PingPong.deserializeBinary
  );

  ping(
    request: pingpong_pb.PingPong,
    metadata: grpcWeb.Metadata | null): Promise<pingpong_pb.PingPong>;

  ping(
    request: pingpong_pb.PingPong,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: pingpong_pb.PingPong) => void): grpcWeb.ClientReadableStream<pingpong_pb.PingPong>;

  ping(
    request: pingpong_pb.PingPong,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: pingpong_pb.PingPong) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.AdminRPC/Ping',
        request,
        metadata || {},
        this.methodInfoPing,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.AdminRPC/Ping',
    request,
    metadata || {},
    this.methodInfoPing);
  }

  methodInfoStream = new grpcWeb.AbstractClientBase.MethodInfo(
    pingpong_pb.PingPong,
    (request: pingpong_pb.PingPong) => {
      return request.serializeBinary();
    },
    pingpong_pb.PingPong.deserializeBinary
  );

  stream(
    request: pingpong_pb.PingPong,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/ding4.AdminRPC/Stream',
      request,
      metadata || {},
      this.methodInfoStream);
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
          '/ding4.AdminRPC/WhoAmI',
        request,
        metadata || {},
        this.methodInfoWhoAmI,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.AdminRPC/WhoAmI',
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
          '/ding4.AdminRPC/ChangePassword',
        request,
        metadata || {},
        this.methodInfoChangePassword,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.AdminRPC/ChangePassword',
    request,
    metadata || {},
    this.methodInfoChangePassword);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  changeInfo(
    request: admin_pb.Admin,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  changeInfo(
    request: admin_pb.Admin,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.AdminRPC/ChangeInfo',
        request,
        metadata || {},
        this.methodInfoChangeInfo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.AdminRPC/ChangeInfo',
    request,
    metadata || {},
    this.methodInfoChangeInfo);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  changeWhitelist(
    request: admin_pb.Admin,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  changeWhitelist(
    request: admin_pb.Admin,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.AdminRPC/ChangeWhitelist',
        request,
        metadata || {},
        this.methodInfoChangeWhitelist,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.AdminRPC/ChangeWhitelist',
    request,
    metadata || {},
    this.methodInfoChangeWhitelist);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  findPermission(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  findPermission(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.AdminRPC/FindPermission',
        request,
        metadata || {},
        this.methodInfoFindPermission,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.AdminRPC/FindPermission',
    request,
    metadata || {},
    this.methodInfoFindPermission);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  findRecord(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  findRecord(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.AdminRPC/FindRecord',
        request,
        metadata || {},
        this.methodInfoFindRecord,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.AdminRPC/FindRecord',
    request,
    metadata || {},
    this.methodInfoFindRecord);
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
          '/ding4.AdminRPC/FindSign',
        request,
        metadata || {},
        this.methodInfoFindSign,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.AdminRPC/FindSign',
    request,
    metadata || {},
    this.methodInfoFindSign);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  createAdmin(
    request: admin_pb.Admin,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  createAdmin(
    request: admin_pb.Admin,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.AdminRPC/CreateAdmin',
        request,
        metadata || {},
        this.methodInfoCreateAdmin,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.AdminRPC/CreateAdmin',
    request,
    metadata || {},
    this.methodInfoCreateAdmin);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  updateAdmin(
    request: admin_pb.Admin,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  updateAdmin(
    request: admin_pb.Admin,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.AdminRPC/UpdateAdmin',
        request,
        metadata || {},
        this.methodInfoUpdateAdmin,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.AdminRPC/UpdateAdmin',
    request,
    metadata || {},
    this.methodInfoUpdateAdmin);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  findAdmin(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  findAdmin(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.AdminRPC/FindAdmin',
        request,
        metadata || {},
        this.methodInfoFindAdmin,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.AdminRPC/FindAdmin',
    request,
    metadata || {},
    this.methodInfoFindAdmin);
  }

  methodInfoRecordAdmin = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: admin_pb.Admin) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  recordAdmin(
    request: admin_pb.Admin,
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  recordAdmin(
    request: admin_pb.Admin,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  recordAdmin(
    request: admin_pb.Admin,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.AdminRPC/RecordAdmin',
        request,
        metadata || {},
        this.methodInfoRecordAdmin,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.AdminRPC/RecordAdmin',
    request,
    metadata || {},
    this.methodInfoRecordAdmin);
  }

  methodInfoSignAdmin = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: admin_pb.Admin) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  signAdmin(
    request: admin_pb.Admin,
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  signAdmin(
    request: admin_pb.Admin,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  signAdmin(
    request: admin_pb.Admin,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.AdminRPC/SignAdmin',
        request,
        metadata || {},
        this.methodInfoSignAdmin,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.AdminRPC/SignAdmin',
    request,
    metadata || {},
    this.methodInfoSignAdmin);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  createBusiness(
    request: business_pb.Business,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  createBusiness(
    request: business_pb.Business,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.AdminRPC/CreateBusiness',
        request,
        metadata || {},
        this.methodInfoCreateBusiness,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.AdminRPC/CreateBusiness',
    request,
    metadata || {},
    this.methodInfoCreateBusiness);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  prepareBusiness(
    request: business_pb.Business,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  prepareBusiness(
    request: business_pb.Business,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.AdminRPC/PrepareBusiness',
        request,
        metadata || {},
        this.methodInfoPrepareBusiness,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.AdminRPC/PrepareBusiness',
    request,
    metadata || {},
    this.methodInfoPrepareBusiness);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  updateBusiness(
    request: business_pb.Business,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  updateBusiness(
    request: business_pb.Business,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.AdminRPC/UpdateBusiness',
        request,
        metadata || {},
        this.methodInfoUpdateBusiness,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.AdminRPC/UpdateBusiness',
    request,
    metadata || {},
    this.methodInfoUpdateBusiness);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  findBusiness(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  findBusiness(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.AdminRPC/FindBusiness',
        request,
        metadata || {},
        this.methodInfoFindBusiness,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.AdminRPC/FindBusiness',
    request,
    metadata || {},
    this.methodInfoFindBusiness);
  }

  methodInfoFindStore = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: business_pb.Business) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  findStore(
    request: business_pb.Business,
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  findStore(
    request: business_pb.Business,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  findStore(
    request: business_pb.Business,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.AdminRPC/FindStore',
        request,
        metadata || {},
        this.methodInfoFindStore,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.AdminRPC/FindStore',
    request,
    metadata || {},
    this.methodInfoFindStore);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  recordBusiness(
    request: business_pb.Business,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  recordBusiness(
    request: business_pb.Business,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.AdminRPC/RecordBusiness',
        request,
        metadata || {},
        this.methodInfoRecordBusiness,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.AdminRPC/RecordBusiness',
    request,
    metadata || {},
    this.methodInfoRecordBusiness);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  signBusiness(
    request: business_pb.Business,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  signBusiness(
    request: business_pb.Business,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.AdminRPC/SignBusiness',
        request,
        metadata || {},
        this.methodInfoSignBusiness,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.AdminRPC/SignBusiness',
    request,
    metadata || {},
    this.methodInfoSignBusiness);
  }

  methodInfoCreateDomain = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: domain_pb.Domain) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  createDomain(
    request: domain_pb.Domain,
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  createDomain(
    request: domain_pb.Domain,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  createDomain(
    request: domain_pb.Domain,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.AdminRPC/CreateDomain',
        request,
        metadata || {},
        this.methodInfoCreateDomain,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.AdminRPC/CreateDomain',
    request,
    metadata || {},
    this.methodInfoCreateDomain);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  deleteDomain(
    request: domain_pb.Domain,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  deleteDomain(
    request: domain_pb.Domain,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.AdminRPC/DeleteDomain',
        request,
        metadata || {},
        this.methodInfoDeleteDomain,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.AdminRPC/DeleteDomain',
    request,
    metadata || {},
    this.methodInfoDeleteDomain);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  findDomain(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  findDomain(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.AdminRPC/FindDomain',
        request,
        metadata || {},
        this.methodInfoFindDomain,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.AdminRPC/FindDomain',
    request,
    metadata || {},
    this.methodInfoFindDomain);
  }

  methodInfoRecordDomain = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: domain_pb.Domain) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  recordDomain(
    request: domain_pb.Domain,
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  recordDomain(
    request: domain_pb.Domain,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  recordDomain(
    request: domain_pb.Domain,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.AdminRPC/RecordDomain',
        request,
        metadata || {},
        this.methodInfoRecordDomain,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.AdminRPC/RecordDomain',
    request,
    metadata || {},
    this.methodInfoRecordDomain);
  }

  methodInfoFlushDomain = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  flushDomain(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  flushDomain(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  flushDomain(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.AdminRPC/FlushDomain',
        request,
        metadata || {},
        this.methodInfoFlushDomain,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.AdminRPC/FlushDomain',
    request,
    metadata || {},
    this.methodInfoFlushDomain);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  createLabel(
    request: label_pb.Label,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  createLabel(
    request: label_pb.Label,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.AdminRPC/CreateLabel',
        request,
        metadata || {},
        this.methodInfoCreateLabel,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.AdminRPC/CreateLabel',
    request,
    metadata || {},
    this.methodInfoCreateLabel);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  updateLabel(
    request: label_pb.Label,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  updateLabel(
    request: label_pb.Label,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.AdminRPC/UpdateLabel',
        request,
        metadata || {},
        this.methodInfoUpdateLabel,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.AdminRPC/UpdateLabel',
    request,
    metadata || {},
    this.methodInfoUpdateLabel);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  deleteLabel(
    request: label_pb.Label,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  deleteLabel(
    request: label_pb.Label,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.AdminRPC/DeleteLabel',
        request,
        metadata || {},
        this.methodInfoDeleteLabel,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.AdminRPC/DeleteLabel',
    request,
    metadata || {},
    this.methodInfoDeleteLabel);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  appendLabel(
    request: label_pb.Label,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  appendLabel(
    request: label_pb.Label,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.AdminRPC/AppendLabel',
        request,
        metadata || {},
        this.methodInfoAppendLabel,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.AdminRPC/AppendLabel',
    request,
    metadata || {},
    this.methodInfoAppendLabel);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  subtractLabel(
    request: label_pb.Label,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  subtractLabel(
    request: label_pb.Label,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.AdminRPC/SubtractLabel',
        request,
        metadata || {},
        this.methodInfoSubtractLabel,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.AdminRPC/SubtractLabel',
    request,
    metadata || {},
    this.methodInfoSubtractLabel);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  findLabel(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  findLabel(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.AdminRPC/FindLabel',
        request,
        metadata || {},
        this.methodInfoFindLabel,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.AdminRPC/FindLabel',
    request,
    metadata || {},
    this.methodInfoFindLabel);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  recordLabel(
    request: label_pb.Label,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  recordLabel(
    request: label_pb.Label,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.AdminRPC/RecordLabel',
        request,
        metadata || {},
        this.methodInfoRecordLabel,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.AdminRPC/RecordLabel',
    request,
    metadata || {},
    this.methodInfoRecordLabel);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  createInfo(
    request: info_pb.Info,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  createInfo(
    request: info_pb.Info,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.AdminRPC/CreateInfo',
        request,
        metadata || {},
        this.methodInfoCreateInfo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.AdminRPC/CreateInfo',
    request,
    metadata || {},
    this.methodInfoCreateInfo);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  updateInfo(
    request: info_pb.Info,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  updateInfo(
    request: info_pb.Info,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.AdminRPC/UpdateInfo',
        request,
        metadata || {},
        this.methodInfoUpdateInfo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.AdminRPC/UpdateInfo',
    request,
    metadata || {},
    this.methodInfoUpdateInfo);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  deleteInfo(
    request: info_pb.Info,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  deleteInfo(
    request: info_pb.Info,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.AdminRPC/DeleteInfo',
        request,
        metadata || {},
        this.methodInfoDeleteInfo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.AdminRPC/DeleteInfo',
    request,
    metadata || {},
    this.methodInfoDeleteInfo);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  findInfo(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  findInfo(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.AdminRPC/FindInfo',
        request,
        metadata || {},
        this.methodInfoFindInfo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.AdminRPC/FindInfo',
    request,
    metadata || {},
    this.methodInfoFindInfo);
  }

  methodInfoRecordInfo = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: info_pb.Info) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  recordInfo(
    request: info_pb.Info,
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  recordInfo(
    request: info_pb.Info,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  recordInfo(
    request: info_pb.Info,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.AdminRPC/RecordInfo',
        request,
        metadata || {},
        this.methodInfoRecordInfo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.AdminRPC/RecordInfo',
    request,
    metadata || {},
    this.methodInfoRecordInfo);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  createAnnouncement(
    request: announcement_pb.Announcement,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  createAnnouncement(
    request: announcement_pb.Announcement,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.AdminRPC/CreateAnnouncement',
        request,
        metadata || {},
        this.methodInfoCreateAnnouncement,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.AdminRPC/CreateAnnouncement',
    request,
    metadata || {},
    this.methodInfoCreateAnnouncement);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  updateAnnouncement(
    request: announcement_pb.Announcement,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  updateAnnouncement(
    request: announcement_pb.Announcement,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.AdminRPC/UpdateAnnouncement',
        request,
        metadata || {},
        this.methodInfoUpdateAnnouncement,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.AdminRPC/UpdateAnnouncement',
    request,
    metadata || {},
    this.methodInfoUpdateAnnouncement);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  deleteAnnouncement(
    request: announcement_pb.Announcement,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  deleteAnnouncement(
    request: announcement_pb.Announcement,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.AdminRPC/DeleteAnnouncement',
        request,
        metadata || {},
        this.methodInfoDeleteAnnouncement,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.AdminRPC/DeleteAnnouncement',
    request,
    metadata || {},
    this.methodInfoDeleteAnnouncement);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  findAnnouncement(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  findAnnouncement(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.AdminRPC/FindAnnouncement',
        request,
        metadata || {},
        this.methodInfoFindAnnouncement,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.AdminRPC/FindAnnouncement',
    request,
    metadata || {},
    this.methodInfoFindAnnouncement);
  }

  methodInfoRecordAnnouncement = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: announcement_pb.Announcement) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  recordAnnouncement(
    request: announcement_pb.Announcement,
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  recordAnnouncement(
    request: announcement_pb.Announcement,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  recordAnnouncement(
    request: announcement_pb.Announcement,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.AdminRPC/RecordAnnouncement',
        request,
        metadata || {},
        this.methodInfoRecordAnnouncement,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.AdminRPC/RecordAnnouncement',
    request,
    metadata || {},
    this.methodInfoRecordAnnouncement);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  createPointBonus(
    request: point_pb.PointBonus,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  createPointBonus(
    request: point_pb.PointBonus,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.AdminRPC/CreatePointBonus',
        request,
        metadata || {},
        this.methodInfoCreatePointBonus,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.AdminRPC/CreatePointBonus',
    request,
    metadata || {},
    this.methodInfoCreatePointBonus);
  }

  methodInfoUpdatePointBonus = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: point_pb.PointBonus) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  updatePointBonus(
    request: point_pb.PointBonus,
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  updatePointBonus(
    request: point_pb.PointBonus,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  updatePointBonus(
    request: point_pb.PointBonus,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.AdminRPC/UpdatePointBonus',
        request,
        metadata || {},
        this.methodInfoUpdatePointBonus,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.AdminRPC/UpdatePointBonus',
    request,
    metadata || {},
    this.methodInfoUpdatePointBonus);
  }

  methodInfoStopPointBonus = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: point_pb.PointBonus) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  stopPointBonus(
    request: point_pb.PointBonus,
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  stopPointBonus(
    request: point_pb.PointBonus,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  stopPointBonus(
    request: point_pb.PointBonus,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.AdminRPC/StopPointBonus',
        request,
        metadata || {},
        this.methodInfoStopPointBonus,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.AdminRPC/StopPointBonus',
    request,
    metadata || {},
    this.methodInfoStopPointBonus);
  }

  methodInfoCancelPointBonus = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: point_pb.PointBonus) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  cancelPointBonus(
    request: point_pb.PointBonus,
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  cancelPointBonus(
    request: point_pb.PointBonus,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  cancelPointBonus(
    request: point_pb.PointBonus,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.AdminRPC/CancelPointBonus',
        request,
        metadata || {},
        this.methodInfoCancelPointBonus,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.AdminRPC/CancelPointBonus',
    request,
    metadata || {},
    this.methodInfoCancelPointBonus);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  findPointBonus(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  findPointBonus(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.AdminRPC/FindPointBonus',
        request,
        metadata || {},
        this.methodInfoFindPointBonus,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.AdminRPC/FindPointBonus',
    request,
    metadata || {},
    this.methodInfoFindPointBonus);
  }

  methodInfoRecordPointBonus = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: point_pb.PointBonus) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  recordPointBonus(
    request: point_pb.PointBonus,
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  recordPointBonus(
    request: point_pb.PointBonus,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  recordPointBonus(
    request: point_pb.PointBonus,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.AdminRPC/RecordPointBonus',
        request,
        metadata || {},
        this.methodInfoRecordPointBonus,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.AdminRPC/RecordPointBonus',
    request,
    metadata || {},
    this.methodInfoRecordPointBonus);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  createPoint(
    request: point_pb.Point,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  createPoint(
    request: point_pb.Point,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.AdminRPC/CreatePoint',
        request,
        metadata || {},
        this.methodInfoCreatePoint,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.AdminRPC/CreatePoint',
    request,
    metadata || {},
    this.methodInfoCreatePoint);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  confirmPoint(
    request: point_pb.Point,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  confirmPoint(
    request: point_pb.Point,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.AdminRPC/ConfirmPoint',
        request,
        metadata || {},
        this.methodInfoConfirmPoint,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.AdminRPC/ConfirmPoint',
    request,
    metadata || {},
    this.methodInfoConfirmPoint);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  approvePoint(
    request: point_pb.Point,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  approvePoint(
    request: point_pb.Point,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.AdminRPC/ApprovePoint',
        request,
        metadata || {},
        this.methodInfoApprovePoint,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.AdminRPC/ApprovePoint',
    request,
    metadata || {},
    this.methodInfoApprovePoint);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  cancelPoint(
    request: point_pb.Point,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  cancelPoint(
    request: point_pb.Point,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.AdminRPC/CancelPoint',
        request,
        metadata || {},
        this.methodInfoCancelPoint,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.AdminRPC/CancelPoint',
    request,
    metadata || {},
    this.methodInfoCancelPoint);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  updatePoint(
    request: point_pb.Point,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  updatePoint(
    request: point_pb.Point,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.AdminRPC/UpdatePoint',
        request,
        metadata || {},
        this.methodInfoUpdatePoint,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.AdminRPC/UpdatePoint',
    request,
    metadata || {},
    this.methodInfoUpdatePoint);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  findPoint(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  findPoint(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.AdminRPC/FindPoint',
        request,
        metadata || {},
        this.methodInfoFindPoint,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.AdminRPC/FindPoint',
    request,
    metadata || {},
    this.methodInfoFindPoint);
  }

  methodInfoRecordPoint = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: point_pb.Point) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  recordPoint(
    request: point_pb.Point,
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  recordPoint(
    request: point_pb.Point,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  recordPoint(
    request: point_pb.Point,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.AdminRPC/RecordPoint',
        request,
        metadata || {},
        this.methodInfoRecordPoint,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.AdminRPC/RecordPoint',
    request,
    metadata || {},
    this.methodInfoRecordPoint);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  createPointBill(
    request: point_pb.PointBill,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  createPointBill(
    request: point_pb.PointBill,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.AdminRPC/CreatePointBill',
        request,
        metadata || {},
        this.methodInfoCreatePointBill,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.AdminRPC/CreatePointBill',
    request,
    metadata || {},
    this.methodInfoCreatePointBill);
  }

  methodInfoUpdatePointBill = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: point_pb.PointBill) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  updatePointBill(
    request: point_pb.PointBill,
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  updatePointBill(
    request: point_pb.PointBill,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  updatePointBill(
    request: point_pb.PointBill,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.AdminRPC/UpdatePointBill',
        request,
        metadata || {},
        this.methodInfoUpdatePointBill,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.AdminRPC/UpdatePointBill',
    request,
    metadata || {},
    this.methodInfoUpdatePointBill);
  }

  methodInfoCancelPointBill = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: point_pb.PointBill) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  cancelPointBill(
    request: point_pb.PointBill,
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  cancelPointBill(
    request: point_pb.PointBill,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  cancelPointBill(
    request: point_pb.PointBill,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.AdminRPC/CancelPointBill',
        request,
        metadata || {},
        this.methodInfoCancelPointBill,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.AdminRPC/CancelPointBill',
    request,
    metadata || {},
    this.methodInfoCancelPointBill);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  confirmPointBill(
    request: point_pb.PointBill,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  confirmPointBill(
    request: point_pb.PointBill,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.AdminRPC/ConfirmPointBill',
        request,
        metadata || {},
        this.methodInfoConfirmPointBill,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.AdminRPC/ConfirmPointBill',
    request,
    metadata || {},
    this.methodInfoConfirmPointBill);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  findPointBill(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  findPointBill(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.AdminRPC/FindPointBill',
        request,
        metadata || {},
        this.methodInfoFindPointBill,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.AdminRPC/FindPointBill',
    request,
    metadata || {},
    this.methodInfoFindPointBill);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  findPointDetail(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  findPointDetail(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.AdminRPC/FindPointDetail',
        request,
        metadata || {},
        this.methodInfoFindPointDetail,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.AdminRPC/FindPointDetail',
    request,
    metadata || {},
    this.methodInfoFindPointDetail);
  }

  methodInfoRecordPointBill = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: point_pb.PointBill) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  recordPointBill(
    request: point_pb.PointBill,
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  recordPointBill(
    request: point_pb.PointBill,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  recordPointBill(
    request: point_pb.PointBill,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.AdminRPC/RecordPointBill',
        request,
        metadata || {},
        this.methodInfoRecordPointBill,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.AdminRPC/RecordPointBill',
    request,
    metadata || {},
    this.methodInfoRecordPointBill);
  }

  methodInfoRecordPointDetail = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: point_pb.PointDetail) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  recordPointDetail(
    request: point_pb.PointDetail,
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  recordPointDetail(
    request: point_pb.PointDetail,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  recordPointDetail(
    request: point_pb.PointDetail,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.AdminRPC/RecordPointDetail',
        request,
        metadata || {},
        this.methodInfoRecordPointDetail,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.AdminRPC/RecordPointDetail',
    request,
    metadata || {},
    this.methodInfoRecordPointDetail);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  createPointFlow(
    request: point_pb.PointFlow,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  createPointFlow(
    request: point_pb.PointFlow,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.AdminRPC/CreatePointFlow',
        request,
        metadata || {},
        this.methodInfoCreatePointFlow,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.AdminRPC/CreatePointFlow',
    request,
    metadata || {},
    this.methodInfoCreatePointFlow);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  findPointFlow(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  findPointFlow(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.AdminRPC/FindPointFlow',
        request,
        metadata || {},
        this.methodInfoFindPointFlow,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.AdminRPC/FindPointFlow',
    request,
    metadata || {},
    this.methodInfoFindPointFlow);
  }

  methodInfoRecordPointFlow = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: point_pb.PointFlow) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  recordPointFlow(
    request: point_pb.PointFlow,
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  recordPointFlow(
    request: point_pb.PointFlow,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  recordPointFlow(
    request: point_pb.PointFlow,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.AdminRPC/RecordPointFlow',
        request,
        metadata || {},
        this.methodInfoRecordPointFlow,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.AdminRPC/RecordPointFlow',
    request,
    metadata || {},
    this.methodInfoRecordPointFlow);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  createAdv(
    request: adv_pb.Adv,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  createAdv(
    request: adv_pb.Adv,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.AdminRPC/CreateAdv',
        request,
        metadata || {},
        this.methodInfoCreateAdv,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.AdminRPC/CreateAdv',
    request,
    metadata || {},
    this.methodInfoCreateAdv);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  updateAdv(
    request: adv_pb.Adv,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  updateAdv(
    request: adv_pb.Adv,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.AdminRPC/UpdateAdv',
        request,
        metadata || {},
        this.methodInfoUpdateAdv,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.AdminRPC/UpdateAdv',
    request,
    metadata || {},
    this.methodInfoUpdateAdv);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  exchangeAdv(
    request: adv_pb.Adv,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  exchangeAdv(
    request: adv_pb.Adv,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.AdminRPC/ExchangeAdv',
        request,
        metadata || {},
        this.methodInfoExchangeAdv,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.AdminRPC/ExchangeAdv',
    request,
    metadata || {},
    this.methodInfoExchangeAdv);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  findAdv(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  findAdv(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.AdminRPC/FindAdv',
        request,
        metadata || {},
        this.methodInfoFindAdv,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.AdminRPC/FindAdv',
    request,
    metadata || {},
    this.methodInfoFindAdv);
  }

  methodInfoRecordAdv = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: adv_pb.Adv) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  recordAdv(
    request: adv_pb.Adv,
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  recordAdv(
    request: adv_pb.Adv,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  recordAdv(
    request: adv_pb.Adv,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.AdminRPC/RecordAdv',
        request,
        metadata || {},
        this.methodInfoRecordAdv,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.AdminRPC/RecordAdv',
    request,
    metadata || {},
    this.methodInfoRecordAdv);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  createAdvItem(
    request: adv_pb.AdvItem,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  createAdvItem(
    request: adv_pb.AdvItem,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.AdminRPC/CreateAdvItem',
        request,
        metadata || {},
        this.methodInfoCreateAdvItem,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.AdminRPC/CreateAdvItem',
    request,
    metadata || {},
    this.methodInfoCreateAdvItem);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  updateAdvItem(
    request: adv_pb.AdvItem,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  updateAdvItem(
    request: adv_pb.AdvItem,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.AdminRPC/UpdateAdvItem',
        request,
        metadata || {},
        this.methodInfoUpdateAdvItem,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.AdminRPC/UpdateAdvItem',
    request,
    metadata || {},
    this.methodInfoUpdateAdvItem);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  deleteAdvItem(
    request: adv_pb.AdvItem,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  deleteAdvItem(
    request: adv_pb.AdvItem,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.AdminRPC/DeleteAdvItem',
        request,
        metadata || {},
        this.methodInfoDeleteAdvItem,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.AdminRPC/DeleteAdvItem',
    request,
    metadata || {},
    this.methodInfoDeleteAdvItem);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  findAdvItem(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  findAdvItem(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.AdminRPC/FindAdvItem',
        request,
        metadata || {},
        this.methodInfoFindAdvItem,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.AdminRPC/FindAdvItem',
    request,
    metadata || {},
    this.methodInfoFindAdvItem);
  }

  methodInfoRecordAdvItem = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: adv_pb.AdvItem) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  recordAdvItem(
    request: adv_pb.AdvItem,
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  recordAdvItem(
    request: adv_pb.AdvItem,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  recordAdvItem(
    request: adv_pb.AdvItem,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.AdminRPC/RecordAdvItem',
        request,
        metadata || {},
        this.methodInfoRecordAdvItem,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.AdminRPC/RecordAdvItem',
    request,
    metadata || {},
    this.methodInfoRecordAdvItem);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  createApp(
    request: app_pb.App,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  createApp(
    request: app_pb.App,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.AdminRPC/CreateApp',
        request,
        metadata || {},
        this.methodInfoCreateApp,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.AdminRPC/CreateApp',
    request,
    metadata || {},
    this.methodInfoCreateApp);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  approveApp(
    request: app_pb.App,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  approveApp(
    request: app_pb.App,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.AdminRPC/ApproveApp',
        request,
        metadata || {},
        this.methodInfoApproveApp,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.AdminRPC/ApproveApp',
    request,
    metadata || {},
    this.methodInfoApproveApp);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  cancelApp(
    request: app_pb.App,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  cancelApp(
    request: app_pb.App,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.AdminRPC/CancelApp',
        request,
        metadata || {},
        this.methodInfoCancelApp,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.AdminRPC/CancelApp',
    request,
    metadata || {},
    this.methodInfoCancelApp);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  updateApp(
    request: app_pb.App,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  updateApp(
    request: app_pb.App,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.AdminRPC/UpdateApp',
        request,
        metadata || {},
        this.methodInfoUpdateApp,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.AdminRPC/UpdateApp',
    request,
    metadata || {},
    this.methodInfoUpdateApp);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  findApp(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  findApp(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.AdminRPC/FindApp',
        request,
        metadata || {},
        this.methodInfoFindApp,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.AdminRPC/FindApp',
    request,
    metadata || {},
    this.methodInfoFindApp);
  }

  methodInfoRecordApp = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: app_pb.App) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  recordApp(
    request: app_pb.App,
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  recordApp(
    request: app_pb.App,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  recordApp(
    request: app_pb.App,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.AdminRPC/RecordApp',
        request,
        metadata || {},
        this.methodInfoRecordApp,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.AdminRPC/RecordApp',
    request,
    metadata || {},
    this.methodInfoRecordApp);
  }

  methodInfoCreateSystemSet = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: system$set_pb.SystemSet) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  createSystemSet(
    request: system$set_pb.SystemSet,
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  createSystemSet(
    request: system$set_pb.SystemSet,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  createSystemSet(
    request: system$set_pb.SystemSet,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.AdminRPC/CreateSystemSet',
        request,
        metadata || {},
        this.methodInfoCreateSystemSet,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.AdminRPC/CreateSystemSet',
    request,
    metadata || {},
    this.methodInfoCreateSystemSet);
  }

  methodInfoUpdateSystemSet = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: system$set_pb.SystemSet) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  updateSystemSet(
    request: system$set_pb.SystemSet,
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  updateSystemSet(
    request: system$set_pb.SystemSet,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  updateSystemSet(
    request: system$set_pb.SystemSet,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.AdminRPC/UpdateSystemSet',
        request,
        metadata || {},
        this.methodInfoUpdateSystemSet,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.AdminRPC/UpdateSystemSet',
    request,
    metadata || {},
    this.methodInfoUpdateSystemSet);
  }

  methodInfoFindSystemSet = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  findSystemSet(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  findSystemSet(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  findSystemSet(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.AdminRPC/FindSystemSet',
        request,
        metadata || {},
        this.methodInfoFindSystemSet,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.AdminRPC/FindSystemSet',
    request,
    metadata || {},
    this.methodInfoFindSystemSet);
  }

  methodInfoRecordSystemSet = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: system$set_pb.SystemSet) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  recordSystemSet(
    request: system$set_pb.SystemSet,
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  recordSystemSet(
    request: system$set_pb.SystemSet,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  recordSystemSet(
    request: system$set_pb.SystemSet,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.AdminRPC/RecordSystemSet',
        request,
        metadata || {},
        this.methodInfoRecordSystemSet,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.AdminRPC/RecordSystemSet',
    request,
    metadata || {},
    this.methodInfoRecordSystemSet);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  sMS(
    request: message_pb.Message,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  sMS(
    request: message_pb.Message,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.AdminRPC/SMS',
        request,
        metadata || {},
        this.methodInfoSMS,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.AdminRPC/SMS',
    request,
    metadata || {},
    this.methodInfoSMS);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  eDM(
    request: message_pb.Message,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  eDM(
    request: message_pb.Message,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.AdminRPC/EDM',
        request,
        metadata || {},
        this.methodInfoEDM,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.AdminRPC/EDM',
    request,
    metadata || {},
    this.methodInfoEDM);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  findMessage(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  findMessage(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.AdminRPC/FindMessage',
        request,
        metadata || {},
        this.methodInfoFindMessage,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.AdminRPC/FindMessage',
    request,
    metadata || {},
    this.methodInfoFindMessage);
  }

}

