// Arreglo inicial de productos
let productos = [
  { nombre: "Camisa", precio: 25, descripcion: "Camisa de algodón talla M" },
  { nombre: "Zapatos", precio: 50, descripcion: "Zapatos de cuero negro" },
  { nombre: "Gorra", precio: 15, descripcion: "Gorra ajustable con logo" }
];

// Referencia al <ul> en el DOM
const listaProductos = document.getElementById("lista-productos");

// Función para renderizar la lista
function renderizarProductos() {
  listaProductos.innerHTML = ""; // Limpiar la lista
  productos.forEach((producto, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${producto.nombre}</strong><br>
      Precio: $${producto.precio}<br>
      ${producto.descripcion}
    `;
    listaProductos.appendChild(li);
  });
}

// Función para agregar un producto ficticio
function agregarProducto() {
  const nuevoProducto = {
    nombre: "Nuevo Producto",
    precio: 99,
    descripcion: "Descripción del nuevo producto"
  };
  productos.push(nuevoProducto);
  renderizarProductos();
}

// Cargar los productos al inicio
renderizarProductos();

// Evento para el botón "Agregar Producto"
document.getElementById("agregar-producto").addEventListener("click", agregarProducto);