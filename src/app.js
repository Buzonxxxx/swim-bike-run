const express = require("express");
const app = express();
const hbs = require("hbs");
const path = require("path");

const port = process.env.PORT || 3000;

const publicDirectoryPath = path.join(__dirname, "../public");
const viewPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// Setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get("/", (req, res) => {
  res.render("landing");
});

app.get("/rank", (req, res) => {
  res.render("rank");
});

app.get("/new", (req, res) => {
  res.render("new");
});

app.listen(port, () => {
  console.log(`server is up on port ${port}`);
});
