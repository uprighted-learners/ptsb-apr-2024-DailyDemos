// an async function to use await
async function fetchData() {
  // alert user of fail or succeed
  let status = "Success"
  try {
    // Fetch data from a non-existent API endpoint
    let response = await fetch(`https://nonexistentapi.example.com/data`);

    // Check if the response was successful
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    // Parse response data as JSON - but this will never get hit
    let data = await response.json();

    // Log the fetched data - this will never get hit because of error above
    console.log(data);
  } catch (error) {
    // Handle any errors
    console.error("Error fetching data:", error);
    status = "Failed"
    //now that it errored show placeholder

    //show error message to the user
      // toast notification

  } finally {
    // do this thing no matter what, try, catch whatever

    // do this thing

    console.log("this operation", status)
  }
}

// Call the async function to fetch data
fetchData();
