// Menú hamburguesa
const menuToggle = document.getElementById('menuToggle');
const navUl = document.querySelector('header nav ul');
menuToggle.addEventListener('click', () => {
  navUl.classList.toggle('open');
});

// Año en el footer
const y = document.getElementById('year');
if (y) { y.textContent = new Date().getFullYear(); }

// Cursor seguidor
// ===== Cursor seguidor con retardo y crecimiento al mantener click =====
(() => {
  const dot = document.querySelector('.cursor-dot');
  if (!dot) return;

  // Si el usuario prefiere reducir movimiento, no animamos
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) {
    dot.style.display = 'none';
    return;
  }

  let targetX = window.innerWidth / 2;
  let targetY = window.innerHeight / 2;
  let currentX = targetX;
  let currentY = targetY;
  let scale = 1;
  const easing = 0.15; // cuanto menor, más lento sigue al ratón

  // Mostrar/posicionar objetivo en cada movimiento
  window.addEventListener('mousemove', (e) => {
    targetX = e.clientX;
    targetY = e.clientY;
  });

  // Crecer mientras se mantiene el click izquierdo
  window.addEventListener('mousedown', (e) => {
    if (e.button === 0) scale = 1.6;
  });
  window.addEventListener('mouseup', (e) => {
    if (e.button === 0) scale = 1;
  });

  // Si el ratón sale/entra de la ventana
  window.addEventListener('mouseleave', () => { dot.style.opacity = '0'; });
  window.addEventListener('mouseenter', () => { dot.style.opacity = '0.95'; });

  // Animación con retardo (lerp)
  const raf = () => {
    // Interpolación hacia el objetivo
    currentX += (targetX - currentX) * easing;
    currentY += (targetY - currentY) * easing;

    dot.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) scale(${scale})`;
    requestAnimationFrame(raf);
  };
  raf();
})();
