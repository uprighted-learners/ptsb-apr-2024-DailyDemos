// light example

// 1. create a valid state transitions object
const states = {
  green: ["yellow"],
  flashingYellow: ["red"],
  red: ["green", "flashingYellow"],
  yield: ["red"],
};

// 2. start with some initial state - otherwise we have a chicken/egg problem
let currentState = "green";

// 3. create a state transitioning function
// parameters -
//           newState - needs to match one of the strings above in the state objects value arrays
function enterState(newState) {
  //use bracket notation to pull the array from the states object
  let validTransitions = states[currentState]; //i.e. starting with "green" this would load ['yellow']

  //does the array include the value newState - i.e. 'yellow'
  if (validTransitions.includes(newState)) {
    //if it does
    // set currentState to the new valid state (i.e. 'yellow')
    currentState = newState;
    // log that state out
    console.log(currentState);
  } else {
    // if is doesn't then throw an error
    console.log(
      "Invalid state transition attempted - from " +
        currentState +
        " to " +
        newState
    );
  }
}

// call to try to change the state
enterState("yellow");
enterState("red");
enterState("yellow"); // throw an error
