var text = prompt("What should the mug say?");
var slogan = document.querySelector("#words");
var mug = document.querySelector(".mug");

mug.addEventListener("click", changeText);

function changeText() {
  slogan.textContent = text;
}
