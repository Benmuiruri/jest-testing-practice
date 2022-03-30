// const { expect } = require('@jest/globals');
const capitalizeString = require('./capitalize.js');

test('First letter is capitalized', () => {
  const testStr = capitalizeString('ben');
  const letter = testStr.charAt(0);
  expect(letter).toMatch(/^[A-Z]/);
});