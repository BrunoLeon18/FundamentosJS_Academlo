/***************************/
/* Ejercicios con el DOM: */
/**************************/
/*
- Crear tabla que contenga solo usuarios que tengan correo de Academlo (podemos usar método [endsWith](https://www.w3schools.com/jsref/jsref_endswith.asp))
- Crear una tabla que muestre a las personas en rango de 20 y 40 años
- Crear una tabla que contenga la información de todos los usuarios incluyendo sus redes sociales
*/

const usuarios = [
  {
    nombre: 'Erik',
    edad: 29,
    correo: 'erik@academlo.com',
    social: [
      { nombre: 'facebook', url: 'facebook/erik' },
      { nombre: 'twitter', url: 'twitter/erik' }
    ],
    genero: 'Male'
  },
  {
    nombre: 'Georg',
    edad: 33,
    correo: 'georg@academlo.com',
    social: [
      { nombre: 'facebook', url: 'facebook/georg' },
      { nombre: 'twitter', url: 'twitter/georg' }
    ],
    genero: 'Male'
  },
  {
    nombre: 'Andrea',
    edad: 42,
    correo: 'andrea@hotmail.com',
    social: [
      { nombre: 'facebook', url: 'facebook/andrea' },
      { nombre: 'twitter', url: 'twitter/andrea' }
    ],
    genero: 'Female'
  },
  {
    nombre: 'Oscar',
    edad: 31,
    correo: 'oscar@academlo.com',
    social: [
      { nombre: 'facebook', url: 'facebook/oscar' },
      { nombre: 'twitter', url: 'twiter/oscar' }
    ],
    genero: 'Male'
  },
  {
    nombre: 'Daniela',
    edad: 22,
    correo: 'daniela@uaq.mx',
    social: [
      { nombre: 'facebook', url: 'facebook/andrea' },
      { nombre: 'twitter', url: 'twitter/andrea' }
    ],
    genero: 'Female'
  }
]
 

const emails = [];
usuarios.forEach(user => user.correo.endsWith('@academlo.com')? emails.push(user):user)

const userRange = usuarios.filter(user => user.edad >=20 && user.edad <= 40)


const wraper = document.querySelector('#user-table-email');
const age = document.querySelector('#user-table-range')
const users = document.querySelector('#user-table-info')


  function userEmail(user) {
    let strTable = `
                    <span>Nombre</span>
                    <span>Correo</span>
                    `
  for (const item of user) {
      let element =`
                  <span>${item.nombre}</span>
                  <span>${item.correo}</span>
                    `
      strTable += element                
  }
  return strTable
  }

wraper.innerHTML = userEmail(emails);

  function userAge(user) {
    let strTable = `
                      <span>Nombre</span>
                      <span>Edad</span>
                    `
  for (const item of user) {
    let element =`
                  <span>${item.nombre}</span>
                  <span>${item.edad}</span>
                  `
    strTable += element                
  }
  return strTable
  }

age.innerHTML = userAge(userRange)

  function userAll(user) {
    let strTable = `
                      <span>Nombre</span>
                      <span>Edad</span>
                      <span>Correo</span>
                      <span>Genero</span>
                      <span>Social</span>
                    `
  for (const item of user) {
    let element =`
                  <span>${item.nombre}</span>
                  <span>${item.edad}</span>
                  <span>${item.correo}</span>
                  <span>${item.genero}</span>
                  <span>${item.social[0].url} / ${item.social[1].url}</span>
                  `
    strTable += element               
  }
  return strTable
  }

users.innerHTML = userAll(usuarios)












