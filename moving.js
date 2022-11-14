logo.style.position = "absolute";
logo2.style.position = "absolute";

let toPX = (x) => x.toString + "px";

h = document.documentElement.clientHeight;
w = document.documentElement.clientWidth;

d = 0.1 * w;
d2 = 10;

maxHeight = h - d;
maxWidth = w - d;

let x = Math.round( Math.random() * maxWidth );
let y = Math.round( Math.random() * maxHeight );


logo.style.left = toPX(x); 
logo.style.top = toPX(y);

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let dx = 8;
let dy = 12;

async function move(){
    while (true){
        await sleep(50);
        let posX = x.toString() + "px";
        let posY = y.toString() + "px";
        logo.style.left = posX;
        logo.style.top = posY;

        let posX2 = (x + d2).toString() + "px";
        let posY2 = (y + d2).toString() + "px";
        logo2.style.left = posX2;
        logo2.style.top = posY2;

        x = x + dx;
        y = y + dy;
        if ((x > maxWidth) || (x < 0)) dx = -dx; 
        if ((y > maxHeight) || (y < 0)) dy = -dy;

    }
}
move();








