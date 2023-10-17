/**************************************************/
/* DESTRUCTURING ==> desestructuración de Objetos */
/**************************************************/

const usuario = {
  nombre: 'Nicolas',
  edad: 30,
  correo: 'nico@gmail.com'
}

const { nombre, edad, correo } = usuario
console.log(nombre)
console.log(edad)
console.log(correo)

/* No importa el orden, si no los nombres */

const compus = {
  marca: 'Huawei',
  precio: 13000,
  cantidad: 20
}

const { precio, cantidad: disponibles, modelo = 'mkultra', marca } = compus

console.log(precio)
// console.log(cantidad)
console.log(disponibles)
console.log(marca)
console.log(modelo)

const products = {
  producto: 'Pelota',
  radio: '50'
}

const { producto, radio: w = '100%', grosor = '2cm' } = products

console.log(producto)
console.log(w)
console.log(grosor)

/* Podemos usar rest */
const { nombre: nom, ...rest } = usuario
console.log(nom)
console.log(rest)
console.log(rest.edad)
console.log(rest.correo)

/* cuidado con hacer esto */
let primero, segundo, tercero

/* Esto no funcionará porque JS lo interpreta como bloques de código */
// { primero, segundo, tercero } = { primero: 1, segundo: 2, tercero: 3 }

{
  const a = 1
  console.log(a)
}

// console.log(a)

/* Esto sí funcionará */
({ primero, segundo, tercero } = { primero: 1, segundo: 2, tercero: 3 })

console.log(primero)
console.log(segundo)
console.log(tercero)

/* Desestructuración anidada */
const animales = {
  perros: {
    labrados: { 
      nombre: 'Ooogie',
      edad: 2
    }
  },
  gatos: {
    siames: {
      nombre: 'Miau',
      edad: 1
    }
  }
}

const {
  perros: {
    labrados: { 
      nombre: nombreLabrador,
      edad: edadLabrador
    }
  },
  gatos: {
    siames: {
      nombre: nombreSiames,
      edad: edadSiames
    }
  }
} = animales

console.log(nombreLabrador)
console.log(edadLabrador)
console.log(nombreSiames)
console.log(edadSiames)

/* Argumentos de función inteligentes */
const datosFormulario = {
  correo: 'javi@gmail.com',
  contraseña: '123456'
}

/* Podemos parasar argumentos como un objeto y desestructurarlo */
function autenticar({ correo, contraseña }) {
  console.log(correo)
  console.log(contraseña)
}

autenticar(datosFormulario)

