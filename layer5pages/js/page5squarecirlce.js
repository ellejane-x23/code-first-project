var md = false;
var canvas = document.getElementById('a');
canvas.addEventListener('mousedown', down);
canvas.addEventListener('mouseup', toggledraw);
canvas.addEventListener('mousemove',
function (evt){
  var mousePos = getMousePos(canvas, evt);
  var posx = mousePos.x;
  var posy = mousePos.y;
  draw(canvas, posx, posy);
});

function down(){
  md = true;
}
function toggledraw(){
  md = false;
  canvas.style.cursor = "default";
}
function getMousePos(cavas, evt){
  var rect = canvas.getBoundingClientRect();
  return{
    x:evt.clientX - rect.left,
    y:evt.clientY - rect.top
  };
}
function draw(canvas, posx, posy){
  var context = canvas.getContext('2d');
  if(md === true){
    canvas.style.cursor="pointer";
    context.fillRect(posx, posy, 4, 4);
  };
}
