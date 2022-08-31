document,addEventListener('keyUp', dibujoPorTeclado );

var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

function dibujoPorTeclado(evento) {
  var colore = 'black'
  var movimiento = 10;

  switch(evento.keyCode)
  {
    case teclas.UP:
      dibujarLinea(colore, x, y, x, y - movimiento, papel);
      y = y - movimiento;
    break;
    case teclas.DOWN:
      dibujarLinea(colore, x, y, x, y + movimiento, papel);
      y = y + movimiento;
    break;
    case teclas.LEFT:
      dibujarLinea(colore, x, y, x - movimiento, y, papel);
      x = x - movimiento;
    break;
    case teclas.RIGHT:
      dibujarLinea(colore, x, y, x + movimiento, y, papel);
      x = x + movimiento;
    break;        
}
}

var dibujo = document.getElementById('dibujo');
var papel = dibujo.getContext('2d')
var x = 150;
var y = 150;

dibujarLinea('black', 149, 149, 151, 151, papel)

var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("btn");
boton.addEventListener("click", dibujoPorClick );

var ancho = dibujo.width;

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorClick()
{
  var Lines = parseInt(texto.value);
  var l = 0;
  var y, x;
  var colorLine = 'black'
  var espacio = ancho / Lines;

  //Ciclo while o for es cassi igual
  while (l < Lines) {
    y = espacio * l;
    x = espacio * (l + 1);
    dibujarLinea(colorLine, 0, y, x, 300)
    //l = l + 1 igual a
    l++
  }
    dibujarLinea(colorLine, 1,1,1,299, papel);
    dibujarLinea(colorLine, 1,299,299,299, papel);
}

