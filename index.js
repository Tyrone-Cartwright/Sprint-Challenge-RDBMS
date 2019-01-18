const knex = require("knex");
const express = require("express");
const knexConfig = require("./knexfile.js");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(morgan("short"));
server.use(cors());

// Connect to database
const db = knex(knexConfig.development);

server.get("/", (req, res) => {
  res.send("API Working");
});

server.listen(5000, () => console.log("server on 5k"));
