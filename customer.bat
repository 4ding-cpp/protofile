::customerpb
protoc -I=a-b-c -I=b-c -I=c -I=rpc-service ^
 --js_out=import_style=commonjs,binary:./jspb/shoppb ^
 --grpc-web_out=import_style=typescript,mode=grpcweb:./jspb/shoppb ^
 a-b-c/*.proto b-c/*.proto c/*.proto ^
 rpc-service/shop.rpc.proto