const palindromes = function (str) {
  let original = str.split('');
  let originalLettersOnly = original.filter( char => 
    char !== '!' || char !== ',' || char !== '.');
  let reverse = originalLettersOnly.reverse();
  
  for (let i = 0; i < originalLettersOnly.length - 1; i++) {
    if (originalLettersOnly[i] !== reverse[i]) return false;
  };

  return true;
};

// Do not edit below this line
module.exports = palindromes;
