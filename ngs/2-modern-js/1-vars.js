/*
Variables defined inside block scope (as 'var') leak out to also be available outside that scope.
This is NOT the case when using 'let' (or 'const') to define variables. This is much better!
*/

{
  // Block Scope
}

if (true) {
  // Block Scope
}

for (var i = 1; i <= 10; i++) {
  // Block Scope
  // After this for loop, i (which will be = 11) is essentially a global variable.
}

function sum(a, b) {
  // Function Scope
  // a and b will be undefined outside of the scope of this function
  var result = a + b;
}

sum(4 + 3);
