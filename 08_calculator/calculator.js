const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	return arr.reduce( (sum, current) => sum + current, 0); 
};

const multiply = function(arr) {
  return arr.reduce( (product, current) => product * current, 1);
};

const power = function(base, power) {
	return base ** power;
};

const factorial = function(num) {
  if (num === 0) return 1;

  let product = num;
  for (let i = 1; i < num; i++) {
    product = product * (num - i);
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
