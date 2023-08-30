const palindromes = function (str) {
  let original = str.toLowerCase().split('');
  let originalLettersOnly = original.filter( x => {
    return x !== '!' && x !== ',' && x !== '.' 
    && x !==' '
  });
  let reverse = originalLettersOnly.slice(0).reverse();
  
  for (let i = 0; i < originalLettersOnly.length - 1; i++) {
    if (originalLettersOnly[i] !== reverse[i]) return false;
  };

  return true;
};

// Do not edit below this line
module.exports = palindromes;
