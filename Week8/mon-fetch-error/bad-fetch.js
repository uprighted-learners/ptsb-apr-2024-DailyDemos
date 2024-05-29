// whenever a function returns a promise it must
// be awaited in an async function

// undefined or usually and unresolved Promise is what
// your consoled data will return

// or you will get errors like response.json is not a function

//global to hold the fetched data
let data; // starts undefined - (same as let data = undefined; )

// an async function to use await
async function fetchData() {
  // setup url
  const url = `https://jsonplaceholder.typicode.com/posts/1`;
  // fetch the data from the url
  // this defaults to doing a "GET" command
  let response = fetch(url);
  // Parse response data as JSON
  data = response.json(); // just get back a promise from .json() which doesnt have the text in it

  // Log the fetched data
  console.log(data);
}

// Call the async function to fetch data
fetchData();
