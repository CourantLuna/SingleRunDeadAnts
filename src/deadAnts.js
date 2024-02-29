/* Version 1. DeadAnts Counter from a string */
/* Heydi 1107303 - Juan Nelson Almonte 1113710*/

function countDeadAnts(input) {
    // Removes all occurrences of "ant" to leave only the remains that could be dead ants
    const remains = input.replace(/ant/g, '');
    
    // Counts the occurrences of each relevant character: 'a', 'n', 't'
    let count = { a: 0, n: 0, t: 0 };
    for (const character of remains) {
      if (count.hasOwnProperty(character)) {
        count[character]++;
      }
    }
    
    // Finds the maximum number of occurrences among 'a', 'n', and 't'
    const maxDeadAnts = Math.max(count.a, count.n, count.t);

    return maxDeadAnts;
  }
  // Example of usage
  const input = "...ant...ant..nat.ant.t..ant...ant..ant..ant.anant..t";
  const deadAnts = countDeadAnts(input);
  console.log(`there are a total of ${deadAnts} ants dead`);; // Expected output according to the given input
  
  module.exports = countDeadAnts;
