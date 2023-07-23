/*
- write a for loop where:
    - i starts at the start value
    - i stops at the end value
    - code adds the current i value to the finalSum variable
*/

const sumAll = function(numStart, numEnd) {
    let finalSum = 0;
    for (let i = numStart; i <= numEnd; i++) {
        finalSum += i;
    }
    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
