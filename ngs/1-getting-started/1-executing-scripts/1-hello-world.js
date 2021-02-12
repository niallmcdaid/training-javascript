/*
- 'require' funtion is used to manage dependencies
- 'http' module has features for creating web server
- 'http' is built in (no need to install)
*/
const http = require('http');


/*

*/
const server = http.createServer((req, res) => {
  res.end('Hello World\n');
});

server.listen(4242, () => {
  console.log('Server is running...');
});
