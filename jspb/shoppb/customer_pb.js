// source: customer.proto
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
var address_pb = require('./address_pb.js');
goog.object.extend(proto, address_pb);
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
goog.object.extend(proto, google_protobuf_struct_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.ding4.Customer', null, global);
goog.exportSymbol('proto.ding4.CustomerBatch', null, global);
goog.exportSymbol('proto.ding4.CustomerLink', null, global);
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
proto.ding4.Customer = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ding4.Customer.repeatedFields_, null);
};
goog.inherits(proto.ding4.Customer, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ding4.Customer.displayName = 'proto.ding4.Customer';
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
proto.ding4.CustomerLink = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ding4.CustomerLink, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ding4.CustomerLink.displayName = 'proto.ding4.CustomerLink';
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
proto.ding4.CustomerBatch = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ding4.CustomerBatch.repeatedFields_, null);
};
goog.inherits(proto.ding4.CustomerBatch, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ding4.CustomerBatch.displayName = 'proto.ding4.CustomerBatch';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ding4.Customer.repeatedFields_ = [23,24];



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
proto.ding4.Customer.prototype.toObject = function(opt_includeInstance) {
  return proto.ding4.Customer.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ding4.Customer} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ding4.Customer.toObject = function(includeInstance, msg) {
  var f, obj = {
    customerId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    businessId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    storeId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    status: jspb.Message.getFieldWithDefault(msg, 4, 0),
    name: jspb.Message.getFieldWithDefault(msg, 5, ""),
    fbAccesstoken: jspb.Message.getFieldWithDefault(msg, 6, ""),
    email: jspb.Message.getFieldWithDefault(msg, 7, ""),
    phone: jspb.Message.getFieldWithDefault(msg, 8, ""),
    password: jspb.Message.getFieldWithDefault(msg, 9, ""),
    phoneVerify: jspb.Message.getBooleanFieldWithDefault(msg, 10, false),
    emailVerify: jspb.Message.getBooleanFieldWithDefault(msg, 11, false),
    address: (f = msg.getAddress()) && address_pb.Address.toObject(includeInstance, f),
    recaptcha: jspb.Message.getFieldWithDefault(msg, 13, ""),
    birthday: jspb.Message.getFieldWithDefault(msg, 14, ""),
    sex: jspb.Message.getFieldWithDefault(msg, 15, 0),
    levelId: jspb.Message.getFieldWithDefault(msg, 16, ""),
    isReceive: jspb.Message.getBooleanFieldWithDefault(msg, 17, false),
    registerBy: jspb.Message.getFieldWithDefault(msg, 18, ""),
    labelxMap: (f = msg.getLabelxMap()) ? f.toObject(includeInstance, undefined) : [],
    operator: jspb.Message.getFieldWithDefault(msg, 20, ""),
    createAt: (f = msg.getCreateAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    updateAt: (f = msg.getUpdateAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    colsList: (f = jspb.Message.getRepeatedField(msg, 23)) == null ? undefined : f,
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
 * @return {!proto.ding4.Customer}
 */
proto.ding4.Customer.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ding4.Customer;
  return proto.ding4.Customer.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ding4.Customer} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ding4.Customer}
 */
proto.ding4.Customer.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomerId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBusinessId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setStoreId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStatus(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setFbAccesstoken(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhone(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPhoneVerify(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEmailVerify(value);
      break;
    case 12:
      var value = new address_pb.Address;
      reader.readMessage(value,address_pb.Address.deserializeBinaryFromReader);
      msg.setAddress(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setRecaptcha(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setBirthday(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSex(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setLevelId(value);
      break;
    case 17:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsReceive(value);
      break;
    case 18:
      var value = /** @type {string} */ (reader.readString());
      msg.setRegisterBy(value);
      break;
    case 19:
      var value = msg.getLabelxMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readInt32, null, "", 0);
         });
      break;
    case 20:
      var value = /** @type {string} */ (reader.readString());
      msg.setOperator(value);
      break;
    case 21:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreateAt(value);
      break;
    case 22:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdateAt(value);
      break;
    case 23:
      var value = /** @type {string} */ (reader.readString());
      msg.addCols(value);
      break;
    case 24:
      var value = new sql_pb.Condition;
      reader.readMessage(value,sql_pb.Condition.deserializeBinaryFromReader);
      msg.addCondition(value);
      break;
    case 25:
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
proto.ding4.Customer.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ding4.Customer.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ding4.Customer} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ding4.Customer.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCustomerId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBusinessId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getStoreId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getFbAccesstoken();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getPhone();
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
  f = message.getPhoneVerify();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
  f = message.getEmailVerify();
  if (f) {
    writer.writeBool(
      11,
      f
    );
  }
  f = message.getAddress();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      address_pb.Address.serializeBinaryToWriter
    );
  }
  f = message.getRecaptcha();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getBirthday();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getSex();
  if (f !== 0) {
    writer.writeInt32(
      15,
      f
    );
  }
  f = message.getLevelId();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getIsReceive();
  if (f) {
    writer.writeBool(
      17,
      f
    );
  }
  f = message.getRegisterBy();
  if (f.length > 0) {
    writer.writeString(
      18,
      f
    );
  }
  f = message.getLabelxMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(19, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeInt32);
  }
  f = message.getOperator();
  if (f.length > 0) {
    writer.writeString(
      20,
      f
    );
  }
  f = message.getCreateAt();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUpdateAt();
  if (f != null) {
    writer.writeMessage(
      22,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getColsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      23,
      f
    );
  }
  f = message.getConditionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      24,
      f,
      sql_pb.Condition.serializeBinaryToWriter
    );
  }
  f = message.getSelf();
  if (f != null) {
    writer.writeMessage(
      25,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
};


/**
 * optional string customer_id = 1;
 * @return {string}
 */
proto.ding4.Customer.prototype.getCustomerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.Customer} returns this
 */
proto.ding4.Customer.prototype.setCustomerId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string business_id = 2;
 * @return {string}
 */
proto.ding4.Customer.prototype.getBusinessId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.Customer} returns this
 */
proto.ding4.Customer.prototype.setBusinessId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string store_id = 3;
 * @return {string}
 */
proto.ding4.Customer.prototype.getStoreId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.Customer} returns this
 */
proto.ding4.Customer.prototype.setStoreId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 status = 4;
 * @return {number}
 */
proto.ding4.Customer.prototype.getStatus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.ding4.Customer} returns this
 */
proto.ding4.Customer.prototype.setStatus = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string name = 5;
 * @return {string}
 */
proto.ding4.Customer.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.Customer} returns this
 */
proto.ding4.Customer.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string fb_accesstoken = 6;
 * @return {string}
 */
proto.ding4.Customer.prototype.getFbAccesstoken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.Customer} returns this
 */
proto.ding4.Customer.prototype.setFbAccesstoken = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string email = 7;
 * @return {string}
 */
proto.ding4.Customer.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.Customer} returns this
 */
proto.ding4.Customer.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string phone = 8;
 * @return {string}
 */
proto.ding4.Customer.prototype.getPhone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.Customer} returns this
 */
proto.ding4.Customer.prototype.setPhone = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string password = 9;
 * @return {string}
 */
proto.ding4.Customer.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.Customer} returns this
 */
proto.ding4.Customer.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional bool phone_verify = 10;
 * @return {boolean}
 */
proto.ding4.Customer.prototype.getPhoneVerify = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ding4.Customer} returns this
 */
proto.ding4.Customer.prototype.setPhoneVerify = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
};


/**
 * optional bool email_verify = 11;
 * @return {boolean}
 */
proto.ding4.Customer.prototype.getEmailVerify = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ding4.Customer} returns this
 */
proto.ding4.Customer.prototype.setEmailVerify = function(value) {
  return jspb.Message.setProto3BooleanField(this, 11, value);
};


/**
 * optional Address address = 12;
 * @return {?proto.ding4.Address}
 */
proto.ding4.Customer.prototype.getAddress = function() {
  return /** @type{?proto.ding4.Address} */ (
    jspb.Message.getWrapperField(this, address_pb.Address, 12));
};


/**
 * @param {?proto.ding4.Address|undefined} value
 * @return {!proto.ding4.Customer} returns this
*/
proto.ding4.Customer.prototype.setAddress = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ding4.Customer} returns this
 */
proto.ding4.Customer.prototype.clearAddress = function() {
  return this.setAddress(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ding4.Customer.prototype.hasAddress = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional string recaptcha = 13;
 * @return {string}
 */
proto.ding4.Customer.prototype.getRecaptcha = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.Customer} returns this
 */
proto.ding4.Customer.prototype.setRecaptcha = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional string birthday = 14;
 * @return {string}
 */
proto.ding4.Customer.prototype.getBirthday = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.Customer} returns this
 */
proto.ding4.Customer.prototype.setBirthday = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional int32 sex = 15;
 * @return {number}
 */
proto.ding4.Customer.prototype.getSex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {number} value
 * @return {!proto.ding4.Customer} returns this
 */
proto.ding4.Customer.prototype.setSex = function(value) {
  return jspb.Message.setProto3IntField(this, 15, value);
};


/**
 * optional string level_id = 16;
 * @return {string}
 */
proto.ding4.Customer.prototype.getLevelId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.Customer} returns this
 */
proto.ding4.Customer.prototype.setLevelId = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional bool is_receive = 17;
 * @return {boolean}
 */
proto.ding4.Customer.prototype.getIsReceive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 17, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ding4.Customer} returns this
 */
proto.ding4.Customer.prototype.setIsReceive = function(value) {
  return jspb.Message.setProto3BooleanField(this, 17, value);
};


/**
 * optional string register_by = 18;
 * @return {string}
 */
proto.ding4.Customer.prototype.getRegisterBy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 18, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.Customer} returns this
 */
proto.ding4.Customer.prototype.setRegisterBy = function(value) {
  return jspb.Message.setProto3StringField(this, 18, value);
};


/**
 * map<string, int32> labelx = 19;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,number>}
 */
proto.ding4.Customer.prototype.getLabelxMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,number>} */ (
      jspb.Message.getMapField(this, 19, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.ding4.Customer} returns this
 */
proto.ding4.Customer.prototype.clearLabelxMap = function() {
  this.getLabelxMap().clear();
  return this;};


/**
 * optional string operator = 20;
 * @return {string}
 */
proto.ding4.Customer.prototype.getOperator = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 20, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.Customer} returns this
 */
proto.ding4.Customer.prototype.setOperator = function(value) {
  return jspb.Message.setProto3StringField(this, 20, value);
};


/**
 * optional google.protobuf.Timestamp create_at = 21;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ding4.Customer.prototype.getCreateAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 21));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ding4.Customer} returns this
*/
proto.ding4.Customer.prototype.setCreateAt = function(value) {
  return jspb.Message.setWrapperField(this, 21, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ding4.Customer} returns this
 */
proto.ding4.Customer.prototype.clearCreateAt = function() {
  return this.setCreateAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ding4.Customer.prototype.hasCreateAt = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional google.protobuf.Timestamp update_at = 22;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ding4.Customer.prototype.getUpdateAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 22));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ding4.Customer} returns this
*/
proto.ding4.Customer.prototype.setUpdateAt = function(value) {
  return jspb.Message.setWrapperField(this, 22, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ding4.Customer} returns this
 */
proto.ding4.Customer.prototype.clearUpdateAt = function() {
  return this.setUpdateAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ding4.Customer.prototype.hasUpdateAt = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * repeated string cols = 23;
 * @return {!Array<string>}
 */
proto.ding4.Customer.prototype.getColsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 23));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ding4.Customer} returns this
 */
proto.ding4.Customer.prototype.setColsList = function(value) {
  return jspb.Message.setField(this, 23, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ding4.Customer} returns this
 */
proto.ding4.Customer.prototype.addCols = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 23, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ding4.Customer} returns this
 */
proto.ding4.Customer.prototype.clearColsList = function() {
  return this.setColsList([]);
};


/**
 * repeated Condition condition = 24;
 * @return {!Array<!proto.ding4.Condition>}
 */
proto.ding4.Customer.prototype.getConditionList = function() {
  return /** @type{!Array<!proto.ding4.Condition>} */ (
    jspb.Message.getRepeatedWrapperField(this, sql_pb.Condition, 24));
};


/**
 * @param {!Array<!proto.ding4.Condition>} value
 * @return {!proto.ding4.Customer} returns this
*/
proto.ding4.Customer.prototype.setConditionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 24, value);
};


/**
 * @param {!proto.ding4.Condition=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ding4.Condition}
 */
proto.ding4.Customer.prototype.addCondition = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 24, opt_value, proto.ding4.Condition, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ding4.Customer} returns this
 */
proto.ding4.Customer.prototype.clearConditionList = function() {
  return this.setConditionList([]);
};


/**
 * optional google.protobuf.Struct self = 25;
 * @return {?proto.google.protobuf.Struct}
 */
proto.ding4.Customer.prototype.getSelf = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 25));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.ding4.Customer} returns this
*/
proto.ding4.Customer.prototype.setSelf = function(value) {
  return jspb.Message.setWrapperField(this, 25, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ding4.Customer} returns this
 */
proto.ding4.Customer.prototype.clearSelf = function() {
  return this.setSelf(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ding4.Customer.prototype.hasSelf = function() {
  return jspb.Message.getField(this, 25) != null;
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
proto.ding4.CustomerLink.prototype.toObject = function(opt_includeInstance) {
  return proto.ding4.CustomerLink.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ding4.CustomerLink} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ding4.CustomerLink.toObject = function(includeInstance, msg) {
  var f, obj = {
    levelId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    isReceive: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
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
 * @return {!proto.ding4.CustomerLink}
 */
proto.ding4.CustomerLink.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ding4.CustomerLink;
  return proto.ding4.CustomerLink.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ding4.CustomerLink} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ding4.CustomerLink}
 */
proto.ding4.CustomerLink.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLevelId(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsReceive(value);
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
proto.ding4.CustomerLink.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ding4.CustomerLink.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ding4.CustomerLink} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ding4.CustomerLink.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLevelId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getIsReceive();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional string level_id = 1;
 * @return {string}
 */
proto.ding4.CustomerLink.prototype.getLevelId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.CustomerLink} returns this
 */
proto.ding4.CustomerLink.prototype.setLevelId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool is_receive = 2;
 * @return {boolean}
 */
proto.ding4.CustomerLink.prototype.getIsReceive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ding4.CustomerLink} returns this
 */
proto.ding4.CustomerLink.prototype.setIsReceive = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ding4.CustomerBatch.repeatedFields_ = [1];



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
proto.ding4.CustomerBatch.prototype.toObject = function(opt_includeInstance) {
  return proto.ding4.CustomerBatch.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ding4.CustomerBatch} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ding4.CustomerBatch.toObject = function(includeInstance, msg) {
  var f, obj = {
    customerList: jspb.Message.toObjectList(msg.getCustomerList(),
    proto.ding4.Customer.toObject, includeInstance),
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
 * @return {!proto.ding4.CustomerBatch}
 */
proto.ding4.CustomerBatch.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ding4.CustomerBatch;
  return proto.ding4.CustomerBatch.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ding4.CustomerBatch} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ding4.CustomerBatch}
 */
proto.ding4.CustomerBatch.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ding4.Customer;
      reader.readMessage(value,proto.ding4.Customer.deserializeBinaryFromReader);
      msg.addCustomer(value);
      break;
    case 2:
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
proto.ding4.CustomerBatch.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ding4.CustomerBatch.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ding4.CustomerBatch} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ding4.CustomerBatch.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCustomerList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.ding4.Customer.serializeBinaryToWriter
    );
  }
  f = message.getSelf();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Customer customer = 1;
 * @return {!Array<!proto.ding4.Customer>}
 */
proto.ding4.CustomerBatch.prototype.getCustomerList = function() {
  return /** @type{!Array<!proto.ding4.Customer>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ding4.Customer, 1));
};


/**
 * @param {!Array<!proto.ding4.Customer>} value
 * @return {!proto.ding4.CustomerBatch} returns this
*/
proto.ding4.CustomerBatch.prototype.setCustomerList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.ding4.Customer=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ding4.Customer}
 */
proto.ding4.CustomerBatch.prototype.addCustomer = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ding4.Customer, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ding4.CustomerBatch} returns this
 */
proto.ding4.CustomerBatch.prototype.clearCustomerList = function() {
  return this.setCustomerList([]);
};


/**
 * optional google.protobuf.Struct self = 2;
 * @return {?proto.google.protobuf.Struct}
 */
proto.ding4.CustomerBatch.prototype.getSelf = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 2));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.ding4.CustomerBatch} returns this
*/
proto.ding4.CustomerBatch.prototype.setSelf = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ding4.CustomerBatch} returns this
 */
proto.ding4.CustomerBatch.prototype.clearSelf = function() {
  return this.setSelf(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ding4.CustomerBatch.prototype.hasSelf = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.ding4);
