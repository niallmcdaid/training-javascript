/*
- setImmediate is alternative function to do same thing here (time is 0)
- does NOT mean execute right away, actually means "execute once everything else in script is done"
*/
const timerId = setTimeout(
  () => console.log('You will not see this one!'),
  0
);

/*
- this will be executed before the setTimeout has run so nothing is printed
*/
clearTimeout(timerId);
// clearInterval
// clearImmediate
