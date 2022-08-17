// Reasignación y redeclaración

// La redeclaración es volver a declarar una variable, y la reasignación es volver a asignar un valor.

//Una variable declarada con var puede ser redeclarada y reasignada.
//Una variable declarada con let puede ser reasignada, pero no redeclarada.
//Una variable declarada con const no puede ser redeclarada, ni reasignada. Su declaración y asignación debe ser en una línea, caso contrario habrá un error.

// Ejemplos de redeclaración y reasignación de variables
// Con var
var nombre // declaración (undefined) ✅
nombre = "Andres" // asignación ✅
nombre = "Valeria" // reasignación ✅
var nombre = "Oscar" // redeclaración y reasignación ✅

// Con let
let nombre // declaración (undefined) ✅
nombre = "Andres" // asignación ✅
nombre = "Valeria" // reasignación ✅
let nombre = "Oscar" // SyntaxError: Identifier 'nombre' has already been declared. ❌

// Con const 
const nombre // SyntaxError: Missing initializer in const declaration. ❌
const nombre = "Andres" // declaración y asignación ✅
nombre = "Valeria" // TypeError: Assignment to constant variable. ❌
const nombre = "Oscar" // SyntaxError: Identifier 'nombre' has already been declared. ❌

// Estructuras de datos declaradas con const
// Las estructuras de datos, como los arrays u objetos, declaradas con const pueden cambiar las referencias de sus elementos, a este concepto se lo denomina mutabilidad. Sin embargo, siguen las mismas reglas ya mencionadas, no puedes redeclarar ni reasignar una variable de estructura de datos.

const array = ["manzana", "pera"] // declaración y asignación ✅
array[0] = "piña" // Cambio de valor en un elemento del array 
console.log(array) // [ 'piña', 'pera' ]
const array = [1,2,3] // SyntaxError: Identifier 'array' has already been declared. ❌

// En React, una librería de JavaScript, puedes utilizar declaraciones con const para el estado de un componente, porque aunque cambie el valor, lo que sucede internamente es un re-renderizado y no una redeclaración. No te preocupes si no lo entiendes, pero tenlo presente cuando llegues a ese tema.