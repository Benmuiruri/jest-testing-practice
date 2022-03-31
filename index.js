// Task 1

const stringLength = (str) => {
  if (str.length < 1 || str.length > 10) {
    throw new Error('Please enter a string that is 1 to 10 characters long');
  }
  return str.length;
};

// Task 2

const reverseString = (str) => {
  const splitStr = str.split('').reverse().join('');
  return splitStr;
};

// Task 3
class Calculator {
  constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
  }
  add() {
    return this.num1 + this.num2;
  }

  subtract() {
    return this.num1 - this.num2;
  }

  multiply() {
    return this.num1 * this.num2;
  }

  divide() {
    return this.num1 / this.num2;
  }
}

// Task 4 
const capitalizeString = (str) => {
  if (!/^[A-Za-z]/.test(str.charAt(0))) {
    throw new Error('The first chatacter must be a alphabetic letter');
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export { stringLength, reverseString, Calculator, capitalizeString };
