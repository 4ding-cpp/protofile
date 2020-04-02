/**
 * @fileoverview gRPC-Web generated client stub for ding4
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var sql_pb = require('./sql_pb.js')

var business_pb = require('./business_pb.js')

var point_pb = require('./point_pb.js')

var manager_pb = require('./manager_pb.js')

var linker_pb = require('./linker_pb.js')

var customer_pb = require('./customer_pb.js')

var product_pb = require('./product_pb.js')

var label_pb = require('./label_pb.js')

var image_pb = require('./image_pb.js')

var store_pb = require('./store_pb.js')

var remind_pb = require('./remind_pb.js')

var order_pb = require('./order_pb.js')

var stack_pb = require('./stack_pb.js')

var supplier_pb = require('./supplier_pb.js')

var setting_pb = require('./setting_pb.js')
const proto = {};
proto.ding4 = require('./business.rpc_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.ding4.BusinessRPCClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.ding4.BusinessRPCPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Business,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_BusinessRPC_ChangePassword = new grpc.web.MethodDescriptor(
  '/ding4.BusinessRPC/ChangePassword',
  grpc.web.MethodType.UNARY,
  business_pb.Business,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Business} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.Business,
 *   !proto.ding4.Response>}
 */
const methodInfo_BusinessRPC_ChangePassword = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Business} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Business} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.BusinessRPCClient.prototype.changePassword =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.BusinessRPC/ChangePassword',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_ChangePassword,
      callback);
};


/**
 * @param {!proto.ding4.Business} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.BusinessRPCPromiseClient.prototype.changePassword =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.BusinessRPC/ChangePassword',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_ChangePassword);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Business,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_BusinessRPC_ChangeInfo = new grpc.web.MethodDescriptor(
  '/ding4.BusinessRPC/ChangeInfo',
  grpc.web.MethodType.UNARY,
  business_pb.Business,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Business} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.Business,
 *   !proto.ding4.Response>}
 */
const methodInfo_BusinessRPC_ChangeInfo = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Business} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Business} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.BusinessRPCClient.prototype.changeInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.BusinessRPC/ChangeInfo',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_ChangeInfo,
      callback);
};


/**
 * @param {!proto.ding4.Business} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.BusinessRPCPromiseClient.prototype.changeInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.BusinessRPC/ChangeInfo',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_ChangeInfo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Business,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_BusinessRPC_ChangeWhitelist = new grpc.web.MethodDescriptor(
  '/ding4.BusinessRPC/ChangeWhitelist',
  grpc.web.MethodType.UNARY,
  business_pb.Business,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Business} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.Business,
 *   !proto.ding4.Response>}
 */
const methodInfo_BusinessRPC_ChangeWhitelist = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Business} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Business} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.BusinessRPCClient.prototype.changeWhitelist =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.BusinessRPC/ChangeWhitelist',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_ChangeWhitelist,
      callback);
};


/**
 * @param {!proto.ding4.Business} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.BusinessRPCPromiseClient.prototype.changeWhitelist =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.BusinessRPC/ChangeWhitelist',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_ChangeWhitelist);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_BusinessRPC_FindPermission = new grpc.web.MethodDescriptor(
  '/ding4.BusinessRPC/FindPermission',
  grpc.web.MethodType.UNARY,
  sql_pb.Query,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodInfo_BusinessRPC_FindPermission = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.BusinessRPCClient.prototype.findPermission =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.BusinessRPC/FindPermission',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_FindPermission,
      callback);
};


/**
 * @param {!proto.ding4.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.BusinessRPCPromiseClient.prototype.findPermission =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.BusinessRPC/FindPermission',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_FindPermission);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Point,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_BusinessRPC_CreatePoint = new grpc.web.MethodDescriptor(
  '/ding4.BusinessRPC/CreatePoint',
  grpc.web.MethodType.UNARY,
  point_pb.Point,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Point} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.Point,
 *   !proto.ding4.Response>}
 */
const methodInfo_BusinessRPC_CreatePoint = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Point} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Point} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.BusinessRPCClient.prototype.createPoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.BusinessRPC/CreatePoint',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_CreatePoint,
      callback);
};


/**
 * @param {!proto.ding4.Point} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.BusinessRPCPromiseClient.prototype.createPoint =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.BusinessRPC/CreatePoint',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_CreatePoint);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Point,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_BusinessRPC_ComfirmPoint = new grpc.web.MethodDescriptor(
  '/ding4.BusinessRPC/ComfirmPoint',
  grpc.web.MethodType.UNARY,
  point_pb.Point,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Point} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.Point,
 *   !proto.ding4.Response>}
 */
const methodInfo_BusinessRPC_ComfirmPoint = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Point} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Point} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.BusinessRPCClient.prototype.comfirmPoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.BusinessRPC/ComfirmPoint',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_ComfirmPoint,
      callback);
};


/**
 * @param {!proto.ding4.Point} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.BusinessRPCPromiseClient.prototype.comfirmPoint =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.BusinessRPC/ComfirmPoint',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_ComfirmPoint);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.PointBill,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_BusinessRPC_ComfirmPointBill = new grpc.web.MethodDescriptor(
  '/ding4.BusinessRPC/ComfirmPointBill',
  grpc.web.MethodType.UNARY,
  point_pb.PointBill,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.PointBill} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.PointBill,
 *   !proto.ding4.Response>}
 */
const methodInfo_BusinessRPC_ComfirmPointBill = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.PointBill} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.PointBill} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.BusinessRPCClient.prototype.comfirmPointBill =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.BusinessRPC/ComfirmPointBill',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_ComfirmPointBill,
      callback);
};


/**
 * @param {!proto.ding4.PointBill} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.BusinessRPCPromiseClient.prototype.comfirmPointBill =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.BusinessRPC/ComfirmPointBill',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_ComfirmPointBill);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_BusinessRPC_FindPoint = new grpc.web.MethodDescriptor(
  '/ding4.BusinessRPC/FindPoint',
  grpc.web.MethodType.UNARY,
  sql_pb.Query,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodInfo_BusinessRPC_FindPoint = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.BusinessRPCClient.prototype.findPoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.BusinessRPC/FindPoint',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_FindPoint,
      callback);
};


/**
 * @param {!proto.ding4.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.BusinessRPCPromiseClient.prototype.findPoint =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.BusinessRPC/FindPoint',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_FindPoint);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_BusinessRPC_FindPointFlow = new grpc.web.MethodDescriptor(
  '/ding4.BusinessRPC/FindPointFlow',
  grpc.web.MethodType.UNARY,
  sql_pb.Query,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodInfo_BusinessRPC_FindPointFlow = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.BusinessRPCClient.prototype.findPointFlow =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.BusinessRPC/FindPointFlow',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_FindPointFlow,
      callback);
};


/**
 * @param {!proto.ding4.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.BusinessRPCPromiseClient.prototype.findPointFlow =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.BusinessRPC/FindPointFlow',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_FindPointFlow);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_BusinessRPC_FindPointBill = new grpc.web.MethodDescriptor(
  '/ding4.BusinessRPC/FindPointBill',
  grpc.web.MethodType.UNARY,
  sql_pb.Query,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodInfo_BusinessRPC_FindPointBill = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.BusinessRPCClient.prototype.findPointBill =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.BusinessRPC/FindPointBill',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_FindPointBill,
      callback);
};


/**
 * @param {!proto.ding4.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.BusinessRPCPromiseClient.prototype.findPointBill =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.BusinessRPC/FindPointBill',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_FindPointBill);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_BusinessRPC_FindPointDetail = new grpc.web.MethodDescriptor(
  '/ding4.BusinessRPC/FindPointDetail',
  grpc.web.MethodType.UNARY,
  sql_pb.Query,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodInfo_BusinessRPC_FindPointDetail = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.BusinessRPCClient.prototype.findPointDetail =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.BusinessRPC/FindPointDetail',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_FindPointDetail,
      callback);
};


/**
 * @param {!proto.ding4.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.BusinessRPCPromiseClient.prototype.findPointDetail =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.BusinessRPC/FindPointDetail',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_FindPointDetail);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Business,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_BusinessRPC_CreateBusiness = new grpc.web.MethodDescriptor(
  '/ding4.BusinessRPC/CreateBusiness',
  grpc.web.MethodType.UNARY,
  business_pb.Business,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Business} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.Business,
 *   !proto.ding4.Response>}
 */
const methodInfo_BusinessRPC_CreateBusiness = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Business} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Business} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.BusinessRPCClient.prototype.createBusiness =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.BusinessRPC/CreateBusiness',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_CreateBusiness,
      callback);
};


/**
 * @param {!proto.ding4.Business} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.BusinessRPCPromiseClient.prototype.createBusiness =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.BusinessRPC/CreateBusiness',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_CreateBusiness);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Business,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_BusinessRPC_UpdateBusiness = new grpc.web.MethodDescriptor(
  '/ding4.BusinessRPC/UpdateBusiness',
  grpc.web.MethodType.UNARY,
  business_pb.Business,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Business} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.Business,
 *   !proto.ding4.Response>}
 */
const methodInfo_BusinessRPC_UpdateBusiness = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Business} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Business} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.BusinessRPCClient.prototype.updateBusiness =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.BusinessRPC/UpdateBusiness',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_UpdateBusiness,
      callback);
};


/**
 * @param {!proto.ding4.Business} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.BusinessRPCPromiseClient.prototype.updateBusiness =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.BusinessRPC/UpdateBusiness',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_UpdateBusiness);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_BusinessRPC_FindBusiness = new grpc.web.MethodDescriptor(
  '/ding4.BusinessRPC/FindBusiness',
  grpc.web.MethodType.UNARY,
  sql_pb.Query,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodInfo_BusinessRPC_FindBusiness = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.BusinessRPCClient.prototype.findBusiness =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.BusinessRPC/FindBusiness',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_FindBusiness,
      callback);
};


/**
 * @param {!proto.ding4.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.BusinessRPCPromiseClient.prototype.findBusiness =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.BusinessRPC/FindBusiness',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_FindBusiness);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_BusinessRPC_RecordBusiness = new grpc.web.MethodDescriptor(
  '/ding4.BusinessRPC/RecordBusiness',
  grpc.web.MethodType.UNARY,
  sql_pb.Query,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodInfo_BusinessRPC_RecordBusiness = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.BusinessRPCClient.prototype.recordBusiness =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.BusinessRPC/RecordBusiness',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_RecordBusiness,
      callback);
};


/**
 * @param {!proto.ding4.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.BusinessRPCPromiseClient.prototype.recordBusiness =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.BusinessRPC/RecordBusiness',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_RecordBusiness);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Manager,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_BusinessRPC_CreateManager = new grpc.web.MethodDescriptor(
  '/ding4.BusinessRPC/CreateManager',
  grpc.web.MethodType.UNARY,
  manager_pb.Manager,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Manager} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.Manager,
 *   !proto.ding4.Response>}
 */
const methodInfo_BusinessRPC_CreateManager = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Manager} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Manager} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.BusinessRPCClient.prototype.createManager =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.BusinessRPC/CreateManager',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_CreateManager,
      callback);
};


/**
 * @param {!proto.ding4.Manager} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.BusinessRPCPromiseClient.prototype.createManager =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.BusinessRPC/CreateManager',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_CreateManager);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Manager,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_BusinessRPC_UpdateManager = new grpc.web.MethodDescriptor(
  '/ding4.BusinessRPC/UpdateManager',
  grpc.web.MethodType.UNARY,
  manager_pb.Manager,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Manager} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.Manager,
 *   !proto.ding4.Response>}
 */
const methodInfo_BusinessRPC_UpdateManager = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Manager} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Manager} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.BusinessRPCClient.prototype.updateManager =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.BusinessRPC/UpdateManager',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_UpdateManager,
      callback);
};


/**
 * @param {!proto.ding4.Manager} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.BusinessRPCPromiseClient.prototype.updateManager =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.BusinessRPC/UpdateManager',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_UpdateManager);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_BusinessRPC_FindManager = new grpc.web.MethodDescriptor(
  '/ding4.BusinessRPC/FindManager',
  grpc.web.MethodType.UNARY,
  sql_pb.Query,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodInfo_BusinessRPC_FindManager = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.BusinessRPCClient.prototype.findManager =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.BusinessRPC/FindManager',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_FindManager,
      callback);
};


/**
 * @param {!proto.ding4.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.BusinessRPCPromiseClient.prototype.findManager =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.BusinessRPC/FindManager',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_FindManager);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_BusinessRPC_RecordManager = new grpc.web.MethodDescriptor(
  '/ding4.BusinessRPC/RecordManager',
  grpc.web.MethodType.UNARY,
  sql_pb.Query,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodInfo_BusinessRPC_RecordManager = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.BusinessRPCClient.prototype.recordManager =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.BusinessRPC/RecordManager',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_RecordManager,
      callback);
};


/**
 * @param {!proto.ding4.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.BusinessRPCPromiseClient.prototype.recordManager =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.BusinessRPC/RecordManager',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_RecordManager);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Label,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_BusinessRPC_CreateLabel = new grpc.web.MethodDescriptor(
  '/ding4.BusinessRPC/CreateLabel',
  grpc.web.MethodType.UNARY,
  label_pb.Label,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Label} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.Label,
 *   !proto.ding4.Response>}
 */
const methodInfo_BusinessRPC_CreateLabel = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Label} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Label} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.BusinessRPCClient.prototype.createLabel =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.BusinessRPC/CreateLabel',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_CreateLabel,
      callback);
};


/**
 * @param {!proto.ding4.Label} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.BusinessRPCPromiseClient.prototype.createLabel =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.BusinessRPC/CreateLabel',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_CreateLabel);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Label,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_BusinessRPC_UpdateLabel = new grpc.web.MethodDescriptor(
  '/ding4.BusinessRPC/UpdateLabel',
  grpc.web.MethodType.UNARY,
  label_pb.Label,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Label} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.Label,
 *   !proto.ding4.Response>}
 */
const methodInfo_BusinessRPC_UpdateLabel = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Label} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Label} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.BusinessRPCClient.prototype.updateLabel =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.BusinessRPC/UpdateLabel',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_UpdateLabel,
      callback);
};


/**
 * @param {!proto.ding4.Label} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.BusinessRPCPromiseClient.prototype.updateLabel =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.BusinessRPC/UpdateLabel',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_UpdateLabel);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Label,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_BusinessRPC_AppendLabel = new grpc.web.MethodDescriptor(
  '/ding4.BusinessRPC/AppendLabel',
  grpc.web.MethodType.UNARY,
  label_pb.Label,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Label} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.Label,
 *   !proto.ding4.Response>}
 */
const methodInfo_BusinessRPC_AppendLabel = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Label} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Label} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.BusinessRPCClient.prototype.appendLabel =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.BusinessRPC/AppendLabel',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_AppendLabel,
      callback);
};


/**
 * @param {!proto.ding4.Label} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.BusinessRPCPromiseClient.prototype.appendLabel =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.BusinessRPC/AppendLabel',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_AppendLabel);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Label,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_BusinessRPC_SubtractLabel = new grpc.web.MethodDescriptor(
  '/ding4.BusinessRPC/SubtractLabel',
  grpc.web.MethodType.UNARY,
  label_pb.Label,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Label} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.Label,
 *   !proto.ding4.Response>}
 */
const methodInfo_BusinessRPC_SubtractLabel = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Label} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Label} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.BusinessRPCClient.prototype.subtractLabel =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.BusinessRPC/SubtractLabel',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_SubtractLabel,
      callback);
};


/**
 * @param {!proto.ding4.Label} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.BusinessRPCPromiseClient.prototype.subtractLabel =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.BusinessRPC/SubtractLabel',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_SubtractLabel);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_BusinessRPC_FindLabel = new grpc.web.MethodDescriptor(
  '/ding4.BusinessRPC/FindLabel',
  grpc.web.MethodType.UNARY,
  sql_pb.Query,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodInfo_BusinessRPC_FindLabel = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.BusinessRPCClient.prototype.findLabel =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.BusinessRPC/FindLabel',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_FindLabel,
      callback);
};


/**
 * @param {!proto.ding4.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.BusinessRPCPromiseClient.prototype.findLabel =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.BusinessRPC/FindLabel',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_FindLabel);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Linker,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_BusinessRPC_CreateLinker = new grpc.web.MethodDescriptor(
  '/ding4.BusinessRPC/CreateLinker',
  grpc.web.MethodType.UNARY,
  linker_pb.Linker,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Linker} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.Linker,
 *   !proto.ding4.Response>}
 */
const methodInfo_BusinessRPC_CreateLinker = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Linker} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Linker} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.BusinessRPCClient.prototype.createLinker =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.BusinessRPC/CreateLinker',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_CreateLinker,
      callback);
};


/**
 * @param {!proto.ding4.Linker} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.BusinessRPCPromiseClient.prototype.createLinker =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.BusinessRPC/CreateLinker',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_CreateLinker);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Linker,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_BusinessRPC_UpdateLinker = new grpc.web.MethodDescriptor(
  '/ding4.BusinessRPC/UpdateLinker',
  grpc.web.MethodType.UNARY,
  linker_pb.Linker,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Linker} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.Linker,
 *   !proto.ding4.Response>}
 */
const methodInfo_BusinessRPC_UpdateLinker = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Linker} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Linker} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.BusinessRPCClient.prototype.updateLinker =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.BusinessRPC/UpdateLinker',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_UpdateLinker,
      callback);
};


/**
 * @param {!proto.ding4.Linker} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.BusinessRPCPromiseClient.prototype.updateLinker =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.BusinessRPC/UpdateLinker',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_UpdateLinker);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_BusinessRPC_FindLinker = new grpc.web.MethodDescriptor(
  '/ding4.BusinessRPC/FindLinker',
  grpc.web.MethodType.UNARY,
  sql_pb.Query,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodInfo_BusinessRPC_FindLinker = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.BusinessRPCClient.prototype.findLinker =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.BusinessRPC/FindLinker',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_FindLinker,
      callback);
};


/**
 * @param {!proto.ding4.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.BusinessRPCPromiseClient.prototype.findLinker =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.BusinessRPC/FindLinker',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_FindLinker);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Customer,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_BusinessRPC_CreateCustomer = new grpc.web.MethodDescriptor(
  '/ding4.BusinessRPC/CreateCustomer',
  grpc.web.MethodType.UNARY,
  customer_pb.Customer,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Customer} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.Customer,
 *   !proto.ding4.Response>}
 */
const methodInfo_BusinessRPC_CreateCustomer = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Customer} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Customer} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.BusinessRPCClient.prototype.createCustomer =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.BusinessRPC/CreateCustomer',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_CreateCustomer,
      callback);
};


/**
 * @param {!proto.ding4.Customer} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.BusinessRPCPromiseClient.prototype.createCustomer =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.BusinessRPC/CreateCustomer',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_CreateCustomer);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Customer,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_BusinessRPC_UpdateCustomer = new grpc.web.MethodDescriptor(
  '/ding4.BusinessRPC/UpdateCustomer',
  grpc.web.MethodType.UNARY,
  customer_pb.Customer,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Customer} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.Customer,
 *   !proto.ding4.Response>}
 */
const methodInfo_BusinessRPC_UpdateCustomer = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Customer} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Customer} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.BusinessRPCClient.prototype.updateCustomer =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.BusinessRPC/UpdateCustomer',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_UpdateCustomer,
      callback);
};


/**
 * @param {!proto.ding4.Customer} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.BusinessRPCPromiseClient.prototype.updateCustomer =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.BusinessRPC/UpdateCustomer',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_UpdateCustomer);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_BusinessRPC_FindCustomer = new grpc.web.MethodDescriptor(
  '/ding4.BusinessRPC/FindCustomer',
  grpc.web.MethodType.UNARY,
  sql_pb.Query,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodInfo_BusinessRPC_FindCustomer = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.BusinessRPCClient.prototype.findCustomer =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.BusinessRPC/FindCustomer',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_FindCustomer,
      callback);
};


/**
 * @param {!proto.ding4.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.BusinessRPCPromiseClient.prototype.findCustomer =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.BusinessRPC/FindCustomer',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_FindCustomer);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_BusinessRPC_RecordCustomer = new grpc.web.MethodDescriptor(
  '/ding4.BusinessRPC/RecordCustomer',
  grpc.web.MethodType.UNARY,
  sql_pb.Query,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodInfo_BusinessRPC_RecordCustomer = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.BusinessRPCClient.prototype.recordCustomer =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.BusinessRPC/RecordCustomer',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_RecordCustomer,
      callback);
};


/**
 * @param {!proto.ding4.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.BusinessRPCPromiseClient.prototype.recordCustomer =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.BusinessRPC/RecordCustomer',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_RecordCustomer);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Product,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_BusinessRPC_CreateProduct = new grpc.web.MethodDescriptor(
  '/ding4.BusinessRPC/CreateProduct',
  grpc.web.MethodType.UNARY,
  product_pb.Product,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Product} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.Product,
 *   !proto.ding4.Response>}
 */
const methodInfo_BusinessRPC_CreateProduct = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Product} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Product} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.BusinessRPCClient.prototype.createProduct =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.BusinessRPC/CreateProduct',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_CreateProduct,
      callback);
};


/**
 * @param {!proto.ding4.Product} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.BusinessRPCPromiseClient.prototype.createProduct =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.BusinessRPC/CreateProduct',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_CreateProduct);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Product,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_BusinessRPC_UpdateProduct = new grpc.web.MethodDescriptor(
  '/ding4.BusinessRPC/UpdateProduct',
  grpc.web.MethodType.UNARY,
  product_pb.Product,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Product} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.Product,
 *   !proto.ding4.Response>}
 */
const methodInfo_BusinessRPC_UpdateProduct = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Product} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Product} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.BusinessRPCClient.prototype.updateProduct =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.BusinessRPC/UpdateProduct',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_UpdateProduct,
      callback);
};


/**
 * @param {!proto.ding4.Product} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.BusinessRPCPromiseClient.prototype.updateProduct =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.BusinessRPC/UpdateProduct',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_UpdateProduct);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_BusinessRPC_FindProduct = new grpc.web.MethodDescriptor(
  '/ding4.BusinessRPC/FindProduct',
  grpc.web.MethodType.UNARY,
  sql_pb.Query,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodInfo_BusinessRPC_FindProduct = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.BusinessRPCClient.prototype.findProduct =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.BusinessRPC/FindProduct',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_FindProduct,
      callback);
};


/**
 * @param {!proto.ding4.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.BusinessRPCPromiseClient.prototype.findProduct =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.BusinessRPC/FindProduct',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_FindProduct);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_BusinessRPC_RecordProduct = new grpc.web.MethodDescriptor(
  '/ding4.BusinessRPC/RecordProduct',
  grpc.web.MethodType.UNARY,
  sql_pb.Query,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodInfo_BusinessRPC_RecordProduct = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.BusinessRPCClient.prototype.recordProduct =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.BusinessRPC/RecordProduct',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_RecordProduct,
      callback);
};


/**
 * @param {!proto.ding4.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.BusinessRPCPromiseClient.prototype.recordProduct =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.BusinessRPC/RecordProduct',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_RecordProduct);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Image,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_BusinessRPC_CreateProductImage = new grpc.web.MethodDescriptor(
  '/ding4.BusinessRPC/CreateProductImage',
  grpc.web.MethodType.UNARY,
  image_pb.Image,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Image} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.Image,
 *   !proto.ding4.Response>}
 */
const methodInfo_BusinessRPC_CreateProductImage = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Image} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Image} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.BusinessRPCClient.prototype.createProductImage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.BusinessRPC/CreateProductImage',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_CreateProductImage,
      callback);
};


/**
 * @param {!proto.ding4.Image} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.BusinessRPCPromiseClient.prototype.createProductImage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.BusinessRPC/CreateProductImage',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_CreateProductImage);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Image,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_BusinessRPC_UpdateProductImage = new grpc.web.MethodDescriptor(
  '/ding4.BusinessRPC/UpdateProductImage',
  grpc.web.MethodType.UNARY,
  image_pb.Image,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Image} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.Image,
 *   !proto.ding4.Response>}
 */
const methodInfo_BusinessRPC_UpdateProductImage = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Image} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Image} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.BusinessRPCClient.prototype.updateProductImage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.BusinessRPC/UpdateProductImage',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_UpdateProductImage,
      callback);
};


/**
 * @param {!proto.ding4.Image} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.BusinessRPCPromiseClient.prototype.updateProductImage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.BusinessRPC/UpdateProductImage',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_UpdateProductImage);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Image,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_BusinessRPC_DeleteProductImage = new grpc.web.MethodDescriptor(
  '/ding4.BusinessRPC/DeleteProductImage',
  grpc.web.MethodType.UNARY,
  image_pb.Image,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Image} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.Image,
 *   !proto.ding4.Response>}
 */
const methodInfo_BusinessRPC_DeleteProductImage = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Image} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Image} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.BusinessRPCClient.prototype.deleteProductImage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.BusinessRPC/DeleteProductImage',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_DeleteProductImage,
      callback);
};


/**
 * @param {!proto.ding4.Image} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.BusinessRPCPromiseClient.prototype.deleteProductImage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.BusinessRPC/DeleteProductImage',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_DeleteProductImage);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.ProductSpec,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_BusinessRPC_CreateProductSpec = new grpc.web.MethodDescriptor(
  '/ding4.BusinessRPC/CreateProductSpec',
  grpc.web.MethodType.UNARY,
  product_pb.ProductSpec,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.ProductSpec} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.ProductSpec,
 *   !proto.ding4.Response>}
 */
const methodInfo_BusinessRPC_CreateProductSpec = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.ProductSpec} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.ProductSpec} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.BusinessRPCClient.prototype.createProductSpec =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.BusinessRPC/CreateProductSpec',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_CreateProductSpec,
      callback);
};


/**
 * @param {!proto.ding4.ProductSpec} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.BusinessRPCPromiseClient.prototype.createProductSpec =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.BusinessRPC/CreateProductSpec',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_CreateProductSpec);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.ProductSpec,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_BusinessRPC_UpdateProductSpec = new grpc.web.MethodDescriptor(
  '/ding4.BusinessRPC/UpdateProductSpec',
  grpc.web.MethodType.UNARY,
  product_pb.ProductSpec,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.ProductSpec} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.ProductSpec,
 *   !proto.ding4.Response>}
 */
const methodInfo_BusinessRPC_UpdateProductSpec = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.ProductSpec} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.ProductSpec} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.BusinessRPCClient.prototype.updateProductSpec =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.BusinessRPC/UpdateProductSpec',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_UpdateProductSpec,
      callback);
};


/**
 * @param {!proto.ding4.ProductSpec} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.BusinessRPCPromiseClient.prototype.updateProductSpec =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.BusinessRPC/UpdateProductSpec',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_UpdateProductSpec);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_BusinessRPC_FindProductSpec = new grpc.web.MethodDescriptor(
  '/ding4.BusinessRPC/FindProductSpec',
  grpc.web.MethodType.UNARY,
  sql_pb.Query,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodInfo_BusinessRPC_FindProductSpec = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.BusinessRPCClient.prototype.findProductSpec =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.BusinessRPC/FindProductSpec',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_FindProductSpec,
      callback);
};


/**
 * @param {!proto.ding4.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.BusinessRPCPromiseClient.prototype.findProductSpec =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.BusinessRPC/FindProductSpec',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_FindProductSpec);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Image,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_BusinessRPC_CreateProductSpecImage = new grpc.web.MethodDescriptor(
  '/ding4.BusinessRPC/CreateProductSpecImage',
  grpc.web.MethodType.UNARY,
  image_pb.Image,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Image} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.Image,
 *   !proto.ding4.Response>}
 */
const methodInfo_BusinessRPC_CreateProductSpecImage = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Image} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Image} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.BusinessRPCClient.prototype.createProductSpecImage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.BusinessRPC/CreateProductSpecImage',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_CreateProductSpecImage,
      callback);
};


/**
 * @param {!proto.ding4.Image} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.BusinessRPCPromiseClient.prototype.createProductSpecImage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.BusinessRPC/CreateProductSpecImage',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_CreateProductSpecImage);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Image,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_BusinessRPC_UpdateProductSpecImage = new grpc.web.MethodDescriptor(
  '/ding4.BusinessRPC/UpdateProductSpecImage',
  grpc.web.MethodType.UNARY,
  image_pb.Image,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Image} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.Image,
 *   !proto.ding4.Response>}
 */
const methodInfo_BusinessRPC_UpdateProductSpecImage = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Image} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Image} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.BusinessRPCClient.prototype.updateProductSpecImage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.BusinessRPC/UpdateProductSpecImage',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_UpdateProductSpecImage,
      callback);
};


/**
 * @param {!proto.ding4.Image} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.BusinessRPCPromiseClient.prototype.updateProductSpecImage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.BusinessRPC/UpdateProductSpecImage',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_UpdateProductSpecImage);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Image,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_BusinessRPC_DeleteProductSpecImage = new grpc.web.MethodDescriptor(
  '/ding4.BusinessRPC/DeleteProductSpecImage',
  grpc.web.MethodType.UNARY,
  image_pb.Image,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Image} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.Image,
 *   !proto.ding4.Response>}
 */
const methodInfo_BusinessRPC_DeleteProductSpecImage = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Image} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Image} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.BusinessRPCClient.prototype.deleteProductSpecImage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.BusinessRPC/DeleteProductSpecImage',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_DeleteProductSpecImage,
      callback);
};


/**
 * @param {!proto.ding4.Image} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.BusinessRPCPromiseClient.prototype.deleteProductSpecImage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.BusinessRPC/DeleteProductSpecImage',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_DeleteProductSpecImage);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Store,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_BusinessRPC_RegisterStore = new grpc.web.MethodDescriptor(
  '/ding4.BusinessRPC/RegisterStore',
  grpc.web.MethodType.UNARY,
  store_pb.Store,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Store} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.Store,
 *   !proto.ding4.Response>}
 */
const methodInfo_BusinessRPC_RegisterStore = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Store} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Store} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.BusinessRPCClient.prototype.registerStore =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.BusinessRPC/RegisterStore',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_RegisterStore,
      callback);
};


/**
 * @param {!proto.ding4.Store} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.BusinessRPCPromiseClient.prototype.registerStore =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.BusinessRPC/RegisterStore',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_RegisterStore);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Store,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_BusinessRPC_OpenStore = new grpc.web.MethodDescriptor(
  '/ding4.BusinessRPC/OpenStore',
  grpc.web.MethodType.UNARY,
  store_pb.Store,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Store} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.Store,
 *   !proto.ding4.Response>}
 */
const methodInfo_BusinessRPC_OpenStore = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Store} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Store} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.BusinessRPCClient.prototype.openStore =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.BusinessRPC/OpenStore',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_OpenStore,
      callback);
};


/**
 * @param {!proto.ding4.Store} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.BusinessRPCPromiseClient.prototype.openStore =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.BusinessRPC/OpenStore',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_OpenStore);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Store,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_BusinessRPC_CreateStore = new grpc.web.MethodDescriptor(
  '/ding4.BusinessRPC/CreateStore',
  grpc.web.MethodType.UNARY,
  store_pb.Store,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Store} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.Store,
 *   !proto.ding4.Response>}
 */
const methodInfo_BusinessRPC_CreateStore = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Store} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Store} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.BusinessRPCClient.prototype.createStore =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.BusinessRPC/CreateStore',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_CreateStore,
      callback);
};


/**
 * @param {!proto.ding4.Store} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.BusinessRPCPromiseClient.prototype.createStore =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.BusinessRPC/CreateStore',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_CreateStore);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Store,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_BusinessRPC_UpdateStore = new grpc.web.MethodDescriptor(
  '/ding4.BusinessRPC/UpdateStore',
  grpc.web.MethodType.UNARY,
  store_pb.Store,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Store} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.Store,
 *   !proto.ding4.Response>}
 */
const methodInfo_BusinessRPC_UpdateStore = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Store} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Store} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.BusinessRPCClient.prototype.updateStore =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.BusinessRPC/UpdateStore',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_UpdateStore,
      callback);
};


/**
 * @param {!proto.ding4.Store} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.BusinessRPCPromiseClient.prototype.updateStore =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.BusinessRPC/UpdateStore',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_UpdateStore);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_BusinessRPC_FindStore = new grpc.web.MethodDescriptor(
  '/ding4.BusinessRPC/FindStore',
  grpc.web.MethodType.UNARY,
  sql_pb.Query,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodInfo_BusinessRPC_FindStore = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.BusinessRPCClient.prototype.findStore =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.BusinessRPC/FindStore',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_FindStore,
      callback);
};


/**
 * @param {!proto.ding4.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.BusinessRPCPromiseClient.prototype.findStore =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.BusinessRPC/FindStore',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_FindStore);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_BusinessRPC_RecordStore = new grpc.web.MethodDescriptor(
  '/ding4.BusinessRPC/RecordStore',
  grpc.web.MethodType.UNARY,
  sql_pb.Query,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodInfo_BusinessRPC_RecordStore = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.BusinessRPCClient.prototype.recordStore =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.BusinessRPC/RecordStore',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_RecordStore,
      callback);
};


/**
 * @param {!proto.ding4.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.BusinessRPCPromiseClient.prototype.recordStore =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.BusinessRPC/RecordStore',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_RecordStore);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Remind,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_BusinessRPC_CreateRemind = new grpc.web.MethodDescriptor(
  '/ding4.BusinessRPC/CreateRemind',
  grpc.web.MethodType.UNARY,
  remind_pb.Remind,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Remind} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.Remind,
 *   !proto.ding4.Response>}
 */
const methodInfo_BusinessRPC_CreateRemind = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Remind} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Remind} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.BusinessRPCClient.prototype.createRemind =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.BusinessRPC/CreateRemind',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_CreateRemind,
      callback);
};


/**
 * @param {!proto.ding4.Remind} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.BusinessRPCPromiseClient.prototype.createRemind =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.BusinessRPC/CreateRemind',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_CreateRemind);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Remind,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_BusinessRPC_UpdateRemind = new grpc.web.MethodDescriptor(
  '/ding4.BusinessRPC/UpdateRemind',
  grpc.web.MethodType.UNARY,
  remind_pb.Remind,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Remind} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.Remind,
 *   !proto.ding4.Response>}
 */
const methodInfo_BusinessRPC_UpdateRemind = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Remind} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Remind} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.BusinessRPCClient.prototype.updateRemind =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.BusinessRPC/UpdateRemind',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_UpdateRemind,
      callback);
};


/**
 * @param {!proto.ding4.Remind} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.BusinessRPCPromiseClient.prototype.updateRemind =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.BusinessRPC/UpdateRemind',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_UpdateRemind);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_BusinessRPC_FindRemind = new grpc.web.MethodDescriptor(
  '/ding4.BusinessRPC/FindRemind',
  grpc.web.MethodType.UNARY,
  sql_pb.Query,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodInfo_BusinessRPC_FindRemind = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.BusinessRPCClient.prototype.findRemind =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.BusinessRPC/FindRemind',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_FindRemind,
      callback);
};


/**
 * @param {!proto.ding4.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.BusinessRPCPromiseClient.prototype.findRemind =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.BusinessRPC/FindRemind',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_FindRemind);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Order,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_BusinessRPC_CreateOrder = new grpc.web.MethodDescriptor(
  '/ding4.BusinessRPC/CreateOrder',
  grpc.web.MethodType.UNARY,
  order_pb.Order,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Order} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.Order,
 *   !proto.ding4.Response>}
 */
const methodInfo_BusinessRPC_CreateOrder = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Order} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Order} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.BusinessRPCClient.prototype.createOrder =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.BusinessRPC/CreateOrder',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_CreateOrder,
      callback);
};


/**
 * @param {!proto.ding4.Order} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.BusinessRPCPromiseClient.prototype.createOrder =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.BusinessRPC/CreateOrder',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_CreateOrder);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Order,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_BusinessRPC_PaymentOrder = new grpc.web.MethodDescriptor(
  '/ding4.BusinessRPC/PaymentOrder',
  grpc.web.MethodType.UNARY,
  order_pb.Order,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Order} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.Order,
 *   !proto.ding4.Response>}
 */
const methodInfo_BusinessRPC_PaymentOrder = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Order} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Order} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.BusinessRPCClient.prototype.paymentOrder =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.BusinessRPC/PaymentOrder',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_PaymentOrder,
      callback);
};


/**
 * @param {!proto.ding4.Order} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.BusinessRPCPromiseClient.prototype.paymentOrder =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.BusinessRPC/PaymentOrder',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_PaymentOrder);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Order,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_BusinessRPC_UpdatePayState = new grpc.web.MethodDescriptor(
  '/ding4.BusinessRPC/UpdatePayState',
  grpc.web.MethodType.UNARY,
  order_pb.Order,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Order} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.Order,
 *   !proto.ding4.Response>}
 */
const methodInfo_BusinessRPC_UpdatePayState = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Order} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Order} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.BusinessRPCClient.prototype.updatePayState =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.BusinessRPC/UpdatePayState',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_UpdatePayState,
      callback);
};


/**
 * @param {!proto.ding4.Order} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.BusinessRPCPromiseClient.prototype.updatePayState =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.BusinessRPC/UpdatePayState',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_UpdatePayState);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Order,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_BusinessRPC_UpdateDeliveryState = new grpc.web.MethodDescriptor(
  '/ding4.BusinessRPC/UpdateDeliveryState',
  grpc.web.MethodType.UNARY,
  order_pb.Order,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Order} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.Order,
 *   !proto.ding4.Response>}
 */
const methodInfo_BusinessRPC_UpdateDeliveryState = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Order} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Order} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.BusinessRPCClient.prototype.updateDeliveryState =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.BusinessRPC/UpdateDeliveryState',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_UpdateDeliveryState,
      callback);
};


/**
 * @param {!proto.ding4.Order} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.BusinessRPCPromiseClient.prototype.updateDeliveryState =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.BusinessRPC/UpdateDeliveryState',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_UpdateDeliveryState);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_BusinessRPC_FindOrder = new grpc.web.MethodDescriptor(
  '/ding4.BusinessRPC/FindOrder',
  grpc.web.MethodType.UNARY,
  sql_pb.Query,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodInfo_BusinessRPC_FindOrder = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.BusinessRPCClient.prototype.findOrder =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.BusinessRPC/FindOrder',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_FindOrder,
      callback);
};


/**
 * @param {!proto.ding4.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.BusinessRPCPromiseClient.prototype.findOrder =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.BusinessRPC/FindOrder',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_FindOrder);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Stack,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_BusinessRPC_CreateStack = new grpc.web.MethodDescriptor(
  '/ding4.BusinessRPC/CreateStack',
  grpc.web.MethodType.UNARY,
  stack_pb.Stack,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Stack} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.Stack,
 *   !proto.ding4.Response>}
 */
const methodInfo_BusinessRPC_CreateStack = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Stack} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Stack} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.BusinessRPCClient.prototype.createStack =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.BusinessRPC/CreateStack',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_CreateStack,
      callback);
};


/**
 * @param {!proto.ding4.Stack} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.BusinessRPCPromiseClient.prototype.createStack =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.BusinessRPC/CreateStack',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_CreateStack);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_BusinessRPC_FindStack = new grpc.web.MethodDescriptor(
  '/ding4.BusinessRPC/FindStack',
  grpc.web.MethodType.UNARY,
  sql_pb.Query,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodInfo_BusinessRPC_FindStack = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.BusinessRPCClient.prototype.findStack =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.BusinessRPC/FindStack',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_FindStack,
      callback);
};


/**
 * @param {!proto.ding4.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.BusinessRPCPromiseClient.prototype.findStack =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.BusinessRPC/FindStack',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_FindStack);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_BusinessRPC_FindProductStack = new grpc.web.MethodDescriptor(
  '/ding4.BusinessRPC/FindProductStack',
  grpc.web.MethodType.UNARY,
  sql_pb.Query,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodInfo_BusinessRPC_FindProductStack = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.BusinessRPCClient.prototype.findProductStack =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.BusinessRPC/FindProductStack',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_FindProductStack,
      callback);
};


/**
 * @param {!proto.ding4.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.BusinessRPCPromiseClient.prototype.findProductStack =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.BusinessRPC/FindProductStack',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_FindProductStack);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_BusinessRPC_FindSpecStack = new grpc.web.MethodDescriptor(
  '/ding4.BusinessRPC/FindSpecStack',
  grpc.web.MethodType.UNARY,
  sql_pb.Query,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodInfo_BusinessRPC_FindSpecStack = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.BusinessRPCClient.prototype.findSpecStack =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.BusinessRPC/FindSpecStack',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_FindSpecStack,
      callback);
};


/**
 * @param {!proto.ding4.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.BusinessRPCPromiseClient.prototype.findSpecStack =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.BusinessRPC/FindSpecStack',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_FindSpecStack);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Supplier,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_BusinessRPC_CreateSupplier = new grpc.web.MethodDescriptor(
  '/ding4.BusinessRPC/CreateSupplier',
  grpc.web.MethodType.UNARY,
  supplier_pb.Supplier,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Supplier} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.Supplier,
 *   !proto.ding4.Response>}
 */
const methodInfo_BusinessRPC_CreateSupplier = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Supplier} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Supplier} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.BusinessRPCClient.prototype.createSupplier =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.BusinessRPC/CreateSupplier',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_CreateSupplier,
      callback);
};


/**
 * @param {!proto.ding4.Supplier} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.BusinessRPCPromiseClient.prototype.createSupplier =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.BusinessRPC/CreateSupplier',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_CreateSupplier);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Supplier,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_BusinessRPC_UpdateSupplier = new grpc.web.MethodDescriptor(
  '/ding4.BusinessRPC/UpdateSupplier',
  grpc.web.MethodType.UNARY,
  supplier_pb.Supplier,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Supplier} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.Supplier,
 *   !proto.ding4.Response>}
 */
const methodInfo_BusinessRPC_UpdateSupplier = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Supplier} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Supplier} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.BusinessRPCClient.prototype.updateSupplier =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.BusinessRPC/UpdateSupplier',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_UpdateSupplier,
      callback);
};


/**
 * @param {!proto.ding4.Supplier} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.BusinessRPCPromiseClient.prototype.updateSupplier =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.BusinessRPC/UpdateSupplier',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_UpdateSupplier);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_BusinessRPC_FindSupplier = new grpc.web.MethodDescriptor(
  '/ding4.BusinessRPC/FindSupplier',
  grpc.web.MethodType.UNARY,
  sql_pb.Query,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodInfo_BusinessRPC_FindSupplier = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.BusinessRPCClient.prototype.findSupplier =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.BusinessRPC/FindSupplier',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_FindSupplier,
      callback);
};


/**
 * @param {!proto.ding4.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.BusinessRPCPromiseClient.prototype.findSupplier =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.BusinessRPC/FindSupplier',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_FindSupplier);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Setting,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_BusinessRPC_CreateSetting = new grpc.web.MethodDescriptor(
  '/ding4.BusinessRPC/CreateSetting',
  grpc.web.MethodType.UNARY,
  setting_pb.Setting,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Setting} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.Setting,
 *   !proto.ding4.Response>}
 */
const methodInfo_BusinessRPC_CreateSetting = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Setting} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Setting} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.BusinessRPCClient.prototype.createSetting =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.BusinessRPC/CreateSetting',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_CreateSetting,
      callback);
};


/**
 * @param {!proto.ding4.Setting} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.BusinessRPCPromiseClient.prototype.createSetting =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.BusinessRPC/CreateSetting',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_CreateSetting);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Setting,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_BusinessRPC_UpdateSetting = new grpc.web.MethodDescriptor(
  '/ding4.BusinessRPC/UpdateSetting',
  grpc.web.MethodType.UNARY,
  setting_pb.Setting,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Setting} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.Setting,
 *   !proto.ding4.Response>}
 */
const methodInfo_BusinessRPC_UpdateSetting = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Setting} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Setting} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.BusinessRPCClient.prototype.updateSetting =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.BusinessRPC/UpdateSetting',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_UpdateSetting,
      callback);
};


/**
 * @param {!proto.ding4.Setting} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.BusinessRPCPromiseClient.prototype.updateSetting =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.BusinessRPC/UpdateSetting',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_UpdateSetting);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Setting,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_BusinessRPC_DeleteSetting = new grpc.web.MethodDescriptor(
  '/ding4.BusinessRPC/DeleteSetting',
  grpc.web.MethodType.UNARY,
  setting_pb.Setting,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Setting} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.Setting,
 *   !proto.ding4.Response>}
 */
const methodInfo_BusinessRPC_DeleteSetting = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Setting} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Setting} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.BusinessRPCClient.prototype.deleteSetting =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.BusinessRPC/DeleteSetting',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_DeleteSetting,
      callback);
};


/**
 * @param {!proto.ding4.Setting} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.BusinessRPCPromiseClient.prototype.deleteSetting =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.BusinessRPC/DeleteSetting',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_DeleteSetting);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_BusinessRPC_FindSetting = new grpc.web.MethodDescriptor(
  '/ding4.BusinessRPC/FindSetting',
  grpc.web.MethodType.UNARY,
  sql_pb.Query,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodInfo_BusinessRPC_FindSetting = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Query} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.BusinessRPCClient.prototype.findSetting =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.BusinessRPC/FindSetting',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_FindSetting,
      callback);
};


/**
 * @param {!proto.ding4.Query} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.BusinessRPCPromiseClient.prototype.findSetting =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.BusinessRPC/FindSetting',
      request,
      metadata || {},
      methodDescriptor_BusinessRPC_FindSetting);
};


module.exports = proto.ding4;

