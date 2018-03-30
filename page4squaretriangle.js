var circle = document.querySelector(".circle");
var text = document.querySelector("#text");

circle.addEventListener("mouseover", function(){
  circle.style.backgroundColor = "lightblue";
  circle.classList.add("bounce");
});

circle.addEventListener("mouseout", function(){
  circle.style.backgroundColor = "blue";
});
