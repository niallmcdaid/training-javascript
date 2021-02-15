/*
For express servers a listener is defined for every URL we want to support
*/

const express = require('express'); // express variable returned is a function

const server = express(); // call the express function


server.get('/', (req, res) => {
  res.send('Hello, this is the root URL.');
})

server.get('/about', (req, res) => {
  res.send('About this page...');
})

server.listen(4242, () => {
  console.log('Express Server is running...');
});
