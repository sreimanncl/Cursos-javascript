const canvas = document.getElementById('canvas');
let papel = canvas.getContext('2d');

var fondo = {
	url: "./img/tile.png",
	cargaOK: false
};
var vaca = {
	url: "./img/vaca.png",
    cargaOk: false,
    x: [],
    y: []
};

var cerdo = {
	url: "./img/cerdo.png",
	cargaOK: false,
	x : 0,
	y : 0
};

var pollo = {
	url: "./img/pollo.png",
	cargaOK: false,
	x : [],
	y : []
};

fondo.imagen = new Image();//creamos objeto
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVaca);
    
cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);
    
pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollo);
    

function cargarFondo ()
{
	fondo.cargaOK = true;
	dibujar();
}
 function cargarVaca ()
{
	vaca.cargaOK = true;
	dibujar();
}
function cargarCerdo ()
{
	cerdo.cargaOK = true;
	dibujar();
}
function cargarPollo ()
{
	pollo.cargaOK = true;
	dibujar();
}
var cantidad = aleatorio(1,50);

function dibujar()
{

	if(fondo.cargaOK)
	{
		papel.drawImage(fondo.imagen , 0 , 0);
	}
	if(vaca.cargaOK) {
        for( var v = 0; v < cantidad; v++)
		{
			var x = (aleatorio (0,7)*60);
			var y = (aleatorio (0,7)*60);
			vaca.x[v] = x;
			vaca.y[v] = y;
			papel.drawImage(vaca.imagen , x , y);
			console.log(cantidad);
		}
    }
    if(cerdo.cargaOK)
	{	
		var x = (aleatorio (0,7)*60);
		var y = (aleatorio (0,7)*60);
		cerdo.x = x;
		cerdo.y = y;
		papel.drawImage(cerdo.imagen , x , y);
		
	}
	if(pollo.cargaOK)
	{
		for(var p =0; p <cantidad ; p++)
		{
			var x = (aleatorio (0,7)*60);
			var y = (aleatorio (0,7)*60);
			pollo.x [p] = x;
			pollo.y [p] = y;
			papel.drawImage(pollo.imagen , x , y);
			console.log(cantidad);
		}
		
	}
}
function aleatorio(min, max) {
    var resultado;
    resultado = Math.floor(Math.random() * (max - min + 1)) + min;
    return resultado;
}