#!/usr/bin/node

// A class that defines a rectangle
// and checks if w and h are greater than
// 0. If not, define an empty object. And has
// the method print.

const conChar = 'X';

module.exports = class Rectangle {
  constructor (w, h) {
    if (w > 0 & h > 0) {
      this.width = w;
      this.height = h;
    }
  }

  print () {
    let temp = '';
    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width; j++) {
        temp += conChar;
      }
      console.log(temp);
      temp = '';
    }
  }
};
