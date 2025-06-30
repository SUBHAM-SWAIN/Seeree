//blocking Request
const fs = require("fs");
console.log(1);
console.log(2);
console.log(3);
console.log(4);
let data = fs.readFileSync("output2.txt", "utf-8");
console.log(data);
console.log(5);
console.log(6);
console.log(7);
console.log(8);

//non-blocking Request
console.log(1);
console.log(2);
console.log(3);
console.log(4);
fs.readFile("output2.txt", "utf-8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log(data);
});
console.log(5);
console.log(6);
console.log(7);
console.log(8);
