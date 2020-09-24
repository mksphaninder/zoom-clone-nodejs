const { RSA_NO_PADDING } = require("constants");
const express = require("express");

// init express server
const app = express();
const server = require("http").Server(app);

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("room");
});

server.listen(3030); // port
