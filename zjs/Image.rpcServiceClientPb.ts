/**
 * @fileoverview gRPC-Web generated client stub for ding4
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as sql_pb from './sql_pb';
import * as image_pb from './image_pb';

export class ImageRPCClient {
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

  methodInfoCreateImage = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: image_pb.Image) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  createImage(
    request: image_pb.Image,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.ImageRPC/CreateImage',
      request,
      metadata || {},
      this.methodInfoCreateImage,
      callback);
  }

  methodInfoUpdateImage = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: image_pb.Image) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  updateImage(
    request: image_pb.Image,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.ImageRPC/UpdateImage',
      request,
      metadata || {},
      this.methodInfoUpdateImage,
      callback);
  }

  methodInfoDeleteImage = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: image_pb.Image) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  deleteImage(
    request: image_pb.Image,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.ImageRPC/DeleteImage',
      request,
      metadata || {},
      this.methodInfoDeleteImage,
      callback);
  }

  methodInfoFindImage = new grpcWeb.AbstractClientBase.MethodInfo(
    sql_pb.Response,
    (request: sql_pb.Query) => {
      return request.serializeBinary();
    },
    sql_pb.Response.deserializeBinary
  );

  findImage(
    request: sql_pb.Query,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: sql_pb.Response) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/ding4.ImageRPC/FindImage',
      request,
      metadata || {},
      this.methodInfoFindImage,
      callback);
  }

}

