"use strict";
// prevents hoisting nonsense
{
  amount = 5;
}
console.log(amount);

// hoisting as well when no keyword used'
// because it defaults to hoisting / var
// {
//   amount = 5;
// }
// console.log(amount);
