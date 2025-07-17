// Seleccionar el botón de menú y la lista de navegación
const menuToggle = document.getElementById('menuToggle');
const navUl = document.querySelector('header nav ul');

// Cuando se hace clic en el botón de menú (hamburguesa)
menuToggle.addEventListener('click', () => {
  // Alternar la clase 'open' en el menú (muestra u oculta los links)
  navUl.classList.toggle('open');
});
