"use strict";
// Задание 1

function rgbToHex(r, g, b) {
  r = r.toString(16).toUpperCase();
  g = g.toString(16).toUpperCase();
  b = b.toString(16).toUpperCase();
  if (r.length == 1) r = "0" + r;
  if (g.length == 1) g = "0" + g;
  if (b.length == 1) b = "0" + b;
  return "#" + r + g + b;
}
  
console.log( rgbToHex(14, 120, 1) ); // #0E7801

// Задание 2

function numToObject(n) {
  var object = {};
  if (n < 0 || n > 999) {
    console.log("Число меньше 0 или больше 999")
    return object;
  } else {
      object.u = Math.floor((n%100)%10);
      object.d = Math.floor((n%100)/10);
      object.h = Math.floor(n/100);
      console.log (object.u);
      console.log (object.d);
      console.log (object.h);
      return ("сотни: " + object.h + "; десятки: " + object.d + "; единицы: " + object.u);
    }
}

console.log( numToObject(786) ); // сотни: 7; десятки: 8; единицы: 6
console.log( numToObject(2) ); // сотни: 0; десятки: 0; единицы: 2
console.log( numToObject(1025) ); // Object {}

// Задание 3

function objectToQueryString (obj) {
  var str = "";
  for (var key in obj) {
    if (str !== "") {
      var str = str + "&" + key + "=" + obj[key];
    } else {
        var str = key + "=" + obj[key];
      }
  }
  return str;
}

console.log(objectToQueryString({user: 'Dmitry', password: 'pass', id: 1}));