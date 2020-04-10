// source: business.proto
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

var permission_pb = require('./permission_pb.js');
goog.object.extend(proto, permission_pb);
var sql_pb = require('./sql_pb.js');
goog.object.extend(proto, sql_pb);
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
goog.object.extend(proto, google_protobuf_struct_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.ding4.Business', null, global);
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
proto.ding4.Business = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ding4.Business.repeatedFields_, null);
};
goog.inherits(proto.ding4.Business, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ding4.Business.displayName = 'proto.ding4.Business';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ding4.Business.repeatedFields_ = [18,19,73,74];



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
proto.ding4.Business.prototype.toObject = function(opt_includeInstance) {
  return proto.ding4.Business.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ding4.Business} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ding4.Business.toObject = function(includeInstance, msg) {
  var f, obj = {
    businessId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    mainId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    status: jspb.Message.getFieldWithDefault(msg, 3, 0),
    domain: jspb.Message.getFieldWithDefault(msg, 4, ""),
    name: jspb.Message.getFieldWithDefault(msg, 5, ""),
    point: jspb.Message.getFieldWithDefault(msg, 6, 0),
    password: jspb.Message.getFieldWithDefault(msg, 7, ""),
    fee: jspb.Message.getFloatingPointFieldWithDefault(msg, 8, 0.0),
    type: jspb.Message.getFieldWithDefault(msg, 9, 0),
    contacter: jspb.Message.getFieldWithDefault(msg, 10, ""),
    phone: jspb.Message.getFieldWithDefault(msg, 11, ""),
    email: jspb.Message.getFieldWithDefault(msg, 12, ""),
    location: jspb.Message.getFieldWithDefault(msg, 13, ""),
    mgrType: jspb.Message.getFieldWithDefault(msg, 14, 0),
    turnover: jspb.Message.getFieldWithDefault(msg, 15, 0),
    company: jspb.Message.getFieldWithDefault(msg, 16, ""),
    identify: jspb.Message.getFieldWithDefault(msg, 17, ""),
    permissionList: jspb.Message.toObjectList(msg.getPermissionList(),
    permission_pb.Option.toObject, includeInstance),
    whiteList: (f = jspb.Message.getRepeatedField(msg, 19)) == null ? undefined : f,
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
 * @return {!proto.ding4.Business}
 */
proto.ding4.Business.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ding4.Business;
  return proto.ding4.Business.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ding4.Business} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ding4.Business}
 */
proto.ding4.Business.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBusinessId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMainId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStatus(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDomain(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPoint(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setFee(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setType(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setContacter(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhone(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocation(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMgrType(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTurnover(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setCompany(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdentify(value);
      break;
    case 18:
      var value = new permission_pb.Option;
      reader.readMessage(value,permission_pb.Option.deserializeBinaryFromReader);
      msg.addPermission(value);
      break;
    case 19:
      var value = /** @type {string} */ (reader.readString());
      msg.addWhite(value);
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
proto.ding4.Business.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ding4.Business.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ding4.Business} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ding4.Business.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBusinessId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMainId();
  if (f.length > 0) {
    writer.writeString(
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
  f = message.getDomain();
  if (f.length > 0) {
    writer.writeString(
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
  f = message.getPoint();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getFee();
  if (f !== 0.0) {
    writer.writeDouble(
      8,
      f
    );
  }
  f = message.getType();
  if (f !== 0) {
    writer.writeInt32(
      9,
      f
    );
  }
  f = message.getContacter();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getPhone();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getLocation();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getMgrType();
  if (f !== 0) {
    writer.writeInt32(
      14,
      f
    );
  }
  f = message.getTurnover();
  if (f !== 0) {
    writer.writeInt32(
      15,
      f
    );
  }
  f = message.getCompany();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getIdentify();
  if (f.length > 0) {
    writer.writeString(
      17,
      f
    );
  }
  f = message.getPermissionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      18,
      f,
      permission_pb.Option.serializeBinaryToWriter
    );
  }
  f = message.getWhiteList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      19,
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
 * optional string business_id = 1;
 * @return {string}
 */
proto.ding4.Business.prototype.getBusinessId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.Business} returns this
 */
proto.ding4.Business.prototype.setBusinessId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string main_id = 2;
 * @return {string}
 */
proto.ding4.Business.prototype.getMainId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.Business} returns this
 */
proto.ding4.Business.prototype.setMainId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 status = 3;
 * @return {number}
 */
proto.ding4.Business.prototype.getStatus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.ding4.Business} returns this
 */
proto.ding4.Business.prototype.setStatus = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string domain = 4;
 * @return {string}
 */
proto.ding4.Business.prototype.getDomain = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.Business} returns this
 */
proto.ding4.Business.prototype.setDomain = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string name = 5;
 * @return {string}
 */
proto.ding4.Business.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.Business} returns this
 */
proto.ding4.Business.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional int32 point = 6;
 * @return {number}
 */
proto.ding4.Business.prototype.getPoint = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.ding4.Business} returns this
 */
proto.ding4.Business.prototype.setPoint = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional string password = 7;
 * @return {string}
 */
proto.ding4.Business.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.Business} returns this
 */
proto.ding4.Business.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional double fee = 8;
 * @return {number}
 */
proto.ding4.Business.prototype.getFee = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ding4.Business} returns this
 */
proto.ding4.Business.prototype.setFee = function(value) {
  return jspb.Message.setProto3FloatField(this, 8, value);
};


/**
 * optional int32 type = 9;
 * @return {number}
 */
proto.ding4.Business.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.ding4.Business} returns this
 */
proto.ding4.Business.prototype.setType = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional string contacter = 10;
 * @return {string}
 */
proto.ding4.Business.prototype.getContacter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.Business} returns this
 */
proto.ding4.Business.prototype.setContacter = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string phone = 11;
 * @return {string}
 */
proto.ding4.Business.prototype.getPhone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.Business} returns this
 */
proto.ding4.Business.prototype.setPhone = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string email = 12;
 * @return {string}
 */
proto.ding4.Business.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.Business} returns this
 */
proto.ding4.Business.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string location = 13;
 * @return {string}
 */
proto.ding4.Business.prototype.getLocation = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.Business} returns this
 */
proto.ding4.Business.prototype.setLocation = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional int32 mgr_type = 14;
 * @return {number}
 */
proto.ding4.Business.prototype.getMgrType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {number} value
 * @return {!proto.ding4.Business} returns this
 */
proto.ding4.Business.prototype.setMgrType = function(value) {
  return jspb.Message.setProto3IntField(this, 14, value);
};


/**
 * optional int32 turnover = 15;
 * @return {number}
 */
proto.ding4.Business.prototype.getTurnover = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {number} value
 * @return {!proto.ding4.Business} returns this
 */
proto.ding4.Business.prototype.setTurnover = function(value) {
  return jspb.Message.setProto3IntField(this, 15, value);
};


/**
 * optional string company = 16;
 * @return {string}
 */
proto.ding4.Business.prototype.getCompany = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.Business} returns this
 */
proto.ding4.Business.prototype.setCompany = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional string identify = 17;
 * @return {string}
 */
proto.ding4.Business.prototype.getIdentify = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.Business} returns this
 */
proto.ding4.Business.prototype.setIdentify = function(value) {
  return jspb.Message.setProto3StringField(this, 17, value);
};


/**
 * repeated Option permission = 18;
 * @return {!Array<!proto.ding4.Option>}
 */
proto.ding4.Business.prototype.getPermissionList = function() {
  return /** @type{!Array<!proto.ding4.Option>} */ (
    jspb.Message.getRepeatedWrapperField(this, permission_pb.Option, 18));
};


/**
 * @param {!Array<!proto.ding4.Option>} value
 * @return {!proto.ding4.Business} returns this
*/
proto.ding4.Business.prototype.setPermissionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 18, value);
};


/**
 * @param {!proto.ding4.Option=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ding4.Option}
 */
proto.ding4.Business.prototype.addPermission = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 18, opt_value, proto.ding4.Option, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ding4.Business} returns this
 */
proto.ding4.Business.prototype.clearPermissionList = function() {
  return this.setPermissionList([]);
};


/**
 * repeated string white = 19;
 * @return {!Array<string>}
 */
proto.ding4.Business.prototype.getWhiteList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 19));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ding4.Business} returns this
 */
proto.ding4.Business.prototype.setWhiteList = function(value) {
  return jspb.Message.setField(this, 19, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ding4.Business} returns this
 */
proto.ding4.Business.prototype.addWhite = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 19, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ding4.Business} returns this
 */
proto.ding4.Business.prototype.clearWhiteList = function() {
  return this.setWhiteList([]);
};


/**
 * optional string operator = 70;
 * @return {string}
 */
proto.ding4.Business.prototype.getOperator = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 70, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.Business} returns this
 */
proto.ding4.Business.prototype.setOperator = function(value) {
  return jspb.Message.setProto3StringField(this, 70, value);
};


/**
 * optional google.protobuf.Timestamp create_at = 71;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ding4.Business.prototype.getCreateAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 71));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ding4.Business} returns this
*/
proto.ding4.Business.prototype.setCreateAt = function(value) {
  return jspb.Message.setWrapperField(this, 71, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ding4.Business} returns this
 */
proto.ding4.Business.prototype.clearCreateAt = function() {
  return this.setCreateAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ding4.Business.prototype.hasCreateAt = function() {
  return jspb.Message.getField(this, 71) != null;
};


/**
 * optional google.protobuf.Timestamp update_at = 72;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ding4.Business.prototype.getUpdateAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 72));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ding4.Business} returns this
*/
proto.ding4.Business.prototype.setUpdateAt = function(value) {
  return jspb.Message.setWrapperField(this, 72, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ding4.Business} returns this
 */
proto.ding4.Business.prototype.clearUpdateAt = function() {
  return this.setUpdateAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ding4.Business.prototype.hasUpdateAt = function() {
  return jspb.Message.getField(this, 72) != null;
};


/**
 * repeated string cols = 73;
 * @return {!Array<string>}
 */
proto.ding4.Business.prototype.getColsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 73));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ding4.Business} returns this
 */
proto.ding4.Business.prototype.setColsList = function(value) {
  return jspb.Message.setField(this, 73, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ding4.Business} returns this
 */
proto.ding4.Business.prototype.addCols = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 73, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ding4.Business} returns this
 */
proto.ding4.Business.prototype.clearColsList = function() {
  return this.setColsList([]);
};


/**
 * repeated Condition condition = 74;
 * @return {!Array<!proto.ding4.Condition>}
 */
proto.ding4.Business.prototype.getConditionList = function() {
  return /** @type{!Array<!proto.ding4.Condition>} */ (
    jspb.Message.getRepeatedWrapperField(this, sql_pb.Condition, 74));
};


/**
 * @param {!Array<!proto.ding4.Condition>} value
 * @return {!proto.ding4.Business} returns this
*/
proto.ding4.Business.prototype.setConditionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 74, value);
};


/**
 * @param {!proto.ding4.Condition=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ding4.Condition}
 */
proto.ding4.Business.prototype.addCondition = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 74, opt_value, proto.ding4.Condition, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ding4.Business} returns this
 */
proto.ding4.Business.prototype.clearConditionList = function() {
  return this.setConditionList([]);
};


/**
 * optional google.protobuf.Struct self = 75;
 * @return {?proto.google.protobuf.Struct}
 */
proto.ding4.Business.prototype.getSelf = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 75));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.ding4.Business} returns this
*/
proto.ding4.Business.prototype.setSelf = function(value) {
  return jspb.Message.setWrapperField(this, 75, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ding4.Business} returns this
 */
proto.ding4.Business.prototype.clearSelf = function() {
  return this.setSelf(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ding4.Business.prototype.hasSelf = function() {
  return jspb.Message.getField(this, 75) != null;
};


goog.object.extend(exports, proto.ding4);
