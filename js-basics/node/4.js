// Synchronous blocking
// Line by line execustion

// Asyncronooous and non-blocking
// callbacks will fire

const fs = require("fs");
let text = fs.readFile("abc.txt", "utf-8", (err, data) => {
  console.log(err, data);
});
// text = text.replace("sample", "Rohan");

console.log("The content of the file is");
// console.log(text);

// fs.writeFileSync("rohan.txt", text);

// console.log("creating a new file");
