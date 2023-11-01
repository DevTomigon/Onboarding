// Ejercicios bucles //

//1//

// let numeroIngresado = Number(prompt(`Ingresa un numero entre 1 y 100`))

// for (let index = numeroIngresado; index > 0; index--) {
//    console.log(index);
// }

//2//

// let numeroIngresado = Number(prompt(`Ingrese un numero entre 1 y 10`))

// for (let index = 1; index <= 10; index++) {
//     console.log(`${index} x ${numeroIngresado} = ${index*numeroIngresado}`);
    
// }

//3//

// let suma = 0;
// let numero;

// while (true) {
//     numero = Number(prompt(`Ingrese un numero, si desea finalizar ingrese 0`))
//     if (numero === null){
//         break
//     }

//     numero+=numero;
//     suma+=numero;

//     if(numero === 0){
//         break;
//     }

// }

// console.log("La suma de los numeros ingresados es:" + suma);

//4//

// let suma2 = 0;

// do {
//     numero2 = Number(prompt(`Ingrese un numero, si desea finalizar ingrese 0`));
    
//     if (numero2 === 0 || isNaN(numero2)) {
//         break;
//     }
    
//     suma2 += numero2;
// } while (true);

// console.log("La suma de los numeros ingresados es: " + suma2);

//5//

// let numero;
// let numeroSecreto = 4;
// let intentos = 0;

// while (true) {
//     numero = Number(prompt(`Ingrese un número hasta adivinar el correcto`));
//     intentos++;

//     if (numero === numeroSecreto) {
//         console.log(`¡Acertaste el número secreto! Era: ${numeroSecreto}. Lo lograste en ${intentos} intentos.`);
//         break;
//     } else if (numero > numeroSecreto) {
//         console.log(`El número ingresado es mayor que el secreto.`);
//     } else {
//         console.log(`El número ingresado es menor que el secreto.`);
//     }
// }

//6//

// let numeroRecibido = Number(prompt(`Ingrese un número para ver sus divisores:`));

// for (let numero = 1; numero <= numeroRecibido; numero++) {
//     if (numeroRecibido % numero === 0) {
//         console.log(numero);
//     }
// }

//7//

// let sonidoCampana = "DingDong";

// function sonarCampana(sonidoCampana, veces) {
//     for (let i = 0; i < veces; i++) {
//         console.log(sonidoCampana);

//     }
// }

// sonarCampana(sonidoCampana, 5);

//8//

// const fechaLimite = "1997-8-3"
// const fechas = ["1984-18-2","1998-3-2","1973-15-7","2024-21-10","2001-1-9"]

// for (let i = 0; i <= fechas.length; i++) {
//     if(fechaLimite <= fechas[i]){
//         console.log(`${fechas[i]} es menor o igual que ${fechaLimite}`);
//     }
//     else{
//         console.log(`${fechas[i]} es mayor que ${fechaLimite}`);
//     }
    
// }

//9//

// const colores = ["Rojo", "Verde", "Azul", "Violeta", "Amarillo", "Celeste", "Naranja", "Rosa"]

// for (const color of colores) {
//     console.log(color);
// }

//10//

const colores = ["Rojo", "Verde", "Azul", "Violeta", "Amarillo", "Celeste", "Naranja", "Rosa"];

function listaDeColores(colores) {
    return colores;
}

let listaDeColores2 = listaDeColores(colores);

console.log(listaDeColores2);

//11//

const numeros = [5,10,15,4,5]

for (const numero of numeros) {
    console.log(`El numero es ${numero} y su doble es ${numero*2}`);
}

//12//



const Juan = {
    Nombre : "Juan",
    Apellido : "Perez",
    Edad : 24,
    Integrante : "Tio"
}

const Pedro = {
    Nombre : "Pedro",
    Apellido : "Perez",
    Edad : 87,
    Integrante : "Abuelo"
}

const Martina = {
    Nombre : "Martina",
    Apellido : "Perez",
    Edad : 19,
    Integrante : "Hermana"
}

const Micaela = {
    Nombre : "Micaela",
    Apellido : "Perez",
    Edad : 24,
    Integrante : "Tia"
}

const familia = [Juan, Pedro, Martina, Micaela]

for (let i = 0; i < familia.length; i++) {
    const persona = familia[i]
    console.log(`Hola soy ${persona.Nombre} ${persona.Apellido} (${persona.Integrante}) y tengo ${persona.Edad} años`);
    
}

//13//

const persona = {
    nombre: "Tomas",
    apellido: "Gonzalez",
    nacionalidad: "Argentino",
    edad: 19,
    estudios: "UTN - Ingenieria en sistemas 2do año"
}

console.log(Object.keys(persona));

//14//

 console.log(Object.keys(colores));

//15//

let numerosPares = [];
let numerosImpares = [];
let numeroIngresado;

while (true) {
    numeroIngresado = Number(prompt("Ingrese un número o 0 para finalizar"));

    if (numeroIngresado === 0) {
        break;
    }

    if (numeroIngresado % 2 === 0) {
        numerosPares.push(numeroIngresado);
    } else {
        numerosImpares.push(numeroIngresado);
    }
}

console.log("Números Pares:", numerosPares);
console.log("Números Impares:", numerosImpares);

function sumaDeNumeros(listaDeNumeros) {
    let suma = 0;
    for (let numero of listaDeNumeros) {
        suma += numero;
    }
    return suma;
}

console.log("Suma de Números Pares:", sumaDeNumeros(numerosPares));
console.log("Suma de Números Impares:", sumaDeNumeros(numerosImpares));

//16//


const numeroslist = [1,2,3,4,5,6,7,8,9,10]
let numeroMasAlto = numeroslist[0];

for (let i = 0; i < numeroslist.length; i++) {
    if (numeroslist[i] > numeroMasAlto) {
        numeroMasAlto = numeroslist[i]; 
    }
}

console.log(`El numero mas alto de la lista es:`, numeroMasAlto);
