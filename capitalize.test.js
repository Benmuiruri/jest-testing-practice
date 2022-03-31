const capitalizeString = require('./capitalize.js');

describe('First character in String is a letter and is capitalized', () => {
  test('First character is capitalized', () => {
    const testStr = capitalizeString('ben');
    const letter = testStr.charAt(0);
    expect(letter).toMatch(/[A-Z]/);
  });

  test('First character is a letter', () => {
    const testStr = capitalizeString('ben');
    const letter = testStr.charAt(0);
    expect(letter).toMatch(/[A-Z][a-z]/);
  });
});
