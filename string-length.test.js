const stringLength = require('./string-length.js');
const testStr = stringLength('ben');
test('Correctly test string length', () => {
  expect(testStr).toBe(3);
});

test('String length should be larger than 1', () => {
  expect(testStr).toBeGreaterThan(1);
});

test('String length should be smaller than 10', () => {
  expect(testStr).toBeLessThan(10);
});