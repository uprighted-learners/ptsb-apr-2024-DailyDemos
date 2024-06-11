async function fetchData() {
  try {
    const options = {
      method: "GET", // make sure this matches your app.method()
      credentials: "same-origin", // this is to bypass cors related issue
      headers: {
        Cookie: "color=red;cookie=oatmeal", // this doesn't seem to work - but does work from thunderclient
      },
    };
    const response = await fetch("http://localhost:5000/test", options);

    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }

    const data = await response.text();
    console.log(data);
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}

fetchData();
