// source: product-goods.proto
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

var seo_pb = require('./seo_pb.js');
goog.object.extend(proto, seo_pb);
var template_pb = require('./template_pb.js');
goog.object.extend(proto, template_pb);
var a$submessage_pb = require('./a-submessage_pb.js');
goog.object.extend(proto, a$submessage_pb);
var product_pb = require('./product_pb.js');
goog.object.extend(proto, product_pb);
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
goog.object.extend(proto, google_protobuf_struct_pb);
goog.exportSymbol('proto.ding4.ActivityGoods', null, global);
goog.exportSymbol('proto.ding4.ProductGoods', null, global);
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
proto.ding4.ProductGoods = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ding4.ProductGoods.repeatedFields_, null);
};
goog.inherits(proto.ding4.ProductGoods, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ding4.ProductGoods.displayName = 'proto.ding4.ProductGoods';
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
proto.ding4.ActivityGoods = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ding4.ActivityGoods, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ding4.ActivityGoods.displayName = 'proto.ding4.ActivityGoods';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ding4.ProductGoods.repeatedFields_ = [6,18,19,20];



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
proto.ding4.ProductGoods.prototype.toObject = function(opt_includeInstance) {
  return proto.ding4.ProductGoods.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ding4.ProductGoods} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ding4.ProductGoods.toObject = function(includeInstance, msg) {
  var f, obj = {
    shellId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    productId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    classId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    type: jspb.Message.getFieldWithDefault(msg, 4, 0),
    seo: (f = msg.getSeo()) && seo_pb.SEO.toObject(includeInstance, f),
    blockList: jspb.Message.toObjectList(msg.getBlockList(),
    template_pb.Template.toObject, includeInstance),
    name: (f = msg.getName()) && google_protobuf_struct_pb.Value.toObject(includeInstance, f),
    urn: jspb.Message.getFieldWithDefault(msg, 8, ""),
    sku: jspb.Message.getFieldWithDefault(msg, 9, ""),
    photoSrc: jspb.Message.getFieldWithDefault(msg, 10, ""),
    original: jspb.Message.getFieldWithDefault(msg, 11, 0),
    price: jspb.Message.getFieldWithDefault(msg, 12, 0),
    weight: jspb.Message.getFloatingPointFieldWithDefault(msg, 13, 0.0),
    volume: jspb.Message.getFloatingPointFieldWithDefault(msg, 14, 0.0),
    isPickup: jspb.Message.getBooleanFieldWithDefault(msg, 15, false),
    isPreorder: jspb.Message.getBooleanFieldWithDefault(msg, 16, false),
    stock: jspb.Message.getFieldWithDefault(msg, 17, 0),
    specxList: jspb.Message.toObjectList(msg.getSpecxList(),
    product_pb.ProductSpec.toObject, includeInstance),
    photoxList: jspb.Message.toObjectList(msg.getPhotoxList(),
    a$submessage_pb.Image.toObject, includeInstance),
    activityList: jspb.Message.toObjectList(msg.getActivityList(),
    proto.ding4.ActivityGoods.toObject, includeInstance)
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
 * @return {!proto.ding4.ProductGoods}
 */
proto.ding4.ProductGoods.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ding4.ProductGoods;
  return proto.ding4.ProductGoods.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ding4.ProductGoods} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ding4.ProductGoods}
 */
proto.ding4.ProductGoods.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setProductId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setClassId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setType(value);
      break;
    case 5:
      var value = new seo_pb.SEO;
      reader.readMessage(value,seo_pb.SEO.deserializeBinaryFromReader);
      msg.setSeo(value);
      break;
    case 6:
      var value = new template_pb.Template;
      reader.readMessage(value,template_pb.Template.deserializeBinaryFromReader);
      msg.addBlock(value);
      break;
    case 7:
      var value = new google_protobuf_struct_pb.Value;
      reader.readMessage(value,google_protobuf_struct_pb.Value.deserializeBinaryFromReader);
      msg.setName(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrn(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setSku(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhotoSrc(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setOriginal(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPrice(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setWeight(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setVolume(value);
      break;
    case 15:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsPickup(value);
      break;
    case 16:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsPreorder(value);
      break;
    case 17:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStock(value);
      break;
    case 18:
      var value = new product_pb.ProductSpec;
      reader.readMessage(value,product_pb.ProductSpec.deserializeBinaryFromReader);
      msg.addSpecx(value);
      break;
    case 19:
      var value = new a$submessage_pb.Image;
      reader.readMessage(value,a$submessage_pb.Image.deserializeBinaryFromReader);
      msg.addPhotox(value);
      break;
    case 20:
      var value = new proto.ding4.ActivityGoods;
      reader.readMessage(value,proto.ding4.ActivityGoods.deserializeBinaryFromReader);
      msg.addActivity(value);
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
proto.ding4.ProductGoods.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ding4.ProductGoods.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ding4.ProductGoods} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ding4.ProductGoods.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getShellId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getProductId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getClassId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getType();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getSeo();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      seo_pb.SEO.serializeBinaryToWriter
    );
  }
  f = message.getBlockList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      template_pb.Template.serializeBinaryToWriter
    );
  }
  f = message.getName();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_struct_pb.Value.serializeBinaryToWriter
    );
  }
  f = message.getUrn();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getSku();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getPhotoSrc();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getOriginal();
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
  f = message.getWeight();
  if (f !== 0.0) {
    writer.writeDouble(
      13,
      f
    );
  }
  f = message.getVolume();
  if (f !== 0.0) {
    writer.writeDouble(
      14,
      f
    );
  }
  f = message.getIsPickup();
  if (f) {
    writer.writeBool(
      15,
      f
    );
  }
  f = message.getIsPreorder();
  if (f) {
    writer.writeBool(
      16,
      f
    );
  }
  f = message.getStock();
  if (f !== 0) {
    writer.writeInt32(
      17,
      f
    );
  }
  f = message.getSpecxList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      18,
      f,
      product_pb.ProductSpec.serializeBinaryToWriter
    );
  }
  f = message.getPhotoxList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      19,
      f,
      a$submessage_pb.Image.serializeBinaryToWriter
    );
  }
  f = message.getActivityList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      20,
      f,
      proto.ding4.ActivityGoods.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 shell_id = 1;
 * @return {number}
 */
proto.ding4.ProductGoods.prototype.getShellId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ding4.ProductGoods} returns this
 */
proto.ding4.ProductGoods.prototype.setShellId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string product_id = 2;
 * @return {string}
 */
proto.ding4.ProductGoods.prototype.getProductId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.ProductGoods} returns this
 */
proto.ding4.ProductGoods.prototype.setProductId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string class_id = 3;
 * @return {string}
 */
proto.ding4.ProductGoods.prototype.getClassId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.ProductGoods} returns this
 */
proto.ding4.ProductGoods.prototype.setClassId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 type = 4;
 * @return {number}
 */
proto.ding4.ProductGoods.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.ding4.ProductGoods} returns this
 */
proto.ding4.ProductGoods.prototype.setType = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional SEO seo = 5;
 * @return {?proto.ding4.SEO}
 */
proto.ding4.ProductGoods.prototype.getSeo = function() {
  return /** @type{?proto.ding4.SEO} */ (
    jspb.Message.getWrapperField(this, seo_pb.SEO, 5));
};


/**
 * @param {?proto.ding4.SEO|undefined} value
 * @return {!proto.ding4.ProductGoods} returns this
*/
proto.ding4.ProductGoods.prototype.setSeo = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ding4.ProductGoods} returns this
 */
proto.ding4.ProductGoods.prototype.clearSeo = function() {
  return this.setSeo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ding4.ProductGoods.prototype.hasSeo = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * repeated Template block = 6;
 * @return {!Array<!proto.ding4.Template>}
 */
proto.ding4.ProductGoods.prototype.getBlockList = function() {
  return /** @type{!Array<!proto.ding4.Template>} */ (
    jspb.Message.getRepeatedWrapperField(this, template_pb.Template, 6));
};


/**
 * @param {!Array<!proto.ding4.Template>} value
 * @return {!proto.ding4.ProductGoods} returns this
*/
proto.ding4.ProductGoods.prototype.setBlockList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.ding4.Template=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ding4.Template}
 */
proto.ding4.ProductGoods.prototype.addBlock = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.ding4.Template, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ding4.ProductGoods} returns this
 */
proto.ding4.ProductGoods.prototype.clearBlockList = function() {
  return this.setBlockList([]);
};


/**
 * optional google.protobuf.Value name = 7;
 * @return {?proto.google.protobuf.Value}
 */
proto.ding4.ProductGoods.prototype.getName = function() {
  return /** @type{?proto.google.protobuf.Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Value, 7));
};


/**
 * @param {?proto.google.protobuf.Value|undefined} value
 * @return {!proto.ding4.ProductGoods} returns this
*/
proto.ding4.ProductGoods.prototype.setName = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ding4.ProductGoods} returns this
 */
proto.ding4.ProductGoods.prototype.clearName = function() {
  return this.setName(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ding4.ProductGoods.prototype.hasName = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string urn = 8;
 * @return {string}
 */
proto.ding4.ProductGoods.prototype.getUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.ProductGoods} returns this
 */
proto.ding4.ProductGoods.prototype.setUrn = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string sku = 9;
 * @return {string}
 */
proto.ding4.ProductGoods.prototype.getSku = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.ProductGoods} returns this
 */
proto.ding4.ProductGoods.prototype.setSku = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string photo_src = 10;
 * @return {string}
 */
proto.ding4.ProductGoods.prototype.getPhotoSrc = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.ProductGoods} returns this
 */
proto.ding4.ProductGoods.prototype.setPhotoSrc = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional int32 original = 11;
 * @return {number}
 */
proto.ding4.ProductGoods.prototype.getOriginal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.ding4.ProductGoods} returns this
 */
proto.ding4.ProductGoods.prototype.setOriginal = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional int32 price = 12;
 * @return {number}
 */
proto.ding4.ProductGoods.prototype.getPrice = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.ding4.ProductGoods} returns this
 */
proto.ding4.ProductGoods.prototype.setPrice = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional double weight = 13;
 * @return {number}
 */
proto.ding4.ProductGoods.prototype.getWeight = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 13, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ding4.ProductGoods} returns this
 */
proto.ding4.ProductGoods.prototype.setWeight = function(value) {
  return jspb.Message.setProto3FloatField(this, 13, value);
};


/**
 * optional double volume = 14;
 * @return {number}
 */
proto.ding4.ProductGoods.prototype.getVolume = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 14, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ding4.ProductGoods} returns this
 */
proto.ding4.ProductGoods.prototype.setVolume = function(value) {
  return jspb.Message.setProto3FloatField(this, 14, value);
};


/**
 * optional bool is_pickup = 15;
 * @return {boolean}
 */
proto.ding4.ProductGoods.prototype.getIsPickup = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 15, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ding4.ProductGoods} returns this
 */
proto.ding4.ProductGoods.prototype.setIsPickup = function(value) {
  return jspb.Message.setProto3BooleanField(this, 15, value);
};


/**
 * optional bool is_preorder = 16;
 * @return {boolean}
 */
proto.ding4.ProductGoods.prototype.getIsPreorder = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 16, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ding4.ProductGoods} returns this
 */
proto.ding4.ProductGoods.prototype.setIsPreorder = function(value) {
  return jspb.Message.setProto3BooleanField(this, 16, value);
};


/**
 * optional int32 stock = 17;
 * @return {number}
 */
proto.ding4.ProductGoods.prototype.getStock = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 17, 0));
};


/**
 * @param {number} value
 * @return {!proto.ding4.ProductGoods} returns this
 */
proto.ding4.ProductGoods.prototype.setStock = function(value) {
  return jspb.Message.setProto3IntField(this, 17, value);
};


/**
 * repeated ProductSpec specx = 18;
 * @return {!Array<!proto.ding4.ProductSpec>}
 */
proto.ding4.ProductGoods.prototype.getSpecxList = function() {
  return /** @type{!Array<!proto.ding4.ProductSpec>} */ (
    jspb.Message.getRepeatedWrapperField(this, product_pb.ProductSpec, 18));
};


/**
 * @param {!Array<!proto.ding4.ProductSpec>} value
 * @return {!proto.ding4.ProductGoods} returns this
*/
proto.ding4.ProductGoods.prototype.setSpecxList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 18, value);
};


/**
 * @param {!proto.ding4.ProductSpec=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ding4.ProductSpec}
 */
proto.ding4.ProductGoods.prototype.addSpecx = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 18, opt_value, proto.ding4.ProductSpec, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ding4.ProductGoods} returns this
 */
proto.ding4.ProductGoods.prototype.clearSpecxList = function() {
  return this.setSpecxList([]);
};


/**
 * repeated Image photox = 19;
 * @return {!Array<!proto.ding4.Image>}
 */
proto.ding4.ProductGoods.prototype.getPhotoxList = function() {
  return /** @type{!Array<!proto.ding4.Image>} */ (
    jspb.Message.getRepeatedWrapperField(this, a$submessage_pb.Image, 19));
};


/**
 * @param {!Array<!proto.ding4.Image>} value
 * @return {!proto.ding4.ProductGoods} returns this
*/
proto.ding4.ProductGoods.prototype.setPhotoxList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 19, value);
};


/**
 * @param {!proto.ding4.Image=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ding4.Image}
 */
proto.ding4.ProductGoods.prototype.addPhotox = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 19, opt_value, proto.ding4.Image, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ding4.ProductGoods} returns this
 */
proto.ding4.ProductGoods.prototype.clearPhotoxList = function() {
  return this.setPhotoxList([]);
};


/**
 * repeated ActivityGoods activity = 20;
 * @return {!Array<!proto.ding4.ActivityGoods>}
 */
proto.ding4.ProductGoods.prototype.getActivityList = function() {
  return /** @type{!Array<!proto.ding4.ActivityGoods>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ding4.ActivityGoods, 20));
};


/**
 * @param {!Array<!proto.ding4.ActivityGoods>} value
 * @return {!proto.ding4.ProductGoods} returns this
*/
proto.ding4.ProductGoods.prototype.setActivityList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 20, value);
};


/**
 * @param {!proto.ding4.ActivityGoods=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ding4.ActivityGoods}
 */
proto.ding4.ProductGoods.prototype.addActivity = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 20, opt_value, proto.ding4.ActivityGoods, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ding4.ProductGoods} returns this
 */
proto.ding4.ProductGoods.prototype.clearActivityList = function() {
  return this.setActivityList([]);
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
proto.ding4.ActivityGoods.prototype.toObject = function(opt_includeInstance) {
  return proto.ding4.ActivityGoods.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ding4.ActivityGoods} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ding4.ActivityGoods.toObject = function(includeInstance, msg) {
  var f, obj = {
    activityId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    sku: jspb.Message.getFieldWithDefault(msg, 2, ""),
    name: (f = msg.getName()) && google_protobuf_struct_pb.Value.toObject(includeInstance, f),
    reached: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    amount: jspb.Message.getFieldWithDefault(msg, 5, 0),
    discount: jspb.Message.getFieldWithDefault(msg, 6, 0),
    coupon: jspb.Message.getFieldWithDefault(msg, 7, 0),
    promote: jspb.Message.getFieldWithDefault(msg, 8, 0),
    rule: (f = msg.getRule()) && a$submessage_pb.Rule.toObject(includeInstance, f),
    now: (f = msg.getNow()) && a$submessage_pb.Rule.toObject(includeInstance, f)
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
 * @return {!proto.ding4.ActivityGoods}
 */
proto.ding4.ActivityGoods.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ding4.ActivityGoods;
  return proto.ding4.ActivityGoods.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ding4.ActivityGoods} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ding4.ActivityGoods}
 */
proto.ding4.ActivityGoods.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setActivityId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSku(value);
      break;
    case 3:
      var value = new google_protobuf_struct_pb.Value;
      reader.readMessage(value,google_protobuf_struct_pb.Value.deserializeBinaryFromReader);
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setReached(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAmount(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDiscount(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCoupon(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPromote(value);
      break;
    case 9:
      var value = new a$submessage_pb.Rule;
      reader.readMessage(value,a$submessage_pb.Rule.deserializeBinaryFromReader);
      msg.setRule(value);
      break;
    case 10:
      var value = new a$submessage_pb.Rule;
      reader.readMessage(value,a$submessage_pb.Rule.deserializeBinaryFromReader);
      msg.setNow(value);
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
proto.ding4.ActivityGoods.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ding4.ActivityGoods.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ding4.ActivityGoods} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ding4.ActivityGoods.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getActivityId();
  if (f.length > 0) {
    writer.writeString(
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
  f = message.getName();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_struct_pb.Value.serializeBinaryToWriter
    );
  }
  f = message.getReached();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getAmount();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getDiscount();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getCoupon();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getPromote();
  if (f !== 0) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = message.getRule();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      a$submessage_pb.Rule.serializeBinaryToWriter
    );
  }
  f = message.getNow();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      a$submessage_pb.Rule.serializeBinaryToWriter
    );
  }
};


/**
 * optional string activity_id = 1;
 * @return {string}
 */
proto.ding4.ActivityGoods.prototype.getActivityId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.ActivityGoods} returns this
 */
proto.ding4.ActivityGoods.prototype.setActivityId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string sku = 2;
 * @return {string}
 */
proto.ding4.ActivityGoods.prototype.getSku = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ding4.ActivityGoods} returns this
 */
proto.ding4.ActivityGoods.prototype.setSku = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Value name = 3;
 * @return {?proto.google.protobuf.Value}
 */
proto.ding4.ActivityGoods.prototype.getName = function() {
  return /** @type{?proto.google.protobuf.Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Value, 3));
};


/**
 * @param {?proto.google.protobuf.Value|undefined} value
 * @return {!proto.ding4.ActivityGoods} returns this
*/
proto.ding4.ActivityGoods.prototype.setName = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ding4.ActivityGoods} returns this
 */
proto.ding4.ActivityGoods.prototype.clearName = function() {
  return this.setName(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ding4.ActivityGoods.prototype.hasName = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool reached = 4;
 * @return {boolean}
 */
proto.ding4.ActivityGoods.prototype.getReached = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ding4.ActivityGoods} returns this
 */
proto.ding4.ActivityGoods.prototype.setReached = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional int32 amount = 5;
 * @return {number}
 */
proto.ding4.ActivityGoods.prototype.getAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.ding4.ActivityGoods} returns this
 */
proto.ding4.ActivityGoods.prototype.setAmount = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int32 discount = 6;
 * @return {number}
 */
proto.ding4.ActivityGoods.prototype.getDiscount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.ding4.ActivityGoods} returns this
 */
proto.ding4.ActivityGoods.prototype.setDiscount = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int32 coupon = 7;
 * @return {number}
 */
proto.ding4.ActivityGoods.prototype.getCoupon = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.ding4.ActivityGoods} returns this
 */
proto.ding4.ActivityGoods.prototype.setCoupon = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional int32 promote = 8;
 * @return {number}
 */
proto.ding4.ActivityGoods.prototype.getPromote = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.ding4.ActivityGoods} returns this
 */
proto.ding4.ActivityGoods.prototype.setPromote = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional Rule rule = 9;
 * @return {?proto.ding4.Rule}
 */
proto.ding4.ActivityGoods.prototype.getRule = function() {
  return /** @type{?proto.ding4.Rule} */ (
    jspb.Message.getWrapperField(this, a$submessage_pb.Rule, 9));
};


/**
 * @param {?proto.ding4.Rule|undefined} value
 * @return {!proto.ding4.ActivityGoods} returns this
*/
proto.ding4.ActivityGoods.prototype.setRule = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ding4.ActivityGoods} returns this
 */
proto.ding4.ActivityGoods.prototype.clearRule = function() {
  return this.setRule(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ding4.ActivityGoods.prototype.hasRule = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional Rule now = 10;
 * @return {?proto.ding4.Rule}
 */
proto.ding4.ActivityGoods.prototype.getNow = function() {
  return /** @type{?proto.ding4.Rule} */ (
    jspb.Message.getWrapperField(this, a$submessage_pb.Rule, 10));
};


/**
 * @param {?proto.ding4.Rule|undefined} value
 * @return {!proto.ding4.ActivityGoods} returns this
*/
proto.ding4.ActivityGoods.prototype.setNow = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ding4.ActivityGoods} returns this
 */
proto.ding4.ActivityGoods.prototype.clearNow = function() {
  return this.setNow(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ding4.ActivityGoods.prototype.hasNow = function() {
  return jspb.Message.getField(this, 10) != null;
};


goog.object.extend(exports, proto.ding4);
