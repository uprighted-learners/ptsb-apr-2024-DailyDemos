// light example

const states =  {
  green: ["yellow"],
  yellow: ["red"],
  red: ["green", "yield"],
  yield: ["red"]
}


let currentState = "green";
function enterState(newState) {
  let validTransitions = states[currentState];
  if (validTransitions.includes(newState)) {
    currentState = newState;
    console.log(currentState)
  } else {
    console.log("Invalid state transition attempted - from " + currentState + " to " + newState);
  }
}

enterState("yellow")
enterState("red")
enterState("yellow") // throw an error