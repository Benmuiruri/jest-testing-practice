const stringLength = require('./string-length.js');
const testString = 'ben';
test('Correctly test string length', () => {
  expect(stringLength(testString)).toBe(3);
});

test('Expect string length to be larger than 1', () => {
  expect(stringLength(testString)).toBeGreaterThan(1);
});

test('Expect string length to be smaller than 10', () => {
  expect(stringLength(testString)).toBeLessThan(10);
});