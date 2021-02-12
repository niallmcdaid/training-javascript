setTimeout(() => process.exit(), 2000); // this line will execute second, triggering the exit process

/*
- 'exit' event: what will be done right before the program exits
*/
process.on('exit', () => {
  console.log('Process will exit now. See you later!');
});

console.log('Hello!'); // this line will execute first
