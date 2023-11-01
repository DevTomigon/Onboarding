//Ejercicio 1-2-3-4-5-6-7//
// let numeros = 100;

// const sumar = (numeros) => {
//     let suma = numeros * 20;
//     return suma;
// }

// let resultadosuma = sumar(numeros);

// console.log(resultadosuma);

//Ejercicio 8//
// let saludo = "rubi"

// function saludar (nombre){
//     let saludo = "Hola mi nombre es rubi"
//     return saludo; 
// }

// let saludoCompleto = saludar(saludo)

// console.log(saludoCompleto);

//Ejercicio 9//
// let number1 = 20
// let number2 = 15000
// let multiplicacion = number1*number2

// function multiplicar (multiplicacion){
//     let resultado = multiplicacion
//     return resultado
// }

// let resultadomultiplicacion = multiplicacion
// console.log(resultadomultiplicacion);

//Ejercicio 10//
// let altura = 5;
// let base = 3;
// let area = altura * base;

// function descubrirArea(area) {
//     return area;
// }

// let resultadoArea = descubrirArea(area); 
// console.log(resultadoArea);

// function perimetro(base, altura) { 
//     let resultado2 = base + base + altura + altura;
//     return resultado2;
// }

// let resultadoPerimetro = perimetro(base, altura);
// console.log(resultadoPerimetro);

//Ejercicio 11//
// const calcularPrecioTotal = (precio, cantidad) => {
//     let descuento = 0;

//     if (cantidad >= 10) {
//         descuento = 0.1; // 10% de descuento
//     } else if (cantidad >= 20) {
//         descuento = 0.2; // 20% de descuento
//     }

//     const precioTotal = precio * cantidad;
//     const precioConDescuento = precioTotal - (precioTotal * descuento);

//     return precioConDescuento;
// };

// // Ejemplo de uso:
// const precio = 200;
// const cantidad = 15;
// const total = calcularPrecioTotal(precio, cantidad);
// console.log(`El precio total con descuento es: ${total}`);

//Ejercicio 12//
// let edadingresada = prompt("Ingrese su edad")

// function esMayorDeEdad(mayorDeEdad){
//     if (edadingresada >= 18){
//         console.log("Eres mayor de edad");
//     }
//     else{
//         console.log("Eres menor de edad");
//     }
// }

// console.log(esMayorDeEdad(edadingresada));


//Ejercicio 13//
// function impuesto(sueldo) {
//     let impuestoACobrar;

//     if (sueldo <= 10000) {
//         impuestoACobrar = sueldo * 0.1;{
//             console.log(`"El impuesto a pagar es el 10% de su ingreso,"${impuestoACobrar}`);
//         }
//     } else if (sueldo >= 10000 && sueldo <= 20000) {
//         impuestoACobrar = sueldo * 0.15;{
//             console.log(`"El impuesto a pagar es el 15% de su ingreso,"${impuestoACobrar}`);
//         }
//     } else {
//         impuestoACobrar = sueldo * 0.20;{
//             console.log(`"El impuesto a pagar es el 20% de su ingreso,"${impuestoACobrar}`);
//         }
//     }

//     return impuestoACobrar; 
// }

// let sueldo = 50000;
// let resultado = impuesto(sueldo);

//Ejercicio 14//
// let dia = 4
// let diaLaboral = [1,2,3,4,5]
// let diaNoLaboral = [6,7]

// function trabajo(dia){
//     if (diaLaboral.includes(dia)){
//         console.log("Es un dia laboral");
//     }
//     else if(diaNoLaboral.includes(dia)){
//      console.log("Es un dia no laboral");   
//     }
// }
// trabajo(dia)

//Ejercicio opcionales//

//15//

// function ingresarDatos() {
//     let usuario = {}; 

//     let ingresarNombre = prompt(`Ingrese su nombre:`);
//     if (ingresarNombre === null || ingresarNombre === "") {
//         console.error("El nombre no puede estar vacío");
//     } else {
//         usuario.nombre = ingresarNombre; 
//     }

//     let ingresarApellido = prompt(`Ingrese su apellido:`);
//     if (ingresarApellido === null || ingresarApellido === "") {
//         console.error("El apellido no puede estar vacío");
//     } else {
//         usuario.apellido = ingresarApellido; 
//     }

//     let ingresarEdad = prompt(`Ingrese su edad`);
//     if (ingresarEdad === null || ingresarEdad === "") {
//         console.error("La edad no puede estar vacía");
//     } else {
//         usuario.edad = ingresarEdad; 
//     }

//     console.log("Datos del usuario:", usuario); 
// }

// ingresarDatos();

//16//

let saludo = prompt("Ingrese su nombre")

function saludar(saludo){
    let saludoCompleto = `Hola mi nombre es ${saludo}`
    return saludoCompleto
}

let saludoFinal = saludar(saludo);

console.log(saludoFinal);

let añoDeNacimiento = prompt("Ingrese su año de nacimiento")
let añoActual = prompt("Ingrese el año actual")

function calcularEdad(añoDeNacimiento,añoActual){
    let calculo = añoActual - añoDeNacimiento ;
    return calculo
}

let calculoFinal = calcularEdad(añoDeNacimiento,añoActual)

console.log(calculoFinal);

function presentacion(saludoFinal,calculoFinal){
    let presente = `${saludoFinal} y tengo ${calculoFinal} años`
    return presente;
}

let presentacionFinal = presentacion(saludar,calcularEdad)
console.log(presentacionFinal);