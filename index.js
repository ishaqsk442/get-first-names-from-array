let getFirstNames = require("../utilities/utils/index.js");

let getNames = require("../country/state/city/index");

function getPeopleInCity(params) {
  return getFirstNames(params);
}

console.log(getPeopleInCity(getNames));

module.exports = getPeopleInCity;
