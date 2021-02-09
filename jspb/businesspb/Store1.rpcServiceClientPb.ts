/**
 * @fileoverview gRPC-Web generated client stub for ding4
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as sql_pb from './sql_pb';
import * as message_pb from './message_pb';
import * as label_pb from './label_pb';
import * as pingpong_pb from './pingpong_pb';
import * as domain_pb from './domain_pb';
import * as template_pb from './template_pb';
import * as setting_pb from './setting_pb';
import * as browse_pb from './browse_pb';
import * as password_pb from './password_pb';
import * as order_pb from './order_pb';
import * as activity$coupon_pb from './activity-coupon_pb';
import * as customer_pb from './customer_pb';
import * as manager_pb from './manager_pb';
import * as adapter_pb from './adapter_pb';
import * as freeback_pb from './freeback_pb';
import * as car_pb from './car_pb';
import * as customer$level_pb from './customer-level_pb';
import * as sales_pb from './sales_pb';
import * as product$shell_pb from './product-shell_pb';
import * as webpage_pb from './webpage_pb';
import * as website_pb from './website_pb';
import * as remind_pb from './remind_pb';
import * as product$class_pb from './product-class_pb';


export class Store1RPCClient {
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
          '/ding4.Store1RPC/Ping',
        request,
        metadata || {},
        this.methodInfoPing,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.Store1RPC/Ping',
    request,
    metadata || {},
    this.methodInfoPing);
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
          '/ding4.Store1RPC/WhoAmI',
        request,
        metadata || {},
        this.methodInfoWhoAmI,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.Store1RPC/WhoAmI',
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
          '/ding4.Store1RPC/ChangePassword',
        request,
        metadata || {},
        this.methodInfoChangePassword,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.Store1RPC/ChangePassword',
    request,
    metadata || {},
    this.methodInfoChangePassword);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  changeInfo(
    request: manager_pb.Manager,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  changeInfo(
    request: manager_pb.Manager,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.Store1RPC/ChangeInfo',
        request,
        metadata || {},
        this.methodInfoChangeInfo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.Store1RPC/ChangeInfo',
    request,
    metadata || {},
    this.methodInfoChangeInfo);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  changeWhitelist(
    request: manager_pb.Manager,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  changeWhitelist(
    request: manager_pb.Manager,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.Store1RPC/ChangeWhitelist',
        request,
        metadata || {},
        this.methodInfoChangeWhitelist,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.Store1RPC/ChangeWhitelist',
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
          '/ding4.Store1RPC/FindPermission',
        request,
        metadata || {},
        this.methodInfoFindPermission,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.Store1RPC/FindPermission',
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
          '/ding4.Store1RPC/FindRecord',
        request,
        metadata || {},
        this.methodInfoFindRecord,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.Store1RPC/FindRecord',
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
          '/ding4.Store1RPC/FindSign',
        request,
        metadata || {},
        this.methodInfoFindSign,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.Store1RPC/FindSign',
    request,
    metadata || {},
    this.methodInfoFindSign);
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
          '/ding4.Store1RPC/FindAnnouncement',
        request,
        metadata || {},
        this.methodInfoFindAnnouncement,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.Store1RPC/FindAnnouncement',
    request,
    metadata || {},
    this.methodInfoFindAnnouncement);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  duplicate(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  duplicate(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.Store1RPC/Duplicate',
        request,
        metadata || {},
        this.methodInfoDuplicate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.Store1RPC/Duplicate',
    request,
    metadata || {},
    this.methodInfoDuplicate);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  dashboard(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  dashboard(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.Store1RPC/Dashboard',
        request,
        metadata || {},
        this.methodInfoDashboard,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.Store1RPC/Dashboard',
    request,
    metadata || {},
    this.methodInfoDashboard);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  rank(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  rank(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.Store1RPC/Rank',
        request,
        metadata || {},
        this.methodInfoRank,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.Store1RPC/Rank',
    request,
    metadata || {},
    this.methodInfoRank);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  browseRecord(
    request: browse_pb.Browse,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  browseRecord(
    request: browse_pb.Browse,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.Store1RPC/BrowseRecord',
        request,
        metadata || {},
        this.methodInfoBrowseRecord,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.Store1RPC/BrowseRecord',
    request,
    metadata || {},
    this.methodInfoBrowseRecord);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  createManagerSub(
    request: manager_pb.ManagerSub,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  createManagerSub(
    request: manager_pb.ManagerSub,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.Store1RPC/CreateManagerSub',
        request,
        metadata || {},
        this.methodInfoCreateManagerSub,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.Store1RPC/CreateManagerSub',
    request,
    metadata || {},
    this.methodInfoCreateManagerSub);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  updateManagerSub(
    request: manager_pb.ManagerSub,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  updateManagerSub(
    request: manager_pb.ManagerSub,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.Store1RPC/UpdateManagerSub',
        request,
        metadata || {},
        this.methodInfoUpdateManagerSub,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.Store1RPC/UpdateManagerSub',
    request,
    metadata || {},
    this.methodInfoUpdateManagerSub);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  findManagerSub(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  findManagerSub(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.Store1RPC/FindManagerSub',
        request,
        metadata || {},
        this.methodInfoFindManagerSub,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.Store1RPC/FindManagerSub',
    request,
    metadata || {},
    this.methodInfoFindManagerSub);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  recordManagerSub(
    request: manager_pb.ManagerSub,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  recordManagerSub(
    request: manager_pb.ManagerSub,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.Store1RPC/RecordManagerSub',
        request,
        metadata || {},
        this.methodInfoRecordManagerSub,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.Store1RPC/RecordManagerSub',
    request,
    metadata || {},
    this.methodInfoRecordManagerSub);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  signManagerSub(
    request: manager_pb.ManagerSub,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  signManagerSub(
    request: manager_pb.ManagerSub,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.Store1RPC/SignManagerSub',
        request,
        metadata || {},
        this.methodInfoSignManagerSub,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.Store1RPC/SignManagerSub',
    request,
    metadata || {},
    this.methodInfoSignManagerSub);
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
          '/ding4.Store1RPC/CreateLabel',
        request,
        metadata || {},
        this.methodInfoCreateLabel,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.Store1RPC/CreateLabel',
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
          '/ding4.Store1RPC/UpdateLabel',
        request,
        metadata || {},
        this.methodInfoUpdateLabel,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.Store1RPC/UpdateLabel',
    request,
    metadata || {},
    this.methodInfoUpdateLabel);
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
          '/ding4.Store1RPC/AppendLabel',
        request,
        metadata || {},
        this.methodInfoAppendLabel,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.Store1RPC/AppendLabel',
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
          '/ding4.Store1RPC/SubtractLabel',
        request,
        metadata || {},
        this.methodInfoSubtractLabel,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.Store1RPC/SubtractLabel',
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
          '/ding4.Store1RPC/FindLabel',
        request,
        metadata || {},
        this.methodInfoFindLabel,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.Store1RPC/FindLabel',
    request,
    metadata || {},
    this.methodInfoFindLabel);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  createActivity(
    request: activity$coupon_pb.Activity,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  createActivity(
    request: activity$coupon_pb.Activity,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.Store1RPC/CreateActivity',
        request,
        metadata || {},
        this.methodInfoCreateActivity,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.Store1RPC/CreateActivity',
    request,
    metadata || {},
    this.methodInfoCreateActivity);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  updateActivity(
    request: activity$coupon_pb.Activity,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  updateActivity(
    request: activity$coupon_pb.Activity,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.Store1RPC/UpdateActivity',
        request,
        metadata || {},
        this.methodInfoUpdateActivity,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.Store1RPC/UpdateActivity',
    request,
    metadata || {},
    this.methodInfoUpdateActivity);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  cancelActivity(
    request: activity$coupon_pb.Activity,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  cancelActivity(
    request: activity$coupon_pb.Activity,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.Store1RPC/CancelActivity',
        request,
        metadata || {},
        this.methodInfoCancelActivity,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.Store1RPC/CancelActivity',
    request,
    metadata || {},
    this.methodInfoCancelActivity);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  findActivity(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  findActivity(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.Store1RPC/FindActivity',
        request,
        metadata || {},
        this.methodInfoFindActivity,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.Store1RPC/FindActivity',
    request,
    metadata || {},
    this.methodInfoFindActivity);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  createCoupon(
    request: activity$coupon_pb.Coupon,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  createCoupon(
    request: activity$coupon_pb.Coupon,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.Store1RPC/CreateCoupon',
        request,
        metadata || {},
        this.methodInfoCreateCoupon,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.Store1RPC/CreateCoupon',
    request,
    metadata || {},
    this.methodInfoCreateCoupon);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  distributeCoupon(
    request: activity$coupon_pb.Coupon,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  distributeCoupon(
    request: activity$coupon_pb.Coupon,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.Store1RPC/DistributeCoupon',
        request,
        metadata || {},
        this.methodInfoDistributeCoupon,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.Store1RPC/DistributeCoupon',
    request,
    metadata || {},
    this.methodInfoDistributeCoupon);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  updateCoupon(
    request: activity$coupon_pb.Coupon,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  updateCoupon(
    request: activity$coupon_pb.Coupon,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.Store1RPC/UpdateCoupon',
        request,
        metadata || {},
        this.methodInfoUpdateCoupon,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.Store1RPC/UpdateCoupon',
    request,
    metadata || {},
    this.methodInfoUpdateCoupon);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  cancelCoupon(
    request: activity$coupon_pb.Coupon,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  cancelCoupon(
    request: activity$coupon_pb.Coupon,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.Store1RPC/CancelCoupon',
        request,
        metadata || {},
        this.methodInfoCancelCoupon,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.Store1RPC/CancelCoupon',
    request,
    metadata || {},
    this.methodInfoCancelCoupon);
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
          '/ding4.Store1RPC/ExchangeCoupon',
        request,
        metadata || {},
        this.methodInfoExchangeCoupon,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.Store1RPC/ExchangeCoupon',
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
          '/ding4.Store1RPC/FindCoupon',
        request,
        metadata || {},
        this.methodInfoFindCoupon,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.Store1RPC/FindCoupon',
    request,
    metadata || {},
    this.methodInfoFindCoupon);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  createSales(
    request: sales_pb.Sales,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  createSales(
    request: sales_pb.Sales,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.Store1RPC/CreateSales',
        request,
        metadata || {},
        this.methodInfoCreateSales,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.Store1RPC/CreateSales',
    request,
    metadata || {},
    this.methodInfoCreateSales);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  updateSales(
    request: sales_pb.Sales,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  updateSales(
    request: sales_pb.Sales,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.Store1RPC/UpdateSales',
        request,
        metadata || {},
        this.methodInfoUpdateSales,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.Store1RPC/UpdateSales',
    request,
    metadata || {},
    this.methodInfoUpdateSales);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  findSales(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  findSales(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.Store1RPC/FindSales',
        request,
        metadata || {},
        this.methodInfoFindSales,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.Store1RPC/FindSales',
    request,
    metadata || {},
    this.methodInfoFindSales);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  createCustomer(
    request: customer_pb.Customer,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  createCustomer(
    request: customer_pb.Customer,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.Store1RPC/CreateCustomer',
        request,
        metadata || {},
        this.methodInfoCreateCustomer,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.Store1RPC/CreateCustomer',
    request,
    metadata || {},
    this.methodInfoCreateCustomer);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  updateCustomer(
    request: customer_pb.Customer,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  updateCustomer(
    request: customer_pb.Customer,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.Store1RPC/UpdateCustomer',
        request,
        metadata || {},
        this.methodInfoUpdateCustomer,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.Store1RPC/UpdateCustomer',
    request,
    metadata || {},
    this.methodInfoUpdateCustomer);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  findCustomer(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  findCustomer(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.Store1RPC/FindCustomer',
        request,
        metadata || {},
        this.methodInfoFindCustomer,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.Store1RPC/FindCustomer',
    request,
    metadata || {},
    this.methodInfoFindCustomer);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  createCustomerLevel(
    request: customer$level_pb.CustomerLevel,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  createCustomerLevel(
    request: customer$level_pb.CustomerLevel,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.Store1RPC/CreateCustomerLevel',
        request,
        metadata || {},
        this.methodInfoCreateCustomerLevel,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.Store1RPC/CreateCustomerLevel',
    request,
    metadata || {},
    this.methodInfoCreateCustomerLevel);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  updateCustomerLevel(
    request: customer$level_pb.CustomerLevel,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  updateCustomerLevel(
    request: customer$level_pb.CustomerLevel,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.Store1RPC/UpdateCustomerLevel',
        request,
        metadata || {},
        this.methodInfoUpdateCustomerLevel,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.Store1RPC/UpdateCustomerLevel',
    request,
    metadata || {},
    this.methodInfoUpdateCustomerLevel);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  addCustomerToLevel(
    request: customer$level_pb.CustomerLevel,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  addCustomerToLevel(
    request: customer$level_pb.CustomerLevel,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.Store1RPC/AddCustomerToLevel',
        request,
        metadata || {},
        this.methodInfoAddCustomerToLevel,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.Store1RPC/AddCustomerToLevel',
    request,
    metadata || {},
    this.methodInfoAddCustomerToLevel);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  delCustomerFromLevel(
    request: customer$level_pb.CustomerLevel,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  delCustomerFromLevel(
    request: customer$level_pb.CustomerLevel,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.Store1RPC/DelCustomerFromLevel',
        request,
        metadata || {},
        this.methodInfoDelCustomerFromLevel,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.Store1RPC/DelCustomerFromLevel',
    request,
    metadata || {},
    this.methodInfoDelCustomerFromLevel);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  findCustomerLevel(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  findCustomerLevel(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.Store1RPC/FindCustomerLevel',
        request,
        metadata || {},
        this.methodInfoFindCustomerLevel,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.Store1RPC/FindCustomerLevel',
    request,
    metadata || {},
    this.methodInfoFindCustomerLevel);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  findProduct(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  findProduct(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.Store1RPC/FindProduct',
        request,
        metadata || {},
        this.methodInfoFindProduct,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.Store1RPC/FindProduct',
    request,
    metadata || {},
    this.methodInfoFindProduct);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  findCansetAdditional(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  findCansetAdditional(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.Store1RPC/FindCansetAdditional',
        request,
        metadata || {},
        this.methodInfoFindCansetAdditional,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.Store1RPC/FindCansetAdditional',
    request,
    metadata || {},
    this.methodInfoFindCansetAdditional);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  findCansetGiveaway(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  findCansetGiveaway(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.Store1RPC/FindCansetGiveaway',
        request,
        metadata || {},
        this.methodInfoFindCansetGiveaway,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.Store1RPC/FindCansetGiveaway',
    request,
    metadata || {},
    this.methodInfoFindCansetGiveaway);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  displayProductShell(
    request: product$shell_pb.ProductShell,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  displayProductShell(
    request: product$shell_pb.ProductShell,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.Store1RPC/DisplayProductShell',
        request,
        metadata || {},
        this.methodInfoDisplayProductShell,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.Store1RPC/DisplayProductShell',
    request,
    metadata || {},
    this.methodInfoDisplayProductShell);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  createProductShell(
    request: product$shell_pb.ProductShell,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  createProductShell(
    request: product$shell_pb.ProductShell,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.Store1RPC/CreateProductShell',
        request,
        metadata || {},
        this.methodInfoCreateProductShell,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.Store1RPC/CreateProductShell',
    request,
    metadata || {},
    this.methodInfoCreateProductShell);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  updateProductShell(
    request: product$shell_pb.ProductShell,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  updateProductShell(
    request: product$shell_pb.ProductShell,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.Store1RPC/UpdateProductShell',
        request,
        metadata || {},
        this.methodInfoUpdateProductShell,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.Store1RPC/UpdateProductShell',
    request,
    metadata || {},
    this.methodInfoUpdateProductShell);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  deleteProductShell(
    request: product$shell_pb.ProductShell,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  deleteProductShell(
    request: product$shell_pb.ProductShell,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.Store1RPC/DeleteProductShell',
        request,
        metadata || {},
        this.methodInfoDeleteProductShell,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.Store1RPC/DeleteProductShell',
    request,
    metadata || {},
    this.methodInfoDeleteProductShell);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  findProductShell(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  findProductShell(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.Store1RPC/FindProductShell',
        request,
        metadata || {},
        this.methodInfoFindProductShell,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.Store1RPC/FindProductShell',
    request,
    metadata || {},
    this.methodInfoFindProductShell);
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
    metadata: grpcWeb.Metadata | null): Promise<product$shell_pb.ProductShell>;

  quickProductShell(
    request: product$shell_pb.ProductShell,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: product$shell_pb.ProductShell) => void): grpcWeb.ClientReadableStream<product$shell_pb.ProductShell>;

  quickProductShell(
    request: product$shell_pb.ProductShell,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: product$shell_pb.ProductShell) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.Store1RPC/QuickProductShell',
        request,
        metadata || {},
        this.methodInfoQuickProductShell,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.Store1RPC/QuickProductShell',
    request,
    metadata || {},
    this.methodInfoQuickProductShell);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  createProductClass(
    request: product$class_pb.ProductClass,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  createProductClass(
    request: product$class_pb.ProductClass,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.Store1RPC/CreateProductClass',
        request,
        metadata || {},
        this.methodInfoCreateProductClass,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.Store1RPC/CreateProductClass',
    request,
    metadata || {},
    this.methodInfoCreateProductClass);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  updateProductClass(
    request: product$class_pb.ProductClass,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  updateProductClass(
    request: product$class_pb.ProductClass,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.Store1RPC/UpdateProductClass',
        request,
        metadata || {},
        this.methodInfoUpdateProductClass,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.Store1RPC/UpdateProductClass',
    request,
    metadata || {},
    this.methodInfoUpdateProductClass);
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
          '/ding4.Store1RPC/FindProductClass',
        request,
        metadata || {},
        this.methodInfoFindProductClass,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.Store1RPC/FindProductClass',
    request,
    metadata || {},
    this.methodInfoFindProductClass);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  addProductToClass(
    request: product$class_pb.ProductClass,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  addProductToClass(
    request: product$class_pb.ProductClass,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.Store1RPC/AddProductToClass',
        request,
        metadata || {},
        this.methodInfoAddProductToClass,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.Store1RPC/AddProductToClass',
    request,
    metadata || {},
    this.methodInfoAddProductToClass);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  delProductFromClass(
    request: product$class_pb.ProductClass,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  delProductFromClass(
    request: product$class_pb.ProductClass,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.Store1RPC/DelProductFromClass',
        request,
        metadata || {},
        this.methodInfoDelProductFromClass,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.Store1RPC/DelProductFromClass',
    request,
    metadata || {},
    this.methodInfoDelProductFromClass);
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
          '/ding4.Store1RPC/CompleteCar',
        request,
        metadata || {},
        this.methodInfoCompleteCar,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.Store1RPC/CompleteCar',
    request,
    metadata || {},
    this.methodInfoCompleteCar);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  deleteCar(
    request: car_pb.Car,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  deleteCar(
    request: car_pb.Car,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.Store1RPC/DeleteCar',
        request,
        metadata || {},
        this.methodInfoDeleteCar,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.Store1RPC/DeleteCar',
    request,
    metadata || {},
    this.methodInfoDeleteCar);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  findCar(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  findCar(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.Store1RPC/FindCar',
        request,
        metadata || {},
        this.methodInfoFindCar,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.Store1RPC/FindCar',
    request,
    metadata || {},
    this.methodInfoFindCar);
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
          '/ding4.Store1RPC/CreateOrder',
        request,
        metadata || {},
        this.methodInfoCreateOrder,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.Store1RPC/CreateOrder',
    request,
    metadata || {},
    this.methodInfoCreateOrder);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  stateOrder(
    request: order_pb.OrderBatch,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  stateOrder(
    request: order_pb.OrderBatch,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.Store1RPC/StateOrder',
        request,
        metadata || {},
        this.methodInfoStateOrder,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.Store1RPC/StateOrder',
    request,
    metadata || {},
    this.methodInfoStateOrder);
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
          '/ding4.Store1RPC/CancelOrder',
        request,
        metadata || {},
        this.methodInfoCancelOrder,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.Store1RPC/CancelOrder',
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
          '/ding4.Store1RPC/FindOrder',
        request,
        metadata || {},
        this.methodInfoFindOrder,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.Store1RPC/FindOrder',
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
          '/ding4.Store1RPC/DetailOrder',
        request,
        metadata || {},
        this.methodInfoDetailOrder,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.Store1RPC/DetailOrder',
    request,
    metadata || {},
    this.methodInfoDetailOrder);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  updateRemind(
    request: remind_pb.Remind,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  updateRemind(
    request: remind_pb.Remind,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.Store1RPC/UpdateRemind',
        request,
        metadata || {},
        this.methodInfoUpdateRemind,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.Store1RPC/UpdateRemind',
    request,
    metadata || {},
    this.methodInfoUpdateRemind);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  findRemind(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  findRemind(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.Store1RPC/FindRemind',
        request,
        metadata || {},
        this.methodInfoFindRemind,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.Store1RPC/FindRemind',
    request,
    metadata || {},
    this.methodInfoFindRemind);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  createSetting(
    request: setting_pb.Setting,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  createSetting(
    request: setting_pb.Setting,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.Store1RPC/CreateSetting',
        request,
        metadata || {},
        this.methodInfoCreateSetting,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.Store1RPC/CreateSetting',
    request,
    metadata || {},
    this.methodInfoCreateSetting);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  updateSetting(
    request: setting_pb.Setting,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  updateSetting(
    request: setting_pb.Setting,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.Store1RPC/UpdateSetting',
        request,
        metadata || {},
        this.methodInfoUpdateSetting,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.Store1RPC/UpdateSetting',
    request,
    metadata || {},
    this.methodInfoUpdateSetting);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  deleteSetting(
    request: setting_pb.Setting,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  deleteSetting(
    request: setting_pb.Setting,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.Store1RPC/DeleteSetting',
        request,
        metadata || {},
        this.methodInfoDeleteSetting,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.Store1RPC/DeleteSetting',
    request,
    metadata || {},
    this.methodInfoDeleteSetting);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  findSetting(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  findSetting(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.Store1RPC/FindSetting',
        request,
        metadata || {},
        this.methodInfoFindSetting,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.Store1RPC/FindSetting',
    request,
    metadata || {},
    this.methodInfoFindSetting);
  }

  methodInfoUpgradeAdapter = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: adapter_pb.AdapterBatch) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  upgradeAdapter(
    request: adapter_pb.AdapterBatch,
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  upgradeAdapter(
    request: adapter_pb.AdapterBatch,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  upgradeAdapter(
    request: adapter_pb.AdapterBatch,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.Store1RPC/UpgradeAdapter',
        request,
        metadata || {},
        this.methodInfoUpgradeAdapter,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.Store1RPC/UpgradeAdapter',
    request,
    metadata || {},
    this.methodInfoUpgradeAdapter);
  }

  methodInfoFindAdapter = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: adapter_pb.Adapter) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  findAdapter(
    request: adapter_pb.Adapter,
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  findAdapter(
    request: adapter_pb.Adapter,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  findAdapter(
    request: adapter_pb.Adapter,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.Store1RPC/FindAdapter',
        request,
        metadata || {},
        this.methodInfoFindAdapter,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.Store1RPC/FindAdapter',
    request,
    metadata || {},
    this.methodInfoFindAdapter);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  createWebPage(
    request: webpage_pb.WebPage,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  createWebPage(
    request: webpage_pb.WebPage,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.Store1RPC/CreateWebPage',
        request,
        metadata || {},
        this.methodInfoCreateWebPage,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.Store1RPC/CreateWebPage',
    request,
    metadata || {},
    this.methodInfoCreateWebPage);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  updateWebPage(
    request: webpage_pb.WebPage,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  updateWebPage(
    request: webpage_pb.WebPage,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.Store1RPC/UpdateWebPage',
        request,
        metadata || {},
        this.methodInfoUpdateWebPage,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.Store1RPC/UpdateWebPage',
    request,
    metadata || {},
    this.methodInfoUpdateWebPage);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  deleteWebPage(
    request: webpage_pb.WebPage,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  deleteWebPage(
    request: webpage_pb.WebPage,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.Store1RPC/DeleteWebPage',
        request,
        metadata || {},
        this.methodInfoDeleteWebPage,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.Store1RPC/DeleteWebPage',
    request,
    metadata || {},
    this.methodInfoDeleteWebPage);
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
          '/ding4.Store1RPC/FindWebPage',
        request,
        metadata || {},
        this.methodInfoFindWebPage,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.Store1RPC/FindWebPage',
    request,
    metadata || {},
    this.methodInfoFindWebPage);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  findWebsite(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  findWebsite(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.Store1RPC/FindWebsite',
        request,
        metadata || {},
        this.methodInfoFindWebsite,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.Store1RPC/FindWebsite',
    request,
    metadata || {},
    this.methodInfoFindWebsite);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  updateWebsite(
    request: website_pb.Website,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  updateWebsite(
    request: website_pb.Website,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.Store1RPC/UpdateWebsite',
        request,
        metadata || {},
        this.methodInfoUpdateWebsite,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.Store1RPC/UpdateWebsite',
    request,
    metadata || {},
    this.methodInfoUpdateWebsite);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  findNav(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  findNav(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.Store1RPC/FindNav',
        request,
        metadata || {},
        this.methodInfoFindNav,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.Store1RPC/FindNav',
    request,
    metadata || {},
    this.methodInfoFindNav);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  updateNav(
    request: website_pb.Website,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  updateNav(
    request: website_pb.Website,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.Store1RPC/UpdateNav',
        request,
        metadata || {},
        this.methodInfoUpdateNav,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.Store1RPC/UpdateNav',
    request,
    metadata || {},
    this.methodInfoUpdateNav);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  findFooter(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  findFooter(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.Store1RPC/FindFooter',
        request,
        metadata || {},
        this.methodInfoFindFooter,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.Store1RPC/FindFooter',
    request,
    metadata || {},
    this.methodInfoFindFooter);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  updateFooter(
    request: website_pb.Website,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  updateFooter(
    request: website_pb.Website,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.Store1RPC/UpdateFooter',
        request,
        metadata || {},
        this.methodInfoUpdateFooter,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.Store1RPC/UpdateFooter',
    request,
    metadata || {},
    this.methodInfoUpdateFooter);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  findLayout(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  findLayout(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.Store1RPC/FindLayout',
        request,
        metadata || {},
        this.methodInfoFindLayout,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.Store1RPC/FindLayout',
    request,
    metadata || {},
    this.methodInfoFindLayout);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  updateLayout(
    request: website_pb.Website,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  updateLayout(
    request: website_pb.Website,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.Store1RPC/UpdateLayout',
        request,
        metadata || {},
        this.methodInfoUpdateLayout,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.Store1RPC/UpdateLayout',
    request,
    metadata || {},
    this.methodInfoUpdateLayout);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  findMenu(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  findMenu(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.Store1RPC/FindMenu',
        request,
        metadata || {},
        this.methodInfoFindMenu,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.Store1RPC/FindMenu',
    request,
    metadata || {},
    this.methodInfoFindMenu);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  updateMenu(
    request: website_pb.Website,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  updateMenu(
    request: website_pb.Website,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.Store1RPC/UpdateMenu',
        request,
        metadata || {},
        this.methodInfoUpdateMenu,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.Store1RPC/UpdateMenu',
    request,
    metadata || {},
    this.methodInfoUpdateMenu);
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
          '/ding4.Store1RPC/CreateFreeback',
        request,
        metadata || {},
        this.methodInfoCreateFreeback,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.Store1RPC/CreateFreeback',
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
          '/ding4.Store1RPC/ReadFreeback',
        request,
        metadata || {},
        this.methodInfoReadFreeback,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.Store1RPC/ReadFreeback',
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
          '/ding4.Store1RPC/AppendFreeback',
        request,
        metadata || {},
        this.methodInfoAppendFreeback,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.Store1RPC/AppendFreeback',
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
          '/ding4.Store1RPC/FindFreeback',
        request,
        metadata || {},
        this.methodInfoFindFreeback,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.Store1RPC/FindFreeback',
    request,
    metadata || {},
    this.methodInfoFindFreeback);
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
          '/ding4.Store1RPC/SMS',
        request,
        metadata || {},
        this.methodInfoSMS,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.Store1RPC/SMS',
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
          '/ding4.Store1RPC/EDM',
        request,
        metadata || {},
        this.methodInfoEDM,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.Store1RPC/EDM',
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
          '/ding4.Store1RPC/FindMessage',
        request,
        metadata || {},
        this.methodInfoFindMessage,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.Store1RPC/FindMessage',
    request,
    metadata || {},
    this.methodInfoFindMessage);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  upgradeDomain(
    request: domain_pb.Domain,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  upgradeDomain(
    request: domain_pb.Domain,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.Store1RPC/UpgradeDomain',
        request,
        metadata || {},
        this.methodInfoUpgradeDomain,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.Store1RPC/UpgradeDomain',
    request,
    metadata || {},
    this.methodInfoUpgradeDomain);
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
          '/ding4.Store1RPC/DeleteDomain',
        request,
        metadata || {},
        this.methodInfoDeleteDomain,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.Store1RPC/DeleteDomain',
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
          '/ding4.Store1RPC/FindDomain',
        request,
        metadata || {},
        this.methodInfoFindDomain,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.Store1RPC/FindDomain',
    request,
    metadata || {},
    this.methodInfoFindDomain);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  createTemplate(
    request: template_pb.Template,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  createTemplate(
    request: template_pb.Template,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.Store1RPC/CreateTemplate',
        request,
        metadata || {},
        this.methodInfoCreateTemplate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.Store1RPC/CreateTemplate',
    request,
    metadata || {},
    this.methodInfoCreateTemplate);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  updateTemplate(
    request: template_pb.Template,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  updateTemplate(
    request: template_pb.Template,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.Store1RPC/UpdateTemplate',
        request,
        metadata || {},
        this.methodInfoUpdateTemplate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.Store1RPC/UpdateTemplate',
    request,
    metadata || {},
    this.methodInfoUpdateTemplate);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  deleteTemplate(
    request: template_pb.Template,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  deleteTemplate(
    request: template_pb.Template,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.Store1RPC/DeleteTemplate',
        request,
        metadata || {},
        this.methodInfoDeleteTemplate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.Store1RPC/DeleteTemplate',
    request,
    metadata || {},
    this.methodInfoDeleteTemplate);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  findTemplate(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  findTemplate(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.Store1RPC/FindTemplate',
        request,
        metadata || {},
        this.methodInfoFindTemplate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.Store1RPC/FindTemplate',
    request,
    metadata || {},
    this.methodInfoFindTemplate);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  findRemindTemplate(
    request: remind_pb.Remind,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  findRemindTemplate(
    request: remind_pb.Remind,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.Store1RPC/FindRemindTemplate',
        request,
        metadata || {},
        this.methodInfoFindRemindTemplate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.Store1RPC/FindRemindTemplate',
    request,
    metadata || {},
    this.methodInfoFindRemindTemplate);
  }

}

