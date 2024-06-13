const formElement = document.querySelector("#create-book-form");

formElement.addEventListener("submit", async (e) => {
  e.preventDefault(); // prevent refreshing/redirecting of the page which causes a bad user experience

  //get values from our form

  // currentTarget vs target
  const formData = new FormData(e.target); // create a form data object
  const data = Object.fromEntries(formData.entries()); //grab a new object from the FormData

  console.log("our data object: ", data); // test that its working
  // use fetch to post to our book endpoint - passing form data in
  await postBook(data);
});

//pasting in thunderclient code as reference

// let headersList = {
//   Accept: "*/*",
//   "User-Agent": "Thunder Client (https://www.thunderclient.com)",
//   Cookie: "color=red;cookie=oatmeal",
//   "Content-Type": "application/json",
// };

// let bodyContent = JSON.stringify({
//   title: "Slappys Revenge",
//   author: "R.L. Stine",
// });

// let response = await fetch("localhost:4000/book", {
//   method: "POST",
//   body: bodyContent,
//   headers: headersList,
// });

// let data = await response.text();
// console.log(data);

async function postBook(formData) {
  //1. url
  //2. body
  //3. headers
  const response = await fetch("http://127.0.0.1:4000/book", {
    method: "POST",
    // pull this in from our form
    body: JSON.stringify(formData),
    headers: {
      "Content-Type": "application/json",
      Accept: "*/*",
    },
  });
}
