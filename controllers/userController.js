//npm i install express-async-handler install
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");
//*we are using moongoose it returns a promise so we need a async.

const registerUser = asyncHandler(async (request, response) => {
  console.log("req body-->", request.body);
  const { username, email, password } = request.body;
  if (!username || !email || !password) {
    response.status(400);
    throw new Error("All Fields are Mandatory");
  }
  const userAvailable = await User.findOne({ email });
  if (userAvailable) {
    response.status(400);
    throw new Error("User already register");
  }
  // Hash Password
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log("hashedPassword:", hashedPassword);
  const user = await User.create({
    username,
    email,
    password: hashedPassword,
  });
  if (user) {
    response.status(201).json({ _id: user.id, email: user.email });
  } else {
    response.status(400);
    throw new Error("User Data is not Valide");
  }
  response.json({ message: "Register User" });
});   
const LoginUser = asyncHandler(async (request, response) => {
  response.status(200).json({ message: "login user" });
});
// @access private
const currentUser = asyncHandler(async (request, response) => {
  response.status(200).json({ message: "current user info" });
});

module.exports = { registerUser, LoginUser, currentUser };
