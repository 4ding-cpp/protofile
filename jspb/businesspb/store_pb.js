// source: store.proto
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
var manager_pb = require('./manager_pb.js');
goog.object.extend(proto, manager_pb);
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
goog.object.extend(proto, google_protobuf_struct_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.ding4.Store', null, global);
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
proto.ding4.Store = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ding4.Store.repeatedFields_, null);
};
goog.inherits(proto.ding4.Store, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ding4.Store.displayName = 'proto.ding4.Store';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ding4.Store.repeatedFields_ = [14,15];



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
proto.ding4.Store.prototype.toObject = function(opt_includeInstance) {
  return proto.ding4.Store.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ding4.Store} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ding4.Store.toObject = function(includeInstance, msg) {
  var f, obj = {
    storeId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    businessId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    userGroup: jspb.Message.getFieldWithDefault(msg, 3, ""),
    model: jspb.Message.getFieldWithDefault(msg, 4, 0),
    type: jspb.Message.getFieldWithDefault(msg, 5, 0),
    name: jspb.Message.getFieldWithDefault(msg, 6, ""),
    urn: jspb.Message.getFieldWithDefault(msg, 7, ""),
    isOpen: jspb.Message.getBooleanFieldWithDefault(msg, 8, false),
    manager: (f = msg.getManager()) && manager_pb.Manager.toObject(includeInstance, f),
    labelxMap: (f = msg.getLabelxMap()) ? f.toObject(includeInstance, undefined) : [],
    operator: jspb.Message.getFieldWithDefault(msg, 11, ""),
    createAt: (f = msg.getCreateAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    updateAt: (f = msg.getUpdateAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    colsList: (f = jspb.Message.getRepeatedField(msg, 14)) == null ? undefined : f,
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
 * @return {!proto.ding4.Store}
 */
proto.ding4.Store.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ding4.Store;
  return proto.ding4.Store.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ding4.Store} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ding4.Store}
 */
proto.ding4.Store.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setStoreId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBusinessId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserGroup(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setModel(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setType(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrn(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsOpen(value);
      break;
    case 9:
      var value = new manager_pb.Manager;
      reader.readMessage(value,manager_pb.Manager.deserializeBinaryFromReader);
      msg.setManager(value);
      break;
    case 10:
      var value = msg.getLabelxMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readInt32, null, "", 0);
         });
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setOperator(value);
      break;
    case 12:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreateAt(value);
      break;
    case 13:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdateAt(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.addCols(value);
      break;
    case 15:
      var value = new sql_pb.Condition;
      reader.readMessage(value,sql_pb.Condition.deserializeBinaryFromReader);
      msg.addCondition(value);
      break;
    case 16:
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
proto.ding4.Store.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ding4.Store.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ding4.Store} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ding4.Store.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStoreId();
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
  f = message.getUserGroup();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getModel();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getType();
  if (f !== 0) {
    writer.writeInt32(
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
  f = message.getUrn();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getIsOpen();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
  f = message.getManager();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      manager_pb.Manager.serializeBinaryToWriter
    );
  }
  f = message.getLabelxMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(10, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeInt32);
  }
  f = message.getOperator();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getCreateAt();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUpdateAt();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getColsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      14,
      f
    );
  }
  f = message.getConditionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      15,
      f,
      sql_pb.Condition.serializeBinaryToWriter
    );
  }
  f = message.getSelf();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
};


/**
 * optional string store_id = 1;
 * @return {string}
 */
proto.ding4.Store.prototype.getStoreId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.Store} returns this
 */
proto.ding4.Store.prototype.setStoreId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string business_id = 2;
 * @return {string}
 */
proto.ding4.Store.prototype.getBusinessId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.Store} returns this
 */
proto.ding4.Store.prototype.setBusinessId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string user_group = 3;
 * @return {string}
 */
proto.ding4.Store.prototype.getUserGroup = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.Store} returns this
 */
proto.ding4.Store.prototype.setUserGroup = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 model = 4;
 * @return {number}
 */
proto.ding4.Store.prototype.getModel = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.ding4.Store} returns this
 */
proto.ding4.Store.prototype.setModel = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 type = 5;
 * @return {number}
 */
proto.ding4.Store.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.ding4.Store} returns this
 */
proto.ding4.Store.prototype.setType = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string name = 6;
 * @return {string}
 */
proto.ding4.Store.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.Store} returns this
 */
proto.ding4.Store.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string urn = 7;
 * @return {string}
 */
proto.ding4.Store.prototype.getUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.Store} returns this
 */
proto.ding4.Store.prototype.setUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional bool is_open = 8;
 * @return {boolean}
 */
proto.ding4.Store.prototype.getIsOpen = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ding4.Store} returns this
 */
proto.ding4.Store.prototype.setIsOpen = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
};


/**
 * optional Manager manager = 9;
 * @return {?proto.ding4.Manager}
 */
proto.ding4.Store.prototype.getManager = function() {
  return /** @type{?proto.ding4.Manager} */ (
    jspb.Message.getWrapperField(this, manager_pb.Manager, 9));
};


/**
 * @param {?proto.ding4.Manager|undefined} value
 * @return {!proto.ding4.Store} returns this
*/
proto.ding4.Store.prototype.setManager = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ding4.Store} returns this
 */
proto.ding4.Store.prototype.clearManager = function() {
  return this.setManager(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ding4.Store.prototype.hasManager = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * map<string, int32> labelx = 10;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,number>}
 */
proto.ding4.Store.prototype.getLabelxMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,number>} */ (
      jspb.Message.getMapField(this, 10, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.ding4.Store} returns this
 */
proto.ding4.Store.prototype.clearLabelxMap = function() {
  this.getLabelxMap().clear();
  return this;};


/**
 * optional string operator = 11;
 * @return {string}
 */
proto.ding4.Store.prototype.getOperator = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.Store} returns this
 */
proto.ding4.Store.prototype.setOperator = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional google.protobuf.Timestamp create_at = 12;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ding4.Store.prototype.getCreateAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 12));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ding4.Store} returns this
*/
proto.ding4.Store.prototype.setCreateAt = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ding4.Store} returns this
 */
proto.ding4.Store.prototype.clearCreateAt = function() {
  return this.setCreateAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ding4.Store.prototype.hasCreateAt = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional google.protobuf.Timestamp update_at = 13;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ding4.Store.prototype.getUpdateAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 13));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ding4.Store} returns this
*/
proto.ding4.Store.prototype.setUpdateAt = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ding4.Store} returns this
 */
proto.ding4.Store.prototype.clearUpdateAt = function() {
  return this.setUpdateAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ding4.Store.prototype.hasUpdateAt = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * repeated string cols = 14;
 * @return {!Array<string>}
 */
proto.ding4.Store.prototype.getColsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 14));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ding4.Store} returns this
 */
proto.ding4.Store.prototype.setColsList = function(value) {
  return jspb.Message.setField(this, 14, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ding4.Store} returns this
 */
proto.ding4.Store.prototype.addCols = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 14, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ding4.Store} returns this
 */
proto.ding4.Store.prototype.clearColsList = function() {
  return this.setColsList([]);
};


/**
 * repeated Condition condition = 15;
 * @return {!Array<!proto.ding4.Condition>}
 */
proto.ding4.Store.prototype.getConditionList = function() {
  return /** @type{!Array<!proto.ding4.Condition>} */ (
    jspb.Message.getRepeatedWrapperField(this, sql_pb.Condition, 15));
};


/**
 * @param {!Array<!proto.ding4.Condition>} value
 * @return {!proto.ding4.Store} returns this
*/
proto.ding4.Store.prototype.setConditionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 15, value);
};


/**
 * @param {!proto.ding4.Condition=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ding4.Condition}
 */
proto.ding4.Store.prototype.addCondition = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 15, opt_value, proto.ding4.Condition, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ding4.Store} returns this
 */
proto.ding4.Store.prototype.clearConditionList = function() {
  return this.setConditionList([]);
};


/**
 * optional google.protobuf.Struct self = 16;
 * @return {?proto.google.protobuf.Struct}
 */
proto.ding4.Store.prototype.getSelf = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 16));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.ding4.Store} returns this
*/
proto.ding4.Store.prototype.setSelf = function(value) {
  return jspb.Message.setWrapperField(this, 16, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ding4.Store} returns this
 */
proto.ding4.Store.prototype.clearSelf = function() {
  return this.setSelf(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ding4.Store.prototype.hasSelf = function() {
  return jspb.Message.getField(this, 16) != null;
};


goog.object.extend(exports, proto.ding4);
