// wrapping function because of await

async function postAddressData(formData) {
  //fetch command sent off from the form data
  // what causes this to refresh? try to figure it out.

  let headersList = {
    Accept: "*/*",
    "Content-Type": "application/json",
  };

  const url = "http://127.0.0.1:4000/address";
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(formData),
    headers: headersList,
  });

  return response.json();
}

// event listener for submit

// grab address form first

const addressFormElement = document.querySelector("#address-form");

addressFormElement.addEventListener("submit", async (e) => {
  e.preventDefault();

  //get values from our form
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());

  //pass values into our postAddressData
  const response = await postAddressData(data);
  console.log(response); // handle the response
});
