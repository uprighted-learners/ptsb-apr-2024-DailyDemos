// let color = "blue";
// let number = 5; // 5
// number = 10; // 10
// console.log(number)


//const
const constantNumber = 15;
let assignedToAnotherVariable = constantNumber;
//constantNumber = 10;
assignedToAnotherVariable

let doesItScope = "not here";
{ 
 
  {
    
    {
        console.log(doesItScope);
    }
  }
} 

// scope is what you can see from a given place - Daniel

 function addOdds(...numbers) {
   var total = 0;
   
   for (let number of numbers) {
     console.log(number); //undefined
     // number lives here on this line
     if (number % 2 !== 0) {
       total += number;
     }
   }
   return total;
 }

 function* makeList(n) {
   let i = 0;
   while (i < n) {
     yield i++;
   }
 }

