let myText = `{ "data": "some data goes here" }`;
//console.log(myText.data) this is a string not an object
let myObject = JSON.parse(myText);
console.log(myObject.data);
