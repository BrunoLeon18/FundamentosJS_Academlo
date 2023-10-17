/*********************************/
/* MÉTODOS ==> OBJETOS (OBJECTS) */
/*********************************/

const user = {
  name: 'David',
  lastName: 'Tello',
  age: 25
}

// .entries() Devuelve un array que contiene todos los pares [key, value] de las propiedades enumerables en formato cadena de texto que le pertenece a un objeto dado.
console.log(Object.entries(user))

// .keys() Devuelve un array que contiene todas las claves de las propiedades enumerables de un objeto dado.
console.log(Object.keys(user))

// .values() Devuelve un array que contiene todos los valores de las propiedads enumerables de un objeto dado.
console.log(Object.values(user))

// .fromntries() Devuelve un objeto que contiene todos los pares [key, value] de las propiedades enumerables en formato cadena de texto que le pertenece a un array dado.
const infoUser = [['name', 'Alejandra'], ['age', 15], ['lastName', 'Olazagasti']]
console.log(Object.fromEntries(infoUser))

// .assign() Asigna una o más propiedades de un objeto a un objeto destino.
const obj = {}
console.log(Object.assign(obj, user))
console.log(obj)
const newObj = {}
console.log(Object.assign(newObj, obj, {name: 'Pedro'})) // Si existe la propiedad, reasigna
console.log(Object.assign(newObj, obj, {city: 'Mexico City'})) // Si no existe la propiedad, la agrega
console.log(newObj)

// .freeze() Congela un objeto. Otro código no puede borrar ni cambiar sus propiedades.
Object.freeze(obj)
obj.name = 'Marcos'
console.log(obj)

// .isFrozen() Devuelve un booleano que indica si un objeto está congelado.
console.log(Object.isFrozen(obj)) // true
console.log(Object.isFrozen(newObj)) // false

// .seal() Te permite modificar los valores de las propiedades existentes, pero no agregar ni eliminar
console.log(Object.seal(newObj))
newObj.name = 'Ceci'
console.log(newObj)
newObj.address = 'Cuernavaca'
console.log(newObj)
delete newObj.city
console.log(newObj)

// .isSealed() Te permite validar si el objeto tiene el método seal
console.log(Object.isSealed(newObj)) // true
console.log(Object.isSealed(user)) // false