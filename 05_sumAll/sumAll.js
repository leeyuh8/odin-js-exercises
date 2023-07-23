/*
- write a for loop where:
    - i starts at the start value
    - i stops at the end value
    - code adds the current i value to the finalSum variable

Updates for test 3:
    - treat argument as array
    - rearrange argument array from smallest to largest
    and store in variable sortedArray
    - i should reference element in ascendingArray
*/

const sumAll = function() {
    let finalSum = 0;
    let array = Array.from(arguments);
    let sortedArray = array.sort();
    for (let i = sortedArray[0]; i <= sortedArray[sortedArray.length-1]; i++) {
        finalSum += i;
    }
    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
