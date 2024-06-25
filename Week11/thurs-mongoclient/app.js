// pull in the client for mongo so we can interact with the server
const { MongoClient, ObjectId } = require("mongodb");
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

const client = new MongoClient(process.env.DATABASE, {
  useUnifiedTopology: true,
});

async function dbConnect() {
  await client.connect();

  let db = await client.db("NinetiesClassics");

  let collection = await db.collection("Movies");

  return collection;
}

async function inventoryDbConnect() {
  await client.connect();
  const database = await client.db("test");
  const collection = await database.collection("inventory");
  return collection;
}

// MOVIES EXAMPLE
app.post("/create", async (req, res) => {
  const newMovie = req.body; // take in the json body from req
  const movieCollection = await dbConnect(); //grab the movie collection so we can do something with it
  await movieCollection.insertOne(newMovie);
  client.close(); // makes sure we dont hang and prevent other issues
  res.send();
});

app.get("/movies", async (req, res) => {
  const movieCollection = await dbConnect();

  const results = [];

  let movieList = await movieCollection.find({});

  await movieList.forEach((movie) => {
    results.push(movie);
  });
  res.json(results);
});

// INVENTORY/QUERY EXAMPLES

// hit this endpoint just once and wait for a 200 to get the documents populated
app.get("/initialSeed", async (req, res) => {
  const collection = await inventoryDbConnect();
  await collection.insertMany([
    {
      item: "journal",
      qty: 25,
      size: { h: 14, w: 21, uom: "cm" },
      status: "A",
    },
    {
      item: "notebook",
      qty: 50,
      size: { h: 8.5, w: 11, uom: "in" },
      status: "A",
    },
    {
      item: "paper",
      qty: 100,
      size: { h: 8.5, w: 11, uom: "in" },
      status: "D",
    },
    {
      item: "planner",
      qty: 75,
      size: { h: 22.85, w: 30, uom: "cm" },
      status: "D",
    },
    {
      item: "postcard",
      qty: 45,
      size: { h: 10, w: 15.25, uom: "cm" },
      status: "A",
    },
  ]);

  await client.close();
  res.send();
});

// add the findAllinventory endpoint here
// should be named "inventory" and be a get

// find one
//const results = await collection.findOne({ item: "planner" });
//console.log(results);

//find using other filters
//const results = await collection.find( { status: "D"}); // should return 2 values
//const results = await collection.find({ status: "D", item: "planner" })

// or with same properties
// const results = await collection.find({
//   $or: [{ item: "planner" }, { item: "notebook" }],
// });

//or with different properties - should return 4 results
// const results = await collection.find({
//   $or: [{ status: "A" }, { item: "paper" }],
// });

// this is simlar to doing the following with conditionals
//if (document.status === "A" || document.item === "paper") {
//found.push(obj);
// }
//   })

// greaterthan and lessthan
// const results = await collection.find( { <field>: { $gt: <value1>, $lt: <value2> } } );
// const results = await collection.find({ status: "A", qty: { $lt: 30 } });

// using the in a set method
// const results = await collection.find({ status: { $in: ["A", "B", "C"] } }); //
// const results = await collection.find({
//   item: { $in: ["journal", "notebook", "paper"] },
// });

//querying nested items

// const results = await collection.find({
//   status: "A",
//   size: { h: 14, w: 21, uom: "cm" },
// });

//const results = await collection.find({ "size.h": 14 });

//const results = await collection.find({ status: "A", "size.h": 14 });

// nested range queries
//const results = await collection.find({ "size.h": { $gt: 10, $lt: 100 } });

// complex nested range
// const results = await collection.find( {
//      status: "A",
//      $or: [
//             { qty: { $lt: 30 } },
//             { "size.h": { $gt: 10 } }
//           ]
//     }
// )

app.listen(PORT, HOST, () =>
  console.log(`Server listening on ${HOST}:${PORT}`)
);
