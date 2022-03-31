module.exports = {};

// Task 1

module.exports.stringLength = (str) => {
  if (str.length < 1 || str.length > 10) {
    throw new Error('Please enter a string that is 1 to 10 characters long');
  }
  return str.length;
};

// Task 2

module.exports.reverseString = (str) => {
  const splitStr = str.split('').reverse().join('');
  return splitStr;
};

// Task 3
module.exports.calculator = {
  add(a, b) {
    return a + b;
  },

  subtract(a, b) {
    return a - b;
  },

  multiply(a, b) {
    return a * b;
  },

  divide(a, b) {
    return a / b;
  }
}

// Task 4 
module.exports.capitalizeString = (str) => {
  if (!/^[A-Za-z]/.test(str.charAt(0))) {
    throw new Error('The first chatacter must be a alphabetic letter');
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}
