// source: admin.proto
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
goog.exportSymbol('proto.ding4.Admin', null, global);
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
proto.ding4.Admin = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ding4.Admin.repeatedFields_, null);
};
goog.inherits(proto.ding4.Admin, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ding4.Admin.displayName = 'proto.ding4.Admin';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ding4.Admin.repeatedFields_ = [10,11,18,19];



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
proto.ding4.Admin.prototype.toObject = function(opt_includeInstance) {
  return proto.ding4.Admin.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ding4.Admin} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ding4.Admin.toObject = function(includeInstance, msg) {
  var f, obj = {
    adminId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    isSuper: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    title: jspb.Message.getFieldWithDefault(msg, 3, ""),
    status: jspb.Message.getFieldWithDefault(msg, 4, 0),
    name: jspb.Message.getFieldWithDefault(msg, 5, ""),
    email: jspb.Message.getFieldWithDefault(msg, 6, ""),
    phone: jspb.Message.getFieldWithDefault(msg, 7, ""),
    password: jspb.Message.getFieldWithDefault(msg, 8, ""),
    isLive: jspb.Message.getBooleanFieldWithDefault(msg, 9, false),
    permissionList: jspb.Message.toObjectList(msg.getPermissionList(),
    permission_pb.Option.toObject, includeInstance),
    whiteList: (f = jspb.Message.getRepeatedField(msg, 11)) == null ? undefined : f,
    otpToken: jspb.Message.getFieldWithDefault(msg, 12, ""),
    labelxMap: (f = msg.getLabelxMap()) ? f.toObject(includeInstance, undefined) : [],
    power: jspb.Message.getFieldWithDefault(msg, 14, ""),
    operator: jspb.Message.getFieldWithDefault(msg, 15, ""),
    createAt: (f = msg.getCreateAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    updateAt: (f = msg.getUpdateAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    colsList: (f = jspb.Message.getRepeatedField(msg, 18)) == null ? undefined : f,
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
 * @return {!proto.ding4.Admin}
 */
proto.ding4.Admin.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ding4.Admin;
  return proto.ding4.Admin.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ding4.Admin} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ding4.Admin}
 */
proto.ding4.Admin.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAdminId(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsSuper(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
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
      msg.setEmail(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhone(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsLive(value);
      break;
    case 10:
      var value = new permission_pb.Option;
      reader.readMessage(value,permission_pb.Option.deserializeBinaryFromReader);
      msg.addPermission(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.addWhite(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setOtpToken(value);
      break;
    case 13:
      var value = msg.getLabelxMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readInt32, null, "", 0);
         });
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setPower(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setOperator(value);
      break;
    case 16:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreateAt(value);
      break;
    case 17:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdateAt(value);
      break;
    case 18:
      var value = /** @type {string} */ (reader.readString());
      msg.addCols(value);
      break;
    case 19:
      var value = new sql_pb.Condition;
      reader.readMessage(value,sql_pb.Condition.deserializeBinaryFromReader);
      msg.addCondition(value);
      break;
    case 20:
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
proto.ding4.Admin.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ding4.Admin.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ding4.Admin} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ding4.Admin.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAdminId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getIsSuper();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getTitle();
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
  f = message.getEmail();
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
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getIsLive();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
  f = message.getPermissionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      10,
      f,
      permission_pb.Option.serializeBinaryToWriter
    );
  }
  f = message.getWhiteList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      11,
      f
    );
  }
  f = message.getOtpToken();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getLabelxMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(13, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeInt32);
  }
  f = message.getPower();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getOperator();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getCreateAt();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUpdateAt();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getColsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      18,
      f
    );
  }
  f = message.getConditionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      19,
      f,
      sql_pb.Condition.serializeBinaryToWriter
    );
  }
  f = message.getSelf();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
};


/**
 * optional string admin_id = 1;
 * @return {string}
 */
proto.ding4.Admin.prototype.getAdminId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.Admin} returns this
 */
proto.ding4.Admin.prototype.setAdminId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool is_super = 2;
 * @return {boolean}
 */
proto.ding4.Admin.prototype.getIsSuper = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ding4.Admin} returns this
 */
proto.ding4.Admin.prototype.setIsSuper = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional string title = 3;
 * @return {string}
 */
proto.ding4.Admin.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.Admin} returns this
 */
proto.ding4.Admin.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 status = 4;
 * @return {number}
 */
proto.ding4.Admin.prototype.getStatus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.ding4.Admin} returns this
 */
proto.ding4.Admin.prototype.setStatus = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string name = 5;
 * @return {string}
 */
proto.ding4.Admin.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.Admin} returns this
 */
proto.ding4.Admin.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string email = 6;
 * @return {string}
 */
proto.ding4.Admin.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.Admin} returns this
 */
proto.ding4.Admin.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string phone = 7;
 * @return {string}
 */
proto.ding4.Admin.prototype.getPhone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.Admin} returns this
 */
proto.ding4.Admin.prototype.setPhone = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string password = 8;
 * @return {string}
 */
proto.ding4.Admin.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.Admin} returns this
 */
proto.ding4.Admin.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional bool is_live = 9;
 * @return {boolean}
 */
proto.ding4.Admin.prototype.getIsLive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ding4.Admin} returns this
 */
proto.ding4.Admin.prototype.setIsLive = function(value) {
  return jspb.Message.setProto3BooleanField(this, 9, value);
};


/**
 * repeated Option permission = 10;
 * @return {!Array<!proto.ding4.Option>}
 */
proto.ding4.Admin.prototype.getPermissionList = function() {
  return /** @type{!Array<!proto.ding4.Option>} */ (
    jspb.Message.getRepeatedWrapperField(this, permission_pb.Option, 10));
};


/**
 * @param {!Array<!proto.ding4.Option>} value
 * @return {!proto.ding4.Admin} returns this
*/
proto.ding4.Admin.prototype.setPermissionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 10, value);
};


/**
 * @param {!proto.ding4.Option=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ding4.Option}
 */
proto.ding4.Admin.prototype.addPermission = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 10, opt_value, proto.ding4.Option, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ding4.Admin} returns this
 */
proto.ding4.Admin.prototype.clearPermissionList = function() {
  return this.setPermissionList([]);
};


/**
 * repeated string white = 11;
 * @return {!Array<string>}
 */
proto.ding4.Admin.prototype.getWhiteList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 11));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ding4.Admin} returns this
 */
proto.ding4.Admin.prototype.setWhiteList = function(value) {
  return jspb.Message.setField(this, 11, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ding4.Admin} returns this
 */
proto.ding4.Admin.prototype.addWhite = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 11, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ding4.Admin} returns this
 */
proto.ding4.Admin.prototype.clearWhiteList = function() {
  return this.setWhiteList([]);
};


/**
 * optional string otp_token = 12;
 * @return {string}
 */
proto.ding4.Admin.prototype.getOtpToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.Admin} returns this
 */
proto.ding4.Admin.prototype.setOtpToken = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * map<string, int32> labelx = 13;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,number>}
 */
proto.ding4.Admin.prototype.getLabelxMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,number>} */ (
      jspb.Message.getMapField(this, 13, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.ding4.Admin} returns this
 */
proto.ding4.Admin.prototype.clearLabelxMap = function() {
  this.getLabelxMap().clear();
  return this;};


/**
 * optional string power = 14;
 * @return {string}
 */
proto.ding4.Admin.prototype.getPower = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.Admin} returns this
 */
proto.ding4.Admin.prototype.setPower = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional string operator = 15;
 * @return {string}
 */
proto.ding4.Admin.prototype.getOperator = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.Admin} returns this
 */
proto.ding4.Admin.prototype.setOperator = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * optional google.protobuf.Timestamp create_at = 16;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ding4.Admin.prototype.getCreateAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 16));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ding4.Admin} returns this
*/
proto.ding4.Admin.prototype.setCreateAt = function(value) {
  return jspb.Message.setWrapperField(this, 16, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ding4.Admin} returns this
 */
proto.ding4.Admin.prototype.clearCreateAt = function() {
  return this.setCreateAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ding4.Admin.prototype.hasCreateAt = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional google.protobuf.Timestamp update_at = 17;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ding4.Admin.prototype.getUpdateAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 17));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ding4.Admin} returns this
*/
proto.ding4.Admin.prototype.setUpdateAt = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ding4.Admin} returns this
 */
proto.ding4.Admin.prototype.clearUpdateAt = function() {
  return this.setUpdateAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ding4.Admin.prototype.hasUpdateAt = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * repeated string cols = 18;
 * @return {!Array<string>}
 */
proto.ding4.Admin.prototype.getColsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 18));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ding4.Admin} returns this
 */
proto.ding4.Admin.prototype.setColsList = function(value) {
  return jspb.Message.setField(this, 18, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ding4.Admin} returns this
 */
proto.ding4.Admin.prototype.addCols = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 18, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ding4.Admin} returns this
 */
proto.ding4.Admin.prototype.clearColsList = function() {
  return this.setColsList([]);
};


/**
 * repeated Condition condition = 19;
 * @return {!Array<!proto.ding4.Condition>}
 */
proto.ding4.Admin.prototype.getConditionList = function() {
  return /** @type{!Array<!proto.ding4.Condition>} */ (
    jspb.Message.getRepeatedWrapperField(this, sql_pb.Condition, 19));
};


/**
 * @param {!Array<!proto.ding4.Condition>} value
 * @return {!proto.ding4.Admin} returns this
*/
proto.ding4.Admin.prototype.setConditionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 19, value);
};


/**
 * @param {!proto.ding4.Condition=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ding4.Condition}
 */
proto.ding4.Admin.prototype.addCondition = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 19, opt_value, proto.ding4.Condition, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ding4.Admin} returns this
 */
proto.ding4.Admin.prototype.clearConditionList = function() {
  return this.setConditionList([]);
};


/**
 * optional google.protobuf.Struct self = 20;
 * @return {?proto.google.protobuf.Struct}
 */
proto.ding4.Admin.prototype.getSelf = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 20));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.ding4.Admin} returns this
*/
proto.ding4.Admin.prototype.setSelf = function(value) {
  return jspb.Message.setWrapperField(this, 20, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ding4.Admin} returns this
 */
proto.ding4.Admin.prototype.clearSelf = function() {
  return this.setSelf(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ding4.Admin.prototype.hasSelf = function() {
  return jspb.Message.getField(this, 20) != null;
};


goog.object.extend(exports, proto.ding4);
