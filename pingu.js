function toggleImage() {
  var image = document.getElementById('fish');
  image.classList.toggle('hidden');
}

function movebut(){
  var but = document.getElementById("butt");
  but.style.top = "-100px";
}

var div = document.querySelector('strong');
div.addEventListener('click', toggleImage);
div.addEventListener('click', movebut);
