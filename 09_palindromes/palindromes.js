const palindromes = function (str) {
  let original = str.split('');
  let reverse = original.reverse();
  
  for (let i = 0; i < original.length - 1; i++) {
    if (original[i] !== reverse[i]) return false;
  };

  return true;
};

// Do not edit below this line
module.exports = palindromes;
