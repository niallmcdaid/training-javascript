setTimeout(
  () => console.log('Hello after 0.5 seconds. MAYBE!'),
  500, // this is a minimum delay, may take longer
);

for (let i = 0; i < 1e10; i++) {
  // Block Node Synchronously
}
