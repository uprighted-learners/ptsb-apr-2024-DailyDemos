const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise(function (resolve, reject) {
    rl.question(questionText, resolve);
  });
}

start();

async function start() {
  console.log("Lets play a word guessing game");
  const secret = await ask("Whats the secret word?");
  console.log(`Your secret word is ${secret}`);
  rl.close();
}
