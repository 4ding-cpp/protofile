/**
 * @fileoverview gRPC-Web generated client stub for ding4
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var sql_pb = require('./sql_pb.js')

var password_pb = require('./password_pb.js')

var label_pb = require('./label_pb.js')

var car_pb = require('./car_pb.js')

var manager_pb = require('./manager_pb.js')

var customer_pb = require('./customer_pb.js')

var customer$link_pb = require('./customer-link_pb.js')

var product$link_pb = require('./product-link_pb.js')

var activity_pb = require('./activity_pb.js')

var order_pb = require('./order_pb.js')

var remind_pb = require('./remind_pb.js')

var image_pb = require('./image_pb.js')

var setting_pb = require('./setting_pb.js')

var web$layout_pb = require('./web-layout_pb.js')

var web$page_pb = require('./web-page_pb.js')

var web$item_pb = require('./web-item_pb.js')

var web$base_pb = require('./web-base_pb.js')

var template_pb = require('./template_pb.js')

var message_pb = require('./message_pb.js')
const proto = {};
proto.ding4 = require('./store.rpc_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.ding4.StoreRPCClient =
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
proto.ding4.StoreRPCPromiseClient =
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
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_StoreRPC_WhoAmI = new grpc.web.MethodDescriptor(
  '/ding4.StoreRPC/WhoAmI',
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
const methodInfo_StoreRPC_WhoAmI = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.StoreRPCClient.prototype.whoAmI =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.StoreRPC/WhoAmI',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_WhoAmI,
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
proto.ding4.StoreRPCPromiseClient.prototype.whoAmI =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.StoreRPC/WhoAmI',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_WhoAmI);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Password,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_StoreRPC_ChangePassword = new grpc.web.MethodDescriptor(
  '/ding4.StoreRPC/ChangePassword',
  grpc.web.MethodType.UNARY,
  password_pb.Password,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Password} request
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
 *   !proto.ding4.Password,
 *   !proto.ding4.Response>}
 */
const methodInfo_StoreRPC_ChangePassword = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Password} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Password} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.StoreRPCClient.prototype.changePassword =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.StoreRPC/ChangePassword',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_ChangePassword,
      callback);
};


/**
 * @param {!proto.ding4.Password} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.StoreRPCPromiseClient.prototype.changePassword =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.StoreRPC/ChangePassword',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_ChangePassword);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Manager,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_StoreRPC_ChangeInfo = new grpc.web.MethodDescriptor(
  '/ding4.StoreRPC/ChangeInfo',
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
const methodInfo_StoreRPC_ChangeInfo = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.StoreRPCClient.prototype.changeInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.StoreRPC/ChangeInfo',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_ChangeInfo,
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
proto.ding4.StoreRPCPromiseClient.prototype.changeInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.StoreRPC/ChangeInfo',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_ChangeInfo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Manager,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_StoreRPC_ChangeWhitelist = new grpc.web.MethodDescriptor(
  '/ding4.StoreRPC/ChangeWhitelist',
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
const methodInfo_StoreRPC_ChangeWhitelist = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.StoreRPCClient.prototype.changeWhitelist =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.StoreRPC/ChangeWhitelist',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_ChangeWhitelist,
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
proto.ding4.StoreRPCPromiseClient.prototype.changeWhitelist =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.StoreRPC/ChangeWhitelist',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_ChangeWhitelist);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_StoreRPC_FindPermission = new grpc.web.MethodDescriptor(
  '/ding4.StoreRPC/FindPermission',
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
const methodInfo_StoreRPC_FindPermission = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.StoreRPCClient.prototype.findPermission =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.StoreRPC/FindPermission',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_FindPermission,
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
proto.ding4.StoreRPCPromiseClient.prototype.findPermission =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.StoreRPC/FindPermission',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_FindPermission);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Label,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_StoreRPC_CreateLabel = new grpc.web.MethodDescriptor(
  '/ding4.StoreRPC/CreateLabel',
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
const methodInfo_StoreRPC_CreateLabel = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.StoreRPCClient.prototype.createLabel =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.StoreRPC/CreateLabel',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_CreateLabel,
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
proto.ding4.StoreRPCPromiseClient.prototype.createLabel =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.StoreRPC/CreateLabel',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_CreateLabel);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Label,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_StoreRPC_UpdateLabel = new grpc.web.MethodDescriptor(
  '/ding4.StoreRPC/UpdateLabel',
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
const methodInfo_StoreRPC_UpdateLabel = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.StoreRPCClient.prototype.updateLabel =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.StoreRPC/UpdateLabel',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_UpdateLabel,
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
proto.ding4.StoreRPCPromiseClient.prototype.updateLabel =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.StoreRPC/UpdateLabel',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_UpdateLabel);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Label,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_StoreRPC_AppendLabel = new grpc.web.MethodDescriptor(
  '/ding4.StoreRPC/AppendLabel',
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
const methodInfo_StoreRPC_AppendLabel = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.StoreRPCClient.prototype.appendLabel =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.StoreRPC/AppendLabel',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_AppendLabel,
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
proto.ding4.StoreRPCPromiseClient.prototype.appendLabel =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.StoreRPC/AppendLabel',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_AppendLabel);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Label,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_StoreRPC_SubtractLabel = new grpc.web.MethodDescriptor(
  '/ding4.StoreRPC/SubtractLabel',
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
const methodInfo_StoreRPC_SubtractLabel = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.StoreRPCClient.prototype.subtractLabel =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.StoreRPC/SubtractLabel',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_SubtractLabel,
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
proto.ding4.StoreRPCPromiseClient.prototype.subtractLabel =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.StoreRPC/SubtractLabel',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_SubtractLabel);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_StoreRPC_FindLabel = new grpc.web.MethodDescriptor(
  '/ding4.StoreRPC/FindLabel',
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
const methodInfo_StoreRPC_FindLabel = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.StoreRPCClient.prototype.findLabel =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.StoreRPC/FindLabel',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_FindLabel,
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
proto.ding4.StoreRPCPromiseClient.prototype.findLabel =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.StoreRPC/FindLabel',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_FindLabel);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Activity,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_StoreRPC_CreateActivity = new grpc.web.MethodDescriptor(
  '/ding4.StoreRPC/CreateActivity',
  grpc.web.MethodType.UNARY,
  activity_pb.Activity,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Activity} request
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
 *   !proto.ding4.Activity,
 *   !proto.ding4.Response>}
 */
const methodInfo_StoreRPC_CreateActivity = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Activity} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Activity} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.StoreRPCClient.prototype.createActivity =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.StoreRPC/CreateActivity',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_CreateActivity,
      callback);
};


/**
 * @param {!proto.ding4.Activity} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.StoreRPCPromiseClient.prototype.createActivity =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.StoreRPC/CreateActivity',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_CreateActivity);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Activity,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_StoreRPC_UpdateActivity = new grpc.web.MethodDescriptor(
  '/ding4.StoreRPC/UpdateActivity',
  grpc.web.MethodType.UNARY,
  activity_pb.Activity,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Activity} request
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
 *   !proto.ding4.Activity,
 *   !proto.ding4.Response>}
 */
const methodInfo_StoreRPC_UpdateActivity = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Activity} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Activity} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.StoreRPCClient.prototype.updateActivity =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.StoreRPC/UpdateActivity',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_UpdateActivity,
      callback);
};


/**
 * @param {!proto.ding4.Activity} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.StoreRPCPromiseClient.prototype.updateActivity =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.StoreRPC/UpdateActivity',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_UpdateActivity);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_StoreRPC_FindActivity = new grpc.web.MethodDescriptor(
  '/ding4.StoreRPC/FindActivity',
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
const methodInfo_StoreRPC_FindActivity = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.StoreRPCClient.prototype.findActivity =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.StoreRPC/FindActivity',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_FindActivity,
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
proto.ding4.StoreRPCPromiseClient.prototype.findActivity =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.StoreRPC/FindActivity',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_FindActivity);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.ActivityProduct,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_StoreRPC_AppendActivityProduct = new grpc.web.MethodDescriptor(
  '/ding4.StoreRPC/AppendActivityProduct',
  grpc.web.MethodType.UNARY,
  activity_pb.ActivityProduct,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.ActivityProduct} request
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
 *   !proto.ding4.ActivityProduct,
 *   !proto.ding4.Response>}
 */
const methodInfo_StoreRPC_AppendActivityProduct = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.ActivityProduct} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.ActivityProduct} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.StoreRPCClient.prototype.appendActivityProduct =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.StoreRPC/AppendActivityProduct',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_AppendActivityProduct,
      callback);
};


/**
 * @param {!proto.ding4.ActivityProduct} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.StoreRPCPromiseClient.prototype.appendActivityProduct =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.StoreRPC/AppendActivityProduct',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_AppendActivityProduct);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.ActivityProduct,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_StoreRPC_SubstractActivityProduct = new grpc.web.MethodDescriptor(
  '/ding4.StoreRPC/SubstractActivityProduct',
  grpc.web.MethodType.UNARY,
  activity_pb.ActivityProduct,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.ActivityProduct} request
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
 *   !proto.ding4.ActivityProduct,
 *   !proto.ding4.Response>}
 */
const methodInfo_StoreRPC_SubstractActivityProduct = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.ActivityProduct} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.ActivityProduct} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.StoreRPCClient.prototype.substractActivityProduct =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.StoreRPC/SubstractActivityProduct',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_SubstractActivityProduct,
      callback);
};


/**
 * @param {!proto.ding4.ActivityProduct} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.StoreRPCPromiseClient.prototype.substractActivityProduct =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.StoreRPC/SubstractActivityProduct',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_SubstractActivityProduct);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.ActivityProduct,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_StoreRPC_FindActivityProduct = new grpc.web.MethodDescriptor(
  '/ding4.StoreRPC/FindActivityProduct',
  grpc.web.MethodType.UNARY,
  activity_pb.ActivityProduct,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.ActivityProduct} request
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
 *   !proto.ding4.ActivityProduct,
 *   !proto.ding4.Response>}
 */
const methodInfo_StoreRPC_FindActivityProduct = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.ActivityProduct} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.ActivityProduct} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.StoreRPCClient.prototype.findActivityProduct =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.StoreRPC/FindActivityProduct',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_FindActivityProduct,
      callback);
};


/**
 * @param {!proto.ding4.ActivityProduct} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.StoreRPCPromiseClient.prototype.findActivityProduct =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.StoreRPC/FindActivityProduct',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_FindActivityProduct);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Discount,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_StoreRPC_CreateDiscount = new grpc.web.MethodDescriptor(
  '/ding4.StoreRPC/CreateDiscount',
  grpc.web.MethodType.UNARY,
  activity_pb.Discount,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Discount} request
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
 *   !proto.ding4.Discount,
 *   !proto.ding4.Response>}
 */
const methodInfo_StoreRPC_CreateDiscount = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Discount} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Discount} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.StoreRPCClient.prototype.createDiscount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.StoreRPC/CreateDiscount',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_CreateDiscount,
      callback);
};


/**
 * @param {!proto.ding4.Discount} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.StoreRPCPromiseClient.prototype.createDiscount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.StoreRPC/CreateDiscount',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_CreateDiscount);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Discount,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_StoreRPC_UpdateDiscount = new grpc.web.MethodDescriptor(
  '/ding4.StoreRPC/UpdateDiscount',
  grpc.web.MethodType.UNARY,
  activity_pb.Discount,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Discount} request
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
 *   !proto.ding4.Discount,
 *   !proto.ding4.Response>}
 */
const methodInfo_StoreRPC_UpdateDiscount = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Discount} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Discount} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.StoreRPCClient.prototype.updateDiscount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.StoreRPC/UpdateDiscount',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_UpdateDiscount,
      callback);
};


/**
 * @param {!proto.ding4.Discount} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.StoreRPCPromiseClient.prototype.updateDiscount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.StoreRPC/UpdateDiscount',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_UpdateDiscount);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_StoreRPC_FindDiscount = new grpc.web.MethodDescriptor(
  '/ding4.StoreRPC/FindDiscount',
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
const methodInfo_StoreRPC_FindDiscount = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.StoreRPCClient.prototype.findDiscount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.StoreRPC/FindDiscount',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_FindDiscount,
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
proto.ding4.StoreRPCPromiseClient.prototype.findDiscount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.StoreRPC/FindDiscount',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_FindDiscount);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Distribute,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_StoreRPC_DistributeDiscount = new grpc.web.MethodDescriptor(
  '/ding4.StoreRPC/DistributeDiscount',
  grpc.web.MethodType.UNARY,
  activity_pb.Distribute,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Distribute} request
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
 *   !proto.ding4.Distribute,
 *   !proto.ding4.Response>}
 */
const methodInfo_StoreRPC_DistributeDiscount = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Distribute} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Distribute} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.StoreRPCClient.prototype.distributeDiscount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.StoreRPC/DistributeDiscount',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_DistributeDiscount,
      callback);
};


/**
 * @param {!proto.ding4.Distribute} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.StoreRPCPromiseClient.prototype.distributeDiscount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.StoreRPC/DistributeDiscount',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_DistributeDiscount);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_StoreRPC_FindDiscountItem = new grpc.web.MethodDescriptor(
  '/ding4.StoreRPC/FindDiscountItem',
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
const methodInfo_StoreRPC_FindDiscountItem = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.StoreRPCClient.prototype.findDiscountItem =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.StoreRPC/FindDiscountItem',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_FindDiscountItem,
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
proto.ding4.StoreRPCPromiseClient.prototype.findDiscountItem =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.StoreRPC/FindDiscountItem',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_FindDiscountItem);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.DiscountItem,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_StoreRPC_ExchangeDiscount = new grpc.web.MethodDescriptor(
  '/ding4.StoreRPC/ExchangeDiscount',
  grpc.web.MethodType.UNARY,
  activity_pb.DiscountItem,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.DiscountItem} request
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
 *   !proto.ding4.DiscountItem,
 *   !proto.ding4.Response>}
 */
const methodInfo_StoreRPC_ExchangeDiscount = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.DiscountItem} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.DiscountItem} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.StoreRPCClient.prototype.exchangeDiscount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.StoreRPC/ExchangeDiscount',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_ExchangeDiscount,
      callback);
};


/**
 * @param {!proto.ding4.DiscountItem} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.StoreRPCPromiseClient.prototype.exchangeDiscount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.StoreRPC/ExchangeDiscount',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_ExchangeDiscount);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Customer,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_StoreRPC_CreateCustomer = new grpc.web.MethodDescriptor(
  '/ding4.StoreRPC/CreateCustomer',
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
const methodInfo_StoreRPC_CreateCustomer = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.StoreRPCClient.prototype.createCustomer =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.StoreRPC/CreateCustomer',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_CreateCustomer,
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
proto.ding4.StoreRPCPromiseClient.prototype.createCustomer =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.StoreRPC/CreateCustomer',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_CreateCustomer);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.CustomerLink,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_StoreRPC_CreateCustomerLink = new grpc.web.MethodDescriptor(
  '/ding4.StoreRPC/CreateCustomerLink',
  grpc.web.MethodType.UNARY,
  customer$link_pb.CustomerLink,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.CustomerLink} request
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
 *   !proto.ding4.CustomerLink,
 *   !proto.ding4.Response>}
 */
const methodInfo_StoreRPC_CreateCustomerLink = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.CustomerLink} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.CustomerLink} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.StoreRPCClient.prototype.createCustomerLink =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.StoreRPC/CreateCustomerLink',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_CreateCustomerLink,
      callback);
};


/**
 * @param {!proto.ding4.CustomerLink} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.StoreRPCPromiseClient.prototype.createCustomerLink =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.StoreRPC/CreateCustomerLink',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_CreateCustomerLink);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.CustomerLink,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_StoreRPC_UpdateCustomerLink = new grpc.web.MethodDescriptor(
  '/ding4.StoreRPC/UpdateCustomerLink',
  grpc.web.MethodType.UNARY,
  customer$link_pb.CustomerLink,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.CustomerLink} request
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
 *   !proto.ding4.CustomerLink,
 *   !proto.ding4.Response>}
 */
const methodInfo_StoreRPC_UpdateCustomerLink = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.CustomerLink} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.CustomerLink} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.StoreRPCClient.prototype.updateCustomerLink =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.StoreRPC/UpdateCustomerLink',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_UpdateCustomerLink,
      callback);
};


/**
 * @param {!proto.ding4.CustomerLink} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.StoreRPCPromiseClient.prototype.updateCustomerLink =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.StoreRPC/UpdateCustomerLink',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_UpdateCustomerLink);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_StoreRPC_FindCustomerLink = new grpc.web.MethodDescriptor(
  '/ding4.StoreRPC/FindCustomerLink',
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
const methodInfo_StoreRPC_FindCustomerLink = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.StoreRPCClient.prototype.findCustomerLink =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.StoreRPC/FindCustomerLink',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_FindCustomerLink,
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
proto.ding4.StoreRPCPromiseClient.prototype.findCustomerLink =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.StoreRPC/FindCustomerLink',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_FindCustomerLink);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_StoreRPC_FindCustomerF = new grpc.web.MethodDescriptor(
  '/ding4.StoreRPC/FindCustomerF',
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
const methodInfo_StoreRPC_FindCustomerF = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.StoreRPCClient.prototype.findCustomerF =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.StoreRPC/FindCustomerF',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_FindCustomerF,
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
proto.ding4.StoreRPCPromiseClient.prototype.findCustomerF =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.StoreRPC/FindCustomerF',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_FindCustomerF);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.CustomerLevel,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_StoreRPC_CreateCustomerLevel = new grpc.web.MethodDescriptor(
  '/ding4.StoreRPC/CreateCustomerLevel',
  grpc.web.MethodType.UNARY,
  customer$link_pb.CustomerLevel,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.CustomerLevel} request
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
 *   !proto.ding4.CustomerLevel,
 *   !proto.ding4.Response>}
 */
const methodInfo_StoreRPC_CreateCustomerLevel = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.CustomerLevel} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.CustomerLevel} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.StoreRPCClient.prototype.createCustomerLevel =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.StoreRPC/CreateCustomerLevel',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_CreateCustomerLevel,
      callback);
};


/**
 * @param {!proto.ding4.CustomerLevel} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.StoreRPCPromiseClient.prototype.createCustomerLevel =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.StoreRPC/CreateCustomerLevel',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_CreateCustomerLevel);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.CustomerLevel,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_StoreRPC_UpdateCustomerLevel = new grpc.web.MethodDescriptor(
  '/ding4.StoreRPC/UpdateCustomerLevel',
  grpc.web.MethodType.UNARY,
  customer$link_pb.CustomerLevel,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.CustomerLevel} request
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
 *   !proto.ding4.CustomerLevel,
 *   !proto.ding4.Response>}
 */
const methodInfo_StoreRPC_UpdateCustomerLevel = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.CustomerLevel} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.CustomerLevel} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.StoreRPCClient.prototype.updateCustomerLevel =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.StoreRPC/UpdateCustomerLevel',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_UpdateCustomerLevel,
      callback);
};


/**
 * @param {!proto.ding4.CustomerLevel} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.StoreRPCPromiseClient.prototype.updateCustomerLevel =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.StoreRPC/UpdateCustomerLevel',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_UpdateCustomerLevel);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_StoreRPC_FindCustomerLevel = new grpc.web.MethodDescriptor(
  '/ding4.StoreRPC/FindCustomerLevel',
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
const methodInfo_StoreRPC_FindCustomerLevel = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.StoreRPCClient.prototype.findCustomerLevel =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.StoreRPC/FindCustomerLevel',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_FindCustomerLevel,
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
proto.ding4.StoreRPCPromiseClient.prototype.findCustomerLevel =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.StoreRPC/FindCustomerLevel',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_FindCustomerLevel);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_StoreRPC_FindProductF = new grpc.web.MethodDescriptor(
  '/ding4.StoreRPC/FindProductF',
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
const methodInfo_StoreRPC_FindProductF = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.StoreRPCClient.prototype.findProductF =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.StoreRPC/FindProductF',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_FindProductF,
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
proto.ding4.StoreRPCPromiseClient.prototype.findProductF =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.StoreRPC/FindProductF',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_FindProductF);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_StoreRPC_FindProductSpec = new grpc.web.MethodDescriptor(
  '/ding4.StoreRPC/FindProductSpec',
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
const methodInfo_StoreRPC_FindProductSpec = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.StoreRPCClient.prototype.findProductSpec =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.StoreRPC/FindProductSpec',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_FindProductSpec,
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
proto.ding4.StoreRPCPromiseClient.prototype.findProductSpec =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.StoreRPC/FindProductSpec',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_FindProductSpec);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.ProductLink,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_StoreRPC_CreateProductLink = new grpc.web.MethodDescriptor(
  '/ding4.StoreRPC/CreateProductLink',
  grpc.web.MethodType.UNARY,
  product$link_pb.ProductLink,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.ProductLink} request
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
 *   !proto.ding4.ProductLink,
 *   !proto.ding4.Response>}
 */
const methodInfo_StoreRPC_CreateProductLink = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.ProductLink} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.ProductLink} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.StoreRPCClient.prototype.createProductLink =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.StoreRPC/CreateProductLink',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_CreateProductLink,
      callback);
};


/**
 * @param {!proto.ding4.ProductLink} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.StoreRPCPromiseClient.prototype.createProductLink =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.StoreRPC/CreateProductLink',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_CreateProductLink);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.ProductLink,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_StoreRPC_UpdateProductLink = new grpc.web.MethodDescriptor(
  '/ding4.StoreRPC/UpdateProductLink',
  grpc.web.MethodType.UNARY,
  product$link_pb.ProductLink,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.ProductLink} request
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
 *   !proto.ding4.ProductLink,
 *   !proto.ding4.Response>}
 */
const methodInfo_StoreRPC_UpdateProductLink = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.ProductLink} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.ProductLink} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.StoreRPCClient.prototype.updateProductLink =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.StoreRPC/UpdateProductLink',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_UpdateProductLink,
      callback);
};


/**
 * @param {!proto.ding4.ProductLink} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.StoreRPCPromiseClient.prototype.updateProductLink =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.StoreRPC/UpdateProductLink',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_UpdateProductLink);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_StoreRPC_FindProductLink = new grpc.web.MethodDescriptor(
  '/ding4.StoreRPC/FindProductLink',
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
const methodInfo_StoreRPC_FindProductLink = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.StoreRPCClient.prototype.findProductLink =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.StoreRPC/FindProductLink',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_FindProductLink,
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
proto.ding4.StoreRPCPromiseClient.prototype.findProductLink =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.StoreRPC/FindProductLink',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_FindProductLink);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.ProductClass,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_StoreRPC_CreateProductClass = new grpc.web.MethodDescriptor(
  '/ding4.StoreRPC/CreateProductClass',
  grpc.web.MethodType.UNARY,
  product$link_pb.ProductClass,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.ProductClass} request
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
 *   !proto.ding4.ProductClass,
 *   !proto.ding4.Response>}
 */
const methodInfo_StoreRPC_CreateProductClass = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.ProductClass} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.ProductClass} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.StoreRPCClient.prototype.createProductClass =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.StoreRPC/CreateProductClass',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_CreateProductClass,
      callback);
};


/**
 * @param {!proto.ding4.ProductClass} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.StoreRPCPromiseClient.prototype.createProductClass =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.StoreRPC/CreateProductClass',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_CreateProductClass);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.ProductClass,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_StoreRPC_UpdateProductClass = new grpc.web.MethodDescriptor(
  '/ding4.StoreRPC/UpdateProductClass',
  grpc.web.MethodType.UNARY,
  product$link_pb.ProductClass,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.ProductClass} request
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
 *   !proto.ding4.ProductClass,
 *   !proto.ding4.Response>}
 */
const methodInfo_StoreRPC_UpdateProductClass = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.ProductClass} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.ProductClass} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.StoreRPCClient.prototype.updateProductClass =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.StoreRPC/UpdateProductClass',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_UpdateProductClass,
      callback);
};


/**
 * @param {!proto.ding4.ProductClass} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.StoreRPCPromiseClient.prototype.updateProductClass =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.StoreRPC/UpdateProductClass',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_UpdateProductClass);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_StoreRPC_FindProductClass = new grpc.web.MethodDescriptor(
  '/ding4.StoreRPC/FindProductClass',
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
const methodInfo_StoreRPC_FindProductClass = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.StoreRPCClient.prototype.findProductClass =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.StoreRPC/FindProductClass',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_FindProductClass,
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
proto.ding4.StoreRPCPromiseClient.prototype.findProductClass =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.StoreRPC/FindProductClass',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_FindProductClass);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Image,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_StoreRPC_CreateProductClassImage = new grpc.web.MethodDescriptor(
  '/ding4.StoreRPC/CreateProductClassImage',
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
const methodInfo_StoreRPC_CreateProductClassImage = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.StoreRPCClient.prototype.createProductClassImage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.StoreRPC/CreateProductClassImage',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_CreateProductClassImage,
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
proto.ding4.StoreRPCPromiseClient.prototype.createProductClassImage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.StoreRPC/CreateProductClassImage',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_CreateProductClassImage);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Image,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_StoreRPC_UpdateProductClassImage = new grpc.web.MethodDescriptor(
  '/ding4.StoreRPC/UpdateProductClassImage',
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
const methodInfo_StoreRPC_UpdateProductClassImage = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.StoreRPCClient.prototype.updateProductClassImage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.StoreRPC/UpdateProductClassImage',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_UpdateProductClassImage,
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
proto.ding4.StoreRPCPromiseClient.prototype.updateProductClassImage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.StoreRPC/UpdateProductClassImage',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_UpdateProductClassImage);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Image,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_StoreRPC_DeleteProductClassImage = new grpc.web.MethodDescriptor(
  '/ding4.StoreRPC/DeleteProductClassImage',
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
const methodInfo_StoreRPC_DeleteProductClassImage = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.StoreRPCClient.prototype.deleteProductClassImage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.StoreRPC/DeleteProductClassImage',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_DeleteProductClassImage,
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
proto.ding4.StoreRPCPromiseClient.prototype.deleteProductClassImage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.StoreRPC/DeleteProductClassImage',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_DeleteProductClassImage);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_StoreRPC_FindProductStack = new grpc.web.MethodDescriptor(
  '/ding4.StoreRPC/FindProductStack',
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
const methodInfo_StoreRPC_FindProductStack = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.StoreRPCClient.prototype.findProductStack =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.StoreRPC/FindProductStack',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_FindProductStack,
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
proto.ding4.StoreRPCPromiseClient.prototype.findProductStack =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.StoreRPC/FindProductStack',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_FindProductStack);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_StoreRPC_FindSpecStack = new grpc.web.MethodDescriptor(
  '/ding4.StoreRPC/FindSpecStack',
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
const methodInfo_StoreRPC_FindSpecStack = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.StoreRPCClient.prototype.findSpecStack =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.StoreRPC/FindSpecStack',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_FindSpecStack,
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
proto.ding4.StoreRPCPromiseClient.prototype.findSpecStack =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.StoreRPC/FindSpecStack',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_FindSpecStack);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Car,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_StoreRPC_CreateCar = new grpc.web.MethodDescriptor(
  '/ding4.StoreRPC/CreateCar',
  grpc.web.MethodType.UNARY,
  car_pb.Car,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Car} request
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
 *   !proto.ding4.Car,
 *   !proto.ding4.Response>}
 */
const methodInfo_StoreRPC_CreateCar = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Car} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Car} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.StoreRPCClient.prototype.createCar =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.StoreRPC/CreateCar',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_CreateCar,
      callback);
};


/**
 * @param {!proto.ding4.Car} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.StoreRPCPromiseClient.prototype.createCar =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.StoreRPC/CreateCar',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_CreateCar);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Car,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_StoreRPC_DeleteCar = new grpc.web.MethodDescriptor(
  '/ding4.StoreRPC/DeleteCar',
  grpc.web.MethodType.UNARY,
  car_pb.Car,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Car} request
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
 *   !proto.ding4.Car,
 *   !proto.ding4.Response>}
 */
const methodInfo_StoreRPC_DeleteCar = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Car} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Car} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.StoreRPCClient.prototype.deleteCar =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.StoreRPC/DeleteCar',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_DeleteCar,
      callback);
};


/**
 * @param {!proto.ding4.Car} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.StoreRPCPromiseClient.prototype.deleteCar =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.StoreRPC/DeleteCar',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_DeleteCar);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Car,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_StoreRPC_CompleteCar = new grpc.web.MethodDescriptor(
  '/ding4.StoreRPC/CompleteCar',
  grpc.web.MethodType.UNARY,
  car_pb.Car,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Car} request
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
 *   !proto.ding4.Car,
 *   !proto.ding4.Response>}
 */
const methodInfo_StoreRPC_CompleteCar = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Car} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Car} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.StoreRPCClient.prototype.completeCar =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.StoreRPC/CompleteCar',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_CompleteCar,
      callback);
};


/**
 * @param {!proto.ding4.Car} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.StoreRPCPromiseClient.prototype.completeCar =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.StoreRPC/CompleteCar',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_CompleteCar);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_StoreRPC_FindCar = new grpc.web.MethodDescriptor(
  '/ding4.StoreRPC/FindCar',
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
const methodInfo_StoreRPC_FindCar = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.StoreRPCClient.prototype.findCar =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.StoreRPC/FindCar',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_FindCar,
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
proto.ding4.StoreRPCPromiseClient.prototype.findCar =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.StoreRPC/FindCar',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_FindCar);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Car,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_StoreRPC_AppendCommodity = new grpc.web.MethodDescriptor(
  '/ding4.StoreRPC/AppendCommodity',
  grpc.web.MethodType.UNARY,
  car_pb.Car,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Car} request
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
 *   !proto.ding4.Car,
 *   !proto.ding4.Response>}
 */
const methodInfo_StoreRPC_AppendCommodity = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Car} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Car} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.StoreRPCClient.prototype.appendCommodity =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.StoreRPC/AppendCommodity',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_AppendCommodity,
      callback);
};


/**
 * @param {!proto.ding4.Car} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.StoreRPCPromiseClient.prototype.appendCommodity =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.StoreRPC/AppendCommodity',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_AppendCommodity);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Commodity,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_StoreRPC_SubtractCommodity = new grpc.web.MethodDescriptor(
  '/ding4.StoreRPC/SubtractCommodity',
  grpc.web.MethodType.UNARY,
  car_pb.Commodity,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Commodity} request
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
 *   !proto.ding4.Commodity,
 *   !proto.ding4.Response>}
 */
const methodInfo_StoreRPC_SubtractCommodity = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Commodity} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Commodity} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.StoreRPCClient.prototype.subtractCommodity =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.StoreRPC/SubtractCommodity',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_SubtractCommodity,
      callback);
};


/**
 * @param {!proto.ding4.Commodity} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.StoreRPCPromiseClient.prototype.subtractCommodity =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.StoreRPC/SubtractCommodity',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_SubtractCommodity);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Car,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_StoreRPC_AppendDiscount = new grpc.web.MethodDescriptor(
  '/ding4.StoreRPC/AppendDiscount',
  grpc.web.MethodType.UNARY,
  car_pb.Car,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Car} request
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
 *   !proto.ding4.Car,
 *   !proto.ding4.Response>}
 */
const methodInfo_StoreRPC_AppendDiscount = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Car} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Car} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.StoreRPCClient.prototype.appendDiscount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.StoreRPC/AppendDiscount',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_AppendDiscount,
      callback);
};


/**
 * @param {!proto.ding4.Car} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.StoreRPCPromiseClient.prototype.appendDiscount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.StoreRPC/AppendDiscount',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_AppendDiscount);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Car,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_StoreRPC_SubtractDiscount = new grpc.web.MethodDescriptor(
  '/ding4.StoreRPC/SubtractDiscount',
  grpc.web.MethodType.UNARY,
  car_pb.Car,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Car} request
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
 *   !proto.ding4.Car,
 *   !proto.ding4.Response>}
 */
const methodInfo_StoreRPC_SubtractDiscount = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Car} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Car} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.StoreRPCClient.prototype.subtractDiscount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.StoreRPC/SubtractDiscount',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_SubtractDiscount,
      callback);
};


/**
 * @param {!proto.ding4.Car} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.StoreRPCPromiseClient.prototype.subtractDiscount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.StoreRPC/SubtractDiscount',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_SubtractDiscount);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Order,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_StoreRPC_CreateOrder = new grpc.web.MethodDescriptor(
  '/ding4.StoreRPC/CreateOrder',
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
const methodInfo_StoreRPC_CreateOrder = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.StoreRPCClient.prototype.createOrder =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.StoreRPC/CreateOrder',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_CreateOrder,
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
proto.ding4.StoreRPCPromiseClient.prototype.createOrder =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.StoreRPC/CreateOrder',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_CreateOrder);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Order,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_StoreRPC_PaymentOrder = new grpc.web.MethodDescriptor(
  '/ding4.StoreRPC/PaymentOrder',
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
const methodInfo_StoreRPC_PaymentOrder = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.StoreRPCClient.prototype.paymentOrder =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.StoreRPC/PaymentOrder',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_PaymentOrder,
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
proto.ding4.StoreRPCPromiseClient.prototype.paymentOrder =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.StoreRPC/PaymentOrder',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_PaymentOrder);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_StoreRPC_FindOrder = new grpc.web.MethodDescriptor(
  '/ding4.StoreRPC/FindOrder',
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
const methodInfo_StoreRPC_FindOrder = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.StoreRPCClient.prototype.findOrder =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.StoreRPC/FindOrder',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_FindOrder,
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
proto.ding4.StoreRPCPromiseClient.prototype.findOrder =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.StoreRPC/FindOrder',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_FindOrder);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Remind,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_StoreRPC_UpdateRemind = new grpc.web.MethodDescriptor(
  '/ding4.StoreRPC/UpdateRemind',
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
const methodInfo_StoreRPC_UpdateRemind = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.StoreRPCClient.prototype.updateRemind =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.StoreRPC/UpdateRemind',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_UpdateRemind,
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
proto.ding4.StoreRPCPromiseClient.prototype.updateRemind =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.StoreRPC/UpdateRemind',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_UpdateRemind);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_StoreRPC_FindRemind = new grpc.web.MethodDescriptor(
  '/ding4.StoreRPC/FindRemind',
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
const methodInfo_StoreRPC_FindRemind = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.StoreRPCClient.prototype.findRemind =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.StoreRPC/FindRemind',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_FindRemind,
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
proto.ding4.StoreRPCPromiseClient.prototype.findRemind =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.StoreRPC/FindRemind',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_FindRemind);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Setting,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_StoreRPC_CreateSetting = new grpc.web.MethodDescriptor(
  '/ding4.StoreRPC/CreateSetting',
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
const methodInfo_StoreRPC_CreateSetting = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.StoreRPCClient.prototype.createSetting =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.StoreRPC/CreateSetting',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_CreateSetting,
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
proto.ding4.StoreRPCPromiseClient.prototype.createSetting =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.StoreRPC/CreateSetting',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_CreateSetting);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Setting,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_StoreRPC_UpdateSetting = new grpc.web.MethodDescriptor(
  '/ding4.StoreRPC/UpdateSetting',
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
const methodInfo_StoreRPC_UpdateSetting = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.StoreRPCClient.prototype.updateSetting =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.StoreRPC/UpdateSetting',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_UpdateSetting,
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
proto.ding4.StoreRPCPromiseClient.prototype.updateSetting =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.StoreRPC/UpdateSetting',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_UpdateSetting);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Setting,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_StoreRPC_DeleteSetting = new grpc.web.MethodDescriptor(
  '/ding4.StoreRPC/DeleteSetting',
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
const methodInfo_StoreRPC_DeleteSetting = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.StoreRPCClient.prototype.deleteSetting =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.StoreRPC/DeleteSetting',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_DeleteSetting,
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
proto.ding4.StoreRPCPromiseClient.prototype.deleteSetting =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.StoreRPC/DeleteSetting',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_DeleteSetting);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_StoreRPC_FindSetting = new grpc.web.MethodDescriptor(
  '/ding4.StoreRPC/FindSetting',
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
const methodInfo_StoreRPC_FindSetting = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.StoreRPCClient.prototype.findSetting =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.StoreRPC/FindSetting',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_FindSetting,
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
proto.ding4.StoreRPCPromiseClient.prototype.findSetting =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.StoreRPC/FindSetting',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_FindSetting);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.WebLayout,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_StoreRPC_CreateWebLayout = new grpc.web.MethodDescriptor(
  '/ding4.StoreRPC/CreateWebLayout',
  grpc.web.MethodType.UNARY,
  web$layout_pb.WebLayout,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.WebLayout} request
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
 *   !proto.ding4.WebLayout,
 *   !proto.ding4.Response>}
 */
const methodInfo_StoreRPC_CreateWebLayout = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.WebLayout} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.WebLayout} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.StoreRPCClient.prototype.createWebLayout =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.StoreRPC/CreateWebLayout',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_CreateWebLayout,
      callback);
};


/**
 * @param {!proto.ding4.WebLayout} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.StoreRPCPromiseClient.prototype.createWebLayout =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.StoreRPC/CreateWebLayout',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_CreateWebLayout);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.WebLayout,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_StoreRPC_UpdateWebLayout = new grpc.web.MethodDescriptor(
  '/ding4.StoreRPC/UpdateWebLayout',
  grpc.web.MethodType.UNARY,
  web$layout_pb.WebLayout,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.WebLayout} request
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
 *   !proto.ding4.WebLayout,
 *   !proto.ding4.Response>}
 */
const methodInfo_StoreRPC_UpdateWebLayout = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.WebLayout} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.WebLayout} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.StoreRPCClient.prototype.updateWebLayout =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.StoreRPC/UpdateWebLayout',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_UpdateWebLayout,
      callback);
};


/**
 * @param {!proto.ding4.WebLayout} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.StoreRPCPromiseClient.prototype.updateWebLayout =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.StoreRPC/UpdateWebLayout',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_UpdateWebLayout);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.WebLayout,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_StoreRPC_DeleteWebLayout = new grpc.web.MethodDescriptor(
  '/ding4.StoreRPC/DeleteWebLayout',
  grpc.web.MethodType.UNARY,
  web$layout_pb.WebLayout,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.WebLayout} request
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
 *   !proto.ding4.WebLayout,
 *   !proto.ding4.Response>}
 */
const methodInfo_StoreRPC_DeleteWebLayout = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.WebLayout} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.WebLayout} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.StoreRPCClient.prototype.deleteWebLayout =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.StoreRPC/DeleteWebLayout',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_DeleteWebLayout,
      callback);
};


/**
 * @param {!proto.ding4.WebLayout} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.StoreRPCPromiseClient.prototype.deleteWebLayout =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.StoreRPC/DeleteWebLayout',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_DeleteWebLayout);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_StoreRPC_FindWebLayout = new grpc.web.MethodDescriptor(
  '/ding4.StoreRPC/FindWebLayout',
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
const methodInfo_StoreRPC_FindWebLayout = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.StoreRPCClient.prototype.findWebLayout =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.StoreRPC/FindWebLayout',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_FindWebLayout,
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
proto.ding4.StoreRPCPromiseClient.prototype.findWebLayout =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.StoreRPC/FindWebLayout',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_FindWebLayout);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Image,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_StoreRPC_CreateWebLayoutImage = new grpc.web.MethodDescriptor(
  '/ding4.StoreRPC/CreateWebLayoutImage',
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
const methodInfo_StoreRPC_CreateWebLayoutImage = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.StoreRPCClient.prototype.createWebLayoutImage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.StoreRPC/CreateWebLayoutImage',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_CreateWebLayoutImage,
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
proto.ding4.StoreRPCPromiseClient.prototype.createWebLayoutImage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.StoreRPC/CreateWebLayoutImage',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_CreateWebLayoutImage);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Image,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_StoreRPC_UpdateWebLayoutImage = new grpc.web.MethodDescriptor(
  '/ding4.StoreRPC/UpdateWebLayoutImage',
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
const methodInfo_StoreRPC_UpdateWebLayoutImage = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.StoreRPCClient.prototype.updateWebLayoutImage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.StoreRPC/UpdateWebLayoutImage',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_UpdateWebLayoutImage,
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
proto.ding4.StoreRPCPromiseClient.prototype.updateWebLayoutImage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.StoreRPC/UpdateWebLayoutImage',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_UpdateWebLayoutImage);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Image,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_StoreRPC_DeleteWebLayoutImage = new grpc.web.MethodDescriptor(
  '/ding4.StoreRPC/DeleteWebLayoutImage',
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
const methodInfo_StoreRPC_DeleteWebLayoutImage = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.StoreRPCClient.prototype.deleteWebLayoutImage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.StoreRPC/DeleteWebLayoutImage',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_DeleteWebLayoutImage,
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
proto.ding4.StoreRPCPromiseClient.prototype.deleteWebLayoutImage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.StoreRPC/DeleteWebLayoutImage',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_DeleteWebLayoutImage);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.WebPage,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_StoreRPC_CreateWebPage = new grpc.web.MethodDescriptor(
  '/ding4.StoreRPC/CreateWebPage',
  grpc.web.MethodType.UNARY,
  web$page_pb.WebPage,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.WebPage} request
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
 *   !proto.ding4.WebPage,
 *   !proto.ding4.Response>}
 */
const methodInfo_StoreRPC_CreateWebPage = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.WebPage} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.WebPage} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.StoreRPCClient.prototype.createWebPage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.StoreRPC/CreateWebPage',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_CreateWebPage,
      callback);
};


/**
 * @param {!proto.ding4.WebPage} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.StoreRPCPromiseClient.prototype.createWebPage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.StoreRPC/CreateWebPage',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_CreateWebPage);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.WebPage,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_StoreRPC_UpdateWebPage = new grpc.web.MethodDescriptor(
  '/ding4.StoreRPC/UpdateWebPage',
  grpc.web.MethodType.UNARY,
  web$page_pb.WebPage,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.WebPage} request
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
 *   !proto.ding4.WebPage,
 *   !proto.ding4.Response>}
 */
const methodInfo_StoreRPC_UpdateWebPage = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.WebPage} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.WebPage} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.StoreRPCClient.prototype.updateWebPage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.StoreRPC/UpdateWebPage',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_UpdateWebPage,
      callback);
};


/**
 * @param {!proto.ding4.WebPage} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.StoreRPCPromiseClient.prototype.updateWebPage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.StoreRPC/UpdateWebPage',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_UpdateWebPage);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.WebPage,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_StoreRPC_DeleteWebPage = new grpc.web.MethodDescriptor(
  '/ding4.StoreRPC/DeleteWebPage',
  grpc.web.MethodType.UNARY,
  web$page_pb.WebPage,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.WebPage} request
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
 *   !proto.ding4.WebPage,
 *   !proto.ding4.Response>}
 */
const methodInfo_StoreRPC_DeleteWebPage = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.WebPage} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.WebPage} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.StoreRPCClient.prototype.deleteWebPage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.StoreRPC/DeleteWebPage',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_DeleteWebPage,
      callback);
};


/**
 * @param {!proto.ding4.WebPage} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.StoreRPCPromiseClient.prototype.deleteWebPage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.StoreRPC/DeleteWebPage',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_DeleteWebPage);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_StoreRPC_FindWebPage = new grpc.web.MethodDescriptor(
  '/ding4.StoreRPC/FindWebPage',
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
const methodInfo_StoreRPC_FindWebPage = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.StoreRPCClient.prototype.findWebPage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.StoreRPC/FindWebPage',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_FindWebPage,
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
proto.ding4.StoreRPCPromiseClient.prototype.findWebPage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.StoreRPC/FindWebPage',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_FindWebPage);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.WebItem,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_StoreRPC_CreateWebItem = new grpc.web.MethodDescriptor(
  '/ding4.StoreRPC/CreateWebItem',
  grpc.web.MethodType.UNARY,
  web$item_pb.WebItem,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.WebItem} request
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
 *   !proto.ding4.WebItem,
 *   !proto.ding4.Response>}
 */
const methodInfo_StoreRPC_CreateWebItem = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.WebItem} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.WebItem} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.StoreRPCClient.prototype.createWebItem =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.StoreRPC/CreateWebItem',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_CreateWebItem,
      callback);
};


/**
 * @param {!proto.ding4.WebItem} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.StoreRPCPromiseClient.prototype.createWebItem =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.StoreRPC/CreateWebItem',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_CreateWebItem);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.WebItem,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_StoreRPC_UpdateWebItem = new grpc.web.MethodDescriptor(
  '/ding4.StoreRPC/UpdateWebItem',
  grpc.web.MethodType.UNARY,
  web$item_pb.WebItem,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.WebItem} request
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
 *   !proto.ding4.WebItem,
 *   !proto.ding4.Response>}
 */
const methodInfo_StoreRPC_UpdateWebItem = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.WebItem} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.WebItem} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.StoreRPCClient.prototype.updateWebItem =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.StoreRPC/UpdateWebItem',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_UpdateWebItem,
      callback);
};


/**
 * @param {!proto.ding4.WebItem} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.StoreRPCPromiseClient.prototype.updateWebItem =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.StoreRPC/UpdateWebItem',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_UpdateWebItem);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.WebItem,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_StoreRPC_DeleteWebItem = new grpc.web.MethodDescriptor(
  '/ding4.StoreRPC/DeleteWebItem',
  grpc.web.MethodType.UNARY,
  web$item_pb.WebItem,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.WebItem} request
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
 *   !proto.ding4.WebItem,
 *   !proto.ding4.Response>}
 */
const methodInfo_StoreRPC_DeleteWebItem = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.WebItem} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.WebItem} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.StoreRPCClient.prototype.deleteWebItem =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.StoreRPC/DeleteWebItem',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_DeleteWebItem,
      callback);
};


/**
 * @param {!proto.ding4.WebItem} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.StoreRPCPromiseClient.prototype.deleteWebItem =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.StoreRPC/DeleteWebItem',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_DeleteWebItem);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_StoreRPC_FindWebItem = new grpc.web.MethodDescriptor(
  '/ding4.StoreRPC/FindWebItem',
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
const methodInfo_StoreRPC_FindWebItem = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.StoreRPCClient.prototype.findWebItem =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.StoreRPC/FindWebItem',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_FindWebItem,
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
proto.ding4.StoreRPCPromiseClient.prototype.findWebItem =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.StoreRPC/FindWebItem',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_FindWebItem);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.WebBase,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_StoreRPC_UpdateWebBase = new grpc.web.MethodDescriptor(
  '/ding4.StoreRPC/UpdateWebBase',
  grpc.web.MethodType.UNARY,
  web$base_pb.WebBase,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.WebBase} request
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
 *   !proto.ding4.WebBase,
 *   !proto.ding4.Response>}
 */
const methodInfo_StoreRPC_UpdateWebBase = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.WebBase} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.WebBase} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.StoreRPCClient.prototype.updateWebBase =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.StoreRPC/UpdateWebBase',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_UpdateWebBase,
      callback);
};


/**
 * @param {!proto.ding4.WebBase} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.StoreRPCPromiseClient.prototype.updateWebBase =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.StoreRPC/UpdateWebBase',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_UpdateWebBase);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_StoreRPC_FindWebBase = new grpc.web.MethodDescriptor(
  '/ding4.StoreRPC/FindWebBase',
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
const methodInfo_StoreRPC_FindWebBase = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.StoreRPCClient.prototype.findWebBase =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.StoreRPC/FindWebBase',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_FindWebBase,
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
proto.ding4.StoreRPCPromiseClient.prototype.findWebBase =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.StoreRPC/FindWebBase',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_FindWebBase);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Template,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_StoreRPC_CreateTemplate = new grpc.web.MethodDescriptor(
  '/ding4.StoreRPC/CreateTemplate',
  grpc.web.MethodType.UNARY,
  template_pb.Template,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Template} request
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
 *   !proto.ding4.Template,
 *   !proto.ding4.Response>}
 */
const methodInfo_StoreRPC_CreateTemplate = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Template} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Template} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.StoreRPCClient.prototype.createTemplate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.StoreRPC/CreateTemplate',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_CreateTemplate,
      callback);
};


/**
 * @param {!proto.ding4.Template} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.StoreRPCPromiseClient.prototype.createTemplate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.StoreRPC/CreateTemplate',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_CreateTemplate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Template,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_StoreRPC_UpdateTemplate = new grpc.web.MethodDescriptor(
  '/ding4.StoreRPC/UpdateTemplate',
  grpc.web.MethodType.UNARY,
  template_pb.Template,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Template} request
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
 *   !proto.ding4.Template,
 *   !proto.ding4.Response>}
 */
const methodInfo_StoreRPC_UpdateTemplate = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Template} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Template} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.StoreRPCClient.prototype.updateTemplate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.StoreRPC/UpdateTemplate',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_UpdateTemplate,
      callback);
};


/**
 * @param {!proto.ding4.Template} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.StoreRPCPromiseClient.prototype.updateTemplate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.StoreRPC/UpdateTemplate',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_UpdateTemplate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_StoreRPC_FindTemplate = new grpc.web.MethodDescriptor(
  '/ding4.StoreRPC/FindTemplate',
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
const methodInfo_StoreRPC_FindTemplate = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.StoreRPCClient.prototype.findTemplate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.StoreRPC/FindTemplate',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_FindTemplate,
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
proto.ding4.StoreRPCPromiseClient.prototype.findTemplate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.StoreRPC/FindTemplate',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_FindTemplate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Message,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_StoreRPC_CreateEDM = new grpc.web.MethodDescriptor(
  '/ding4.StoreRPC/CreateEDM',
  grpc.web.MethodType.UNARY,
  message_pb.Message,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Message} request
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
 *   !proto.ding4.Message,
 *   !proto.ding4.Response>}
 */
const methodInfo_StoreRPC_CreateEDM = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Message} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Message} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.StoreRPCClient.prototype.createEDM =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.StoreRPC/CreateEDM',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_CreateEDM,
      callback);
};


/**
 * @param {!proto.ding4.Message} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.StoreRPCPromiseClient.prototype.createEDM =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.StoreRPC/CreateEDM',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_CreateEDM);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Message,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_StoreRPC_CancelEDM = new grpc.web.MethodDescriptor(
  '/ding4.StoreRPC/CancelEDM',
  grpc.web.MethodType.UNARY,
  message_pb.Message,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Message} request
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
 *   !proto.ding4.Message,
 *   !proto.ding4.Response>}
 */
const methodInfo_StoreRPC_CancelEDM = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Message} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Message} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.StoreRPCClient.prototype.cancelEDM =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.StoreRPC/CancelEDM',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_CancelEDM,
      callback);
};


/**
 * @param {!proto.ding4.Message} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.StoreRPCPromiseClient.prototype.cancelEDM =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.StoreRPC/CancelEDM',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_CancelEDM);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_StoreRPC_FindEDM = new grpc.web.MethodDescriptor(
  '/ding4.StoreRPC/FindEDM',
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
const methodInfo_StoreRPC_FindEDM = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.StoreRPCClient.prototype.findEDM =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.StoreRPC/FindEDM',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_FindEDM,
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
proto.ding4.StoreRPCPromiseClient.prototype.findEDM =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.StoreRPC/FindEDM',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_FindEDM);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Message,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_StoreRPC_CreateSMS = new grpc.web.MethodDescriptor(
  '/ding4.StoreRPC/CreateSMS',
  grpc.web.MethodType.UNARY,
  message_pb.Message,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Message} request
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
 *   !proto.ding4.Message,
 *   !proto.ding4.Response>}
 */
const methodInfo_StoreRPC_CreateSMS = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Message} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Message} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.StoreRPCClient.prototype.createSMS =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.StoreRPC/CreateSMS',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_CreateSMS,
      callback);
};


/**
 * @param {!proto.ding4.Message} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.StoreRPCPromiseClient.prototype.createSMS =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.StoreRPC/CreateSMS',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_CreateSMS);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Message,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_StoreRPC_CancelSMS = new grpc.web.MethodDescriptor(
  '/ding4.StoreRPC/CancelSMS',
  grpc.web.MethodType.UNARY,
  message_pb.Message,
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Message} request
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
 *   !proto.ding4.Message,
 *   !proto.ding4.Response>}
 */
const methodInfo_StoreRPC_CancelSMS = new grpc.web.AbstractClientBase.MethodInfo(
  sql_pb.Response,
  /**
   * @param {!proto.ding4.Message} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sql_pb.Response.deserializeBinary
);


/**
 * @param {!proto.ding4.Message} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ding4.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ding4.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ding4.StoreRPCClient.prototype.cancelSMS =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.StoreRPC/CancelSMS',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_CancelSMS,
      callback);
};


/**
 * @param {!proto.ding4.Message} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ding4.Response>}
 *     A native promise that resolves to the response
 */
proto.ding4.StoreRPCPromiseClient.prototype.cancelSMS =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.StoreRPC/CancelSMS',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_CancelSMS);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_StoreRPC_FindSMS = new grpc.web.MethodDescriptor(
  '/ding4.StoreRPC/FindSMS',
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
const methodInfo_StoreRPC_FindSMS = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.StoreRPCClient.prototype.findSMS =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.StoreRPC/FindSMS',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_FindSMS,
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
proto.ding4.StoreRPCPromiseClient.prototype.findSMS =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.StoreRPC/FindSMS',
      request,
      metadata || {},
      methodDescriptor_StoreRPC_FindSMS);
};


module.exports = proto.ding4;

