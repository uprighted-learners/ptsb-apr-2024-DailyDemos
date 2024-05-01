// null, undefined, NaN, ""

// loose equality ==

// strict equality ===

console.log(null == '')

// Operator	Comparison
// <	less than
// >	greater than
// <=	less than or equal to
// >=	greater than or equal to
// ==	equal to
// !=	not equal
// ===	really equal to
// !==	really not equal to

console.log(1 < 2)
console.log(2 > 3)

// if 8 out of 10 or higher
// if 8 or higher
// if num >= 8
let num = 8;
console.log(num >= 8 )





// NOT operator
// whenever you see ! Not/Exclamation - take what the value would
// be normally and flip it
// ! in front of any boolean value
console.log(!true)
//what would !!!
console.log(!!!true)



let isNightTime = true;
console.log(!isNightTime)

//value type helps decide equality
//loose equality  ==, !=
//nice 
// I want to compare a string and number
let valueFromInputField = '6'
console.log(6 == valueFromInputField)
console.log(6 != '6');
// null and undefined does the same thing
console.log(null == undefined)
console.log(null != undefined)

// strict equality (aka really equal to)
console.log(6 === '6')
console.log(6 !== '6')


// AND (&&) operator
// OR (||) operator
let x = true;
let y = false;
let z = true;

if (x && y && z){
 // x y and z are all true
 console.log("they are all true")
}

if( x || y || z){
    console.log("one or more of them is true")
}