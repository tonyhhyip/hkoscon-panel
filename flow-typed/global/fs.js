//@flow
const fs = require('fs');
declare module 'fs' {
  declare var constants: {
    R_OK: number
  };
  declare var createReadStream: fs.createReadStream;
  declare var access: fs.access;
}