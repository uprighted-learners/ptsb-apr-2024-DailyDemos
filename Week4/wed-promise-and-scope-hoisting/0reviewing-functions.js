// returns ?????

// console vs returns - often a point of confusion

// allows us to print stuff to console
// feedback - print out info about application
// used for devs
console.log();

// returns

// go back to where the function was just called

function dontDoAThing() {
  return;

  //What happens if I have code down here?
  let num = 5;
}

function getNum() {
  return 5;
}

let num = getNum(); //drops 5 where getNum is

const tipCalc = (bill, percentage) => {
  console.log(bill, percentage);
};
console.log(tipCalc(0, 0));

const myTotal = (myBill, percent) => {
  return myBill * (percent / 100) + myBill;
};
console.log(myTotal(55, 15));
