var colors = ["aqua", "aquamarine", "azure", "beige", "blue", "chocolate", "cornsilk", "crimson", "cyan", "fuschia", "gold", "grey", "green", "indigo", "ivory", "khaki", "lavender", "lime", "magenta", "maroon", "moccasin", "navy", "olive", "orange", "orchid", "pink", "plum", "purple", "powderblue", "red", "royalblue", "salmon", "sienna", "silver", "skyblue", "slategrey", "tan", "teal", "tomato", "turquoise", "violet", "wheat", "white", "yellow", "coral"];
var chosen = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++){
  squares[i].style.backgroundColor = chosen[i];
  squares[i].addEventListener("click", function(){
    var clickedColor = this.style.backgroundColor;
    if (clickedColor == pickedColor){
      messageDisplay.textContent = "Well Done!";
      changeColors(clickedColor);
    }
    else{
      this.style.backgroundColor = "#F2E9E4";
      messageDisplay.textContent = "Try Again!";
    }
  });
}

function changeColors(color){
  for (var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = color;
  }
}

function pickColor(){
  var random = Math.floor(Math.random() * chosen.length);
  return chosen[random];
}

function generateRandomColors(num){
  var arr = [];
  for(var i = 0; i < num; i++){
    arr.push(randomColor());
  }
  return arr;
}

function randomColor(){
  var c = colors[Math.floor(Math.random() * colors.length)];
  return c;
}
