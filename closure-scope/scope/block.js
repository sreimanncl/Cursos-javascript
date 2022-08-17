// Hoisting en variables
// Para hablar del scope de bloque, realizaré una breve explicacion de Hoisting. Hablaré un más de esto en su clase respectiva.

// Hoisting es un término para describir que la declaración de variables y funciones son desplazadas a la parte superior del scope más cercano.

// Mira el siguiente código y piensa cuál sería el resultado del console.log.

console.log(nombre)
var nombre = "Andres"

// La respuesta es undefined, porque al hacer referencia a una variable que aún no está declarada, JavaScript crea esta variable y le asigna un valor de undefined.

var nombre = undefined
console.log(nombre)
nombre = "Andres"


// De aquí el término de Hoisting, porque eleva la declaración. Pero esto solamente es cómo JavaScript interpreta el código, realmente las declaraciones siguen en el mismo lugar.

console.log(nombre) //undefined
var nombre = "Andres"

// Este efecto solo ocurre con var, si ejecutamos el mismo código con let o const, mostrará un error de referencia.

console.log(nombre)
let nombre = "Andres"

//ReferenceError: nombre is not defined
// ¿Por qué “var” no tiene scope de bloque?
// En el scope de bloque, sí importa que las variables sean declaradas con var, let o const. Ya que var no tiene un scope de bloque. ¿Esto qué quiere decir?

// Mira el siguiente código y piensa cuál sería el resultado del console.log.

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
// Es por eso que var no tiene scope de bloque y se debe tener cuidado porque puede provocar errores en el código.

// Ejemplo en un bloque de código

// Mira el siguiente código y piensa cuál sería el resultado de los console.log.

var x = 1
{
  var x = 2
  console.log(x)
}

console.log(x)

// La respuesta es 2 y 2, esto sucede nuevamente por el hoisting.

# // Hoisting
var x = 1
var x = undefined // redeclaración
{
  x = 2 // reasignación
  console.log(x)  // 2
}

console.log(x) // 2

// Para solucionar esto se utilizará let o const. La primera declaración tiene un scope global; y la segunda, un scope de bloque.

let x = 1
{
  let x = 2
  console.log(x) // 2
}

console.log(x) // 1
//  Ejemplo en un bloque de código de scopes diferentes
// Hay una pequeña excepción cuando invocas una variable en un scope inferior del scope de la declaración de la variable con let y const, debes asegurarte que no exista una variable igual.

// Mira el siguiente código y piensa cuál sería el resultado del console.log

let x = 5
{
  console.log(x) 
}

// La respuesta es 5, porque si JavaScript no encuentra la variable x, sigue al scope superior.

// Ahora, ¿qué pasaría si existe una variable x declarada con let, después del console.log(x)? 
// Existirá un error de referencia, porque se está accediendo a una variable antes de su declaración.

let x = 5
{
    console.log(x) // ReferenceError: Cannot access 'x' before initialization
    let x = 10 
  }
  // Ejemplo en un bloque for
  // Mira el siguiente código y piensa cuál sería el resultado del console.log.
  
  function example() {
    for (var i =0; i < 10; i++){
      setTimeout(function(){
        console.log(i)
      }, 1000)
    }
  }
  
  example()
  // La respuesta es diez veces 10, y sucede por el hoisting. La declaración de i se eleva hasta arriba de la función en el scope de función, por lo que cuando termine el ciclo este tendrá un valor de 10.
  
  function example() {
   var i = undefined 
  
    for (i =0; i < 10; i++){
      setTimeout(function(){
        console.log(i)
      }, 1000)
    }
  }
  
  example()

// Para solucionar esto se utilizará let o const. La declaración del bloque for tiene un scope de bloque, en lugar de un scope de función.
  
  function example() {
    for ( let i =0; i < 10; i++){
      setTimeout(function(){
        console.log(i)
      }, 1000)
    }
  }
  
  example()
  
  // Contribución creada por: Andrés Guano.