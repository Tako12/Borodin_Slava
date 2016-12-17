"use strict";
// Задание 1 и 2

// Создаем массивы с названием столбцов и фигур
var letters = ["a", "b", "c", "d", "e", "f", "g", "h"];

function chess() {
  var figure_array = ["п", "т", "л", "с", "ф", "к"]; // Пешка, Тура, Лошадь, Слон, Ферзь, Король
  
  // Создаем один большой контейнер для всех ячеек
  // Размеры контейнера будем задавать в стилях
  var i, table = document.createElement("div");
  table.className = "table";
  
  // Создаем шахматную доску. Всего 81 элемент, т.к. мы добавляем столбец с номерами и строку с буквами
  for (i = 0; i <= 80; i++) {
    
    var cell = document.createElement("div");  // Создаем ячейку таблицы
    cell.className = "cell";
        
    var figure = document.createElement("div"); // Создаем параграф для добавления имени фигуры
          
    if (i == 0) cell.className = "empty"; // Первую ячейку делаем пустой - она не нужна
      
    // Создаем строку с буквами
    if (i > 0 && i <= 8) {
      cell.className = "letter";
      cell.innerHTML = letters[i - 1];
    }
    
    // Создаем столбец с цифрами
    if (i > 0 && i % 9 == 0) {
      cell.className = "number";
      cell.innerHTML = i / 9;
    }
    
    // Раскрашиваем доску черно-белыми ячейками
    if (i > 9 && i % 9 !== 0 && i % 2 == 0) cell.className = "black";
    if (i > 9 && i % 9 !== 0 && i % 2 !== 0) cell.className = "white";
    table.appendChild(cell);
  
    if (i >= 10 && i <= 17) {
      figure.className = "black_text";
      if (i - 9 == 1 || i - 9 == 8 ) figure.innerHTML = figure_array[1];
      if (i - 9 == 2 || i - 9 == 7 ) figure.innerHTML = figure_array[2];
      if (i - 9 == 3 || i - 9 == 6 ) figure.innerHTML = figure_array[3];
      if (i - 9 == 4) figure.innerHTML = figure_array[5];
      if (i - 9 == 5) figure.innerHTML = figure_array[4];
    }
    if (i >= 19 && i <= 26) {
      figure.className = "black_text";
      figure.innerHTML = figure_array[0];
    }
    if (i >= 64 && i <= 71) {
      figure.className = "white_text";
      figure.innerHTML = figure_array[0];
    }
    if (i >= 73 && i <= 80) {
      figure.className = "white_text";
      if (i - 72 == 1 || i - 72 == 8 ) figure.innerHTML = figure_array[1];
      if (i - 72 == 2 || i - 72 == 7 ) figure.innerHTML = figure_array[2];
      if (i - 72 == 3 || i - 72 == 6 ) figure.innerHTML = figure_array[3];
      if (i - 72 == 4) figure.innerHTML = figure_array[5];
      if (i - 72 == 5) figure.innerHTML = figure_array[4];
    }
     cell.appendChild(figure);
  }
  
  document.body.appendChild(table);
  
  return;
}

// Задание 3 вариант 1

// Шахматная доска с символами

function chess_symb() {
  var figure_array_white = ["&#9817;", "&#9814;", "&#9816;", "&#9815;", "&#9813;", "&#9812;"];
  var figure_array_black = ["&#9823;", "&#9820;", "&#9822;", "&#9821;", "&#9819;", "&#9818;"];
  var i, table = document.createElement("div");
  table.className = "table";
  for (i = 0; i <= 80; i++) {
    var cell = document.createElement("div");
    cell.className = "cell";
    var figure = document.createElement("div");
    if (i == 0) cell.className = "empty";
    if (i > 0 && i <= 8) {
      cell.className = "letter";
      cell.innerHTML = letters[i - 1];
    }
    if (i > 0 && i % 9 == 0) {
      cell.className = "number";
      cell.innerHTML = i / 9;
    }
    if (i > 9 && i % 9 !== 0 && i % 2 == 0) cell.className = "black";
    if (i > 9 && i % 9 !== 0 && i % 2 !== 0) cell.className = "white";
    table.appendChild(cell);
    if (i >= 10 && i <= 17) {
      figure.className = "black_text";
      if (i - 9 == 1 || i - 9 == 8 ) figure.innerHTML = figure_array_black[1];
      if (i - 9 == 2 || i - 9 == 7 ) figure.innerHTML = figure_array_black[2];
      if (i - 9 == 3 || i - 9 == 6 ) figure.innerHTML = figure_array_black[3];
      if (i - 9 == 4) figure.innerHTML = figure_array_black[5];
      if (i - 9 == 5) figure.innerHTML = figure_array_black[4];
    }
    if (i >= 19 && i <= 26) {
      figure.className = "black_text";
      figure.innerHTML = figure_array_black[0];
    }
    if (i >= 64 && i <= 71) {
      figure.className = "white_text";
      figure.innerHTML = figure_array_white[0];
    }
    if (i >= 73 && i <= 80) {
      figure.className = "white_text";
      if (i - 72 == 1 || i - 72 == 8 ) figure.innerHTML = figure_array_white[1];
      if (i - 72 == 2 || i - 72 == 7 ) figure.innerHTML = figure_array_white[2];
      if (i - 72 == 3 || i - 72 == 6 ) figure.innerHTML = figure_array_white[3];
      if (i - 72 == 4) figure.innerHTML = figure_array_white[5];
      if (i - 72 == 5) figure.innerHTML = figure_array_white[4];
    }
     cell.appendChild(figure);
  }
  
  document.body.appendChild(table);
  
  return;
}

// Задание 3 вариант 2

// Шахматная доска с картинками

function chess_img() {
  var i, table = document.createElement("div");
  table.className = "table";
  for (i = 0; i <= 80; i++) {
    var cell = document.createElement("div");
    cell.className = "cell";
    var img = document.createElement('img');
    if (i == 0) cell.className = "empty";
    if (i > 0 && i <= 8) {
      cell.className = "letter";
      cell.innerHTML = letters[i - 1];
    }
    if (i > 0 && i % 9 == 0) {
      cell.className = "number";
      cell.innerHTML = i / 9;
    }
    if (i > 9 && i % 9 !== 0 && i % 2 == 0) cell.className = "black";
    if (i > 9 && i % 9 !== 0 && i % 2 !== 0) cell.className = "white";
    table.appendChild(cell);
    if (i >= 10 && i <= 17) {
      if (i - 9 == 1 || i - 9 == 8 ) img.setAttribute('src', 'images/2.jpg');
      if (i - 9 == 2 || i - 9 == 7 ) img.setAttribute('src', 'images/3.jpg');
      if (i - 9 == 3 || i - 9 == 6 ) img.setAttribute('src', 'images/4.jpg');
      if (i - 9 == 4) img.setAttribute('src', 'images/6.jpg');
      if (i - 9 == 5) img.setAttribute('src', 'images/5.jpg');
    }
    if (i >= 19 && i <= 26) {
      img.setAttribute('src', 'images/1.jpg');
    }
    if (i >= 64 && i <= 71) {
      img.setAttribute('src', 'images/7.jpg');
    }
    if (i >= 73 && i <= 80) {
      if (i - 72 == 1 || i - 72 == 8 ) img.setAttribute('src', 'images/7.jpg');
      if (i - 72 == 2 || i - 72 == 7 ) img.setAttribute('src', 'images/8.jpg');
      if (i - 72 == 3 || i - 72 == 6 ) img.setAttribute('src', 'images/9.jpg');
      if (i - 72 == 4) img.setAttribute('src', 'images/12.jpg');
      if (i - 72 == 5) img.setAttribute('src', 'images/11.jpg');
    }
     cell.appendChild(img);
  }
  
  document.body.appendChild(table);
  
  return;
}