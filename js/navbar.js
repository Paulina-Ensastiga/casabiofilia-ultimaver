function performSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value;
    // Realizar la búsqueda o cualquier otra acción con el término de búsqueda
    console.log('Búsqueda realizada:', searchTerm);
}

window.addEventListener('DOMContentLoaded', () => {
    const offcanvasElement = document.getElementById('offcanvasDarkNavbarStart');
    const offcanvas = new bootstrap.Offcanvas(offcanvasElement, {
        backdrop: true,
        keyboard: true
    });
    offcanvasElement.addEventListener('hidden.bs.offcanvas', () => {
        const navbarToggler = document.querySelector('.navbar-toggler');
        navbarToggler.focus();
    });
});



/*$(document).ready(function() {
    $('.menu-bar').on('mouseenter', function() {
    $('.search-bar').show();
    });
    $('.menu-bar').on('mouseleave', function() {
    $('.search-bar').hide();
    });
});

*/
