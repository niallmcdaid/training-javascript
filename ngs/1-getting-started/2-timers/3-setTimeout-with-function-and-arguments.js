/*
'rocks' funtion accepts a 'who' arg
*/
const rocks = who => {
  console.log(who + ' rocks');
};

setTimeout(rocks, 2 * 1000, 'Pluralsight');
