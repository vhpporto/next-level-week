const express = require("express");
const nunjucks = require("nunjucks");

const server = express();

//configurar pasta pública
server.use(express.static("public"));
nunjucks.configure("src/views", {
  express: server,
  noCache: true,
});

server.get("/", (req, res) => {
  return res.render("index.html");
});

server.get("/create-point", (req, res) => {
  return res.render("create-point.html");
});

server.get("/search", (req, res) => {
  return res.render("search-results.html");
});

server.listen(3333, () => {
  console.log("[Server ON] running on port 3333]");
});
