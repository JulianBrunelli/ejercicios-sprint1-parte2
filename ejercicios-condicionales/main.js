// function dosNumeros(num1, num2) {
//   if (num1 < num2) {
//     console.log("El primer numero es menor que el segundo");
//   } else if (num1 > num2) {
//     console.log("El primer numero es mayor que el segundo");
//   }
// }
// dosNumeros(20, 10);
// dosNumeros(10, 20);

// function numerosIgualesDesiguales(num1, num2) {
//   if (num1 === num2) {
//     console.log("Los dos numeros son iguales");
//   } else {
//     console.log("Los dos numeros son diferentes");
//   }
// }
// numerosIgualesDesiguales(5, 10);

// function esMasGrande(num1, num2) {
//   if (num1 === num2) {
//     console.log(`Son iguales`);
//   } else if ((num1 = num2)) {
//     console.log(`Es más grande el primer numero: ` + num1);
//   } else {
//     console.log(`Es más grande el segundo numero: ` + num2);
//   }
// }

// esMasGrande(5, 5);
// esMasGrande(3, 5);
// esMasGrande(9, 4);

// function esMasChico(num1, num2, num3) {
//   if (num1 < num2 && num1 < num3) {
//     console.log(`Es más chico ` + num1);
//   } else if (num2 < num3 && num2 < num1) {
//     console.log(`Es más chico ` + num2);
//   } else {
//     console.log(`Es más chico ` + num3);
//   }
// }

// esMasChico(5, 7, 9);
// esMasChico(10, 4, 15);
// esMasChico(6, 4, 2);

// const julian = {
//   nombre: "Julián",
//   edad: 22,
//   altura: 185,
// };

// const bruno = {
//   nombre: "Bruno",
//   edad: 23,
//   altura: 176,
// };

// function altura(primeraPersona, segundaPersona) {
//   let alturaPersona1 = primeraPersona.altura;
//   let alturaPersona2 = segundaPersona.altura;
//   if (alturaPersona1 > alturaPersona2) {
//     console.log(
//       ` ${primeraPersona.nombre} es más grande que ${segundaPersona.nombre} `
//     );
//   } else {
//     console.log(
//       ` ${segundaPersona.nombre} es más grande que ${primeraPersona.nombre} `
//     );
//   }
// }

// altura(julian, bruno);

// function edad(primeraPersona, segundaPersona) {
//   let edadPersona1 = primeraPersona.edad;
//   let edadPersona2 = segundaPersona.edad;
//   if (edadPersona1 > edadPersona2) {
//     console.log(
//       `${primeraPersona.nombre} es más alta que ${segundaPersona.nombre}`
//     );
//   } else {
//     console.log(
//       `${segundaPersona.nombre} es más alta que ${primeraPersona.nombre}`
//     );
//   }
// }

// edad(julian, bruno);

let edad = prompt("ingrese su edad");
let altura = prompt("ingrese su altura");
let vision = prompt("ingrese su visión");

function licenciaDeConducir(edad, altura, vision) {
  if (edad < 18 || altura < 150 || vision < 8) {
    console.log("Permiso denegado");
  } else if (edad >= 18 && altura >= 150 && vision >= 8) {
    console.log("Permiso concedido");
  }
}

licenciaDeConducir(edad, altura, vision);
