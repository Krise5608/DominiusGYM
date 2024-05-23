
// PRODUCTOS
const productos = [
    // Hombres
    {
        id: "Sudadera-01",
        titulo: "Sudadera 01",
        imagen: "sudadera1.jpg",
        categoria: {
            nombre: "HOMBRES",
            id: "abrigos"
        },
        precio: 300
    },
    {
        id: "Sudadera-02",
        titulo: "Sudadera 02",
        imagen: "sudadera2.jpg",
        categoria: {
            nombre: "HOMBRES",
            id: "abrigos"
        },
        precio: 300
    },
    {
        id: "Sudadera-03",
        titulo: "Sudadera 03",
        imagen: "sudadera3.jpg",
        categoria: {
            nombre: "HOMBRES",
            id: "abrigos"
        },
        precio: 300
    },
    {
        id: "Sudadera-04",
        titulo: "camiseta 01",
        imagen: "camiseta1.jpg",
        categoria: {
            nombre: "HOMBRES",
            id: "abrigos"
        },
        precio: 270
    },
    {
        id: "Sudadera-05",
        titulo: "camiseta 02",
        imagen: "camiseta2.jpg",
        categoria: {
            nombre: "HOMBRES",
            id: "abrigos"
        },
        precio: 270
    },
    {
        id: "Sudadera-06",
        titulo: "camiseta 03",
        imagen: "camiseta3.jpg",
        categoria: {
            nombre: "HOMBRES",
            id: "abrigos"
        },
        precio: 270
    },
    {
        id: "Sudadera-07",
        titulo: "pantalon 01",
        imagen: "pantalon1.jpg",
        categoria: {
            nombre: "HOMBRES",
            id: "abrigos"
        },
        precio: 370
    },
    {
        id: "Sudadera-08",
        titulo: "pantalon 02",
        imagen: "pantalon2.jpg",
        categoria: {
            nombre: "HOMBRES",
            id: "abrigos"
        },
        precio: 370
    },
    {
        id: "Sudadera-09",
        titulo: "pantalon 03",
        imagen: "pantalon3.jpg",
        categoria: {
            nombre: "HOMBRES",
            id: "abrigos"
        },
        precio: 370
    },

   // Mujeres
{
    id: "camiseta-01",
    titulo: "pantalon 01",
    imagen: "pantalones01.jpg",
    categoria: {
        nombre: "MUJERES",
        id: "camisetas"
    },
    precio: 400
},
{
    id: "camiseta-02",
    titulo: "pantalon 02",
    imagen: "pantalones02.jpg",
    categoria: {
        nombre: "MUJERES",
        id: "camisetas"
    },
    precio: 400
},
{
    id: "camiseta-03",
    titulo: "pantalon 03",
    imagen: "pantalones03.jpg",
    categoria: {
        nombre: "MUJERES",
        id: "camisetas"
    },
    precio: 400
},
{
    id: "camiseta-04",
    titulo: "camiseta 01",
    imagen: "camisetas1.jpg",
    categoria: {
        nombre: "MUJERES",
        id: "camisetas"
    },
    precio: 250
},
{
    id: "camiseta-05",
    titulo: "camiseta 02",
    imagen: "camisetas2.jpg",
    categoria: {
        nombre: "MUJERES",
        id: "camisetas"
    },
    precio: 250
},
{
    id: "camiseta-06",
    titulo: "camiseta 03",
    imagen: "camisetas3.jpg",
    categoria: {
        nombre: "MUJERES",
        id: "camisetas"
    },
    precio: 250
},
{
    id: "camiseta-07",
    titulo: "sudadera 01",
    imagen: "sudaderas1.jpg",
    categoria: {
        nombre: "MUJERES",
        id: "camisetas"
    },
    precio: 350
},
{
    id: "camiseta-08",
    titulo: "sudadera 02",
    imagen: "sudaderas2.jpg",
    categoria: {
        nombre: "MUJERES",
        id: "camisetas"
    },
    precio: 350
},
{
    id: "camiseta-09",
    titulo: "sudadera 03",
    imagen: "sudaderas3.jpg",
    categoria: {
        nombre: "MUJERES",
        id: "camisetas"
    },
    precio: 350
},

// Accesorios
{
    id: "pantalon-01",
    titulo: "Accesorio 01",
    imagen: "accesorio.jpg",
    categoria: {
        nombre: "ACCESORIOS",
        id: "pantalones"
    },
    precio: 200
},
{
    id: "pantalon-02",
    titulo: "Accesorio 02",
    imagen: "accesorio2.jpg",
    categoria: {
        nombre: "ACCESORIOS",
        id: "pantalones"
    },
    precio: 200
},
{
    id: "pantalon-03",
    titulo: "Accesorio 03",
    imagen: "accesorio3.jpg",
    categoria: {
        nombre: "ACCESORIOS",
        id: "pantalones"
    },
    precio: 200
},
{
    id: "pantalon-4",
    titulo: "Accesorio 04",
    imagen: "accesorio4.jpg",
    categoria: {
        nombre: "ACCESORIOS",
        id: "pantalones"
    },
    precio: 200
},
{
    id: "pantalon-05",
    titulo: "Accesorio 05",
    imagen: "accesorio5.jpg",
    categoria: {
        nombre: "ACCESORIOS",
        id: "pantalones"
    },
    precio: 200
},
{
    id: "pantalon-06",
    titulo: "Accesorio 06",
    imagen: "accesorio6.jpg",
    categoria: {
        nombre: "ACCESORIOS",
        id: "pantalones"
    },
    precio: 200
},
{
    id: "pantalon-07",
    titulo: "Accesorio 07",
    imagen: "accesorio7.jpg",
    categoria: {
        nombre: "ACCESORIOS",
        id: "pantalones"
    },
    precio: 200
},
{
    id: "pantalon-08",
    titulo: "Accesorio 08",
    imagen: "accesorio8.jpg",
    categoria: {
        nombre: "ACCESORIOS",
        id: "pantalones"
    },
    precio: 200
},
{
    id: "pantalon-09",
    titulo: "Accesorio 09",
    imagen: "accesorio9.jpg",
    categoria: {
        nombre: "ACCESORIOS",
        id: "pantalones"
    },
    precio: 200
}

];

function cargarProductos() {

}
;

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");


botonesCategorias.forEach(boton => boton.addEventListener("click", () => {
    aside.classList.remove("aside-visible");
}))


function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
}


botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }

    })
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {

    Toastify({
        text: "Producto agregado",
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #4b33a8, #785ce9)",
          borderRadius: "2rem",
          textTransform: "uppercase",
          fontSize: ".75rem"
        },
        offset: {
            x: '1.5rem', // horizontal axis - can be a number or a string indicating unity. eg: '2em'
            y: '1.5rem' // vertical axis - can be a number or a string indicating unity. eg: '2em'
          },
        onClick: function(){} // Callback after click
      }).showToast();

    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}
