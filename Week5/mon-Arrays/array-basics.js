// basic/empty array

let emptyArray = []; //empty array literal

// populated array

let pokemonList = ["Pikachu", "Charizard", "Ditto", "Mewtwo"];

//indexing to point to particular values, REMEMBER index 0
console.log(pokemonList[2]);

//check length of a list
console.log(pokemonList.length); //expect 4

//get the end of a list first time, everytime (minus one trick)
console.log(pokemonList[pokemonList.length - 1]);

// we will always get undefined for indexes that dont exist
console.log(pokemonList[1000]);
console.log(pokemonList[100]);
console.log(pokemonList[100]);

// overwrite our values
pokemonList[0] = "Eevee";
console.log(pokemonList);

// add a new pokemon to the list (end of array)
pokemonList.push("Unnamed Pokemon 42");
console.log(pokemonList);

// remove item from end of array
console.log(pokemonList.pop()); //returns the removed item
console.log(pokemonList); // see that its removed

//Now create your own

// create an array with 5 number in it
let numbers = [5, 6, 8, 42, 103];
console.log(numbers);

// overwrite one of the numbers
const secondToLastIndex = numbers.length - 2;
numbers[secondToLastIndex] = 1000;
// log out the updated array
console.log(numbers);

// add a new number to end of list
numbers.push(222);
// log out array
console.log(numbers);
// remove the last 3 numbers
numbers.pop();
numbers.pop();
numbers.pop();
// log the array
console.log(numbers);

//Slice n dice

let pokemonListToSlice = ["Pikachu", "Charizard", "Ditto", "Mewtwo"];

// it includes the item from the 1st index and excludes all items beginning with second index
console.log(pokemonListToSlice.slice(1, 3));

console.log([2, 4, 6, 12, 24].slice(1, 4)); // array literal with slice method

// challenge
//create an array with 30 numbers
// for loop or hard code
// 2nd half of the array - numbers in slot 15-30
// pretend like you don't know how long array is - use .length property
let numList = [2, 4, 6, 12, 24, 48, 96, 158, 1582, 1999];
//console.log(numList[5.5])
let halfWayIndex = Math.floor(numList.length / 2); //Math.floor makes sure we have a whole number

console.log(Math.max(1, 10, 22));
console.log(halfWayIndex);

console.log(numList.slice(halfWayIndex, numList.length));


//strings vs arrays
console.log("this is a string"[0]) //both index
console.log([1,2,3,4,5][0])

// both slice
console.log("string methods".slice(0, 3))
console.log([1,2,3,4,5].slice(0, 3));

//both have a length property
[1, 2, 3, 4, 5].length
"this string".length

console.log("this is a string".concat(" Another string"))



//join on Array

let fullName = ["Bob", "Saget"]; // started with array

 //converted to string output
console.log(fullName.toString());
console.log(fullName.join());

console.log("Pikachu".split(""))
console.log("Pikachu went to school".split(" "))