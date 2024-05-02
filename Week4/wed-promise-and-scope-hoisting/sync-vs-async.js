// sync

console.log(1); // sync
console.log(2); // sync
console.log(3); // sync
// what do we expect in the console after running?
// 1,2,3

// whats some other examples of sync code?

console.log(44 * 867); // sync

if (true) {
  // this is sync
}

// so what? what is async?

// let file = getFileFromDisc("C:\file.txt"); // async

// const apiUrl = "https://weatherChannel.com/api/lat/long/"
// let data = getWeather(apiUrl); // async

// settimeout

// function getTime() {
//   return "partyTime";
// }
// let time;
// let setTime = () => time = getTime();
// setTime()
// console.log(time)

function returnStuff() {
  return "midnight";
}

function getTime() {
  let thisTime;
  setTimeout(() => (thisTime = returnStuff()), 2000); // slow down and let this run
  return thisTime;
}

let time;
time = getTime();
console.log("The time is " + time);

// console.log("beforePartyTime");
// setTimeout(setTime, 3000);
// console.log("afterPartyTime");
// setTimeout(()=> console.log("Whennnnn?"), 2000);
