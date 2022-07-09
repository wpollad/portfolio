logo.style.position = "absolute";

h = document.documentElement.clientHeight;
w = document.documentElement.clientWidth;

maxHeight = h - 0.1 * h;
maxWidth = w - 0.1 * w;

var x = Math.round( Math.random() * maxWidth );
var y = Math.round( Math.random() * maxHeight );

var posX = x.toString() + "px";
var posY = y.toString() + "px";

logo.style.left = posX; 
logo.style.top = posY;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

var dx = 8;
var dy = 12;

async function move(){
    while (true){
        await sleep(50);
        var posX = x.toString() + "px";
        var posY = y.toString() + "px";
        logo.style.left = posX;
        logo.style.top = posY;
        x = x + dx;
        y = y + dy;
        if ((x > maxWidth) || (x < 0)) dx = -dx; 
        if ((y > maxHeight) || (y < 0)) dy = -dy;
    }
}
move();






