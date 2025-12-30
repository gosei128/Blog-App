const Blog = require("../models/blogSchema.js");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const blog_home = async (req, res) => {
  try {
    const blogs = await Blog.find({}).sort({ createdAt: -1 });
    res.status(200).json({
      user: res.locals.user,
      blogs,
    });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ error: e.message });
  }
};

const blog_details = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid ID" });
  }

  const blog = await Blog.findById(id);

  if (!blog) {
    return res.status(404).json({ error: "No Blog" });
  }

  res.status(200).json(blog);
};

const blog_create_post = async (req, res) => {
  const { title, body, author } = req.body;

  if (!req.file) {
    return res.status(400).json({ error: "Image file required" });
  }
  try {
    // const imageUrl = `${req.protocol}://${req.get("host")}/uploads/${
    //   req.file.filename
    // }`;

    const blogs = await Blog.create({
      title,
      body,
      author,
      image: req.file.filename,
    });

    res.status(200).json(blogs);
  } catch (e) {
    console.log(e.message);
    res.status(400).json({ error: e.message });
  }
};

const blog_delete = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid ID" });
  }

  const blog = await Blog.findOneAndDelete({ _id: id });

  if (!blog) {
    return res.status(404).json({ error: "No Blog" });
  }

  res.status(200).json(blog);
};

const blog_title = async (req, res) => {
  const { title } = req.params;
  // Use regex for case-insensitive partial match
  const blogTitle = await Blog.find({
    title: { $regex: title, $options: "i" },
  }).sort({ createdAt: -1 });

  if (!blogTitle || blogTitle.length === 0) {
    return res.status(404).json({ error: "No such Blog" });
  }

  res.status(200).json(blogTitle);
};

module.exports = {
  blog_home,
  blog_details,
  blog_create_post,
  blog_delete,
  blog_title,
};
