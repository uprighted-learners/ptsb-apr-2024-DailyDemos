// text content from a static element (non input)
let h2Element = document.querySelector("body > article > h2");
console.log(h2Element.textContent);
// how to use .value vs .textContent for inputs
let numElement = document.querySelector("#number");

console.log(number.value); //'2324'
console.log(number.textContent); //'' doesn't work how you would think
