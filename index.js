// Code your solution here

function findMatching(drivers, stringText) {
  return drivers.filter((possibleMatch) => possibleMatch.toLowerCase() === stringText.toLowerCase());
}

//returns names of drivers with provided letters
function fuzzyMatch(drivers, stringWithLetters) {
  return drivers.filter((possibleMatch) => possibleMatch.toLowerCase().indexOf(stringWithLetters.toLowerCase()) === 0);
}

//return each element whose name property matches the provided string argument.
function matchName(drivers, driverName) {
  return drivers.filter((record) => record.name === driverName);
}