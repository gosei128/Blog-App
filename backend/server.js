const express = require("express");
require("dotenv").config();
const blogRouter = require("./routes/blogRoutes");
const cors = require("cors");
const connectDB = require("./data/db");
const app = express();

//Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/blogs", blogRouter);

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
