// source: customer-d.proto
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

var sql_pb = require('./sql_pb.js');
goog.object.extend(proto, sql_pb);
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
goog.object.extend(proto, google_protobuf_struct_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.ding4.CustomerD', null, global);
goog.exportSymbol('proto.ding4.CustomerLevel', null, global);
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
proto.ding4.CustomerD = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ding4.CustomerD.repeatedFields_, null);
};
goog.inherits(proto.ding4.CustomerD, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ding4.CustomerD.displayName = 'proto.ding4.CustomerD';
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
proto.ding4.CustomerLevel = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ding4.CustomerLevel.repeatedFields_, null);
};
goog.inherits(proto.ding4.CustomerLevel, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ding4.CustomerLevel.displayName = 'proto.ding4.CustomerLevel';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ding4.CustomerD.repeatedFields_ = [73,74];



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
proto.ding4.CustomerD.prototype.toObject = function(opt_includeInstance) {
  return proto.ding4.CustomerD.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ding4.CustomerD} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ding4.CustomerD.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    store: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    customerId: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    levelId: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    receiveNews: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    name: jspb.Message.getFieldWithDefault(msg, 6, ""),
    phone: jspb.Message.getFieldWithDefault(msg, 7, ""),
    email: jspb.Message.getFieldWithDefault(msg, 8, ""),
    password: jspb.Message.getFieldWithDefault(msg, 9, ""),
    status: jspb.Message.getFieldWithDefault(msg, 10, ""),
    operator: jspb.Message.getFieldWithDefault(msg, 70, ""),
    createAt: (f = msg.getCreateAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    updateAt: (f = msg.getUpdateAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    colsList: (f = jspb.Message.getRepeatedField(msg, 73)) == null ? undefined : f,
    conditionList: jspb.Message.toObjectList(msg.getConditionList(),
    sql_pb.Condition.toObject, includeInstance),
    self: (f = msg.getSelf()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f)
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
 * @return {!proto.ding4.CustomerD}
 */
proto.ding4.CustomerD.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ding4.CustomerD;
  return proto.ding4.CustomerD.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ding4.CustomerD} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ding4.CustomerD}
 */
proto.ding4.CustomerD.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setStore(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCustomerId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLevelId(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setReceiveNews(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhone(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    case 70:
      var value = /** @type {string} */ (reader.readString());
      msg.setOperator(value);
      break;
    case 71:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreateAt(value);
      break;
    case 72:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdateAt(value);
      break;
    case 73:
      var value = /** @type {string} */ (reader.readString());
      msg.addCols(value);
      break;
    case 74:
      var value = new sql_pb.Condition;
      reader.readMessage(value,sql_pb.Condition.deserializeBinaryFromReader);
      msg.addCondition(value);
      break;
    case 75:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setSelf(value);
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
proto.ding4.CustomerD.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ding4.CustomerD.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ding4.CustomerD} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ding4.CustomerD.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getStore();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getCustomerId();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getLevelId();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getReceiveNews();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getPhone();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getOperator();
  if (f.length > 0) {
    writer.writeString(
      70,
      f
    );
  }
  f = message.getCreateAt();
  if (f != null) {
    writer.writeMessage(
      71,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUpdateAt();
  if (f != null) {
    writer.writeMessage(
      72,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getColsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      73,
      f
    );
  }
  f = message.getConditionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      74,
      f,
      sql_pb.Condition.serializeBinaryToWriter
    );
  }
  f = message.getSelf();
  if (f != null) {
    writer.writeMessage(
      75,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
};


/**
 * optional double id = 1;
 * @return {number}
 */
proto.ding4.CustomerD.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ding4.CustomerD} returns this
 */
proto.ding4.CustomerD.prototype.setId = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional double store = 2;
 * @return {number}
 */
proto.ding4.CustomerD.prototype.getStore = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ding4.CustomerD} returns this
 */
proto.ding4.CustomerD.prototype.setStore = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional double customer_id = 3;
 * @return {number}
 */
proto.ding4.CustomerD.prototype.getCustomerId = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ding4.CustomerD} returns this
 */
proto.ding4.CustomerD.prototype.setCustomerId = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional double level_id = 4;
 * @return {number}
 */
proto.ding4.CustomerD.prototype.getLevelId = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ding4.CustomerD} returns this
 */
proto.ding4.CustomerD.prototype.setLevelId = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional bool receive_news = 5;
 * @return {boolean}
 */
proto.ding4.CustomerD.prototype.getReceiveNews = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ding4.CustomerD} returns this
 */
proto.ding4.CustomerD.prototype.setReceiveNews = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional string name = 6;
 * @return {string}
 */
proto.ding4.CustomerD.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.CustomerD} returns this
 */
proto.ding4.CustomerD.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string phone = 7;
 * @return {string}
 */
proto.ding4.CustomerD.prototype.getPhone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.CustomerD} returns this
 */
proto.ding4.CustomerD.prototype.setPhone = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string email = 8;
 * @return {string}
 */
proto.ding4.CustomerD.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.CustomerD} returns this
 */
proto.ding4.CustomerD.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string password = 9;
 * @return {string}
 */
proto.ding4.CustomerD.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.CustomerD} returns this
 */
proto.ding4.CustomerD.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string status = 10;
 * @return {string}
 */
proto.ding4.CustomerD.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.CustomerD} returns this
 */
proto.ding4.CustomerD.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string operator = 70;
 * @return {string}
 */
proto.ding4.CustomerD.prototype.getOperator = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 70, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.CustomerD} returns this
 */
proto.ding4.CustomerD.prototype.setOperator = function(value) {
  return jspb.Message.setProto3StringField(this, 70, value);
};


/**
 * optional google.protobuf.Timestamp create_at = 71;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ding4.CustomerD.prototype.getCreateAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 71));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ding4.CustomerD} returns this
*/
proto.ding4.CustomerD.prototype.setCreateAt = function(value) {
  return jspb.Message.setWrapperField(this, 71, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ding4.CustomerD} returns this
 */
proto.ding4.CustomerD.prototype.clearCreateAt = function() {
  return this.setCreateAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ding4.CustomerD.prototype.hasCreateAt = function() {
  return jspb.Message.getField(this, 71) != null;
};


/**
 * optional google.protobuf.Timestamp update_at = 72;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ding4.CustomerD.prototype.getUpdateAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 72));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ding4.CustomerD} returns this
*/
proto.ding4.CustomerD.prototype.setUpdateAt = function(value) {
  return jspb.Message.setWrapperField(this, 72, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ding4.CustomerD} returns this
 */
proto.ding4.CustomerD.prototype.clearUpdateAt = function() {
  return this.setUpdateAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ding4.CustomerD.prototype.hasUpdateAt = function() {
  return jspb.Message.getField(this, 72) != null;
};


/**
 * repeated string cols = 73;
 * @return {!Array<string>}
 */
proto.ding4.CustomerD.prototype.getColsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 73));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ding4.CustomerD} returns this
 */
proto.ding4.CustomerD.prototype.setColsList = function(value) {
  return jspb.Message.setField(this, 73, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ding4.CustomerD} returns this
 */
proto.ding4.CustomerD.prototype.addCols = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 73, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ding4.CustomerD} returns this
 */
proto.ding4.CustomerD.prototype.clearColsList = function() {
  return this.setColsList([]);
};


/**
 * repeated Condition condition = 74;
 * @return {!Array<!proto.ding4.Condition>}
 */
proto.ding4.CustomerD.prototype.getConditionList = function() {
  return /** @type{!Array<!proto.ding4.Condition>} */ (
    jspb.Message.getRepeatedWrapperField(this, sql_pb.Condition, 74));
};


/**
 * @param {!Array<!proto.ding4.Condition>} value
 * @return {!proto.ding4.CustomerD} returns this
*/
proto.ding4.CustomerD.prototype.setConditionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 74, value);
};


/**
 * @param {!proto.ding4.Condition=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ding4.Condition}
 */
proto.ding4.CustomerD.prototype.addCondition = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 74, opt_value, proto.ding4.Condition, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ding4.CustomerD} returns this
 */
proto.ding4.CustomerD.prototype.clearConditionList = function() {
  return this.setConditionList([]);
};


/**
 * optional google.protobuf.Struct self = 75;
 * @return {?proto.google.protobuf.Struct}
 */
proto.ding4.CustomerD.prototype.getSelf = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 75));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.ding4.CustomerD} returns this
*/
proto.ding4.CustomerD.prototype.setSelf = function(value) {
  return jspb.Message.setWrapperField(this, 75, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ding4.CustomerD} returns this
 */
proto.ding4.CustomerD.prototype.clearSelf = function() {
  return this.setSelf(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ding4.CustomerD.prototype.hasSelf = function() {
  return jspb.Message.getField(this, 75) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ding4.CustomerLevel.repeatedFields_ = [73,74];



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
proto.ding4.CustomerLevel.prototype.toObject = function(opt_includeInstance) {
  return proto.ding4.CustomerLevel.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ding4.CustomerLevel} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ding4.CustomerLevel.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    store: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    status: jspb.Message.getFieldWithDefault(msg, 3, 0),
    name: jspb.Message.getFieldWithDefault(msg, 4, ""),
    payAmount: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    payTimes: jspb.Message.getFieldWithDefault(msg, 6, 0),
    auto: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    priority: jspb.Message.getFieldWithDefault(msg, 8, 0),
    operator: jspb.Message.getFieldWithDefault(msg, 70, ""),
    createAt: (f = msg.getCreateAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    updateAt: (f = msg.getUpdateAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    colsList: (f = jspb.Message.getRepeatedField(msg, 73)) == null ? undefined : f,
    conditionList: jspb.Message.toObjectList(msg.getConditionList(),
    sql_pb.Condition.toObject, includeInstance),
    self: (f = msg.getSelf()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f)
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
 * @return {!proto.ding4.CustomerLevel}
 */
proto.ding4.CustomerLevel.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ding4.CustomerLevel;
  return proto.ding4.CustomerLevel.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ding4.CustomerLevel} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ding4.CustomerLevel}
 */
proto.ding4.CustomerLevel.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setStore(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStatus(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPayAmount(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPayTimes(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAuto(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPriority(value);
      break;
    case 70:
      var value = /** @type {string} */ (reader.readString());
      msg.setOperator(value);
      break;
    case 71:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreateAt(value);
      break;
    case 72:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdateAt(value);
      break;
    case 73:
      var value = /** @type {string} */ (reader.readString());
      msg.addCols(value);
      break;
    case 74:
      var value = new sql_pb.Condition;
      reader.readMessage(value,sql_pb.Condition.deserializeBinaryFromReader);
      msg.addCondition(value);
      break;
    case 75:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setSelf(value);
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
proto.ding4.CustomerLevel.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ding4.CustomerLevel.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ding4.CustomerLevel} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ding4.CustomerLevel.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getStore();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getPayAmount();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getPayTimes();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getAuto();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getPriority();
  if (f !== 0) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = message.getOperator();
  if (f.length > 0) {
    writer.writeString(
      70,
      f
    );
  }
  f = message.getCreateAt();
  if (f != null) {
    writer.writeMessage(
      71,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUpdateAt();
  if (f != null) {
    writer.writeMessage(
      72,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getColsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      73,
      f
    );
  }
  f = message.getConditionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      74,
      f,
      sql_pb.Condition.serializeBinaryToWriter
    );
  }
  f = message.getSelf();
  if (f != null) {
    writer.writeMessage(
      75,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
};


/**
 * optional double id = 1;
 * @return {number}
 */
proto.ding4.CustomerLevel.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ding4.CustomerLevel} returns this
 */
proto.ding4.CustomerLevel.prototype.setId = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional double store = 2;
 * @return {number}
 */
proto.ding4.CustomerLevel.prototype.getStore = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ding4.CustomerLevel} returns this
 */
proto.ding4.CustomerLevel.prototype.setStore = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional int32 status = 3;
 * @return {number}
 */
proto.ding4.CustomerLevel.prototype.getStatus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.ding4.CustomerLevel} returns this
 */
proto.ding4.CustomerLevel.prototype.setStatus = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string name = 4;
 * @return {string}
 */
proto.ding4.CustomerLevel.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.CustomerLevel} returns this
 */
proto.ding4.CustomerLevel.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional double pay_amount = 5;
 * @return {number}
 */
proto.ding4.CustomerLevel.prototype.getPayAmount = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ding4.CustomerLevel} returns this
 */
proto.ding4.CustomerLevel.prototype.setPayAmount = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional int32 pay_times = 6;
 * @return {number}
 */
proto.ding4.CustomerLevel.prototype.getPayTimes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.ding4.CustomerLevel} returns this
 */
proto.ding4.CustomerLevel.prototype.setPayTimes = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional bool auto = 7;
 * @return {boolean}
 */
proto.ding4.CustomerLevel.prototype.getAuto = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ding4.CustomerLevel} returns this
 */
proto.ding4.CustomerLevel.prototype.setAuto = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional int32 priority = 8;
 * @return {number}
 */
proto.ding4.CustomerLevel.prototype.getPriority = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.ding4.CustomerLevel} returns this
 */
proto.ding4.CustomerLevel.prototype.setPriority = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional string operator = 70;
 * @return {string}
 */
proto.ding4.CustomerLevel.prototype.getOperator = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 70, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.CustomerLevel} returns this
 */
proto.ding4.CustomerLevel.prototype.setOperator = function(value) {
  return jspb.Message.setProto3StringField(this, 70, value);
};


/**
 * optional google.protobuf.Timestamp create_at = 71;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ding4.CustomerLevel.prototype.getCreateAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 71));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ding4.CustomerLevel} returns this
*/
proto.ding4.CustomerLevel.prototype.setCreateAt = function(value) {
  return jspb.Message.setWrapperField(this, 71, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ding4.CustomerLevel} returns this
 */
proto.ding4.CustomerLevel.prototype.clearCreateAt = function() {
  return this.setCreateAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ding4.CustomerLevel.prototype.hasCreateAt = function() {
  return jspb.Message.getField(this, 71) != null;
};


/**
 * optional google.protobuf.Timestamp update_at = 72;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ding4.CustomerLevel.prototype.getUpdateAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 72));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ding4.CustomerLevel} returns this
*/
proto.ding4.CustomerLevel.prototype.setUpdateAt = function(value) {
  return jspb.Message.setWrapperField(this, 72, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ding4.CustomerLevel} returns this
 */
proto.ding4.CustomerLevel.prototype.clearUpdateAt = function() {
  return this.setUpdateAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ding4.CustomerLevel.prototype.hasUpdateAt = function() {
  return jspb.Message.getField(this, 72) != null;
};


/**
 * repeated string cols = 73;
 * @return {!Array<string>}
 */
proto.ding4.CustomerLevel.prototype.getColsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 73));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ding4.CustomerLevel} returns this
 */
proto.ding4.CustomerLevel.prototype.setColsList = function(value) {
  return jspb.Message.setField(this, 73, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ding4.CustomerLevel} returns this
 */
proto.ding4.CustomerLevel.prototype.addCols = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 73, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ding4.CustomerLevel} returns this
 */
proto.ding4.CustomerLevel.prototype.clearColsList = function() {
  return this.setColsList([]);
};


/**
 * repeated Condition condition = 74;
 * @return {!Array<!proto.ding4.Condition>}
 */
proto.ding4.CustomerLevel.prototype.getConditionList = function() {
  return /** @type{!Array<!proto.ding4.Condition>} */ (
    jspb.Message.getRepeatedWrapperField(this, sql_pb.Condition, 74));
};


/**
 * @param {!Array<!proto.ding4.Condition>} value
 * @return {!proto.ding4.CustomerLevel} returns this
*/
proto.ding4.CustomerLevel.prototype.setConditionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 74, value);
};


/**
 * @param {!proto.ding4.Condition=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ding4.Condition}
 */
proto.ding4.CustomerLevel.prototype.addCondition = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 74, opt_value, proto.ding4.Condition, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ding4.CustomerLevel} returns this
 */
proto.ding4.CustomerLevel.prototype.clearConditionList = function() {
  return this.setConditionList([]);
};


/**
 * optional google.protobuf.Struct self = 75;
 * @return {?proto.google.protobuf.Struct}
 */
proto.ding4.CustomerLevel.prototype.getSelf = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 75));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.ding4.CustomerLevel} returns this
*/
proto.ding4.CustomerLevel.prototype.setSelf = function(value) {
  return jspb.Message.setWrapperField(this, 75, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ding4.CustomerLevel} returns this
 */
proto.ding4.CustomerLevel.prototype.clearSelf = function() {
  return this.setSelf(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ding4.CustomerLevel.prototype.hasSelf = function() {
  return jspb.Message.getField(this, 75) != null;
};


goog.object.extend(exports, proto.ding4);
