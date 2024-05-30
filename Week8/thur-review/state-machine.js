// zorkington changing rooms

// using a function to access a state machine

// using a state machine to prevent something allowing it to happen

class TMNTStateMachine {
  constructor() {
    // initialize with an idle state
    this.state = "Idle";
  }

  transition(newState) {
    const allowedTransitions = {
      Idle: ["Fighting", "Eating Pizza", "Training"],
      Fighting: ["Idle", "Eating Pizza"],
      "Eating Pizza": ["Idle"],
      Training: ["Idle"],
    };
    const isAllowableTransition =
      allowedTransitions[this.state].includes(newState);
    if (isAllowableTransition) {
      this.state = newState;
      console.log(`Transitioned to ${newState} state.`);
    } else {
      console.log(`Cannot transition from ${this.state} to ${newState}.`);
    }
  }

  getState() {
    return this.state;
  }
}

// Example usage:
const tmnt = new TMNTStateMachine();

console.log(`Current state: ${tmnt.getState()}`);
tmnt.transition("Fighting"); // Transitioned to Fighting state.
tmnt.transition("Sleep");
// console.log(`Current state: ${tmnt.getState()}`);
// tmnt.transition("Eating Pizza"); // Transitioned to Eating Pizza state.
// console.log(`Current state: ${tmnt.getState()}`);
// tmnt.transition("Training"); // Cannot transition from Eating Pizza to Training.
// console.log(`Current state: ${tmnt.getState()}`);
// tmnt.transition("Idle"); // Transitioned to Idle state.
// console.log(`Current state: ${tmnt.getState()}`);
// tmnt.transition("Training"); // Transitioned to Training state.
// console.log(`Current state: ${tmnt.getState()}`);
