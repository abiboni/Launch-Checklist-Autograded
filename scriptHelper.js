// Write your helper functions here!

require("cross-fetch/polyfill");

function addDestinationInfo(
  document,
  name,
  diameter,
  star,
  distance,
  moons,
  imageUrl
) {
  // Here is the HTML formatting for our mission target div.
  /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
}
// validateInput(testInput) is HELPER FUNCTION => takes string as (parameter) and returns printed msg 'EMPTY, NOT A NUMBER, IS A NUMBER'
//  this tests the input to make sure whatever user inputs will be validated as empty, NaN, or #
function validateInput(testInput) {
  if (testInput === "") {
    return `Empty`;
  } else if (isNaN(testInput)) {
    return `Not a Number`;
  } else {
    return `Is a Number`;
  }
}
//  console.log(validateInput('potato'))

//document paramenter represents strings PILOT, CO PILOT, FUEL LEVL AND CARGO MASS
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  let pilotStatus = document.getElementById("pilotStatus");
  let copilotStatus = document.getElementById("copilotStatus");
  let fuelStatus = document.getElementById("fuelStatus");
  let cargoStatus = document.getElementById("cargoStatus");

  if (
    validateInput(pilot) === "Empty" ||
    validateInput(copilot) === "Empty" ||
    validateInput(fuelLevel) === "Empty" ||
    validateInput(cargoLevel) === "Empty"
  ) {
    alert("All fields required");
  } else if (
    validateInput(pilot) === "Is a Number" ||
    validateInput(copilot) === "Is a Number"
  ) {
    alert("Must actually be a name");
  } else if (
    validateInput(fuelLevel) === "Not a Number" ||
    validateInput(cargoLevel) === "Not a Number"
  ) {
    alert("Needs actual number");
  } else {
    if (fuelLevel < 10000) {
      list.style.visibility = "visible";
      fuelStatus.innerHTML = "Shuttle not ready for launch";
      document.getElementById("fuelStatus").style.color = "red";
    } else if (cargoLevel > 10000) {
        list.style.visibility = "visible";
        cargoStatus.innerHTML = "Shuttle not ready for launch";
        document.getElementById("cargoStatus").style.color = "red";
    } else {
        (fuelLevel >= 10000 && cargoLevel <= 10000) 
            list.style.visibility = "visible";
            launchStatus.innerHTML = "Shuttle is ready for launch"
            launchStatus.style.color = 'green'
        }
    }
  }

// console.log(formSubmission('Empty')

async function myFetch() {
  let planetsReturned;

  planetsReturned = await fetch().then(function (response) {});

  return planetsReturned;
}

function pickPlanet(planets) {}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
