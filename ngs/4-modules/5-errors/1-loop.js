const path = require('path');
const fs = require('fs');

const files = ['.bash_profile', '.npmrc'];

files.forEach(file => {
  const filePath = path.resolve(process.env.HOME, file);
  const data = fs.readFileSync(filePath); // read files synchronously
  console.log('File data is', data);
});
