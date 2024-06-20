// pull in the client for mongo so we can interact with the server
const { MongoClient } = require("mongodb");
const express = require("express");
require("dotenv").config();
const app = express();
app.use(express.json());

const HOST = "127.0.0.1";
const PORT = 5432;
//what can we do to test the environment variable?
//console log
// debug it
console.log("Env DB: ", process.env.DATABASE);

let client = new MongoClient(process.env.DATABASE);

async function dbConnect() {
  await client.connect();

  let db = await client.db("NinetiesClassics");

  let collection = await db.collection("Movies");

  return collection;
}

app.post("/create", async (req, res) => {
  const newMovie = req.body; // take in the json body from req
  const movieCollection = await dbConnect(); //grab the movie collection so we can do something with it
  await movieCollection.insertOne(newMovie);
  client.close(); // makes sure we dont hang and prevent other issues
  res.send();
});

app.listen(PORT, HOST, () =>
  console.log(`Server listening on ${HOST}:${PORT}`)
);
