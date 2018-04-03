$(".triangle").on("click", function(){
  $(".triangle").fadeOut(2000, function(){
    $("span").text("Phew!");
  });
});
