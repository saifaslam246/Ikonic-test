const express = require("express");
const cookieparser = require("cookie-parser");
const bodyparser = require("body-parser");
const fileupload = require("express-fileupload");
const path = require("path");
const cors = require('cors')
const app = express();

const errorMiddleware = require("./middleware/error");


// settting up config file
if (process.env.NODE_ENV !== "PRODUCTION")
  require("dotenv").config({ path: "backend/config/config.env" });


app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cookieparser());
app.use(fileupload());
app.use(cors())

// import all products

const products = require("./routes/question");

app.use("/api/v1", products);


if (process.env.NODE_ENV === "PRODUCTION") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
  });
}
app.use(errorMiddleware);
module.exports = app;
