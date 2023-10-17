/*********************************************/
/* EVENTS ==> Eventos de carga de la página  */
/*********************************************/
// window.alert('hola')

/* DOMContentLoaded */
document.addEventListener('DOMContentLoaded', function () {
  console.log('El DOM está completamente cargado')
  console.log('Estado actual:', document.readyState)
  
} )

/* load */
window.addEventListener('load', function () {
  console.log('La página se ha cargado completamente')
  console.log('Estado actual:', document.readyState)
  
})

/* readyState */
console.log('Estado actual:', document.readyState)

/* beforeunload */
// window.addEventListener('beforeunload', function (event) {
//   event.preventDefault()
//   event.returnValue = 'Hay cambios sin guardar'
  
// })


/**************************/
/* EVENTS ==> Async Defer */
/**************************/

console.log(document.querySelector('h1'))