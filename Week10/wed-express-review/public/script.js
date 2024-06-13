//  load from our get merch endpoint

// get a wrapper method for our async

async function getMerch() {
  // call our merch endpoint
  const response = await fetch("http://127.0.0.1:4000/merch");
  const json = await response.json();
  console.log(json);

  // display each item in the json that is returned
}

getMerch();
