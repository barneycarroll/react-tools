import sum from '../__utils__/sum.js';

test('sum two numbers', () => {
    const result = sum(1, 2);
    expect(result).toBe(3);
});
