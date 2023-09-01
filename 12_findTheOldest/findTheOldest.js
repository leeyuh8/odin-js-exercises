const findTheOldest = function(arr) {
  arr.forEach( person => 
    person.yearsLived = person.yearOfDeath - person.yearOfBirth);
  arr.sort( (a, b) => 
    b.yearsLived - a.yearsLived);
  return arr[0];
};

/*
x- first, copy the arr and to each element add a property 
named "yearsLived" that subtracts the death by birth
x- use arr.sort to ordr from oldest to youngest
based on yearsLived
- remove the yearsLived data and return the first/oldest 
person element
 */

// Do not edit below this line
module.exports = findTheOldest;
