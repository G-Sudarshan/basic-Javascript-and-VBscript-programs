const express = require("express");
const path = require("path");
const app = express();
const bodypparser = require("body-parser");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/contactDance", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

port = 80;

//Define mongoose schema

const contactSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  address: String,
  desc: String,
});

const Contact = mongoose.model("Contact", contactSchema);

//EXPRESS SPECIFIC STUFF

app.use("/static", express.static("static")); //static files
app.use(express.urlencoded());

//PUG SPECIFIC STUFF
//set the template engine as pug
app.set("view engine", "pug");

//set view directory
app.set("views", path.join(__dirname, "views"));

//ENDPOINTS
app.get("/", (req, res) => {
  const params = {};
  res.status(200).render("home.pug", params);
});

app.get("/contact", (req, res) => {
  const params = {};
  res.status(200).render("contact.pug", params);
});

app.post("/contact", (req, res) => {
  var myData = new Contact(req.body);
  myData
    .save()
    .then(() => {
      res.send("This Item has been saved to database");
    })
    .catch(() => {
      res.status(400).send("Item was not saved to database");
    });
  // res.status(200).render("contact.pug");
});

//START THE SERVER

app.listen(port, () => {
  console.log(`The application statrted successfully on port ${port}`);
});
