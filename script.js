// Menú hamburguesa
const menuToggle = document.getElementById('menuToggle');
const navUl = document.querySelector('header nav ul');
menuToggle.addEventListener('click', () => {
  navUl.classList.toggle('open');
});

// Año en el footer
const y = document.getElementById('year');
if (y) { y.textContent = new Date().getFullYear(); }
