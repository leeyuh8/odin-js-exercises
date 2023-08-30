const fibonacci = function(n) {
  if (n < 0) return 'OOPS';

  let arr = [1,1];
  for (let i = 2; i <= n - 1; i++) {
    arr[i] = arr[i-2] + arr[i-1];
  };
  return arr[arr.length - 1];
};

module.exports = fibonacci;
