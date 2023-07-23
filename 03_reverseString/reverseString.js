/*
-Split each character into the input string into an array.
-write loop that creates a new string from the array by
concatenating from the last to first element.
-return string.
*/

const reverseString = function(input) {
    let string = input.split("");
    let stringReversed = "";
    for (let i = 0; i <= string.length - 1; i++) {
        stringReversed = string[i] + stringReversed;
    };
    return stringReversed;
};

// Do not edit below this line
module.exports = reverseString;
