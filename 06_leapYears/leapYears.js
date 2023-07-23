/*
For initial code:
    - you need to test two groups of years, those that
    end in 00 and those that do not.
    - those that do not end in 00 must also be divisible by 4
    to be a leap year.
    - those that end in 00 must also be divisible by 400
    to be a leap year. 
*/

const leapYears = function(year) {
    let lastTwoDigits = year.toString().slice(-2);

    if (lastTwoDigits !== "00" && year % 4 === 0) return true;
    if (lastTwoDigits === "00" && year % 400 === 0) return true;
    return false;
};

// Do not edit below this line
module.exports = leapYears;
