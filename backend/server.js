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
    origin: [
      // "http://localhost:3000", // for local development
      // "http://localhost:5173", // for Vite local dev
      "https://blog-app-git-master-ronis-projects-0f22d049.vercel.app/", // your Vercel URL
      "https://*.vercel.app",
    ],
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
