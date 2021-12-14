const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const {
  directregister,
  register,
  login,
  logout,
  profile,
  resetpassword,
  forgotpassword,
  refreshToken,
} = require("../controllers/user.controller");

router.route("/directregister/:role").post(directregister);
router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/refresh_token").get(refreshToken);
router.route("/resetpassword/:email").put(resetpassword);
router.route("/forgotpassword").post(forgotpassword);
router.get("/internProfile", auth, profile);

module.exports = router;
