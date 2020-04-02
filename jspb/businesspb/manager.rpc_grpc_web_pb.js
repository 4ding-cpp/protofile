/**
 * @fileoverview gRPC-Web generated client stub for ding4
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var sql_pb = require('./sql_pb.js')

var label_pb = require('./label_pb.js')

var car_pb = require('./car_pb.js')

var manager_pb = require('./manager_pb.js')

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
proto.ding4 = require('./manager.rpc_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.ding4.ManagerRPCClient =
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
proto.ding4.ManagerRPCPromiseClient =
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
 *   !proto.ding4.Manager,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_ManagerRPC_ChangePassword = new grpc.web.MethodDescriptor(
  '/ding4.ManagerRPC/ChangePassword',
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
const methodInfo_ManagerRPC_ChangePassword = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.ManagerRPCClient.prototype.changePassword =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.ManagerRPC/ChangePassword',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_ChangePassword,
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
proto.ding4.ManagerRPCPromiseClient.prototype.changePassword =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.ManagerRPC/ChangePassword',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_ChangePassword);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Manager,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_ManagerRPC_ChangeInfo = new grpc.web.MethodDescriptor(
  '/ding4.ManagerRPC/ChangeInfo',
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
const methodInfo_ManagerRPC_ChangeInfo = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.ManagerRPCClient.prototype.changeInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.ManagerRPC/ChangeInfo',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_ChangeInfo,
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
proto.ding4.ManagerRPCPromiseClient.prototype.changeInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.ManagerRPC/ChangeInfo',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_ChangeInfo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Manager,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_ManagerRPC_ChangeWhitelist = new grpc.web.MethodDescriptor(
  '/ding4.ManagerRPC/ChangeWhitelist',
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
const methodInfo_ManagerRPC_ChangeWhitelist = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.ManagerRPCClient.prototype.changeWhitelist =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.ManagerRPC/ChangeWhitelist',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_ChangeWhitelist,
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
proto.ding4.ManagerRPCPromiseClient.prototype.changeWhitelist =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.ManagerRPC/ChangeWhitelist',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_ChangeWhitelist);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_ManagerRPC_FindPermission = new grpc.web.MethodDescriptor(
  '/ding4.ManagerRPC/FindPermission',
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
const methodInfo_ManagerRPC_FindPermission = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.ManagerRPCClient.prototype.findPermission =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.ManagerRPC/FindPermission',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_FindPermission,
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
proto.ding4.ManagerRPCPromiseClient.prototype.findPermission =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.ManagerRPC/FindPermission',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_FindPermission);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Label,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_ManagerRPC_CreateLabel = new grpc.web.MethodDescriptor(
  '/ding4.ManagerRPC/CreateLabel',
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
const methodInfo_ManagerRPC_CreateLabel = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.ManagerRPCClient.prototype.createLabel =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.ManagerRPC/CreateLabel',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_CreateLabel,
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
proto.ding4.ManagerRPCPromiseClient.prototype.createLabel =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.ManagerRPC/CreateLabel',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_CreateLabel);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Label,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_ManagerRPC_UpdateLabel = new grpc.web.MethodDescriptor(
  '/ding4.ManagerRPC/UpdateLabel',
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
const methodInfo_ManagerRPC_UpdateLabel = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.ManagerRPCClient.prototype.updateLabel =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.ManagerRPC/UpdateLabel',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_UpdateLabel,
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
proto.ding4.ManagerRPCPromiseClient.prototype.updateLabel =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.ManagerRPC/UpdateLabel',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_UpdateLabel);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Label,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_ManagerRPC_AppendLabel = new grpc.web.MethodDescriptor(
  '/ding4.ManagerRPC/AppendLabel',
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
const methodInfo_ManagerRPC_AppendLabel = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.ManagerRPCClient.prototype.appendLabel =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.ManagerRPC/AppendLabel',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_AppendLabel,
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
proto.ding4.ManagerRPCPromiseClient.prototype.appendLabel =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.ManagerRPC/AppendLabel',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_AppendLabel);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Label,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_ManagerRPC_SubtractLabel = new grpc.web.MethodDescriptor(
  '/ding4.ManagerRPC/SubtractLabel',
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
const methodInfo_ManagerRPC_SubtractLabel = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.ManagerRPCClient.prototype.subtractLabel =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.ManagerRPC/SubtractLabel',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_SubtractLabel,
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
proto.ding4.ManagerRPCPromiseClient.prototype.subtractLabel =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.ManagerRPC/SubtractLabel',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_SubtractLabel);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_ManagerRPC_FindLabel = new grpc.web.MethodDescriptor(
  '/ding4.ManagerRPC/FindLabel',
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
const methodInfo_ManagerRPC_FindLabel = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.ManagerRPCClient.prototype.findLabel =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.ManagerRPC/FindLabel',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_FindLabel,
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
proto.ding4.ManagerRPCPromiseClient.prototype.findLabel =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.ManagerRPC/FindLabel',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_FindLabel);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Activity,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_ManagerRPC_CreateActivity = new grpc.web.MethodDescriptor(
  '/ding4.ManagerRPC/CreateActivity',
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
const methodInfo_ManagerRPC_CreateActivity = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.ManagerRPCClient.prototype.createActivity =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.ManagerRPC/CreateActivity',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_CreateActivity,
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
proto.ding4.ManagerRPCPromiseClient.prototype.createActivity =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.ManagerRPC/CreateActivity',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_CreateActivity);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Activity,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_ManagerRPC_UpdateActivity = new grpc.web.MethodDescriptor(
  '/ding4.ManagerRPC/UpdateActivity',
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
const methodInfo_ManagerRPC_UpdateActivity = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.ManagerRPCClient.prototype.updateActivity =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.ManagerRPC/UpdateActivity',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_UpdateActivity,
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
proto.ding4.ManagerRPCPromiseClient.prototype.updateActivity =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.ManagerRPC/UpdateActivity',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_UpdateActivity);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_ManagerRPC_FindActivity = new grpc.web.MethodDescriptor(
  '/ding4.ManagerRPC/FindActivity',
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
const methodInfo_ManagerRPC_FindActivity = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.ManagerRPCClient.prototype.findActivity =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.ManagerRPC/FindActivity',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_FindActivity,
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
proto.ding4.ManagerRPCPromiseClient.prototype.findActivity =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.ManagerRPC/FindActivity',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_FindActivity);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.ActivityProduct,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_ManagerRPC_AppendActivityProduct = new grpc.web.MethodDescriptor(
  '/ding4.ManagerRPC/AppendActivityProduct',
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
const methodInfo_ManagerRPC_AppendActivityProduct = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.ManagerRPCClient.prototype.appendActivityProduct =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.ManagerRPC/AppendActivityProduct',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_AppendActivityProduct,
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
proto.ding4.ManagerRPCPromiseClient.prototype.appendActivityProduct =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.ManagerRPC/AppendActivityProduct',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_AppendActivityProduct);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.ActivityProduct,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_ManagerRPC_SubstractActivityProduct = new grpc.web.MethodDescriptor(
  '/ding4.ManagerRPC/SubstractActivityProduct',
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
const methodInfo_ManagerRPC_SubstractActivityProduct = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.ManagerRPCClient.prototype.substractActivityProduct =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.ManagerRPC/SubstractActivityProduct',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_SubstractActivityProduct,
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
proto.ding4.ManagerRPCPromiseClient.prototype.substractActivityProduct =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.ManagerRPC/SubstractActivityProduct',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_SubstractActivityProduct);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.ActivityProduct,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_ManagerRPC_FindActivityProduct = new grpc.web.MethodDescriptor(
  '/ding4.ManagerRPC/FindActivityProduct',
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
const methodInfo_ManagerRPC_FindActivityProduct = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.ManagerRPCClient.prototype.findActivityProduct =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.ManagerRPC/FindActivityProduct',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_FindActivityProduct,
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
proto.ding4.ManagerRPCPromiseClient.prototype.findActivityProduct =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.ManagerRPC/FindActivityProduct',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_FindActivityProduct);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Discount,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_ManagerRPC_CreateDiscount = new grpc.web.MethodDescriptor(
  '/ding4.ManagerRPC/CreateDiscount',
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
const methodInfo_ManagerRPC_CreateDiscount = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.ManagerRPCClient.prototype.createDiscount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.ManagerRPC/CreateDiscount',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_CreateDiscount,
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
proto.ding4.ManagerRPCPromiseClient.prototype.createDiscount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.ManagerRPC/CreateDiscount',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_CreateDiscount);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Discount,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_ManagerRPC_UpdateDiscount = new grpc.web.MethodDescriptor(
  '/ding4.ManagerRPC/UpdateDiscount',
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
const methodInfo_ManagerRPC_UpdateDiscount = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.ManagerRPCClient.prototype.updateDiscount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.ManagerRPC/UpdateDiscount',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_UpdateDiscount,
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
proto.ding4.ManagerRPCPromiseClient.prototype.updateDiscount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.ManagerRPC/UpdateDiscount',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_UpdateDiscount);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_ManagerRPC_FindDiscount = new grpc.web.MethodDescriptor(
  '/ding4.ManagerRPC/FindDiscount',
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
const methodInfo_ManagerRPC_FindDiscount = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.ManagerRPCClient.prototype.findDiscount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.ManagerRPC/FindDiscount',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_FindDiscount,
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
proto.ding4.ManagerRPCPromiseClient.prototype.findDiscount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.ManagerRPC/FindDiscount',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_FindDiscount);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_ManagerRPC_FindDiscountCustomer = new grpc.web.MethodDescriptor(
  '/ding4.ManagerRPC/FindDiscountCustomer',
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
const methodInfo_ManagerRPC_FindDiscountCustomer = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.ManagerRPCClient.prototype.findDiscountCustomer =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.ManagerRPC/FindDiscountCustomer',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_FindDiscountCustomer,
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
proto.ding4.ManagerRPCPromiseClient.prototype.findDiscountCustomer =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.ManagerRPC/FindDiscountCustomer',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_FindDiscountCustomer);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.DiscountItem,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_ManagerRPC_ExchangeDiscount = new grpc.web.MethodDescriptor(
  '/ding4.ManagerRPC/ExchangeDiscount',
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
const methodInfo_ManagerRPC_ExchangeDiscount = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.ManagerRPCClient.prototype.exchangeDiscount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.ManagerRPC/ExchangeDiscount',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_ExchangeDiscount,
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
proto.ding4.ManagerRPCPromiseClient.prototype.exchangeDiscount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.ManagerRPC/ExchangeDiscount',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_ExchangeDiscount);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.CustomerLink,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_ManagerRPC_CreateCustomerLink = new grpc.web.MethodDescriptor(
  '/ding4.ManagerRPC/CreateCustomerLink',
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
const methodInfo_ManagerRPC_CreateCustomerLink = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.ManagerRPCClient.prototype.createCustomerLink =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.ManagerRPC/CreateCustomerLink',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_CreateCustomerLink,
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
proto.ding4.ManagerRPCPromiseClient.prototype.createCustomerLink =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.ManagerRPC/CreateCustomerLink',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_CreateCustomerLink);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.CustomerLink,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_ManagerRPC_UpdateCustomerLink = new grpc.web.MethodDescriptor(
  '/ding4.ManagerRPC/UpdateCustomerLink',
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
const methodInfo_ManagerRPC_UpdateCustomerLink = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.ManagerRPCClient.prototype.updateCustomerLink =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.ManagerRPC/UpdateCustomerLink',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_UpdateCustomerLink,
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
proto.ding4.ManagerRPCPromiseClient.prototype.updateCustomerLink =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.ManagerRPC/UpdateCustomerLink',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_UpdateCustomerLink);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_ManagerRPC_FindCustomerLink = new grpc.web.MethodDescriptor(
  '/ding4.ManagerRPC/FindCustomerLink',
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
const methodInfo_ManagerRPC_FindCustomerLink = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.ManagerRPCClient.prototype.findCustomerLink =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.ManagerRPC/FindCustomerLink',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_FindCustomerLink,
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
proto.ding4.ManagerRPCPromiseClient.prototype.findCustomerLink =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.ManagerRPC/FindCustomerLink',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_FindCustomerLink);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.CustomerLevel,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_ManagerRPC_CreateCustomerLevel = new grpc.web.MethodDescriptor(
  '/ding4.ManagerRPC/CreateCustomerLevel',
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
const methodInfo_ManagerRPC_CreateCustomerLevel = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.ManagerRPCClient.prototype.createCustomerLevel =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.ManagerRPC/CreateCustomerLevel',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_CreateCustomerLevel,
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
proto.ding4.ManagerRPCPromiseClient.prototype.createCustomerLevel =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.ManagerRPC/CreateCustomerLevel',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_CreateCustomerLevel);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.CustomerLevel,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_ManagerRPC_UpdateCustomerLevel = new grpc.web.MethodDescriptor(
  '/ding4.ManagerRPC/UpdateCustomerLevel',
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
const methodInfo_ManagerRPC_UpdateCustomerLevel = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.ManagerRPCClient.prototype.updateCustomerLevel =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.ManagerRPC/UpdateCustomerLevel',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_UpdateCustomerLevel,
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
proto.ding4.ManagerRPCPromiseClient.prototype.updateCustomerLevel =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.ManagerRPC/UpdateCustomerLevel',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_UpdateCustomerLevel);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_ManagerRPC_FindCustomerLevel = new grpc.web.MethodDescriptor(
  '/ding4.ManagerRPC/FindCustomerLevel',
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
const methodInfo_ManagerRPC_FindCustomerLevel = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.ManagerRPCClient.prototype.findCustomerLevel =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.ManagerRPC/FindCustomerLevel',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_FindCustomerLevel,
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
proto.ding4.ManagerRPCPromiseClient.prototype.findCustomerLevel =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.ManagerRPC/FindCustomerLevel',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_FindCustomerLevel);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_ManagerRPC_FindProductF = new grpc.web.MethodDescriptor(
  '/ding4.ManagerRPC/FindProductF',
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
const methodInfo_ManagerRPC_FindProductF = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.ManagerRPCClient.prototype.findProductF =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.ManagerRPC/FindProductF',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_FindProductF,
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
proto.ding4.ManagerRPCPromiseClient.prototype.findProductF =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.ManagerRPC/FindProductF',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_FindProductF);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_ManagerRPC_FindProductSpec = new grpc.web.MethodDescriptor(
  '/ding4.ManagerRPC/FindProductSpec',
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
const methodInfo_ManagerRPC_FindProductSpec = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.ManagerRPCClient.prototype.findProductSpec =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.ManagerRPC/FindProductSpec',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_FindProductSpec,
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
proto.ding4.ManagerRPCPromiseClient.prototype.findProductSpec =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.ManagerRPC/FindProductSpec',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_FindProductSpec);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.ProductLink,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_ManagerRPC_CreateProductLink = new grpc.web.MethodDescriptor(
  '/ding4.ManagerRPC/CreateProductLink',
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
const methodInfo_ManagerRPC_CreateProductLink = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.ManagerRPCClient.prototype.createProductLink =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.ManagerRPC/CreateProductLink',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_CreateProductLink,
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
proto.ding4.ManagerRPCPromiseClient.prototype.createProductLink =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.ManagerRPC/CreateProductLink',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_CreateProductLink);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.ProductLink,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_ManagerRPC_UpdateProductLink = new grpc.web.MethodDescriptor(
  '/ding4.ManagerRPC/UpdateProductLink',
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
const methodInfo_ManagerRPC_UpdateProductLink = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.ManagerRPCClient.prototype.updateProductLink =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.ManagerRPC/UpdateProductLink',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_UpdateProductLink,
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
proto.ding4.ManagerRPCPromiseClient.prototype.updateProductLink =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.ManagerRPC/UpdateProductLink',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_UpdateProductLink);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_ManagerRPC_FindProductLink = new grpc.web.MethodDescriptor(
  '/ding4.ManagerRPC/FindProductLink',
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
const methodInfo_ManagerRPC_FindProductLink = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.ManagerRPCClient.prototype.findProductLink =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.ManagerRPC/FindProductLink',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_FindProductLink,
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
proto.ding4.ManagerRPCPromiseClient.prototype.findProductLink =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.ManagerRPC/FindProductLink',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_FindProductLink);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.ProductClass,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_ManagerRPC_CreateProductClass = new grpc.web.MethodDescriptor(
  '/ding4.ManagerRPC/CreateProductClass',
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
const methodInfo_ManagerRPC_CreateProductClass = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.ManagerRPCClient.prototype.createProductClass =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.ManagerRPC/CreateProductClass',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_CreateProductClass,
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
proto.ding4.ManagerRPCPromiseClient.prototype.createProductClass =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.ManagerRPC/CreateProductClass',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_CreateProductClass);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.ProductClass,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_ManagerRPC_UpdateProductClass = new grpc.web.MethodDescriptor(
  '/ding4.ManagerRPC/UpdateProductClass',
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
const methodInfo_ManagerRPC_UpdateProductClass = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.ManagerRPCClient.prototype.updateProductClass =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.ManagerRPC/UpdateProductClass',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_UpdateProductClass,
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
proto.ding4.ManagerRPCPromiseClient.prototype.updateProductClass =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.ManagerRPC/UpdateProductClass',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_UpdateProductClass);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_ManagerRPC_FindProductClass = new grpc.web.MethodDescriptor(
  '/ding4.ManagerRPC/FindProductClass',
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
const methodInfo_ManagerRPC_FindProductClass = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.ManagerRPCClient.prototype.findProductClass =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.ManagerRPC/FindProductClass',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_FindProductClass,
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
proto.ding4.ManagerRPCPromiseClient.prototype.findProductClass =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.ManagerRPC/FindProductClass',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_FindProductClass);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Image,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_ManagerRPC_CreateProductClassImage = new grpc.web.MethodDescriptor(
  '/ding4.ManagerRPC/CreateProductClassImage',
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
const methodInfo_ManagerRPC_CreateProductClassImage = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.ManagerRPCClient.prototype.createProductClassImage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.ManagerRPC/CreateProductClassImage',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_CreateProductClassImage,
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
proto.ding4.ManagerRPCPromiseClient.prototype.createProductClassImage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.ManagerRPC/CreateProductClassImage',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_CreateProductClassImage);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Image,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_ManagerRPC_UpdateProductClassImage = new grpc.web.MethodDescriptor(
  '/ding4.ManagerRPC/UpdateProductClassImage',
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
const methodInfo_ManagerRPC_UpdateProductClassImage = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.ManagerRPCClient.prototype.updateProductClassImage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.ManagerRPC/UpdateProductClassImage',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_UpdateProductClassImage,
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
proto.ding4.ManagerRPCPromiseClient.prototype.updateProductClassImage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.ManagerRPC/UpdateProductClassImage',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_UpdateProductClassImage);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Image,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_ManagerRPC_DeleteProductClassImage = new grpc.web.MethodDescriptor(
  '/ding4.ManagerRPC/DeleteProductClassImage',
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
const methodInfo_ManagerRPC_DeleteProductClassImage = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.ManagerRPCClient.prototype.deleteProductClassImage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.ManagerRPC/DeleteProductClassImage',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_DeleteProductClassImage,
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
proto.ding4.ManagerRPCPromiseClient.prototype.deleteProductClassImage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.ManagerRPC/DeleteProductClassImage',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_DeleteProductClassImage);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_ManagerRPC_FindProductStack = new grpc.web.MethodDescriptor(
  '/ding4.ManagerRPC/FindProductStack',
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
const methodInfo_ManagerRPC_FindProductStack = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.ManagerRPCClient.prototype.findProductStack =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.ManagerRPC/FindProductStack',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_FindProductStack,
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
proto.ding4.ManagerRPCPromiseClient.prototype.findProductStack =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.ManagerRPC/FindProductStack',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_FindProductStack);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_ManagerRPC_FindSpecStack = new grpc.web.MethodDescriptor(
  '/ding4.ManagerRPC/FindSpecStack',
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
const methodInfo_ManagerRPC_FindSpecStack = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.ManagerRPCClient.prototype.findSpecStack =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.ManagerRPC/FindSpecStack',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_FindSpecStack,
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
proto.ding4.ManagerRPCPromiseClient.prototype.findSpecStack =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.ManagerRPC/FindSpecStack',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_FindSpecStack);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Car,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_ManagerRPC_CreateCar = new grpc.web.MethodDescriptor(
  '/ding4.ManagerRPC/CreateCar',
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
const methodInfo_ManagerRPC_CreateCar = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.ManagerRPCClient.prototype.createCar =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.ManagerRPC/CreateCar',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_CreateCar,
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
proto.ding4.ManagerRPCPromiseClient.prototype.createCar =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.ManagerRPC/CreateCar',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_CreateCar);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Car,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_ManagerRPC_DeleteCar = new grpc.web.MethodDescriptor(
  '/ding4.ManagerRPC/DeleteCar',
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
const methodInfo_ManagerRPC_DeleteCar = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.ManagerRPCClient.prototype.deleteCar =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.ManagerRPC/DeleteCar',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_DeleteCar,
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
proto.ding4.ManagerRPCPromiseClient.prototype.deleteCar =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.ManagerRPC/DeleteCar',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_DeleteCar);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Car,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_ManagerRPC_CompleteCar = new grpc.web.MethodDescriptor(
  '/ding4.ManagerRPC/CompleteCar',
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
const methodInfo_ManagerRPC_CompleteCar = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.ManagerRPCClient.prototype.completeCar =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.ManagerRPC/CompleteCar',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_CompleteCar,
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
proto.ding4.ManagerRPCPromiseClient.prototype.completeCar =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.ManagerRPC/CompleteCar',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_CompleteCar);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_ManagerRPC_FindCar = new grpc.web.MethodDescriptor(
  '/ding4.ManagerRPC/FindCar',
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
const methodInfo_ManagerRPC_FindCar = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.ManagerRPCClient.prototype.findCar =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.ManagerRPC/FindCar',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_FindCar,
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
proto.ding4.ManagerRPCPromiseClient.prototype.findCar =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.ManagerRPC/FindCar',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_FindCar);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Commodity,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_ManagerRPC_AppendCommodity = new grpc.web.MethodDescriptor(
  '/ding4.ManagerRPC/AppendCommodity',
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
const methodInfo_ManagerRPC_AppendCommodity = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.ManagerRPCClient.prototype.appendCommodity =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.ManagerRPC/AppendCommodity',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_AppendCommodity,
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
proto.ding4.ManagerRPCPromiseClient.prototype.appendCommodity =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.ManagerRPC/AppendCommodity',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_AppendCommodity);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Commodity,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_ManagerRPC_SubtractCommodity = new grpc.web.MethodDescriptor(
  '/ding4.ManagerRPC/SubtractCommodity',
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
const methodInfo_ManagerRPC_SubtractCommodity = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.ManagerRPCClient.prototype.subtractCommodity =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.ManagerRPC/SubtractCommodity',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_SubtractCommodity,
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
proto.ding4.ManagerRPCPromiseClient.prototype.subtractCommodity =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.ManagerRPC/SubtractCommodity',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_SubtractCommodity);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Car,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_ManagerRPC_AppendDiscount = new grpc.web.MethodDescriptor(
  '/ding4.ManagerRPC/AppendDiscount',
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
const methodInfo_ManagerRPC_AppendDiscount = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.ManagerRPCClient.prototype.appendDiscount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.ManagerRPC/AppendDiscount',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_AppendDiscount,
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
proto.ding4.ManagerRPCPromiseClient.prototype.appendDiscount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.ManagerRPC/AppendDiscount',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_AppendDiscount);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Car,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_ManagerRPC_SubtractDiscount = new grpc.web.MethodDescriptor(
  '/ding4.ManagerRPC/SubtractDiscount',
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
const methodInfo_ManagerRPC_SubtractDiscount = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.ManagerRPCClient.prototype.subtractDiscount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.ManagerRPC/SubtractDiscount',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_SubtractDiscount,
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
proto.ding4.ManagerRPCPromiseClient.prototype.subtractDiscount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.ManagerRPC/SubtractDiscount',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_SubtractDiscount);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Order,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_ManagerRPC_CreateOrder = new grpc.web.MethodDescriptor(
  '/ding4.ManagerRPC/CreateOrder',
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
const methodInfo_ManagerRPC_CreateOrder = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.ManagerRPCClient.prototype.createOrder =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.ManagerRPC/CreateOrder',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_CreateOrder,
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
proto.ding4.ManagerRPCPromiseClient.prototype.createOrder =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.ManagerRPC/CreateOrder',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_CreateOrder);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Order,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_ManagerRPC_PaymentOrder = new grpc.web.MethodDescriptor(
  '/ding4.ManagerRPC/PaymentOrder',
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
const methodInfo_ManagerRPC_PaymentOrder = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.ManagerRPCClient.prototype.paymentOrder =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.ManagerRPC/PaymentOrder',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_PaymentOrder,
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
proto.ding4.ManagerRPCPromiseClient.prototype.paymentOrder =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.ManagerRPC/PaymentOrder',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_PaymentOrder);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_ManagerRPC_FindOrder = new grpc.web.MethodDescriptor(
  '/ding4.ManagerRPC/FindOrder',
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
const methodInfo_ManagerRPC_FindOrder = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.ManagerRPCClient.prototype.findOrder =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.ManagerRPC/FindOrder',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_FindOrder,
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
proto.ding4.ManagerRPCPromiseClient.prototype.findOrder =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.ManagerRPC/FindOrder',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_FindOrder);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Remind,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_ManagerRPC_UpdateRemind = new grpc.web.MethodDescriptor(
  '/ding4.ManagerRPC/UpdateRemind',
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
const methodInfo_ManagerRPC_UpdateRemind = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.ManagerRPCClient.prototype.updateRemind =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.ManagerRPC/UpdateRemind',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_UpdateRemind,
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
proto.ding4.ManagerRPCPromiseClient.prototype.updateRemind =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.ManagerRPC/UpdateRemind',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_UpdateRemind);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_ManagerRPC_FindRemind = new grpc.web.MethodDescriptor(
  '/ding4.ManagerRPC/FindRemind',
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
const methodInfo_ManagerRPC_FindRemind = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.ManagerRPCClient.prototype.findRemind =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.ManagerRPC/FindRemind',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_FindRemind,
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
proto.ding4.ManagerRPCPromiseClient.prototype.findRemind =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.ManagerRPC/FindRemind',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_FindRemind);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Setting,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_ManagerRPC_CreateSetting = new grpc.web.MethodDescriptor(
  '/ding4.ManagerRPC/CreateSetting',
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
const methodInfo_ManagerRPC_CreateSetting = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.ManagerRPCClient.prototype.createSetting =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.ManagerRPC/CreateSetting',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_CreateSetting,
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
proto.ding4.ManagerRPCPromiseClient.prototype.createSetting =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.ManagerRPC/CreateSetting',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_CreateSetting);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Setting,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_ManagerRPC_UpdateSetting = new grpc.web.MethodDescriptor(
  '/ding4.ManagerRPC/UpdateSetting',
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
const methodInfo_ManagerRPC_UpdateSetting = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.ManagerRPCClient.prototype.updateSetting =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.ManagerRPC/UpdateSetting',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_UpdateSetting,
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
proto.ding4.ManagerRPCPromiseClient.prototype.updateSetting =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.ManagerRPC/UpdateSetting',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_UpdateSetting);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Setting,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_ManagerRPC_DeleteSetting = new grpc.web.MethodDescriptor(
  '/ding4.ManagerRPC/DeleteSetting',
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
const methodInfo_ManagerRPC_DeleteSetting = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.ManagerRPCClient.prototype.deleteSetting =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.ManagerRPC/DeleteSetting',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_DeleteSetting,
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
proto.ding4.ManagerRPCPromiseClient.prototype.deleteSetting =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.ManagerRPC/DeleteSetting',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_DeleteSetting);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_ManagerRPC_FindSetting = new grpc.web.MethodDescriptor(
  '/ding4.ManagerRPC/FindSetting',
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
const methodInfo_ManagerRPC_FindSetting = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.ManagerRPCClient.prototype.findSetting =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.ManagerRPC/FindSetting',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_FindSetting,
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
proto.ding4.ManagerRPCPromiseClient.prototype.findSetting =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.ManagerRPC/FindSetting',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_FindSetting);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.WebLayout,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_ManagerRPC_CreateWebLayout = new grpc.web.MethodDescriptor(
  '/ding4.ManagerRPC/CreateWebLayout',
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
const methodInfo_ManagerRPC_CreateWebLayout = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.ManagerRPCClient.prototype.createWebLayout =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.ManagerRPC/CreateWebLayout',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_CreateWebLayout,
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
proto.ding4.ManagerRPCPromiseClient.prototype.createWebLayout =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.ManagerRPC/CreateWebLayout',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_CreateWebLayout);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.WebLayout,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_ManagerRPC_UpdateWebLayout = new grpc.web.MethodDescriptor(
  '/ding4.ManagerRPC/UpdateWebLayout',
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
const methodInfo_ManagerRPC_UpdateWebLayout = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.ManagerRPCClient.prototype.updateWebLayout =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.ManagerRPC/UpdateWebLayout',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_UpdateWebLayout,
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
proto.ding4.ManagerRPCPromiseClient.prototype.updateWebLayout =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.ManagerRPC/UpdateWebLayout',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_UpdateWebLayout);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.WebLayout,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_ManagerRPC_DeleteWebLayout = new grpc.web.MethodDescriptor(
  '/ding4.ManagerRPC/DeleteWebLayout',
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
const methodInfo_ManagerRPC_DeleteWebLayout = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.ManagerRPCClient.prototype.deleteWebLayout =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.ManagerRPC/DeleteWebLayout',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_DeleteWebLayout,
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
proto.ding4.ManagerRPCPromiseClient.prototype.deleteWebLayout =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.ManagerRPC/DeleteWebLayout',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_DeleteWebLayout);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_ManagerRPC_FindWebLayout = new grpc.web.MethodDescriptor(
  '/ding4.ManagerRPC/FindWebLayout',
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
const methodInfo_ManagerRPC_FindWebLayout = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.ManagerRPCClient.prototype.findWebLayout =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.ManagerRPC/FindWebLayout',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_FindWebLayout,
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
proto.ding4.ManagerRPCPromiseClient.prototype.findWebLayout =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.ManagerRPC/FindWebLayout',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_FindWebLayout);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Image,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_ManagerRPC_CreateWebLayoutImage = new grpc.web.MethodDescriptor(
  '/ding4.ManagerRPC/CreateWebLayoutImage',
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
const methodInfo_ManagerRPC_CreateWebLayoutImage = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.ManagerRPCClient.prototype.createWebLayoutImage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.ManagerRPC/CreateWebLayoutImage',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_CreateWebLayoutImage,
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
proto.ding4.ManagerRPCPromiseClient.prototype.createWebLayoutImage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.ManagerRPC/CreateWebLayoutImage',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_CreateWebLayoutImage);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Image,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_ManagerRPC_UpdateWebLayoutImage = new grpc.web.MethodDescriptor(
  '/ding4.ManagerRPC/UpdateWebLayoutImage',
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
const methodInfo_ManagerRPC_UpdateWebLayoutImage = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.ManagerRPCClient.prototype.updateWebLayoutImage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.ManagerRPC/UpdateWebLayoutImage',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_UpdateWebLayoutImage,
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
proto.ding4.ManagerRPCPromiseClient.prototype.updateWebLayoutImage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.ManagerRPC/UpdateWebLayoutImage',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_UpdateWebLayoutImage);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Image,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_ManagerRPC_DeleteWebLayoutImage = new grpc.web.MethodDescriptor(
  '/ding4.ManagerRPC/DeleteWebLayoutImage',
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
const methodInfo_ManagerRPC_DeleteWebLayoutImage = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.ManagerRPCClient.prototype.deleteWebLayoutImage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.ManagerRPC/DeleteWebLayoutImage',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_DeleteWebLayoutImage,
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
proto.ding4.ManagerRPCPromiseClient.prototype.deleteWebLayoutImage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.ManagerRPC/DeleteWebLayoutImage',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_DeleteWebLayoutImage);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.WebPage,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_ManagerRPC_CreateWebPage = new grpc.web.MethodDescriptor(
  '/ding4.ManagerRPC/CreateWebPage',
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
const methodInfo_ManagerRPC_CreateWebPage = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.ManagerRPCClient.prototype.createWebPage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.ManagerRPC/CreateWebPage',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_CreateWebPage,
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
proto.ding4.ManagerRPCPromiseClient.prototype.createWebPage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.ManagerRPC/CreateWebPage',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_CreateWebPage);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.WebPage,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_ManagerRPC_UpdateWebPage = new grpc.web.MethodDescriptor(
  '/ding4.ManagerRPC/UpdateWebPage',
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
const methodInfo_ManagerRPC_UpdateWebPage = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.ManagerRPCClient.prototype.updateWebPage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.ManagerRPC/UpdateWebPage',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_UpdateWebPage,
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
proto.ding4.ManagerRPCPromiseClient.prototype.updateWebPage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.ManagerRPC/UpdateWebPage',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_UpdateWebPage);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.WebPage,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_ManagerRPC_DeleteWebPage = new grpc.web.MethodDescriptor(
  '/ding4.ManagerRPC/DeleteWebPage',
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
const methodInfo_ManagerRPC_DeleteWebPage = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.ManagerRPCClient.prototype.deleteWebPage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.ManagerRPC/DeleteWebPage',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_DeleteWebPage,
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
proto.ding4.ManagerRPCPromiseClient.prototype.deleteWebPage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.ManagerRPC/DeleteWebPage',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_DeleteWebPage);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_ManagerRPC_FindWebPage = new grpc.web.MethodDescriptor(
  '/ding4.ManagerRPC/FindWebPage',
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
const methodInfo_ManagerRPC_FindWebPage = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.ManagerRPCClient.prototype.findWebPage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.ManagerRPC/FindWebPage',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_FindWebPage,
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
proto.ding4.ManagerRPCPromiseClient.prototype.findWebPage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.ManagerRPC/FindWebPage',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_FindWebPage);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.WebItem,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_ManagerRPC_CreateWebItem = new grpc.web.MethodDescriptor(
  '/ding4.ManagerRPC/CreateWebItem',
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
const methodInfo_ManagerRPC_CreateWebItem = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.ManagerRPCClient.prototype.createWebItem =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.ManagerRPC/CreateWebItem',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_CreateWebItem,
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
proto.ding4.ManagerRPCPromiseClient.prototype.createWebItem =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.ManagerRPC/CreateWebItem',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_CreateWebItem);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.WebItem,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_ManagerRPC_UpdateWebItem = new grpc.web.MethodDescriptor(
  '/ding4.ManagerRPC/UpdateWebItem',
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
const methodInfo_ManagerRPC_UpdateWebItem = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.ManagerRPCClient.prototype.updateWebItem =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.ManagerRPC/UpdateWebItem',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_UpdateWebItem,
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
proto.ding4.ManagerRPCPromiseClient.prototype.updateWebItem =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.ManagerRPC/UpdateWebItem',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_UpdateWebItem);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.WebItem,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_ManagerRPC_DeleteWebItem = new grpc.web.MethodDescriptor(
  '/ding4.ManagerRPC/DeleteWebItem',
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
const methodInfo_ManagerRPC_DeleteWebItem = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.ManagerRPCClient.prototype.deleteWebItem =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.ManagerRPC/DeleteWebItem',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_DeleteWebItem,
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
proto.ding4.ManagerRPCPromiseClient.prototype.deleteWebItem =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.ManagerRPC/DeleteWebItem',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_DeleteWebItem);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_ManagerRPC_FindWebItem = new grpc.web.MethodDescriptor(
  '/ding4.ManagerRPC/FindWebItem',
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
const methodInfo_ManagerRPC_FindWebItem = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.ManagerRPCClient.prototype.findWebItem =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.ManagerRPC/FindWebItem',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_FindWebItem,
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
proto.ding4.ManagerRPCPromiseClient.prototype.findWebItem =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.ManagerRPC/FindWebItem',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_FindWebItem);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.WebBase,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_ManagerRPC_UpdateWebBase = new grpc.web.MethodDescriptor(
  '/ding4.ManagerRPC/UpdateWebBase',
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
const methodInfo_ManagerRPC_UpdateWebBase = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.ManagerRPCClient.prototype.updateWebBase =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.ManagerRPC/UpdateWebBase',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_UpdateWebBase,
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
proto.ding4.ManagerRPCPromiseClient.prototype.updateWebBase =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.ManagerRPC/UpdateWebBase',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_UpdateWebBase);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_ManagerRPC_FindWebBase = new grpc.web.MethodDescriptor(
  '/ding4.ManagerRPC/FindWebBase',
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
const methodInfo_ManagerRPC_FindWebBase = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.ManagerRPCClient.prototype.findWebBase =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.ManagerRPC/FindWebBase',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_FindWebBase,
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
proto.ding4.ManagerRPCPromiseClient.prototype.findWebBase =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.ManagerRPC/FindWebBase',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_FindWebBase);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Template,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_ManagerRPC_CreateTemplate = new grpc.web.MethodDescriptor(
  '/ding4.ManagerRPC/CreateTemplate',
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
const methodInfo_ManagerRPC_CreateTemplate = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.ManagerRPCClient.prototype.createTemplate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.ManagerRPC/CreateTemplate',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_CreateTemplate,
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
proto.ding4.ManagerRPCPromiseClient.prototype.createTemplate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.ManagerRPC/CreateTemplate',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_CreateTemplate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Template,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_ManagerRPC_UpdateTemplate = new grpc.web.MethodDescriptor(
  '/ding4.ManagerRPC/UpdateTemplate',
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
const methodInfo_ManagerRPC_UpdateTemplate = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.ManagerRPCClient.prototype.updateTemplate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.ManagerRPC/UpdateTemplate',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_UpdateTemplate,
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
proto.ding4.ManagerRPCPromiseClient.prototype.updateTemplate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.ManagerRPC/UpdateTemplate',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_UpdateTemplate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_ManagerRPC_FindTemplate = new grpc.web.MethodDescriptor(
  '/ding4.ManagerRPC/FindTemplate',
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
const methodInfo_ManagerRPC_FindTemplate = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.ManagerRPCClient.prototype.findTemplate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.ManagerRPC/FindTemplate',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_FindTemplate,
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
proto.ding4.ManagerRPCPromiseClient.prototype.findTemplate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.ManagerRPC/FindTemplate',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_FindTemplate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Message,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_ManagerRPC_CreateEDM = new grpc.web.MethodDescriptor(
  '/ding4.ManagerRPC/CreateEDM',
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
const methodInfo_ManagerRPC_CreateEDM = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.ManagerRPCClient.prototype.createEDM =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.ManagerRPC/CreateEDM',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_CreateEDM,
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
proto.ding4.ManagerRPCPromiseClient.prototype.createEDM =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.ManagerRPC/CreateEDM',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_CreateEDM);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Message,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_ManagerRPC_CancelEDM = new grpc.web.MethodDescriptor(
  '/ding4.ManagerRPC/CancelEDM',
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
const methodInfo_ManagerRPC_CancelEDM = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.ManagerRPCClient.prototype.cancelEDM =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.ManagerRPC/CancelEDM',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_CancelEDM,
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
proto.ding4.ManagerRPCPromiseClient.prototype.cancelEDM =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.ManagerRPC/CancelEDM',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_CancelEDM);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_ManagerRPC_FindEDM = new grpc.web.MethodDescriptor(
  '/ding4.ManagerRPC/FindEDM',
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
const methodInfo_ManagerRPC_FindEDM = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.ManagerRPCClient.prototype.findEDM =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.ManagerRPC/FindEDM',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_FindEDM,
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
proto.ding4.ManagerRPCPromiseClient.prototype.findEDM =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.ManagerRPC/FindEDM',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_FindEDM);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Message,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_ManagerRPC_CreateSMS = new grpc.web.MethodDescriptor(
  '/ding4.ManagerRPC/CreateSMS',
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
const methodInfo_ManagerRPC_CreateSMS = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.ManagerRPCClient.prototype.createSMS =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.ManagerRPC/CreateSMS',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_CreateSMS,
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
proto.ding4.ManagerRPCPromiseClient.prototype.createSMS =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.ManagerRPC/CreateSMS',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_CreateSMS);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Message,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_ManagerRPC_CancelSMS = new grpc.web.MethodDescriptor(
  '/ding4.ManagerRPC/CancelSMS',
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
const methodInfo_ManagerRPC_CancelSMS = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.ManagerRPCClient.prototype.cancelSMS =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.ManagerRPC/CancelSMS',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_CancelSMS,
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
proto.ding4.ManagerRPCPromiseClient.prototype.cancelSMS =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.ManagerRPC/CancelSMS',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_CancelSMS);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ding4.Query,
 *   !proto.ding4.Response>}
 */
const methodDescriptor_ManagerRPC_FindSMS = new grpc.web.MethodDescriptor(
  '/ding4.ManagerRPC/FindSMS',
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
const methodInfo_ManagerRPC_FindSMS = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ding4.ManagerRPCClient.prototype.findSMS =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ding4.ManagerRPC/FindSMS',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_FindSMS,
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
proto.ding4.ManagerRPCPromiseClient.prototype.findSMS =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ding4.ManagerRPC/FindSMS',
      request,
      metadata || {},
      methodDescriptor_ManagerRPC_FindSMS);
};


module.exports = proto.ding4;

