let miNombre;
miNombre = "Julian";

let miApellido;
miApellido = "Brunelli";

let nombreCompleto;
nombreCompleto = `${miNombre} ${miApellido}`;

let miEdad;
miEdad = 22;

let miMascota;
miMascota = "Lupita";

let edadMascota;
edadMascota = 2;

let textoPresentacion;
textoPresentacion = `hola soy ${nombreCompleto}, tengo ${miEdad}, mi mascota se llama ${miMascota} y tiene ${edadMascota}`;

console.log(miNombre);

console.log(miApellido);

console.log(miEdad);

console.log(miMascota);

console.log(edadMascota);

console.log(nombreCompleto);

console.log(textoPresentacion);

/////////////////////////////

let sumaEdades;
sumaEdades = 22 + 2;

let restaEdades;
restaEdades = 22 - 2;

let productoEdades;
productoEdades = 22 * 2;

let divisionEdades;
divisionEdades = 22 / 2;

console.log(sumaEdades);

console.log(restaEdades);

console.log(productoEdades);

console.log(divisionEdades);

/////////////////////////////

let alumno = {
  nombre: "julian",
  edad: 22,
  estudiante: "true",
  mascotas: "true",
  estatura: 1.85,
};

console.log(alumno.nombre);

console.log(alumno.edad);

console.log(alumno.estudiante);

console.log(alumno.mascotas);

console.log(alumno.estatura);

/////////////////////////////

let mascota = {
  nombre: "Lupita",
  edad: "2 años",
  especie: "gato",
  color: "atigrada",
  juguetona: "true",
};

console.log(mascota.nombre);

console.log(mascota.edad);

console.log(mascota.especie);

console.log(mascota.color);

console.log(mascota.juguetona);

/////////////////////////////

let frutas = ["pera", "durazno", "mango", "anana", "higo"];

console.log(frutas);

console.log(frutas[0]);

console.log(frutas[1]);

console.log(frutas[2]);

console.log(frutas[3]);

console.log(frutas[4]);

/////////////////////////////

let numeros = [1, 2, 3, 4, 5];

console.log(numeros);

console.log(numeros[0]);

console.log(numeros[1]);

console.log(numeros[2]);

console.log(numeros[3]);

console.log(numeros[4]);

/////////////////////////////

let familia = ["hermana", "madre", "padre", "abuela", "abuelo"];

console.log(familia);

console.log(familia[0]);

console.log(familia[1]);

console.log(familia[2]);

console.log(familia[3]);

console.log(familia[4]);

/////////////////////////////

let textoAleatorio;
textoAleatorio = `Mi ${familia[4]} se atoró por comerce ${numeros[3]} ${frutas[1]}`;

console.log(textoAleatorio);

/////////////////////////////

let soyMayorDeEdad = prompt("Ingrese su edad");
console.log(soyMayorDeEdad >= 18);
console.log("Soy Mayor De Edad" + soyMayorDeEdad);

///////////////////////////

let edadMia = prompt("Ingrese su edad");
let laEdadDeTuCompañero = prompt("Ingrese la Edad de Su Compañero");
let edadesIguales = edadMia === laEdadDeTuCompañero;
let soyMayor = edadMia > laEdadDeTuCompañero;
let soyMenor = edadMia < laEdadDeTuCompañero;

console.log("Mi Edad es Igual a la de mi Compañero" + edadesIguales);
console.log("Mi Edad es Mayor a la de mi Compañero" + soyMayor);
console.log("Mi Edad es Menor a la de mi Compañero" + soyMenor);

///////////////////////////

let edadUsuario = 16;
let alturaUsuario = 1.2;

let usuarioEdad = edadUsuario >= 6;
let usuarioAltura = alturaUsuario >= 1.2;

const puedeSubir = usuarioEdad && usuarioAltura;
console.log(puedeSubir, "Puede subir a la atracción");

/////////////////////////////
