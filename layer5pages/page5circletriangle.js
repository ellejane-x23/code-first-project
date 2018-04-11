$(function() {

  var colors = ['#773e3e', '#fcfccf', '#98ff98', '#fccfcf'],
    color;

  $('.circle').click(function() {
    var randColor;
    do {
      randColor = colors[Math.floor(Math.random() * colors.length)];
    } while (color == randColor);
    $('.circle').css('background-color', randColor);
    color = randColor;
  });
});
