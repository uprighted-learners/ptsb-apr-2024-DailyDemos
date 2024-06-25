// import mongoose package
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/example_db");

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection errror:"));

const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  hobbies: Array,
  current: Boolean,
});

const Student = mongoose.model("Student", studentSchema);

const fatima = new Student({
  name: "Fatima",
  age: 5,
  hobbies: ["skating", "rock climbing"],
});

//awaiting these is better!!!
fatima.save();

//add a new property not in our schema? what will happen

const bob = new Student({
  name: "Bob",
  age: 25,
  hobbies: ["couch surfing", "ski jumping"],
  employed: true,
});

bob.save();

// add values with the wrong datatypes

const bill = new Student({
  name: "Bill",
  age: "break this", // converted to a 1
  hobbies: ["couch surfing", "ski jumping"],
});

// erro handling
async function callBill() {
  // closer to how you would handle errors with a controller
  try {
    await bill.save();
  } catch (err) {
    console.log(err); // should throw error here because of invalid data
  }
}
callBill();
