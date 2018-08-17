var w,h,canvas,ctx;
var mousePos;
var selected=false;

window.onload=init;

var link = document.createElement('a');
link.innerHTML = 'download image';
link.addEventListener('click', function(ev) {
    link.href = canvas.toDataURL();
    link.download = "mypainting.png";
}, false);
document.body.appendChild(link);


function getPosition(canvas,evt) {
    var rect=canvas.getBoundingClientRect();
    return {x:evt.clientX-rect.left,
        y:evt.clientY-rect.top
    };
}

function drawing(x,y,x1,y1){
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(x1,y1);
    ctx.stroke();
    ctx.restore();
}

function movingArrow(evt){
    var newMousePos=getPosition(canvas,evt);
    if (selected){
        drawing(mousePos.x,mousePos.y,newMousePos.x,newMousePos.y);
        mousePos=newMousePos;
    }
}

function clicked(evt) {
	mousePos=getPosition(canvas,evt);
	selected=true;
}
function released(evt) {
	selected=false;
}
function init(){
	console.log('page loaded');

	canvas=document.getElementById("mycanvas");
	w = canvas.width;
	h = canvas.height;
	ctx=canvas.getContext('2d');
	selected=false;
	canvas.addEventListener('mousemove',movingArrow);
	canvas.addEventListener('mousedown',clicked);
	canvas.addEventListener('mouseup',released);
}

function saveimg() {
    var dataurl = canvas.toDataURL();
    console.log(dataurl);
    var imageDiv = document.querySelector("#myImage");
    imageDiv.src = dataurl;
    imageDiv.style.border = "red";
    imageDiv.style.boxShadow = "10px 10px 5px grey";
}
