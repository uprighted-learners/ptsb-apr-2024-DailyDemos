// an async function to use await
async function fetchData() {
  try {
    // Fetch data from a non-existent API endpoint
    let response = await fetch(`https://nonexistentapi.example.com/data`);

    // Check if the response was successful
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    // Parse response data as JSON
    let data = await response.json();

    // Log the fetched data
    console.log(data);
  } catch (error) {
    // Handle any errors
    console.error("Error fetching data:", error);
  }
}

// Call the async function to fetch data
fetchData();
