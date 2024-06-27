require("dotenv").config();
const express = require("express");
const app = express();
const { dbConnect } = require("./db");

const PORT = 4000;
const HOST = "127.0.0.1";
console.log(process.env.DB);

const authController = require("./controllers/auth");
const routesController = require("./controllers/routes");
const sessionValidation = require("./middlewares/session");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(authController);
app.use(sessionValidation, routesController);

app.listen(PORT, HOST, () => {
  dbConnect();
  console.log(`[server] listening on ${HOST}:${PORT}`);
});
