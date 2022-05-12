const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const route = require("./file");

dotenv.config();

app.use(cors());
app.use(express.json());

app.use("/", (req, res, next) => {
  console.log("Middleware");
  next();
});

app.use("/get", route);

app.listen(process.env.PORT || 3000, () => {
  console.log("Server Started Successfully");
});
