$(document).ready(function() {
    $("strong").on("click", function() {
        $("#butt").toggleClass("animate_up", 1000); // 1sec
    });
});

$(document).ready(function() {
    $("strong").on("click", function() {
        $("#pingu").toggleClass("a_up", 1000); // 1sec
    });
});


function toggleImage() {
  var image = document.getElementById('fish');
  image.classList.toggle('hidden');
}

function toggleeye(){
  var eye = document.getElementById('ee');
  eye.classList.toggle('hidden');
}

var div = document.querySelector('strong');
div.addEventListener('click', toggleImage);
div.addEventListener('click', toggleeye);
