/* Version 1. DeadAnts Counter from a string */
/* Heydi 1107303 - Juan Nelson Almonte 1113710*/

// version varias corridas string
function countDeadAnts(input) {
  const remains = input.replace(/ant/g, '');
  const count = { a: 0, n: 0, t: 0 };
  for (const character of remains) {
      if (count.hasOwnProperty(character)) {
          count[character]++;
      }
  }
  const maxDeadAnts = Math.max(count.a, count.n, count.t);
  return maxDeadAnts;
}

// Version optimizada de 1 corrida string
function countDeadAntsOpt(input) {
    // Counts the occurrences of each relevant character: 'a', 'n', 't'
    const count = { a: 0, n: 0, t: 0 };
    for (let i = 0; i < input.length; i++) {
        if (i + 2 < input.length && input[i] === 'a' && input[i + 1] === 'n' && input[i + 2] === 't') {
            i += 2; // Omitimos 'n' y 't'
        } else if (['a', 'n', 't'].includes(input[i])) {
            count[input[i]]++;
        }
    }
    return Math.max(count.a, count.n, count.t);
  }

// Ahora puedes usar las funciones importadas
const input = "...ant...ant..nat.ant.t..ant...ant..ant..ant.anant..t";
console.log(countDeadAnts(input)); // Usando la primera función
console.log(countDeadAntsOpt(input)); // Usando la función optimizada
  
  // Exportando las funciones
  module.exports = { countDeadAnts, countDeadAntsOpt };

