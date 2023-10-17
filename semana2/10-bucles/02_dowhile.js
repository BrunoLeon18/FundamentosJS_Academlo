/*****************************************/
/* BUCLES ==> DO WHILE (HACER MIENTRAS) */
/****************************************/
// El bucle “do…while” es una variante del bucle “while”.

/*
Sintaxis:
let i = 0 <= Inicializador
do {
  // cuerpo del bucle
} while (condición)
*/

// A diferencia de while primero ejecuta el cuerpo y luego comprueba la condición, mientras esta se cumpla, el cuerpo se ejecuta una y otra vez.

let num = 1

do {
  console.log(num)
  num++
} while (num <= 10);

let num1 = 10

do {
  console.log(num1)
  num1--
} while (num1);

let num2 = -10

do {
  console.log(num2)
  num2++
} while (num2);

// Diferencias entre while y do while
// El bucle “while” se ejecuta mientras la condición sea verdadera.
// El bucle “do…while” se ejecuta al menos una vez, y luego comprueba la condición.

let bucleWhile = 1
let bucleDoWhile = 1

while ('') {
  console.log(bucleWhile)
  bucleWhile++
}

do {
  console.log(bucleDoWhile)
  bucleDoWhile++
} while ('');

// Puedo usar ciclos o bluces en todo lo que sea iterable, no sólo arrays por ejemplo un texto
const text = 'Hola'

let index = 0
do {
  console.log(text[index])
  index++
} while (index < text.length)