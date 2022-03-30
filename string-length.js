const stringLength = (string) => {
  if (string.length < 1 || string.length > 10) {
   throw new Error('Please enter a string that is 1 to 10 characters long');
  }
  return string.length;
};

module.exports = stringLength;
