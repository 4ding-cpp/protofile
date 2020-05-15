// source: inventory.proto
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

var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
goog.object.extend(proto, google_protobuf_struct_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.ding4.Inventory', null, global);
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
proto.ding4.Inventory = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ding4.Inventory, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ding4.Inventory.displayName = 'proto.ding4.Inventory';
}



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
proto.ding4.Inventory.prototype.toObject = function(opt_includeInstance) {
  return proto.ding4.Inventory.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ding4.Inventory} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ding4.Inventory.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    sku: jspb.Message.getFieldWithDefault(msg, 2, ""),
    productId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    orderId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    storeId: jspb.Message.getFieldWithDefault(msg, 5, ""),
    cost: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    stock: jspb.Message.getFieldWithDefault(msg, 7, 0),
    sold: jspb.Message.getFieldWithDefault(msg, 8, 0),
    profit: jspb.Message.getFloatingPointFieldWithDefault(msg, 9, 0.0),
    operator: jspb.Message.getFieldWithDefault(msg, 10, ""),
    createAt: (f = msg.getCreateAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    updateAt: (f = msg.getUpdateAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
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
 * @return {!proto.ding4.Inventory}
 */
proto.ding4.Inventory.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ding4.Inventory;
  return proto.ding4.Inventory.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ding4.Inventory} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ding4.Inventory}
 */
proto.ding4.Inventory.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSku(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setProductId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrderId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setStoreId(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCost(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStock(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSold(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setProfit(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setOperator(value);
      break;
    case 11:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreateAt(value);
      break;
    case 12:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdateAt(value);
      break;
    case 13:
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
proto.ding4.Inventory.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ding4.Inventory.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ding4.Inventory} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ding4.Inventory.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getSku();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getProductId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getOrderId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getStoreId();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCost();
  if (f !== 0.0) {
    writer.writeDouble(
      6,
      f
    );
  }
  f = message.getStock();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getSold();
  if (f !== 0) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = message.getProfit();
  if (f !== 0.0) {
    writer.writeDouble(
      9,
      f
    );
  }
  f = message.getOperator();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getCreateAt();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUpdateAt();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getSelf();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.ding4.Inventory.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ding4.Inventory} returns this
 */
proto.ding4.Inventory.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string sku = 2;
 * @return {string}
 */
proto.ding4.Inventory.prototype.getSku = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.Inventory} returns this
 */
proto.ding4.Inventory.prototype.setSku = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string product_id = 3;
 * @return {string}
 */
proto.ding4.Inventory.prototype.getProductId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.Inventory} returns this
 */
proto.ding4.Inventory.prototype.setProductId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string order_id = 4;
 * @return {string}
 */
proto.ding4.Inventory.prototype.getOrderId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.Inventory} returns this
 */
proto.ding4.Inventory.prototype.setOrderId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string store_id = 5;
 * @return {string}
 */
proto.ding4.Inventory.prototype.getStoreId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.Inventory} returns this
 */
proto.ding4.Inventory.prototype.setStoreId = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional double cost = 6;
 * @return {number}
 */
proto.ding4.Inventory.prototype.getCost = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ding4.Inventory} returns this
 */
proto.ding4.Inventory.prototype.setCost = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional int32 stock = 7;
 * @return {number}
 */
proto.ding4.Inventory.prototype.getStock = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.ding4.Inventory} returns this
 */
proto.ding4.Inventory.prototype.setStock = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional int32 sold = 8;
 * @return {number}
 */
proto.ding4.Inventory.prototype.getSold = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.ding4.Inventory} returns this
 */
proto.ding4.Inventory.prototype.setSold = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional double profit = 9;
 * @return {number}
 */
proto.ding4.Inventory.prototype.getProfit = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 9, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ding4.Inventory} returns this
 */
proto.ding4.Inventory.prototype.setProfit = function(value) {
  return jspb.Message.setProto3FloatField(this, 9, value);
};


/**
 * optional string operator = 10;
 * @return {string}
 */
proto.ding4.Inventory.prototype.getOperator = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.Inventory} returns this
 */
proto.ding4.Inventory.prototype.setOperator = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional google.protobuf.Timestamp create_at = 11;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ding4.Inventory.prototype.getCreateAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 11));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ding4.Inventory} returns this
*/
proto.ding4.Inventory.prototype.setCreateAt = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ding4.Inventory} returns this
 */
proto.ding4.Inventory.prototype.clearCreateAt = function() {
  return this.setCreateAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ding4.Inventory.prototype.hasCreateAt = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional google.protobuf.Timestamp update_at = 12;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ding4.Inventory.prototype.getUpdateAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 12));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ding4.Inventory} returns this
*/
proto.ding4.Inventory.prototype.setUpdateAt = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ding4.Inventory} returns this
 */
proto.ding4.Inventory.prototype.clearUpdateAt = function() {
  return this.setUpdateAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ding4.Inventory.prototype.hasUpdateAt = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional google.protobuf.Struct self = 13;
 * @return {?proto.google.protobuf.Struct}
 */
proto.ding4.Inventory.prototype.getSelf = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 13));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.ding4.Inventory} returns this
*/
proto.ding4.Inventory.prototype.setSelf = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ding4.Inventory} returns this
 */
proto.ding4.Inventory.prototype.clearSelf = function() {
  return this.setSelf(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ding4.Inventory.prototype.hasSelf = function() {
  return jspb.Message.getField(this, 13) != null;
};


goog.object.extend(exports, proto.ding4);
