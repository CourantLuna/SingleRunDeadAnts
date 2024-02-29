/* Version 1. DeadAnts Counter from a string */
/* Heydi 1107303 - Juan Nelson Almonte 1113710*/

function countDeadAnts(input) {
    // Counts the occurrences of each relevant character: 'a', 'n', 't'
    let count = { a: 0, n: 0, t: 0 };
    for (let i = 0 ; i < input.length; i ++) {
      i + 2 < input.length && input[i] === 'a' &&  input [i +1] === 'n'&& input[i + 2] === 't' ? 
      i +=2 : 
      ['a','n','t'].includes(input[i]) ? count[input[i]]++ : null; 
    }
    return  Math.max(count.a, count.n, count.t);
  }
  // Example of usage
  const input = "antant...t...a...t";
  const deadAnts = countDeadAnts(input);
  console.log(`there are a total of ${deadAnts} ants dead`);; // Expected output according to the given input
  
  module.exports = countDeadAnts;
