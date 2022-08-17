// Hoisting es un término para describir que las declaraciones de variables y funciones son desplazadas a la parte superior del scope más cercano, scope global o de función. Esto sucede solamente con las declaraciones y no con las asignaciones.

// El código permanece igual, solo es una interpretación del motor de JavaScript. En el caso de las variables solamente sucede cuando son declaradas con var.

// Hoisting en variables declaradas con var
// En el siguiente código, la respuesta del console.log es undefined, porque al hacer referencia a una variable que no está declarada aún, JavaScript crea esta variable antes de declararla y le asigna un valor de undefined.

console.log(nombre) // undefined
var nombre = "Andres" 
// Hoisting
var nombre = undefined
console.log(nombre)
nombre = "Andres"
// Hoisting en scope de bloque
// Mi ra el siguiente código y piensa cuál sería el resultado del console.log.

if (true){
  var saludo = "hola"
  let despedida = "chao"
}

console.log(saludo)
console.log(despedida)
// La respuesta es primero "hola" y luego un error de referencia. Esto sucede por el hoisting, la declaración de la variable saludo se eleva fuera del bloque en un scope superior, que puede ser un scope de función o global.

var saludo = undefined

if (true){
  saludo = "hola"
  let despedida = "chao"
}

console.log(saludo) 
// "hola"
console.log(despedida) 
// ReferenceError: despedida is not defined
// Es por eso que var no tiene scope de bloque, y se debe tener cuidado porque puede provocar errores en el código.

// Hoisting en funciones
// Mira el siguiente código y piensa cuál sería el resultado del console.log.

console.log( saludar() )

function saludar() {
  return "Hola"
}
// La respuesta es "Hola", porque al invocar una función que no está declarada, JavaScript la eleva y por eso podemos invocar una función antes de declararla.

// Hoisting
function saludar() {
  return "Hola"
}

console.log( saludar() ) // "Hola"
// Pero, lo que realmente sucede es que JavaScript guarda la función en memoria en la fase de creación de un contexto de ejecución, no asigna undefined como con las variables.

Hoisting de variables dentro de una función
// El hoisting desplaza las declaraciones a la parte superior del scope más cercano, en el caso de una función dentro de otra función, seguiría el siguiente comportamiento.

function scope() {
  console.log(nombre) // undefined
  console.log(edad) // undefined
  console.log(i) // undefined
  
  var nombre = "Andres"
  var edad = 20
  for (var i = 0; i< 6; i++) {
  //...
  }
}
// JavaScript lo interpretaría como lo siguiente:

function scope() {
  var nombre = undefined
  var edad = undefined
  var i = undefined
  
  console.log(nombre) // undefined
  console.log(edad) // undefined
  console.log(i) // undefined
  
  nombre = "Andres"
  edad = 20
  for ( i = 0; i< 6; i++) {
  
  //
  }
}
// Hosting en funciones asignadas a variables
// Mira el siguiente código y piensa cuál sería el resultado del console.log.

console.log( saludar() )

var saludar = function saludar() {
  return "hola"
}
// La respuesta es un error de tipo porque si asignas una función a una variable declarada con var, y la invocas antes declararla, la variable será de tipo undefined y no de función por el hoisting.

var saludar = undefined

console.log( saludar() ) // TypeError: saludar is not a function

saludar = function saludar() {
  return "hola"
}
// Hoisting con let y const
// Aunque te haya dicho que el hoisting solo ocurre con declaraciones con var, no es totalmente cierto. El hoisting hará que el intérprete de JavaScript eleve las declaraciones con let y const a la Temporal Dead Zone.

// La Temporal Dead Zone es una región del código donde la variable está declarada, pero no es posible acceder a esta, provocando un error de tipo ReferenceError.

console.log(nameVar) // undefined
console.log(nameLet) // ReferenceError: nameLet is not defined

var nameVar = "myVar"
let nameLet = "myLet"
// Buenas prácticas para usar hoisting
// No utilices var en las declaraciones de variables.
// Escribe primero las funciones y luego su invocación.