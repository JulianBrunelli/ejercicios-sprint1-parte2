function saludar(nombre) {
  console.log(`Buen día ${nombre}`);
}
saludar("julian");

function multiplicar(numero1, numero2) {
  console.log(numero1 * numero2);
}

multiplicar(45, 2);
multiplicar(200, 14);

function sumar(numero1, numero2, numero3, numero4) {
  console.log(numero1 + numero2 + numero3 + numero4);
}

sumar(45, 16, 27, 83);
sumar(0, 16, 0, 83);
sumar(45, 0, 27, 0);

function restar(numero1, numero2, numero3, numero4) {
  console.log(numero1 - numero2 - numero3 - numero4);
}

restar(45, 16, 27, 83);
restar(0, 16, 0, 83);
restar(45, 0, 27, 0);

function areaTriangulo(baseArea, alturaArea) {
  console.log(baseArea * alturaArea);
}

areaTriangulo(15, 10);

function perimetroTriangulo(ladoIzquierdo, ladoInferior, ladoDerecho) {
  console.log(ladoIzquierdo + ladoInferior + ladoDerecho);
}
perimetroTriangulo(10, 15, 10);

function calcularPrecio(precioProducto, cantidadProducto) {
  precioTotal = precioProducto * cantidadProducto;

  if (cantidadProducto >= 10) {
    precioTotal = precioTotal - precioTotal * 0.1;
  } else if (cantidadProducto >= 20) {
    precioTotal = precioTotal - precioTotal * 0.2;
  }
  console.log(precioTotal);
}
calcularPrecio(12, 20);
calcularPrecio(12, 10);

function calcularDescuento(precioProducto, cantidadProducto) {
  precioTotal = precioProducto * cantidadProducto;
  switch (cantidadProducto) {
    case cantidadProducto >= 10:
      precioTotal = precioTotal - precioTotal * 0.1;
      break;

    case cantidadProducto >= 20:
      precioTotal = precioTotal - precioTotal * 0.2;
      break;

    default:
      break;
  }
}
calcularDescuento(12, 20);
console.log(precioTotal);
calcularDescuento(12, 10);
console.log(precioTotal);
calcularDescuento(12, 6);
console.log(precioTotal);

function esMayorDeEdad(edadCliente) {
  if (edadCliente >= 18) {
    console.log("Eres mayor de edad");
  } else if (edadCliente < 18) {
    console.log("Eres menor de edad");
  }
}
esMayorDeEdad(17);
esMayorDeEdad(18);

function calcularImpuesto(ingresoAnualDeUnaPersona) {
  switch (ingresoAnualDeUnaPersona) {
    case ingresoAnualDeUnaPersona <= 10000:
      ingresoAnualDeUnaPersona =
        ingresoAnualDeUnaPersona - ingresoAnualDeUnaPersona * 0.1;
      console.log(calcularImpuesto);
      break;

    case ingresoAnualDeUnaPersona > 10000 && ingresoAnualDeUnaPersona <= 20000:
      ingresoAnualDeUnaPersona =
        ingresoAnualDeUnaPersona - ingresoAnualDeUnaPersona * 0.15;
      console.log(calcularImpuesto);
      break;

    case ingresoAnualDeUnaPersona < 20000:
      ingresoAnualDeUnaPersona =
        ingresoAnualDeUnaPersona - ingresoAnualDeUnaPersona * 0.2;
      console.log(calcularImpuesto);
      break;
  }
}
calcularImpuesto(10000);
calcularImpuesto(15000);
calcularImpuesto(10000);

function verificarDia(fechaDeLaSemana) {}
