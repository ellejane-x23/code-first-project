$(function() {

  var words = ["No. one Dad", "I love Tea", "Best Boss", "Coffee Life"],
    word;

  $('#mug').click(function() {
    var randWord;
    do {
      randWord = words[Math.floor(Math.random() * words.length)];
    } while (word == randWord);
    $('#words').text(randWord);
    word = randWord;
  });
});
