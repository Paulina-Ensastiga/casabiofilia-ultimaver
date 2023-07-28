const nosotros = [
    {
    id: 1,
    img: "/assets/images/nosotros/pessy.jpg",
    nombre: "Jessica Muciño",
    link: "https://www.linkedin.com/in/jessica-muciño/",
    descripcion: "Amante de las Artes Audiovisuales y Diseñadora Gráfica de profesión. Suele decir mucho No sé cómo le hice pero jalo. Su función dentro del equipo es que se vea más asterik.", 
   
  },
  { 
    id: 2,
    img: "/assets/images/nosotros/pau.jpg",
    nombre: "Paulina Ensastiga",
    link:"https://www.linkedin.com/in/paulina-ensastiga/",
    descripcion: "En sus tiempos libres hace TikToks. Suele decir mucho ¿Y si mejor lo hacemos así? Su función dentro del equipo es mantener el orden en momentos de crisis.", 
    
    
  },
  {
    id: 3,
    img: "/assets/images/nosotros/jona.jpg",
    nombre: "Jonathan Mendoza",
    precio: "https://www.linkedin.com/in/jonathan-mend/",
    descripcion: "Organizado a más no poder. Suele decir mucho Terrible. Su función dentro del equipo es ser un recopilador humano.", 
    
  },
  {
    id: 4,
    img: "/assets/images/nosotros/lalo.jpg",
    nombre: "Eduardo López",
    precio:"https://www.linkedin.com/in/eduardolopezo/",
    descripcion: "Experto en Figma. Suele proponer muchas ideas. Su función dentro del equipo es dirigirnos por el camino del bien.", 
    
  },
  {
    id: 5,
    img: "/assets/images/nosotros/osva.jpg",
    nombre: "Osvaldo Morales",
    precio:"https://www.linkedin.com/in/osvaldo-morales-/",
    descripcion: "Si no está en la computadora, lo puedes encontrar en la cocina. Suele decir mucho Sí, bro. Su función dentro del equipo es mantenernos unidos.", 
    
  },
  {
    id: 6,
    img: "/assets/images/nosotros/gio-1.jpg",
    nombre: "Giovani Hernández",
    precio:"https://www.linkedin.com/in/giovani-hernandez/",
    descripcion: "Siempre dispuesto a ayudar. Suele decir mucho Si quieren, yo me lo aviento. Su función dentro del equipo es ser el más rápido del oeste.", 
    
  }
  ];
  
  let card = document.getElementById("card-nosotros");
  nosotros.map((x) => {
  card.innerHTML += `
   
  <div class="d-flex justify-content-center col-xs-2 col-sm-12 col-md-4">
  <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img src="${x.img}" style="width:300px;height:400px;"> 
        </div>
        <div class="flip-card-back"><!--Parte de atras-->
          <h1>${x.nombre}</h1> 
          <p>Desarrollador Java FullStack</p>
          <p>${x.descripcion}</p> 
        
          <a href="${x.link}" target="_blank">
          <img src="/assets/images/nosotros/linkedin-logo-thin.svg"></a>
        </div>
      </div>
    </div>


  `;
  
  });