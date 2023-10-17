/********************************/
/* OPERADORES ==> COMPARACIÓN */
/******************************/

/* En JavaScript se escriben así:
  //Operadores relacionales
  - mayor que >
  - menor que <
  - mayor o igual que >=
  - menor o igual que <=
  // Operadores de igualdad
  - igual a == (compara valores)
  - igualdad estricta === (compara valores y tipo de dato)
  - diferente de != (compara valores)
  - diferente estricto !== (compara valores y tipo de dato)
*/

// Los operadores de comparacion retornan un valor booleano.
console.log(5 > 2) // true
console.log(5 < 2) // false
console.log(5 >= 2) // true
console.log(5 <= 2) // false
console.log(5 === 2) // false
console.log(5 !== 2) // true

const result = 5 * 2 >= 10
console.log(result) // true

// comparando cadenas
console.log('a' < 'z') // true
console.log('Z' < 'a') // true
console.log('a' > 'Z') // true
console.log('A' > 'Z') // false
console.log('a' > 'A') // true
console.log('Z' < 'z') // true

// comparacion de diferentes tipos
console.log(5 == '5') // true
console.log(5 < '50') // true la cadena '50' se convierte implícitamente en el número 50 antes de la comparación. La conversión de la cadena en un número se realiza de izquierda a derecha, carácter por carácter, hasta que se encuentra un carácter no numérico. En este caso, la cadena '50' consiste en los caracteres '5' y '0', que son caracteres numéricos válidos. Por lo tanto, la cadena '50' se convierte en el número 50, y luego se realiza la comparación 5 < 50, que es verdadera.
console.log('5' >= '5') // true En el orden lexicográfico, los caracteres numéricos se comparan en función de sus valores numéricos, no de sus valores Unicode.
console.log('5' >= '50') // false
console.log('aaaaaa' < 'zzz') // true En el caso específico de 'aaaaaaa' < 'zzz', se compara cada carácter de ambas cadenas secuencialmente desde el principio hasta encontrar una diferencia.
console.log('zzz' < 'zzzz') // true En este caso, se compara cada carácter de ambas cadenas secuencialmente desde el principio hasta encontrar una diferencia, al no haber más caracteres en 'zzz' para comparar, se considera que es menor que 'zzzz'.
console.log('5' < '8') // true
console.log('3' < '13') // false En el orden lexicográfico, se compara el valor Unicode de los caracteres individualmente. En este caso, el carácter '3' tiene un valor Unicode mayor que el carácter '1'.
console.log('1' < '13') // true 
console.log('1' > '1a') // false

/*** Recuerda que en las comparaciones de cadenas, se compara el valor Unicode de los caracteres individualmente y se detiene en la primera diferencia encontrada. ***/

const cadena1 = 'tierra'
const cadena2 = 'tierna'
console.log(cadena1 < cadena2) // false
console.log('r' < 'n') // false

// Una comparación de igualdad convierte valores utilizando la conversión numérica (de ahí que "0" se convierta en 0)
console.log(false == '0') // true

// Comparación con valores true y false
// true = 1, false = 0 
console.log(true == 1) // true
console.log(false == 0) // true
console.log(true  / false) // Infinity

// valores falsy 0, '', null, undefined, NaN, false 
console.log(0 == '') // true
console.log(0 == false) //true
console.log(0 == 0) // true
console.log(0 == null) // false
console.log(0 == undefined) // false
console.log(0 == NaN) // false

console.log(false == '')
console.log(false == false)
console.log(false == 0)
console.log(false == null)
console.log(false == undefined)
console.log(false == NaN)

console.log('' == '')
console.log('' == false)
console.log('' == 0)
console.log('' == null)
console.log('' == undefined)
console.log('' == NaN)

// Comparación de null y undefined ==> Existe una regla especial, son iguales entre sí, pero no a ningún otro valor.

// Iguales entre sí
console.log(undefined == null) // true
console.log(null == null) // true
console.log(undefined == undefined) // true

// Pero no a ningún otro valor.
console.log(null == 0) // false
console.log(null == '') // false
console.log(null == false) // false
console.log(null == NaN) // false

console.log(undefined == 0) // false
console.log(undefined == '') // false
console.log(undefined == false) // false
console.log(undefined == NaN) // false

// Comparación NaN => En Javascript cualquier comparación entre NaN y cualquier otro valor (incluso NaN a sí mismo) siempre dará como resultado false.
console.log(NaN == NaN) // false

// Igualdad estricta
console.log(5 == '5') // true
console.log(true == 1) // true
console.log(false == 0) // true
console.log(undefined == null) // true

console.log(5 === '5') // false
console.log(true === 1) // false
console.log(false === 0) // false
console.log(undefined === null) // false

// Diferente estricto
console.log(3 != '3') // false
console.log(1 != true) // false

console.log(3 !== '3') // true
console.log(1 !== true) // true