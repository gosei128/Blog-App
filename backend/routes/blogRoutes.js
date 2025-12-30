const express = require("express");
const { requireAuth, checkUser } = require("../middleware/auth.js");
const router = express.Router();
const upload = require("../middleware/upload.js");
const {
  blog_home,
  blog_details,
  blog_create_post,
  blog_delete,
  blog_title,
} = require("../controller/blogController");

router.get("/", checkUser, blog_home);
router.get("/title/:title", blog_title);

router.get("/:id", blog_details);

router.post("/", upload.single("image"), requireAuth, blog_create_post);

router.delete("/:id", blog_delete);
module.exports = router;
