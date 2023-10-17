/*************************************/
/* REST & SPREAD ==> Parámetros Rest */
/*************************************/

/* Con arguments */
function suma(a, b) {
  console.log(arguments)
  let suma = 0
  for (const num of arguments) {
    console.log(num)
    suma += num
  }

  return suma
}

console.log(suma(1, 2, 3, 4, 5, 6))

/* Aguments con función flecha */
const sumar = (a, b) => {
  console.log(arguments)
  let suma = 0
  for (const num of arguments) {
    console.log(num)
    suma += num
  }

  return suma
}

console.log(sumar(1, 2, 3, 4, 5, 6))

/* ...rest */
function sumaRest(...rest) {
  console.log(rest)
  let suma = 0
  for (const num of rest) {
    console.log(num)
    suma += num
  }

  return suma
}

console.log(sumaRest(1, 2, 3, 4, 5, 6))

/* ...rest con arrow function */
const sumaResta = (...rest) => {
  console.log(rest)
  let suma = 0
  for (const num of rest) {
    console.log(num)
    suma += num
  }

  return suma
}

console.log(sumaResta(1, 2, 3, 4, 5, 6))

/* ...rest eligiendo los parámetros que deseemos */
function showName(nombre, apellido, ...rest) {
  console.log(rest)
  return `${nombre} ${apellido}`
}

console.log(showName('Javier', 'Perez', 20, 'correo@gmail.com', 'pikachu'))

/*************************************/
/* REST & SPREAD ==> Operador Spread */
/*************************************/

console.log(Math.max(1, 2, 3, 4, 5))

const numeros = [1, 2, 3, 4, 5]

const resultado = Math.max(...numeros)
console.log(resultado)
console.log(...numeros)

/* Podemos pasar múltiples iterables de esta manera: */

const masNumeros = [7, 8, 9, 10]
console.log(0, ...numeros, 6, ...masNumeros)

/* Podemos trabajar nuestro spread con cualquier iterable */
console.log([...'Javascript'])

/* ...spread para concatenar arrays */
const names = ['Gerardo', 'Jesus', 'Javier']
const names1 = ['Steven', 'David', 'Angel']

const groupNames = [...names, ...names1]
console.log(groupNames)

/* Copia array */
const arr = [1, 2, 3]
const copia = arr.slice()
console.log(copia)

/* copia array con spread */
const copia2 = [...arr]
console.log(copia2)

const obj = {a: 1, b: 2, c: 3}
const copia3 = { ...obj }
console.log(copia3)