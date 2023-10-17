/*********************************/
/* MÉTODOS ==> ARREGLOS (ARRAYS) */
/*********************************/

const fruits = ['Apple', 'Pear', 'Orange', 'Watermelon', 'Melon', 'Pear'];

// .indexOf(searchElement, index) – busca el elemento comenzando desde el index, y devuelve el index donde fue encontrado, de otro 
console.log(fruits.indexOf('Melon')) // 4
console.log(fruits.indexOf('Pear')) // 1
console.log(fruits.indexOf('Apple')) // 0
console.log(fruits.indexOf('Orange')) // 2
console.log(fruits.indexOf('Mango')) // -1
console.log(fruits.indexOf('Pear', 2)) // 5

// .lastIndexOf(item, from) – igual que el anterior, pero busca de derecha a izquierda.
console.log(fruits.lastIndexOf('Pear')) // 5
console.log(fruits.lastIndexOf('Pear', 4)) // 1
console.log(fruits.lastIndexOf('Banana')) // -1

// .includes(searchElement, index) – busca comenzando desde el índice, devuelve true en caso de ser encontrado.
console.log(fruits.includes('Melon')) // true
console.log(fruits.includes('Pear', 2)) // true
console.log(fruits.includes('Apple', 1)) // false
console.log(fruits.includes('Mango')) // false

// Una pequeña diferencia de includes es que puede manejar correctamente NaN a diferencia de indexOf y lastIndexOf
const array = [NaN]

console.log(array.includes(NaN)) // true
console.log(array.indexOf(NaN)) // -1
console.log(array.lastIndexOf(NaN)) // -1

// .toString() - convierte un arreglo en una cadena de texto string (separado por comas).
console.log(fruits.toString()) 

// .join() - convierte un arreglo en una cadena de texto string (separado por el caracter que le indiquemos).
const newArray = [['Hola', 'mundo'], ['Soy', 'array'], ['me', 'gusta', 'programar']]
console.log(fruits.join()) // Me devuelve lo mismo que toString
console.log(fruits.join(' ')) //
console.log(fruits.join(', ')) //
console.log(newArray.join(' '))

// .pop() - Extrae el último elemento del array y lo devuelve:
const lastItem = fruits.pop()
console.log(lastItem) // Pear
console.log(fruits)

// .push() - Agrega el elemento al final del array:
fruits.push('Grape', 'Banana')
console.log(fruits)

// .shift() - Extrae el primer elemento del array y lo devuelve:
const firstItem = fruits.shift()
console.log(firstItem) // Apple
console.log(fruits)

// .unshift() - Agrega el elemento al principio del array:
fruits.unshift('Coconut', 'Mango')
console.log(fruits)

// .concat(...elementos) - devuelve un nuevo arreglo con todos los elementos actuales y agrega otros arreglos
const group1 = ['Edson', 'Jesus', 'Laura']
const group2 = ['Junior', 'Sebas', 'Tati']
const group3 = ['Erik', 'Georg', 'Pedro']
const newGroup = group1.concat(group3, 'Alejandra', group2)
console.log(newGroup)

// .slice(inidiceInicial - indiceFinal) - crea un nuevo array y copia elementos desde la posición desde / hasta en el nuevo array, 
const colors = ['Red', 'Green', 'Blue', 'Pink']

const colorsCopy = colors.slice(1, 3)
console.log(colorsCopy)
console.log(colors)

console.log(colors.slice()) // Si lo le paso nada lo toma como 0 y te devuelve todo completo
console.log(colors.slice(0)) // Completo
console.log(colors.slice(1)) // 
console.log(colors.slice(1, 2)) // ['Green]
console.log(colors.slice(-1)) // ['Pink']
console.log(colors.slice(-2)) // ['Blue', `Pink']
console.log(colors.slice(-2, -1)) // ['Blue']
console.log(colors.slice(-4)) // ['Blue'....todo el array]

// .splice(desde, cuantos, insertar) - modifica el array original desde la posición desde / cuantos / y los que desees insertar en 
// El primer parámetro define la posición desde donde se borrarán los elementos.
// El segundo parámetro define cuántos elementos deben eliminarse.
// El tercer parámetro define cuántos elementos deben agregarse.
const students = ['Edwin', 'Jesus', 'Tati', 'Freddy', 'Junior', 'Jhon']

const studentsCopy = students.slice()
console.log(studentsCopy)
console.log(studentsCopy.splice()) // Me devuelve vacio mi array
console.log(studentsCopy.splice(1)) // ['Jesus'... resto del array]
// console.log(students.splice(0)) // ['Jesus'... resto del array]
console.log(students.splice(2, 2)) // ['Tati', 'Freddy']
console.log(students.splice(0, 0, 'Victor', 'Sebas')) // ['Tati', 'Freddy']
console.log(students)
console.log(students.splice(-1, 1, 'Fabrizzio'))
console.log(students)
console.log(students.splice(1, 1).concat(students.splice(-2, 1)))

// .reverse() - ordena el array de forma inversa y lo devuelve.
const numbers = [1, 2, 3, 4, 5]
console.log(numbers.reverse())

//Ejemplo práctico - Invierte una cadena de texto
const str1 = 'Hi my name is Jhonattan and I love to programming'
console.log(str1.split('').reverse().join(''))

// .sort() - ordena el array y lo devuelve
const elements = ['earth', 'water', 'fire', 'air', 'wind']
console.log(elements.sort()) // ['air', 'earth'.....]
console.log(elements)

const desorder = [34, 12, 24, 9, 5]
console.log(desorder.sort()) // [12, 24, 34, 5, 9]
console.log(desorder.sort((a, b) => a - b)) // [5, 9, 12, 24, 34]
console.log(desorder.sort((a, b) => b - a)) // [34, 24, 12, 9, 5]

const strings = ['50', '21', '3', '12', '4']
console.log(strings.sort((a, b) => a - b))
console.log(strings.sort((a, b) => b - a))

const numStrings = [0, 1, 9, 3, 2, 5,8,7 ,6, 4, 'a', 'b', 'c', 'd', 'e', 'A', 'B', 'C', 'D', 'E']
console.log(numStrings.sort())

// https://static3.pisapapeles.net/uploads/2014/06/tabla-codigos-unicode1.png


























































































otro 


































































































otro 




















































































otro 


































































































otro 
































































































