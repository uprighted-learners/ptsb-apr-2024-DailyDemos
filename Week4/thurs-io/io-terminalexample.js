//run this script from terminal
// node io-terminalexample.js
// ctrl+c or cmd+c to close
console.log("It is running!!!");
process.stdin.once("data", (input) => {
  console.log(input.toString());
});
