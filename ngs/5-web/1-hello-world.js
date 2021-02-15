const http = require('http'); // require(...) returns the API of the module we're requiring

/*
createServer(...) is a function that takes an arg
the arg it accepts is also a function
createServer function is a higher-order function as it receives a function as an arg
*/

const server = http.createServer((req, res) => {
  // req and res and readable and writable streams (i.e. event emitters) respectively
  // can handle req object in here however necessary
  res.end('Hello World\n'); // res object used to write data back to user, .end() is always required
});

/*
// Equivalent to above:

// requestListener is invoked every time a request is passed
const requestListener = (req, res) => {
  res.end('Hello World\n');
};

const server = http.createServer(requestListener);
*/


/*
arg1 - OS port on which server listens for requests
arg2 - callback invoked if server starts listening

.listen() method is asynchronous
*/
server.listen(4242, () => {
  console.log('Server is running...');
});
