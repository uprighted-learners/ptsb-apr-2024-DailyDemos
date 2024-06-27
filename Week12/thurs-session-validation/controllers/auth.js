const router = require("express").Router();
const User = require("../models/Users");
const bcrypt = require("bcrypt");
const SALT = 10;
const jwt = require("jsonwebtoken");
const JWT_KEY = process.env.JWT_KEY;

/**
 * Route to handle user signup.
 *
 * @route POST /signup
 * @group Auth - Operations about user authentication
 * @param {string} req.body.name - User's name
 * @param {string} req.body.email - User's email
 * @param {string} req.body.password - User's password
 * @returns {object} 201 - User created successfully with a JSON Web Token
 * @returns {object} 500 - Internal server error
 *
 * @example request - Example request object
 * {
 *   "name": "John Doe",
 *   "email": "john.doe@example.com",
 *   "password": "SecurePassword123"
 * }
 *
 * @example response - Example response object
 * {
 *   "message": "User Created",
 *   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 * }
 */
router.post("/signup", async (req, res) => {
  try {
    //extract the body variables
    const { name, email, password } = req.body;

    // validation - reject missing pieces
    if (!name || !email || !password) {
      throw new Error("Incomplete Data");
    }

    // Instantiate a new model using provided req.body object values
    // Hash pwd using .hashSync() with req.body.pwd and SALT value
    // Assign pwd property to the value of .hashSync() return
    const hashedPassword = bcrypt.hashSync(password, SALT);
    const userObj = { name, email, password: hashedPassword };
    // above is shorthand for this way to create objects
    // {
    // name: name,
    // email: email,
    // password: hashedPassword
    // }
    const newUser = new User(userObj);
    //save this off to the collection! tada!!!
    await newUser.save();
    const token = getToken(newUser);

    res.status(201).json({
      message: "User Created",
      token,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: err,
    });
  }
});

// login route - lets us get the jwt and be able to use other routes

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    // is same as below
    //   const email = req.body.email;
    //   const password = req.body.password;

    if (!email || !password)
      throw new Error("Please provide eamil and password");

    const foundUser = await User.findOne({ email });
    if (!foundUser) throw new Error("User doesn't exist");

    const isCorrectPassword = await bcrypt.compare(
      password,
      foundUser.password
    );
    if (!isCorrectPassword) throw new Error("Username or Password incorrect");

    const token = getToken(foundUser);

    res.status(200).json({
      message: "User logged in",
      token,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: `${err}`,
    });
  }
});

function getToken(user) {
  const tenDaysInSeconds = 60 * 60 * 24 * 10;
  const token = jwt.sign(
    //payload
    { _id: user._id },
    JWT_KEY,
    { expiresIn: tenDaysInSeconds }
  );
  return token;
}

module.exports = router;


