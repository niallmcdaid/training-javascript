const fs = require('fs').promises;

// Works exactly the same as 3-cb-nesting.js
// No nesting required, much more readable
async function main() {
  const data = await fs.readFile(__filename);
  await fs.writeFile(__filename + '.copy', data);
  // More awaits here...
}

main();
console.log('TEST');
