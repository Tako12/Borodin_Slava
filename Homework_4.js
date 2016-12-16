"use strict";

// Первое задание

function min (a, b) {
  return (a < b) ? a : b;
}
console.log(min(0, 10));
console.log(min(0, -10));

// Второе задание

function countBs (string) {
  var count = 0;
  for (var i = 0; i <= string.length; i++) {
    if (string.charAt(i) == "B") {
      count++;
    }
  }
  return count;
}
console.log(countBs("Billy Bob"));

function countChar (string, char) {
  var count = 0;
  for (var i = 0; i <= string.length; i++) {
    if (string.charAt(i) == char) {
      count++;
    }
  }
  return count;
}
console.log(countChar("Billy Bob", "l"));

// Задание со звездочкой

function isEven (N) {
  if (N < 0) {
    N = -N; // Это исправление
  }
  if (typeof N === typeof "") {
    return "Введена строка";
  }
  if (N === 0 || N === 1) {
    return  !N;
  } else {
    return isEven (N - 2);
  }
}
console.log(isEven("Привет"));
console.log(isEven(75));
console.log(isEven(-1));