const express = require("express");
const route = require("./file");
const app = express();

app.use(express.json());

app.use("/", (req, res, next) => {
  console.log("Middleware");
  next();
});

app.use("/get", route);

app.listen(3000, () => {
  console.log("Server Started Successfully");
});
