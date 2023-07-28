document.getElementById('productForm').addEventListener('submit', function(event) {
  event.preventDefault();
  validateProductForm();
});

function validateProductForm() {
  let productName = document.getElementById('productName').value.trim();
  let productDescription = document.getElementById('productDescription').value.trim();
  let productPrice = document.getElementById('productPrice').value.trim();
  let productImage = document.getElementById('productImage').value;

  let alertContainer = document.getElementById('alertContainer');
  alertContainer.innerHTML = '';

  if (productName === '' || productDescription === '' || productPrice === '' || productImage === '') {
    showAlert('Todos los campos son obligatorios', 'danger');
    return;
  }

  // Resto de validaciones

  showAlert('El formulario se envió correctamente', 'success');
  document.getElementById('productForm').reset();
}

function showAlert(message, type) {
  let alertDiv = document.createElement('div');
  alertDiv.className = 'alert alert-' + type;
  alertDiv.innerHTML = message;

  let alertContainer = document.getElementById('alertContainer');
  alertContainer.appendChild(alertDiv);
}
