// const { expect } = require('@jest/globals');

test('First letter is capitalized', () => {
  const str = 'Ben';
  const letter = str.charAt(0);
  expect(letter).toMatch(/^[A-Z]/);
});