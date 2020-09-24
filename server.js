const { RSA_NO_PADDING } = require("constants");
const express = require("express");

// init express server
const app = express();
const server = require("http").Server(app);

// setting up default view engine.
app.set("view engine", "ejs");

app.use(express.static("public"));

// setting up uuid for generating the unique id's
const { v4: uuidv4 } = require("uuid");

app.get("/", (req, res) => {
  res.redirect(`/${uuidv4()}`);
});

app.get("/:room", (req, res) => {
  res.render("room", { roomId: req.params.room });
});
server.listen(3030); // port
