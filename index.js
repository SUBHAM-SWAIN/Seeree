// // console.log("My First Project");

// // let num = 5;
// // let fact = 1

// // for (let i = 1; i <= num; i++) {
// //     fact *= i;

// // }
// // console.log(`Factorial of ${num} is ${fact}`);

// // //factorial function
// // function factorial(n) {
// //     if (n === 0 || n === 1) {
// //         return 1;
// //     } else {
// //         return n * factorial(n - 1);
// //     }
// // }
// // console.log(`Factorial of ${num} is ${factorial(num)}`);

// let num = 15;
// let count = 0;

// for (let i = 1; i <= num; i++) {
//   if (num % i === 0) {
//     count++;
//   }
// }

// if (count === 2) {
//   console.log(`${num} is a prime number`);
// } else {
//   console.log(`${num} is not a prime number`);
// }

// //sum of n numbers
// sum = 0;
// for (let i = 1; i <= num; i++) {
//   sum += i;
// }
// console.log(`Sum of first ${num} numbers is ${sum}`);

// //fibonacci series
// for (let i = 0, j = 1, k = 0; k < num; k++) {
//   console.log(i);
//   let next = i + j;
//   i = j;
//   j = next;
// }
// console.log(`Fibonacci series up to ${num} terms is printed above`);

// // reverse a string
// let str = "Hello World";
// let reversedStr = "";
// for (let i = str.length - 1; i >= 0; i--) {
//   reversedStr += str[i];
// }
// console.log(`Reversed string of "${str}" is "${reversedStr}"`);

// // check if a number is even or odd
// let number = 10;
// if (number % 2 === 0) {
//   console.log(`${number} is an even number`);
// } else {
//   console.log(`${number} is an odd number`);
// }

// // find the largest number in an array
// let arr = [3, 5, 7, 2, 8, 1];
// let largest = arr[0];
// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > largest) {
//     largest = arr[i];
//   }
// }
// console.log(`The largest number in the array is ${largest}`);
// // find the smallest number in an array
// let smallest = arr[0];
// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] < smallest) {
//     smallest = arr[i];
//   }
// }
// console.log(`The smallest number in the array is ${smallest}`);
// //table of a number
// let tableNum = 5;
// console.log(`Table of ${tableNum}:`);
// for (let i = 1; i <= 10; i++) {
//   console.log(`${tableNum} x ${i} = ${tableNum * i}`);
// }

// let { addFun: add, subFun: sub } = require("./math.js");

// console.log(add(2, 3));
// console.log(sub(5, 2));

// const fs = require("fs");
//synchronous file read
// const data = fs.readFileSync("seeree.txt", "utf8");
// console.log(data);

// //asynchronous file read
// fs.readFile("seeree.txt", "utf8", (err, data) => {
//   if (err) {
//     console.error("Error reading file:", err);
//     return;
//   }
//   console.log(data);
// });

// //write to a file
// fs.writeFileSync('output.txt', 'Hello, this is a test file created by Node.js!');
// fs.writeFile('output.txt', 'This is an asynchronous write operation.', (err) => {
//   if (err) {
//     console.error("Error writing file:", err);
//     return;
//   }
//   console.log("File written successfully!");
// });

// //append to a file

// fs.appendFileSync("output.txt", "\nThis is an appended line.");
// fs.appendFile('output.txt', '\nThis is an appended line.', (err) => {
//   if (err) {
//     console.error("Error appending to file:", err);
//     return;
//   }
//   console.log("File appended successfully!");
// });

// copy file

// fs.cpSync('math.js','Math1.js')

// fs.cp("math.js", "math2.js", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("file copied successfully!");
//   }
// });

//delete file

// fs.unlinkSync("math2.js");
// fs.unlink("Math1.js", (err) => {
//   if (err) {
//     console.log(err);3
//   } else {
//     console.log("file deleted successfully!");
//   }
// });

//Move file

// fs.renameSync("output.txt", "output1.txt");
// fs.rename("output1.txt", "output2.txt", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("file moved successfully!");
//   }
// });

// const fs = require("fs");
// const readline = require("readline");

// let mainBalance = parseInt(fs.readFileSync("balance.txt", "utf8"));

// console.log(`Your current balance is ${mainBalance}`);

// const r1 = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// r1.question("Enter the amount ", (amount) => {
//   amount = parseInt(amount);
//   r1.question("Enter Process (d for deposit, w for withdraw): ", (process) => {
//     process = process.toLowerCase();
//     if (process === "d") {
//       mainBalance += amount;
//     } else if (process === "w") {
//       if (amount > mainBalance) {
//         console.log("Insufficient balance");
//       } else {
//         mainBalance -= amount;
//       }
//     } else {
//       console.log("Invalid process");
//     }
//     fs.writeFileSync("balance.txt", mainBalance.toString());
//     console.log(`Your new balance is ${mainBalance}`);

//     r1.close();
//   });
// });

const fs = require("fs");
const { stdin, stdout } = require("process");
const readline = require("readline");

let mainBalance = parseInt(fs.readFileSync("balance.txt", "utf-8"));
console.log(`Your current balance is ${mainBalance}`);

let r1 = readline.createInterface({
  input: stdin,
  output: stdout,
});

r1.question("Enter Amount", (amount) => {
  amount = parseInt(amount);
  r1.question("Enter Process (d for deposite , w for withdraw)", (process) => {
    process = process.toLowerCase();
    if (process == "d") {
      mainBalance += amount;
    } else if (process == "w") {
      if (amount > mainBalance) {
        console.log("insufficient balance");
      } else {
        mainBalance -= amount;
      }
    } else {
      console.log("Enter Valid Process");
    }
    console.log(`Remaining Balance is ${mainBalance}`);
    fs.writeFileSync("balance.txt", mainBalance.toString());
    r1.close();
  });
});
