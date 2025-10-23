// Menú hamburguesa (con aria-label traducible)
const menuToggle = document.getElementById('menuToggle');
const navUl = document.querySelector('header nav ul');
menuToggle.addEventListener('click', () => {
  navUl.classList.toggle('open');
  const isOpen = navUl.classList.contains('open');
  // Si el i18n ya está cargado usamos sus textos; si no, fallback.
  const label = (window.__t ? window.__t(isOpen ? 'menu.close' : 'menu.open') : (isOpen ? 'Cerrar menú' : 'Abrir menú'));
  menuToggle.setAttribute('aria-label', label);
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

// ===================== I18N (ES / EN) =====================
(function(){
  const i18n = {
    es: {
      // Meta
      title: 'Joaquín Mir Macias — Web Personal',
      metaDesc: 'Web personal de Joaquín Mir Macias. Perfil junior orientado a IA, Ciencia de Datos y Desarrollo.',
      
      // UI & navegación
      'nav.aria': 'Principal',
      'nav.sobreMi': 'Sobre mí',
      'nav.proyectos': 'Proyectos',
      'nav.experiencia': 'Experiencia',
      'nav.educacion': 'Educación',
      'nav.habilidades': 'Habilidades',
      'nav.contacto': 'Contacto',
      'menu.open': 'Abrir menú',
      'menu.close': 'Cerrar menú',
      'ui.switchToEN': 'Cambiar a inglés',
      'ui.switchToES': 'Cambiar a español',

      // Secciones
      'sec.about': 'Sobre mí',
      'sec.projects': 'Proyectos',
      'sec.experience': 'Experiencia',
      'sec.education': 'Educación',
      'sec.skills': 'Habilidades',
      'sec.contact': 'Contacto',

      // HERO
      'hero.h1': 'Soy Joaquín Mir Macías<br><span class="accent-line"> Ingeniero Matemático e Inteligencia Artificial</span><br><span class="accent-line"> Máster en Inteligencia Artificial Avanzada.</span>',
      'hero.lead': 'Me apasiona transformar datos en soluciones inteligentes. He participado en proyectos de <em>Computer Vision</em> para la detección de tumores, en el desarrollo de una <em>silla de ruedas autónoma</em> y en prácticas de análisis de datos en <strong>Redsys</strong> y <strong>BBVA</strong>. Busco mi primera experiencia a tiempo completo donde aportar mis conocimientos en <span class="accent">Machine Learning, análisis de datos y desarrollo de sistemas inteligentes</span>, mientras sigo aprendiendo y creando impacto real.',
      'cta.cv': 'Ver CV',
      'cta.carta': 'Carta de Recomendación BBVA',
      'cta.tfg': 'Trabajo Fin de Grado',
      'img.altPerfil': 'Foto de Joaquín Mir Macias',

      // BIO
      'bio.h2': 'Sobre mí',
      'bio.p1': 'Soy <strong>Joaquín Mir</strong>, graduado en <em>Ingeniería Matemática e Inteligencia Artificial</em> y actualmente estudiante del <strong>Máster en Inteligencia Artificial Avanzada</strong> en la Universidad Pontificia Comillas – ICAI. Mi formación combina una sólida base matemática con experiencia práctica en proyectos de <em>Machine Learning</em>, <em>Visión por Computador</em> y <em>Análisis de Datos</em>.',
      'bio.p2': 'He trabajado en proyectos como la <strong>detección de tumores renales con Deep Learning</strong>, el desarrollo de una <strong>silla de ruedas autónoma</strong> y prácticas profesionales en <strong>Redsys</strong> y <strong>BBVA</strong>, donde apliqué análisis de datos y técnicas de auditoría interna.',
      'bio.p3': 'Busco mi primera experiencia a tiempo completo en el ámbito de la <strong>IA y Ciencia de Datos</strong>, con el objetivo de aportar soluciones innovadoras, crecer profesionalmente y generar impacto real en las organizaciones.',

      // PROYECTOS
      'projects.1.title': 'Kidney Tumor Detection (CT)',
      'projects.1.desc':  'Segmentación automática de tumores renales en TC con CNNs.',
      'projects.1.aria':  'Segmentación automática de tumores renales en TC con CNNs.',

      'projects.2.title': 'Init RNNs & LSTM',
      'projects.2.desc':  'Impacto de la inicialización de pesos en RNN/LSTM sobre estabilidad y convergencia.',
      'projects.2.aria':  'Impacto de la inicialización de pesos en RNN/LSTM sobre estabilidad y convergencia.',

      'projects.3.title': 'Llama 3.1 Fine-Tuning',
      'projects.3.desc':  'Fine-tuning de Llama 3.1 para tareas instruccionales con guías reproducibles.',
      'projects.3.aria':  'Fine-tuning de Llama 3.1 para tareas instruccionales con guías reproducibles.',

      'projects.4.title': 'Latent Diffusion (LDM)',
      'projects.4.desc':  'Implementación del pipeline de Latent Diffusion con Diffusers paso a paso.',
      'projects.4.aria':  'Implementación del pipeline de Latent Diffusion con Diffusers paso a paso.',

      'projects.5.title': 'DDPM (Diffusers)',
      'projects.5.desc':  'Entrenamiento y muestreo con DDPM; comparación con DDIM y análisis de calidad.',
      'projects.5.aria':  'Entrenamiento y muestreo con DDPM; comparación con DDIM y análisis de calidad.',

      'projects.6.title': 'Vision Transformer (ViT)',
      'projects.6.desc':  'Implementación desde cero de Vision Transformers (ViT) con PyTorch.',
      'projects.6.aria':  'Implementación desde cero de Vision Transformers (ViT) con PyTorch.',

      // EXPERIENCIA
      'exp.h2': 'Experiencia',
      'exp.p1': '<strong>Universidad Pontificia de Comillas – ICAI</strong>, Madrid, España<br><em>Project Member – SocialTech Challenge</em> · Octubre 2023 – Junio 2024',
      'exp.p1.li1': 'Colaboración con el área de Sistemas Inteligentes en el diseño y fabricación de una silla de ruedas autónoma utilizando sistemas electrónicos y Machine Learning.',
      'exp.p2': '<strong>Redsys</strong>, Madrid, España<br><em>Internship – Data Analyst Department</em> · Junio 2024 – Agosto 2024',
      'exp.p2.li1': 'Extracción de datos con Hue, filtrado de información en bases de datos relacionales con QlikSense.',
      'exp.p2.li2': 'Creación de dashboards dirigidos para visualización de datos de empresas.',
      'exp.p3': '<strong>BBVA</strong>, Madrid, España<br><em>Internship – Internal Audit</em> · Febrero 2025 – Agosto 2025',
      'exp.p3.li1': 'Apoyo en la ejecución de auditorías internas en el área corporativa.',
      'exp.p3.li2': 'Participación en la evaluación de procesos clave, análisis de riesgos y controles.',
      'exp.p3.li3': 'Elaboración de informes con hallazgos y recomendaciones.',
      'exp.p3.li4': 'Uso de herramientas de análisis de datos y colaboración con distintas unidades para garantizar cumplimiento normativo y de políticas internas.',

      // EDUCACIÓN
      'edu.h2': 'Educación',
      'edu.master': 'Máster de Inteligencia Artificial Avanzada',
      'edu.degree': 'Ingeniería Matemática Inteligencia Artificial',

      // HABILIDADES
      'skills.h2': 'Habilidades',
      'skills.l1': '<strong>Lenguajes:</strong> Python, SQL, R, HTML/CSS/JS.',
      'skills.l2': '<strong>ML/DL:</strong> NumPy, pandas, scikit-learn, PyTorch, OpenCV.',
      'skills.l3': '<strong>Datos:</strong> MySQL, MongoDB, ETL, APIs.',
      'skills.l4': '<strong>BI:</strong> Power BI, Tableau.',
      'skills.l5': '<strong>Otros:</strong> Git, Linux, control de versiones, comunicación y trabajo en equipo.',

      // CONTACTO
      'contact.h2': 'Contacto',
      'contact.email': 'Correo',
      'contact.linkedin': 'LinkedIn',
      'contact.github': 'Github',

      // FOOTER
      'footer.back': 'Volver arriba'
    },
    en: {
      // Meta
      title: 'Joaquín Mir Macias — Personal Website',
      metaDesc: 'Personal website of Joaquín Mir Macias. Junior profile focused on AI, Data Science and Development.',
      // UI & navegación
      'nav.aria': 'Main',
      'nav.sobreMi': 'About',
      'nav.proyectos': 'Projects',
      'nav.experiencia': 'Experience',
      'nav.educacion': 'Education',
      'nav.habilidades': 'Skills',
      'nav.contacto': 'Contact',
      'menu.open': 'Open menu',
      'menu.close': 'Close menu',
      'ui.switchToEN': 'Switch to English',
      'ui.switchToES': 'Cambiar a español',

      // Secciones
      'sec.about': 'About',
      'sec.projects': 'Projects',
      'sec.experience': 'Experience',
      'sec.education': 'Education',
      'sec.skills': 'Skills',
      'sec.contact': 'Contact',

      // HERO
      'hero.h1': "I'm Joaquín Mir Macías<br><span class=\"accent-line\"> Mathematical & Artificial Intelligence Engineer</span><br><span class=\"accent-line\"> MSc in Advanced Artificial Intelligence.</span>",
      'hero.lead': 'I love turning data into intelligent solutions. I have worked on <em>Computer Vision</em> for tumor detection, built an <em>autonomous wheelchair</em>, and completed data analytics internships at <strong>Redsys</strong> and <strong>BBVA</strong>. I am seeking my first full-time role to contribute in <span class="accent">Machine Learning, data analysis, and intelligent systems</span> while continuing to learn and create real impact.',
      'cta.cv': 'View CV',
      'cta.carta': 'BBVA Letter of Recommendation',
      'cta.tfg': 'Bachelor Thesis',
      'img.altPerfil': 'Photo of Joaquín Mir Macias',

      // BIO
      'bio.h2': 'About',
      'bio.p1': 'I am <strong>Joaquín Mir</strong>, graduate in <em>Mathematical Engineering and Artificial Intelligence</em> and currently a student of the <strong>MSc in Advanced Artificial Intelligence</strong> at Universidad Pontificia Comillas – ICAI. My background combines a solid mathematical foundation with hands-on experience in <em>Machine Learning</em>, <em>Computer Vision</em>, and <em>Data Analysis</em> projects.',
      'bio.p2': 'I have worked on <strong>kidney tumor detection with Deep Learning</strong>, developed an <strong>autonomous wheelchair</strong>, and completed internships at <strong>Redsys</strong> and <strong>BBVA</strong>, applying data analysis and internal audit techniques.',
      'bio.p3': 'I am looking for my first full-time opportunity in <strong>AI and Data Science</strong> to deliver innovative solutions, grow professionally, and generate real impact.',

      // PROJECTS
      'projects.1.title': 'Kidney Tumor Detection (CT)',
      'projects.1.desc':  'Automatic kidney tumor segmentation in CT using CNNs.',
      'projects.1.aria':  'Automatic kidney tumor segmentation in CT using CNNs.',

      'projects.2.title': 'Init RNNs & LSTM',
      'projects.2.desc':  'Impact of weight initialization in RNN/LSTM on stability and convergence.',
      'projects.2.aria':  'Impact of weight initialization in RNN/LSTM on stability and convergence.',

      'projects.3.title': 'Llama 3.1 Fine-Tuning',
      'projects.3.desc':  'Fine-tuning Llama 3.1 for instruction-based tasks with reproducible guides.',
      'projects.3.aria':  'Fine-tuning Llama 3.1 for instruction-based tasks with reproducible guides.',

      'projects.4.title': 'Latent Diffusion (LDM)',
      'projects.4.desc':  'Step-by-step implementation of the Latent Diffusion pipeline with Diffusers.',
      'projects.4.aria':  'Step-by-step implementation of the Latent Diffusion pipeline with Diffusers.',

      'projects.5.title': 'DDPM (Diffusers)',
      'projects.5.desc':  'Training and sampling with DDPM; comparison with DDIM and quality analysis.',
      'projects.5.aria':  'Training and sampling with DDPM; comparison with DDIM and quality analysis.',

      'projects.6.title': 'Vision Transformer (ViT)',
      'projects.6.desc':  'Vision Transformer (ViT) built from scratch using PyTorch.',
      'projects.6.aria':  'Vision Transformer (ViT) built from scratch using PyTorch.',

      // EXPERIENCE
      'exp.h2': 'Experience',
      'exp.p1': '<strong>Universidad Pontificia de Comillas – ICAI</strong>, Madrid, Spain<br><em>Project Member – SocialTech Challenge</em> · October 2023 – June 2024',
      'exp.p1.li1': 'Worked with the Intelligent Systems area to design and build an autonomous wheelchair using electronics and Machine Learning.',
      'exp.p2': '<strong>Redsys</strong>, Madrid, Spain<br><em>Internship – Data Analyst Department</em> · June 2024 – August 2024',
      'exp.p2.li1': 'Data extraction with Hue and filtering of information in relational databases using QlikSense.',
      'exp.p2.li2': 'Built targeted dashboards for enterprise data visualization.',
      'exp.p3': '<strong>BBVA</strong>, Madrid, Spain<br><em>Internship – Internal Audit</em> · February 2025 – August 2025',
      'exp.p3.li1': 'Supported the execution of internal audits in the corporate area.',
      'exp.p3.li2': 'Contributed to assessment of key processes, risk analysis and controls.',
      'exp.p3.li3': 'Prepared reports with findings and recommendations.',
      'exp.p3.li4': 'Used data analysis tools and collaborated across units to ensure compliance with regulations and internal policies.',

      // EDUCATION
      'edu.h2': 'Education',
      'edu.master': 'Master in Advanced Artificial Intelligence',
      'edu.degree': 'BSc in Mathematical Engineering & Artificial Intelligence',

      // SKILLS
      'skills.h2': 'Skills',
      'skills.l1': '<strong>Languages:</strong> Python, SQL, R, HTML/CSS/JS.',
      'skills.l2': '<strong>ML/DL:</strong> NumPy, pandas, scikit-learn, PyTorch, OpenCV.',
      'skills.l3': '<strong>Data:</strong> MySQL, MongoDB, ETL, APIs.',
      'skills.l4': '<strong>BI:</strong> Power BI, Tableau.',
      'skills.l5': '<strong>Other:</strong> Git, Linux, version control, communication & teamwork.',

      // CONTACT
      'contact.h2': 'Contact',
      'contact.email': 'Email',
      'contact.linkedin': 'LinkedIn',
      'contact.github': 'Github',

      // FOOTER
      'footer.back': 'Back to top'
    }
  };

  // Exponer un pequeño helper para otros handlers
  window.__t = (k) => {
    const lang = window.__lang || 'es';
    return (i18n[lang] && i18n[lang][k]) || i18n.es[k] || '';
  };

  function applyTranslations(lang){
    window.__lang = lang;
    // <html lang="">
    document.documentElement.setAttribute('lang', lang);

    // <title> y <meta name="description">
    document.title = __t('title');
    const md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute('content', __t('metaDesc'));

    // Nav y controles ARIA
    const navEl = document.querySelector('header nav');
    if (navEl) navEl.setAttribute('aria-label', __t('nav.aria'));

    const menuBtn = document.getElementById('menuToggle');
    if (menuBtn) {
      const isOpen = document.querySelector('header nav ul').classList.contains('open');
      menuBtn.setAttribute('aria-label', __t(isOpen ? 'menu.close' : 'menu.open'));
    }

    // Botón de idioma
    const langBtn = ensureLangButton();
    if (langBtn) {
      langBtn.textContent = (lang === 'es') ? 'English' : 'Español';
      langBtn.setAttribute('aria-label', __t(lang === 'es' ? 'ui.switchToEN' : 'ui.switchToES'));
    }
    
    // ===== Mapeo de selectores -> claves =====
    const map = [
      // Menú
      {sel:'header nav ul li:nth-child(1) a', key:'nav.sobreMi'},
      {sel:'header nav ul li:nth-child(2) a', key:'nav.proyectos'},
      {sel:'header nav ul li:nth-child(3) a', key:'nav.experiencia'},
      {sel:'header nav ul li:nth-child(4) a', key:'nav.educacion'},
      {sel:'header nav ul li:nth-child(5) a', key:'nav.habilidades'},
      {sel:'header nav ul li:nth-child(6) a', key:'nav.contacto'},

      // HERO
      {sel:'#sobre-mi h1', key:'hero.h1', html:true},
      {sel:'#sobre-mi .lead', key:'hero.lead', html:true},
      {sel:'.cta a:nth-child(1)', key:'cta.cv'},
      {sel:'.cta a:nth-child(2)', key:'cta.carta'},
      {sel:'.cta a:nth-child(3)', key:'cta.tfg'},
      {sel:'.perfil', key:'img.altPerfil', attr:'alt'},

      // Encabezados de secciones
      {sel:'#bio h2', key:'bio.h2'},
      {sel:'#proyectos h2', key:'projects.h2'},
      {sel:'#experiencia h2', key:'exp.h2'},
      {sel:'#educacion h2', key:'edu.h2'},
      {sel:'#habilidades h2', key:'skills.h2'},
      {sel:'#contacto h2', key:'contact.h2'},

      // BIO párrafos
      {sel:'#bio p:nth-of-type(1)', key:'bio.p1', html:true},
      {sel:'#bio p:nth-of-type(2)', key:'bio.p2', html:true},
      {sel:'#bio p:nth-of-type(3)', key:'bio.p3', html:true},

      // PROYECTOS (5 tarjetas) – títulos, descripciones y aria-labels
      {sel: '.projects a:nth-child(1) h3', key: 'projects.1.title'},
      {sel: '.projects a:nth-child(1) p',  key: 'projects.1.desc'},
      {sel: '.projects a:nth-child(1)',    key: 'projects.1.aria', attr: 'aria-label'},

      {sel: '.projects a:nth-child(2) h3', key: 'projects.2.title'},
      {sel: '.projects a:nth-child(2) p',  key: 'projects.2.desc'},
      {sel: '.projects a:nth-child(2)',    key: 'projects.2.aria', attr: 'aria-label'},

      {sel: '.projects a:nth-child(3) h3', key: 'projects.3.title'},
      {sel: '.projects a:nth-child(3) p',  key: 'projects.3.desc'},
      {sel: '.projects a:nth-child(3)',    key: 'projects.3.aria', attr: 'aria-label'},

      {sel: '.projects a:nth-child(4) h3', key: 'projects.4.title'},
      {sel: '.projects a:nth-child(4) p',  key: 'projects.4.desc'},
      {sel: '.projects a:nth-child(4)',    key: 'projects.4.aria', attr: 'aria-label'},

      {sel: '.projects a:nth-child(5) h3', key: 'projects.5.title'},
      {sel: '.projects a:nth-child(5) p',  key: 'projects.5.desc'},
      {sel: '.projects a:nth-child(5)',    key: 'projects.5.aria', attr: 'aria-label'},

      {sel: '.projects a:nth-child(6) h3', key: 'projects.6.title'},
      {sel: '.projects a:nth-child(6) p',  key: 'projects.6.desc'},
      {sel: '.projects a:nth-child(6)',    key: 'projects.6.aria', attr: 'aria-label'},

      // EXPERIENCIA (tres bloques p + sus listas)
      {sel:'#experiencia p:nth-of-type(1)', key:'exp.p1', html:true},
      {sel:'#experiencia ul:nth-of-type(1) li:nth-child(1)', key:'exp.p1.li1'},

      {sel:'#experiencia p:nth-of-type(2)', key:'exp.p2', html:true},
      {sel:'#experiencia ul:nth-of-type(2) li:nth-child(1)', key:'exp.p2.li1'},
      {sel:'#experiencia ul:nth-of-type(2) li:nth-child(2)', key:'exp.p2.li2'},

      {sel:'#experiencia p:nth-of-type(3)', key:'exp.p3', html:true},
      {sel:'#experiencia ul:nth-of-type(3) li:nth-child(1)', key:'exp.p3.li1'},
      {sel:'#experiencia ul:nth-of-type(3) li:nth-child(2)', key:'exp.p3.li2'},
      {sel:'#experiencia ul:nth-of-type(3) li:nth-child(3)', key:'exp.p3.li3'},
      {sel:'#experiencia ul:nth-of-type(3) li:nth-child(4)', key:'exp.p3.li4'},

      // EDUCACIÓN (texto de los <strong> dentro de los <a>)
      {sel:'#educacion p:nth-of-type(1) a strong', key:'edu.master'},
      {sel:'#educacion p:nth-of-type(2) a strong', key:'edu.degree'},

      // HABILIDADES (5 elementos)
      {sel:'#habilidades .skills li:nth-child(1)', key:'skills.l1', html:true},
      {sel:'#habilidades .skills li:nth-child(2)', key:'skills.l2', html:true},
      {sel:'#habilidades .skills li:nth-child(3)', key:'skills.l3', html:true},
      {sel:'#habilidades .skills li:nth-child(4)', key:'skills.l4', html:true},
      {sel:'#habilidades .skills li:nth-child(5)', key:'skills.l5', html:true},

      // CONTACTO (texto visible de los <span>)
      {sel:'#contacto .links-list a:nth-child(1) span', key:'contact.email'},
      {sel:'#contacto .links-list a:nth-child(2) span', key:'contact.linkedin'},
      {sel:'#contacto .links-list a:nth-child(3) span', key:'contact.github'},

      // FOOTER
      {sel:'footer a.btn.sm', key:'footer.back'}
    ];

    // Aplicar todas las traducciones
    for (const item of map){
      const el = document.querySelector(item.sel);
      if (!el) continue;
      if (item.attr){
        el.setAttribute(item.attr, __t(item.key));
      } else if (item.html){
        el.innerHTML = __t(item.key);
      } else {
        el.textContent = __t(item.key);
      }
    }
  }

  function ensureLangButton(){
    let btn = document.getElementById('langToggle');
    if (!btn){
      // Si no existe (por si no se tocó el HTML), lo creamos en .logo
      const logo = document.querySelector('.logo');
      if (!logo) return null;
      btn = document.createElement('button');
      btn.id = 'langToggle';
      btn.className = 'btn sm lang-toggle';
      logo.innerHTML = '';
      logo.appendChild(btn);
    }
    // Click para alternar
    if (!btn.__bound){
      btn.addEventListener('click', () => {
        const next = (window.__lang === 'es') ? 'en' : 'es';
        setLang(next);
      });
      btn.__bound = true;
    }
    return btn;
  }

  function setLang(lang){
    localStorage.setItem('lang', lang);
    applyTranslations(lang);
  }

  // Inicialización
  document.addEventListener('DOMContentLoaded', () => {
    const userPref = localStorage.getItem('lang');
    const fallback = (navigator.language || 'es').toLowerCase().startsWith('es') ? 'es' : 'en';
    const startLang = userPref || fallback;
    setLang(startLang);
  });
})();
