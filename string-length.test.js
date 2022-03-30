const stringLength = require('./string-length.js');
const testStr = 'ben';
test('Correctly test string length', () => {
  expect(stringLength(testStr)).toBe(3);
});

test('String length should be larger than 1', () => {
  expect(stringLength(testStr)).toBeGreaterThan(1);
});

test('String length should be smaller than 10', () => {
  expect(stringLength(testStr)).toBeLessThan(10);
});