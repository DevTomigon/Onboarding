//Ejercicio 1//
let miNombre = "Tomas"
//Ejercicio 2//
let miApellido = "Gonzalez"
//Ejercicio 3//
let miEdad = 19 
//Ejercicio 4//
const miMascota = "Bosco"
//Ejercicio 5//
let edadMascota = 3
//Ejercicio 6//
console.log(miNombre);
console.log(miApellido);
console.log(miEdad);
console.log(miMascota);
console.log(edadMascota);
//Ejercicio 7//
const nombreCompleto = miNombre + miApellido

//Ejercicio 8//
const textoPresentacion = `Hola soy ${miNombre} ${miApellido} tengo ${miEdad} años y tengo una mascota llamada ${miMascota} que tiene ${edadMascota} años` 
//Ejercicio 9//
let sumaEdades = (miEdad + edadMascota);

let restaEdades = (miEdad + edadMascota);

let productoEdades = (miEdad * edadMascota);

let divisionEdades = (miEdad / edadMascota);
//Ejercicio 10//
let alumno ={
    nombre: "Tomas",
    apellido: "Gonzalez",
    edad: 19,
    altura: "1.70cm",
    peso: "65kg",
}

console.log(alumno);
console.log(alumno.nombre);
console.log(alumno.apellido);
console.log(alumno.edad);
console.log(alumno.altura);
console.log(alumno.peso);
//Ejercicio 11//
let mascota ={
    nombre: "Bosco",
    raza: "Pitbull",
    edad: 3,
    peso: "40kg",
    altura: "1,20cm"
}

console.log(mascota);
console.log(mascota.nombre);
console.log(mascota.raza);
console.log(mascota.edad);
console.log(mascota.peso);
console.log(mascota.altura);
//Ejercicio 12//
let frutas= ["banana","manzanas","pera","tomate","sandia"]
console.log(frutas);
console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);
console.log(frutas[3]);
console.log(frutas[4]);
//Ejercicio 13//
const edadIngresada = prompt("Por favor, ingresa tu edad:");
const soyMayorDeEdad = edadIngresada >=18;

console.log("soy mayor de edad" + soyMayorDeEdad);
//Ejercicio 14//
let numeros= ["1","2","3","4","5"]
console.log(numeros);
console.log(numeros[0]);
console.log(numeros[1]);
console.log(numeros[2]);
console.log(numeros[3]);
console.log(numeros[4]);
//Ejercicio 15//
let familia= ["mama","papa","hermanos","abuelos","tios"]
console.log(familia);
console.log(familia[0]);
console.log(familia[1]);
console.log(familia[2]);
console.log(familia[3]);
console.log(familia[4]);
//Ejercicio 16//
const textoAleatorio = `Mis ${familia[4]} compraron ${numeros[3]} ${frutas[1]}`
console.log(textoAleatorio);

//Ejercicio 17//
const edadFirts = prompt("Ingresa tu edad:");


const edadSecond = prompt("Ingresa la edad de tu compañero:");


const edadesIguales = edadFirts === edadSecond;
const soyMayor = edadFirts > edadSecond;
const soyMenor = edadFirts < edadSecond;

console.log("Mi edad es igual a la de mi compañero:", edadesIguales);
console.log("Mi edad es mayor a la de mi compañero:", soyMayor);
console.log("Mi edad es menor a la de mi compañero:", soyMenor);

// Ejercicio 18//

const edad = prompt("Ingresa tu edad:");


const altura = prompt("Ingresa tu altura en centímetros:");


const puedeSubir = (edad >= 6 && altura >= 120);


console.log("Puede subir a la atracción:", puedeSubir);

const Pase = prompt("Inserta tu tipo de pase")
const Saldo = prompt("Inserta tu saldo correspondiente")

const puedePasar = "Puede pasar" + (Pase == "vip" || Saldo > 1000)

console.log(puedePasar);

