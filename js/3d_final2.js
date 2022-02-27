var animacion;
function rotarCamara(timestamp) {

    rotacion =timestamp /100 ==360 ?0 : timestamp /100;
    map.rotateTo(rotacion, { duration: 0 });

    animacion = requestAnimationFrame(rotarCamara);
}


function finalRotarCamara() {

    cancelAnimationFrame(animacion);
}   
