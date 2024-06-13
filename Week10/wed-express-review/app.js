// add express so we can use it
// "if you don't import it, it doesn't exist in the context of this app.js file"
const express = require("express"); //importing from node_modules/express/index.js from its exports statement
const cors = require("cors"); // importing from node_modules/cors/index.js from its exports command

// we could load this from our jsondb using something like
// https://stackoverflow.com/questions/32261070/node-express-trying-to-send-static-json-file-to-api-endpoint
const merch = {
  merchandise: [
    {
      item: "Goosebumps Board Game",
      price: "$24.99",
      itemType: "Game",
    },
    {
      item: "Slappy Ventriloquist Dummy",
      price: "$69.99",
      itemType: "Toy",
    },
    {
      item: "Goosebumps T-Shirt",
      price: "$19.99",
      itemType: "Clothing",
    },
  ],
};

const books = [
  {
    id: 1,
    title: "Welcome to Dead House",
    author: "R.L. Stine",
    publicationDate: "1992-07-01",
  },
  {
    id: 2,
    title: "Slappys Revenge",
    author: "R.L. Stine",
    publicationDate: "1994-07-01",
  },
  {
    id: 3,
    title: "Monster Blood",
    author: "R.L. Stine",
    publicationDate: "1994-09-01",
  },
];

// cookie-parser could be imported here as well

//test that express is working, comment line 4 after this step
//console.log(express);
// setup app
const app = express(); // runs the function from the express package - dont worry about what that code does

// global middleware setup
//setup cors middleware - applies globally to all endpoints
app.use(cors());
app.use(express.json()); // lets us interpret json as objects and populates req.body from the body json
app.use(express.urlencoded({ extended: false })); // only for URL encoded POSTs from a form - ?name=bob&phone=call

const PORT = 4000;
const HOST = "127.0.0.1"; // localhost - or your computer

// STATIC FILES
// load static files from your server directory
// public gets routed to root
// to access public/index.html
// 127.0.0.1:4000/index.html not public/index.html
// if using index.html it may conflict with any root endpoint so either rename to something other
// than index.html or have different endpoints that aren't off of '/' directly (e.g. '/getMerch')
app.use(express.static(__dirname + "/public"));
// END STATIC FILES

// methods to have different resources tied to different http actions
// app.get("/books") - you could hit this from a browser
// app.post("/book") - hit this from js in a browser, or a server, or using thunderclient/postman

// GET example
app.get("/merch", (req, res) => {
  res.json(merch);
});

// POST example
app.post("/book", (req, response) => {
  console.log(req.body);
  // save this off to a mongo db

  //test that parsing middleware is working
  console.log(req.body.title); // this ensures that we are working with an object vs a json string
  response.status(200);
  response.send();
});

//Query params
// get request
// uses the ? - all data is stored in the url
// example
// localhost:4000/book/search?author=stine&publicationYear=1995&titleContains=Slappy
// filtering a search or set of resources and pairing it down
app.get("/book/search", (request, response) => {
  const query = request.query;

  const bookFound = books.find(
    (x) =>
      x.publicationDate.includes(query.publicationYear) &&
      x.title.includes(query.titleContains)
  );

  // use thunderclient localhost:4000/book/search?publicationYear=1994&titleContains=Slappy
  response.json(bookFound);
});

//listen to traffic from browser/postman/thunderclient so I can serve it up
app.listen(PORT, HOST, () =>
  console.log(`Server listening on ${HOST}:${PORT}`)
);
