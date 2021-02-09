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
import * as business$sub_pb from './business-sub_pb';
import * as label_pb from './label_pb';
import * as message_pb from './message_pb';
import * as template_pb from './template_pb';
import * as pingpong_pb from './pingpong_pb';
import * as business_pb from './business_pb';
import * as domain_pb from './domain_pb';
import * as point_pb from './point_pb';
import * as report_pb from './report_pb';
import * as password_pb from './password_pb';
import * as setting_pb from './setting_pb';
import * as browse_pb from './browse_pb';
import * as product_pb from './product_pb';
import * as b2b_pb from './b2b_pb';
import * as manager_pb from './manager_pb';
import * as customer_pb from './customer_pb';
import * as purchase_pb from './purchase_pb';
import * as freeback_pb from './freeback_pb';
import * as store_pb from './store_pb';
import * as customer$level_pb from './customer-level_pb';
import * as sales_pb from './sales_pb';
import * as remind_pb from './remind_pb';
import * as order_pb from './order_pb';


export class BusinessRPCClient {
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
          '/ding4.BusinessRPC/Ping',
        request,
        metadata || {},
        this.methodInfoPing,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/Ping',
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
          '/ding4.BusinessRPC/WhoAmI',
        request,
        metadata || {},
        this.methodInfoWhoAmI,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/WhoAmI',
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
          '/ding4.BusinessRPC/ChangePassword',
        request,
        metadata || {},
        this.methodInfoChangePassword,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/ChangePassword',
    request,
    metadata || {},
    this.methodInfoChangePassword);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  changeInfo(
    request: business_pb.Business,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  changeInfo(
    request: business_pb.Business,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.BusinessRPC/ChangeInfo',
        request,
        metadata || {},
        this.methodInfoChangeInfo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/ChangeInfo',
    request,
    metadata || {},
    this.methodInfoChangeInfo);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  changeWhitelist(
    request: business_pb.Business,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  changeWhitelist(
    request: business_pb.Business,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.BusinessRPC/ChangeWhitelist',
        request,
        metadata || {},
        this.methodInfoChangeWhitelist,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/ChangeWhitelist',
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
          '/ding4.BusinessRPC/FindPermission',
        request,
        metadata || {},
        this.methodInfoFindPermission,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/FindPermission',
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
          '/ding4.BusinessRPC/FindRecord',
        request,
        metadata || {},
        this.methodInfoFindRecord,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/FindRecord',
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
          '/ding4.BusinessRPC/FindSign',
        request,
        metadata || {},
        this.methodInfoFindSign,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/FindSign',
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
          '/ding4.BusinessRPC/FindAnnouncement',
        request,
        metadata || {},
        this.methodInfoFindAnnouncement,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/FindAnnouncement',
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
          '/ding4.BusinessRPC/Duplicate',
        request,
        metadata || {},
        this.methodInfoDuplicate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/Duplicate',
    request,
    metadata || {},
    this.methodInfoDuplicate);
  }

  methodInfoFindLog = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.LogQuery) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  findLog(
    request: sql_pb.LogQuery,
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  findLog(
    request: sql_pb.LogQuery,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  findLog(
    request: sql_pb.LogQuery,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.BusinessRPC/FindLog',
        request,
        metadata || {},
        this.methodInfoFindLog,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/FindLog',
    request,
    metadata || {},
    this.methodInfoFindLog);
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
          '/ding4.BusinessRPC/Dashboard',
        request,
        metadata || {},
        this.methodInfoDashboard,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/Dashboard',
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
          '/ding4.BusinessRPC/Rank',
        request,
        metadata || {},
        this.methodInfoRank,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/Rank',
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
          '/ding4.BusinessRPC/BrowseRecord',
        request,
        metadata || {},
        this.methodInfoBrowseRecord,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/BrowseRecord',
    request,
    metadata || {},
    this.methodInfoBrowseRecord);
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
          '/ding4.BusinessRPC/CreatePoint',
        request,
        metadata || {},
        this.methodInfoCreatePoint,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/CreatePoint',
    request,
    metadata || {},
    this.methodInfoCreatePoint);
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
          '/ding4.BusinessRPC/CancelPoint',
        request,
        metadata || {},
        this.methodInfoCancelPoint,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/CancelPoint',
    request,
    metadata || {},
    this.methodInfoCancelPoint);
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
          '/ding4.BusinessRPC/ConfirmPoint',
        request,
        metadata || {},
        this.methodInfoConfirmPoint,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/ConfirmPoint',
    request,
    metadata || {},
    this.methodInfoConfirmPoint);
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
          '/ding4.BusinessRPC/ConfirmPointBill',
        request,
        metadata || {},
        this.methodInfoConfirmPointBill,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/ConfirmPointBill',
    request,
    metadata || {},
    this.methodInfoConfirmPointBill);
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
          '/ding4.BusinessRPC/FindPoint',
        request,
        metadata || {},
        this.methodInfoFindPoint,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/FindPoint',
    request,
    metadata || {},
    this.methodInfoFindPoint);
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
          '/ding4.BusinessRPC/FindPointFlow',
        request,
        metadata || {},
        this.methodInfoFindPointFlow,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/FindPointFlow',
    request,
    metadata || {},
    this.methodInfoFindPointFlow);
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
          '/ding4.BusinessRPC/FindPointBill',
        request,
        metadata || {},
        this.methodInfoFindPointBill,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/FindPointBill',
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
          '/ding4.BusinessRPC/FindPointDetail',
        request,
        metadata || {},
        this.methodInfoFindPointDetail,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/FindPointDetail',
    request,
    metadata || {},
    this.methodInfoFindPointDetail);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  createBusinessSub(
    request: business$sub_pb.BusinessSub,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  createBusinessSub(
    request: business$sub_pb.BusinessSub,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.BusinessRPC/CreateBusinessSub',
        request,
        metadata || {},
        this.methodInfoCreateBusinessSub,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/CreateBusinessSub',
    request,
    metadata || {},
    this.methodInfoCreateBusinessSub);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  updateBusinessSub(
    request: business$sub_pb.BusinessSub,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  updateBusinessSub(
    request: business$sub_pb.BusinessSub,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.BusinessRPC/UpdateBusinessSub',
        request,
        metadata || {},
        this.methodInfoUpdateBusinessSub,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/UpdateBusinessSub',
    request,
    metadata || {},
    this.methodInfoUpdateBusinessSub);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  findBusinessSub(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  findBusinessSub(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.BusinessRPC/FindBusinessSub',
        request,
        metadata || {},
        this.methodInfoFindBusinessSub,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/FindBusinessSub',
    request,
    metadata || {},
    this.methodInfoFindBusinessSub);
  }

  methodInfoRecordBusinessSub = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: business$sub_pb.BusinessSub) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  recordBusinessSub(
    request: business$sub_pb.BusinessSub,
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  recordBusinessSub(
    request: business$sub_pb.BusinessSub,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  recordBusinessSub(
    request: business$sub_pb.BusinessSub,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.BusinessRPC/RecordBusinessSub',
        request,
        metadata || {},
        this.methodInfoRecordBusinessSub,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/RecordBusinessSub',
    request,
    metadata || {},
    this.methodInfoRecordBusinessSub);
  }

  methodInfoSignBusinessSub = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: business$sub_pb.BusinessSub) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  signBusinessSub(
    request: business$sub_pb.BusinessSub,
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  signBusinessSub(
    request: business$sub_pb.BusinessSub,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  signBusinessSub(
    request: business$sub_pb.BusinessSub,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.BusinessRPC/SignBusinessSub',
        request,
        metadata || {},
        this.methodInfoSignBusinessSub,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/SignBusinessSub',
    request,
    metadata || {},
    this.methodInfoSignBusinessSub);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  updateManager(
    request: manager_pb.Manager,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  updateManager(
    request: manager_pb.Manager,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.BusinessRPC/UpdateManager',
        request,
        metadata || {},
        this.methodInfoUpdateManager,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/UpdateManager',
    request,
    metadata || {},
    this.methodInfoUpdateManager);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  findManager(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  findManager(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.BusinessRPC/FindManager',
        request,
        metadata || {},
        this.methodInfoFindManager,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/FindManager',
    request,
    metadata || {},
    this.methodInfoFindManager);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  recordManager(
    request: manager_pb.Manager,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  recordManager(
    request: manager_pb.Manager,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.BusinessRPC/RecordManager',
        request,
        metadata || {},
        this.methodInfoRecordManager,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/RecordManager',
    request,
    metadata || {},
    this.methodInfoRecordManager);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  signManager(
    request: manager_pb.Manager,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  signManager(
    request: manager_pb.Manager,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.BusinessRPC/SignManager',
        request,
        metadata || {},
        this.methodInfoSignManager,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/SignManager',
    request,
    metadata || {},
    this.methodInfoSignManager);
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
          '/ding4.BusinessRPC/CreateLabel',
        request,
        metadata || {},
        this.methodInfoCreateLabel,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/CreateLabel',
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
          '/ding4.BusinessRPC/UpdateLabel',
        request,
        metadata || {},
        this.methodInfoUpdateLabel,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/UpdateLabel',
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
          '/ding4.BusinessRPC/DeleteLabel',
        request,
        metadata || {},
        this.methodInfoDeleteLabel,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/DeleteLabel',
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
          '/ding4.BusinessRPC/AppendLabel',
        request,
        metadata || {},
        this.methodInfoAppendLabel,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/AppendLabel',
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
          '/ding4.BusinessRPC/SubtractLabel',
        request,
        metadata || {},
        this.methodInfoSubtractLabel,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/SubtractLabel',
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
          '/ding4.BusinessRPC/FindLabel',
        request,
        metadata || {},
        this.methodInfoFindLabel,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/FindLabel',
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
          '/ding4.BusinessRPC/RecordLabel',
        request,
        metadata || {},
        this.methodInfoRecordLabel,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/RecordLabel',
    request,
    metadata || {},
    this.methodInfoRecordLabel);
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
          '/ding4.BusinessRPC/CreateCustomer',
        request,
        metadata || {},
        this.methodInfoCreateCustomer,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/CreateCustomer',
    request,
    metadata || {},
    this.methodInfoCreateCustomer);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  uploadCustomer(
    request: customer_pb.CustomerBatch,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  uploadCustomer(
    request: customer_pb.CustomerBatch,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.BusinessRPC/UploadCustomer',
        request,
        metadata || {},
        this.methodInfoUploadCustomer,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/UploadCustomer',
    request,
    metadata || {},
    this.methodInfoUploadCustomer);
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
          '/ding4.BusinessRPC/UpdateCustomer',
        request,
        metadata || {},
        this.methodInfoUpdateCustomer,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/UpdateCustomer',
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
          '/ding4.BusinessRPC/FindCustomer',
        request,
        metadata || {},
        this.methodInfoFindCustomer,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/FindCustomer',
    request,
    metadata || {},
    this.methodInfoFindCustomer);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  recordCustomer(
    request: customer_pb.Customer,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  recordCustomer(
    request: customer_pb.Customer,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.BusinessRPC/RecordCustomer',
        request,
        metadata || {},
        this.methodInfoRecordCustomer,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/RecordCustomer',
    request,
    metadata || {},
    this.methodInfoRecordCustomer);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  signCustomer(
    request: customer_pb.Customer,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  signCustomer(
    request: customer_pb.Customer,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.BusinessRPC/SignCustomer',
        request,
        metadata || {},
        this.methodInfoSignCustomer,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/SignCustomer',
    request,
    metadata || {},
    this.methodInfoSignCustomer);
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
          '/ding4.BusinessRPC/AddCustomerToLevel',
        request,
        metadata || {},
        this.methodInfoAddCustomerToLevel,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/AddCustomerToLevel',
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
          '/ding4.BusinessRPC/DelCustomerFromLevel',
        request,
        metadata || {},
        this.methodInfoDelCustomerFromLevel,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/DelCustomerFromLevel',
    request,
    metadata || {},
    this.methodInfoDelCustomerFromLevel);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  createProduct(
    request: product_pb.Product,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  createProduct(
    request: product_pb.Product,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.BusinessRPC/CreateProduct',
        request,
        metadata || {},
        this.methodInfoCreateProduct,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/CreateProduct',
    request,
    metadata || {},
    this.methodInfoCreateProduct);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  uploadProduct(
    request: product_pb.ProductBatch,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  uploadProduct(
    request: product_pb.ProductBatch,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.BusinessRPC/UploadProduct',
        request,
        metadata || {},
        this.methodInfoUploadProduct,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/UploadProduct',
    request,
    metadata || {},
    this.methodInfoUploadProduct);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  updateProduct(
    request: product_pb.Product,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  updateProduct(
    request: product_pb.Product,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.BusinessRPC/UpdateProduct',
        request,
        metadata || {},
        this.methodInfoUpdateProduct,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/UpdateProduct',
    request,
    metadata || {},
    this.methodInfoUpdateProduct);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  modifyProduct(
    request: product_pb.ProductBatch,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  modifyProduct(
    request: product_pb.ProductBatch,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.BusinessRPC/ModifyProduct',
        request,
        metadata || {},
        this.methodInfoModifyProduct,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/ModifyProduct',
    request,
    metadata || {},
    this.methodInfoModifyProduct);
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
          '/ding4.BusinessRPC/FindProduct',
        request,
        metadata || {},
        this.methodInfoFindProduct,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/FindProduct',
    request,
    metadata || {},
    this.methodInfoFindProduct);
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
    metadata: grpcWeb.Metadata | null): Promise<product_pb.Product>;

  quickProduct(
    request: product_pb.Product,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: product_pb.Product) => void): grpcWeb.ClientReadableStream<product_pb.Product>;

  quickProduct(
    request: product_pb.Product,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: product_pb.Product) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.BusinessRPC/QuickProduct',
        request,
        metadata || {},
        this.methodInfoQuickProduct,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/QuickProduct',
    request,
    metadata || {},
    this.methodInfoQuickProduct);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  recordProduct(
    request: product_pb.Product,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  recordProduct(
    request: product_pb.Product,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.BusinessRPC/RecordProduct',
        request,
        metadata || {},
        this.methodInfoRecordProduct,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/RecordProduct',
    request,
    metadata || {},
    this.methodInfoRecordProduct);
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
          '/ding4.BusinessRPC/FindProductShell',
        request,
        metadata || {},
        this.methodInfoFindProductShell,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/FindProductShell',
    request,
    metadata || {},
    this.methodInfoFindProductShell);
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
          '/ding4.BusinessRPC/FindActivity',
        request,
        metadata || {},
        this.methodInfoFindActivity,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/FindActivity',
    request,
    metadata || {},
    this.methodInfoFindActivity);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  registerStore(
    request: store_pb.Store,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  registerStore(
    request: store_pb.Store,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.BusinessRPC/RegisterStore',
        request,
        metadata || {},
        this.methodInfoRegisterStore,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/RegisterStore',
    request,
    metadata || {},
    this.methodInfoRegisterStore);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  openStore(
    request: store_pb.Store,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  openStore(
    request: store_pb.Store,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.BusinessRPC/OpenStore',
        request,
        metadata || {},
        this.methodInfoOpenStore,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/OpenStore',
    request,
    metadata || {},
    this.methodInfoOpenStore);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  updateStore(
    request: store_pb.Store,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  updateStore(
    request: store_pb.Store,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.BusinessRPC/UpdateStore',
        request,
        metadata || {},
        this.methodInfoUpdateStore,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/UpdateStore',
    request,
    metadata || {},
    this.methodInfoUpdateStore);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  findStore(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  findStore(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.BusinessRPC/FindStore',
        request,
        metadata || {},
        this.methodInfoFindStore,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/FindStore',
    request,
    metadata || {},
    this.methodInfoFindStore);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  recordStore(
    request: store_pb.Store,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  recordStore(
    request: store_pb.Store,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.BusinessRPC/RecordStore',
        request,
        metadata || {},
        this.methodInfoRecordStore,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/RecordStore',
    request,
    metadata || {},
    this.methodInfoRecordStore);
  }

  methodInfoExposeB2B = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: b2b_pb.B2B) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  exposeB2B(
    request: b2b_pb.B2B,
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  exposeB2B(
    request: b2b_pb.B2B,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  exposeB2B(
    request: b2b_pb.B2B,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.BusinessRPC/ExposeB2B',
        request,
        metadata || {},
        this.methodInfoExposeB2B,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/ExposeB2B',
    request,
    metadata || {},
    this.methodInfoExposeB2B);
  }

  methodInfoRequestB2B = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: b2b_pb.B2B) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  requestB2B(
    request: b2b_pb.B2B,
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  requestB2B(
    request: b2b_pb.B2B,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  requestB2B(
    request: b2b_pb.B2B,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.BusinessRPC/RequestB2B',
        request,
        metadata || {},
        this.methodInfoRequestB2B,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/RequestB2B',
    request,
    metadata || {},
    this.methodInfoRequestB2B);
  }

  methodInfoUpdateB2BExport = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: b2b_pb.B2B) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  updateB2BExport(
    request: b2b_pb.B2B,
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  updateB2BExport(
    request: b2b_pb.B2B,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  updateB2BExport(
    request: b2b_pb.B2B,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.BusinessRPC/UpdateB2BExport',
        request,
        metadata || {},
        this.methodInfoUpdateB2BExport,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/UpdateB2BExport',
    request,
    metadata || {},
    this.methodInfoUpdateB2BExport);
  }

  methodInfoUpdateB2BImport = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: b2b_pb.B2B) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  updateB2BImport(
    request: b2b_pb.B2B,
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  updateB2BImport(
    request: b2b_pb.B2B,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  updateB2BImport(
    request: b2b_pb.B2B,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.BusinessRPC/UpdateB2BImport',
        request,
        metadata || {},
        this.methodInfoUpdateB2BImport,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/UpdateB2BImport',
    request,
    metadata || {},
    this.methodInfoUpdateB2BImport);
  }

  methodInfoFindB2B = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  findB2B(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  findB2B(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  findB2B(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.BusinessRPC/FindB2B',
        request,
        metadata || {},
        this.methodInfoFindB2B,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/FindB2B',
    request,
    metadata || {},
    this.methodInfoFindB2B);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  createRemind(
    request: remind_pb.Remind,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  createRemind(
    request: remind_pb.Remind,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.BusinessRPC/CreateRemind',
        request,
        metadata || {},
        this.methodInfoCreateRemind,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/CreateRemind',
    request,
    metadata || {},
    this.methodInfoCreateRemind);
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
          '/ding4.BusinessRPC/UpdateRemind',
        request,
        metadata || {},
        this.methodInfoUpdateRemind,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/UpdateRemind',
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
          '/ding4.BusinessRPC/FindRemind',
        request,
        metadata || {},
        this.methodInfoFindRemind,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/FindRemind',
    request,
    metadata || {},
    this.methodInfoFindRemind);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  recordRemind(
    request: remind_pb.Remind,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  recordRemind(
    request: remind_pb.Remind,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.BusinessRPC/RecordRemind',
        request,
        metadata || {},
        this.methodInfoRecordRemind,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/RecordRemind',
    request,
    metadata || {},
    this.methodInfoRecordRemind);
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
          '/ding4.BusinessRPC/CreateOrder',
        request,
        metadata || {},
        this.methodInfoCreateOrder,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/CreateOrder',
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
          '/ding4.BusinessRPC/StateOrder',
        request,
        metadata || {},
        this.methodInfoStateOrder,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/StateOrder',
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
          '/ding4.BusinessRPC/CancelOrder',
        request,
        metadata || {},
        this.methodInfoCancelOrder,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/CancelOrder',
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
          '/ding4.BusinessRPC/FindOrder',
        request,
        metadata || {},
        this.methodInfoFindOrder,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/FindOrder',
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
          '/ding4.BusinessRPC/DetailOrder',
        request,
        metadata || {},
        this.methodInfoDetailOrder,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/DetailOrder',
    request,
    metadata || {},
    this.methodInfoDetailOrder);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  pickUpGoods(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  pickUpGoods(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.BusinessRPC/PickUpGoods',
        request,
        metadata || {},
        this.methodInfoPickUpGoods,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/PickUpGoods',
    request,
    metadata || {},
    this.methodInfoPickUpGoods);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  recordOrder(
    request: order_pb.Order,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  recordOrder(
    request: order_pb.Order,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.BusinessRPC/RecordOrder',
        request,
        metadata || {},
        this.methodInfoRecordOrder,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/RecordOrder',
    request,
    metadata || {},
    this.methodInfoRecordOrder);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  createSupplier(
    request: purchase_pb.Supplier,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  createSupplier(
    request: purchase_pb.Supplier,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.BusinessRPC/CreateSupplier',
        request,
        metadata || {},
        this.methodInfoCreateSupplier,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/CreateSupplier',
    request,
    metadata || {},
    this.methodInfoCreateSupplier);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  updateSupplier(
    request: purchase_pb.Supplier,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  updateSupplier(
    request: purchase_pb.Supplier,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.BusinessRPC/UpdateSupplier',
        request,
        metadata || {},
        this.methodInfoUpdateSupplier,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/UpdateSupplier',
    request,
    metadata || {},
    this.methodInfoUpdateSupplier);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  findSupplier(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  findSupplier(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.BusinessRPC/FindSupplier',
        request,
        metadata || {},
        this.methodInfoFindSupplier,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/FindSupplier',
    request,
    metadata || {},
    this.methodInfoFindSupplier);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  recordSupplier(
    request: purchase_pb.Supplier,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  recordSupplier(
    request: purchase_pb.Supplier,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.BusinessRPC/RecordSupplier',
        request,
        metadata || {},
        this.methodInfoRecordSupplier,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/RecordSupplier',
    request,
    metadata || {},
    this.methodInfoRecordSupplier);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  createPurchase(
    request: purchase_pb.Purchase,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  createPurchase(
    request: purchase_pb.Purchase,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.BusinessRPC/CreatePurchase',
        request,
        metadata || {},
        this.methodInfoCreatePurchase,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/CreatePurchase',
    request,
    metadata || {},
    this.methodInfoCreatePurchase);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  deletePurchase(
    request: purchase_pb.Purchase,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  deletePurchase(
    request: purchase_pb.Purchase,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.BusinessRPC/DeletePurchase',
        request,
        metadata || {},
        this.methodInfoDeletePurchase,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/DeletePurchase',
    request,
    metadata || {},
    this.methodInfoDeletePurchase);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  findPurchase(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  findPurchase(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.BusinessRPC/FindPurchase',
        request,
        metadata || {},
        this.methodInfoFindPurchase,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/FindPurchase',
    request,
    metadata || {},
    this.methodInfoFindPurchase);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  findInventory(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  findInventory(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.BusinessRPC/FindInventory',
        request,
        metadata || {},
        this.methodInfoFindInventory,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/FindInventory',
    request,
    metadata || {},
    this.methodInfoFindInventory);
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
          '/ding4.BusinessRPC/CreateSetting',
        request,
        metadata || {},
        this.methodInfoCreateSetting,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/CreateSetting',
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
          '/ding4.BusinessRPC/UpdateSetting',
        request,
        metadata || {},
        this.methodInfoUpdateSetting,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/UpdateSetting',
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
          '/ding4.BusinessRPC/DeleteSetting',
        request,
        metadata || {},
        this.methodInfoDeleteSetting,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/DeleteSetting',
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
          '/ding4.BusinessRPC/FindSetting',
        request,
        metadata || {},
        this.methodInfoFindSetting,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/FindSetting',
    request,
    metadata || {},
    this.methodInfoFindSetting);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  recordSetting(
    request: setting_pb.Setting,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  recordSetting(
    request: setting_pb.Setting,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.BusinessRPC/RecordSetting',
        request,
        metadata || {},
        this.methodInfoRecordSetting,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/RecordSetting',
    request,
    metadata || {},
    this.methodInfoRecordSetting);
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
          '/ding4.BusinessRPC/CreateTemplate',
        request,
        metadata || {},
        this.methodInfoCreateTemplate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/CreateTemplate',
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
          '/ding4.BusinessRPC/UpdateTemplate',
        request,
        metadata || {},
        this.methodInfoUpdateTemplate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/UpdateTemplate',
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
          '/ding4.BusinessRPC/DeleteTemplate',
        request,
        metadata || {},
        this.methodInfoDeleteTemplate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/DeleteTemplate',
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
          '/ding4.BusinessRPC/FindTemplate',
        request,
        metadata || {},
        this.methodInfoFindTemplate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/FindTemplate',
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
          '/ding4.BusinessRPC/FindRemindTemplate',
        request,
        metadata || {},
        this.methodInfoFindRemindTemplate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/FindRemindTemplate',
    request,
    metadata || {},
    this.methodInfoFindRemindTemplate);
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
          '/ding4.BusinessRPC/CreateFreeback',
        request,
        metadata || {},
        this.methodInfoCreateFreeback,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/CreateFreeback',
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
          '/ding4.BusinessRPC/ReadFreeback',
        request,
        metadata || {},
        this.methodInfoReadFreeback,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/ReadFreeback',
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
          '/ding4.BusinessRPC/AppendFreeback',
        request,
        metadata || {},
        this.methodInfoAppendFreeback,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/AppendFreeback',
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
          '/ding4.BusinessRPC/FindFreeback',
        request,
        metadata || {},
        this.methodInfoFindFreeback,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/FindFreeback',
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
          '/ding4.BusinessRPC/SMS',
        request,
        metadata || {},
        this.methodInfoSMS,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/SMS',
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
          '/ding4.BusinessRPC/EDM',
        request,
        metadata || {},
        this.methodInfoEDM,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/EDM',
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
          '/ding4.BusinessRPC/FindMessage',
        request,
        metadata || {},
        this.methodInfoFindMessage,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/FindMessage',
    request,
    metadata || {},
    this.methodInfoFindMessage);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  createLogistics(
    request: order_pb.OrderBatch,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  createLogistics(
    request: order_pb.OrderBatch,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.BusinessRPC/CreateLogistics',
        request,
        metadata || {},
        this.methodInfoCreateLogistics,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/CreateLogistics',
    request,
    metadata || {},
    this.methodInfoCreateLogistics);
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
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  createReturn(
    request: order_pb.Order,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  createReturn(
    request: order_pb.Order,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.BusinessRPC/CreateReturn',
        request,
        metadata || {},
        this.methodInfoCreateReturn,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/CreateReturn',
    request,
    metadata || {},
    this.methodInfoCreateReturn);
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
          '/ding4.BusinessRPC/UpgradeDomain',
        request,
        metadata || {},
        this.methodInfoUpgradeDomain,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/UpgradeDomain',
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
          '/ding4.BusinessRPC/DeleteDomain',
        request,
        metadata || {},
        this.methodInfoDeleteDomain,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/DeleteDomain',
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
          '/ding4.BusinessRPC/FindDomain',
        request,
        metadata || {},
        this.methodInfoFindDomain,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/FindDomain',
    request,
    metadata || {},
    this.methodInfoFindDomain);
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
          '/ding4.BusinessRPC/CreateSales',
        request,
        metadata || {},
        this.methodInfoCreateSales,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/CreateSales',
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
          '/ding4.BusinessRPC/UpdateSales',
        request,
        metadata || {},
        this.methodInfoUpdateSales,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/UpdateSales',
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
          '/ding4.BusinessRPC/FindSales',
        request,
        metadata || {},
        this.methodInfoFindSales,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/FindSales',
    request,
    metadata || {},
    this.methodInfoFindSales);
  }

  methodInfoRecordSales = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sales_pb.Sales) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  recordSales(
    request: sales_pb.Sales,
    metadata: grpcWeb.Metadata | null): Promise<sql_pb.Response>;

  recordSales(
    request: sales_pb.Sales,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void): grpcWeb.ClientReadableStream<sql_pb.Response>;

  recordSales(
    request: sales_pb.Sales,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.BusinessRPC/RecordSales',
        request,
        metadata || {},
        this.methodInfoRecordSales,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/RecordSales',
    request,
    metadata || {},
    this.methodInfoRecordSales);
  }

  methodInfoReportPayment = new grpcWeb.AbstractClientBase.MethodInfo(
    report_pb.PaymentRp,
    (request: report_pb.PaymentRp) => {
      return request.serializeBinary();
    },
    report_pb.PaymentRp.deserializeBinary
  );

  reportPayment(
    request: report_pb.PaymentRp,
    metadata: grpcWeb.Metadata | null): Promise<report_pb.PaymentRp>;

  reportPayment(
    request: report_pb.PaymentRp,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: report_pb.PaymentRp) => void): grpcWeb.ClientReadableStream<report_pb.PaymentRp>;

  reportPayment(
    request: report_pb.PaymentRp,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: report_pb.PaymentRp) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.BusinessRPC/ReportPayment',
        request,
        metadata || {},
        this.methodInfoReportPayment,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/ReportPayment',
    request,
    metadata || {},
    this.methodInfoReportPayment);
  }

  methodInfoReportCustomer = new grpcWeb.AbstractClientBase.MethodInfo(
    report_pb.CustomerRp,
    (request: report_pb.CustomerRp) => {
      return request.serializeBinary();
    },
    report_pb.CustomerRp.deserializeBinary
  );

  reportCustomer(
    request: report_pb.CustomerRp,
    metadata: grpcWeb.Metadata | null): Promise<report_pb.CustomerRp>;

  reportCustomer(
    request: report_pb.CustomerRp,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: report_pb.CustomerRp) => void): grpcWeb.ClientReadableStream<report_pb.CustomerRp>;

  reportCustomer(
    request: report_pb.CustomerRp,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: report_pb.CustomerRp) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.BusinessRPC/ReportCustomer',
        request,
        metadata || {},
        this.methodInfoReportCustomer,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/ReportCustomer',
    request,
    metadata || {},
    this.methodInfoReportCustomer);
  }

  methodInfoReportProduct = new grpcWeb.AbstractClientBase.MethodInfo(
    report_pb.ProductRp,
    (request: report_pb.ProductRp) => {
      return request.serializeBinary();
    },
    report_pb.ProductRp.deserializeBinary
  );

  reportProduct(
    request: report_pb.ProductRp,
    metadata: grpcWeb.Metadata | null): Promise<report_pb.ProductRp>;

  reportProduct(
    request: report_pb.ProductRp,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: report_pb.ProductRp) => void): grpcWeb.ClientReadableStream<report_pb.ProductRp>;

  reportProduct(
    request: report_pb.ProductRp,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: report_pb.ProductRp) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.BusinessRPC/ReportProduct',
        request,
        metadata || {},
        this.methodInfoReportProduct,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/ReportProduct',
    request,
    metadata || {},
    this.methodInfoReportProduct);
  }

  methodInfoReportFavorite = new grpcWeb.AbstractClientBase.MethodInfo(
    report_pb.FavoriteRp,
    (request: report_pb.FavoriteRp) => {
      return request.serializeBinary();
    },
    report_pb.FavoriteRp.deserializeBinary
  );

  reportFavorite(
    request: report_pb.FavoriteRp,
    metadata: grpcWeb.Metadata | null): Promise<report_pb.FavoriteRp>;

  reportFavorite(
    request: report_pb.FavoriteRp,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: report_pb.FavoriteRp) => void): grpcWeb.ClientReadableStream<report_pb.FavoriteRp>;

  reportFavorite(
    request: report_pb.FavoriteRp,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: report_pb.FavoriteRp) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.BusinessRPC/ReportFavorite',
        request,
        metadata || {},
        this.methodInfoReportFavorite,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/ReportFavorite',
    request,
    metadata || {},
    this.methodInfoReportFavorite);
  }

  methodInfoReportCar = new grpcWeb.AbstractClientBase.MethodInfo(
    report_pb.CarRp,
    (request: report_pb.CarRp) => {
      return request.serializeBinary();
    },
    report_pb.CarRp.deserializeBinary
  );

  reportCar(
    request: report_pb.CarRp,
    metadata: grpcWeb.Metadata | null): Promise<report_pb.CarRp>;

  reportCar(
    request: report_pb.CarRp,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: report_pb.CarRp) => void): grpcWeb.ClientReadableStream<report_pb.CarRp>;

  reportCar(
    request: report_pb.CarRp,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: report_pb.CarRp) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ding4.BusinessRPC/ReportCar',
        request,
        metadata || {},
        this.methodInfoReportCar,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ding4.BusinessRPC/ReportCar',
    request,
    metadata || {},
    this.methodInfoReportCar);
  }

}

