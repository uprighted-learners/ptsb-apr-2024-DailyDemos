//JWT example

const jwt = require("jsonwebtoken");
require("dotenv").config(); //allows reading of .env file

const payload = {
  sub: "123456",
  name: "Joe Shmoe",
  admin: true,
};

const signedJWT = jwt.sign(payload, process.env.SECRET_KEY, {
  expiresIn: "1 day",
});
//console.log(signedJWT);

const verified = jwt.verify(signedJWT, process.env.SECRET_KEY);
//console.log(verified);

// bcrypt

const bcrypt = require("bcrypt");
const saltRounds = 10;
const plainTextPassword = "123456";

let hashedValue;

function encryptDecrypt() {
  bcrypt.hash(plainTextPassword, saltRounds, (err, hash) => {
    console.log(`unhashed password: ${plainTextPassword}`);
    console.log(`hashed password: ${hash}`);
    hashedValue = hash;
    // store our password in our db here or store it to a variable that
    // the Model instance can use

    // example of comparing existing data from database

    decrypt(bcrypt);
  });
}

function decrypt(bcrypt) {
  bcrypt.compare(plainTextPassword, hashedValue, (err, result) => {
    console.log(`Password matches hash: ${result}`);

    if (result) {
      // let them in the site
    } else {
      console.log("please retry");
    }
  });
}

encryptDecrypt();
