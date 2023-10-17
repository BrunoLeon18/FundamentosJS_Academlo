/***********************************/
/* CONDICIONALES */
/**********************************/

// Algunas veces, necesitamos ejecutar diferentes acciones(sentencias) basadas en diferentes condiciones.

/******************/
/* SENTENCIA IF */
/******************/

// Evalua la condición en los paréntesis y si el resultado es true ejecuta un bloque de código.

if ('true') {
  console.log('Tu condición es verdadera')
}

// Podemos pasar una expresión entre los paréntesis
if (10 > 5) {
  console.log('Sí es mayor que 5')
}

// O podemos almacenar la operación en una variable y pasarla como condición
const operacion = 5 > 2
if (operacion) {
  console.log('Sí 5 es mayor que 2')
}

// Si la condición es false, no se ejecuta el bloque de código
if (0) {
  console.log('No se va a ejecutar')
}

// Podemos usar todos los if que necesitemos
const num1 = 10
const num2 = 20
if (num1 < num2) {
  console.log('No, es numero mayor')
}

if (num1 === num2) {
  console.log('Son números iguales')
}

if (num1 > num2) {
  console.log('Si, num1 es mayor que num2')
}

/*********/
/* else */
/********/

// La cláusula else es un bloque opcional y este se ejecutará cuando la condición sea falsa.

if (num1 >= num2) {
  console.log('Si, num1 es mayor que num2')
} else {
  console.log('No, es menor')
}

const condicion = ''

if (condicion) {
  console.log('La condición es verdadera')
} else {
  console.log('La condición es falsa')
}

// Ejercicio práctico
const edad = 15
let permiso

if (edad >= 18) {
  permiso = 'Puede conducir'
} else {
  permiso = 'No puede conducir'
}

console.log(permiso)

/************/
/* else if */
/***********/

// La cláusula else if nos proporciona bloques opcionales para probar todas nuestras variantes.

if (num1 > num2) {
  console.log(`${num1} es mayor que ${num2}`)
} else if (num1 < num2) {
  console.log(`${num1} es menor que ${num2}`)
} else {
  console.log(`${num1} es igual que ${num2}`)
}

// Podemos usar todas las cláusulas else if que necesitemos. El bloque else es opcional.
const diaDeLaSemana = 'lunes'

if (diaDeLaSemana === 'lunes') {
  console.log('Es lunes')
} else if (diaDeLaSemana === 'martes') {
  console.log('Es martes')
} else if (diaDeLaSemana === 'miércoles') {
  console.log('Es miércoles')
} else if (diaDeLaSemana === 'jueves') {
  console.log('Es jueves')
} else if (diaDeLaSemana === 'viernes') {
  console.log('Es viernes')
} else {
  console.log('Es fin de semana')
}

// El órden es importante porque si la primer condición se cumple se detiene la estructura de control y arroja el primer valor

// Ejemplo
const puntaje = 500

if (puntaje === 500) {
  console.log('Felicidades sacaste el puntaje máximo')
} else if (puntaje > 450) {
  console.log('Excelente puntaje')
} else if (puntaje >= 300) {
  console.log('Buen puntaje')
} else {
  console.log('Sigues intentando')
}

// Otro ejemplo práctico
const input = ''

function validar(input) {
  if (input) {
    return 'Formulario enviado'
  } else {
    return 'Tienes que llenar el input'
  }
}

console.log(validar(input))

//CONDICIONES ANIDADAS
// un if dentro de otro if
const names = ['Jorge', 'Pedro', 'Juan', 'Luis', 'Maria', 'Jesus', 'Julio', 'Jose', 'Joe']

function filterNames(arr) {
  const nombresFiltrados = []
  for (const name of arr) {
    if (name.startsWith('J')) {
      console.log(name)
      if (name.length <= 4) {
        console.log(name)
        nombresFiltrados.push(name)
      }
    }
  }
  return nombresFiltrados
}

console.log(filterNames(names))