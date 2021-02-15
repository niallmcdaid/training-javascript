const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile); // create new version of readFile, one that doesn't need a callback

async function main() {
  const data = await readFile(__filename);
  console.log('File data is', data);
}

main();

console.log('TEST');
