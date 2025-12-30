const jwt = require("jsonwebtoken");

const User = require("../models/user");

const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        return res.status(401).json({ error: "Not authorized" });
      } else {
        console.log(decodedToken);
        next();
      }
    });
  } else {
    return res.status(401).json({ error: "No token, authorization denied" });
  }
};

const checkUser = async (req, res, next) => {
  const token = req.cookies.jwt;

  if (!token) {
    req.user = null;
    next();
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded._id).select("-password");

    req.user = user;
    next();
  } catch (err) {
    req.user = null;
    next();
  }
  //   const token = req.cookies.jwt;
  //   if (token) {
  //     jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
  //       if (err) {
  //         console.log(err.message);
  //         res.locals.user = null;
  //         next();
  //       } else {
  //         console.log(decodedToken);
  //         const user = await User.findById(decodedToken._id);
  //         res.locals.user = user;
  //         next();
  //       }
  //     });
  //   } else {
  //     res.locals.user = null;
  //     next();
  //   }
};
module.exports = { requireAuth, checkUser };
