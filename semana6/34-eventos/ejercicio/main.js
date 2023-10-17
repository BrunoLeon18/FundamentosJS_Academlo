/* BASE DE DATOS */
const tarjetas = [
  {
    id: 1,
    titulo: 'Titulo 1',
    descripcion: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    imagen: 'https://picsum.photos/250/250?random=1'
  },
  {
    id: 2,
    titulo: 'Titulo 2',
    descripcion: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    imagen: 'https://picsum.photos/250/250?random=2'
  },
  {
    id: 3,
    titulo: 'Titulo 3',
    descripcion: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    imagen: 'https://picsum.photos/250/250?random=3'
  },
  {
    id: 4,
    titulo: 'Titulo 4',
    descripcion: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    imagen: 'https://picsum.photos/250/250?random=4'
  }
]

/* TEMPLATE
<article class="tarjeta">
  <img src="** IMAGEN **" alt="** TITULO **" class="imagen__tarjeta">
  <div class="cuerpo__tarjeta">
    <h2 class="titulo__tarjeta">** TITULO **</h2>
    <p class="descripcion__tarjeta">
      ** DESCRIPCION **
    </p>
    <button class="agregar__btn" data-id="** ID **">agregar/eliminar</button>
  </div>
</article>
*/

const template = tarjeta => `
  <article class="tarjeta">
    <img src="${tarjeta.imagen}" alt="${tarjeta.titulo}" class="imagen__tarjeta">
    <div class="cuerpo__tarjeta">
      <h2 class="titulo__tarjeta">${tarjeta.titulo}</h2>
      <p class="descripcion__tarjeta">
      ${tarjeta.descripcion}
      </p>
      <button class="agregar__btn" data-id="${tarjeta.id}">agregar/eliminar</button>
    </div>
  </article>
` 

/* BUCAR EL ELEMENTO QUE CONTENDRA LAS TARJETAS */
const tarjetasContenedor = document.getElementById('tarjetasContenedor')

/* CREAR UNA FUNCION PARA PINTAR LAS TARJETAS EN EL DOM */
function pintarTarjetas () {
  tarjetasContenedor.innerHTML = tarjetas.map(template).join('')
}

/* INVOCAR LA FUNCION */
pintarTarjetas()

/* CREAR UN NUEVO ARREGLO VACIO PARA AGREGAR LAS TARJETAS A LA COLECCION */
let coleccion = []

/* BUCAR EL ELEMENTO QUE CONTENDRA LAS TARJETAS DE LA COLECCION */
const coleccionContenedor = document.getElementById('coleccionContenedor')

/* CREAR UNA FUNCION PARA PINTAR LAS TARJETAS EN LA COLECCION */
function pintarColeccion () {
  coleccionContenedor.innerHTML = coleccion.map(template).join('')
}

/* INVOCAR LA FUNCION */
pintarColeccion()

/* CREAR UNA FUNCION PARA AGREGAR UNA TARJETA A LA COLECCION */
function agregarTarjeta (id) {
  const tarjeta = tarjetas.find(t => t.id === id)
  coleccion.push(tarjeta)
}

/* CREAR UNA FUNCION PARA REMOVER UNA TARJETA A LA COLECCION */
function removerTarjeta (id) {
  coleccion = coleccion.filter(t => t.id !== id)
}

/* UTILIZAR EL DELEGADOR DE EVENTOS PARA AGREGAR LAS TARJETAS A LA COLECCION */
tarjetasContenedor.addEventListener('click', (e) => {

  if (e.target.classList.contains('agregar__btn')) {
    const id = +e.target.dataset.id
    agregarTarjeta(id)
  }
  /* IMPORTANTE VOLVER A INVOCAR LA FUNCION PARA REFRESCAR LA COLECCION */
  pintarColeccion()
})

/* UTILIZAR EL DELEGADOR DE EVENTOS PARA REMOVER LAS TARJETAS DE LA COLECCION */
coleccionContenedor.addEventListener('click', (e) => {

  if (e.target.classList.contains('agregar__btn')) {
    const id = +e.target.dataset.id
    removerTarjeta(id)
  }

  /* IMPORTANTE VOLVER A INVOCAR LA FUNCION PARA REFRESCAR LA COLECCION */
  pintarColeccion()
})
