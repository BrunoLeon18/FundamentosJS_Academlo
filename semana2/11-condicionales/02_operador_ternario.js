/******************************************/
/* CONDICIONALES ==> OPERADOR TERNARIO ? */
/*****************************************/
// A veces necesitamos asignar valor a una variable dependiendo de alguna condición.
// Si no es así, es mejor utilizar if
/* 
  La sintaxis es la siguiente:
  condición ? valor si es true : valor si es false
*/

// Ejemplo 

const edad = 18

const permiso = edad >= 18 ? 'Puedes conducir' : 'Aún no tienes edad para conducir'
console.log(permiso)

const nombreDeUsuario = ''
const saludo = nombreDeUsuario
  ? `Bienvenido ${nombreDeUsuario}`
  : 'No has iniciado sesión'
console.log(saludo)

// Ejemplo múltiples condiciones
const num1 = 20
const num2 = 20

const resultado = 
  num1 < num2
    ? 'El número es menor'
    : num1 === num2
      ? 'Los números son iguales'
      : 'El número es mayor'

console.log(resultado)

const resultado1 = num1 < num2 ? 'El número es menor':
                   num1 === num2 ? 'Los números son iguales':
                   'El número es mayor'

console.log(resultado1)

// No se recomienda el uso del operador ternario de esta forma.