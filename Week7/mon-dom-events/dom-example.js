const header = document.querySelector("header");
// create a button
const myButton = document.createElement("button");
// add text to the button
myButton.innerText = "This is Awesome";
// add a class to the button
myButton.className = "golden";
//add button to header
header.appendChild(myButton);

// Selecting Elements

// old way is usings the getElementsBy technique
const more = document.getElementsByTagName("li")[2];
const loremTwo = document.getElementsByTagName("p")[1];
// grab by id
const mainArticle = document.getElementById("main-article");
//className could also be used

// NEW WAY of Selecting elements

// simple way
//one - querySelector - 1st one found
//many - querySelectorAll - grabs all of the elements in a list
// querySelector(<put a css selector here in quotes>)
const moreQuerySelectorAll = document.querySelectorAll("li")[2];
const loremTwoQuerySelectorAll = document.querySelectorAll("p")[1];

//more complex way
const moreQuerySelectorComplex = document.querySelector("li:last-child");

//ids with querySelector
const mainArticleWithQuerySelector = document.querySelector("#main-article");
