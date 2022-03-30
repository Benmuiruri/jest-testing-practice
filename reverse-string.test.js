const reverseString = require('./reverse-string.js');

const testStr = reverseString('ben');
const reverseStr = 'neb';

test('Reverses a string', () => {
  expect(testStr).toBe(reverseStr);
});
