// Classes allow us to create objects
// with the same pattern

// Person class

// class keyword
// constructor keyword
// this

//class definition
class Person {
  //use PascalCase for the classnames
  //constructor helps us
  // say how we want to setup our object
  constructor(greeting) {
    this.greeting = greeting; //this refers back to that object instance and allow us refer to the property on the object
  }
}

// using our class to create an object instance
let bob = new Person("Howdy y'all"); // you are basically calling the constructor here

//new Person("Howdy y'all")
// did the following for us
// let bob = {
greeting: "Howdy y'all";
//}
console.log(bob.greeting);

//multiple people created
let pierre = new Person("Bonjour");
let yazzie = new Person("ya'at'teeh");
// let pierre = {
//    greeting: "Bonjour";
//}
// let yazzie = {
//    greeting: "ya'at'teeh";
//}

//what is the problem why not just
// create our own objects each time?

// let pretend you have 10 different files
// you create your Person object
// but you forgot to use greeting
// and instead you end up using
// salutation

// let sal = {
//   salutation: "Hi there."
//}

// so now if you collect all of your peeps
// and tried to iterate, you have a problem
// for each over a list of all the people
// and access .greeting on sal, what happens???

// now you got your undefined

class Sport {
  constructor(
    numberOfParticipants,
    rating,
    ballType,
    difficulty,
    pointScoredCheer
  ) {
    //create our properties and set them from outside the class
    this.numberOfParticipants = numberOfParticipants;
    this.rating = rating;
    this.ballType = ballType;
    this.difficulty = difficulty;
    this.pointScoredCheer = pointScoredCheer;
  }

  //   method????
  cheer() {
    console.log(this.pointScoredCheer);
  }
}

let soccer = new Sport(
  100,
  8,
  "soccer",
  "easy",
  "Gooooooooooooooooooooooooool!!!!!"
);

soccer.cheer();

//1. create class
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  getArea() {
    const area = 3.14 * Math.pow(this.radius, 2);
    return area;
  }

  getCircumference() {
    // 2 * 3.14 * radius
    // console or return
    const circumference = 2 * 3.14 * this.radius;
    return circumference;
  }
}

//2. create an instance
let myCircle = new Circle(2);
//3. log out area
console.log(myCircle.getArea());
//3. log out circumference
console.log(myCircle.getCircumference());
console.log(myCircle.radius);

class MathTwo {
  static add(x, y) {
    console.log(x + y);
  }
}

MathTwo.add(1, 2);
