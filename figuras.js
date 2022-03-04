
//calculando medidas figuras geometricas
//contatenando variables, string

//cuadrado
console.group("cuadrado");
const porlado = 5;
console.log("lados  miden: " + porlado + " cm" + " por lado");

const partes = 4;
console.log("partes: " + partes); 

const area = porlado * porlado;
console.log("area es: " + area + " cm^2 "); 

const perimetroCuadrado = porlado * partes;
console.log("perimetro es: " + perimetroCuadrado); 
console.groupEnd();

//Código del Triangulo
console.group("Triangulo");
//Lados de triangulo
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo =5;
console.log("Los lados del triángulo miden: " + ladoTriangulo1 + " cms, " + ladoTriangulo2 + " cms, " + baseTriangulo + "cms.");
console.log("La altura del triangulo mide: " + alturaTriangulo + " cms");
//Perimetro del triangul
const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del triangulo mide: " + perimetroTriangulo + " cms");
//Area del triangulo
const areaTriangulo = (baseTriangulo * alturaTriangulo)/2;
console.log("El área del triangulo mide: " + areaTriangulo + " cms^2");
console.groupEnd();

//Código del Circulos
console.group("Circulos");
//Radio
const radioCirculo = 4;
console.log("El radio del circulo es " + radioCirculo + " cms.");
//Diametro
const diametroCirculo = radioCirculo * 2;
console.log("El diametro del circulo es " + diametroCirculo + " cms.");
// PI
const PI = Math.PI;
console.log("PI es " + PI + ".");
// Perimetro
const perimetroCirculo = diametroCirculo * PI;
console.log("El perimetro del circulo es " + perimetroCirculo + " cms.");
//Area
const areaCirculo = PI * (radioCirculo**2);
console.log("El area del circulo es " + areaCirculo + " cms.");
console.groupEnd();


//Encapsulamdo en funciones

//cuadrado
function porlado(lado) {
    return lado * 4;
}

//triangulo
function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
  }
  