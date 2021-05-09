::businesspb

del "jspb/businesspb" /S /Q

protoc -I=a-b -I=a-b-c -I=b -I=b-c -I=rpc-service ^
 --js_out=import_style=commonjs,binary:./jspb/businesspb ^
 --grpc-web_out=import_style=typescript,mode=grpcweb:./jspb/businesspb ^
 a-b/*.proto a-b-c/*.proto b/*.proto b-c/*.proto ^
 rpc-service/business.rpc.proto ^
 rpc-service/store1.rpc.proto ^
 rpc-service/sales.rpc.proto ^