//create our first object

// {} = empty object
// keys and values (any data type for the values)
// a variable

let myObject = {
  myKey: "myValue", //number, array, object, etc
  myOtherKey: 2, //separate properties with commas
};

// car
// 4 properties
let myCar = {
  make: "Jeep",
  model: "Grand Cherokee",
  year: 1997,
  engine: "Inline 6",
  "drive train": "4WD",
  gas: 0,
};

//dictionaries

let states = {
  vt: "Vermont",
  ca: "California",
  ma: "Massachusetts",
  ny: "New York",
};

//bracket vs dot notation
states.vt; // "Vermont"
states["vt"]; // "Vermont"
let vt = "Vermont";
console.log(vt);

//assigning values in object
myCar["drive train"]; // use . and then tab to get the right syntax if you forget
myCar.gas = 100; // filled up the car gas
myCar["drive train"] = "FWD"; // switch drivetrain on car
console.log(myCar)


let items = {
  brick: "red",
};

let material = "brick";

console.log(items[material]) //value of material becomes the key "brick"


console.log(Object.keys(myCar)) // Object.keys() show me the keys (as an array please)
console.log(Object.values(myCar));

//delete

delete myCar.gas

console.log(myCar) // now its electric
