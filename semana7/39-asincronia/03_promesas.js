/**************************************/
/* ASYNC ==> Asincronía con promesas */
/*************************************/

/* Sintaxis */
// let promise = new Promise(function (resolve, reject) {
//   Ejecutor
// })

const promesa = new Promise ((resolve, reject) => {
  window.setTimeout(()=> {
    resolve('Cumplido')
  })
  // window.setTimeout(()=> {
  //   reject('Rechazado')
  // })
}, 1000)

// console.log(promesa)

/* Cosumidores */
/*
.then(resolve): Ejecuta la función callback resolve cuando la promesa se cumple
.catch(reject): Ejecuta la función callback reject cuando la promesa se rechaza
.then(resolve, reject): Método equivalente a los dos anteriores, pero en el mismo then
.finally(end): Ejecuta la función callback end, siempre se va a ejecutar tanto si se cumple o si se rechaza la promesa 
*/
// Handler 1
// function promesasOk(str) {
//   console.log('Esto viene de la promesa:', str)
// }

// function promesasError(str) {
//   console.log('Ocurrio un error:', str)
// }

// promesa.then(promesasOk).catch(promesasError)

// Handler 2
// promesa
//   .then(function promesasOk(str) {
//     console.log('Esto viene de la promesa:', str)
//   })
//   .catch(function promesasError(str) {
//     console.log('Ocurrio un error:', str)
//   })
//   .finally(() => {
//     console.log('Esto se muestra siempre')
//   })

/* Ejemplo práctico */
const children = true

const gift = new Promise((resolve, reject) => {
  if (children) {
    const winner = {
      consola: 'xbox',
      mensaje: 'Te portaste muy bien 🫶'
    }
    resolve(winner)
  } else {
    reject('Lo siento, no te has portado bien 😣')
  }
})

function obtenerRegalo() {
  gift
    .then((fedex) => {
      console.log(fedex.mensaje, `y te has ganado un ${fedex.consola}`)
    })
    .then((fedex) => {
      console.log(fedex.mensaje, `y te has ganado un ${fedex.consola}`)
    })
    .then((fedex) => {
      console.log(fedex.mensaje, `y te has ganado un ${fedex.consola}`)
    })
    .then((fedex) => {
      console.log(fedex.mensaje, `y te has ganado un ${fedex.consola}`)
    })
    .then((fedex) => {
      console.log(fedex.mensaje, `y te has ganado un ${fedex.consola}`)
    })
    .then((fedex) => {
      console.log(fedex.mensaje, `y te has ganado un ${fedex.consola}`)
    })
    .catch((mensaje) => {console.log(mensaje)})
}

obtenerRegalo()