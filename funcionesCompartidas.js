function dibujarCuadrado (colorCuadrado, colorBorde, xInicial, yInicial){
    pincel.fillStyle = colorCuadrado;
    pincel.fillRect(xInicial, yInicial, 50, 50);
    pincel.strokeStyle= colorBorde;
    pincel.strokeRect(xInicial, yInicial, 50, 50);
}
