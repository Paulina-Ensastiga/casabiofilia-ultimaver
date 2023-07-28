// Función para validar el inicio de sesión
function validarInicioSesion() {
  // Obtener el valor de los campos de correo electrónico y contraseña del formulario
  let email = document.getElementById("logemail").value;
  let password = document.getElementById("logpass").value;

  // Validar que el campo de correo electrónico no esté vacío
  if (email.trim() === "") {
    mostrarAlerta("Por favor, ingrese su correo electrónico.");
    return;
  }

  // Validar que el correo electrónico tenga el formato adecuado utilizando una expresión regular
  if (!validarEmail(email)) {
    mostrarAlerta("Por favor, ingrese un correo electrónico válido para iniciar sesión.");
    return;
  }

  // Validar que el campo de contraseña no esté vacío
  if (password.trim() === "") {
    mostrarAlerta("Por favor, ingrese su contraseña.");
    return;
  }

  // Realizar la lógica de inicio de sesión

  // Obtener los datos de registro almacenados en localStorage
  let registro = obtenerRegistroLocalStorage();

  // Comprobar si las credenciales ingresadas coinciden con las almacenadas
  if (registro && registro.email === email && registro.password === password) {
    // Mostrar mensaje de inicio de sesión exitoso
    mostrarMensajeExitoso("Inicio de sesión exitoso");
  } else {
    // Mostrar alerta si las credenciales no son válidas
    mostrarAlerta("Las credenciales ingresadas no son válidas.");
  }
}

// Función para validar el registro de usuarios
function validarRegistro() {
  // Obtener los valores de los campos de nombre, apellido, correo electrónico, contraseña y teléfono del formulario
  let name = document.getElementById("lognameR").value;
  let lastname = document.getElementById("loglastnameR").value;
  let email = document.getElementById("logemailR").value;
  let password = document.getElementById("logpassR").value;
  let phone = document.getElementById("logphoneR").value;

  // Validar que el campo de nombre no esté vacío
  if (name.trim() === "") {
    mostrarAlerta("Por favor, ingrese su nombre.");
    return;
  }

  // Validar que el campo de apellido no esté vacío
  if (lastname.trim() === "") {
    mostrarAlerta("Por favor, ingrese su apellido.");
    return;
  }

  // Validar que el campo de correo electrónico no esté vacío
  if (email.trim() === "") {
    mostrarAlerta("Por favor, ingrese su correo electrónico.");
    return;
  }

  // Validar que el correo electrónico tenga el formato adecuado utilizando una expresión regular
  if (!validarEmail(email)) {
    mostrarAlerta("Por favor, ingrese un correo electrónico válido para registrarse.");
    return;
  }

  // Validar que el campo de contraseña no esté vacío
  if (password.trim() === "") {
    mostrarAlerta("Por favor, ingrese una contraseña.");
    return;
  }

  // Validar que el campo de teléfono no esté vacío y tenga exactamente 10 caracteres
  if (phone.trim() === "") {
    mostrarAlerta("Por favor, ingrese su número de teléfono.");
    return;
  }
  if (phone.trim().length !== 10) {
    mostrarAlerta("El número de teléfono debe tener 10 caracteres.");
    return;
  }

  // Realizar la lógica de registro

  // Guardar los datos de registro en localStorage
  guardarRegistroLocalStorage(name, lastname, email, password, phone);

  // Mostrar mensaje de registro exitoso
  mostrarMensajeExitoso("Registro exitoso");
}

// Función para validar el formato de una dirección de correo electrónico
function validarEmail(email) {
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Función para mostrar una alerta de error con el mensaje proporcionado
function mostrarAlerta(mensaje) {
  let alertContainer = document.getElementById("alertContainer");
  alertContainer.innerHTML = '<div class="alert alert-danger" role="alert">' + mensaje + '</div>';

  // Temporizador para desaparecer la alerta después de 4 segundos
  setTimeout(function() {
    alertContainer.innerHTML = '';
  }, 3000);
}

// Función para mostrar un mensaje de éxito con el mensaje proporcionado
function mostrarMensajeExitoso(mensaje) {
  let alertContainer = document.getElementById("alertContainer");
  alertContainer.innerHTML = '<div class="alert alert-success" role="alert">' + mensaje + '</div>';

  // Temporizador para desaparecer la alerta después de 4 segundos
  setTimeout(function() {
    alertContainer.innerHTML = '';
  }, 3000);
}

// Función para guardar los datos de registro en el localStorage
function guardarRegistroLocalStorage(name, lastname, email, password, phone) {
  let registro = {
    name: name,
    lastname: lastname,
    email: email,
    password: password,
    phone: phone
  };

  localStorage.setItem("registro", JSON.stringify(registro));
}

// Función para obtener los datos de registro almacenados en el localStorage
function obtenerRegistroLocalStorage() {
  let registro = localStorage.getItem("registro");
  return JSON.parse(registro);
}
