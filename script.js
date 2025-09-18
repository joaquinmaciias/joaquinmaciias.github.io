// Menú hamburguesa
const menuToggle = document.getElementById('menuToggle');
const navUl = document.querySelector('header nav ul');
menuToggle.addEventListener('click', () => {
  navUl.classList.toggle('open');
});

// Año en el footer
const y = document.getElementById('year');
if (y) { y.textContent = new Date().getFullYear(); }

// ===== Cursor seguidor con retardo y crecimiento al mantener click =====
(() => {
  const dot = document.querySelector('.cursor-dot');
  if (!dot) return;

  // Respeta "reducir movimiento"
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) {
    dot.style.display = 'none';
    return;
  }

  let targetX = window.innerWidth / 2;
  let targetY = window.innerHeight / 2;
  let currentX = targetX;
  let currentY = targetY;
  let scale = 1.3;
  const easing = 0.25; // menor = más lento

  window.addEventListener('mousemove', (e) => {
    targetX = e.clientX;
    targetY = e.clientY;
  });

  window.addEventListener('mousedown', (e) => {
    if (e.button === 0) scale = 2.3; // crece al mantener click izq.
  });
  window.addEventListener('mouseup', (e) => {
    if (e.button === 0) scale = 1.3; // vuelve a tamaño normal
  });

  window.addEventListener('mouseleave', () => { dot.style.opacity = '0'; });
  window.addEventListener('mouseenter', () => { dot.style.opacity = '0.95'; });

  function tick(){
    currentX += (targetX - currentX) * easing;
    currentY += (targetY - currentY) * easing;
    dot.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) scale(${scale})`;
    requestAnimationFrame(tick);
  }
  tick();
})();
