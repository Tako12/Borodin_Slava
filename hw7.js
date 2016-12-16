function chess() {
  var table = document.createElement("div");
  table.className = "table";
  for (var i = 1; i <= 81; i++) {
      var cell = document.createElement("div");
      cell.className = "cell";
      table.appendChild(cell);
    }
  document.body.appendChild(table);
  return;
}








/* function chess() {
  var string_num = document.createElement("div");
  string_num.className = "number";
  for (var i = 1; i <= 8; i++) {
    var div_inside = document.createElement("div");
    div_inside.className = "num";
    div_inside.innerHTML = i;
    string_num.appendChild(div_inside);
  }
    document.body.appendChild(string_num);
  
  var table = document.createElement("div");
  table.className = "table";
  for (var i = 1; i <= 64; i++) {
   if (i % 2 == 0) {
      var div_inside = document.createElement("div");
      div_inside.className = "black";
      table.appendChild(div_inside);
    } else {
        var div_inside = document.createElement("div");
        div_inside.className = "white";
        table.appendChild(div_inside);
      }
    }
 
 /* var string2 = document.createElement("div");
  string2.className = "table";
  for (var i = 1; i <= 8; i++) {
   if (i % 2 !== 0) {
      var div_inside = document.createElement("div");
      div_inside.className = "black";
      string2.appendChild(div_inside);
    } else {
        var div_inside = document.createElement("div");
        div_inside.className = "white";
        string2.appendChild(div_inside);
      }
    }
    
  for (var i = 1; i <= 8; i++) {
    if (i % 2 !== 0) {
      var string = string1.cloneNode(true);
    } else {
      var string = string2.cloneNode(true);
      }
    document.body.appendChild(string);
    console.log(i);
  } 
  return;
} */