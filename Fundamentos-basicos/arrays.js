var frutas = ["manzana", "banano", "cereza", "papaya"];

console.log(frutas.length) // cantidad de objetos dentro de la variable

console.log(frutas[0]); // acceder a un elemento dentro del arreglo de acuerdo a su posición

var masFrutas = frutas.push("uvas");   // añadir elementos al final

console.log(frutas);

var ultimo = frutas.pop();  // eliminar el último elemento

console.log(frutas);

var nuevaLongitud = frutas.unshift("melón")  // agregar un nuevo elemento al inicio

console.log(frutas);

var borrarFruta = frutas.shift()  // eliminar el primer objeto

console.log(frutas);

var posicion = frutas.indexOf("banano");

console.log(posicion); // ubicar la posición numérica de un elemento

frutas[3]; // traer el nombre desde la posición```