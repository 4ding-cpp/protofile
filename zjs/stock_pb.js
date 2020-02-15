// source: stock.proto
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
goog.exportSymbol('proto.ding4.Stock', null, global);
goog.exportSymbol('proto.ding4.StockGroup', null, global);
goog.exportSymbol('proto.ding4.StockSupplier', null, global);
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
proto.ding4.Stock = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ding4.Stock.repeatedFields_, null);
};
goog.inherits(proto.ding4.Stock, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ding4.Stock.displayName = 'proto.ding4.Stock';
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
proto.ding4.StockGroup = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ding4.StockGroup.repeatedFields_, null);
};
goog.inherits(proto.ding4.StockGroup, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ding4.StockGroup.displayName = 'proto.ding4.StockGroup';
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
proto.ding4.StockSupplier = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ding4.StockSupplier, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ding4.StockSupplier.displayName = 'proto.ding4.StockSupplier';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ding4.Stock.repeatedFields_ = [73,74];



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
proto.ding4.Stock.prototype.toObject = function(opt_includeInstance) {
  return proto.ding4.Stock.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ding4.Stock} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ding4.Stock.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    orderId: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    supplierId: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    productId: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    specId: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    amount: jspb.Message.getFieldWithDefault(msg, 6, 0),
    cost: jspb.Message.getFieldWithDefault(msg, 7, 0),
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
 * @return {!proto.ding4.Stock}
 */
proto.ding4.Stock.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ding4.Stock;
  return proto.ding4.Stock.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ding4.Stock} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ding4.Stock}
 */
proto.ding4.Stock.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setOrderId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSupplierId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setProductId(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSpecId(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAmount(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCost(value);
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
proto.ding4.Stock.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ding4.Stock.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ding4.Stock} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ding4.Stock.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getOrderId();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getSupplierId();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getProductId();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getSpecId();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getAmount();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getCost();
  if (f !== 0) {
    writer.writeInt32(
      7,
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
proto.ding4.Stock.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ding4.Stock} returns this
 */
proto.ding4.Stock.prototype.setId = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional double order_id = 2;
 * @return {number}
 */
proto.ding4.Stock.prototype.getOrderId = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ding4.Stock} returns this
 */
proto.ding4.Stock.prototype.setOrderId = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional double supplier_id = 3;
 * @return {number}
 */
proto.ding4.Stock.prototype.getSupplierId = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ding4.Stock} returns this
 */
proto.ding4.Stock.prototype.setSupplierId = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional double product_id = 4;
 * @return {number}
 */
proto.ding4.Stock.prototype.getProductId = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ding4.Stock} returns this
 */
proto.ding4.Stock.prototype.setProductId = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional double spec_id = 5;
 * @return {number}
 */
proto.ding4.Stock.prototype.getSpecId = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ding4.Stock} returns this
 */
proto.ding4.Stock.prototype.setSpecId = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional int32 amount = 6;
 * @return {number}
 */
proto.ding4.Stock.prototype.getAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.ding4.Stock} returns this
 */
proto.ding4.Stock.prototype.setAmount = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int32 cost = 7;
 * @return {number}
 */
proto.ding4.Stock.prototype.getCost = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.ding4.Stock} returns this
 */
proto.ding4.Stock.prototype.setCost = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional string operator = 70;
 * @return {string}
 */
proto.ding4.Stock.prototype.getOperator = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 70, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.Stock} returns this
 */
proto.ding4.Stock.prototype.setOperator = function(value) {
  return jspb.Message.setProto3StringField(this, 70, value);
};


/**
 * optional google.protobuf.Timestamp create_at = 71;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ding4.Stock.prototype.getCreateAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 71));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ding4.Stock} returns this
*/
proto.ding4.Stock.prototype.setCreateAt = function(value) {
  return jspb.Message.setWrapperField(this, 71, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ding4.Stock} returns this
 */
proto.ding4.Stock.prototype.clearCreateAt = function() {
  return this.setCreateAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ding4.Stock.prototype.hasCreateAt = function() {
  return jspb.Message.getField(this, 71) != null;
};


/**
 * optional google.protobuf.Timestamp update_at = 72;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ding4.Stock.prototype.getUpdateAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 72));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ding4.Stock} returns this
*/
proto.ding4.Stock.prototype.setUpdateAt = function(value) {
  return jspb.Message.setWrapperField(this, 72, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ding4.Stock} returns this
 */
proto.ding4.Stock.prototype.clearUpdateAt = function() {
  return this.setUpdateAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ding4.Stock.prototype.hasUpdateAt = function() {
  return jspb.Message.getField(this, 72) != null;
};


/**
 * repeated string cols = 73;
 * @return {!Array<string>}
 */
proto.ding4.Stock.prototype.getColsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 73));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ding4.Stock} returns this
 */
proto.ding4.Stock.prototype.setColsList = function(value) {
  return jspb.Message.setField(this, 73, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ding4.Stock} returns this
 */
proto.ding4.Stock.prototype.addCols = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 73, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ding4.Stock} returns this
 */
proto.ding4.Stock.prototype.clearColsList = function() {
  return this.setColsList([]);
};


/**
 * repeated Condition condition = 74;
 * @return {!Array<!proto.ding4.Condition>}
 */
proto.ding4.Stock.prototype.getConditionList = function() {
  return /** @type{!Array<!proto.ding4.Condition>} */ (
    jspb.Message.getRepeatedWrapperField(this, sql_pb.Condition, 74));
};


/**
 * @param {!Array<!proto.ding4.Condition>} value
 * @return {!proto.ding4.Stock} returns this
*/
proto.ding4.Stock.prototype.setConditionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 74, value);
};


/**
 * @param {!proto.ding4.Condition=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ding4.Condition}
 */
proto.ding4.Stock.prototype.addCondition = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 74, opt_value, proto.ding4.Condition, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ding4.Stock} returns this
 */
proto.ding4.Stock.prototype.clearConditionList = function() {
  return this.setConditionList([]);
};


/**
 * optional google.protobuf.Struct self = 75;
 * @return {?proto.google.protobuf.Struct}
 */
proto.ding4.Stock.prototype.getSelf = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 75));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.ding4.Stock} returns this
*/
proto.ding4.Stock.prototype.setSelf = function(value) {
  return jspb.Message.setWrapperField(this, 75, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ding4.Stock} returns this
 */
proto.ding4.Stock.prototype.clearSelf = function() {
  return this.setSelf(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ding4.Stock.prototype.hasSelf = function() {
  return jspb.Message.getField(this, 75) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ding4.StockGroup.repeatedFields_ = [2];



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
proto.ding4.StockGroup.prototype.toObject = function(opt_includeInstance) {
  return proto.ding4.StockGroup.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ding4.StockGroup} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ding4.StockGroup.toObject = function(includeInstance, msg) {
  var f, obj = {
    productId: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    photoList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    nameMap: (f = msg.getNameMap()) ? f.toObject(includeInstance, undefined) : [],
    amount: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.ding4.StockGroup}
 */
proto.ding4.StockGroup.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ding4.StockGroup;
  return proto.ding4.StockGroup.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ding4.StockGroup} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ding4.StockGroup}
 */
proto.ding4.StockGroup.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setProductId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addPhoto(value);
      break;
    case 3:
      var value = msg.getNameMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAmount(value);
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
proto.ding4.StockGroup.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ding4.StockGroup.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ding4.StockGroup} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ding4.StockGroup.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProductId();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getPhotoList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getNameMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(3, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getAmount();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional double product_id = 1;
 * @return {number}
 */
proto.ding4.StockGroup.prototype.getProductId = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ding4.StockGroup} returns this
 */
proto.ding4.StockGroup.prototype.setProductId = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * repeated string photo = 2;
 * @return {!Array<string>}
 */
proto.ding4.StockGroup.prototype.getPhotoList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ding4.StockGroup} returns this
 */
proto.ding4.StockGroup.prototype.setPhotoList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ding4.StockGroup} returns this
 */
proto.ding4.StockGroup.prototype.addPhoto = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ding4.StockGroup} returns this
 */
proto.ding4.StockGroup.prototype.clearPhotoList = function() {
  return this.setPhotoList([]);
};


/**
 * map<string, string> name = 3;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.ding4.StockGroup.prototype.getNameMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 3, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.ding4.StockGroup} returns this
 */
proto.ding4.StockGroup.prototype.clearNameMap = function() {
  this.getNameMap().clear();
  return this;};


/**
 * optional int32 amount = 4;
 * @return {number}
 */
proto.ding4.StockGroup.prototype.getAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.ding4.StockGroup} returns this
 */
proto.ding4.StockGroup.prototype.setAmount = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
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
proto.ding4.StockSupplier.prototype.toObject = function(opt_includeInstance) {
  return proto.ding4.StockSupplier.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ding4.StockSupplier} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ding4.StockSupplier.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    phone: jspb.Message.getFieldWithDefault(msg, 3, ""),
    remark: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.ding4.StockSupplier}
 */
proto.ding4.StockSupplier.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ding4.StockSupplier;
  return proto.ding4.StockSupplier.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ding4.StockSupplier} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ding4.StockSupplier}
 */
proto.ding4.StockSupplier.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhone(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setRemark(value);
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
proto.ding4.StockSupplier.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ding4.StockSupplier.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ding4.StockSupplier} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ding4.StockSupplier.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPhone();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getRemark();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional double id = 1;
 * @return {number}
 */
proto.ding4.StockSupplier.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ding4.StockSupplier} returns this
 */
proto.ding4.StockSupplier.prototype.setId = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.ding4.StockSupplier.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.StockSupplier} returns this
 */
proto.ding4.StockSupplier.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string phone = 3;
 * @return {string}
 */
proto.ding4.StockSupplier.prototype.getPhone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.StockSupplier} returns this
 */
proto.ding4.StockSupplier.prototype.setPhone = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string remark = 4;
 * @return {string}
 */
proto.ding4.StockSupplier.prototype.getRemark = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.StockSupplier} returns this
 */
proto.ding4.StockSupplier.prototype.setRemark = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


goog.object.extend(exports, proto.ding4);
