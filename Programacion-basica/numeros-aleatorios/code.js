var n;

for (var i=0; i<10; i++) {
    n = aleatorio(10, 55);
    document.write(n + ', ');
}
function aleatorio(min, max) {
    var resultado;
    resultado = Math.floor(Math.random() * (max - min + 1)) + min;
    return resultado;
}