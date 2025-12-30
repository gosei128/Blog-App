const User = require("../models/user");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.JWT_SECRET, { expiresIn: "3d" });
};

const login_post = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);

    res.status(200).json({ user });
  } catch (e) {
    console.log("Something went wrong", e.message);
  }
};

const signup_post = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.signup(email, password);
    const token = createToken(user._id);
    console.log(token);
    // set cookie with sensible defaults for development
    // httpOnly: true prevents JS access (recommended). If you need to read cookie from JS, set to false.
    res.cookie("jwt", token, {
      maxAge: 3 * 24 * 60 * 60 * 1000,
      httpOnly: true,
      sameSite: "lax",
    });
    res.status(200).json({ email, token });
  } catch (e) {
    console.log("Something went wrong", e.message);
  }
};

module.exports = {
  login_post,

  signup_post,
};
