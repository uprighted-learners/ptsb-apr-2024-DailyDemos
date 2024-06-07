// add express so we can use it
const express = require("express");
const cors = require("cors");
//test that express is working, comment line 4 after this step
//console.log(express);
// setup app
const app = express();
//setup cors
app.use(cors());
//console.log(app);
// initial setup
// port

const PORT = 4000;
// host
const HOST = "127.0.0.1"; // localhost - or your computer
app.use(express.json()); // lets us interpret json as objects and populates req.body from the body json
app.use(express.urlencoded({ extended: false })); // only for URL encoded POSTs from a form - ?name=bob&phone=call
// endpoint
// this lets our server actually do something
//"/" will make it so this function runs after you
// hit 127.0.0.1:4000 from postman/thunderclient

// for our application
// when there is a get command

//log in middleware

const logRequest = (req, res, next) => {
  console.log(req.method, req.url);
  next();
};

// against the root of our site "/"
// perform the arrow/callback function
app.get("/", logRequest, (req, res) => {
  console.log(req);

  res.send("Hello, you have a working server!!!");
});

// post
// sending over a json body along with an endpoint

// route
// destination address

// 127.0.0.1:4000/login - /login part is the route

// {
//"username": "genericBot",
//"password": "123456"
//}

app.post("/login", (req, res) => {
  console.log(req);
  const { username, password } = req.body;
  //   // same as doing this
  //   //const username = req.body.username;
  //   //const password = req.body.password;

  //   // do a bunch of cool stuff
  const hasAccess = username.length > 0 && password.length > 0;
  if (hasAccess) {
    console.log("You logged in successfully");
    res.send("Successful Login");
  } else {
    console.log("Fracaso Epico");
    res.send(
      "Sorry, you failed to login, please wait 1 year before reattempting"
    );
  }
});

app.post("/address", (req, res) => {
  console.log(req.body);

  // how do we send back json

  // 1. send back the object
  // 2. Create a literal {} and send that object back
  // 3. stringify Json
  // 4. String as JSON

  const responseJson = {
    succeeded: true,
    saved: true,
  };

  res.json(responseJson);
});

// PARAMS
//path segment example
//127.0.0.1:4000/UprightEducation/til/blob/master/README.md
app.get("/:user/:repo/:section/:branch/:filepath", (req, res) => {
  console.log(req.params);
  res.send("Thanks for your url, it was delicious");
});

// more realistic example
// similar to swapi.dev
app.get("/api/people/:id", (req, res) => {
  const id = req.params.id;
  // grab the info from db based off of id

  res.send("Info from server for person: " + id);
});
// END PARAMS

// QUERY STRING
// SEARCH EXAMPLE
app.get("/search", (req, res) => {
  console.log("Its alive");

  const { language, searchTerms, timePeriod } = req.query;

  if (language) {
    // set up the language
    console.log(`Language is ${language}`);

    //some switch statement to check all language types
  }
  if (searchTerms) {
    console.log(`You Search for ${searchTerms}`);
  }
  if (timePeriod) {
    console.log(`Only pulling records from: ${timePeriod}`);
  }
  res.send("Here are your results!");
});

// END QUERY STRING

// STATIC FILES
// load static files from your server directory
// public gets routed to root
// to access public/index.html
// 127.0.0.1:4000/index.html not public/index.html
app.use(express.static(__dirname + "/public"));
// END STATIC FILES

// if we can't find a route then log here

app.use((req, res, next) => {
  res.status(404).send("404 Not Found");
});

// listener
app.listen(PORT, HOST, () =>
  console.log(`Server listening on ${HOST}:${PORT}`)
);

// if you ever get this message
//Error: listen EADDRINUSE: address already in use 127.0.0.1:4000
// 1. try closing all of your open terminals
// 2. npx kill-port 4000 //or whatever port is in use
