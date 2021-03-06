// source: user-group.proto
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
goog.exportSymbol('proto.ding4.UserGroup', null, global);
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
proto.ding4.UserGroup = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ding4.UserGroup.repeatedFields_, null);
};
goog.inherits(proto.ding4.UserGroup, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ding4.UserGroup.displayName = 'proto.ding4.UserGroup';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ding4.UserGroup.repeatedFields_ = [6,7];



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
proto.ding4.UserGroup.prototype.toObject = function(opt_includeInstance) {
  return proto.ding4.UserGroup.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ding4.UserGroup} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ding4.UserGroup.toObject = function(includeInstance, msg) {
  var f, obj = {
    groupId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    operator: jspb.Message.getFieldWithDefault(msg, 3, ""),
    createAt: (f = msg.getCreateAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    updateAt: (f = msg.getUpdateAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    colsList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? undefined : f,
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
 * @return {!proto.ding4.UserGroup}
 */
proto.ding4.UserGroup.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ding4.UserGroup;
  return proto.ding4.UserGroup.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ding4.UserGroup} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ding4.UserGroup}
 */
proto.ding4.UserGroup.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setGroupId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setOperator(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreateAt(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdateAt(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.addCols(value);
      break;
    case 7:
      var value = new sql_pb.Condition;
      reader.readMessage(value,sql_pb.Condition.deserializeBinaryFromReader);
      msg.addCondition(value);
      break;
    case 8:
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
proto.ding4.UserGroup.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ding4.UserGroup.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ding4.UserGroup} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ding4.UserGroup.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGroupId();
  if (f.length > 0) {
    writer.writeString(
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
  f = message.getOperator();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCreateAt();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUpdateAt();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getColsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      6,
      f
    );
  }
  f = message.getConditionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      sql_pb.Condition.serializeBinaryToWriter
    );
  }
  f = message.getSelf();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
};


/**
 * optional string group_id = 1;
 * @return {string}
 */
proto.ding4.UserGroup.prototype.getGroupId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.UserGroup} returns this
 */
proto.ding4.UserGroup.prototype.setGroupId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.ding4.UserGroup.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.UserGroup} returns this
 */
proto.ding4.UserGroup.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string operator = 3;
 * @return {string}
 */
proto.ding4.UserGroup.prototype.getOperator = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.UserGroup} returns this
 */
proto.ding4.UserGroup.prototype.setOperator = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional google.protobuf.Timestamp create_at = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ding4.UserGroup.prototype.getCreateAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ding4.UserGroup} returns this
*/
proto.ding4.UserGroup.prototype.setCreateAt = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ding4.UserGroup} returns this
 */
proto.ding4.UserGroup.prototype.clearCreateAt = function() {
  return this.setCreateAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ding4.UserGroup.prototype.hasCreateAt = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Timestamp update_at = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ding4.UserGroup.prototype.getUpdateAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ding4.UserGroup} returns this
*/
proto.ding4.UserGroup.prototype.setUpdateAt = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ding4.UserGroup} returns this
 */
proto.ding4.UserGroup.prototype.clearUpdateAt = function() {
  return this.setUpdateAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ding4.UserGroup.prototype.hasUpdateAt = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * repeated string cols = 6;
 * @return {!Array<string>}
 */
proto.ding4.UserGroup.prototype.getColsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 6));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ding4.UserGroup} returns this
 */
proto.ding4.UserGroup.prototype.setColsList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ding4.UserGroup} returns this
 */
proto.ding4.UserGroup.prototype.addCols = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ding4.UserGroup} returns this
 */
proto.ding4.UserGroup.prototype.clearColsList = function() {
  return this.setColsList([]);
};


/**
 * repeated Condition condition = 7;
 * @return {!Array<!proto.ding4.Condition>}
 */
proto.ding4.UserGroup.prototype.getConditionList = function() {
  return /** @type{!Array<!proto.ding4.Condition>} */ (
    jspb.Message.getRepeatedWrapperField(this, sql_pb.Condition, 7));
};


/**
 * @param {!Array<!proto.ding4.Condition>} value
 * @return {!proto.ding4.UserGroup} returns this
*/
proto.ding4.UserGroup.prototype.setConditionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.ding4.Condition=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ding4.Condition}
 */
proto.ding4.UserGroup.prototype.addCondition = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.ding4.Condition, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ding4.UserGroup} returns this
 */
proto.ding4.UserGroup.prototype.clearConditionList = function() {
  return this.setConditionList([]);
};


/**
 * optional google.protobuf.Struct self = 8;
 * @return {?proto.google.protobuf.Struct}
 */
proto.ding4.UserGroup.prototype.getSelf = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 8));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.ding4.UserGroup} returns this
*/
proto.ding4.UserGroup.prototype.setSelf = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ding4.UserGroup} returns this
 */
proto.ding4.UserGroup.prototype.clearSelf = function() {
  return this.setSelf(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ding4.UserGroup.prototype.hasSelf = function() {
  return jspb.Message.getField(this, 8) != null;
};


goog.object.extend(exports, proto.ding4);
