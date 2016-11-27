"use strict";

// Первое задание

function min (a, b) {
  return Math.min (a, b);
}
console.log(min(0, 10));
console.log(min(0, -10));

// Второе задание

function countBs (string) {
  var count = 0;
  for (var i = 0; i <= string.length; i++) {
    var c = string.charAt(i);
    if (c == "B") {
      count += 1;
    }
  }
  return count;
}

function countChar (string, char) {
  var count = 0;
  for (var i = 0; i <= string.length; i++) {
    var c = string.charAt(i);
    if (c == char) {
      count += 1;
    }
  }
  return count;
}