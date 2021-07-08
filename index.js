const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const projectsRouter = require("./api/projects/projectsRouter");
const actionsRouter = require("./api/action/actionsRouter");

const server = express();

server.use(helmet());
server.use(morgan("short"));
server.use(express.json());

server.use("/api/projects/", projectsRouter);
server.use("/api/actions/", actionsRouter);

server.listen(5000, () => console.log("Server running on port 5k"));
