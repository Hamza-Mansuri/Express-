const express = require("express")

const router = express.Router();

const registerUser = require("./userController");
const { log } = require("console");

router.route("/register").post(registerUser)
router.route("/login").get(registerUser)
router.route("/product").delete(registerUser)


module.exports = router;