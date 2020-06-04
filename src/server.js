const express = require("express");
const nunjucks = require("nunjucks");

const server = express();

//configurar pasta pública
server.use(express.static("public"));

server.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

server.get("/create-point", (req, res) => {
  res.sendFile(__dirname + "/views/create-point.html");
});

server.get("/search", (req, res) => {
  res.sendFile(__dirname + "/views/search-results.html");
});

server.listen(3333, () => {
  console.log("[Server ON] running on port 3333]");
});
