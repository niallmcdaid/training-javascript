const square = (a) => {
  return a * a;
};

// Identical alternatives:
// const square = (a) => a * a;
// const square = a => a * a;

[1, 2, 3, 4].map(a => a * a); // passing a function as an argument is concise
