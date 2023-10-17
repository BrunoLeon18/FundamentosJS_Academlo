const users = [
  {
      name: "Alejandro",
      email: "alejo@gmail.com",
      age: 31,
      country: "Colombia"
  },
  {
      name: "Liss",
      email: "liss@gmail.com",
      age: 31,
      country: "Mexico"
  },
  {
      name: "Sara",
      email: "sara@gmail.com",
      age: 15,
      country: "España"
  },
]

//* 1. Recorre el array users y retorna las edades de los usuarios.
    const edad = users.map((user) => user.age)
    console.log(edad);

//* 2. Busca el usuario que tiene nacionalidad Española.
    const nacionalidad = users.find((user) => user.country === 'España')
    console.log(nacionalidad)

//* 3. Retorna el objeto que en su email tenga una longitud menoro igual a 14 caracteres.
    const longitud = users.filter((user) => user.email.length <= 14  )
    console.log(longitud)

//* 4. Recorre users y retorna un nuevo array con las edades multiplicadas por 2.
    const multiplo = users.map((user) => user.age *2)
        console.log(multiplo)
        
//* 5. Recorre users y retorna un nuevo array con las suma de las edades.
const sumAges = users.reduce((sum, user) => sum + user.age, 0);
    console.log(sumAges);

