// use this as an example for setup within project
const readline = require("readline"); //importing readline from Node - this doesn't exist in the browser

const rl = readline.createInterface({  //create interface method
  input: process.stdin, // i.e. terminal txt input
  output: process.stdout, // i.e. console.log
});

rl.question("What is your favorite travel destination?", (input) => { // question method off of readline interface 
  //take in the input and use it to create some output
  console.log(`Cool, I've always wanted to visit ${input.toString()}.`); //pay special attention to template string ` (backtick - next to 1 on keyboard) vs ' (singlequote)
  rl.close(); // close the readline stream from readline interface to complete application interaction
});
