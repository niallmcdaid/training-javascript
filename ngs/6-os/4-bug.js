/*
This file has a bug in it.
Run with 'node --inspect-brk 4-bug.js' to start debugger.
Go to 'chrome://inspect' in Chrome browser.
Node process should be visible - you can use Chrome dev tools to debug.
*/


function convertArrayToObject(arr) {
  return arr.reduce((curr, acc) => { // the bug is on this line - args are in wrong order
    acc[curr[0]] = curr[1];
    return acc;
  }, {});
}

const obj = convertArrayToObject([
  [1, 'One'],
  [2, 'Two'],
  [3, 'Three'],
  [4, 'Four'],
  [5, 'Five'],
]);

console.log(obj);
/* Should output:

  {
    1: 'One',
    2: 'Two',
    3: 'Three'
    4: 'Four',
    5: 'Five'
  }

*/
