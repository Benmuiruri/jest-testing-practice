const capitalizeString = (str) => {
  if (!/^[A-Za-z]/.test(str.charAt(0))) {
    throw new Error('The first chatacter must be a alphabetic letter');
  }
  return str.charAt(0).toUpperCase();
}

module.exports = capitalizeString;
