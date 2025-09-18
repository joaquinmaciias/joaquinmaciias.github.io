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

// ==== Iluminación de bordes de proyectos al acercar el cursor ====
(() => {
  const cards = document.querySelectorAll('.project');
  const THRESH_OUT = 120; // radio de activación cuando el cursor está fuera
  const THRESH_IN  = 80;  // distancia al borde (desde dentro) para activar

  const clamp = (v, min, max) => Math.min(Math.max(v, min), max);

  window.addEventListener('mousemove', (e) => {
    const mx = e.clientX;
    const my = e.clientY;

    cards.forEach(card => {
      const r = card.getBoundingClientRect();
      const inside = mx >= r.left && mx <= r.right && my >= r.top && my <= r.bottom;

      // Punto del borde más cercano (en coords del elemento)
      let px = clamp(mx, r.left, r.right) - r.left;
      let py = clamp(my, r.top, r.bottom) - r.top;

      let opacity;

      if (inside) {
        // Distancias a cada borde (desde dentro)
        const dL = mx - r.left;
        const dR = r.right - mx;
        const dT = my - r.top;
        const dB = r.bottom - my;
        const minD = Math.min(dL, dR, dT, dB);

        // Proyecta el foco al borde más cercano
        if (minD === dL) px = 0;
        else if (minD === dR) px = r.width;
        else if (minD === dT) py = 0;
        else if (minD === dB) py = r.height;

        // Intensidad en función de lo cerca que esté del borde
        opacity = Math.max(0, 1 - (minD / THRESH_IN));
      } else {
        // Distancia mínima al rectángulo cuando el cursor está fuera
        const dx = Math.max(r.left - mx, 0, mx - r.right);
        const dy = Math.max(r.top - my, 0, my - r.bottom);
        const dist = Math.hypot(dx, dy);
        opacity = Math.max(0, 1 - (dist / THRESH_OUT));
      }

      card.style.setProperty('--gx', `${px}px`);
      card.style.setProperty('--gy', `${py}px`);
      card.style.setProperty('--gopacity', opacity.toFixed(3));
    });
  });
})();
