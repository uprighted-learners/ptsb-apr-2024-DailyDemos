// overview

// consuming data to deal with objects
// fetch api - global function - async

// Default - GET Verb
// Parameter - URL

// wrapper function for the fetch
// pull out the text using response.text()
// pull the json using response.json()

// 1. Create a wrapper

// getData

async function getData() {
  // 2a. verify api call in Postman/Thunderclient
  // check the verb
  // check url etc.

  //2b. set up url
  const url = "https://pokeapi.co/api/v2/pokemon/pikachu";

  // 3. call the url with fetch
  // make sure you AWAIT that thing
  const response = await fetch(url);
  console.log(response);

  //4. parsing/consuming the object from json
  // we could use blob, text or json
  // blob is for binary data - images, exe, etc - dont use this often
  // text - don't use this often either
  // json - most common - lets us play with javascript object
  const pokemon = await response.json();

  // before we do anything with the object lets log it out

  console.log(pokemon); // should be able to see the properties we expect that we saw when testing in ThunderClient

  // 5. Once Verified we can do things with the object - but again log out each property first to check your syntax
  console.log(pokemon.abilities);

  // you can also get the object into your Chrome Dev Tools Console , and test much faster there.
  // copy the obj from thunderclient, from the console itself, or the browser
  // then you can use dot notation and index accessors to access the various parts of the object until it works
  // i.e. pokemon.abilities[0].is_hidden
}
