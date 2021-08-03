#!/usr/bin/node

// script that prints a message depending
// on the number of arguments passed

const myArgs = process.argv.slice(2);

if (myArgs.length) {
  console.log('Argument found');
} else {
  console.log('No argument');
}
