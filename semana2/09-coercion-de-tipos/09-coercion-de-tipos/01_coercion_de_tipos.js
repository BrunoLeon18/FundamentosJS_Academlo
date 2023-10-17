/***********************/
/* COERCIÓN DE TIPOS */
/*********************/
// En JavaScript, la coerción es una característica que fuerza a una variable de cierto tipo a tener el comportamiento de una diferente.
//Existe dos tipos:
// Coerción implícita: Ocurre de manera automática de un valor de un tipo de dato a otro
// Coerción explícita: Ocurre cuando forzamos a un valor de un tipo de dato a comportarse como otro

/************************************/
/* COERCIÓN DE TIPOS ==> Implícita */
/***********************************/

// Operador de adición con números, strings, truthy y falsy
console.log('1' + 2) // '12'
console.log(1 + '2') // '12'
console.log('2' + '2') // '22'
console.log(4 + 1 + '2' + 3 + 2) // '5232'
console.log('Hola' + 'Mundo') // 'HolaMundo'
console.log('Esto es ' + true) // 'Esto es true'
console.log(false + '2') // 'false2'
console.log(false + false + '2') // '02'
console.log('2' + false + false) // '2falsefalse'
console.log(true + true + '2') // '22'
console.log('2' + true + true) // '2truetrue'
console.log(null + '2') // 'null2'
console.log(null + null + '2') // '02'
console.log(NaN + '2') // 'NaN2'
console.log(undefined + '2') // 'undefined2'


// Lo anterior ocurre con operador de adición, ya que tiene otras funcionalidades, como concatenar cadenas de texto, o convertir número en texto en números

// Operadores que no son de adición con números y strings
console.log('24' / '2') // 12
console.log('15' - '15') // 0
console.log('2' * '10') // 20
console.log(20 / '2') // 10
console.log(3 * '3') // 9
console.log('abc' / '2') // NaN
console.log('abc' - 2) // NaN
console.log('abc' * 2) // NaN

// Coerción implícita con null y undefined
// null = 0
console.log(null + 2) // 2
console.log(1 / null) // Infinity
console.log(2 * null) // 0
console.log(10 - null) //10
console.log(null - 10) // -10

// undefined = NaN
console.log(undefined + 2) // NaN
console.log(undefined / 2) // NaN
console.log(undefined * 2) // NaN
console.log(undefined % 2) // NaN
console.log(undefined + 2) // NaN
console.log(undefined + null) // NaN

// Coerción implícita con booleanos
// true = 1 y false = 0
console.log(true + 2) // 3
console.log(true * 2) // 2
console.log(true ** '5') // 1
console.log(true ** false) // 1
console.log(true / false) // Infinity

// Coerción implícita con array vacío
// [] = 0
// Operador de adición con []
console.log([] + '1') // 1
console.log([] + 1) // 1
// Operadores que no son de adición con []
console.log(1 / []) // Infinity
console.log(1 * []) // 0
console.log([] - 2) // -2
// +[] o Number([]) = 0
const arr = []
console.log(+arr) // 0
console.log(Number(arr)) // 0
console.log(parseInt(arr)) // NaN
// No funciona con array que no están vacíos
const arr1 = [1, 2, 3]
const arr2 = ['1', '2', '3']
console.log(Number(arr1)) // NaN
console.log(Number(arr2)) // NaN
console.log(arr1 + 5) // '1,2,35'
console.log(arr2 + 5) // '1,2,35'
console.log(arr1[0] + arr1[1]) // 3
console.log(arr2[0] + arr2[1]) // 12

/************************************/
/* COERCIÓN DE TIPOS ==> Explícita */
/***********************************/

// Coerción explícita con objeto constructor String
console.log(String(1) + String(2)) // '12'
console.log(String(null) + String(true)) // 'nulltrue'
console.log(String(undefined) + String(false)) // 'undefinedfalse'

// Coerción explícita con objeto constructor Number
console.log(Number('24') + Number('2')) // 26
console.log(Number('abc')) // NaN
console.log(Number(true)) // 1
console.log(Number(false)) // 0
console.log(Number(undefined)) // NaN
console.log(Number(null)) // 0
console.log(Number('')) // 0
console.log(Number(NaN)) // NaN
console.log(Number([])) // 0
console.log(Number({})) // NaN

// Coerción explícita con operador de adición
console.log(+'24' + +'2') // 26
console.log(+true) // 1
console.log(+false) // 0
console.log(+undefined) // NaN
console.log(+null)// 0
console.log(+'') // 0
console.log(+NaN) // NaN
console.log(+[]) // 0
console.log(+{}) // NaN

// Coerción explícita con booleanos
// valores truthy
console.log(Boolean(true)) // true
console.log(Boolean(1)) // true
console.log(Boolean(-1)) // true
console.log(Boolean('Hola')) // true
console.log(Boolean('0')) // true
console.log(Boolean(Infinity)) // true
console.log(Boolean(-Infinity)) // true
console.log(Boolean([])) // true
console.log(Boolean({})) // true

// valores falsy
console.log(Boolean(false)) // false
console.log(Boolean(0)) // false
console.log(Boolean(null)) // false
console.log(Boolean(undefined)) // false
console.log(Boolean(NaN)) // false
console.log(Boolean('')) // false

// Coerción explícita usando funciones globales
console.log(+'15px') // NaN
console.log(Number('15px')) // NaN
console.log(parseInt('15px')) // 15
console.log(parseFloat('15.5px')) // 15.5