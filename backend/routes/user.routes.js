const express = require("express");
const router = express.Router();
const {
  register,
  login,
  resetpassword,
  forgotpassword,
} = require("../controllers/user.controller");

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/resetpassword/:resetToken").put(resetpassword);
router.route("/forgotpassword").post(forgotpassword);

module.exports = router;
