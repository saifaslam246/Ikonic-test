const app = require("./app");
const connectDatabase = require("../backend/config/database");

// Handle Uncaught exceptions
process.on("uncaughtException", (err) => {
  console.log(`ERROR: ${err.stack}`);
  console.log("Shutting down due to uncaught exception");
  process.exit(1);
});

// settting up config file

if (process.env.NODE_ENV !== "PRODUCTION")
  require("dotenv").config({ path: "backend/config/config.env" });

// dotenv.config({ path: "backend/config/config.env" });
// connection to databse
connectDatabase();
// SET CLOUDINARY CONFIGRATION


const server = app.listen(process.env.PORT, () => {
  console.log(
    `server start at port number ${process.env.PORT} ${process.env.NODE_ENV}`
  );
});
// Handle Unhandled Promise rejections
process.on("unhandledRejection", (err) => {
  console.log(`ERROR: ${err.stack}`);
  console.log("Shutting down the server due to Unhandled Promise rejection");
  server.close(() => {
    process.exit(1);
  });
});
