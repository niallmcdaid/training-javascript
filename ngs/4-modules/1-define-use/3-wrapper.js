/*
A module in Node.js is treated as a function.
This means that this line WILL return something.
Running this file is treated like calling a function.
*/

/*
exports or module.exports - define the API of a module
require - to require other modules inside this one
__filename - path of this file
__dirname - path to the folder hosting this module
*/

// let g = 1 // hidden wrapper function is why g is not a global variable


// function (exports, module, require, __filename, --dirname) {

console.log(arguments);

// exports.a = 42; // to define module.exports as an object
// module.exports.b = 12; // to define module.exports as an object
// module.exports = () => {}; // to define module.exports (top level API) as a function
// return module.exports;
// }
