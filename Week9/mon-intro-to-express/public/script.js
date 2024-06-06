// wrapping function because of await

async function postAddressData(formData) {
  //fetch command sent off from the form data
  const url = "127.0.0.1:4000/address";
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(formData),
  });

  return response.json();
}

// event listener for submit

// grab address form first

const addressFormElement = document.querySelector("#address-form");

addressFormElement.addEventListener("submit", async (e) => {
  e.preventDefault();
  //get values from our form
  // fix this  part
  //const data = new FormData(addressFormElement);

  const data = {
    name: "Alice",
    address: "123 5th Street",
    phone: "555-555-5555",
  };
  //pass values into our postAddressData
  await postAddressData(data);
});
