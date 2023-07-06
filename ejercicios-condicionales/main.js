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

// let edad = prompt("ingrese su edad");
// let altura = prompt("ingrese su altura");
// let vision = prompt("ingrese su visión");

// function licenciaDeConducir(edad, altura, vision) {
//   if (edad < 18 || altura < 150 || vision < 8) {
//     console.log("Permiso denegado");
//   } else if (edad >= 18 && altura >= 150 && vision >= 8) {
//     console.log("Permiso concedido");
//   }
// }

// licenciaDeConducir(edad, altura, vision);

// function puedePasar() {
//   let nombre = prompt("Ingrese su nombre");
//   if (nombre !== "julian" || nombre === "Julian") {
//     let pase = prompt("¿Tiene pase VIP?");
//     if (pase !== "si" || pase !== "Si") {
//       let entrada = prompt("¿Desea comprar una entrada?");
//       if (entrada === "si" || entrada === "Si") {
//         let dinero = Number(prompt("Ingrese un monto superior a $1000"));
//         if (dinero >= 1000) {
//           alert("Puede pasar");
//         } else {
//           alert("Saldo insuficiente");
//         }
//       } else {
//         alert("No pasas flaquito");
//       }
//     } else {
//       alert("Puede pasar gratis ya que tiene pase VIP");
//     }
//   } else {
//     alert("Puede pasar gratis ya que te llamas Julian");
//   }
// }
// puedePasar();

// for (let numeroIncognita = 3; numeroIncognita >= 1; numeroIncognita--) {
//   let numeroIngresado = Number(prompt("Ingrese un numero del 1 al 10"));
//   {
//     switch (numeroIngresado) {
//       case 9:
//         alert("Felicidades, adivinaste el número");
//         break;
//       case 1:
//       case 2:
//       case 3:
//       case 4:
//       case 5:
//       case 6:
//       case 7:
//       case 8:
//         alert("El numero seleccionado es menor, suerte en la proxima");
//         break;
//       case 10:
//         alert("El numero selleccionado es mayor, suerte en la proxima");
//         break;
//       default:
//         alert("Por favor, selecciona un número de el 1 al 10");
//         break;
//     }
//   }
// }

// let edad = Number(prompt("Ingrese su edad"));
// function etapaVida(edad) {
//   if (edad >= 0 && edad <= 12) {
//     alert("Eres un infante");
//   } else if (edad >= 13 && edad <= 18) {
//     alert("Eres un adolecente");
//   } else if (edad >= 19 && edad <= 45) {
//     alert("Eres un joven mayor");
//   } else if (edad > 45 && edad <= 100) {
//     alert("Eres un anciano");
//   } else {
//     alert("¿En realidad esa es tu edad?");
//   }
// }

// etapaVida(edad);

// let jugador1 = prompt("Ingresá Pieda, Papel o Tijera");
// let jugador2 = prompt("Ingresá Pieda, Papel o Tijera");

// function juego(jugador1, jugador2) {
//   if (jugador1 === "piedra" && jugador2 === "tijera") {
//     alert("!Gana el primer jugador¡");
//   } else if (jugador1 === "piedra" && jugador2 === "papel") {
//     alert("¡Gana el segundo jugador!");
//   } else if (jugador1 === "piedra" && jugador2 === "piedra") {
//     alert("¡Empate!");
//   } else if (jugador1 === "tijera" && jugador2 === "papel") {
//     alert("¡Gana el primer jugador!");
//   } else if (jugador1 === "tijera" && jugador2 === "piedra") {
//     alert("¡Gana el segundo jugador!");
//   } else if (jugador1 === "tijera" && jugador2 === "tijera") {
//     alert("¡Empate!");
//   } else if (jugador1 === "papel" && jugador2 === "tijera") {
//     alert("¡Gana el segundo jugador!");
//   } else if (jugador1 === "papel" && jugador2 === "piedra") {
//     alert("¡Gana el primer jugador!");
//   } else if (jugador1 === "papel" && jugador2 === "papel") {
//     alert("¡Empate!");
//   } else {
//     alert("Un jugador hizo trampa");
//   }
// }

// juego(jugador1, jugador2);

// let color = prompt("Ingese un color");
// function colores(colorUsuario) {
//   switch (colorUsuario) {
//     case "blanco" || "negro":
//       alert("Falta de color");
//       break;
//     case "verde":
//       alert("El color de la Naturaleza");
//       break;
//     case "azul":
//       alert("El color del Agua");
//       break;
//     case "amarillo":
//       alert("El color del Sol");
//       break;
//     case "rojo":
//       alert("El color del Fuego");
//       break;
//     case "marrón":
//       alert("El color de la Tierra");
//       break;
//     default:
//       alert("Exelente elección, no la teníamos pensada");
//       break;
//   }
// }
// colores(color);

// let operacion = prompt(
//   `Ingrese su operación suma / resta / multiplicación / división`
// );
// let numero1 = Number(prompt("escriba un numero"));
// let numero2 = Number(prompt("escriba un numero"));

// function calcular(operacion, numero1, numero2) {
//   switch (operacion) {
//     case "suma":
//       let suma = numero1 + numero2;
//       alert(suma);
//       break;
//     case "resta":
//       let resta = numero1 - numero2;
//       alert(resta);
//       break;
//     case "multiplicacion":
//       let multiplicacion = numero1 * numero2;
//       alert(multiplicacion);
//       break;
//     case "division":
//       let division = numero1 / numero2;
//       if (numero1 === 0 || numero2 === 0) {
//         alert("ERROR, el cero no se puede dividir");
//       } else {
//         alert(division);
//         break;
//       }
//     default:
//       alert("Por favor, intente de nuevo, o seleccione una operación valida");
//       break;
//   }
// }

// calcular(operacion, numero1, numero2);

// let documento = Number(prompt("Ingrese su DNI"));
// function documentoNacional(numeroDeDocumento) {
//   alert(
//     `Corroboremos que tu DNI esté bien. ¿Tu DNI es: ` + numeroDeDocumento + "?"
//   );
//   let correcto = prompt("Introduzca 'si o no'");
//   switch (correcto) {
//     case "si":
//       const dni = {
//         DNI: numeroDeDocumento,
//       };
//       console.table(dni);
//       alert("¡Te registraste exitosamente!");
//       break;
//     case "no":
//       alert("Vuelva a intentarlo en 1 mes");
//       break;
//     default:
//       alert("Vuelva a intentarlo en 1 mes");
//       break;
//   }
// }
// documentoNacional(documento);
