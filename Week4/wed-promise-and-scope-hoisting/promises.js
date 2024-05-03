(async () => {
  async function getTime() {
    let thisTime;
    await new Promise((resolve) => {
      setTimeout(() => {
        thisTime = "midnight";
        resolve();
      }, 2000);
    }); // slow down and let this run
    return thisTime;
  }

  let time;
  time = await getTime();
  console.log("The time is " + time);
})(); //this is what is called an iffe immediate invoked function expression
//( //func created here)() // called after
