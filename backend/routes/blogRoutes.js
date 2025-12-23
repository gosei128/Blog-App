const express = require("express");
const router = express.Router();
const {
  blog_home,
  blog_details,
  blog_create_post,
  blog_delete,
  blog_title,
} = require("../controller/blogController");

router.get("/", blog_home);

router.get("/:id", blog_details);

router.get("/title/:title", blog_title);

router.post("/", blog_create_post);

router.delete("/:id", blog_delete);
module.exports = router;
