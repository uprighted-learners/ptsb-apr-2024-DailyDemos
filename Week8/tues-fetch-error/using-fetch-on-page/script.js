// an async function to use await
async function fetchData() {
  // setup url
  const url = `https://jsonplaceholder.typicode.com/posts/1`;
  // fetch the data from the url
  // this defaults to doing a "GET" command
  let response = await fetch(url);
  // Log the fetched data

  const blogPost = await response.json();

  const titleElement = document.querySelector("#title");
  titleElement.textContent = blogPost.title;
  // link other parts of json to dom here
}

// Call the async function to fetch data
fetchData();
