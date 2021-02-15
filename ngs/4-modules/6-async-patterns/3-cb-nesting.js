const fs = require('fs');

// Asynchronous functions have to be nested, not ideal but necessary
fs.readFile(__filename, function cb1(err, data) {
  fs.writeFile(__filename + '.copy', data, function cb2(err) {
    // Nest more callbacks here...
  });
});

console.log('TEST');
