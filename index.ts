import * as protoLoader from '@grpc/proto-loader';
import * as grpcLibrary from 'grpc';

const protoFileNames = [
  './protos/sample_load_success.proto',
  './protos/sample_load_error.proto',
];
const options: protoLoader.Options = {};

protoFileNames.forEach(protoFileName => {
  protoLoader.load(protoFileName, options).then(packageDefinition => {
    const packageObject = grpcLibrary.loadPackageDefinition(packageDefinition);
    console.log(packageObject);
  });
});
