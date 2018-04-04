var colors = ["aqua", "aquamarine", "azure", "beige", "blue", "chocolate", "cornsilk", "crimson", "cyan", "fuchsia", "gold", "grey", "green", "indigo", "ivory", "khaki", "lavender", "lime", "magenta", "maroon", "moccasin", "navy", "olive", "orange", "orchid", "pink", "plum", "purple", "powderblue", "red", "royalblue", "salmon", "sienna", "silver", "skyblue", "slategrey", "seagreen", "linen", "hotpink", "honeydew", "forestgreen", "black", "tan", "teal", "tomato", "turquoise", "violet", "wheat", "white", "yellow", "coral"];
var numSquares = 6;
var chosen = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.getElementById("hardBtn");


easyBtn.addEventListener("click", function(){
  colorDisplay.style.color = "black";
  resetButton.textContent = "New Colours";
  easyBtn.classList.add("selected");
  hardBtn.classList.remove("selected");
  numSquares = 3;
  chosen = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for(var i = 0; i < squares.length; i++){
    if(chosen[i]){
      squares[i].style.background = chosen[i];
    }
    else{
      squares[i].style.display = "none";
    }
  }
})

hardBtn.addEventListener("click", function(){
  colorDisplay.style.color = "black";
  resetButton.textContent = "New Colours";
  easyBtn.classList.remove("selected");
  hardBtn.classList.add("selected");
  numSquares = 6;
  chosen = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for(var i = 0; i < squares.length; i++){
    squares[i].style.background = chosen[i];
    squares[i].style.display = "block";
  }

})

resetButton.addEventListener("click", function(){
  resetButton.textContent = "New Colours";
  chosen = generateRandomColors(numSquares);
  pickedColor = pickColor();
  message.textContent = "";
  colorDisplay.textContent = pickedColor;
  colorDisplay.style.color = "black";
  for (var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = chosen[i];
  }

});

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++){
  squares[i].style.backgroundColor = chosen[i];
  squares[i].addEventListener("click", function(){
    var clickedColor = this.style.backgroundColor;
    if (clickedColor == pickedColor){
      messageDisplay.textContent = "Well Done!";
      changeColors(clickedColor);
      colorDisplay.style.color = clickedColor;
      resetButton.textContent = "Play Again?";
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
  do{
    var arr = [];
    for(var i = 0; i < num; i++){
      arr.push(randomColor());
    }
  }
  while(checkDupes(arr));
  return arr;
}

function checkDupes(arr){
  for(var k = 0; k <= arr.length; k++){
    for(var j = k; j <= arr.length; j++){
      if(k != j && arr[k] == arr[j]){
        return true;
      }
    }
  }
  return false;
}

function randomColor(){
  var c = colors[Math.floor(Math.random() * colors.length)];
  return c;
}
