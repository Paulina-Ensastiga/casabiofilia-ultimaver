
/*Array con objetos, cada array tiene atributos*/ 

const homede = [
    {
    id: 1,
    img: "/assets/images/CP/HOMEDE/home-1.png",
    nombre: "Flores del desierto",
    precio: "$300",
    descripcion: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa", 
   
},
{ 
    id: 2,
    img: "/assets/images/CP/HOMEDE/home-8.png",
    nombre: "Ecos del Sol",
    precio:"$300",
    descripcion: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa", 
    
    
},
{
    id: 3,
    img: "/assets/images/CP/HOMEDE/home-10.png",
    nombre: "Belleza Invernal",
    precio: "$300",
    descripcion: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa", 
    
},
{
    id: 4,
    img: "/assets/images/CP/HOMEDE/home-4.png",
    nombre: "Esplendor Eterno",
    precio:"$300",
    descripcion: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa", 
    
},
{
  id: 5,
  img: "/assets/images/CP/HOMEDE/home-5.png",
  nombre: "Resplandor",
  precio:"$300",
  descripcion: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa", 

},
{
    id: 6,
    img: "/assets/images/CP/HOMEDE/home-6.png",
    nombre: "Resplandor",
    precio:"$300",
    descripcion: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa", 
  },
  {
    id: 7,
    img: "/assets/images/CP/HOMEDE/home-7.png",
    nombre: "Resplandor",
    precio:"$300",
    descripcion: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa", 
  },
  {
    id: 78,
    img: "/assets/images/CP/HOMEDE/home-9.png",
    nombre: "Resplandor",
    precio:"$300",
    descripcion: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa", 
  },



];


  let cardPadre = document.getElementById("card-padre");
  
  homede.forEach((x) => {
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
    agregarAlCarritoModal(nombre, precio, img);
    modal.hide(); // Ocultar el modal después de agregar al carrito
  });
  
  let modal = new bootstrap.Modal(modalContainer);
  modal.show();
  }
  
