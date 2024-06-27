const mongoose = require("mongoose");
const DB = process.env.DB;

const dbConnect = async () => {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(DB);
    console.log("Connect To: ", DB);
  } catch (err) {
    console.log("DB error: ", err);
  }
};

module.exports = { dbConnect, mongoose };
