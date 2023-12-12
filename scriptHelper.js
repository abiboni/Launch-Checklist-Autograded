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
  let missionTarget = document.getElementById("missionTarget");
  missionTarget.innerHTML = `
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name} </li>
                     <li>Diameter: ${diameter} </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance}</li>
                     <li>Number of Moons: ${moons} </li>
                 </ol>
                 <img src= ${imageUrl}>`;
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
// ALERT MSGS
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  let pilotStatus = document.getElementById("pilotStatus");
  let copilotStatus = document.getElementById("copilotStatus");
  let fuelStatus = document.getElementById("fuelStatus");
  let cargoStatus = document.getElementById("cargoStatus");
  let launchStatus = document.getElementById("launchStatus");

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
    // idk why
    cargoStatus.innerHTML = `Cargo mass low enough for launch`;
    fuelStatus.innerHTML = `Fuel level high enough for launch`;
    //   If fuel level too low
    if (fuelLevel < 10000) {
      list.style.visibility = "visible";
      fuelStatus.innerHTML = "Fuel level too low for launch";
      //   cargoStatus.innerHTML = "Cargo mass light enough for launch";
      launchStatus.innerHTML = "Shuttle Not Ready for Launch";
      launchStatus.style.color = "red";
    }
    // cargo lvl too high
    if (cargoLevel > 10000) {
      list.style.visibility = "visible";
      // fuelStatus.innerHTML = "Fuel level high enough for launch";
      cargoStatus.innerHTML = "Cargo mass too heavy for launch";
      launchStatus.innerHTML = "Shuttle Not Ready for Launch";
      launchStatus.style.color = "red";
    }
    // if (fuelLevel < 10000 && cargoLevel > 10000) {
    //     list.style.visibility = "visible";
    //     cargoStatus.innerHTML = "Cargo mass too heavy for launch";
    //     fuelStatus.innerHTML = "Fuel level too low for launch";
    //     launchStatus.innerHTML = "Shuttle is ready for launch";
    //     launchStatus.style.color = "red";
    // }
    // if everything is gtg =
    if (fuelLevel >= 10000 && cargoLevel <= 10000) {
      list.style.visibility = "visible";
      pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
      copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
      launchStatus.innerHTML = `Shuttle is Ready for Launch`;
      launchStatus.style.color = `green`;
    }
  }
  pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
  copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
}

// console.log(formSubmission('Empty')

async function myFetch() {
  let planetsReturned;
  // fetch URL for the planets and return response.json()
  planetsReturned = await fetch(
    "https://handlers.education.launchcode.org/static/planets.json"
  ).then(function (response) {
    return response.json();
  });

  return planetsReturned;
}

function pickPlanet(planets) {
  // use Math.random for a list of planets, return 1 planet from the list
  let index = Math.trunc(Math.random() * planets.length);
  return planets[index];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
