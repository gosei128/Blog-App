const { Router } = require("express");

const { login_post, signup_post } = require("../controller/userController");
const router = Router();

router.post("/login", login_post);

router.post("/signup", signup_post);

module.exports = router;
