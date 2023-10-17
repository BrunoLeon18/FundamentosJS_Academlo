/***************************************/
/* ASYNC ==> Asincronía con callbacks */
/**************************************/

/* Callback con sincronía */
function sum() {
  return 5 + 5
}

function resultado(callback) {
  const resultado = callback()
  return resultado
}

console.log(resultado(sum))

/* Callback con asincronía */
function obtenerData(callback) {
  console.log('Realizando la petición')
  window.setTimeout(() => {
    console.log('Llegaron los datos')
    callback()
  }, 5000)
}



obtenerData(function pintarData() {
  console.log('Pintando la data')
  obtenerData(function pintarData() {
    console.log('Pintando la data')
    obtenerData(function pintarData() {
      console.log('Pintando la data')
      obtenerData(function pintarData() {
        console.log('Pintando la data')
        obtenerData(function pintarData() {
          console.log('Pintando la data')
          obtenerData(function pintarData() {
            console.log('Pintando la data')
            obtenerData(function pintarData() {
              console.log('Pintando la data')
              obtenerData(function pintarData() {
                console.log('Pintando la data')
                obtenerData(function pintarData() {
                  console.log('Pintando la data')
                  obtenerData(function pintarData() {
                    console.log('Pintando la data')
                    obtenerData(function pintarData() {
                      console.log('Pintando la data')
                      
                    })
                  })
                })
              })
            })
          })
        })
      })
    })
  })
})
