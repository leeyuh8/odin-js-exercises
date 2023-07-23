/*
- write a for loop where:
    - i starts at the start value
    - i stops at the end value
    - code adds the current i value to the finalSum variable

Updates for test 3:
    - store argument as an array
    - rearrange argument array from smallest to largest
    and store in variable sortedArray
    - i should reference element in ascendingArray

Updates for test 4:
    - nest all code in an if statement
    - if statement checks for negative numbers in arguments:
        - if true, return ERROR
        - if false, run nested code
*/

const sumAll = function() {
    let array = Array.from(arguments);
    let sortedArray = array.sort();

    if (sortedArray.some(x => x < 0)) {
        return 'ERROR';
    } else {
        let finalSum = 0;
        for (let i = sortedArray[0]; i <= sortedArray[sortedArray.length-1]; i++) {
            finalSum += i;
        }
        return finalSum;
    }
};

// Do not edit below this line
module.exports = sumAll;
