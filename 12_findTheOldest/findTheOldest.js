const findTheOldest = function(arr) {
  arr.forEach( person => { 
    if ('yearOfDeath' in person === false) person.yearOfDeath = new Date().getFullYear();
    person.yearsLived = person.yearOfDeath - person.yearOfBirth
  });
  arr.sort( (a, b) => 
    b.yearsLived - a.yearsLived);
  return arr[0];
};

// Do not edit below this line
module.exports = findTheOldest;
