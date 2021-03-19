// source: address.proto
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

goog.exportSymbol('proto.ding4.Address', null, global);
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
proto.ding4.Address = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ding4.Address, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ding4.Address.displayName = 'proto.ding4.Address';
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
proto.ding4.Address.prototype.toObject = function(opt_includeInstance) {
  return proto.ding4.Address.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ding4.Address} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ding4.Address.toObject = function(includeInstance, msg) {
  var f, obj = {
    zipcode: jspb.Message.getFieldWithDefault(msg, 1, ""),
    country: jspb.Message.getFieldWithDefault(msg, 2, ""),
    city: jspb.Message.getFieldWithDefault(msg, 3, ""),
    township: jspb.Message.getFieldWithDefault(msg, 4, ""),
    detail: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.ding4.Address}
 */
proto.ding4.Address.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ding4.Address;
  return proto.ding4.Address.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ding4.Address} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ding4.Address}
 */
proto.ding4.Address.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setZipcode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCountry(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCity(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTownship(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setDetail(value);
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
proto.ding4.Address.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ding4.Address.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ding4.Address} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ding4.Address.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getZipcode();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCountry();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCity();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTownship();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getDetail();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string zipcode = 1;
 * @return {string}
 */
proto.ding4.Address.prototype.getZipcode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.Address} returns this
 */
proto.ding4.Address.prototype.setZipcode = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string country = 2;
 * @return {string}
 */
proto.ding4.Address.prototype.getCountry = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.Address} returns this
 */
proto.ding4.Address.prototype.setCountry = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string city = 3;
 * @return {string}
 */
proto.ding4.Address.prototype.getCity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.Address} returns this
 */
proto.ding4.Address.prototype.setCity = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string township = 4;
 * @return {string}
 */
proto.ding4.Address.prototype.getTownship = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.Address} returns this
 */
proto.ding4.Address.prototype.setTownship = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string detail = 5;
 * @return {string}
 */
proto.ding4.Address.prototype.getDetail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.Address} returns this
 */
proto.ding4.Address.prototype.setDetail = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


goog.object.extend(exports, proto.ding4);
