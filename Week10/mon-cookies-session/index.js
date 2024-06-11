const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const port = process.env.PORT || 5000;

app.use(express.static("public"));
app.use(cookieParser());

app.get("/test", (request, response) => {
  console.log(request.cookies);
  response.cookie("cart", ["milk", "oatmeal cookies", "ice cream"]);
  response.send();
});

app.listen(port, () =>
  console.log(`Cookie example listening on port ${port}!`)
);
