const { Router } = require("express");

const {
  login_post,
  signup_post,
  get_current_user,
} = require("../controller/userController");
const router = Router();

router.get("/", get_current_user);

router.post("/login", login_post);

router.post("/signup", signup_post);

module.exports = router;
