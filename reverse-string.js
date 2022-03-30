const reverseString = (str) => {
  const splitStr = str.split('');
  const reverseArr = splitStr.reverse();
  const joinArr = reverseArr.join('');

  return joinArr;
};

module.exports = reverseString;

