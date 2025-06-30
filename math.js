// function add(a, b) {
//   return a + b;
// }
// function subtract(a, b) {
//   return a - b;
// }
// module.exports = { addFun: add, subFun: subtract };

//How can we do single export in Node.js?
exports.addFun = (a, b) => {
  return a + b;
};
exports.subFun = (a, b) => {
  return a - b;
};
