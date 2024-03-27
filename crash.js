function crash(){
    while(1){
        alert("LEGIA NAJLEPSZA");
    }
}
function init(){
    let audio = document.getElementById("audio");
    audio.hidden = true;
    setTimeout(crash, 100);
}