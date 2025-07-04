// Selección de elementos
const form = document.getElementById('registroForm');
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const edad = document.getElementById('edad');
const submitBtn = document.getElementById('submitBtn');

// Expresiones regulares
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[0-9])(?=.*[\W_]).{8,}$/; // Min 8 chars, al menos 1 número y 1 carácter especial

// Funciones de validación
function validarNombre() {
  const val = nombre.value.trim();
  const errorMsg = nombre.nextElementSibling;
  if (val.length < 3) {
    setInvalid(nombre, errorMsg, 'El nombre debe tener al menos 3 caracteres.');
    return false;
  }
  setValid(nombre, errorMsg);
  return true;
}

function validarEmail() {
  const val = email.value.trim();
  const errorMsg = email.nextElementSibling;
  if (!emailRegex.test(val)) {
    setInvalid(email, errorMsg, 'Correo electrónico no válido.');
    return false;
  }
  setValid(email, errorMsg);
  return true;
}

function validarPassword() {
  const val = password.value;
  const errorMsg = password.nextElementSibling;
  if (!passwordRegex.test(val)) {
    setInvalid(password, errorMsg, 'La contraseña debe tener mínimo 8 caracteres, un número y un carácter especial.');
    return false;
  }
  setValid(password, errorMsg);
  return true;
}

function validarConfirmPassword() {
  const val = confirmPassword.value;
  const errorMsg = confirmPassword.nextElementSibling;
  if (val !== password.value || val === '') {
    setInvalid(confirmPassword, errorMsg, 'Las contraseñas no coinciden.');
    return false;
  }
  setValid(confirmPassword, errorMsg);
  return true;
}

function validarEdad() {
  const val = parseInt(edad.value, 10);
  const errorMsg = edad.nextElementSibling;
  if (isNaN(val) || val < 18) {
    setInvalid(edad, errorMsg, 'Debes ser mayor o igual a 18 años.');
    return false;
  }
  setValid(edad, errorMsg);
  return true;
}

// Funciones para marcar inputs
function setInvalid(input, errorMsg, message) {
  input.classList.add('invalid');
  input.classList.remove('valid');
  errorMsg.textContent = message;
  errorMsg.style.display = 'block';
}

function setValid(input, errorMsg) {
  input.classList.remove('invalid');
  input.classList.add('valid');
  errorMsg.textContent = '';
  errorMsg.style.display = 'none';
}

// Validar todo el formulario y actualizar estado del botón
function validarFormulario() {
  const isFormValid = [
    validarNombre(),
    validarEmail(),
    validarPassword(),
    validarConfirmPassword(),
    validarEdad()
  ].every(Boolean);

  submitBtn.disabled = !isFormValid;
}

// Eventos para validación en tiempo real
nombre.addEventListener('input', () => {
  validarNombre();
  validarFormulario();
});

email.addEventListener('input', () => {
  validarEmail();
  validarFormulario();
});

password.addEventListener('input', () => {
  validarPassword();
  validarConfirmPassword(); // para actualizar confirmación
  validarFormulario();
});

confirmPassword.addEventListener('input', () => {
  validarConfirmPassword();
  validarFormulario();
});

edad.addEventListener('input', () => {
  validarEdad();
  validarFormulario();
});

// Evento submit
form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!submitBtn.disabled) {
    alert('Formulario enviado correctamente!');
    form.reset();
    submitBtn.disabled = true;
    // Remover estilos valid/invalid
    const inputs = form.querySelectorAll('input');
    inputs.forEach(input => {
      input.classList.remove('valid');
      input.classList.remove('invalid');
      input.nextElementSibling.style.display = 'none';
    });
  }
});