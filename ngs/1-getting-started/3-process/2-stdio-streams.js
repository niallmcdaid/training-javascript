/*
This is essentially an echo function.
It listens for input and reads it in. It then writes that input back to the console.
*/
process.stdin.on('readable', () => {
  const chunk = process.stdin.read();
  if (chunk !== null) {
    process.stdout.write(chunk);
  }
});

// process.stdin.pipe(process.stdout) // this does the same as above