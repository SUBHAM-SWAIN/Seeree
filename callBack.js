// let greet = ( callback ) => {
//   callback("subham");
// }

// greet( (name)=>{
//     console.log(`Hello ${name}`);
// });

let name = process.argv[2];
// let greet = (name, callback) => {
//   callback(name);
// };

// greet("subham", (name) => {
//   console.log(`Hello ${name}`);
// });
let greet = (callback) => {
  callback(name);
};

greet((name) => {
  console.log(`Hello ${name}`);
});