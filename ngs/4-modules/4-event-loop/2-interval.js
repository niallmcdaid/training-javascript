/*
Event loop - monitor asynchronous ops that need to be run and figure out when to run them

Here it monitors setInterval timer. Every 5 secs it will send the arrow function (first arg) to V8.
*/

setInterval(() => {
  console.log('Hello Event Loop!!');
}, 5000);
