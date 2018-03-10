$(function() {

  var colors = ['red', 'blue', 'green', 'grey'],
    color;

  $('.triangle').click(function() {
    var randColor;
    do {
      randColor = colors[Math.floor(Math.random() * colors.length)];
    } while (color == randColor);
    $('.triangle').css('background-color', randColor);
    color = randColor;
  });
});
