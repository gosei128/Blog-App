const express = require("express");
require("dotenv").config();
const blogRouter = require("./routes/blogRoutes");
const userRoute = require("./routes/userRoutes");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectDB = require("./data/db");
const app = express();

//Middleware
// Allow requests from the frontend and allow cookies to be sent
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);

      if (
        origin === "http://localhost:5173" ||
        origin === "http://localhost:3000" ||
        origin ===
          "https://blog-app-git-master-ronis-projects-0f22d049.vercel.app" ||
        origin.includes("vercel.app")
      ) {
        return callback(null, true);
      }

      callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));
app.use(cookieParser());

// app.use((req, res, next) => {
//   console.log(`${req.method} ${req.url}`);
//   next();
// });

app.use("/api/blogs", blogRouter);
app.use("/api/user", userRoute);

//listener
connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`The server is running at port ${process.env.PORT}`);
    });
  })
  .catch((e) => {
    console.log(e.message, "Something went wrong");
  });
