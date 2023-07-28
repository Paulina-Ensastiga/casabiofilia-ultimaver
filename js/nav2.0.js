    function toggleMenu() {
        const menuList = document.getElementById('menuList');
        const overlay = document.querySelector('.overlay');

        if (menuList.style.display === 'block') {
            menuList.style.display = 'none';
            overlay.classList.remove('show');
        } else {
            menuList.style.display = 'block';
            overlay.classList.add('show');
        }
    }

    // Agrega esta función para mostrar el menú desplegable de Productos
    function toggleDropdownMenu() {
        const dropdownMenu = document.querySelector('.dropdown-menu');

        if (dropdownMenu.style.display === 'block') {
            dropdownMenu.style.display = 'none';
        } else {
            dropdownMenu.style.display = 'block';
        }
    }

    // Asegúrate de tener el evento 'click' en el elemento "Productos" para mostrar el menú desplegable
    const productosElement = document.querySelector('.dropdown');
    productosElement.addEventListener('click', toggleDropdownMenu);

    // Agrega esta función para cerrar el menú desplegable cuando se hace clic fuera del contenedor
function closeMenuOutsideClick(event) {
    const menuList = document.getElementById('menuList');
    const navbarMenu = document.querySelector('.navbar-menu');
    
    // Verifica si el elemento clickeado está fuera del menú y del botón que lo abre
    if (!menuList.contains(event.target) && !navbarMenu.contains(event.target)) {
      menuList.style.display = 'none';
    }
  }
  
  // Añade un evento de escucha en el documento para detectar clics fuera del menú
  document.addEventListener('click', closeMenuOutsideClick);
  
