const params = new URLSearchParams(document.location.search);
let nameParam = params.get("name");
console.log(nameParam);

// to get this to work add the following to your browser
// ?name=YourNameHere

// Then you check the console and the YourNameHere value
// should show up

// lets try printing out all the values on by one

let index = 1;
for (const [key, value] of params.entries()) {
  console.log(index, "- key:", key, "value:", value);
  index++;
}
