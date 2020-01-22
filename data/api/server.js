const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const dealerRouter = require("./dealerRouter");

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());

server.use("/api/cars", dealerRouter);

server.get("/", (req, res) => {
  res.json("api is running");
});

module.exports = server;
