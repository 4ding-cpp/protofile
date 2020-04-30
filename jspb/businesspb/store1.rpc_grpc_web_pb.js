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
proto.ding4 = require('./store1.rpc_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.ding4.Store1RPCClient =
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
proto.ding4.Store1RPCPromiseClient =
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
const methodDescriptor_Store1RPC_WhoAmI = new grpc.web.MethodDescriptor(
  '/ding4.Store1RPC/WhoAmI',
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
const methodInfo_Store1RPC_WhoAmI = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.Store1RPCClient.prototype.whoAmI =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.Store1RPC/WhoAmI',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_WhoAmI,
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
proto.ding4.Store1RPCPromiseClient.prototype.whoAmI =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.Store1RPC/WhoAmI',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_WhoAmI);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Password,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_Store1RPC_ChangePassword = new grpc.web.MethodDescriptor(
  '/ding4.Store1RPC/ChangePassword',
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
const methodInfo_Store1RPC_ChangePassword = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.Store1RPCClient.prototype.changePassword =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.Store1RPC/ChangePassword',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_ChangePassword,
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
proto.ding4.Store1RPCPromiseClient.prototype.changePassword =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.Store1RPC/ChangePassword',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_ChangePassword);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Manager,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_Store1RPC_ChangeInfo = new grpc.web.MethodDescriptor(
  '/ding4.Store1RPC/ChangeInfo',
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
const methodInfo_Store1RPC_ChangeInfo = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.Store1RPCClient.prototype.changeInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.Store1RPC/ChangeInfo',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_ChangeInfo,
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
proto.ding4.Store1RPCPromiseClient.prototype.changeInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.Store1RPC/ChangeInfo',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_ChangeInfo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Manager,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_Store1RPC_ChangeWhitelist = new grpc.web.MethodDescriptor(
  '/ding4.Store1RPC/ChangeWhitelist',
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
const methodInfo_Store1RPC_ChangeWhitelist = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.Store1RPCClient.prototype.changeWhitelist =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.Store1RPC/ChangeWhitelist',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_ChangeWhitelist,
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
proto.ding4.Store1RPCPromiseClient.prototype.changeWhitelist =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.Store1RPC/ChangeWhitelist',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_ChangeWhitelist);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_Store1RPC_FindPermission = new grpc.web.MethodDescriptor(
  '/ding4.Store1RPC/FindPermission',
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
const methodInfo_Store1RPC_FindPermission = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.Store1RPCClient.prototype.findPermission =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.Store1RPC/FindPermission',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_FindPermission,
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
proto.ding4.Store1RPCPromiseClient.prototype.findPermission =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.Store1RPC/FindPermission',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_FindPermission);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Label,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_Store1RPC_CreateLabel = new grpc.web.MethodDescriptor(
  '/ding4.Store1RPC/CreateLabel',
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
const methodInfo_Store1RPC_CreateLabel = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.Store1RPCClient.prototype.createLabel =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.Store1RPC/CreateLabel',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_CreateLabel,
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
proto.ding4.Store1RPCPromiseClient.prototype.createLabel =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.Store1RPC/CreateLabel',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_CreateLabel);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Label,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_Store1RPC_UpdateLabel = new grpc.web.MethodDescriptor(
  '/ding4.Store1RPC/UpdateLabel',
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
const methodInfo_Store1RPC_UpdateLabel = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.Store1RPCClient.prototype.updateLabel =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.Store1RPC/UpdateLabel',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_UpdateLabel,
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
proto.ding4.Store1RPCPromiseClient.prototype.updateLabel =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.Store1RPC/UpdateLabel',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_UpdateLabel);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Label,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_Store1RPC_AppendLabel = new grpc.web.MethodDescriptor(
  '/ding4.Store1RPC/AppendLabel',
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
const methodInfo_Store1RPC_AppendLabel = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.Store1RPCClient.prototype.appendLabel =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.Store1RPC/AppendLabel',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_AppendLabel,
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
proto.ding4.Store1RPCPromiseClient.prototype.appendLabel =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.Store1RPC/AppendLabel',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_AppendLabel);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Label,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_Store1RPC_SubtractLabel = new grpc.web.MethodDescriptor(
  '/ding4.Store1RPC/SubtractLabel',
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
const methodInfo_Store1RPC_SubtractLabel = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.Store1RPCClient.prototype.subtractLabel =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.Store1RPC/SubtractLabel',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_SubtractLabel,
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
proto.ding4.Store1RPCPromiseClient.prototype.subtractLabel =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.Store1RPC/SubtractLabel',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_SubtractLabel);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_Store1RPC_FindLabel = new grpc.web.MethodDescriptor(
  '/ding4.Store1RPC/FindLabel',
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
const methodInfo_Store1RPC_FindLabel = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.Store1RPCClient.prototype.findLabel =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.Store1RPC/FindLabel',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_FindLabel,
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
proto.ding4.Store1RPCPromiseClient.prototype.findLabel =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.Store1RPC/FindLabel',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_FindLabel);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Activity,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_Store1RPC_CreateActivity = new grpc.web.MethodDescriptor(
  '/ding4.Store1RPC/CreateActivity',
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
const methodInfo_Store1RPC_CreateActivity = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.Store1RPCClient.prototype.createActivity =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.Store1RPC/CreateActivity',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_CreateActivity,
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
proto.ding4.Store1RPCPromiseClient.prototype.createActivity =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.Store1RPC/CreateActivity',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_CreateActivity);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Activity,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_Store1RPC_UpdateActivity = new grpc.web.MethodDescriptor(
  '/ding4.Store1RPC/UpdateActivity',
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
const methodInfo_Store1RPC_UpdateActivity = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.Store1RPCClient.prototype.updateActivity =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.Store1RPC/UpdateActivity',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_UpdateActivity,
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
proto.ding4.Store1RPCPromiseClient.prototype.updateActivity =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.Store1RPC/UpdateActivity',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_UpdateActivity);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_Store1RPC_FindActivity = new grpc.web.MethodDescriptor(
  '/ding4.Store1RPC/FindActivity',
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
const methodInfo_Store1RPC_FindActivity = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.Store1RPCClient.prototype.findActivity =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.Store1RPC/FindActivity',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_FindActivity,
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
proto.ding4.Store1RPCPromiseClient.prototype.findActivity =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.Store1RPC/FindActivity',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_FindActivity);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.ActivityProduct,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_Store1RPC_AppendActivityProduct = new grpc.web.MethodDescriptor(
  '/ding4.Store1RPC/AppendActivityProduct',
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
const methodInfo_Store1RPC_AppendActivityProduct = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.Store1RPCClient.prototype.appendActivityProduct =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.Store1RPC/AppendActivityProduct',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_AppendActivityProduct,
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
proto.ding4.Store1RPCPromiseClient.prototype.appendActivityProduct =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.Store1RPC/AppendActivityProduct',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_AppendActivityProduct);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.ActivityProduct,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_Store1RPC_SubstractActivityProduct = new grpc.web.MethodDescriptor(
  '/ding4.Store1RPC/SubstractActivityProduct',
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
const methodInfo_Store1RPC_SubstractActivityProduct = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.Store1RPCClient.prototype.substractActivityProduct =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.Store1RPC/SubstractActivityProduct',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_SubstractActivityProduct,
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
proto.ding4.Store1RPCPromiseClient.prototype.substractActivityProduct =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.Store1RPC/SubstractActivityProduct',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_SubstractActivityProduct);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.ActivityProduct,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_Store1RPC_FindActivityProduct = new grpc.web.MethodDescriptor(
  '/ding4.Store1RPC/FindActivityProduct',
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
const methodInfo_Store1RPC_FindActivityProduct = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.Store1RPCClient.prototype.findActivityProduct =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.Store1RPC/FindActivityProduct',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_FindActivityProduct,
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
proto.ding4.Store1RPCPromiseClient.prototype.findActivityProduct =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.Store1RPC/FindActivityProduct',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_FindActivityProduct);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Discount,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_Store1RPC_CreateDiscount = new grpc.web.MethodDescriptor(
  '/ding4.Store1RPC/CreateDiscount',
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
const methodInfo_Store1RPC_CreateDiscount = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.Store1RPCClient.prototype.createDiscount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.Store1RPC/CreateDiscount',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_CreateDiscount,
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
proto.ding4.Store1RPCPromiseClient.prototype.createDiscount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.Store1RPC/CreateDiscount',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_CreateDiscount);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Discount,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_Store1RPC_UpdateDiscount = new grpc.web.MethodDescriptor(
  '/ding4.Store1RPC/UpdateDiscount',
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
const methodInfo_Store1RPC_UpdateDiscount = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.Store1RPCClient.prototype.updateDiscount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.Store1RPC/UpdateDiscount',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_UpdateDiscount,
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
proto.ding4.Store1RPCPromiseClient.prototype.updateDiscount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.Store1RPC/UpdateDiscount',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_UpdateDiscount);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_Store1RPC_FindDiscount = new grpc.web.MethodDescriptor(
  '/ding4.Store1RPC/FindDiscount',
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
const methodInfo_Store1RPC_FindDiscount = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.Store1RPCClient.prototype.findDiscount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.Store1RPC/FindDiscount',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_FindDiscount,
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
proto.ding4.Store1RPCPromiseClient.prototype.findDiscount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.Store1RPC/FindDiscount',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_FindDiscount);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Distribute,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_Store1RPC_DistributeDiscount = new grpc.web.MethodDescriptor(
  '/ding4.Store1RPC/DistributeDiscount',
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
const methodInfo_Store1RPC_DistributeDiscount = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.Store1RPCClient.prototype.distributeDiscount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.Store1RPC/DistributeDiscount',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_DistributeDiscount,
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
proto.ding4.Store1RPCPromiseClient.prototype.distributeDiscount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.Store1RPC/DistributeDiscount',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_DistributeDiscount);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_Store1RPC_FindDiscountItem = new grpc.web.MethodDescriptor(
  '/ding4.Store1RPC/FindDiscountItem',
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
const methodInfo_Store1RPC_FindDiscountItem = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.Store1RPCClient.prototype.findDiscountItem =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.Store1RPC/FindDiscountItem',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_FindDiscountItem,
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
proto.ding4.Store1RPCPromiseClient.prototype.findDiscountItem =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.Store1RPC/FindDiscountItem',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_FindDiscountItem);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.DiscountItem,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_Store1RPC_ExchangeDiscount = new grpc.web.MethodDescriptor(
  '/ding4.Store1RPC/ExchangeDiscount',
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
const methodInfo_Store1RPC_ExchangeDiscount = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.Store1RPCClient.prototype.exchangeDiscount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.Store1RPC/ExchangeDiscount',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_ExchangeDiscount,
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
proto.ding4.Store1RPCPromiseClient.prototype.exchangeDiscount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.Store1RPC/ExchangeDiscount',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_ExchangeDiscount);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Customer,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_Store1RPC_ExistsCustomer = new grpc.web.MethodDescriptor(
  '/ding4.Store1RPC/ExistsCustomer',
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
const methodInfo_Store1RPC_ExistsCustomer = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.Store1RPCClient.prototype.existsCustomer =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.Store1RPC/ExistsCustomer',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_ExistsCustomer,
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
proto.ding4.Store1RPCPromiseClient.prototype.existsCustomer =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.Store1RPC/ExistsCustomer',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_ExistsCustomer);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Customer,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_Store1RPC_CreateCustomer = new grpc.web.MethodDescriptor(
  '/ding4.Store1RPC/CreateCustomer',
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
const methodInfo_Store1RPC_CreateCustomer = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.Store1RPCClient.prototype.createCustomer =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.Store1RPC/CreateCustomer',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_CreateCustomer,
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
proto.ding4.Store1RPCPromiseClient.prototype.createCustomer =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.Store1RPC/CreateCustomer',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_CreateCustomer);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.CustomerLink,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_Store1RPC_CreateCustomerLink = new grpc.web.MethodDescriptor(
  '/ding4.Store1RPC/CreateCustomerLink',
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
const methodInfo_Store1RPC_CreateCustomerLink = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.Store1RPCClient.prototype.createCustomerLink =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.Store1RPC/CreateCustomerLink',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_CreateCustomerLink,
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
proto.ding4.Store1RPCPromiseClient.prototype.createCustomerLink =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.Store1RPC/CreateCustomerLink',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_CreateCustomerLink);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.CustomerLink,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_Store1RPC_UpdateCustomerLink = new grpc.web.MethodDescriptor(
  '/ding4.Store1RPC/UpdateCustomerLink',
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
const methodInfo_Store1RPC_UpdateCustomerLink = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.Store1RPCClient.prototype.updateCustomerLink =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.Store1RPC/UpdateCustomerLink',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_UpdateCustomerLink,
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
proto.ding4.Store1RPCPromiseClient.prototype.updateCustomerLink =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.Store1RPC/UpdateCustomerLink',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_UpdateCustomerLink);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_Store1RPC_FindCustomerLink = new grpc.web.MethodDescriptor(
  '/ding4.Store1RPC/FindCustomerLink',
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
const methodInfo_Store1RPC_FindCustomerLink = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.Store1RPCClient.prototype.findCustomerLink =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.Store1RPC/FindCustomerLink',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_FindCustomerLink,
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
proto.ding4.Store1RPCPromiseClient.prototype.findCustomerLink =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.Store1RPC/FindCustomerLink',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_FindCustomerLink);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_Store1RPC_FindCustomerF = new grpc.web.MethodDescriptor(
  '/ding4.Store1RPC/FindCustomerF',
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
const methodInfo_Store1RPC_FindCustomerF = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.Store1RPCClient.prototype.findCustomerF =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.Store1RPC/FindCustomerF',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_FindCustomerF,
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
proto.ding4.Store1RPCPromiseClient.prototype.findCustomerF =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.Store1RPC/FindCustomerF',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_FindCustomerF);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.CustomerLevel,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_Store1RPC_CreateCustomerLevel = new grpc.web.MethodDescriptor(
  '/ding4.Store1RPC/CreateCustomerLevel',
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
const methodInfo_Store1RPC_CreateCustomerLevel = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.Store1RPCClient.prototype.createCustomerLevel =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.Store1RPC/CreateCustomerLevel',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_CreateCustomerLevel,
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
proto.ding4.Store1RPCPromiseClient.prototype.createCustomerLevel =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.Store1RPC/CreateCustomerLevel',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_CreateCustomerLevel);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.CustomerLevel,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_Store1RPC_UpdateCustomerLevel = new grpc.web.MethodDescriptor(
  '/ding4.Store1RPC/UpdateCustomerLevel',
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
const methodInfo_Store1RPC_UpdateCustomerLevel = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.Store1RPCClient.prototype.updateCustomerLevel =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.Store1RPC/UpdateCustomerLevel',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_UpdateCustomerLevel,
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
proto.ding4.Store1RPCPromiseClient.prototype.updateCustomerLevel =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.Store1RPC/UpdateCustomerLevel',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_UpdateCustomerLevel);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_Store1RPC_FindCustomerLevel = new grpc.web.MethodDescriptor(
  '/ding4.Store1RPC/FindCustomerLevel',
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
const methodInfo_Store1RPC_FindCustomerLevel = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.Store1RPCClient.prototype.findCustomerLevel =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.Store1RPC/FindCustomerLevel',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_FindCustomerLevel,
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
proto.ding4.Store1RPCPromiseClient.prototype.findCustomerLevel =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.Store1RPC/FindCustomerLevel',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_FindCustomerLevel);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_Store1RPC_FindProductF = new grpc.web.MethodDescriptor(
  '/ding4.Store1RPC/FindProductF',
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
const methodInfo_Store1RPC_FindProductF = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.Store1RPCClient.prototype.findProductF =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.Store1RPC/FindProductF',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_FindProductF,
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
proto.ding4.Store1RPCPromiseClient.prototype.findProductF =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.Store1RPC/FindProductF',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_FindProductF);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_Store1RPC_FindProductSpec = new grpc.web.MethodDescriptor(
  '/ding4.Store1RPC/FindProductSpec',
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
const methodInfo_Store1RPC_FindProductSpec = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.Store1RPCClient.prototype.findProductSpec =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.Store1RPC/FindProductSpec',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_FindProductSpec,
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
proto.ding4.Store1RPCPromiseClient.prototype.findProductSpec =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.Store1RPC/FindProductSpec',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_FindProductSpec);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.ProductLink,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_Store1RPC_CreateProductLink = new grpc.web.MethodDescriptor(
  '/ding4.Store1RPC/CreateProductLink',
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
const methodInfo_Store1RPC_CreateProductLink = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.Store1RPCClient.prototype.createProductLink =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.Store1RPC/CreateProductLink',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_CreateProductLink,
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
proto.ding4.Store1RPCPromiseClient.prototype.createProductLink =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.Store1RPC/CreateProductLink',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_CreateProductLink);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.ProductLink,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_Store1RPC_UpdateProductLink = new grpc.web.MethodDescriptor(
  '/ding4.Store1RPC/UpdateProductLink',
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
const methodInfo_Store1RPC_UpdateProductLink = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.Store1RPCClient.prototype.updateProductLink =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.Store1RPC/UpdateProductLink',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_UpdateProductLink,
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
proto.ding4.Store1RPCPromiseClient.prototype.updateProductLink =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.Store1RPC/UpdateProductLink',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_UpdateProductLink);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_Store1RPC_FindProductLink = new grpc.web.MethodDescriptor(
  '/ding4.Store1RPC/FindProductLink',
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
const methodInfo_Store1RPC_FindProductLink = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.Store1RPCClient.prototype.findProductLink =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.Store1RPC/FindProductLink',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_FindProductLink,
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
proto.ding4.Store1RPCPromiseClient.prototype.findProductLink =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.Store1RPC/FindProductLink',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_FindProductLink);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.ProductClass,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_Store1RPC_CreateProductClass = new grpc.web.MethodDescriptor(
  '/ding4.Store1RPC/CreateProductClass',
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
const methodInfo_Store1RPC_CreateProductClass = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.Store1RPCClient.prototype.createProductClass =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.Store1RPC/CreateProductClass',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_CreateProductClass,
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
proto.ding4.Store1RPCPromiseClient.prototype.createProductClass =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.Store1RPC/CreateProductClass',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_CreateProductClass);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.ProductClass,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_Store1RPC_UpdateProductClass = new grpc.web.MethodDescriptor(
  '/ding4.Store1RPC/UpdateProductClass',
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
const methodInfo_Store1RPC_UpdateProductClass = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.Store1RPCClient.prototype.updateProductClass =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.Store1RPC/UpdateProductClass',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_UpdateProductClass,
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
proto.ding4.Store1RPCPromiseClient.prototype.updateProductClass =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.Store1RPC/UpdateProductClass',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_UpdateProductClass);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_Store1RPC_FindProductClass = new grpc.web.MethodDescriptor(
  '/ding4.Store1RPC/FindProductClass',
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
const methodInfo_Store1RPC_FindProductClass = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.Store1RPCClient.prototype.findProductClass =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.Store1RPC/FindProductClass',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_FindProductClass,
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
proto.ding4.Store1RPCPromiseClient.prototype.findProductClass =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.Store1RPC/FindProductClass',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_FindProductClass);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Image,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_Store1RPC_CreateProductClassImage = new grpc.web.MethodDescriptor(
  '/ding4.Store1RPC/CreateProductClassImage',
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
const methodInfo_Store1RPC_CreateProductClassImage = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.Store1RPCClient.prototype.createProductClassImage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.Store1RPC/CreateProductClassImage',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_CreateProductClassImage,
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
proto.ding4.Store1RPCPromiseClient.prototype.createProductClassImage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.Store1RPC/CreateProductClassImage',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_CreateProductClassImage);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Image,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_Store1RPC_UpdateProductClassImage = new grpc.web.MethodDescriptor(
  '/ding4.Store1RPC/UpdateProductClassImage',
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
const methodInfo_Store1RPC_UpdateProductClassImage = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.Store1RPCClient.prototype.updateProductClassImage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.Store1RPC/UpdateProductClassImage',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_UpdateProductClassImage,
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
proto.ding4.Store1RPCPromiseClient.prototype.updateProductClassImage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.Store1RPC/UpdateProductClassImage',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_UpdateProductClassImage);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Image,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_Store1RPC_DeleteProductClassImage = new grpc.web.MethodDescriptor(
  '/ding4.Store1RPC/DeleteProductClassImage',
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
const methodInfo_Store1RPC_DeleteProductClassImage = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.Store1RPCClient.prototype.deleteProductClassImage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.Store1RPC/DeleteProductClassImage',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_DeleteProductClassImage,
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
proto.ding4.Store1RPCPromiseClient.prototype.deleteProductClassImage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.Store1RPC/DeleteProductClassImage',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_DeleteProductClassImage);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_Store1RPC_FindProductStack = new grpc.web.MethodDescriptor(
  '/ding4.Store1RPC/FindProductStack',
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
const methodInfo_Store1RPC_FindProductStack = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.Store1RPCClient.prototype.findProductStack =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.Store1RPC/FindProductStack',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_FindProductStack,
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
proto.ding4.Store1RPCPromiseClient.prototype.findProductStack =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.Store1RPC/FindProductStack',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_FindProductStack);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_Store1RPC_FindSpecStack = new grpc.web.MethodDescriptor(
  '/ding4.Store1RPC/FindSpecStack',
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
const methodInfo_Store1RPC_FindSpecStack = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.Store1RPCClient.prototype.findSpecStack =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.Store1RPC/FindSpecStack',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_FindSpecStack,
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
proto.ding4.Store1RPCPromiseClient.prototype.findSpecStack =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.Store1RPC/FindSpecStack',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_FindSpecStack);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Car,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_Store1RPC_CreateCar = new grpc.web.MethodDescriptor(
  '/ding4.Store1RPC/CreateCar',
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
const methodInfo_Store1RPC_CreateCar = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.Store1RPCClient.prototype.createCar =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.Store1RPC/CreateCar',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_CreateCar,
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
proto.ding4.Store1RPCPromiseClient.prototype.createCar =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.Store1RPC/CreateCar',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_CreateCar);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Car,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_Store1RPC_DeleteCar = new grpc.web.MethodDescriptor(
  '/ding4.Store1RPC/DeleteCar',
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
const methodInfo_Store1RPC_DeleteCar = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.Store1RPCClient.prototype.deleteCar =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.Store1RPC/DeleteCar',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_DeleteCar,
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
proto.ding4.Store1RPCPromiseClient.prototype.deleteCar =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.Store1RPC/DeleteCar',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_DeleteCar);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Car,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_Store1RPC_CompleteCar = new grpc.web.MethodDescriptor(
  '/ding4.Store1RPC/CompleteCar',
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
const methodInfo_Store1RPC_CompleteCar = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.Store1RPCClient.prototype.completeCar =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.Store1RPC/CompleteCar',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_CompleteCar,
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
proto.ding4.Store1RPCPromiseClient.prototype.completeCar =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.Store1RPC/CompleteCar',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_CompleteCar);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_Store1RPC_FindCar = new grpc.web.MethodDescriptor(
  '/ding4.Store1RPC/FindCar',
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
const methodInfo_Store1RPC_FindCar = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.Store1RPCClient.prototype.findCar =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.Store1RPC/FindCar',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_FindCar,
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
proto.ding4.Store1RPCPromiseClient.prototype.findCar =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.Store1RPC/FindCar',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_FindCar);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Car,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_Store1RPC_AppendCommodity = new grpc.web.MethodDescriptor(
  '/ding4.Store1RPC/AppendCommodity',
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
const methodInfo_Store1RPC_AppendCommodity = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.Store1RPCClient.prototype.appendCommodity =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.Store1RPC/AppendCommodity',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_AppendCommodity,
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
proto.ding4.Store1RPCPromiseClient.prototype.appendCommodity =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.Store1RPC/AppendCommodity',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_AppendCommodity);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Commodity,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_Store1RPC_SubtractCommodity = new grpc.web.MethodDescriptor(
  '/ding4.Store1RPC/SubtractCommodity',
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
const methodInfo_Store1RPC_SubtractCommodity = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.Store1RPCClient.prototype.subtractCommodity =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.Store1RPC/SubtractCommodity',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_SubtractCommodity,
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
proto.ding4.Store1RPCPromiseClient.prototype.subtractCommodity =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.Store1RPC/SubtractCommodity',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_SubtractCommodity);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Car,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_Store1RPC_AppendDiscount = new grpc.web.MethodDescriptor(
  '/ding4.Store1RPC/AppendDiscount',
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
const methodInfo_Store1RPC_AppendDiscount = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.Store1RPCClient.prototype.appendDiscount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.Store1RPC/AppendDiscount',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_AppendDiscount,
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
proto.ding4.Store1RPCPromiseClient.prototype.appendDiscount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.Store1RPC/AppendDiscount',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_AppendDiscount);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Car,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_Store1RPC_SubtractDiscount = new grpc.web.MethodDescriptor(
  '/ding4.Store1RPC/SubtractDiscount',
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
const methodInfo_Store1RPC_SubtractDiscount = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.Store1RPCClient.prototype.subtractDiscount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.Store1RPC/SubtractDiscount',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_SubtractDiscount,
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
proto.ding4.Store1RPCPromiseClient.prototype.subtractDiscount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.Store1RPC/SubtractDiscount',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_SubtractDiscount);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Order,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_Store1RPC_CreateOrder = new grpc.web.MethodDescriptor(
  '/ding4.Store1RPC/CreateOrder',
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
const methodInfo_Store1RPC_CreateOrder = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.Store1RPCClient.prototype.createOrder =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.Store1RPC/CreateOrder',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_CreateOrder,
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
proto.ding4.Store1RPCPromiseClient.prototype.createOrder =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.Store1RPC/CreateOrder',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_CreateOrder);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Order,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_Store1RPC_PaymentOrder = new grpc.web.MethodDescriptor(
  '/ding4.Store1RPC/PaymentOrder',
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
const methodInfo_Store1RPC_PaymentOrder = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.Store1RPCClient.prototype.paymentOrder =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.Store1RPC/PaymentOrder',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_PaymentOrder,
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
proto.ding4.Store1RPCPromiseClient.prototype.paymentOrder =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.Store1RPC/PaymentOrder',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_PaymentOrder);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_Store1RPC_FindOrder = new grpc.web.MethodDescriptor(
  '/ding4.Store1RPC/FindOrder',
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
const methodInfo_Store1RPC_FindOrder = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.Store1RPCClient.prototype.findOrder =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.Store1RPC/FindOrder',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_FindOrder,
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
proto.ding4.Store1RPCPromiseClient.prototype.findOrder =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.Store1RPC/FindOrder',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_FindOrder);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Remind,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_Store1RPC_UpdateRemind = new grpc.web.MethodDescriptor(
  '/ding4.Store1RPC/UpdateRemind',
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
const methodInfo_Store1RPC_UpdateRemind = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.Store1RPCClient.prototype.updateRemind =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.Store1RPC/UpdateRemind',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_UpdateRemind,
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
proto.ding4.Store1RPCPromiseClient.prototype.updateRemind =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.Store1RPC/UpdateRemind',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_UpdateRemind);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_Store1RPC_FindRemind = new grpc.web.MethodDescriptor(
  '/ding4.Store1RPC/FindRemind',
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
const methodInfo_Store1RPC_FindRemind = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.Store1RPCClient.prototype.findRemind =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.Store1RPC/FindRemind',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_FindRemind,
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
proto.ding4.Store1RPCPromiseClient.prototype.findRemind =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.Store1RPC/FindRemind',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_FindRemind);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Setting,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_Store1RPC_CreateSetting = new grpc.web.MethodDescriptor(
  '/ding4.Store1RPC/CreateSetting',
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
const methodInfo_Store1RPC_CreateSetting = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.Store1RPCClient.prototype.createSetting =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.Store1RPC/CreateSetting',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_CreateSetting,
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
proto.ding4.Store1RPCPromiseClient.prototype.createSetting =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.Store1RPC/CreateSetting',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_CreateSetting);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Setting,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_Store1RPC_UpdateSetting = new grpc.web.MethodDescriptor(
  '/ding4.Store1RPC/UpdateSetting',
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
const methodInfo_Store1RPC_UpdateSetting = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.Store1RPCClient.prototype.updateSetting =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.Store1RPC/UpdateSetting',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_UpdateSetting,
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
proto.ding4.Store1RPCPromiseClient.prototype.updateSetting =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.Store1RPC/UpdateSetting',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_UpdateSetting);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Setting,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_Store1RPC_DeleteSetting = new grpc.web.MethodDescriptor(
  '/ding4.Store1RPC/DeleteSetting',
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
const methodInfo_Store1RPC_DeleteSetting = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.Store1RPCClient.prototype.deleteSetting =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.Store1RPC/DeleteSetting',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_DeleteSetting,
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
proto.ding4.Store1RPCPromiseClient.prototype.deleteSetting =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.Store1RPC/DeleteSetting',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_DeleteSetting);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_Store1RPC_FindSetting = new grpc.web.MethodDescriptor(
  '/ding4.Store1RPC/FindSetting',
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
const methodInfo_Store1RPC_FindSetting = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.Store1RPCClient.prototype.findSetting =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.Store1RPC/FindSetting',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_FindSetting,
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
proto.ding4.Store1RPCPromiseClient.prototype.findSetting =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.Store1RPC/FindSetting',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_FindSetting);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.WebLayout,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_Store1RPC_CreateWebLayout = new grpc.web.MethodDescriptor(
  '/ding4.Store1RPC/CreateWebLayout',
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
const methodInfo_Store1RPC_CreateWebLayout = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.Store1RPCClient.prototype.createWebLayout =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.Store1RPC/CreateWebLayout',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_CreateWebLayout,
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
proto.ding4.Store1RPCPromiseClient.prototype.createWebLayout =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.Store1RPC/CreateWebLayout',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_CreateWebLayout);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.WebLayout,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_Store1RPC_UpdateWebLayout = new grpc.web.MethodDescriptor(
  '/ding4.Store1RPC/UpdateWebLayout',
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
const methodInfo_Store1RPC_UpdateWebLayout = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.Store1RPCClient.prototype.updateWebLayout =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.Store1RPC/UpdateWebLayout',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_UpdateWebLayout,
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
proto.ding4.Store1RPCPromiseClient.prototype.updateWebLayout =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.Store1RPC/UpdateWebLayout',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_UpdateWebLayout);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.WebLayout,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_Store1RPC_DeleteWebLayout = new grpc.web.MethodDescriptor(
  '/ding4.Store1RPC/DeleteWebLayout',
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
const methodInfo_Store1RPC_DeleteWebLayout = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.Store1RPCClient.prototype.deleteWebLayout =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.Store1RPC/DeleteWebLayout',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_DeleteWebLayout,
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
proto.ding4.Store1RPCPromiseClient.prototype.deleteWebLayout =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.Store1RPC/DeleteWebLayout',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_DeleteWebLayout);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_Store1RPC_FindWebLayout = new grpc.web.MethodDescriptor(
  '/ding4.Store1RPC/FindWebLayout',
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
const methodInfo_Store1RPC_FindWebLayout = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.Store1RPCClient.prototype.findWebLayout =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.Store1RPC/FindWebLayout',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_FindWebLayout,
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
proto.ding4.Store1RPCPromiseClient.prototype.findWebLayout =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.Store1RPC/FindWebLayout',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_FindWebLayout);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Image,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_Store1RPC_CreateWebLayoutImage = new grpc.web.MethodDescriptor(
  '/ding4.Store1RPC/CreateWebLayoutImage',
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
const methodInfo_Store1RPC_CreateWebLayoutImage = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.Store1RPCClient.prototype.createWebLayoutImage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.Store1RPC/CreateWebLayoutImage',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_CreateWebLayoutImage,
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
proto.ding4.Store1RPCPromiseClient.prototype.createWebLayoutImage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.Store1RPC/CreateWebLayoutImage',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_CreateWebLayoutImage);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Image,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_Store1RPC_UpdateWebLayoutImage = new grpc.web.MethodDescriptor(
  '/ding4.Store1RPC/UpdateWebLayoutImage',
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
const methodInfo_Store1RPC_UpdateWebLayoutImage = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.Store1RPCClient.prototype.updateWebLayoutImage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.Store1RPC/UpdateWebLayoutImage',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_UpdateWebLayoutImage,
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
proto.ding4.Store1RPCPromiseClient.prototype.updateWebLayoutImage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.Store1RPC/UpdateWebLayoutImage',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_UpdateWebLayoutImage);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Image,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_Store1RPC_DeleteWebLayoutImage = new grpc.web.MethodDescriptor(
  '/ding4.Store1RPC/DeleteWebLayoutImage',
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
const methodInfo_Store1RPC_DeleteWebLayoutImage = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.Store1RPCClient.prototype.deleteWebLayoutImage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.Store1RPC/DeleteWebLayoutImage',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_DeleteWebLayoutImage,
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
proto.ding4.Store1RPCPromiseClient.prototype.deleteWebLayoutImage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.Store1RPC/DeleteWebLayoutImage',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_DeleteWebLayoutImage);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.WebPage,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_Store1RPC_CreateWebPage = new grpc.web.MethodDescriptor(
  '/ding4.Store1RPC/CreateWebPage',
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
const methodInfo_Store1RPC_CreateWebPage = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.Store1RPCClient.prototype.createWebPage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.Store1RPC/CreateWebPage',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_CreateWebPage,
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
proto.ding4.Store1RPCPromiseClient.prototype.createWebPage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.Store1RPC/CreateWebPage',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_CreateWebPage);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.WebPage,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_Store1RPC_UpdateWebPage = new grpc.web.MethodDescriptor(
  '/ding4.Store1RPC/UpdateWebPage',
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
const methodInfo_Store1RPC_UpdateWebPage = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.Store1RPCClient.prototype.updateWebPage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.Store1RPC/UpdateWebPage',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_UpdateWebPage,
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
proto.ding4.Store1RPCPromiseClient.prototype.updateWebPage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.Store1RPC/UpdateWebPage',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_UpdateWebPage);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.WebPage,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_Store1RPC_DeleteWebPage = new grpc.web.MethodDescriptor(
  '/ding4.Store1RPC/DeleteWebPage',
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
const methodInfo_Store1RPC_DeleteWebPage = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.Store1RPCClient.prototype.deleteWebPage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.Store1RPC/DeleteWebPage',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_DeleteWebPage,
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
proto.ding4.Store1RPCPromiseClient.prototype.deleteWebPage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.Store1RPC/DeleteWebPage',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_DeleteWebPage);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_Store1RPC_FindWebPage = new grpc.web.MethodDescriptor(
  '/ding4.Store1RPC/FindWebPage',
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
const methodInfo_Store1RPC_FindWebPage = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.Store1RPCClient.prototype.findWebPage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.Store1RPC/FindWebPage',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_FindWebPage,
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
proto.ding4.Store1RPCPromiseClient.prototype.findWebPage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.Store1RPC/FindWebPage',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_FindWebPage);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.WebItem,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_Store1RPC_CreateWebItem = new grpc.web.MethodDescriptor(
  '/ding4.Store1RPC/CreateWebItem',
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
const methodInfo_Store1RPC_CreateWebItem = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.Store1RPCClient.prototype.createWebItem =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.Store1RPC/CreateWebItem',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_CreateWebItem,
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
proto.ding4.Store1RPCPromiseClient.prototype.createWebItem =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.Store1RPC/CreateWebItem',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_CreateWebItem);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.WebItem,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_Store1RPC_UpdateWebItem = new grpc.web.MethodDescriptor(
  '/ding4.Store1RPC/UpdateWebItem',
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
const methodInfo_Store1RPC_UpdateWebItem = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.Store1RPCClient.prototype.updateWebItem =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.Store1RPC/UpdateWebItem',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_UpdateWebItem,
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
proto.ding4.Store1RPCPromiseClient.prototype.updateWebItem =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.Store1RPC/UpdateWebItem',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_UpdateWebItem);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.WebItem,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_Store1RPC_DeleteWebItem = new grpc.web.MethodDescriptor(
  '/ding4.Store1RPC/DeleteWebItem',
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
const methodInfo_Store1RPC_DeleteWebItem = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.Store1RPCClient.prototype.deleteWebItem =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.Store1RPC/DeleteWebItem',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_DeleteWebItem,
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
proto.ding4.Store1RPCPromiseClient.prototype.deleteWebItem =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.Store1RPC/DeleteWebItem',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_DeleteWebItem);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_Store1RPC_FindWebItem = new grpc.web.MethodDescriptor(
  '/ding4.Store1RPC/FindWebItem',
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
const methodInfo_Store1RPC_FindWebItem = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.Store1RPCClient.prototype.findWebItem =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.Store1RPC/FindWebItem',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_FindWebItem,
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
proto.ding4.Store1RPCPromiseClient.prototype.findWebItem =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.Store1RPC/FindWebItem',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_FindWebItem);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.WebBase,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_Store1RPC_UpdateWebBase = new grpc.web.MethodDescriptor(
  '/ding4.Store1RPC/UpdateWebBase',
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
const methodInfo_Store1RPC_UpdateWebBase = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.Store1RPCClient.prototype.updateWebBase =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.Store1RPC/UpdateWebBase',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_UpdateWebBase,
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
proto.ding4.Store1RPCPromiseClient.prototype.updateWebBase =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.Store1RPC/UpdateWebBase',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_UpdateWebBase);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_Store1RPC_FindWebBase = new grpc.web.MethodDescriptor(
  '/ding4.Store1RPC/FindWebBase',
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
const methodInfo_Store1RPC_FindWebBase = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.Store1RPCClient.prototype.findWebBase =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.Store1RPC/FindWebBase',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_FindWebBase,
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
proto.ding4.Store1RPCPromiseClient.prototype.findWebBase =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.Store1RPC/FindWebBase',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_FindWebBase);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Template,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_Store1RPC_CreateTemplate = new grpc.web.MethodDescriptor(
  '/ding4.Store1RPC/CreateTemplate',
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
const methodInfo_Store1RPC_CreateTemplate = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.Store1RPCClient.prototype.createTemplate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.Store1RPC/CreateTemplate',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_CreateTemplate,
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
proto.ding4.Store1RPCPromiseClient.prototype.createTemplate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.Store1RPC/CreateTemplate',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_CreateTemplate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Template,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_Store1RPC_UpdateTemplate = new grpc.web.MethodDescriptor(
  '/ding4.Store1RPC/UpdateTemplate',
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
const methodInfo_Store1RPC_UpdateTemplate = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.Store1RPCClient.prototype.updateTemplate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.Store1RPC/UpdateTemplate',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_UpdateTemplate,
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
proto.ding4.Store1RPCPromiseClient.prototype.updateTemplate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.Store1RPC/UpdateTemplate',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_UpdateTemplate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_Store1RPC_FindTemplate = new grpc.web.MethodDescriptor(
  '/ding4.Store1RPC/FindTemplate',
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
const methodInfo_Store1RPC_FindTemplate = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.Store1RPCClient.prototype.findTemplate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.Store1RPC/FindTemplate',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_FindTemplate,
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
proto.ding4.Store1RPCPromiseClient.prototype.findTemplate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.Store1RPC/FindTemplate',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_FindTemplate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Message,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_Store1RPC_CreateEDM = new grpc.web.MethodDescriptor(
  '/ding4.Store1RPC/CreateEDM',
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
const methodInfo_Store1RPC_CreateEDM = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.Store1RPCClient.prototype.createEDM =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.Store1RPC/CreateEDM',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_CreateEDM,
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
proto.ding4.Store1RPCPromiseClient.prototype.createEDM =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.Store1RPC/CreateEDM',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_CreateEDM);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Message,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_Store1RPC_CancelEDM = new grpc.web.MethodDescriptor(
  '/ding4.Store1RPC/CancelEDM',
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
const methodInfo_Store1RPC_CancelEDM = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.Store1RPCClient.prototype.cancelEDM =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.Store1RPC/CancelEDM',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_CancelEDM,
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
proto.ding4.Store1RPCPromiseClient.prototype.cancelEDM =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.Store1RPC/CancelEDM',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_CancelEDM);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_Store1RPC_FindEDM = new grpc.web.MethodDescriptor(
  '/ding4.Store1RPC/FindEDM',
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
const methodInfo_Store1RPC_FindEDM = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.Store1RPCClient.prototype.findEDM =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.Store1RPC/FindEDM',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_FindEDM,
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
proto.ding4.Store1RPCPromiseClient.prototype.findEDM =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.Store1RPC/FindEDM',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_FindEDM);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Message,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_Store1RPC_CreateSMS = new grpc.web.MethodDescriptor(
  '/ding4.Store1RPC/CreateSMS',
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
const methodInfo_Store1RPC_CreateSMS = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.Store1RPCClient.prototype.createSMS =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.Store1RPC/CreateSMS',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_CreateSMS,
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
proto.ding4.Store1RPCPromiseClient.prototype.createSMS =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.Store1RPC/CreateSMS',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_CreateSMS);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Message,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_Store1RPC_CancelSMS = new grpc.web.MethodDescriptor(
  '/ding4.Store1RPC/CancelSMS',
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
const methodInfo_Store1RPC_CancelSMS = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.Store1RPCClient.prototype.cancelSMS =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.Store1RPC/CancelSMS',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_CancelSMS,
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
proto.ding4.Store1RPCPromiseClient.prototype.cancelSMS =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.Store1RPC/CancelSMS',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_CancelSMS);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_Store1RPC_FindSMS = new grpc.web.MethodDescriptor(
  '/ding4.Store1RPC/FindSMS',
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
const methodInfo_Store1RPC_FindSMS = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.Store1RPCClient.prototype.findSMS =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.Store1RPC/FindSMS',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_FindSMS,
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
proto.ding4.Store1RPCPromiseClient.prototype.findSMS =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.Store1RPC/FindSMS',
      request,
      metadata || {},
      methodDescriptor_Store1RPC_FindSMS);
};


module.exports = proto.ding4;

