const express = require("express");
const path = require("path");

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

//ENDPOINTS
app.get("/", (req, res) => {
  const params = {};
  res.status(200).render("index.pug", params);
});

//START THE SERVER

app.listen(port, () => {
  console.log(`The application statrted successfully on port ${port}`);
});
