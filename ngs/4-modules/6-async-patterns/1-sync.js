// Everything here is synchronous:
// - "File data is ..." will print before "TEST"

const fs = require('fs');

const data = fs.readFileSync(__filename); // synchronous method used - readFileSync(...)

console.log('File data is', data);

console.log('TEST');
