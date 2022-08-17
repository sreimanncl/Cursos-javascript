// ¿Que es el SCOPE?
// Se puede definir como el alcance que tienen nuestras variables dentro del documento.

// Existen 2 tipos de “Scope”:

// Local: Cuando puedes acceder a una variable únicamente en cierta parte del código o bloque.

// Global: Una variable cuando está en el scope global, es porque está declarada fuera de un bloque de código o función.

// Es importante tener en cuenta que los OBJETOS y las FUNCIONES tambien son variables, por lo tanto son afectadas por el SCOPE.

// Variables

var a; // declarando
var b = 'b'; // declaramos / asignamos
b = 'bb'; // reasignacion
var a = 'aa'; // redeclaracion


// Global Scope
var fruit = 'Apple'; // global

// Se define cuando una variable esta declarada de forma global, osea “Fuera de una funcion o un bloque”.

// No es buena practica declarar de forma global ya que podemos declarar dos variables con el mismo nombre y diferente valor.


function bestFruit() {
  console.log(fruit);
}

bestFruit();


function countries() {
  country = 'Chile'; // global
  console.log(country);
}

countries();
console.log(country);