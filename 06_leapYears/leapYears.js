/*
Conditions:
    - all leap years are divisible by 4
    - for all test years that end in '00', it is only a
    leap year if it is divisible by 400
    - code should test the '00' year exception first
*/

const leapYears = function(year) {
    let lastTwoDigits = +year.toString().slice(-2);
    // if (lastTwoDigits === 00 
    // && year % 400 === 0 
    // && year % 4 === 0) return 'true';
    if (year % 4 === 0) return true;
};

// Do not edit below this line
module.exports = leapYears;
