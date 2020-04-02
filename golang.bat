::golang
protoc -I=a -I=a-b -I=a-b-c -I=b -I=b-c -I=c ^
 --go_out=plugins=grpc:C:\_workspace ^
 a/*.proto a-b/*.proto a-b-c/*.proto ^
 b/*.proto b-c/*.proto ^
 c/*.proto

protoc -I=a -I=a-b -I=a-b-c -I=b -I=b-c -I=c -I=rpc-service ^
 --go_out=plugins=grpc:C:\_workspace ^
 rpc-service/*.proto