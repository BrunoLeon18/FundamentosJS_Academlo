/********************************************************/
/* MODULES ==> Módulos en JavaScript desde el Navegador */
/********************************************************/

/* 1- Todo el script */
// import './script.js'


/* 2- Con export default */
// import pikachu from './script.js'
// console.log(pikachu())

/* 3- Varias funciones con export default accediendo al objeto */
// import obj from './script.js'

// console.log(obj.stringFunction())
// console.log(obj.sumar())

/* 4- Varias funciones con desestructuración */
// import { stringFunction, sumar as sum } from './script.js'

// console.log(stringFunction())
// console.log(sum())

// function sumar() {
//   return 10 + 15 
// }

// console.log(sumar())

/* 5- Importar una función por export default y el resto con export */
import PI, { stringFunction, sumar as sum } from './script.js'

console.log(stringFunction())
console.log(sum())

function sumar() {
  return 10 + 15 
}

console.log(sumar())
console.log(PI)