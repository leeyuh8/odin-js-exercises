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

Update for test 5:
    - problem: if condition checking for negative numbers is reading
    number strings like "90" as numbers when I only want 
    to test elements that have the number type.
    - at top, create arrayNumbers that contains only
    elements that have the number type. Then, update if
    condition checking for negative numbers to reference that
    array. 

Update for test 6:
    - add to if condition a check on the original array
    for elements with the type object. If true, return ERROR
*/

const sumAll = function() {
    let array = Array.from(arguments);
    let arrayNumbers = array.filter(
        x => typeof x === 'number'
    );

    if (arrayNumbers.some(x => x < 0) 
    || array.some(x => typeof x === "string")
    || array.some(x => typeof x === "object")) {
        return 'ERROR';
    } else {
        let finalSum = 0;
        let sortedArray = array.sort();
        for (let i = sortedArray[0]; i <= sortedArray[sortedArray.length-1]; i++) {
            finalSum += i;
        }
        return finalSum;
    }
};

// Do not edit below this line
module.exports = sumAll;
