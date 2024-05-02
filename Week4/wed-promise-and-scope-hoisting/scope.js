{
  let outerScope = "outer scope";
  // console.log(innerScope)// innerScope is not defined
  {
    {
      //inner scopes have access to outer scope variables
      //console.log(outerScope);
      let innerScope = "inner scope";
    }
  }
}

//Let and const work the same for scope

{
  let num = 5;
  const numTwo = 6;
  console.log(num); //5
  console.log(numTwo); //6
  // let and const are different in this way
  // let is???
  // variables declared using let
  // can be reassigned
  num = 6;
  // const is ???
  // variables declared using const
  // cannot be reassigned
  // numTwo = 7;
  // protects us from accidently reassigning
  // values to variable that we dont or should
  // update
  // i.e.
  // party like its 1999
  const partyTime = 1999;
}
// errors here because we are outside of the where it is declared
// console.log(num) //undefined
//console.log(numTwo) //undefined

// var
// original and only way to create a variable

// code looks like this
{
  let onlyAvailibleInScope = true;
  var availableEverywhere = true;
}
console.log(availableEverywhere);
// this is what your browser does to the code
// var availableEverywhere; // this is pushed to the top
// this var above is what we refer to a hoisting
// {
//     let onlyAvailibleInScope = true;
//     availableEverywhere = true;
// }

// console.log(availableEverywhere)

// hoisting happens within either global
// or function scope but doesn't break out of
// function scope as shown here
// function number(){
//     var doesItScope;
// }
// console.log(doesItScope)

// challenge

// create a var variable
// within a if statement { inside the block / scope}
// try to console.log within the if statement
// log it outside the if statment

let isClasstime = true;

if(isClasstime){
    // create a var here
    // log it
}
// also log it here