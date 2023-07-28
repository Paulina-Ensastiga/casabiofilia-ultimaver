
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
  
    if (productoExistente) {
      // Si el producto ya está en el carrito, no hacer nada
      return;
    }
  }
// Array para almacenar los elementos del carrito durante la sesión actual
let carrito = [];

// Función para abrir el modal con los detalles del producto
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

// Función para buscar si un producto ya existe en el carrito
function buscarItemEnCarrito(nombre) {
  for (var i = 0; i < carrito.length; i++) {
    if (carrito[i].nombre === nombre) {
      return true; // Si el producto se encuentra en el carrito, retornar true
    }
  }
  return false; // Si el producto no se encuentra en el carrito, retornar false
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
// Función para eliminar un producto del carrito
function eliminarProducto(event) {
  const nombreProducto = event.target.getAttribute("data-nombre");
  
  for (var i = 0; i < carrito.length; i++) {
    if (carrito[i].nombre === nombreProducto) {
      carrito.splice(i, 1);
      break;
      
    }
  }
  mostrarCarrito();
};


// Función para mostrar el carrito en la página
function mostrarCarrito() {
  let carritoContenedor = document.getElementById("carrito-items");
  let carritoTotal = document.getElementById("carrito-precio-total");
  
  carritoContenedor.innerHTML = "";

  // Verificar si el carrito está vacío
  if (carrito.length === 0) {
    // Mostrar la alerta
    document.getElementById("emptyCartAlert").classList.remove("d-none");
    // Ocultar el contenedor de total cuando el carrito está vacío
    carritoTotal.style.display = "none";
  } else {
    // Si hay elementos en el carrito, ocultar la alerta
    document.getElementById("emptyCartAlert").classList.add("d-none");
    carritoTotal.style.display = "block";
  }

  let total = 0;
  carrito.forEach((producto) => {
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
    total += parseFloat(producto.precio.replace(/[^0-9.-]+/g, "")) * producto.cantidad;
  });

  // Actualizar el total del carrito
  carritoTotal.textContent = `$${total.toFixed(2)}`;

  // Obtener todos los botones de eliminar y asignar eventos click a cada uno
  let botonesEliminar = document.querySelectorAll(".btn-eliminar");
  botonesEliminar.forEach((boton) => {
    boton.addEventListener("click", eliminarProducto);
  });

  // Obtener todos los botones de incrementar cantidad y asignar eventos click a cada uno
  let botonesAumentar = document.querySelectorAll(".sumar-cantidad");
  botonesAumentar.forEach((boton) => {
    boton.addEventListener("click", aumentarCantidad);
  });

  // Obtener todos los botones de decrementar cantidad y asignar eventos click a cada uno
  let botonesDisminuir = document.querySelectorAll(".restar-cantidad");
  botonesDisminuir.forEach((boton) => {
    boton.addEventListener("click", disminuirCantidad);
  });
}

// Función para incrementar la cantidad de un producto en el carrito
function aumentarCantidad(event) {
  actualizarCantidadYPrecio(event, 1);
}

// Función para decrementar la cantidad de un producto en el carrito
function disminuirCantidad(event) {
  actualizarCantidadYPrecio(event, -1);
}

// Función para actualizar la cantidad y el precio de un producto en el carrito
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

// Función para mostrar la alerta de producto agregado al carrito
function mostrarAlertaProductoAgregado() {
  const alerta = document.getElementById("productoAgregadoAlert");
  alerta.classList.remove("d-none");

  // Ocultar la alerta después de 3 segundos (3000 milisegundos)
  setTimeout(function () {
    alerta.classList.add("d-none");
  }, 3000);
}

// Mostrar el carrito al cargar la página
document.addEventListener("DOMContentLoaded", mostrarCarrito);

// Almacenar el carrito en localStorage al cerrar la página
window.addEventListener("beforeunload", () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  });
  
  // Recuperar el carrito del localStorage al cargar la página
  document.addEventListener("DOMContentLoaded", () => {
    const carritoGuardado = localStorage.getItem("carrito");
    if (carritoGuardado) {
      carrito = JSON.parse(carritoGuardado);
      console.log(`-> ${carrito}`);
      mostrarCarrito();
    }
  });
