/*
- 'require' funtion is used to manage dependencies
- 'http' module has features for creating web server
- 'http' is built in (no need to install)
*/
const http = require('http'); // for CommonJs modules (.js files)
// import http from 'http'; // for ECMAScript modules (.mjs files)


/*
- creates server constant using 'createServer' function in 'http' module
- listener function; listens for requests (req), sends back response (res)
- only creates server, does not activate it
*/
const server = http.createServer((req, res) => {
  res.end('Hello World\n');
});


/*
- 'listen' function activates the created server
- accepts many arguments such as what OS port to use (4242)
- the second arg here is function that's invoked once server is running on the given port
- go to a browser; "localhost:4242" to see result
*/
server.listen(4242, () => {
  console.log('Server is running...');
});

