// Test
const countDeadAnts = require('./deadAnts');

describe('countDeadAnts', () => {
  it('should return 0 for input without dead ants', () => {
    const input = 'ant ant ant ant';
    const result = countDeadAnts(input);
    expect(result).toBe(0);
  });

  it('should correctly count dead ants for given input', () => {
    const input = '...ant...ant..nat.ant.t..ant...ant..ant..ant.anant..t';
    const result = countDeadAnts(input);
    expect(result).toBe(3); // This is the expected output for the given input
  });

  it('should handle empty input', () => {
    const input = '';
    const result = countDeadAnts(input);
    expect(result).toBe(0);
  });

});
