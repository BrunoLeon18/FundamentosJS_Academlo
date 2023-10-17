/***************************/
/* OPERADORES ==> LÓGICOS */
/**************************/
/*
Operadores lógicos estándar:
|| OR => Busca el primer valor verdadero o el último si no lo encuentra, el cero lo toma como falso
&& AND => Busca el primer valor falso o el último si no lo encuentra
! NOT => Convierte el valor a booleano y un segundo NOT invierte el valor de nuevo
Operador nullish, se introdujo en la versión ES2020:
?? ES NULO (Nullish)=> busca igual que OR pero busca el primer valor definido (que no sea null o undefined), el cero no lo toma como falso, el cero sí cuenta
*/

/******************************/
/* OPERADORES ==> LÓGICOS OR */
/*****************************/
// OR se representa con dos símbolos de línea vertical ||

// Hay 4 combinaciones lógicas posibles:
console.log(true || true) // true
console.log(false || true) // true
console.log(true || false) // true
console.log(false || false) // false
// El resultado es siempre true excepto cuando ambos son false

// Regresa el primer valor verdadero
console.log(0 || 1) // 1
console.log(0 || ' ' || '') // ' '
console.log(null || undefined) // undefined => porque si no hay ningún valor verdadero, regresará el último valor que encuentre aunque sea falso
console.log(undefined || null || '' || 0 || NaN) // NaN
console.log(1 || 2 || 3 || 4 || 5) // 1 => porque si hay muchos verdaderos, siempre regresa el primer valor verdadero
console.log(null || 'hola' || 123) // 'hola'

// Ejemplo práctico
const nombre  = null
const apellido = null
const nombreDeUsuario = null

console.log('Bienvenido', nombre || apellido || nombreDeUsuario || 'Anónimo') // 'Bienvenido Anónimo
// evalua de izq -> der , convierte a booleano, si es true regresa el valor original y si todos dan false regresa el ultimo valor

/******************************/
/* OPERADORES ==> LÓGICOS AND */
/*****************************/
// AND es representado con dos ampersands &&

// Todo lo contrario a OR
console.log(true && true) // true
console.log(false && true) // false
console.log(true && false) // false
console.log(false && false) // false
// El resultado es siempre false excepto cuando ambos son true

// Regresa el primer valor falso
console.log(0 && 1) // 0
console.log(0 && ' ' && '') // 0
console.log(null && undefined) // null
console.log(1 && 2 && 3 && 4) // 4 => porque si no encuentra ningún valor false, regresa el último valor que encuentre, aunque sea verdadero
console.log(null && 'Hola') // null
console.log(1 && 'Hola' && 123) // 123

// Ejemplo práctico
const hora = 7
const minutos = 0
const segundos = 0

console.log(hora === 7 && minutos === 0 && segundos === 0) // true

// Las reglas anteriores son similares a las de OR. La diferencia es que AND retorna el primer valor falso mientras que OR retorna el primer valor verdadero.


// **Importante** La precedencia del operador AND es mayor que la de OR
console.log(true && false || true) // true

// Por pasos
// 1 - Primero se evalua
console.log(true && false) // false
// 2 - El resultado anterior se queda , es decir, false y luego se evalua con true
console.log(false || true) // true

// Recuerda:
// - OR retorna el primer valor verdadero o el último valor si ninguno fue encontrado.
// - AND retorna el primer valor falso o el último valor si ninguno fue encontrado.

/*******************************/
/* OPERADORES ==> LÓGICOS NOT = NEGACIÓN */
/******************************/
// NOT es representado con un signo de exclamación !

/*
El operador acepta un solo argumento y realiza lo siguiente:
- Convierte el operando al tipo booleano: true/false.
- Retorna el valor contrario.
*/

// Convierte el valor a booleano y retorna el inverso
console.log(true) // true
console.log(!true) // false
console.log(false) // false
console.log(!false) // true

// NOT con otros tipos de datos
console.log(!1) // false
console.log(!0) // true
console.log(!'Soy un texto') // false
console.log(!null) // true
console.log(!NaN) // true
console.log(!undefined) // true

// Un doble NOT !!
console.log(!!1) // true
console.log(!!0) // false
console.log(!!'Soy un texto') // true
console.log(!!null) // false
console.log(!!NaN) // false
console.log(!!undefined) // false
// El primer NOT convierte el valor a booleano y retorna el inverso, y el segundo NOT lo invierte de nuevo. Tenemos una simple coerción explícita a booleano.

//Al aplicar !! a un valor, puedes asegurarte de que el resultado sea siempre un valor booleano.
console.log('texto' === !!'texto') // false
console.log('texto' == !!'texto') // false => aunque no sea igualdad estricta da falso, porque está comparando 'texto' == 
console.log(Boolean(!!'texto')) // true
console.log(typeof 'texto') // string
console.log(typeof !!'texto') // boolean

// Ejemplo práctico
const user  = ''

if (!user) {
  console.log('Tienes que iniciar sesión')
} else {
  console.log('Has iniciado sesión')
}

// La precedencia de NOT es la mayor de todos los operadores lógicos, antes de AND y OR.
console.log(true && false || !true) // false


/**********************************************/
/* OPERADORES ==> LÓGICOS ?? NULLISH COALESCING */
/*********************************************/
// NULLISH COALESCING es representado con dos signos de interrogación ??

// Como este trata a null y a undefined de forma similar, usaremos un término especial para fines didácticos. Diremos que una expresión es “definida” cuando no es null ni undefined.

const a = 0
const b = 20

// NULLISH
console.log(a ?? b)
// OR
console.log(a || b) 

/*
La gran diferencia es que:
  || devuelve el primer valor verdadero.
  ?? devuelve el primer valor "definido".
*/

// Ejemplo práctico
const height = 0
console.log(height || 'No se conoce la altura')
console.log(height ?? 'No se conoce la altura')

// La precedencia del operador ?? es la misma de ||.

console.log((null || 'hola') ?? 123) // hola

// Ejemplo práctico usando operadores lógicos

const names = ['Jorge', 'Pedro', 'Juan', 'Luis', 'Maria', 'Jesus', 'Julio', 'Jose', 'Joe']

function newArrayNames(arr) {
  const nombresFiltrados = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].startsWith('J') || arr[i].length <= 4) {
      nombresFiltrados.push(arr[i])
    } 
  }
  return nombresFiltrados
}

console.log(newArrayNames(names))
