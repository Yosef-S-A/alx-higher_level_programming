#!/usr/bin/node
// script that prints the addition of 2 integers

let result = 1;

const args = process.argv.slice(2);

const firstArgValue = parseInt(args[0]);

if (Number.isNaN(firstArgValue)) {
  console.log(1);
} else {
  factorial(firstArgValue);
}

function factorial (a) {
  result *= a;

  const tmpVal = a - 1;

  if (tmpVal > 1) {
    factorial(tmpVal);
  }

  if (tmpVal === 1) {
    console.log(result);
  }
}
