/* 
    ? Instructions
    * connect your files (index, style, app)
    * create a pokedex card in index: (div)
    * it should have name (h3), weight (p), and picture (img)
    * above it, there should be a form with an input field and a Go button
    * access all elements within app.js using DOM
    * create an event listener that listens for the button click
    * when the button is clicked, it should grab the input value (aka pokemon name)
    * it should then trigger a fetch to the pokemon api with that pokemon name
    * it should then display the values of that pokemon's name, weight, and picture

*/

// Accessing all elements and other constants
const btn = document.getElementById("submit");
const url = "https://pokeapi.co/api/v2/pokemon/";
const name ;
const weight;
const img;
const card;
const statsContainer;
const mainContainer;
console.log(statsContainer);

// Helper function
const capitalize = (str) => {};

// Error handling for when things go wrong
const renderError = (error) => {};

// Deals with all of the page rendering
const render = (data) => {};

// Fetches content based pokemon from event listener
const getData = async (pokemon) => {};

// Triggers everything else once a click has been detected
btn.addEventListener("click", (evt) => {});
