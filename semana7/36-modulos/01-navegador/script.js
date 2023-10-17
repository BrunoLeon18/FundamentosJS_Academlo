/*  1- Exportando todo el script */
// function stringFunction() {
//   return 'Hola, soy un string'
// }

// console.log(stringFrunction())

/* 2- Export Default*/
// function stringFunction() {
//   return 'Hola, soy un string'
// }

// esport default stringFunction


/* 3- Export varias funciones modo 1 */
// function stringFunction() {
//   return 'Hola, soy un string'
// }

// function sumar() {
//   return 5 + 5
// }

// const obj = {
//   stringFunction,
//   sumar
// }

// export default obj

/* 4- Export varias funciones modo 2, para desestructuración */
// export {
//   stringFunction,
//   sumar
// }

/* 5- Export varias funciones con el mismo nombre */
// function stringFunction() {
//   return 'Hola, soy un string'
// }

// function sumar() {
//   return 5 + 5
// }

// export {
//   stringFunction,
//   sumar
// }

/* 6- Export en línea */
// export function stringFunction() {
//   return 'Hola, soy un string'
// }

// export function sumar() {
//   return 5 + 5
// }

/* 7- Export defaul en una sola funcion y demás funciones con export */
function stringFunction() {
  return 'Hola, soy un string'
}

function sumar() {
  return 5 + 5
}

const PI = Math.PI

export {
  stringFunction,
  sumar
}

export default PI
