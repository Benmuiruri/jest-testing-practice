const reverseString = require('./reverse-string.js');

const testStr = 'ben';
const reverseStr = 'neb';

test('Reverses a string', () => {
  expect(reverseString(testStr)).toBe(reverseStr);
});
