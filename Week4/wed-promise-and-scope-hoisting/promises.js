//WORKING EXAMPLE
(async () => {
  // ignore this if you want just allows await to be used on line 14
  async function getTime() {
    //async - look for await and have it wait for a promise to come back
    let thisTime; //3
    await new Promise((resolve) => {
      setTimeout(() => {
        thisTime = "midnight";
        resolve();
      }, 2000); //4
    }); //5 // slow down and let this run
    return thisTime; //6
  }

  let time; //1
  time = await getTime(); //2
  console.log("The time is " + time); //7
})(); //this is what is called an iffe immediate invoked function expression
//( //func created here)() // called after

//BAD EXAMPLE see numbers for execution order
function getTime() {
  //async - look for await and have it wait for a promise to come back
  // 3
  let thisTime;

  // started execution
  new Promise((resolve) => {
    //6
    setTimeout(() => {
      thisTime = "midnight";
      resolve();
    }, 2000);
  }); // slow down and let this run

  // 4
  return thisTime;
}

// 1
let time;
// 2
time = getTime(); // use getTime Sync
// 5
console.log("The time is " + time); // because its sync - we get undefined as it didn't wait 28 to occur
