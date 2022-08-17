// Un closure permite acceder al scope de una función exterior desde una función interior. En JavaScript, los closures se crean cada vez que una función se genera. A diferencia de otros conceptos como funciones, variables u otros, los closures no se utilizan todas las veces.

// Construcción de un closure
// Para construir un closure necesitaremos los siguientes requisitos:

// Una función dentro de otra función.
function padre() {
    
    function hijo(){
    }
}

// Una variable que se encuentre en la función con el scope superior, donde la función con scope inferior la utilice.
function padre() {
    let numero = 5
    function hijo(){
        numero = numero + 1
        return numero
    }
}

// Invocar la función con scope inferior en otro scope del que fue escrita. Esto lo podemos hacer retornando la función entera y asignar la función de scope superior a una variable.
function padre() {
    let numero = 5
    function hijo(){
        numero = numero + 1
        return numero
    }
    
    return hijo
}

const closure = padre()
// De esta manera obtendremos una función (scope inferior) que tiene una referencia a la variable que se encontraba en un scope superior, que a su vez recordará el contexto donde fue creada.

// Ámbito léxico
// El ámbito léxico se refiere al alcance de una variable, siguiendo la cadena de scopes. Es decir, una variable puede ser accedida desde un nivel inferior hasta uno superior, pero no al contrario.

function contador ( i ) {
  let acumulador = i
  function aumentar () {
    console.log(acumulador);
    acumulador = acumulador + 1
  }
  return aumentar
};

const closure = contador(1)
closure() // 1
closure() // 2
closure() // 3

const closure2 = contador(10);
closure2() // 10
closure2() // 11

closure() // 4
 // Podemos asignar la función contador a una variable (_closure_ y _closure2_). Dependiendo del valor que tenga como parámetro, cada variable cambiará el valor inicial por el ámbito léxico, por la que fue originada la variable acumulador que está vinculada con la función aumentar.

