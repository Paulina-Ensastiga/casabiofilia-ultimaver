//==================Formulario=================================
function cerrarModal() {
  modalForm.style.display = 'none';
}

// Obtener referencia al botón "Contactanos" y al formulario modal
const openModalBtn = document.getElementById('openModalBtn');
const modalForm = document.getElementById('modalForm');

// Obtener referencia al formulario de contacto
const contactForm = document.getElementById('contactForm');

// Asignar la función mostrarModal al evento click del botón "Contactanos"
openModalBtn.addEventListener('click', function() {
  modalForm.style.display = 'flex'; // Mostrar el formulario modal cuando se hace clic en el botón
});

// Asignar la función ocultarModal al evento click en cualquier parte de la ventana
window.addEventListener('click', function(event) {
  if (event.target === modalForm) {
    modalForm.style.display = 'none'; // Ocultar el formulario modal si se hace clic fuera de él
  }
});

// Asignar la función enviarFormulario al evento submit del formulario de contacto
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar el envío del formulario por defecto

  // Limpiar las alertas previas
  document.getElementById('alertContainer').innerHTML = '';

  // Obtener los valores de los campos
  let nombre = document.getElementById('nombre').value;
  let email = document.getElementById('email').value;
  let telefono = document.getElementById('telefono').value;
  let mensaje = document.getElementById('mensaje').value;

  // Validar los campos requeridos
  if (nombre === '' || email === '' || mensaje === '') {
    showAlert('danger', 'Por favor, completa todos los campos.'); // Mostrar alerta de peligro si algún campo requerido está vacío
    return; // Detener la ejecución de la función
  }

  // Validar el formato del correo electrónico
  if (!validateEmail(email)) {
    showAlert('danger', 'Por favor, ingresa un correo electrónico válido.'); // Mostrar alerta de peligro si el formato del correo electrónico es inválido
    return; // Detener la ejecución de la función
  }

  // Validar el formato del número de teléfono
  if (!validatePhone(telefono)) {
    showAlert('danger', 'Por favor, ingresa un número de teléfono válido.'); // Mostrar alerta de peligro si el formato del número de teléfono es inválido
    return; // Detener la ejecución de la función
  }

  // Crear un objeto con los datos del formulario
  let formData = {
    nombre: nombre,
    email: email,
    telefono: telefono,
    mensaje: mensaje
  };

  // Enviar los datos del formulario por correo electrónico utilizando una API
  sendEmail(formData);
});

// Función para validar el formato del correo electrónico
function validateEmail(email) {
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para validar el formato del correo electrónico
  return emailPattern.test(email); // Devuelve true si el formato es válido, false si no lo es
}

// Función para validar el formato del número de teléfono
function validatePhone(phone) {
  let phonePattern = /^\d{10}$/; // Expresión regular para validar el formato del número de teléfono (asumiendo un número de 10 dígitos)
  return phonePattern.test(phone); // Devuelve true si el formato es válido, false si no lo es
}

// Función para enviar los datos del formulario por correo electrónico
function sendEmail(formData) {
  fetch('URL_DE_TU_API', { // Realizar una solicitud HTTP a la API de envío de correo electrónico
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData) // Convertir los datos del formulario a formato JSON y enviarlos en el cuerpo de la solicitud
  })
  .then(function(response) {
    if (response.ok) {
      showAlert('success', '¡El formulario se ha enviado correctamente!'); // Mostrar alerta de éxito si la solicitud se realiza correctamente
      // Limpiar los campos del formulario
      document.getElementById('nombre').value = '';
      document.getElementById('email').value = '';
      document.getElementById('telefono').value = '';
      document.getElementById('mensaje').value = '';
    } else {
      showAlert('danger', 'Ha ocurrido un error al enviar el formulario. Por favor, intenta nuevamente más tarde.'); // Mostrar alerta de peligro si la solicitud falla
    }
  })
  .catch(function(error) {
    showAlert('danger', 'Ha ocurrido un error al enviar el formulario. Por favor, intenta nuevamente más tarde.'); // Mostrar alerta de peligro si ocurre un error en la solicitud
    console.log(error); // Mostrar el error en la consola
  });
}

// Función para mostrar una alerta
function showAlert(type, message) {
  let alertElement = document.createElement('div'); // Crear un elemento div para la alerta
  alertElement.className = 'alert alert-' + type; // Agregar la clase correspondiente a la alerta
  alertElement.textContent = message; // Agregar el mensaje a la alerta

  document.getElementById('alertContainer').appendChild(alertElement); // Agregar la alerta al contenedor
}


