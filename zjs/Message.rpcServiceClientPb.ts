/**
 * @fileoverview gRPC-Web generated client stub for ding4
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as message$letter_pb from './message-letter_pb';
import * as message$edm_pb from './message-edm_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';

export class MessageRPCClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: string; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'binary';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoSendSMS = new grpcWeb.AbstractClientBase.MethodInfo(
    message$letter_pb.LetterResult,
    (request: message$letter_pb.Letter) => {
      return request.serializeBinary();
    },
    message$letter_pb.LetterResult.deserializeBinary
  );

  sendSMS(
    request: message$letter_pb.Letter,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: message$letter_pb.LetterResult) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.MessageRPC/SendSMS',
      request,
      metadata || {},
      this.methodInfoSendSMS,
      callback);
  }

  methodInfoCancelSMS = new grpcWeb.AbstractClientBase.MethodInfo(
    message$letter_pb.LetterUndo,
    (request: message$letter_pb.LetterResult) => {
      return request.serializeBinary();
    },
    message$letter_pb.LetterUndo.deserializeBinary
  );

  cancelSMS(
    request: message$letter_pb.LetterResult,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: message$letter_pb.LetterUndo) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.MessageRPC/CancelSMS',
      request,
      metadata || {},
      this.methodInfoCancelSMS,
      callback);
  }

  methodInfoSendEmail = new grpcWeb.AbstractClientBase.MethodInfo(
    message$edm_pb.EmailResult,
    (request: message$edm_pb.Email) => {
      return request.serializeBinary();
    },
    message$edm_pb.EmailResult.deserializeBinary
  );

  sendEmail(
    request: message$edm_pb.Email,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: message$edm_pb.EmailResult) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.MessageRPC/SendEmail',
      request,
      metadata || {},
      this.methodInfoSendEmail,
      callback);
  }

  methodInfoCancelEmail = new grpcWeb.AbstractClientBase.MethodInfo(
    message$edm_pb.EmailResult,
    (request: message$edm_pb.Email) => {
      return request.serializeBinary();
    },
    message$edm_pb.EmailResult.deserializeBinary
  );

  cancelEmail(
    request: message$edm_pb.Email,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: message$edm_pb.EmailResult) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.MessageRPC/CancelEmail',
      request,
      metadata || {},
      this.methodInfoCancelEmail,
      callback);
  }

  methodInfoNow = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_wrappers_pb.StringValue,
    (request: google_protobuf_wrappers_pb.StringValue) => {
      return request.serializeBinary();
    },
    google_protobuf_wrappers_pb.StringValue.deserializeBinary
  );

  now(
    request: google_protobuf_wrappers_pb.StringValue,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/ding4.MessageRPC/Now',
      request,
      metadata || {},
      this.methodInfoNow);
  }

}

