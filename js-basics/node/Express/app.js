const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
port = 80;

//EXPRESS SPECIFIC STUFF

app.use("/static", express.static("static")); //static files
app.use(express.urlencoded());
//PUG SPECIFIC STUFF
//set the template engine as pug
app.set("view engine", "pug");

//set view directory
app.set("views", path.join(__dirname, "views"));

//our pug demo endpoint
//ENDPOINTS
app.get("/", (req, res) => {
  const con = "This is the best content";
  const params = { title: "pubg is the best game", content: con };
  res.status(200).render("index.pug", params);
});

app.post("/", (req, res) => {
  name = req.body.name;
  age = req.body.age;
  gender = req.body.gender;
  let outputToWrite = `The name of client is ${name}, the age of cleint is ${age}, the gender of client is ${gender}`;
  fs.writeFileSync("output.txt", outputToWrite);

  const params = { message: "your form has been submitted succefully" };
  res.status(200).render("index.pug", params);
});

//START THE SERVER

app.listen(port, () => {
  console.log(`The application statrted successfully on port ${port}`);
});
