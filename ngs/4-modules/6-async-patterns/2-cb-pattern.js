const fs = require('fs');

// asynrchronous method used - readFile(...)
fs.readFile(__filename, function cb(err, data) {
  console.log('File data is', data);
});

console.log('TEST');
