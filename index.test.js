const tests = require('./index');

// Test 1
describe('String Length', () => {
  const testStr = tests.stringLength('ben');
  test('should print string length', () => {
    expect(testStr).toBe(3);
  });

  test('string length should be larger than 1', () => {
    expect(testStr).toBeGreaterThan(1);
  });

  test('string length should be smaller than 10', () => {
    expect(testStr).toBeLessThan(10);
  });
});

// Test 2
describe('Test Reverse String', () => {
  const testStr = tests.reverseString('ben');
  const reverseStr = 'neb';

  test('should reverse a string', () => {
    expect(testStr).toBe(reverseStr);
  });
});

// Test 3
describe('Calculator addition tests', () => {
  const number = tests.calculator.add(2, 2);
  test('Adds 2 + 2 to equal 4', () => {
    expect(number).toBe(4);
  });
  test('Adds 2 + 2 to evaluate to a value', () => {
    expect(number).toBeTruthy();
  });
  test('Adds 2 + 2 to be less than 5', () => {
    expect(number).toBeLessThan(5);
  });
});

describe('Calculator subtraction tests', () => {
  const number = tests.calculator.subtract(5, 3);
  test('Subtract 5 - 2  to be equal 2', () => {
    expect(number).toBe(2);
  });
  test('Subtract 5 - 2 to evaluate to a value', () => {
    expect(number).toBeTruthy();
  });
  test('Subtract 5 - 2 to be less than 5', () => {
    expect(number).toBeLessThan(3);
  });
});

describe('Calculator Multiplication tests', () => {
  const number = tests.calculator.multiply(4, 6);
  test('Multiply 4 * 6 to be equal 24', () => {
    expect(number).toBe(24);
  });
  test('Multiply 4 * 6 to evaluate to a value', () => {
    expect(number).toBeTruthy();
  });
  test('Multiply 4 * 6 to be greater than 20', () => {
    expect(number).toBeGreaterThan(20);
  });
});

describe('Calculator Division tests', () => {
  const number = tests.calculator.divide(3, 2);
  test('Divide 3 / 2 to be equal 4.5', () => {
    expect(number).toBeCloseTo(1.5);
  });
  test('Divide 3 / 2 to evaluate to a value', () => {
    expect(number).toBeTruthy();
  });
  test('Divide 3 / 2 to be greater than 2', () => {
    expect(number).toBeLessThan(2);
  });
});

// Test 4
describe('First character in String is a letter and is capitalized', () => {
  test('First character should be capitalized', () => {
    const testStr = tests.capitalizeString('ben');
    const letter = testStr.charAt(0);
    expect(letter).toMatch(/[A-Z]/);
  });

  test('First character should be a letter', () => {
    const testStr = tests.capitalizeString('ben');
    const letter = testStr.charAt(0);
    expect(letter).toMatch(/^[A-Za-z]/);
  });
});
