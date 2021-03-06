// source: remind.proto
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
var template_pb = require('./template_pb.js');
goog.object.extend(proto, template_pb);
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
goog.object.extend(proto, google_protobuf_struct_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.ding4.Remind', null, global);
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
proto.ding4.Remind = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ding4.Remind.repeatedFields_, null);
};
goog.inherits(proto.ding4.Remind, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ding4.Remind.displayName = 'proto.ding4.Remind';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ding4.Remind.repeatedFields_ = [8,12,13];



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
proto.ding4.Remind.prototype.toObject = function(opt_includeInstance) {
  return proto.ding4.Remind.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ding4.Remind} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ding4.Remind.toObject = function(includeInstance, msg) {
  var f, obj = {
    remindId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    storeId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    item: jspb.Message.getFieldWithDefault(msg, 3, ""),
    category: jspb.Message.getFieldWithDefault(msg, 4, 0),
    description: jspb.Message.getFieldWithDefault(msg, 5, ""),
    subject: jspb.Message.getFieldWithDefault(msg, 6, ""),
    isEnable: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    templateGroupList: jspb.Message.toObjectList(msg.getTemplateGroupList(),
    template_pb.Template.toObject, includeInstance),
    operator: jspb.Message.getFieldWithDefault(msg, 9, ""),
    createAt: (f = msg.getCreateAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    updateAt: (f = msg.getUpdateAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    colsList: (f = jspb.Message.getRepeatedField(msg, 12)) == null ? undefined : f,
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
 * @return {!proto.ding4.Remind}
 */
proto.ding4.Remind.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ding4.Remind;
  return proto.ding4.Remind.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ding4.Remind} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ding4.Remind}
 */
proto.ding4.Remind.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRemindId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setStoreId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setItem(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCategory(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubject(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsEnable(value);
      break;
    case 8:
      var value = new template_pb.Template;
      reader.readMessage(value,template_pb.Template.deserializeBinaryFromReader);
      msg.addTemplateGroup(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setOperator(value);
      break;
    case 10:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreateAt(value);
      break;
    case 11:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdateAt(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.addCols(value);
      break;
    case 13:
      var value = new sql_pb.Condition;
      reader.readMessage(value,sql_pb.Condition.deserializeBinaryFromReader);
      msg.addCondition(value);
      break;
    case 14:
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
proto.ding4.Remind.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ding4.Remind.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ding4.Remind} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ding4.Remind.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRemindId();
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
  f = message.getItem();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCategory();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getSubject();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getIsEnable();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getTemplateGroupList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      template_pb.Template.serializeBinaryToWriter
    );
  }
  f = message.getOperator();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getCreateAt();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUpdateAt();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getColsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      12,
      f
    );
  }
  f = message.getConditionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      13,
      f,
      sql_pb.Condition.serializeBinaryToWriter
    );
  }
  f = message.getSelf();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
};


/**
 * optional string remind_id = 1;
 * @return {string}
 */
proto.ding4.Remind.prototype.getRemindId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.Remind} returns this
 */
proto.ding4.Remind.prototype.setRemindId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string store_id = 2;
 * @return {string}
 */
proto.ding4.Remind.prototype.getStoreId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.Remind} returns this
 */
proto.ding4.Remind.prototype.setStoreId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string item = 3;
 * @return {string}
 */
proto.ding4.Remind.prototype.getItem = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.Remind} returns this
 */
proto.ding4.Remind.prototype.setItem = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 category = 4;
 * @return {number}
 */
proto.ding4.Remind.prototype.getCategory = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.ding4.Remind} returns this
 */
proto.ding4.Remind.prototype.setCategory = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string description = 5;
 * @return {string}
 */
proto.ding4.Remind.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.Remind} returns this
 */
proto.ding4.Remind.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string subject = 6;
 * @return {string}
 */
proto.ding4.Remind.prototype.getSubject = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.Remind} returns this
 */
proto.ding4.Remind.prototype.setSubject = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional bool is_enable = 7;
 * @return {boolean}
 */
proto.ding4.Remind.prototype.getIsEnable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ding4.Remind} returns this
 */
proto.ding4.Remind.prototype.setIsEnable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * repeated Template template_group = 8;
 * @return {!Array<!proto.ding4.Template>}
 */
proto.ding4.Remind.prototype.getTemplateGroupList = function() {
  return /** @type{!Array<!proto.ding4.Template>} */ (
    jspb.Message.getRepeatedWrapperField(this, template_pb.Template, 8));
};


/**
 * @param {!Array<!proto.ding4.Template>} value
 * @return {!proto.ding4.Remind} returns this
*/
proto.ding4.Remind.prototype.setTemplateGroupList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.ding4.Template=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ding4.Template}
 */
proto.ding4.Remind.prototype.addTemplateGroup = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.ding4.Template, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ding4.Remind} returns this
 */
proto.ding4.Remind.prototype.clearTemplateGroupList = function() {
  return this.setTemplateGroupList([]);
};


/**
 * optional string operator = 9;
 * @return {string}
 */
proto.ding4.Remind.prototype.getOperator = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.Remind} returns this
 */
proto.ding4.Remind.prototype.setOperator = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional google.protobuf.Timestamp create_at = 10;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ding4.Remind.prototype.getCreateAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 10));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ding4.Remind} returns this
*/
proto.ding4.Remind.prototype.setCreateAt = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ding4.Remind} returns this
 */
proto.ding4.Remind.prototype.clearCreateAt = function() {
  return this.setCreateAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ding4.Remind.prototype.hasCreateAt = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional google.protobuf.Timestamp update_at = 11;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ding4.Remind.prototype.getUpdateAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 11));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ding4.Remind} returns this
*/
proto.ding4.Remind.prototype.setUpdateAt = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ding4.Remind} returns this
 */
proto.ding4.Remind.prototype.clearUpdateAt = function() {
  return this.setUpdateAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ding4.Remind.prototype.hasUpdateAt = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * repeated string cols = 12;
 * @return {!Array<string>}
 */
proto.ding4.Remind.prototype.getColsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 12));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ding4.Remind} returns this
 */
proto.ding4.Remind.prototype.setColsList = function(value) {
  return jspb.Message.setField(this, 12, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ding4.Remind} returns this
 */
proto.ding4.Remind.prototype.addCols = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 12, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ding4.Remind} returns this
 */
proto.ding4.Remind.prototype.clearColsList = function() {
  return this.setColsList([]);
};


/**
 * repeated Condition condition = 13;
 * @return {!Array<!proto.ding4.Condition>}
 */
proto.ding4.Remind.prototype.getConditionList = function() {
  return /** @type{!Array<!proto.ding4.Condition>} */ (
    jspb.Message.getRepeatedWrapperField(this, sql_pb.Condition, 13));
};


/**
 * @param {!Array<!proto.ding4.Condition>} value
 * @return {!proto.ding4.Remind} returns this
*/
proto.ding4.Remind.prototype.setConditionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 13, value);
};


/**
 * @param {!proto.ding4.Condition=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ding4.Condition}
 */
proto.ding4.Remind.prototype.addCondition = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 13, opt_value, proto.ding4.Condition, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ding4.Remind} returns this
 */
proto.ding4.Remind.prototype.clearConditionList = function() {
  return this.setConditionList([]);
};


/**
 * optional google.protobuf.Struct self = 14;
 * @return {?proto.google.protobuf.Struct}
 */
proto.ding4.Remind.prototype.getSelf = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 14));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.ding4.Remind} returns this
*/
proto.ding4.Remind.prototype.setSelf = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ding4.Remind} returns this
 */
proto.ding4.Remind.prototype.clearSelf = function() {
  return this.setSelf(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ding4.Remind.prototype.hasSelf = function() {
  return jspb.Message.getField(this, 14) != null;
};


goog.object.extend(exports, proto.ding4);
