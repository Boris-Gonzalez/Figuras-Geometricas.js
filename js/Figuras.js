function perimetroCuadrado(lado){
    return lado * 4;
}
function areaCuadrado(lado){
    return lado * lado;
}
function perimetroTriangulo (lado){
    return lado * 3 ;
}
function areaTriangulo (lado){
    return (lado * lado)/2;
}
function diametroCirculo (radio){
    return radio * 2;
}
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
function areaCirculo(radio){
    return (radio * radio) * PI;
}
//Valor de PI
const PI = Math.PI;

// Interactuaremos con HTML a traves de funciones
function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    //Obtenemos solo el valor de la variable input que el usuario ingresa con la propiedad .value
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert("El valor del perimetro del cuadrado es: " + perimetro);
}
function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    //Obtenemos solo el valor de la variable input que el usuario ingresa con la propiedad .value
    const value = input.value;
    const area = areaCuadrado(value);
    alert("El valor del area del cuadrado es: " + area);
}
function calcularPerimetroTriangulo(){
    const inputl = document.getElementById("inputLadoTriangulo");
    const valuelado = inputl.value;
    const perimetro = perimetroTriangulo(valuelado);
    alert("El valor del perimetro del tiangulo equilatero es: " + perimetro);
}
function calcularAreaTriangulo(){
    const inputl = document.getElementById("inputLadoTriangulo");
    const valuelado = inputl.value;
    const area = areaTriangulo(valuelado);
    alert("El valor del area del triangulo equilatero es: " + area);
}   
function calcularDiametroCirculo(){
    const input = document.getElementById("inputDiametroCirculo");
    const value = input.value;
    const diametro = diametroCirculo(value);
    alert("El Diametro del circulo es: " + diametro);
}

