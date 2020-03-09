### This

- Use proto's field-option.
  - An error occurs when an array is specified for filedOption
  - https://github.com/protocolbuffers/protobuf/blob/f130827371fc73ab6e24d44313af6577cc2f9d57/src/google/protobuf/descriptor.proto#L509

### Sample
- Fileld option is a error if array.
  - https://github.com/activeguild/use-proto-fieldoption/blob/1fd8294c8dc6ff7885f1fbe5365905dd9fd7e8d9/protos/sample_load_error.proto#L18

- Fileld option is no error is a no error if premitive property.
  - https://github.com/activeguild/use-proto-fieldoption/blob/1fd8294c8dc6ff7885f1fbe5365905dd9fd7e8d9/protos/sample_load_success.proto#L18
