//Scope global
var nombre = "Diego";

//Scope local
function fun(){
    var apellido = "Arteaga";    //Scope local
    return nombre + " " + apellido;
}

fun() // va a retornar "Diego Arteaga" desde el codigo se tiene alcance a la variable nombre pero no a apellido.