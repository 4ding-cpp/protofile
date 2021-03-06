// source: system-set.proto
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
goog.exportSymbol('proto.ding4.SystemSet', null, global);
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
proto.ding4.SystemSet = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ding4.SystemSet.repeatedFields_, null);
};
goog.inherits(proto.ding4.SystemSet, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ding4.SystemSet.displayName = 'proto.ding4.SystemSet';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ding4.SystemSet.repeatedFields_ = [9,10];



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
proto.ding4.SystemSet.prototype.toObject = function(opt_includeInstance) {
  return proto.ding4.SystemSet.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ding4.SystemSet} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ding4.SystemSet.toObject = function(includeInstance, msg) {
  var f, obj = {
    setId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    type: jspb.Message.getFieldWithDefault(msg, 2, ""),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    conf: jspb.Message.getFieldWithDefault(msg, 4, ""),
    labelxMap: (f = msg.getLabelxMap()) ? f.toObject(includeInstance, undefined) : [],
    operator: jspb.Message.getFieldWithDefault(msg, 6, ""),
    createAt: (f = msg.getCreateAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    updateAt: (f = msg.getUpdateAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    colsList: (f = jspb.Message.getRepeatedField(msg, 9)) == null ? undefined : f,
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
 * @return {!proto.ding4.SystemSet}
 */
proto.ding4.SystemSet.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ding4.SystemSet;
  return proto.ding4.SystemSet.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ding4.SystemSet} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ding4.SystemSet}
 */
proto.ding4.SystemSet.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSetId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setConf(value);
      break;
    case 5:
      var value = msg.getLabelxMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readInt32, null, "", 0);
         });
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setOperator(value);
      break;
    case 7:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreateAt(value);
      break;
    case 8:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdateAt(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.addCols(value);
      break;
    case 10:
      var value = new sql_pb.Condition;
      reader.readMessage(value,sql_pb.Condition.deserializeBinaryFromReader);
      msg.addCondition(value);
      break;
    case 11:
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
proto.ding4.SystemSet.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ding4.SystemSet.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ding4.SystemSet} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ding4.SystemSet.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSetId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getConf();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getLabelxMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(5, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeInt32);
  }
  f = message.getOperator();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getCreateAt();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUpdateAt();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getColsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      9,
      f
    );
  }
  f = message.getConditionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      10,
      f,
      sql_pb.Condition.serializeBinaryToWriter
    );
  }
  f = message.getSelf();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
};


/**
 * optional string set_id = 1;
 * @return {string}
 */
proto.ding4.SystemSet.prototype.getSetId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.SystemSet} returns this
 */
proto.ding4.SystemSet.prototype.setSetId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string type = 2;
 * @return {string}
 */
proto.ding4.SystemSet.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.SystemSet} returns this
 */
proto.ding4.SystemSet.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.ding4.SystemSet.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.SystemSet} returns this
 */
proto.ding4.SystemSet.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string conf = 4;
 * @return {string}
 */
proto.ding4.SystemSet.prototype.getConf = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.SystemSet} returns this
 */
proto.ding4.SystemSet.prototype.setConf = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * map<string, int32> labelx = 5;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,number>}
 */
proto.ding4.SystemSet.prototype.getLabelxMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,number>} */ (
      jspb.Message.getMapField(this, 5, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.ding4.SystemSet} returns this
 */
proto.ding4.SystemSet.prototype.clearLabelxMap = function() {
  this.getLabelxMap().clear();
  return this;};


/**
 * optional string operator = 6;
 * @return {string}
 */
proto.ding4.SystemSet.prototype.getOperator = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.SystemSet} returns this
 */
proto.ding4.SystemSet.prototype.setOperator = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional google.protobuf.Timestamp create_at = 7;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ding4.SystemSet.prototype.getCreateAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 7));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ding4.SystemSet} returns this
*/
proto.ding4.SystemSet.prototype.setCreateAt = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ding4.SystemSet} returns this
 */
proto.ding4.SystemSet.prototype.clearCreateAt = function() {
  return this.setCreateAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ding4.SystemSet.prototype.hasCreateAt = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional google.protobuf.Timestamp update_at = 8;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ding4.SystemSet.prototype.getUpdateAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 8));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ding4.SystemSet} returns this
*/
proto.ding4.SystemSet.prototype.setUpdateAt = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ding4.SystemSet} returns this
 */
proto.ding4.SystemSet.prototype.clearUpdateAt = function() {
  return this.setUpdateAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ding4.SystemSet.prototype.hasUpdateAt = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * repeated string cols = 9;
 * @return {!Array<string>}
 */
proto.ding4.SystemSet.prototype.getColsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 9));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ding4.SystemSet} returns this
 */
proto.ding4.SystemSet.prototype.setColsList = function(value) {
  return jspb.Message.setField(this, 9, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ding4.SystemSet} returns this
 */
proto.ding4.SystemSet.prototype.addCols = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 9, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ding4.SystemSet} returns this
 */
proto.ding4.SystemSet.prototype.clearColsList = function() {
  return this.setColsList([]);
};


/**
 * repeated Condition condition = 10;
 * @return {!Array<!proto.ding4.Condition>}
 */
proto.ding4.SystemSet.prototype.getConditionList = function() {
  return /** @type{!Array<!proto.ding4.Condition>} */ (
    jspb.Message.getRepeatedWrapperField(this, sql_pb.Condition, 10));
};


/**
 * @param {!Array<!proto.ding4.Condition>} value
 * @return {!proto.ding4.SystemSet} returns this
*/
proto.ding4.SystemSet.prototype.setConditionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 10, value);
};


/**
 * @param {!proto.ding4.Condition=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ding4.Condition}
 */
proto.ding4.SystemSet.prototype.addCondition = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 10, opt_value, proto.ding4.Condition, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ding4.SystemSet} returns this
 */
proto.ding4.SystemSet.prototype.clearConditionList = function() {
  return this.setConditionList([]);
};


/**
 * optional google.protobuf.Struct self = 11;
 * @return {?proto.google.protobuf.Struct}
 */
proto.ding4.SystemSet.prototype.getSelf = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 11));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.ding4.SystemSet} returns this
*/
proto.ding4.SystemSet.prototype.setSelf = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ding4.SystemSet} returns this
 */
proto.ding4.SystemSet.prototype.clearSelf = function() {
  return this.setSelf(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ding4.SystemSet.prototype.hasSelf = function() {
  return jspb.Message.getField(this, 11) != null;
};


goog.object.extend(exports, proto.ding4);
