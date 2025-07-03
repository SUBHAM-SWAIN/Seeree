// let num = process.argv[2];

// let fact = 1;
// for (let i = 1; i <= num; i++) {
//   fact *= i;
// }
// console.log(`Factorial of ${num} is ${fact}`);

let num = process.argv[2];

function isPrime(num) {
  let isPrime = true;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }

  return isPrime;
}

for (let i = 2; i <= num; i++) {
  if (num % i === 0) {
    if (isPrime(i)) {
      console.log(`${i} is a prime factor of ${num}.`);
    }
  }
}
