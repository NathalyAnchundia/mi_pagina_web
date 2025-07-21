// Mostrar alerta personalizada
function mostrarAlerta() {
  alert("¡Gracias por visitar nuestra página!");
}

// Validación de formulario
document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const nombre = document.getElementById("nombre");
  const correo = document.getElementById("correo");
  const mensaje = document.getElementById("mensaje");

  let valido = true;

  if (nombre.value.trim() === "") {
    nombre.classList.add("is-invalid");
    valido = false;
  } else {
    nombre.classList.remove("is-invalid");
  }

  if (correo.value.trim() === "" || !correo.value.includes("@")) {
    correo.classList.add("is-invalid");
    valido = false;
  } else {
    correo.classList.remove("is-invalid");
  }

  if (mensaje.value.trim() === "") {
    mensaje.classList.add("is-invalid");
    valido = false;
  } else {
    mensaje.classList.remove("is-invalid");
  }

  if (valido) {
    alert("Formulario enviado correctamente.");
    this.reset();
  }
});