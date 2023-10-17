/**********************************/
/* DOM ==> Document Object Model */
/*********************************/
/*** window ***/
// Es la raiz
/*** BOM **/
// Accede a las funciones del window
/*** DOM **/

/* ==============================*/
/* DOM ==> Entorno del Navegador */
/* ==============================*/

/* Objecto Window */
// console.log(window)

// function saludar() {
//   window.alert('Hola')
// }

// window.saludar()

document
console.log(document)

/* Etiqueta root */
document.documentElement
console.log(document.documentElement)

/* Etiqueta head */
document.head
console.log(document.head)

/* Etiqueta body */
document.body
console.log(document.body)

document.body.style.backgroundColor = 'black'
document.body.style.color = 'white'

// window.setTimeout(() => {
//   document.body.style.backgroundColor = ''
//   document.body.style.color = ''
// }, 3000)
/* ======================*/
/* DOM ==> Árbol del DOM */
/* ======================*/

/* Conociendo los hijos de html */
document.documentElement.childNodes
console.log(document.documentElement.childNodes)

/* Colecciones - simil-array del DOM */
let coleccion = document.body.children
console.log(coleccion)

/* Recorriendo el simil-array con for of */
for (const element of document.documentElement.childNodes) {
  console.log(element)
}

/* Recorriendo el simil-array con forEach */
console.log(document.documentElement.childNodes.forEach(element => element))

/* Utilizando Array.from para convertirlo en un array */
let arrayFrom = Array.from(document.documentElement.childNodes).forEach(node => console.log(node))

/* Accediendo a los valores del array para eliminarlos */
// document.documentElement.childNodes[1].remove()
// console.log(document.documentElement.childNodes)

/* Podemos agregar nodos al Árbol */
// console.log(document.body.childNodes)
// let list = ['a', 'b', 'c']
// let html = '<ul>'
// for (const item of list) {
//   html += `<li>${item}</li>`
// }

// html += '</ul>'
// document.body.childNodes[1].innerHTML = html
/* =============================*/
/* DOM ==> Navegando por el DOM */
/* =============================*/

/* Hijos directos */
document.documentElement.firstElementChild
console.log(document.documentElement.firstElementChild)
document.documentElement.lastElementChild
console.log(document.documentElement.lastElementChild)

/* Descendientes */
document.body.children
console.log(document.body.children)

/* Hermanos */

// nextElementSibling el hermano siguiente
console.log(document.documentElement.firstElementChild.nextElementSibling)

// previousElementSibling el hermano anterior
console.log(document.documentElement.lastElementChild.previousElementSibling)

// parentElement accediendo al papá
console.log(document.body.parentElement)

/*
Hay dos conjuntos principales de las propiedades de navegación:
  - Para todos los nodos: parentNode, childNodes, firstChild, lastChild, previousSibling, nextSibling.
  - Para los nodos elementos: parentElement, children, firstElementChild, lastElementChild, previousElementSibling, nextElementSibling.
*/ 

/* Desventajas de trabajar con nodos */
const hijo = document.querySelector('.hijo')
console.log(hijo.parentNode)

const padre = document.querySelector('.padre')
console.log(padre.firstChild)
console.log(padre.firstChild.nextSibling)
console.log(padre.firstChild.nextSibling.nextSibling)

/* Por ello para recorrer el DOM es mejor hacerlo a través de los elementos*/
console.log(hijo.parentElement)
console.log(padre.firstElementChild)
console.log(padre.firstElementChild.nextElementSibling)


/* =============================*/
/*  DOM ==> Métodos de búsqueda */
/* =============================*/

/*** getElementByClassName ***/
console.log(document.getElementsByClassName('by_class'))

/*** getElementByTagName ***/
console.log(document.getElementsByTagName('h4'))

/*** getElementByID ***/
const titleElement = document.getElementById('by_id')
titleElement.classList.add('text-title')
titleElement.style.color = 'red'
console.log(titleElement)

console.log(by_id)

/**** querySelectorAll ***/
const contenedorElements = document.querySelectorAll('.query-all')
console.log(contenedorElements)

/**** querySelector ***/
const selectorClass = document.querySelector('.query-selector')
console.log(selectorClass)

const selectorId = document.querySelector('#query_selector')
console.log(selectorId)

const selectorAtribute = document.querySelector('[target="_blank"]')
console.log(selectorAtribute)

const selectorTag = document.querySelector('.query-tag li')
console.log(selectorTag)

/*** Método Matches ***/
/* No busca nada, sólo comprueba si el elemento coincide con el selector CSS dado, devuelve true o false */
const allh5Tags = document.querySelectorAll('h5')

const tagsArray = Array.from(allh5Tags)

for (const item of tagsArray) {
  if (item.matches('#matches')) {
    console.log(item)
  }
}

/**** Método Closest ****/
/* Busca al ancestro más cercano que coincide con el selector CSS. El propio element también se incluye en la búsqueda */
console.log(document.querySelector('span').closest('div'))

/*** Método Contains ***/
/* Devuelve true si elementoB está dentro de el elementoA (es decir, un descendiente de elemento A) o también cuando elementA === elementB */
const ul = document.querySelector('.contains')
const li = ul.firstElementChild

console.log(ul.contains(li))


/* ==============================*/
/*  DOM ==> Propiedades del nodo */
/* ==============================*/


/*** La propiedad innerHTML ***/
// document.body.innerHTML = 'Hola'
document.body.innerHTML += 'Hola'

/* Lo anterior pasa por lo siguiente: */
/*
elemento.innerHTML = '' añade el contenido al final del elemento. (una sobrescritura del antiguo).
elemento.innerHTML += '' añade el contenido al final del elemento. (pareciera una concatenación del antiguo y el nuevo, pero lo que realmente hace es tomar lo anterior y sobreescribir con lo que le indicas).
*/

const metodos = ['querySelectorAll', 'querySelector', 'getElementById', 'matches', 'closest', 'contains']

let elementoVacio = ''

for (const metodo of metodos) {
  elementoVacio += `<li>${metodo}</li>`
}

document.querySelector('#contenedor').innerHTML = elementoVacio
console.log(contenedor.innerHTML)

// document.body.innerHTML = '<script>(() => alert("Hola"))()</script>'


/*** La propiedad outerHTML ***/
const changeElement = document.querySelector('.properties h3:nth-of-type(2)')
console.log(changeElement.outerHTML)

changeElement.outerHTML = '<span>Es se reemplazará en el DOM</span>'

console.log('Después de modificar')
console.log(changeElement.outerHTML)

/*** La propiedad hidden ***/
const hiddenElement = document.querySelector('.hidden')

// window.setTimeout(() => {
//   hiddenElement.hidden = true
// }, 3000)

/*** La propiedad textContent ***/
/* innerHTML - Es interpretado como HTML */
document.querySelector('.text-content').innerHTML = '<h1>Con innerHTML</h1>'
/* textContent - Es interpretado como texto */
document.querySelector('.text-content').textContent = '<h1>Con textContent</h1>'

/*** También podemos modificar los que son de tipo nodo, pero sin hacer uso de innerHTML u outerHTML ***/
document.querySelector('.properties').lastChild.previousSibling.data = 'Modificando desde JS'
console.log(document.querySelector('.properties').lastChild.previousSibling.data)

/* ============================*/
/*  DOM ==> Modificando el DOM */
/* ============================*/

/*** Métodos para crear nuevos nodos en el DOM ***/

/* Para crear un elemento */
console.log(document.createElement('div'))
/* Para crear un texto */
console.log(document.createTextNode('Creando Texto'))

/* Creando un mensaje de aviso */
/* 1) Crear el elemento */
let div = document.createElement('div')
/* 2) Establecer sus clases */
div.classList.add('alert')
/* 3) Insertar Contenido */
div.innerHTML = '<strong>¡Hola!</strong> Soy un aviso'
/* 4) Agregarlo, insertarlo en DOM */

/*** Métodos para insertar nuevos nodos en el DOM ***/
/* El método append: Inserta el nodo al final de la etiqueta */
document.body.append(div)
/* El método prepend: Inserta el nodo al principio de la etiqueta */
document.body.prepend(div)
/* El método before: Inserta el nodo antes de la etiqueta */
document.querySelector('.manipulando').before(div)
/* El método after: Inserta el nodo después de la etiqueta */
document.querySelector('.manipulando').after(div)

/* Usemos todo lo anterior */
const manipulando = document.querySelector('.manipulando2')
const creandoLi = document.createElement('li')
const creandoLi2 = document.createElement('li')

creandoLi.textContent = 'Soy un prepend'
creandoLi2.textContent = 'Soy un append'

manipulando.before('before')
manipulando.after('after')
manipulando.prepend(creandoLi)
manipulando.append(creandoLi2)

/*** Método insertAdjacentHTML ***/
/* 
Pero el plus real de este método es que te permite insertar en la parte que le indiques con sus propiedades: 
-beforebegin: inserta HTML inmediatamente antes de elem
-afterbegin: inserta HTML en elem, al principio
-beforeend: inserta HTML en elem, al final 
-afterend: inserta HTML inmediatamente después de elem
*/

const insert = document.getElementById('insert')

insert.insertAdjacentHTML('beforebegin', 'beforeBegin')
insert.insertAdjacentHTML('afterend', 'afterEnd')
insert.insertAdjacentHTML('afterbegin', '<h3>afterBegin</h3>')
insert.insertAdjacentHTML('beforeend', '<h3>beforeEnd</h3>')

/* También podemos agregar contenido dinámico */
insert.insertAdjacentHTML('afterend', `<h2>${5 + 5}</h2>`)

/* Método para eliminar nodos en el DOM */
/*** remove ***/
const deleteElement = document.querySelector('.delete').remove()

/* Método para clonar nodos en el DOM */
const clonando = document.querySelector('.clone').cloneNode(true)

document.body.append(clonando)


/* =================================*/
/*  DOM ==> Atributos y propiedades */
/* =================================*/

document.body.miPropiedad = {
  nombre: 'Gerardo'
}

console.log(document.body.miPropiedad)

/* Podemos crear atributos personalizados */
console.log(document.querySelector('.mi-atributo').dataset.miatributo)

/*
Todos los atributos son accesibles usando los siguientes métodos:
  - elemento.hasAttribute(nombre) – comprueba si existe.
  - elemento.getAttribute(nombre) – obtiene el valor.
  - elemento.setAttribute(nombre, valor) – establece el valor.
  - elemento.attributes – devuelve una colección de objetos de atributos.
  - elemento.removeAttribute(nombre) – elimina el atributo.
Los atributos HTML tienen las siguientes características:
Su nombre no distingue entre mayúsculas y minúsculas (id es igual a ID).
Sus valores son siempre strings.
*/

/*** hasAttribute ***/
console.log(document.querySelector('.obteniendo').hasAttribute('class'))

/*** getAttribute ***/
console.log(document.querySelector('.obteniendo').getAttribute('class'))

/*** setAttribute ***/
/* Si existe el atributo lo cambias*/
document.querySelector('.cambiando').setAttribute('width', '300')
/* Si no existe el atributo lo agregas */
document.querySelector('.cambiando').setAttribute('heigth', '300')

/*** removeAttribute ***/
/* con el atributo como argumento basta para eliminarlo */
document.querySelector('.cambiando').removeAttribute('heigth')

/*** attributes ***/
console.log(document.querySelector('.attributes').attributes)

/* ==========================*/
/*  DOM ==> Estilos y Clases */
/* ==========================*/

/*** Trabajando con estilos en línea ***/
textBg.style.backgroundColor = 'red'

/*** Trabajando con clases ***/
/*** className: reemplaza todas las clases que contenga el selector y si no existe la agrega ***/
changeClass.className = 'cambiar'

/*** classList: te permite agregar add('nombre de la clase), remover remove('nombre de la clase'), o ambas, agregar o quitar toggle('aquí nombre de la clase, si existe la elimina y si no la agrega') ***/
handleClassList.classList.add('class-list')
handleClassList.classList.remove('cambiar')
handleClassList.classList.toggle('toggle')
handleClassList.classList.toggle('toggle')



