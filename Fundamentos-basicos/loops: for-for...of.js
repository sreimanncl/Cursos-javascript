
//loops: ciclos

var estudiantes = ["Maria", "Sergio", "Rosa"];

function saludarEstudiantes(estudiante){
	console.log(`Hola ${estudiante}`);
}


//forEach method
estudiantes.forEach(estudiante => saludarEstudiantes(estudiante));

//for in loop - itera sobre los indices del array

for(let estudiante in estudiantes){
	saludarEstudiantes(estudiantes[estudiante]);
}

//for-of - A diferencia de for-in este itera sobre los valores asignados a cada indice
for(let estudiante of estudiantes){
	saludarEstudiantes(estudiante);
}