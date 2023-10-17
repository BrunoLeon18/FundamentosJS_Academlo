/**********************/
/* MÉTODOS ==> NUMBER */
/**********************/

// fuciones globales

// parseInt()
// para convertir una cadena a un numero entero se utiliza la funcion parseInt()

console.log(parseInt('100.5 mxn'));

// parseFloat()
// para convertir una cadena a un numero flotante se utiliza parseFloat()

console.log(parseFloat('100.5 mxn'));
console.log(parseFloat( 105.6));

// importnte: si el valor inicia con una letra o simbolo y lo considera un string
console.log(parseFloat('$100.5 mxn'));


// Metodos de Number
// toFixed() redondea un numero a uan cantidad de decimales especifica}
console.log(30.123456789.toFixed());
console.log(30.123456789.toFixed(1))
console.log(30.123456789.toFixed(2))
console.log(30.123456789.toFixed(3))
console.log(30.123456789.toFixed(4))
console.log(30.123456789.toFixed(5))


// Number.isNaN()

console.log(Number.isNaN('abc' * 5));
console.log(Number.isNaN('abc' + 5));

// Number.isFinite()

console.log(Number.isFinite(1 / 0));
console.log(Number.isFinite(123));

// Number.isInteger()

console.log(Number.isInteger(5.5));
console.log(Number.isInteger(123));

// el Objeto Math: tiene propiedades y metodos para constantes y funciones matematicas

// propiedad PI
console.log(Math.PI);

// Math.round() redondea hacia el entero mas cercano
console.log(Math.round(3.3));
console.log(Math.round(3.6))
console.log(Math.round(3.5))


// Math.ceil() redondea hacia el entero mas alto

console.log(Math.ceil(3.3));
console.log(Math.ceil(3.1))
console.log(Math.ceil(3.5))

// Math.floor() redondea hacia el entero mas abajo
console.log(Math.floor(3.3))
console.log(Math.floor(3.1))
console.log(Math.floor(3.9));

// Math.max() devuleve el valor mas alto de una lista de numero|

console.log(Math.max());
console.log(Math.max(1, 2, 3));
console.log(Math.max(1, 2, 3, 4));
console.log(Math.max(1, 2, 3, 4, 5));

// Math.min() devuleve el valor mas bajo de una lista de numero|

console.log(Math.min());
console.log(Math.min(1, 2, 3));
console.log(Math.min(0, 2, 3, 4));
console.log(Math.min( 2, 3, 4, 5));

// Math.random() devuleve un numero aleatorio entre 0 y 1

console.log(Math.random());
console.log(Math.random(1));
console.log(Math.random(1, 2));
console.log(Math.random(1, 2, 3));
console.log(Math.floor(Math.random() * 100));
console.log();
// Math.trunc() remueve los decimales de un numero

console.log(Math.trunc(95.65));
console.log(Math.trunc('95.565'))
console.log(Math.trunc('95.566 mxn'))

