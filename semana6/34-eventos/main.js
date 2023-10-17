/*****************************************/
/* EVENTS ==> Introducción a los eventos */
/*****************************************/

/* Event Handlers */

/* Handlers atributo */
// function atributo() {
//   window.alert('Desde Handler atributo')
// }

/* Handler propiedad */
propiedad.onclick = function () {
  window.alert("Desde Handler propiedad");
};

/* Posibles errores */
const controlador = () => window.alert("Desde Handler función");

/* Incorrecto*/
// btn.onclick = controlador()

/* Correcto */
// btn.onclick = controlador

/*** Método addEventListener ***/
/* Sintaxis */
// element.addEventListener('event', handler, [options])
// function handlerMetodo() {
//   window.alert('Desde Handler Método')
// }

// document.getElementById('btn').addEventListener('click', handlerMetodo)

/*** Método removeEventListener ***/
// document.getElementById('btn').removeEventListener('click', () => {
//   window.alert('Desde Handler Método')
// })
// DE ESTA MANERA ELIMINAMOS COMPLETAMENTE EL EVENTO, NO SE EJECUTA NI UNA SOLA VEZ
// document.getElementById('btn').removeEventListener('click', handlerMetodo)

// DE ESTA MANERA LOGRAMOS QUE NUESTRO EVENTO SE EJECUTE UNA VEZ Y DESPUÉS SE ELIMINE
// const myButton = document.querySelector('#btn')

// function handleClick() {
//   window.alert('Haz hecho click en el botón')
//   myButton.removeEventListener('click', handleClick)
// }

// myButton.addEventListener('click', handleClick)

// DE ESTA MANERA ELIMINAMOS EL EVENTO CON OPTIONS [once: true]
const myButton = document.querySelector("#btn");

function handleClick() {
  window.alert("Haz hecho click en el botón");
}

myButton.addEventListener("click", handleClick, { once: true });

/**** Objeto del evento ****/
// document.addEventListener('click', (event) => {
//   console.log('Tipo de evento:', event.type)
//   console.log('El elemento al que se le agregó el listener:', event.currentTarget)
//   console.log('El elemento que generó el evento:', event.target)
// })

/* e.preventDefault */
// PARA EVITAR EL COMPORTAMIENTO PREDETERMINADO DE CUALQUIER EVENTO EN JAVASCRIPT
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("click desde el submit");
});

const myLink = document.querySelector("#myLink");

myLink.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("El enlace no se abrió");
});

/************************************/
/* EVENTS ==> Propagación y captura */
/************************************/

/*** La Propagación del evento ***/

// document.addEventListener("click", () => {
//   window.alert("Propagación: último ancestro");
// });

// document.querySelector(".propagacion form").addEventListener("click", () => {
//   window.alert("Propagación: form");
// });

// document.querySelector(".propagacion div").addEventListener("click", () => {
//   window.alert("Propagación: div");
// });

// document.querySelector(".propagacion p").addEventListener("click", (e) => {
//   window.alert("Propagación: p");
//   // e.stopPropagation();
// });

/*** La Captura del Evento ***/
// document.querySelector(".captura form").addEventListener("click", () => {
//     window.alert("Captura: form");
//   },
//   {capture: true}
// )

// document.querySelector(".captura div").addEventListener("click", () => {
//     window.alert("Captura: div");
//   },
//   {capture: true}
// )

// document.querySelector(".captura p").addEventListener("click", () => {
//     window.alert("Captura: p");
//   },
//   {capture: true}
// )
/************************************/
/* EVENTS ==> Delegación de eventos */
/************************************/

 /* Sin delegación de eventos con un forEach */
// document.querySelectorAll('.productos .agregar').forEach((elemento) => {
//   elemento.addEventListener('click', (event) => {
//     console.log(event.target.dataset.id)
//   })
// })

/* Con delegación de eventos */
document.querySelector('.productos').addEventListener('click', (event) => {
  if (event.target.closest('.agregar')) {
    window.alert(event.target.closest('.agregar').dataset.id)
    console.log(typeof event.target.closest('.agregar').dataset.id)
  }
})

/* Ejemplo práctico con contadores */
const counters = document.querySelector('.counters')

counters.addEventListener('click', (e) => {
  if (e.target.dataset.counter === 'counter') {
    e.target.value++
  }
})