// while

// event loop

// let crashAlive = true;
// let crashHealth = 100;
// while (crashAlive) {
//   console.log("Keep going");

//   if (crashHealth <= 0) {
//     crashAlive = false;
//   }
//   crashHealth -= 10;
// }

// for
// initialization
// conditional
// afterthought
// code block
// for(let crashHealth = 100; crashHealth > 0; crashHealth -= 10) {
//   console.log("Keep going");
// }

//Challenge 1
// count by 4s
// 2  needs to get to less than -102
// i += 4
// 2, 6, 10, 14

// how many ways?
//1. i += -4
//2. i -= 4
//3. i = i - 4

//questionable
//i = i - 1 - 1 - 1 - 1
//i = i - (4 * 1)
//i = i + (2 * -2)
// redundant
// typing more than needed
// readability suffers <--- read code 10x more than writing it

// for (i = 2; i >= -102; i += -4) {
//     console.log(i);
// }

// Challenge 2

// write out a for loop
// print out (console.log()) the numbers 3-30 by 3s
// 3
// 6
// 9
// 12
// ...
// 30
// stop
// +=
// i = i + 3
// i += 3
// for(let num = 3;num <= 30; num += 3){
//     console.log(num);
// }

//Challenge 3

// write a while loop that checks for number of sheep
// start at 100 sheep
// exit the loop after 0 sheep left
// if is needed
// reduce the amount of sheep

let numberOfSheep = 100;
while (numberOfSheep > 0) {
  if (numberOfSheep > 10) {
    console.log("We have " + numberOfSheep + " sheep");
  } else if (numberOfSheep < 5) {
    //only hit if is false
    // only goes into the code block if conditional is true
    console.log("We have " + numberOfSheep + " sheep");
  } else if (numberOfSheep < 12) {
    console.log(numberOfSheep);
  } else {
    console.log("this will never run")
  }
  numberOfSheep--;
}
