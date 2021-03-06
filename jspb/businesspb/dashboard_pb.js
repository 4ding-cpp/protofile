// source: dashboard.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var browse_pb = require('./browse_pb.js');
goog.object.extend(proto, browse_pb);
goog.exportSymbol('proto.ding4.Businessboard', null, global);
goog.exportSymbol('proto.ding4.Rank', null, global);
goog.exportSymbol('proto.ding4.Rankboard', null, global);
goog.exportSymbol('proto.ding4.Storeboard', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ding4.Businessboard = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ding4.Businessboard.repeatedFields_, null);
};
goog.inherits(proto.ding4.Businessboard, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ding4.Businessboard.displayName = 'proto.ding4.Businessboard';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ding4.Storeboard = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ding4.Storeboard.repeatedFields_, null);
};
goog.inherits(proto.ding4.Storeboard, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ding4.Storeboard.displayName = 'proto.ding4.Storeboard';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ding4.Rankboard = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ding4.Rankboard, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ding4.Rankboard.displayName = 'proto.ding4.Rankboard';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ding4.Rank = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ding4.Rank.repeatedFields_, null);
};
goog.inherits(proto.ding4.Rank, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ding4.Rank.displayName = 'proto.ding4.Rank';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ding4.Businessboard.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ding4.Businessboard.prototype.toObject = function(opt_includeInstance) {
  return proto.ding4.Businessboard.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ding4.Businessboard} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ding4.Businessboard.toObject = function(includeInstance, msg) {
  var f, obj = {
    dashboard: (f = msg.getDashboard()) && proto.ding4.Storeboard.toObject(includeInstance, f),
    storesList: jspb.Message.toObjectList(msg.getStoresList(),
    proto.ding4.Storeboard.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ding4.Businessboard}
 */
proto.ding4.Businessboard.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ding4.Businessboard;
  return proto.ding4.Businessboard.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ding4.Businessboard} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ding4.Businessboard}
 */
proto.ding4.Businessboard.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ding4.Storeboard;
      reader.readMessage(value,proto.ding4.Storeboard.deserializeBinaryFromReader);
      msg.setDashboard(value);
      break;
    case 2:
      var value = new proto.ding4.Storeboard;
      reader.readMessage(value,proto.ding4.Storeboard.deserializeBinaryFromReader);
      msg.addStores(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ding4.Businessboard.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ding4.Businessboard.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ding4.Businessboard} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ding4.Businessboard.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDashboard();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ding4.Storeboard.serializeBinaryToWriter
    );
  }
  f = message.getStoresList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.ding4.Storeboard.serializeBinaryToWriter
    );
  }
};


/**
 * optional Storeboard dashboard = 1;
 * @return {?proto.ding4.Storeboard}
 */
proto.ding4.Businessboard.prototype.getDashboard = function() {
  return /** @type{?proto.ding4.Storeboard} */ (
    jspb.Message.getWrapperField(this, proto.ding4.Storeboard, 1));
};


/**
 * @param {?proto.ding4.Storeboard|undefined} value
 * @return {!proto.ding4.Businessboard} returns this
*/
proto.ding4.Businessboard.prototype.setDashboard = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ding4.Businessboard} returns this
 */
proto.ding4.Businessboard.prototype.clearDashboard = function() {
  return this.setDashboard(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ding4.Businessboard.prototype.hasDashboard = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Storeboard stores = 2;
 * @return {!Array<!proto.ding4.Storeboard>}
 */
proto.ding4.Businessboard.prototype.getStoresList = function() {
  return /** @type{!Array<!proto.ding4.Storeboard>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ding4.Storeboard, 2));
};


/**
 * @param {!Array<!proto.ding4.Storeboard>} value
 * @return {!proto.ding4.Businessboard} returns this
*/
proto.ding4.Businessboard.prototype.setStoresList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.ding4.Storeboard=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ding4.Storeboard}
 */
proto.ding4.Businessboard.prototype.addStores = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.ding4.Storeboard, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ding4.Businessboard} returns this
 */
proto.ding4.Businessboard.prototype.clearStoresList = function() {
  return this.setStoresList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ding4.Storeboard.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ding4.Storeboard.prototype.toObject = function(opt_includeInstance) {
  return proto.ding4.Storeboard.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ding4.Storeboard} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ding4.Storeboard.toObject = function(includeInstance, msg) {
  var f, obj = {
    total: (f = msg.getTotal()) && browse_pb.Browse.toObject(includeInstance, f),
    recentList: jspb.Message.toObjectList(msg.getRecentList(),
    browse_pb.Browse.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ding4.Storeboard}
 */
proto.ding4.Storeboard.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ding4.Storeboard;
  return proto.ding4.Storeboard.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ding4.Storeboard} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ding4.Storeboard}
 */
proto.ding4.Storeboard.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new browse_pb.Browse;
      reader.readMessage(value,browse_pb.Browse.deserializeBinaryFromReader);
      msg.setTotal(value);
      break;
    case 2:
      var value = new browse_pb.Browse;
      reader.readMessage(value,browse_pb.Browse.deserializeBinaryFromReader);
      msg.addRecent(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ding4.Storeboard.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ding4.Storeboard.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ding4.Storeboard} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ding4.Storeboard.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTotal();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      browse_pb.Browse.serializeBinaryToWriter
    );
  }
  f = message.getRecentList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      browse_pb.Browse.serializeBinaryToWriter
    );
  }
};


/**
 * optional Browse total = 1;
 * @return {?proto.ding4.Browse}
 */
proto.ding4.Storeboard.prototype.getTotal = function() {
  return /** @type{?proto.ding4.Browse} */ (
    jspb.Message.getWrapperField(this, browse_pb.Browse, 1));
};


/**
 * @param {?proto.ding4.Browse|undefined} value
 * @return {!proto.ding4.Storeboard} returns this
*/
proto.ding4.Storeboard.prototype.setTotal = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ding4.Storeboard} returns this
 */
proto.ding4.Storeboard.prototype.clearTotal = function() {
  return this.setTotal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ding4.Storeboard.prototype.hasTotal = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Browse recent = 2;
 * @return {!Array<!proto.ding4.Browse>}
 */
proto.ding4.Storeboard.prototype.getRecentList = function() {
  return /** @type{!Array<!proto.ding4.Browse>} */ (
    jspb.Message.getRepeatedWrapperField(this, browse_pb.Browse, 2));
};


/**
 * @param {!Array<!proto.ding4.Browse>} value
 * @return {!proto.ding4.Storeboard} returns this
*/
proto.ding4.Storeboard.prototype.setRecentList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.ding4.Browse=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ding4.Browse}
 */
proto.ding4.Storeboard.prototype.addRecent = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.ding4.Browse, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ding4.Storeboard} returns this
 */
proto.ding4.Storeboard.prototype.clearRecentList = function() {
  return this.setRecentList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ding4.Rankboard.prototype.toObject = function(opt_includeInstance) {
  return proto.ding4.Rankboard.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ding4.Rankboard} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ding4.Rankboard.toObject = function(includeInstance, msg) {
  var f, obj = {
    today: (f = msg.getToday()) && proto.ding4.Rank.toObject(includeInstance, f),
    week: (f = msg.getWeek()) && proto.ding4.Rank.toObject(includeInstance, f),
    month: (f = msg.getMonth()) && proto.ding4.Rank.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ding4.Rankboard}
 */
proto.ding4.Rankboard.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ding4.Rankboard;
  return proto.ding4.Rankboard.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ding4.Rankboard} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ding4.Rankboard}
 */
proto.ding4.Rankboard.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ding4.Rank;
      reader.readMessage(value,proto.ding4.Rank.deserializeBinaryFromReader);
      msg.setToday(value);
      break;
    case 2:
      var value = new proto.ding4.Rank;
      reader.readMessage(value,proto.ding4.Rank.deserializeBinaryFromReader);
      msg.setWeek(value);
      break;
    case 3:
      var value = new proto.ding4.Rank;
      reader.readMessage(value,proto.ding4.Rank.deserializeBinaryFromReader);
      msg.setMonth(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ding4.Rankboard.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ding4.Rankboard.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ding4.Rankboard} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ding4.Rankboard.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getToday();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ding4.Rank.serializeBinaryToWriter
    );
  }
  f = message.getWeek();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ding4.Rank.serializeBinaryToWriter
    );
  }
  f = message.getMonth();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.ding4.Rank.serializeBinaryToWriter
    );
  }
};


/**
 * optional Rank today = 1;
 * @return {?proto.ding4.Rank}
 */
proto.ding4.Rankboard.prototype.getToday = function() {
  return /** @type{?proto.ding4.Rank} */ (
    jspb.Message.getWrapperField(this, proto.ding4.Rank, 1));
};


/**
 * @param {?proto.ding4.Rank|undefined} value
 * @return {!proto.ding4.Rankboard} returns this
*/
proto.ding4.Rankboard.prototype.setToday = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ding4.Rankboard} returns this
 */
proto.ding4.Rankboard.prototype.clearToday = function() {
  return this.setToday(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ding4.Rankboard.prototype.hasToday = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Rank week = 2;
 * @return {?proto.ding4.Rank}
 */
proto.ding4.Rankboard.prototype.getWeek = function() {
  return /** @type{?proto.ding4.Rank} */ (
    jspb.Message.getWrapperField(this, proto.ding4.Rank, 2));
};


/**
 * @param {?proto.ding4.Rank|undefined} value
 * @return {!proto.ding4.Rankboard} returns this
*/
proto.ding4.Rankboard.prototype.setWeek = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ding4.Rankboard} returns this
 */
proto.ding4.Rankboard.prototype.clearWeek = function() {
  return this.setWeek(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ding4.Rankboard.prototype.hasWeek = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Rank month = 3;
 * @return {?proto.ding4.Rank}
 */
proto.ding4.Rankboard.prototype.getMonth = function() {
  return /** @type{?proto.ding4.Rank} */ (
    jspb.Message.getWrapperField(this, proto.ding4.Rank, 3));
};


/**
 * @param {?proto.ding4.Rank|undefined} value
 * @return {!proto.ding4.Rankboard} returns this
*/
proto.ding4.Rankboard.prototype.setMonth = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ding4.Rankboard} returns this
 */
proto.ding4.Rankboard.prototype.clearMonth = function() {
  return this.setMonth(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ding4.Rankboard.prototype.hasMonth = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ding4.Rank.repeatedFields_ = [1,2,3,4,5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ding4.Rank.prototype.toObject = function(opt_includeInstance) {
  return proto.ding4.Rank.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ding4.Rank} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ding4.Rank.toObject = function(includeInstance, msg) {
  var f, obj = {
    browseList: jspb.Message.toObjectList(msg.getBrowseList(),
    browse_pb.Browse.toObject, includeInstance),
    ordersList: jspb.Message.toObjectList(msg.getOrdersList(),
    browse_pb.Browse.toObject, includeInstance),
    amountList: jspb.Message.toObjectList(msg.getAmountList(),
    browse_pb.Browse.toObject, includeInstance),
    priceList: jspb.Message.toObjectList(msg.getPriceList(),
    browse_pb.Browse.toObject, includeInstance),
    freightList: jspb.Message.toObjectList(msg.getFreightList(),
    browse_pb.Browse.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ding4.Rank}
 */
proto.ding4.Rank.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ding4.Rank;
  return proto.ding4.Rank.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ding4.Rank} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ding4.Rank}
 */
proto.ding4.Rank.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new browse_pb.Browse;
      reader.readMessage(value,browse_pb.Browse.deserializeBinaryFromReader);
      msg.addBrowse(value);
      break;
    case 2:
      var value = new browse_pb.Browse;
      reader.readMessage(value,browse_pb.Browse.deserializeBinaryFromReader);
      msg.addOrders(value);
      break;
    case 3:
      var value = new browse_pb.Browse;
      reader.readMessage(value,browse_pb.Browse.deserializeBinaryFromReader);
      msg.addAmount(value);
      break;
    case 4:
      var value = new browse_pb.Browse;
      reader.readMessage(value,browse_pb.Browse.deserializeBinaryFromReader);
      msg.addPrice(value);
      break;
    case 5:
      var value = new browse_pb.Browse;
      reader.readMessage(value,browse_pb.Browse.deserializeBinaryFromReader);
      msg.addFreight(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ding4.Rank.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ding4.Rank.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ding4.Rank} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ding4.Rank.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBrowseList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      browse_pb.Browse.serializeBinaryToWriter
    );
  }
  f = message.getOrdersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      browse_pb.Browse.serializeBinaryToWriter
    );
  }
  f = message.getAmountList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      browse_pb.Browse.serializeBinaryToWriter
    );
  }
  f = message.getPriceList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      browse_pb.Browse.serializeBinaryToWriter
    );
  }
  f = message.getFreightList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      browse_pb.Browse.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Browse browse = 1;
 * @return {!Array<!proto.ding4.Browse>}
 */
proto.ding4.Rank.prototype.getBrowseList = function() {
  return /** @type{!Array<!proto.ding4.Browse>} */ (
    jspb.Message.getRepeatedWrapperField(this, browse_pb.Browse, 1));
};


/**
 * @param {!Array<!proto.ding4.Browse>} value
 * @return {!proto.ding4.Rank} returns this
*/
proto.ding4.Rank.prototype.setBrowseList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.ding4.Browse=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ding4.Browse}
 */
proto.ding4.Rank.prototype.addBrowse = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ding4.Browse, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ding4.Rank} returns this
 */
proto.ding4.Rank.prototype.clearBrowseList = function() {
  return this.setBrowseList([]);
};


/**
 * repeated Browse orders = 2;
 * @return {!Array<!proto.ding4.Browse>}
 */
proto.ding4.Rank.prototype.getOrdersList = function() {
  return /** @type{!Array<!proto.ding4.Browse>} */ (
    jspb.Message.getRepeatedWrapperField(this, browse_pb.Browse, 2));
};


/**
 * @param {!Array<!proto.ding4.Browse>} value
 * @return {!proto.ding4.Rank} returns this
*/
proto.ding4.Rank.prototype.setOrdersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.ding4.Browse=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ding4.Browse}
 */
proto.ding4.Rank.prototype.addOrders = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.ding4.Browse, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ding4.Rank} returns this
 */
proto.ding4.Rank.prototype.clearOrdersList = function() {
  return this.setOrdersList([]);
};


/**
 * repeated Browse amount = 3;
 * @return {!Array<!proto.ding4.Browse>}
 */
proto.ding4.Rank.prototype.getAmountList = function() {
  return /** @type{!Array<!proto.ding4.Browse>} */ (
    jspb.Message.getRepeatedWrapperField(this, browse_pb.Browse, 3));
};


/**
 * @param {!Array<!proto.ding4.Browse>} value
 * @return {!proto.ding4.Rank} returns this
*/
proto.ding4.Rank.prototype.setAmountList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.ding4.Browse=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ding4.Browse}
 */
proto.ding4.Rank.prototype.addAmount = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.ding4.Browse, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ding4.Rank} returns this
 */
proto.ding4.Rank.prototype.clearAmountList = function() {
  return this.setAmountList([]);
};


/**
 * repeated Browse price = 4;
 * @return {!Array<!proto.ding4.Browse>}
 */
proto.ding4.Rank.prototype.getPriceList = function() {
  return /** @type{!Array<!proto.ding4.Browse>} */ (
    jspb.Message.getRepeatedWrapperField(this, browse_pb.Browse, 4));
};


/**
 * @param {!Array<!proto.ding4.Browse>} value
 * @return {!proto.ding4.Rank} returns this
*/
proto.ding4.Rank.prototype.setPriceList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.ding4.Browse=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ding4.Browse}
 */
proto.ding4.Rank.prototype.addPrice = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.ding4.Browse, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ding4.Rank} returns this
 */
proto.ding4.Rank.prototype.clearPriceList = function() {
  return this.setPriceList([]);
};


/**
 * repeated Browse freight = 5;
 * @return {!Array<!proto.ding4.Browse>}
 */
proto.ding4.Rank.prototype.getFreightList = function() {
  return /** @type{!Array<!proto.ding4.Browse>} */ (
    jspb.Message.getRepeatedWrapperField(this, browse_pb.Browse, 5));
};


/**
 * @param {!Array<!proto.ding4.Browse>} value
 * @return {!proto.ding4.Rank} returns this
*/
proto.ding4.Rank.prototype.setFreightList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.ding4.Browse=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ding4.Browse}
 */
proto.ding4.Rank.prototype.addFreight = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.ding4.Browse, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ding4.Rank} returns this
 */
proto.ding4.Rank.prototype.clearFreightList = function() {
  return this.setFreightList([]);
};


goog.object.extend(exports, proto.ding4);
