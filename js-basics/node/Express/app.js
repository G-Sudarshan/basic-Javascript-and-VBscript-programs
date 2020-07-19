const express = require("express");
const path = require("path");
const app = express();
port = 80;
app.use("/static", express.static("static")); //static files

//set the template engine as pug
app.set("view engine", "pug");

//set view directory
app.set("views", path.join(__dirname, "views"));

//our pug demo endpoint
app.get("/demo", (req, res) => {
  res.render("demo", {
    title: "Hey harry",
    message: "Hello there! Thanks for tell how to use pug",
  });
});

app.get("/", (req, res) => {
  res.status(200).send("This is homepage of first app");
});

app.get("/about", (req, res) => {
  res.send("This is about page");
});

app.post("/about", (req, res) => {
  res.send("This is about page from post method");
});

app.get("/this", (req, res) => {
  res.status(404).send("This page is not found");
});

app.listen(port, () => {
  console.log(`The application statrted successfully on port ${port}`);
});
