const express = require("express");
const router = express.Router();
const {registerUser,LoginUser,currentUser} =  require("../controllers/userController")

//Get request
router.route("/register").post(registerUser);
router.route("/login").post(LoginUser);
router.route("/current").get(currentUser);

module.exports = router;
