// source: car.proto
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
var product$goods_pb = require('./product-goods_pb.js');
goog.object.extend(proto, product$goods_pb);
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
goog.object.extend(proto, google_protobuf_struct_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.ding4.Buy', null, global);
goog.exportSymbol('proto.ding4.Car', null, global);
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
proto.ding4.Car = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ding4.Car.repeatedFields_, null);
};
goog.inherits(proto.ding4.Car, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ding4.Car.displayName = 'proto.ding4.Car';
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
proto.ding4.Buy = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ding4.Buy, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ding4.Buy.displayName = 'proto.ding4.Buy';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ding4.Car.repeatedFields_ = [6,8,9,17,18];



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
proto.ding4.Car.prototype.toObject = function(opt_includeInstance) {
  return proto.ding4.Car.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ding4.Car} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ding4.Car.toObject = function(includeInstance, msg) {
  var f, obj = {
    carId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    storeId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    customerId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    couponId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    state: jspb.Message.getFieldWithDefault(msg, 5, 0),
    buyList: jspb.Message.toObjectList(msg.getBuyList(),
    proto.ding4.Buy.toObject, includeInstance),
    activityList: jspb.Message.toObjectList(msg.getActivityList(),
    product$goods_pb.ActivityGoods.toObject, includeInstance),
    goodsList: jspb.Message.toObjectList(msg.getGoodsList(),
    product$goods_pb.ProductGoods.toObject, includeInstance),
    isFreeShipping: jspb.Message.getBooleanFieldWithDefault(msg, 10, false),
    amount: jspb.Message.getFieldWithDefault(msg, 11, 0),
    price: jspb.Message.getFieldWithDefault(msg, 12, 0),
    discount: jspb.Message.getFieldWithDefault(msg, 13, 0),
    operator: jspb.Message.getFieldWithDefault(msg, 14, ""),
    createAt: (f = msg.getCreateAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    updateAt: (f = msg.getUpdateAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    colsList: (f = jspb.Message.getRepeatedField(msg, 17)) == null ? undefined : f,
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
 * @return {!proto.ding4.Car}
 */
proto.ding4.Car.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ding4.Car;
  return proto.ding4.Car.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ding4.Car} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ding4.Car}
 */
proto.ding4.Car.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCarId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setStoreId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomerId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCouponId(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setState(value);
      break;
    case 6:
      var value = new proto.ding4.Buy;
      reader.readMessage(value,proto.ding4.Buy.deserializeBinaryFromReader);
      msg.addBuy(value);
      break;
    case 8:
      var value = new product$goods_pb.ActivityGoods;
      reader.readMessage(value,product$goods_pb.ActivityGoods.deserializeBinaryFromReader);
      msg.addActivity(value);
      break;
    case 9:
      var value = new product$goods_pb.ProductGoods;
      reader.readMessage(value,product$goods_pb.ProductGoods.deserializeBinaryFromReader);
      msg.addGoods(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsFreeShipping(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAmount(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPrice(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDiscount(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setOperator(value);
      break;
    case 15:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreateAt(value);
      break;
    case 16:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdateAt(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.addCols(value);
      break;
    case 18:
      var value = new sql_pb.Condition;
      reader.readMessage(value,sql_pb.Condition.deserializeBinaryFromReader);
      msg.addCondition(value);
      break;
    case 19:
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
proto.ding4.Car.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ding4.Car.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ding4.Car} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ding4.Car.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCarId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStoreId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCustomerId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCouponId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getState();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getBuyList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.ding4.Buy.serializeBinaryToWriter
    );
  }
  f = message.getActivityList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      product$goods_pb.ActivityGoods.serializeBinaryToWriter
    );
  }
  f = message.getGoodsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      product$goods_pb.ProductGoods.serializeBinaryToWriter
    );
  }
  f = message.getIsFreeShipping();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
  f = message.getAmount();
  if (f !== 0) {
    writer.writeInt32(
      11,
      f
    );
  }
  f = message.getPrice();
  if (f !== 0) {
    writer.writeInt32(
      12,
      f
    );
  }
  f = message.getDiscount();
  if (f !== 0) {
    writer.writeInt32(
      13,
      f
    );
  }
  f = message.getOperator();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getCreateAt();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUpdateAt();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getColsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      17,
      f
    );
  }
  f = message.getConditionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      18,
      f,
      sql_pb.Condition.serializeBinaryToWriter
    );
  }
  f = message.getSelf();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
};


/**
 * optional string car_id = 1;
 * @return {string}
 */
proto.ding4.Car.prototype.getCarId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.Car} returns this
 */
proto.ding4.Car.prototype.setCarId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string store_id = 2;
 * @return {string}
 */
proto.ding4.Car.prototype.getStoreId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.Car} returns this
 */
proto.ding4.Car.prototype.setStoreId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string customer_id = 3;
 * @return {string}
 */
proto.ding4.Car.prototype.getCustomerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.Car} returns this
 */
proto.ding4.Car.prototype.setCustomerId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string coupon_id = 4;
 * @return {string}
 */
proto.ding4.Car.prototype.getCouponId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.Car} returns this
 */
proto.ding4.Car.prototype.setCouponId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int32 state = 5;
 * @return {number}
 */
proto.ding4.Car.prototype.getState = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.ding4.Car} returns this
 */
proto.ding4.Car.prototype.setState = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * repeated Buy buy = 6;
 * @return {!Array<!proto.ding4.Buy>}
 */
proto.ding4.Car.prototype.getBuyList = function() {
  return /** @type{!Array<!proto.ding4.Buy>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ding4.Buy, 6));
};


/**
 * @param {!Array<!proto.ding4.Buy>} value
 * @return {!proto.ding4.Car} returns this
*/
proto.ding4.Car.prototype.setBuyList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.ding4.Buy=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ding4.Buy}
 */
proto.ding4.Car.prototype.addBuy = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.ding4.Buy, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ding4.Car} returns this
 */
proto.ding4.Car.prototype.clearBuyList = function() {
  return this.setBuyList([]);
};


/**
 * repeated ActivityGoods activity = 8;
 * @return {!Array<!proto.ding4.ActivityGoods>}
 */
proto.ding4.Car.prototype.getActivityList = function() {
  return /** @type{!Array<!proto.ding4.ActivityGoods>} */ (
    jspb.Message.getRepeatedWrapperField(this, product$goods_pb.ActivityGoods, 8));
};


/**
 * @param {!Array<!proto.ding4.ActivityGoods>} value
 * @return {!proto.ding4.Car} returns this
*/
proto.ding4.Car.prototype.setActivityList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.ding4.ActivityGoods=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ding4.ActivityGoods}
 */
proto.ding4.Car.prototype.addActivity = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.ding4.ActivityGoods, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ding4.Car} returns this
 */
proto.ding4.Car.prototype.clearActivityList = function() {
  return this.setActivityList([]);
};


/**
 * repeated ProductGoods goods = 9;
 * @return {!Array<!proto.ding4.ProductGoods>}
 */
proto.ding4.Car.prototype.getGoodsList = function() {
  return /** @type{!Array<!proto.ding4.ProductGoods>} */ (
    jspb.Message.getRepeatedWrapperField(this, product$goods_pb.ProductGoods, 9));
};


/**
 * @param {!Array<!proto.ding4.ProductGoods>} value
 * @return {!proto.ding4.Car} returns this
*/
proto.ding4.Car.prototype.setGoodsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.ding4.ProductGoods=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ding4.ProductGoods}
 */
proto.ding4.Car.prototype.addGoods = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.ding4.ProductGoods, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ding4.Car} returns this
 */
proto.ding4.Car.prototype.clearGoodsList = function() {
  return this.setGoodsList([]);
};


/**
 * optional bool is_free_shipping = 10;
 * @return {boolean}
 */
proto.ding4.Car.prototype.getIsFreeShipping = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ding4.Car} returns this
 */
proto.ding4.Car.prototype.setIsFreeShipping = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
};


/**
 * optional int32 amount = 11;
 * @return {number}
 */
proto.ding4.Car.prototype.getAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.ding4.Car} returns this
 */
proto.ding4.Car.prototype.setAmount = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional int32 price = 12;
 * @return {number}
 */
proto.ding4.Car.prototype.getPrice = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.ding4.Car} returns this
 */
proto.ding4.Car.prototype.setPrice = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional int32 discount = 13;
 * @return {number}
 */
proto.ding4.Car.prototype.getDiscount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.ding4.Car} returns this
 */
proto.ding4.Car.prototype.setDiscount = function(value) {
  return jspb.Message.setProto3IntField(this, 13, value);
};


/**
 * optional string operator = 14;
 * @return {string}
 */
proto.ding4.Car.prototype.getOperator = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.Car} returns this
 */
proto.ding4.Car.prototype.setOperator = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional google.protobuf.Timestamp create_at = 15;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ding4.Car.prototype.getCreateAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 15));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ding4.Car} returns this
*/
proto.ding4.Car.prototype.setCreateAt = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ding4.Car} returns this
 */
proto.ding4.Car.prototype.clearCreateAt = function() {
  return this.setCreateAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ding4.Car.prototype.hasCreateAt = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional google.protobuf.Timestamp update_at = 16;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ding4.Car.prototype.getUpdateAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 16));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ding4.Car} returns this
*/
proto.ding4.Car.prototype.setUpdateAt = function(value) {
  return jspb.Message.setWrapperField(this, 16, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ding4.Car} returns this
 */
proto.ding4.Car.prototype.clearUpdateAt = function() {
  return this.setUpdateAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ding4.Car.prototype.hasUpdateAt = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * repeated string cols = 17;
 * @return {!Array<string>}
 */
proto.ding4.Car.prototype.getColsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 17));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ding4.Car} returns this
 */
proto.ding4.Car.prototype.setColsList = function(value) {
  return jspb.Message.setField(this, 17, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ding4.Car} returns this
 */
proto.ding4.Car.prototype.addCols = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 17, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ding4.Car} returns this
 */
proto.ding4.Car.prototype.clearColsList = function() {
  return this.setColsList([]);
};


/**
 * repeated Condition condition = 18;
 * @return {!Array<!proto.ding4.Condition>}
 */
proto.ding4.Car.prototype.getConditionList = function() {
  return /** @type{!Array<!proto.ding4.Condition>} */ (
    jspb.Message.getRepeatedWrapperField(this, sql_pb.Condition, 18));
};


/**
 * @param {!Array<!proto.ding4.Condition>} value
 * @return {!proto.ding4.Car} returns this
*/
proto.ding4.Car.prototype.setConditionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 18, value);
};


/**
 * @param {!proto.ding4.Condition=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ding4.Condition}
 */
proto.ding4.Car.prototype.addCondition = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 18, opt_value, proto.ding4.Condition, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ding4.Car} returns this
 */
proto.ding4.Car.prototype.clearConditionList = function() {
  return this.setConditionList([]);
};


/**
 * optional google.protobuf.Struct self = 19;
 * @return {?proto.google.protobuf.Struct}
 */
proto.ding4.Car.prototype.getSelf = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 19));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.ding4.Car} returns this
*/
proto.ding4.Car.prototype.setSelf = function(value) {
  return jspb.Message.setWrapperField(this, 19, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ding4.Car} returns this
 */
proto.ding4.Car.prototype.clearSelf = function() {
  return this.setSelf(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ding4.Car.prototype.hasSelf = function() {
  return jspb.Message.getField(this, 19) != null;
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
proto.ding4.Buy.prototype.toObject = function(opt_includeInstance) {
  return proto.ding4.Buy.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ding4.Buy} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ding4.Buy.toObject = function(includeInstance, msg) {
  var f, obj = {
    shellId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    sku: jspb.Message.getFieldWithDefault(msg, 2, ""),
    amount: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.ding4.Buy}
 */
proto.ding4.Buy.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ding4.Buy;
  return proto.ding4.Buy.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ding4.Buy} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ding4.Buy}
 */
proto.ding4.Buy.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setShellId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSku(value);
      break;
    case 3:
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
proto.ding4.Buy.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ding4.Buy.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ding4.Buy} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ding4.Buy.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getShellId();
  if (f !== 0) {
    writer.writeInt32(
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
  f = message.getAmount();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional int32 shell_id = 1;
 * @return {number}
 */
proto.ding4.Buy.prototype.getShellId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ding4.Buy} returns this
 */
proto.ding4.Buy.prototype.setShellId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string sku = 2;
 * @return {string}
 */
proto.ding4.Buy.prototype.getSku = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.Buy} returns this
 */
proto.ding4.Buy.prototype.setSku = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 amount = 3;
 * @return {number}
 */
proto.ding4.Buy.prototype.getAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.ding4.Buy} returns this
 */
proto.ding4.Buy.prototype.setAmount = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


goog.object.extend(exports, proto.ding4);
