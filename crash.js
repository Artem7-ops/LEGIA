function crash(){
    while(1){}
}
function init(){
    setTimeout(crash, 100);
}
//window.onload = init