// let multiplos = Number(prompt("Escriba el número a multiplicar"));
// function multi(numero) {
//   for (let i = 1; i <= 10; i++) {
//     let multiplicacion = i * numero;
//     console.log(multiplicacion);
//   }
// }
// multi(multiplos);

// let ingresarNumero = parseInt(prompt("Escriba un número entre el 1 y el 100"));
// let numeros = [0];

// while (ingresarNumero !== 0 && ingresarNumero !== null && ingresarNumero !== " ") {
//     ingresarNumero = parseInt(prompt("Escriba un número 1 y el 100"));
//     numeros.push(ingresarNumero);
// }
// let numeroFinal = numeros.length - 1;
// console.log(numeroFinal);

// let ingresarNuevoNumero = parseInt(prompt("Escriba un número entre el 1 y el 100 adivinar"));
// let contador = 1
// if (ingresarNuevoNumero === null || ingresarNuevoNumero === " ") {
//     alert("¡No se han encontrado caracteres numéricos, vuelve a intentarlo!");
// } else {
//     while (ingresarNuevoNumero != numeroFinal && ingresarNuevoNumero >= 1 && numeroFinal <= 100) {
//         contador = contador + contador
//         if (ingresarNuevoNumero > numeroFinal) {
//             parseInt(prompt("El número ingresado es mayor"));
//         } else {
//             parseInt(prompt("El número ingresado es menor"));
//         }
//         ingresarNuevoNumero = parseInt(prompt("Escriba un número 1 y el 100 adivinar"));
//     }
// }
// alert(`Felicidades, adivinaste el número en ${contador} `);

// const resultadoDivisores = [];
// let numeroIngresado = parseFloat(prompt("Ingrese un número para ver sus divisores"));

// function dividir(numeroUsuario) {
//     for (let divisores = 1; divisores <= numeroUsuario; divisores++) {
//         if (numeroUsuario % divisores === 0) {
//             resultadoDivisores.push(divisores);
//         }
//     }
// }
// dividir(numeroIngresado);
// console.log(resultadoDivisores);

// let arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let recorrer of arrayNumeros) {
//     recorrer += 1;
//     console.log(arrayNumeros);
// }

// let arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let numerosMultiplicados = [];
// for (let recorrer = 0; recorrer <= 9; recorrer++) {
//     numerosMultiplicados.push(arrayNumeros[recorrer] * 2)
// }
// console.log(numerosMultiplicados);

// let arrayFamilia = [
//     {
//         Familia: "Messi",
//         NombrePadre: "Lionel",
//         NombreMadre: "Antonella",
//         Hijos: ["Ciro", "Mateo", "Thiago"],
//     },
//     {
//         Familia: "Di Maria",
//         NombrePadre: "Angel",
//         NombreMadre: "Jorgelina",
//         Hijos: ["Mia", "Pia"],
//     },
//     {
//         Familia: "Martinez",
//         NombrePadre: "Dibu",
//         NombreMadre: "Madhina",
//         Hijos: ["Santi", "Ava"],
//     },
//     {
//         Familia: "Otamendi",
//         NombrePadre: "Nico",
//         NombreMadre: "Celeste",
//         Hijos: ["Morena", "Mia", "Valentin"],
//     },
//     {
//         Familia: "Scaloni",
//         NombrePadre: "Lionel",
//         NombreMadre: "Elisa",
//         Hijos: ["Ian", "Noah"],
//     },
// ];

// for (let familia of arrayFamilia) {
//     let mensajeFamilia = `Hola es la familia de ${familia.Familia}, te saluda antes que nada ${familia.NombrePadre} y ${familia.NombreMadre}
//     te regalo a mis hijos ${familia.Hijos}`;
//     console.log(mensajeFamilia)
// }


// let arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let impares = [];
// for (let recorrer = 0; recorrer <= arrayNumeros.length - 1; recorrer++) {
//     if (arrayNumeros[recorrer] % 2 !== 0) {
//         impares.push(arrayNumeros[recorrer]);
//     }
// }
// console.log(impares)


// let numero = Number(prompt("Ingrese un numero"))
// let numCalculo = []
// let sumaPar = 0
// let sumaImpar = 0

// while (numero != 0) {
//     numCalculo.push(numero)
//     numero = Number(prompt("Ingrese su numero"))
// }

// for (let i = 1; i <= numCalculo.length - 1; i++) {
//     if (numCalculo[i] % 2 === 0) {
//         sumaPar += numCalculo[i]
//     } else {
//         sumaImpar += numCalculo[i]
//     }
// }

// console.log(sumaPar)
// console.log(sumaImpar)



// let arrayDeBoquita = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let masGrande = Math.max(...arrayDeBoquita);
// console.log(masGrande);