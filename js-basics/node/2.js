const fs = require("fs");
let text = fs.readFileSync("abc.txt", "utf-8");
text = text.replace("sample", "Rohan");

console.log("The content of the file is");
console.log(text);

fs.writeFileSync("rohan.txt", text);

console.log("creating a new file");
