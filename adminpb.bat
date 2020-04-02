::adminpb
protoc -I=a -I=a-b -I=a-b-c -I=rpc-service^
 --js_out=import_style=commonjs,binary:./jspb/adminpb ^
 --grpc-web_out=import_style=typescript,mode=grpcweb:./jspb/adminpb ^
 a/*.proto a-b/*.proto a-b-c/*.proto ^
 rpc-service/admin.rpc.proto