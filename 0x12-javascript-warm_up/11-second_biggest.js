#!/usr/bin/node
// script that prints the addition of 2 integers

const args = process.argv.slice(2);

const firstArgValue = parseInt(args[0]);

if (args.length === 1) {
  console.log(0);
}

if (Number.isNaN(firstArgValue)) {
  console.log(0);
} else {
  args.sort(function (a, b) {
    if (a > b) { return 1; }
    if (a < b) { return -1; }
    return 0;
  });

  console.log(args[args.length - 2]);
}
