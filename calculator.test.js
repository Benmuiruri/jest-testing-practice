// const { expect } = require('@jest/globals');
const { expect } = require('@jest/globals');
const Calculator = require('./calculator.js');

describe('Calculator addition tests', () => {
  const number = new Calculator(2, 2);
  test('Adds 2 + 2 to equal 4', () => {
    expect(number.add()).toBe(4);
  });
  test('Adds 2 + 2 to evaluate to a value', () => {
    expect(number).toBeTruthy();
  });
  test('Adds 2 + 2 to be less than 5', () => {
    expect(number.add()).toBeLessThan(5);
  });
});

describe('Calculator subtraction tests', () => {
  const number = new Calculator(5, 3);
  test('Subtract 5 - 2  to be equal 2', () => {
    expect(number.subtract()).toBe(2);
  });
  test('Subtract 5 - 2 to evaluate to a value', () => {
    expect(number).toBeTruthy();
  });
  test('Subtract 5 - 2 to be less than 5', () => {
    expect(number.subtract()).toBeLessThan(3);
  });
});

describe('Calculator Multiplication tests', () => {
  const number = new Calculator(4, 6);
  test('Multiply 4 * 6 to be equal 24', () => {
    expect(number.multiply()).toBe(24);
  });
  test('Multiply 4 * 6 to evaluate to a value', () => {
    expect(number).toBeTruthy();
  });
  test('Multiply 4 * 6 to be greater than 20', () => {
    expect(number.multiply()).toBeGreaterThan(20);
  });
});

describe('Calculator Division tests', () => {
  const number = new Calculator(3, 2);
  test('Divide 3 / 2 to be equal 4.5', () => {
    expect(number.divide()).toBeCloseTo(1.5);
  });
  test('Divide 3 / 2 to evaluate to a value', () => {
    expect(number).toBeTruthy();
  });
  test('Divide 3 / 2 to be greater than 2', () => {
    expect(number.divide()).toBeLessThan(2);
  });
});
