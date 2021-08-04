#!/usr/bin/node

// A class that defines a rectangle
// and checks if w and h are non-zero and
// non-negative. If not, define an empty object

module.exports = class Rectangle {
  constructor (w, h) {
    if (w > 0 & h > 0) {
      this.width = w;
      this.height = h;
    }
  }
};
