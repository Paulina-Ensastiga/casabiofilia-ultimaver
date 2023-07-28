/*Array con objetos, cada array tiene atributos*/ 

const cuadros = [
  {
  id: 1,
  img: "/assets/images/CP/CUADROS/cuadros-1.png",
  nombre: "Cuadro con flores moradas decorativas",
  precio: "$250",
  descripcion: "Cuadro de madera elegante con flores moradas en relieve para resaltar tus fotografías con tonos morados.",
  },

{ 
  id: 2,
  img: "/assets/images/CP/CUADROS/cuadros-2.png",
  nombre: "Cuadro con flores amarillas",
  precio: "$300",
  descripcion: "Cuadro de madera adornado con flores amarillas talladas, brinda un toque alegre a tus imágenes luminosas.",
},
{
  id: 3,
  img: "/assets/images/CP/CUADROS/cuadros-3.png",
  nombre: "Cuadro chico con flores amarillas y foto centrada",
  precio: "$300",
  descripcion: "Cuadro de madera pequeño con delicadas flores amarillas alrededor de una foto central.",
},
{
  id: 4,
  img: "/assets/images/CP/CUADROS/cuadro-4.png",
  nombre: "Cuadro con decoración lunar",
  precio: "$300",
  descripcion: "Cuadro de madera con una esquina tallada en forma de luna, añade un toque místico a tus fotografías.",
  },
{
  id: 5,
  img: "/assets/images/CP/CUADROS/cuadro-5.png",
  nombre: "Cuadro con flores formando una figura",
  precio: "$300",
  descripcion: "Cuadro de madera con flores talladas en relieve que se unen para formar una figura o patrón artístico.",
  },
  {
    id: 6,
    img: "/assets/images/CP/CUADROS/cuadros-3.png",
    nombre: "Cuadro chico con flores amarillas y foto centrada",
    precio: "$300",
    descripcion: "Cuadro de madera pequeño con delicadas flores amarillas alrededor de una foto central.",
  },

];

/*Renderizamos tarjetas */

let carrito = []; // Array para almacenar los elementos del carrito durante la sesión actual
let cardPadre = document.getElementById("card-padre");
let carritoContenedor = document.getElementById("carrito-items");
let carritoTotal = document.getElementById("carrito-precio-total");

cuadros.forEach((x) => {
let cardDiv = document.createElement("div");
cardDiv.className = "d-flex justify-content-center";

let flipCard = document.createElement("div");
flipCard.className = "flip-card";

let flipCardInner = document.createElement("div");
flipCardInner.className = "flip-card-inner";

let flipCardFront = document.createElement("div");
flipCardFront.className = "flip-card-front";

let img = document.createElement("img");
img.src = x.img;
img.alt = "Card Front Image";

flipCardFront.appendChild(img);
flipCardInner.appendChild(flipCardFront);

let flipCardBack = document.createElement("div");
flipCardBack.className = "flip-card-back";

let cardBody = document.createElement("div");
cardBody.className = "card-body";

let cardTitle = document.createElement("h2");
cardTitle.className = "card-title text-center";
cardTitle.textContent = x.nombre;

let cardText = document.createElement("p");
cardText.className = "card-text";
cardText.textContent = x.descripcion;

let cardPrice = document.createElement("h4");
cardPrice.className = "card-price";
cardPrice.textContent = x.precio;

let cardButtonDiv = document.createElement("div");
cardButtonDiv.className = "text-center";

let cardButton = document.createElement("button");
cardButton.className = "btn btn-verMas";
cardButton.id = "botonVerMas";
cardButton.textContent = "Ver más";

cardButton.addEventListener("click", function() {
  abrirModal(x.nombre, x.descripcion, x.precio, x.img);
});

cardButtonDiv.appendChild(cardButton);
cardBody.appendChild(cardTitle);
cardBody.appendChild(cardText);
cardBody.appendChild(cardPrice);
cardBody.appendChild(cardButtonDiv);
flipCardBack.appendChild(cardBody);
flipCardInner.appendChild(flipCardBack);
flipCard.appendChild(flipCardInner);
cardDiv.appendChild(flipCard);
cardPadre.appendChild(cardDiv);
});

function abrirModal(nombre, descripcion, precio, img) {
let modalTitulo = document.getElementById("modalTitulo");
let modalDescripcion = document.getElementById("modalDescripcion");
let modalPrecio = document.getElementById("modalPrecio");
let modalImagen = document.getElementById("modalImagen");
let modalContainer = document.getElementById("modalProducto");

modalTitulo.textContent = nombre;
modalDescripcion.textContent = descripcion;
modalPrecio.textContent = precio;
modalImagen.src = img;

let modalButton = document.getElementById("btn-agregar");
modalButton.removeEventListener("click", agregarAlCarritoModal); // Eliminar el listener previo, si existe
modalButton.addEventListener("click", function() {
  if (nombre != undefined && precio != undefined && img != undefined)
    agregarAlCarritoModal(nombre, precio, img);
  nombre = undefined;
  precio = undefined;
  img = undefined;
  modal.hide(); // Ocultar el modal después de agregar al carrito
});

let modal = new bootstrap.Modal(modalContainer);
modal.show();
}

function buscarItemEnCarrito(nombre) {
for (var i = 0; i < carrito.length; i++) {
  if (carrito[i].nombre === nombre) {
    return true; // Si el item se encuentra en el carrito, retornar true
  }
}
return false; // Si el item no se encuentra en el carrito, retornar false
}

function agregarAlCarritoModal(nombre, precio, img) {
  // Verificar si el producto ya está en el carrito antes de agregarlo
  const productoExistente = buscarItemEnCarrito(nombre);

  var producto = [];

  if (productoExistente) {
    // Si el producto ya está en el carrito, no hacer nada
    producto = [];
    return;
  } else {
    producto = {
      nombre: nombre,
      precio: precio,
      img: img,
      cantidad: 1,
    };
    carrito.push(producto);
    producto = [];
    mostrarCarrito();
  
    mostrarAlertaProductoAgregado();
    // Si el producto no está en el carrito, agregarlo con cantidad 1
  }
}
function mostrarAlertaProductoAgregado() {
  const alerta = document.getElementById("productoAgregadoAlert");
  alerta.classList.remove("d-none");

  // Ocultar la alerta después de 3 segundos (3000 milisegundos)
  setTimeout(function () {
    alerta.classList.add("d-none");
  }, 3000);
}


function eliminarProducto(event) {
  const nombreProducto = event.target.getAttribute("data-nombre");
  
  for (var i = 0; i < carrito.length; i++) {
    if (carrito[i].nombre === nombreProducto) {
      carrito.splice(i, 1);
      break;
    }
  }
  mostrarCarrito();
}

// Asignar eventos click a los botones de eliminar
const botonesEliminar = document.querySelectorAll(".btn-eliminar");
botonesEliminar.forEach((boton) => {
  boton.addEventListener("click", eliminarProducto);
});

function mostrarCarrito() {
carritoContenedor.innerHTML = "";

// Verificar si el carrito está vacío
if (carrito.length === 0) {
  // Mostrar la alerta
  document.getElementById('emptyCartAlert').classList.remove('d-none');
  // Ocultar el contenedor de total cuando el carrito está vacío
  carritoTotal.style.display = 'none';
} else {
  // Si hay elementos en el carrito, ocultar la alerta
  document.getElementById('emptyCartAlert').classList.add('d-none');
  carritoTotal.style.display = 'block';
}

document.addEventListener("DOMContentLoaded", mostrarCarrito);

carrito.forEach((producto, index) => {
  let itemCarritoContenido = `
    <div class="carrito-item">
      <img src="${producto.img}" width="80px" alt="">
      <div class="carrito-item-detalles">
        <span class="carrito-item-titulo">${producto.nombre}</span>
        <div class="selector-cantidad">
          <i class="fa-solid fa-minus restar-cantidad"></i>
          <input type="text" value="${producto.cantidad}" class="carrito-item-cantidad" disabled>
          <i class="fa-solid fa-plus sumar-cantidad"></i>
        </div>
        <span class="carrito-item-precio">$${(parseFloat(producto.precio.replace(/[^0-9.-]+/g, "")) * producto.cantidad).toFixed(2)}</span>
      </div>
      <button class="btn-eliminar" data-nombre="${producto.nombre}">
        <i class="fa-solid fa-trash"></i>
      </button>
    </div>
  `;

  carritoContenedor.innerHTML += itemCarritoContenido;
});


// Eliminar eventos click de los botones de eliminar antes de asignarlos nuevamente
const botonesEliminar = document.querySelectorAll(".btn-eliminar");
botonesEliminar.forEach((boton) => {
  boton.removeEventListener("click", eliminarProducto);
});
actualizarTotal();

// Agregar el evento click a los botones de eliminar después de generar el contenido del carrito
botonesEliminar.forEach((boton) => {
  boton.addEventListener("click", eliminarProducto);
});

function actualizarCantidadYPrecio(event, incremento) {
  const nombreProducto = event.target.parentNode.parentNode.querySelector(".carrito-item-titulo").textContent;
  const producto = carrito.find((p) => p.nombre === nombreProducto);

  if (producto) {
    const cantidadAnterior = producto.cantidad;
    producto.cantidad += incremento;

    if (producto.cantidad < 1) {
      producto.cantidad = 1;
    }

    const precioBase = parseFloat(producto.precio.replace(/[^0-9.-]+/g, ""));
    const nuevoPrecio = (precioBase * producto.cantidad).toFixed(2);

    event.target.parentNode.parentNode.querySelector(".carrito-item-cantidad").value = producto.cantidad;
    event.target.parentNode.parentNode.querySelector(".carrito-item-precio").textContent = `$${nuevoPrecio}`;

    if (cantidadAnterior !== producto.cantidad) {
      mostrarCarrito();
    }
  }
}

// Función para incrementar la cantidad de un producto en el carrito
function aumentarCantidad(event) {
  actualizarCantidadYPrecio(event, 1);
}

// Función para decrementar la cantidad de un producto en el carrito
function disminuirCantidad(event) {
  actualizarCantidadYPrecio(event, -1);
}



// Obtener todos los botones de incrementar cantidad
const botonesAumentar = document.querySelectorAll(".sumar-cantidad");

// Asignar eventos click a los botones de incrementar cantidad
botonesAumentar.forEach((boton) => {
  boton.addEventListener("click", aumentarCantidad);
});

// Obtener todos los botones de decrementar cantidad
const botonesDisminuir = document.querySelectorAll(".restar-cantidad");

// Asignar eventos click a los botones de incrementar cantidad
botonesDisminuir.forEach((boton) => {
  boton.addEventListener("click", disminuirCantidad);
});



}


function actualizarTotal() {
let total = 0;

carrito.forEach((producto) => {
  // Obtener el valor numérico del precio (quitando el símbolo $ y cualquier otro carácter no numérico)
  let precio = parseFloat(producto.precio.replace(/[^0-9.-]+/g, ""));
  total += precio * producto.cantidad;
});

carritoTotal.textContent = `$${total.toFixed(2)}`;
}

mostrarCarrito();

  // // Obtener referencia al botón del carrito y al contenedor modal
  // const btnCarrito = document.getElementById("btnCarrito");
  // const modalCarrito = new bootstrap.Modal(document.getElementById("carritoModal"));

  // // Agregar un evento click al botón del carrito
  // btnCarrito.addEventListener("click", () => {
  //   modalCarrito.show(); // Mostrar el modal
  // });

  //  // Función para mostrar el modal al hacer clic en el botón
  //  function mostrarModal() {
  //   $("#modalCarrito").modal("show");
  // }

  // // Asigna el evento clic al botón para abrir el modal
  // $("#btnAbrirModal").click(mostrarModal);
