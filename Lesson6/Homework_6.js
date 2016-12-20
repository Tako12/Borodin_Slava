// Первое задание
/*
var array = [1, 2, 3];
var list = {};

array.forEach(
  function arrayToList(item, i, array) {
    list[value] = array[i];
  });

console.log(list);
*/

// Второе задание

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//var array = [1, "Bob", true, 34, "String", {}];

function reverseArrayInPlace (array) {
  array.forEach(
    function (item, i, array) {
      var elem = array.pop();
      array.splice(i, 0, elem);
  })
  
  return array;
}

console.log(array);
function reverseArray (array) {
  var newArray = array.map(
    function (item, i, array) {
      var a = array.length - i;
      var b = array.length - (i+1);
      array.slice(b, a);
      console.log(c);
      return;
      
    })
  
  return newArray;
}