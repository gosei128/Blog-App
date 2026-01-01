const { Router } = require("express");

const {
  login_post,
  signup_post,
  get_current_user,
  logout_post,
} = require("../controller/userController");
const router = Router();

router.get("/", get_current_user);

router.post("/login", login_post);

router.post("/signup", signup_post);
router.post("/logout", logout_post);

module.exports = router;
