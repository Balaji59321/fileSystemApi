const express = require("express");
const route = express.Router();
const fil = require("./controller");

route.get("/list", fil.list);
route.post("/write", fil.write);

module.exports = route;
