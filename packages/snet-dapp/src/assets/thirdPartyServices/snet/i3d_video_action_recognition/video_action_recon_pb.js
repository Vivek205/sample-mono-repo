/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/*eslint-disable */

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('snet_i3d_video_action_recognition.Input', null, global);
goog.exportSymbol('snet_i3d_video_action_recognition.Output', null, global);

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
snet_i3d_video_action_recognition.Input = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(snet_i3d_video_action_recognition.Input, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  snet_i3d_video_action_recognition.Input.displayName = 'snet_i3d_video_action_recognition.Input';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
snet_i3d_video_action_recognition.Input.prototype.toObject = function(opt_includeInstance) {
  return snet_i3d_video_action_recognition.Input.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!snet_i3d_video_action_recognition.Input} msg The msg instance to transform.
 * @return {!Object}
 */
snet_i3d_video_action_recognition.Input.toObject = function(includeInstance, msg) {
  var f, obj = {
    model: msg.getModel(),
    url: msg.getUrl()
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
 * @return {!snet_i3d_video_action_recognition.Input}
 */
snet_i3d_video_action_recognition.Input.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new snet_i3d_video_action_recognition.Input;
  return snet_i3d_video_action_recognition.Input.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!snet_i3d_video_action_recognition.Input} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!snet_i3d_video_action_recognition.Input}
 */
snet_i3d_video_action_recognition.Input.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setModel(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!snet_i3d_video_action_recognition.Input} message
 * @param {!jspb.BinaryWriter} writer
 */
snet_i3d_video_action_recognition.Input.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
snet_i3d_video_action_recognition.Input.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
snet_i3d_video_action_recognition.Input.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getModel();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getUrl();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!snet_i3d_video_action_recognition.Input} The clone.
 */
snet_i3d_video_action_recognition.Input.prototype.cloneMessage = function() {
  return /** @type {!snet_i3d_video_action_recognition.Input} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string model = 1;
 * @return {string}
 */
snet_i3d_video_action_recognition.Input.prototype.getModel = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/** @param {string} value  */
snet_i3d_video_action_recognition.Input.prototype.setModel = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string url = 2;
 * @return {string}
 */
snet_i3d_video_action_recognition.Input.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 2, ""));
};


/** @param {string} value  */
snet_i3d_video_action_recognition.Input.prototype.setUrl = function(value) {
  jspb.Message.setField(this, 2, value);
};



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
snet_i3d_video_action_recognition.Output = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(snet_i3d_video_action_recognition.Output, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  snet_i3d_video_action_recognition.Output.displayName = 'snet_i3d_video_action_recognition.Output';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
snet_i3d_video_action_recognition.Output.prototype.toObject = function(opt_includeInstance) {
  return snet_i3d_video_action_recognition.Output.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!snet_i3d_video_action_recognition.Output} msg The msg instance to transform.
 * @return {!Object}
 */
snet_i3d_video_action_recognition.Output.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: msg.getValue()
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
 * @return {!snet_i3d_video_action_recognition.Output}
 */
snet_i3d_video_action_recognition.Output.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new snet_i3d_video_action_recognition.Output;
  return snet_i3d_video_action_recognition.Output.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!snet_i3d_video_action_recognition.Output} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!snet_i3d_video_action_recognition.Output}
 */
snet_i3d_video_action_recognition.Output.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!snet_i3d_video_action_recognition.Output} message
 * @param {!jspb.BinaryWriter} writer
 */
snet_i3d_video_action_recognition.Output.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
snet_i3d_video_action_recognition.Output.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
snet_i3d_video_action_recognition.Output.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getValue();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!snet_i3d_video_action_recognition.Output} The clone.
 */
snet_i3d_video_action_recognition.Output.prototype.cloneMessage = function() {
  return /** @type {!snet_i3d_video_action_recognition.Output} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string value = 1;
 * @return {string}
 */
snet_i3d_video_action_recognition.Output.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/** @param {string} value  */
snet_i3d_video_action_recognition.Output.prototype.setValue = function(value) {
  jspb.Message.setField(this, 1, value);
};


goog.object.extend(exports, snet_i3d_video_action_recognition);
