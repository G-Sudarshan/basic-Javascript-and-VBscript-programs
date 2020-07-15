// console.log("Functions in js");

function greet(name, greetText = "Greeetings from Javascript") {
  let name1 = "Name1";
  //   console.log(name1);
  console.log(greetText + " " + name);
  console.log(name + " is good programmer");
}

function sum(a, b, c) {
  let d = a + b + c;
  return d;
}
let name = "Harry";
let name1 = "shubham";
let name2 = "Rohan";
let name3 = "Sagar";
let greetText = "Good Morning";
greet(name, greetText);
greet(name1);

let returnVal = sum(10, 20, 30);
console.log(returnVal);
// greet(name2, greetText);
// greet(name3, greetText);
