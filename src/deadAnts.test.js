//test performance comparison

const { countDeadAnts, countDeadAntsOpt } = require('./deadAnts');
const { performance } = require('perf_hooks');

describe('Performance comparison between countDeadAnts and countDeadAntsOpt', () => {
    test('countDeadAntsOpt should be faster than countDeadAnts', () => {
      const input = "...ant...ant..nat.ant.t..ant...ant..ant..ant.anant..t".repeat(10000);
      
      // Medir el tiempo de countDeadAnts
      const startTime1 = performance.now();
      countDeadAnts(input);
      const endTime1 = performance.now();
      const duration1 = endTime1 - startTime1;
      
      // Medir el tiempo de countDeadAntsOpt
      const startTime2 = performance.now();
      countDeadAntsOpt(input);
      const endTime2 = performance.now();
      const duration2 = endTime2 - startTime2;
  
      // Verificar que countDeadAntsOpt es más rápido
      expect(duration1).toBeLessThan(duration2);
    });
  });

/*describe('Dead Ants Counter - Version 0', () => {
test('TC1: Empty String Input', () => {
expect(countDeadAnts("")).toBe(0);
});

test('TC2: No Dead Ants', () => {
expect(countDeadAnts("antantant")).toBe(0);
});

test('TC3: Individual Characters', () => {
expect(countDeadAnts("aantnntt")).toBe(2);
});

test('TC4: Mixed Characters Without "ant"', () => {
expect(countDeadAnts("xyzatn")).toBe(1);
});

test('TC5: Complex String with Dead Ants', () => {
expect(countDeadAnts("anantt...a..n.t")).toBe(2);
});

test('TC6: Performance for Large Input String', () => {
const largeInput = "a".repeat(10000) + "n".repeat(10000) + "t".repeat(10000);
const startTime = performance.now();
const output = countDeadAnts(largeInput);
const endTime = performance.now();
expect(output).toBe(10000);
expect(endTime - startTime).toBeLessThan(1000); // Ensure the test completes within 1 second
});
}); */