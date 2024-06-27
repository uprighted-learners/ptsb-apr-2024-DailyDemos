const jwt = require("jsonwebtoken");
const Users = require("../models/Users");
const JWT_KEY = process.env.JWT_KEY;

const sessionValidation = async (req, res, next) => {
  try {
    //Preflight request - this verifies if endpoint accepts HTTP
    if (req.method === "OPTIONS") {
      next();
    }
    // Check if the jwt (token) has been provided
    if (!req.headers.authorization)
      throw new Error(
        "'You shall not pass' - Spock in Star Wars the New Beginning"
      );

    // Sanitize the token to remove "Bearer" from it if it exists
    const authorization = req.headers.authorization;
    const authToken = authorization.includes("Bearer")
      ? authorization.split(" ")[1]
      : authorization;

    const payload = authToken ? jwt.verify(authToken, JWT_KEY) : undefined;

    if (!payload) throw new Error("Token is BROKEN (a.k.a Invalid token)");

    //Call users collection to find user matching payload id

    const foundUser = await Users.findOne({ _id: payload._id });

    if (!foundUser) throw new Error("User not found");

    req.user = foundUser;
    next();
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: `${err}`,
    });
  }
};

module.exports = sessionValidation;
