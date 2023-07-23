/* 
-find the index of where numToRemove is in the array
-use splice to remove that number by its index
-return new array

update take multiple numToRemove arguments:
- *arguments can be treated like arrays
   (it has indexes and uses the .length method)*
- convert previous code to for loop that runs
the code for each numToRemove
*/

const removeFromArray = function(array, num) {
    let index = array.indexOf(num);
    array.splice(index, 1);
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
