// Función para validar el formulario
function validateForm(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    // Obtener los valores de los campos del formulario
    const calleNumero = document.getElementById("calle_numero").value;
    const codigoPostal = document.getElementById("codigo_postal").value;
    const ciudad = document.getElementById("ciudad").value;
    const estado = document.getElementById("estado").value;

    // Validar que los campos no estén vacíos
    if (!calleNumero) {
        showAlert("Por favor, ingresa la calle y el número.");
        return;
    }

    if (!codigoPostal) {
        showAlert("Por favor, ingresa el código postal.");
        return;
    }

    // Validar el código postal con una expresión regular
    const codigoPostalPattern = /^\d{5}$/;
    if (!codigoPostalPattern.test(codigoPostal)) {
        showAlert("Por favor, ingresa un código postal válido de 5 dígitos.");
        return;
    }

    if (!ciudad) {
        showAlert("Por favor, ingresa la ciudad.");
        return;
    }

    if (estado === "") {
        showAlert("Por favor, selecciona un estado.");
        return;
    }

    // Si todos los campos están completos, redirigir a otra página
    // Cambia "otra_pagina.html" por la URL de la página a la que deseas redirigir
    window.location.href = "/html/FormTarjeta.html";
}

// Función para mostrar mensajes de alerta
function showAlert(message, type = "danger") {
    const alertContainer = document.getElementById("alertContainer");
    alertContainer.innerHTML = `<div class="alert alert-${type}" role="alert">${message}</div>`;

    // Limpiar el mensaje de alerta después de 3 segundos
    setTimeout(() => {
        alertContainer.innerHTML = "";
    }, 3000);
}

// Agregar el evento de validación al formulario cuando se envíe
const form = document.querySelector("form");
form.addEventListener("submit", validateForm);
