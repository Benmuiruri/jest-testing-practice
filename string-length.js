const stringLength = (str) => {
  if (str.length < 1 || str.length > 10) {
   throw new Error('Please enter a string that is 1 to 10 characters long');
  }
  return str.length;
};

module.exports = stringLength;
