/* 
-find the index of where numToRemove is in the array
-use splice to remove that number by its index
-return new array

For test 2:
- *arguments can be treated like arrays
   (it has indexes and uses the .length method)*
- convert previous code to for loop that runs
the code for each numToRemove

For test 3:
- for each value-to-be-removed, check to see if it
is in the array:
    -if yes, run previous code.
    -if no, continue to next value without running code.
*/

const removeFromArray = function(array) {
    for (let i = 1; i < arguments.length; i++) {
        if (array.includes(arguments[i]) === false) continue; 
        let index = array.indexOf(arguments[i]);
        array.splice(index, 1);
    };
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
