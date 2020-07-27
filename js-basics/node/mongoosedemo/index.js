const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/harryKart", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  // we're connected!
  // console.log("We are connected");
});

const kittySchema = new mongoose.Schema({
  name: String,
});

kittySchema.methods.speak = function () {
  const greeting = "My name is " + this.name;
  console.log(greeting);
};

const Kitten = mongoose.model("Kitten", kittySchema);

const harry = new Kitten({ name: "harryKitty2" });
// console.log(harry.name);
// harry.speak();

// harry.save(function (err, harry) {
//   if (err) return console.error(err);
//   harry.speak();
// });

Kitten.find({ name: /^harry/ }, function (err, kittens) {
  if (err) return console.error(err);
  console.log(kittens);
});
