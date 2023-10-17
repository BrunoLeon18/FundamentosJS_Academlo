/*************************************/
/* ASYNC ==> Asincronía async/await */
/************************************/

/* La palabra clave async */
//Función normal
// async function obtenerReaglo () {...}

// Función flecha
// const obtenerReaglo = async () => {...}

/* La palabra clave await */
// Lo que hace es decirle a JS que espere la respuesta de la promesa


/* Ejemplo práctico */
const children = false

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

async function obtenerRegalo() {
  try {
    const regalo = await gift
    const regalo1 = await gift
    const regalo2 = await gift
    const regalo3 = await gift
    console.log(regalo.mensaje, `y te has ganado un ${regalo.consola}`)
    console.log(regalo1.mensaje, `y te has ganado un ${regalo1.consola}`)
    console.log(regalo2.mensaje, `y te has ganado un ${regalo2.consola}`)
    console.log(regalo3.mensaje, `y te has ganado un ${regalo3.consola}`)
  } catch (error) {
    console.log(error)
  }
}

obtenerRegalo()