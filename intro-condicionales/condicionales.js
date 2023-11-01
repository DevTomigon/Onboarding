//Ejercicio 1-2-3//
const num1 = 8;
const num2 = 7;

if (num1 > num2) {
  console.log(num1);
  console.log("Los numeros son diferentes");
} else if (num1 < num2) {
  console.log(num2);
  console.log("Los numeros son diferentes");
} else if (num1 == num2) {
  console.log("Los numeros son iguales");
}
//Ejercicio 4//
// const fecha1 = "2018-09-2"
// const fecha2 = "2023-05-7"

// if (fecha1>fecha2){
//     console.log(`La fecha ${fecha1} es mayor que la ${fecha2}`);
// }
// else if(fecha1===fecha2){
//     console.log("Las fechas son iguales");
// }
// else{
//     console.log(`La ${fecha2} es mayor que la fecha ${fecha1}`);

// }
//Ejercicio 5//
const fecha1 = "2018-10-7";
const fecha2 = "2018-02-17";

if (fecha1 > fecha2) {
  console.log(`La fecha ${fecha1} es mayor que la ${fecha2}`);
} else if (fecha1 === fecha2) {
  console.log("Las fechas son iguales");
} else {
  console.log(`La ${fecha2} es mayor que la fecha ${fecha1}`);
}
//Ejercicio 6//
const dato1 = 5;
const dato2 = 7;
const dato3 = 9;

if ((dato1 < dato2) & (dato3 > dato2)) {
  console.log(`El numero ${dato3} es el mayor`);
}
//Ejercicio 7//
// switch (prompt("Ingrese un color:")){
//     case "rojo":{
//         alert("El color de la pasion")
//     }
//     break
//     case "azul":{
//         alert("El color del mar")
//     }
//     break
//     case "verde":{
//         alert("El color de la naturaleza")
//     }
//     break
//     default:
//         alert("No ha seleccionado ningun color")
// }
//Ejercicio 8//
// const operador1 = prompt("Ingrese un valor entre 1 a 100");
// const operador2 = prompt("Ingrese otro valor entre 1 a 100");

// const operacion = prompt("Ingrese la operacion que desea (suma, resta, multiplicacion y division")

// switch (operacion) {
//     case 'suma':
//         resultado = Number(operador1) + Number(operador2);
//         break;
//     case 'resta':
//         resultado = Number(operador1) - Number(operador2);
//         break;
//     case 'multiplicacion':
//         resultado = Number(operador1) * Number(operador2);
//         break;
//     case 'division':
//         if (operador2 !== "0") {
//             resultado = Number(operador1) / Number(operador2);
//         } else {
//             console.log("Error: No se puede dividir por cero");
//         }
//         break;
//     default:
//         console.log("Operación no válida");
// }

// if (resultado !== undefined) {
//     alert(`Resultado de ${operacion}: ${resultado}`);
// }
//Ejercicio 9//
// let persona1 = {
//     nombre: "Juan",
//     edad: 39,
//     altura: 1.19
// }

// let persona2 = {
//     nombre: "Federico",
//     edad: 21,
//     altura: 1.80
// }

// if (persona1.altura < persona2.altura){
//     if (persona1.edad > persona2.edad){
//         console.log(`${persona1.nombre} es mayor y tiene menor estatura que ${persona2.nombre}`);
//     }
//     else if(persona2.edad > persona1.edad){
//         console.log("La otra persona es mayor");
//     }
// }
//Ejercicio 10//
// const nombre = prompt("Ingresa tu nombre");
// const edadMinima = prompt("Ingresa tu edad");
// const alturaMinima = prompt("Ingresa tu altura en cm");
// const visionMinima = prompt("Ingresa tu visión (de 1 a 8)");

// if (edadMinima >= 18 && alturaMinima >= 150 && visionMinima >= 1 && visionMinima <= 8) {
//     console.log("Estás capacitado para conducir");
// } else {
//     console.log("No estás capacitado para conducir");
// }

//Ejercicio 11//
// const edad = prompt("Ingresa tu edad")

// if (edad >= 0 && edad <= 12){
//     alert("Eres un infante");
// }
// else if(edad >= 13 && edad <= 18){
//     alert("Eres un adolescente")
// }
// else if(edad >= 19 && edad <= 45){
//     alert("Eres un mayor joven")
// }
// else if(edad <= 45 && edad >= 45){
//     alert("Anciano")
// }
// else if(edad >= 100){
//     alert("En realidad tienes esa edad?")
// }

//Ejercicio 12//
// const numVariado = prompt("Ingresa un numero del 1 al 3");
// const numAleatorio = prompt("Ingrese un numero que desee");

// if (numVariado >= 1 && numVariado <=3){
//     alert(`tu numero ingresado es ${numVariado}`)
//     alert(`el doble del numero ingresado es ${numVariado*2}`)
//     alert(`el triple del numero ingresado es ${numVariado*3}`)
// }
// else{
//     alert("ese valor no esta permitido");
// }

//Ejercicio 13//
// const nombreIngresado = prompt("Ingrese su nombre");
// const tipoPase = prompt("Ingrese su tipo de pase");
// const entrada = prompt("Usted posee entrada?");

// if (nombreIngresado === "tomas" && tipoPase === "vip" && entrada === "si") {
//     const usarEntrada = prompt("Desea utilizarla?");
//     if (usarEntrada === "si") {
//         alert("Bienvenido");
//     } else {
//         alert("Que te vaya bien");
//     }
// }
// else{
//  {
//         const comprar = prompt("Desea comprar?");
//         if (comprar === "si") {
//             const dineroDisponible = (prompt("Cuánto dinero tiene disponible?"));
//             if (dineroDisponible >= 1000) {
//                 alert("Venta exitosa. Bienvenido");
//             } else {
//                 alert("Rechazo de venta. No tiene suficiente dinero.");
//             }
//         } else {
//             alert("Despedida");
//         }
//     }

// }

//Ejercicio 14//
// const numeroIcognita = 6;
// const numeroIngresado = prompt("Ingresa un numero del 1 al 10")

// if (numeroIngresado < 6){
//     alert("El numero ingresado es mayor, vuelve a intentarlo")
// }

// else if (numeroIngresado>6){
//     alert("El numero ingresado es menor, vuelve a intentarlo")
// }
// else{
//     alert("Ganaste, has adivinado el numero")
// }

// const jugador1 = prompt(
//   "Jugador 1: Ingrese su elección (piedra, papel o tijera)"
// );
// const jugador2 = prompt(
//   "Jugador 2: Ingrese su elección (piedra, papel o tijera)"
// );

//Ejercicio 15//
// if (jugador1 === "piedra" || jugador1 === "papel" || jugador1 === "tijera") {
//   if (jugador2 === "piedra" || jugador2 === "papel" || jugador2 === "tijera") {
//     if (
//       (jugador1 === "piedra" && jugador2 === "papel") ||
//       (jugador1 === "papel" && jugador2 === "tijera") ||
//       (jugador1 === "tijera" && jugador2 === "piedra")
//     ) {
//       alert("Gana jugador 2");
//     } else if (jugador1 === jugador2) {
//       alert("Empate");
//     } else {
//       alert("Gana jugador 1");
//     }
//   } else {
//     alert("Jugador 2 ingresó una opción no válida");
//   }
// } else {
//   alert("Jugador 1 ingresó una opción no válida");
// }

//Ejercicio 16//
// const operador1 = prompt("Ingrese un valor entre 1 a 100");
// operador2 = prompt("Ingrese otro valor entre 1 a 100");

// operacion = prompt("Ingrese la operacion que desea (suma, resta, multiplicacion y division")

// switch (operacion) {
// case 'suma':
// resultado = Number(operador1) + Number(operador2);
//  break;
//  case 'resta':
//     resultado = Number(operador1) - Number(operador2);
// break;
// case 'multiplicacion':
// resultado = Number(operador1) * Number(operador2);
// break;
// case 'division':
// if (operador2 !== "0") {
//  resultado = Number(operador1) / Number(operador2);
// } else {
// console.log("Error: No se puede dividir por cero");
// }
// break;
// default:
// console.log("Operación no válida");
// }

// if (resultado !== undefined) {
// alert(`Resultado de ${operacion}: ${resultado}`);
// }

//Ejercicio 17//
const nombre = prompt("Ingrese su nombre");
const apellido = prompt("Ingrese su Apellido");
const numeroDeDocumento = prompt("Número de documento");
const domicilio = prompt("Domicilio");
const fechaDeNacimiento = prompt("Fecha de nacimiento");

const datosIngresados = {
    Nombre: nombre,
    Apellido: apellido,
    Numero_de_documento: numeroDeDocumento,
    Domicilio: domicilio,
    Fecha_de_nacimiento: fechaDeNacimiento
};

const todasLasPropiedadesDefinidas = datosIngresados.Nombre && datosIngresados.Apellido && datosIngresados.Numero_de_documento && datosIngresados.Domicilio && datosIngresados.Fecha_de_nacimiento;

const confirmacion = prompt(`${todasLasPropiedadesDefinidas ? "Los datos son correctos" : "Faltan datos por ingresar"}. ¿Desea continuar?`);

if (confirmacion) {
    alert("Gracias por la información.");
} else {
    alert("Por favor, verifique y complete los datos necesarios.");
}







