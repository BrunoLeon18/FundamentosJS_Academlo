/******************************/
/* OPERADORES ==> ASIGNACIÓN */
/*****************************/

/* 
Un operador de asignación asigna un valor a su operando izquierdo basándose en el valor de su operando derecho.
*/

// Una asignación = también es un operador.
// Su precedencia es la más baja
const resultado = 2 * 2 + 1 // 5
console.log(resultado)

// Una expresión más compleja
let a = 1
console.log(a)
const b = 2
const c = 10 - (a = b + 1)

console.log(a) // 3
console.log(b) // 2
console.log(c) // 7

// encadenar asignaciones
let x, y, z
x = y = z = 5 * 2

console.log(x) // 10
console.log(y) // 10
console.log(z) // 10

// acortadores 'modifica y asigna'
let number = 10
number = number + 5
console.log(number) // 15

number = number * 2
console.log(number) // 30

let number1 = 10
number1 += 5
console.log(number1) // 15
number1 *= 2
console.log(number1) // 30

// OPERADORES de Incremento/decremento //
// Aumentar o disminuir un número en uno es una de las operaciones numéricas más comunes.

let increase = 0

console.log(increase++) // 0
console.log(increase)
console.log(increase++) // 1
console.log(increase)
console.log(increase++) // 2
console.log(increase)

console.log(++increase) // 4
console.log(increase)
console.log(++increase) // 5
console.log(++increase) // 6

let decrement = 6

console.log(decrement--) // 6
console.log(decrement--) // 5
console.log(decrement--) // 4
console.log(decrement)

console.log(--decrement) // 2
console.log(--decrement) // 1
console.log(--decrement) // 0

let prefijo = 1
console.log(++prefijo)

let sufijo = 1
console.log(sufijo++)

console.log(prefijo) // 2
console.log(sufijo) // 2

