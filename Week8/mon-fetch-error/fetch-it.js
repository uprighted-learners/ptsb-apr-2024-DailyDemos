// an async function to use await
async function fetchData() {
  // setup url
  const url = `https://jsonplaceholder.typicode.com/posts/1`;
  // fetch the data from the url
  // this defaults to doing a "GET" command
  let response = await fetch(url);

  // Parse response data as JSON
  let data = await response.json();

  // Log the fetched data
  console.log(data);
}

// Call the async function to fetch data
fetchData();
