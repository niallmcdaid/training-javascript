/*
This is how to pass a dynamic number of args to a function and then access them.
*/
function dynamicArgsFunction() {
  console.log(arguments);
}

dynamicArgsFunction(3, 7, 5, 4);
