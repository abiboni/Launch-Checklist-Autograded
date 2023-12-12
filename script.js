// Write your JavaScript code here!

window.addEventListener("load", function () {
  // TASK 3
  let listedPlanets;
  // Set listedPlanetsResponse equal to the value returned by calling myFetch()
  let listedPlanetsResponse = myFetch();

  listedPlanetsResponse.then(function (result) {
    listedPlanets = result;

    console.log(listedPlanets);
    //   console.log(listedPlanets);
    // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    const planetChoice = pickPlanet(listedPlanets);
    console.log(planetChoice);
    const name = planetChoice.name;
    const diameter = planetChoice.diameter;
    const star = planetChoice.star;
    const distance = planetChoice.distance;
    const imageUrl = planetChoice.image;
    const moons = planetChoice.moons;
    addDestinationInfo(
      document,
      name,
      diameter,
      star,
      distance,
      moons,
      imageUrl
    );
  });
  const form = document.querySelector("form");
  const list = document.getElementById("faultyItems");
  //   const launchStatus = document.getElementById('launchStatus');
  // this ensures that when form is submitted, it will prevent it from loading without requirements
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const pilotName = document.querySelector("input[name=pilotName]");
    const copilotName = document.querySelector("input[name=copilotName]");
    const fuelLevel = document.querySelector("input[name=fuelLevel]");
    const cargoMass = document.querySelector("input[name=cargoMass]");
    formSubmission(
      document,
      list,
      pilotName.value,
      copilotName.value,
      fuelLevel.value,
      cargoMass.value
    );
  });
});
