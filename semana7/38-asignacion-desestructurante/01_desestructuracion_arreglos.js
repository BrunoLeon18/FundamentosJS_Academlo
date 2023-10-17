/***************************************************/
/* DESTRUCTURING ==> desestructuración de Arreglos */
/***************************************************/

/* Destructuración o desestructuración está bien */
// La desestructuración nos permite "desempaquetar" arrays u objetos en varias variables

/* Sin desestructuración */
const persona = ['Alejandra', 'Olazagasti']

const nombre = persona[0]
const apellido = persona[1]

console.log(nombre, apellido)

/* Con desestructuración */
const [primerNombre, primerApellido] = persona

console.log(primerNombre, primerApellido)

/* Ignorar elementos */
const frutas = ['manzana', 'pera', 'plátano', 'papaya', 'sandia', 'uva']
const [fruta1, , fruta3, ...rest] = frutas

console.log(fruta1)
console.log(fruta3)
console.log(rest)
console.log(rest[0])
console.log(rest[2])
console.log(rest[1])

/* Con una propiedad objeto */
const colores = {};

/* Podemos usar cualquier "asignable" del lado izquierdo */

[colores.rojo, colores.verde, colores.azul] = '#ff0000 #00ff00 #0000ff'.split(' ')

console.log(colores.rojo)
console.log(colores.verde)
console.log(colores.azul)

/* bucle con entries */
const user = {
  nombre: 'Alexis',
  edad: 20
}

for (const [clave, valor] of Object.entries(user)) {
  console.log(Object.entries(user))
  console.log(clave)
  console.log(valor)
}

/* Valores predeterminado */
const [nombreDeUsuario = 'Visitante', nombreAlternativo = 'Anonimo'] = ['Steven']

console.log(nombreDeUsuario)
console.log(nombreAlternativo)