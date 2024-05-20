//if statements

const condition = false;
if (condition) {
  //1 - skipped
{
  //2 - run this code
  // pretend code here
}

// example of how to log a test

//console.log("I expect conditionOne to be true. actual: ", conditionOne);

// else if fun

const conditionOne = true;
const conditionTwo = true;
const conditionThree = true;

// only one of the blocks below will run no matter what
if (conditionOne) {
  console.log("first code block");
} else if (conditionTwo) {
  console.log("second code block");
} else if (conditionThree) {
  console.log("third code block");
} else {
  console.log("forth code block"); // nothing else happened so do this
}

// if you want multiple blocks to potentially run
// use multiple if statments only

if (conditionOne) {
  console.log("if statement - first block");
}
if (conditionTwo) {
  console.log("if statement - second block");
}

// complex conditionals

const isSunny = true;
const isTuesday = false;

//and operator example
if (isSunny && isTuesday) {
  //mow the lawn
  // won't run
}

// or operator example
if (isSunny || isTuesday) {
  //mow the lawn
  // will run
}

// you can get really complex with conditionals
// if(( x && y ) || ((a || b) && (c && d))){

//}

// remember to use comparison operators to setup your conditionals

let isHumid = humidity > 40; // number compare <= >= < > === ==
let isNate = firstName === "Nate"; // string compare

// while loops for games/events

//main

function main() {
  // do everything

  let input = "";
  //while the user hasn't said to close
  while (input !== "close") {
    input = getInputFromUser(); // expecting 'close' at some point
    console.log(input);

    // everytime the string 42 is inserted
    // do an easter egg in our app
    if (input === "42") {
      //do the side quest

      while (sideQuestNotComplete) {
        // do stuff
      }
    }
  }

  // finish
}

main();

// best practices

// shorter vs longer functions
// more than 20-50 lines per function might be too big

// comments in code
// even better self documenting code

// naming conventions
// variables are nouns
// functions are actions
// camelCase (everything else) and PascalCase (Class)
// descriptive names

// use prettier to clean up code
// format on save
// (cmd)ctrl+shift+p -> format document

// async functions
// reuse an await multiple times

async function doTheThing() {
  return await someOtherProcess();
}

async function doTheOtherStuff() {
  while (isntDoneYet) {
    await doTheThing();
  }
}

doTheOtherStuff(); //

// or use iffe example showed in the promises await in other folder

// debugger
