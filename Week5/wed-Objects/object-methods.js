// code along

// Create an object, and assign it to the variable dog
// Give dog 3 properties, a name, a color, and speak
// name, and color will be strings
// speak will be our method
// When called, speak will print "Bark!" to the console.

let fido = {};

fido.gender = "male";
fido.color = "golden";
fido.breed = "golden retriever";
fido.speak = (x) => console.log("bark" + x);
console.log(fido);

fido.speak("bark"); // "barkbark" in console/output tab

let human = {
  height: `5'2"`,
  armSpan: function () {
    let height = 0;
    return this.height;
  },
  noseLength: `3"`,
  earLength: function () {
    return this.noseLength;
  },
};

console.log(human.armSpan());

let bella = {};
bella.species = "dog";
bella.breed = "pug";
bella.bark = function () {
  console.log(`I'm a ${this.species}`);
};
bella.getBreed = () => {return this.breed + " is the breed"} ; // arrow function and this work differently
//add another action and another property

bella.bark();
console.log(bella.getBreed());


const carsToEfficiency = ["prius", "jeep", "honda", "charger"];

const carEfficiency = {
  prius: { mpg: 50 },
  jeep: { mpg: 10 },
  honda: { mpg: 28 },
  charger: { mpg: 15 },
};
//keys from object - but how????
const allCars = Object.keys(carEfficiency); // matches carsToEfficiency

let keyToAdd = "mpg";
console.log(carEfficiency["prius"][keyToAdd]);
let totalMpg = 0;
allCars.forEach(key => {
    totalMpg += carEfficiency[key][keyToAdd]//what is this?
})
//get the average
console.log(totalMpg/allCars.length)



//this scope
const obj = {
  name: "John",
  // Normal function declaration
  sayHelloNormal: function () {
    console.log("Hello, my name is " + this.name);
  },
  // Arrow function declaration - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
  sayHelloArrow: () => {
    console.log("Hello, my name is " + this.name); // "this" refers to the outer scope
  },
};

// Call the methods
obj.sayHelloNormal(); // Output: Hello, my name is John
obj.sayHelloArrow(); // Output: Hello, my name is undefined //dont use arrow function on objects where you need to use this