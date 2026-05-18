// ===================================
// Translations Data
// ===================================

const translations = {
    en: {
        nav: {
            about: "About",
            journey: "Journey",
            experience: "Experience",
            education: "Education",
            projects: "Projects",
            skills: "Skills"
        },
        hero: {
            subtitle: "MSc in Advanced Artificial Intelligence @ ICAI",
            description: "Junior engineer passionate about turning data into intelligent solutions — Machine Learning, Computer Vision and NLP.",
            contactBtn: "Get in Touch",
            projectsBtn: "View Projects",
            cvBtn: "View CV",
            tfgBtn: "Final Thesis",
            letterBtn: "BBVA Recommendation Letter"
        },
        sections: {
            about: "About Me",
            journey: "My Journey",
            experience: "Experience",
            education: "Education",
            projects: "Featured Projects",
            skills: "Skills & Technologies"
        },
        journey: {
            subtitle: "A visual map of my academic and professional path.",
            academic: "Academic",
            professional: "Professional",
            exchange: "Exchange / Abroad",
            present: "Present"
        },
        about: {
            p1: "Hi! I'm Joaquín, MSc student in Advanced Artificial Intelligence at <strong>Comillas Pontifical University – ICAI</strong> (Madrid), with a BE in Mathematical Engineering and Artificial Intelligence. My background combines solid mathematical foundations with hands-on experience in <strong>Machine Learning</strong>, <strong>Computer Vision</strong> and <strong>Data Analysis</strong>.",
            p2: "I've worked on <strong>kidney tumor detection with Deep Learning</strong>, contributed to the development of an <strong>autonomous wheelchair</strong>, and completed professional internships at <strong>Redsys</strong> (Data Analysis) and <strong>BBVA</strong> (Internal Audit), where I applied data techniques and worked on internal compliance processes.",
            p3: "I'm looking for my first full-time opportunity in <strong>Machine Learning, Computer Vision and NLP</strong>, where I can deliver innovative solutions, grow professionally, and generate real impact in the organization."
        },
        links: {
            viewWebsite: "Visit Website →",
            viewProgram: "View Program →",
            viewProject: "View Project →",
            showAllProjects: "Show all projects"
        },
        cmdk: {
            placeholder: "Type a command or search…",
            empty: "No results",
            section: "Section",
            action: "Action",
            goAbout: "Go to About",
            goJourney: "Go to Journey",
            goExperience: "Go to Experience",
            goEducation: "Go to Education",
            goProjects: "Go to Projects",
            goSkills: "Go to Skills",
            openCv: "Open CV (PDF)",
            openTfg: "Open Final Thesis (PDF)",
            openLetter: "Open BBVA Letter (PDF)",
            sendEmail: "Send Email",
            openGithub: "Open GitHub",
            openLinkedin: "Open LinkedIn",
            switchEn: "Switch to English",
            switchEs: "Switch to Spanish"
        },
        currently: {
            title: "Currently",
            reading: "Reading",
            building: "Building",
            focus: "Focused on"
        },
        footer: {
            rights: "All rights reserved."
        }
    },
    es: {
        nav: {
            about: "Sobre mí",
            journey: "Trayectoria",
            experience: "Experiencia",
            education: "Educación",
            projects: "Proyectos",
            skills: "Habilidades"
        },
        hero: {
            subtitle: "Máster en Inteligencia Artificial Avanzada @ ICAI",
            description: "Ingeniero junior apasionado por transformar datos en soluciones inteligentes — Machine Learning, Visión por Computador y NLP.",
            contactBtn: "Contactar",
            projectsBtn: "Ver Proyectos",
            cvBtn: "Ver CV",
            tfgBtn: "Trabajo Fin de Grado",
            letterBtn: "Carta de Recomendación BBVA"
        },
        sections: {
            about: "Sobre mí",
            journey: "Mi Trayectoria",
            experience: "Experiencia",
            education: "Educación",
            projects: "Proyectos Destacados",
            skills: "Habilidades y Tecnologías"
        },
        journey: {
            subtitle: "Un mapa visual de mi trayectoria académica y profesional.",
            academic: "Académico",
            professional: "Profesional",
            exchange: "Estancia / Internacional",
            present: "Actualidad"
        },
        about: {
            p1: "¡Hola! Soy Joaquín, estudiante de Máster en Inteligencia Artificial Avanzada en la <strong>Universidad Pontificia Comillas – ICAI</strong> (Madrid), con un Grado en Ingeniería Matemática e Inteligencia Artificial. Mi formación combina una sólida base matemática con experiencia práctica en <strong>Machine Learning</strong>, <strong>Visión por Computador</strong> y <strong>Análisis de Datos</strong>.",
            p2: "He trabajado en proyectos como la <strong>detección de tumores renales con Deep Learning</strong>, el desarrollo de una <strong>silla de ruedas autónoma</strong>, y prácticas profesionales en <strong>Redsys</strong> (Análisis de Datos) y <strong>BBVA</strong> (Auditoría Interna), donde apliqué técnicas de análisis de datos y procesos de cumplimiento interno.",
            p3: "Busco mi primera experiencia a tiempo completo en el ámbito del <strong>Machine Learning, Computer Vision y NLP</strong>, donde aportar soluciones innovadoras, crecer profesionalmente y generar impacto real en las organizaciones."
        },
        links: {
            viewWebsite: "Visitar Web →",
            viewProgram: "Ver Programa →",
            viewProject: "Ver Proyecto →",
            showAllProjects: "Mostrar todos los proyectos"
        },
        cmdk: {
            placeholder: "Escribe un comando o busca…",
            empty: "Sin resultados",
            section: "Sección",
            action: "Acción",
            goAbout: "Ir a Sobre mí",
            goJourney: "Ir a Trayectoria",
            goExperience: "Ir a Experiencia",
            goEducation: "Ir a Educación",
            goProjects: "Ir a Proyectos",
            goSkills: "Ir a Habilidades",
            openCv: "Abrir CV (PDF)",
            openTfg: "Abrir Trabajo Fin de Grado (PDF)",
            openLetter: "Abrir Carta BBVA (PDF)",
            sendEmail: "Enviar Email",
            openGithub: "Abrir GitHub",
            openLinkedin: "Abrir LinkedIn",
            switchEn: "Cambiar a Inglés",
            switchEs: "Cambiar a Español"
        },
        currently: {
            title: "Ahora mismo",
            reading: "Leyendo",
            building: "Construyendo",
            focus: "Enfocado en"
        },
        footer: {
            rights: "Todos los derechos reservados."
        }
    }
};

// Portfolio data with translations
const portfolioDataTranslations = {
    en: {
        experience: [
            {
                title: "Internal Audit Intern",
                company: "BBVA",
                location: "Madrid, Spain",
                date: "Feb 2025 – Aug 2025",
                description: "Supported the execution of internal audits in the corporate area. Participated in the evaluation of key processes, risk and control analysis, and the preparation of reports with findings and recommendations. Used data analysis tools and collaborated with different units to ensure regulatory and internal-policy compliance.",
                link: "https://www.bbva.com/en/",
                logo: "assets/icons/experience/bbva.png",
                fallback: "BBVA"
            },
            {
                title: "Data Analyst Intern",
                company: "Redsys",
                location: "Madrid, Spain",
                date: "Jun 2024 – Aug 2024",
                description: "Data extraction with Hue and information filtering on relational databases with QlikSense. Built tailored dashboards for the visualization of company data.",
                link: "https://redsys.es/",
                logo: "assets/icons/experience/redsys.png",
                fallback: "RDS"
            },
            {
                title: "Project Member – SocialTech Challenge",
                company: "Comillas Pontifical University – ICAI",
                location: "Madrid, Spain",
                date: "Oct 2023 – Jun 2024",
                description: "Collaboration with the Intelligent Systems area on the design and manufacturing of an autonomous wheelchair using electronic systems and Machine Learning.",
                link: "https://www.comillas.edu/en/",
                logo: "assets/icons/experience/comillas.png",
                fallback: "ICAI"
            }
        ],
        education: [
            {
                degree: "MSc in Advanced Artificial Intelligence",
                institution: "Comillas Pontifical University, ETSI ICAI",
                location: "Madrid, Spain",
                date: "Sep 2024 – Present",
                description: "Master's programme focused on Deep Learning, Computer Vision, NLP, Generative Models and Advanced AI techniques.",
                link: "https://www.comillas.edu/postgrados/master-universitario-en-inteligencia-artificial/#plan",
                logo: "assets/icons/education/comillas.png",
                fallback: "ICAI"
            },
            {
                degree: "BE in Mathematical Engineering and AI",
                institution: "Comillas Pontifical University, ETSI ICAI",
                location: "Madrid, Spain",
                date: "2020 – 2024",
                description: "Five-year programme combining a strong mathematical foundation with applications in Artificial Intelligence. Final Thesis on Deep Learning for medical imaging.",
                link: "https://www.comillas.edu/grados/grado-en-ingenieria-matematica-e-inteligencia-artificial-imat/#planestudios",
                logo: "assets/icons/education/comillas.png",
                fallback: "ICAI"
            }
        ],
        projects: [
            {
                title: "Kidney Tumor Detection (CT)",
                tech: "PyTorch, CNNs, Computer Vision, Medical Imaging",
                description: "Automatic segmentation of kidney tumors on CT scans using Convolutional Neural Networks. Pipeline covers preprocessing, model training and quantitative evaluation on medical imaging benchmarks.",
                link: "https://github.com/joaquinmaciias/Kidney-tumor-detection-in-CT-images",
                image: "assets/projects/medical_img.png",
                imageId: "kidney"
            },
            {
                title: "Vision Transformer (ViT)",
                tech: "PyTorch, Transformers, Computer Vision",
                description: "From-scratch implementation of Vision Transformers (ViT) in PyTorch. Covers patch embeddings, multi-head attention, training loop and evaluation on image-classification benchmarks.",
                link: "https://github.com/joaquinmaciias/VisionTransformer-PyTorch",
                image: "assets/projects/ViT.png",
                imageId: "vit"
            },
            {
                title: "Llama 3.1 Fine-Tuning",
                tech: "Llama 3.1, LoRA, Hugging Face, NLP",
                description: "Fine-tuning of Llama 3.1 for instruction-based tasks with reproducible guides. Explores parameter-efficient fine-tuning, dataset preparation and evaluation.",
                link: "https://github.com/joaquinmaciias/Llama-3.1---Fine_Tuning_for_Instruction_based",
                image: "assets/projects/Fine_tuning.png",
                imageId: "llama"
            },
            {
                title: "Latent Diffusion Models (LDM)",
                tech: "PyTorch, Hugging Face Diffusers, Generative AI",
                description: "Step-by-step implementation of the Latent Diffusion Model pipeline using Hugging Face Diffusers. Studies the VAE + diffusion architecture for efficient image generation.",
                link: "https://github.com/joaquinmaciias/Laten_Diffusion_Models---Hugging_Face",
                image: "assets/projects/LDM.png",
                imageId: "ldm"
            },
            {
                title: "DDPM with Diffusers",
                tech: "PyTorch, DDPM, Diffusion Models",
                description: "Training and sampling with Denoising Diffusion Probabilistic Models; comparison with DDIM and quality analysis of generated samples.",
                link: "https://github.com/joaquinmaciias/Denoising_Diffusion_Probabilistic_Models---DDPM",
                image: "assets/projects/DDPM.png",
                imageId: "ddpm"
            },
            {
                title: "RNN & LSTM Initialization",
                tech: "PyTorch, RNN, LSTM, Optimization",
                description: "Study of the impact of weight initialization on RNN/LSTM stability and convergence. Reproducible experiments comparing initialization schemes.",
                link: "https://github.com/joaquinmaciias/Initialization-RNNs-LSTM",
                image: "assets/projects/Ini_RNN_LSTM.png",
                imageId: "rnn-init"
            }
        ],
        skills: {
            "Programming Languages": [
                "Python (Advanced)",
                "SQL",
                "R",
                "HTML/CSS/JS"
            ],
            "AI & Machine Learning": [
                "Machine Learning",
                "Deep Learning",
                "Computer Vision",
                "Natural Language Processing",
                "Generative Models",
                "Transformers"
            ],
            "Tools & Frameworks": [
                "PyTorch",
                "NumPy",
                "pandas",
                "scikit-learn",
                "OpenCV",
                "Hugging Face",
                "Git",
                "Linux"
            ],
            "Data & BI": [
                "MySQL",
                "MongoDB",
                "ETL",
                "APIs",
                "Power BI",
                "Tableau",
                "QlikSense",
                "Hue"
            ],
            "Languages": [
                "Spanish (Native)",
                "English (Fluent)"
            ]
        }
    },
    es: {
        experience: [
            {
                title: "Becario – Auditoría Interna",
                company: "BBVA",
                location: "Madrid, España",
                date: "Feb 2025 – Ago 2025",
                description: "Apoyo en la ejecución de auditorías internas en el área corporativa. Participación en la evaluación de procesos clave, análisis de riesgos y controles, y elaboración de informes con hallazgos y recomendaciones. Uso de herramientas de análisis de datos y colaboración con distintas unidades para garantizar el cumplimiento normativo y de políticas internas.",
                link: "https://www.bbva.com/",
                logo: "assets/icons/experience/bbva.png",
                fallback: "BBVA"
            },
            {
                title: "Becario – Departamento de Análisis de Datos",
                company: "Redsys",
                location: "Madrid, España",
                date: "Jun 2024 – Ago 2024",
                description: "Extracción de datos con Hue y filtrado de información en bases de datos relacionales con QlikSense. Creación de dashboards dirigidos para la visualización de datos de empresas.",
                link: "https://redsys.es/",
                logo: "assets/icons/experience/redsys.png",
                fallback: "RDS"
            },
            {
                title: "Project Member – SocialTech Challenge",
                company: "Universidad Pontificia Comillas – ICAI",
                location: "Madrid, España",
                date: "Oct 2023 – Jun 2024",
                description: "Colaboración con el área de Sistemas Inteligentes en el diseño y fabricación de una silla de ruedas autónoma utilizando sistemas electrónicos y Machine Learning.",
                link: "https://www.comillas.edu/",
                logo: "assets/icons/experience/comillas.png",
                fallback: "ICAI"
            }
        ],
        education: [
            {
                degree: "Máster en Inteligencia Artificial Avanzada",
                institution: "Universidad Pontificia Comillas, ETSI ICAI",
                location: "Madrid, España",
                date: "Sep 2024 – Actualidad",
                description: "Máster centrado en Deep Learning, Visión por Computador, NLP, Modelos Generativos y técnicas avanzadas de Inteligencia Artificial.",
                link: "https://www.comillas.edu/postgrados/master-universitario-en-inteligencia-artificial/#plan",
                logo: "assets/icons/education/comillas.png",
                fallback: "ICAI"
            },
            {
                degree: "Grado en Ingeniería Matemática e Inteligencia Artificial",
                institution: "Universidad Pontificia Comillas, ETSI ICAI",
                location: "Madrid, España",
                date: "2020 – 2024",
                description: "Programa de cinco años combinando una sólida base matemática con aplicaciones en Inteligencia Artificial. Trabajo Fin de Grado sobre Deep Learning aplicado a imagen médica.",
                link: "https://www.comillas.edu/grados/grado-en-ingenieria-matematica-e-inteligencia-artificial-imat/#planestudios",
                logo: "assets/icons/education/comillas.png",
                fallback: "ICAI"
            }
        ],
        projects: [
            {
                title: "Detección de Tumores Renales (TC)",
                tech: "PyTorch, CNNs, Visión por Computador, Imagen Médica",
                description: "Segmentación automática de tumores renales en imágenes de TC usando redes neuronales convolucionales. El pipeline cubre preprocesado, entrenamiento y evaluación cuantitativa sobre benchmarks de imagen médica.",
                link: "https://github.com/joaquinmaciias/Kidney-tumor-detection-in-CT-images",
                image: "assets/projects/medical_img.png",
                imageId: "kidney"
            },
            {
                title: "Vision Transformer (ViT)",
                tech: "PyTorch, Transformers, Visión por Computador",
                description: "Implementación desde cero de Vision Transformers (ViT) en PyTorch. Cubre patch embeddings, atención multi-cabeza, bucle de entrenamiento y evaluación en benchmarks de clasificación de imágenes.",
                link: "https://github.com/joaquinmaciias/VisionTransformer-PyTorch",
                image: "assets/projects/ViT.png",
                imageId: "vit"
            },
            {
                title: "Fine-Tuning de Llama 3.1",
                tech: "Llama 3.1, LoRA, Hugging Face, NLP",
                description: "Fine-tuning de Llama 3.1 para tareas instruccionales con guías reproducibles. Explora fine-tuning eficiente en parámetros, preparación de datasets y evaluación.",
                link: "https://github.com/joaquinmaciias/Llama-3.1---Fine_Tuning_for_Instruction_based",
                image: "assets/projects/Fine_tuning.png",
                imageId: "llama"
            },
            {
                title: "Latent Diffusion Models (LDM)",
                tech: "PyTorch, Hugging Face Diffusers, IA Generativa",
                description: "Implementación paso a paso del pipeline de Latent Diffusion con Hugging Face Diffusers. Estudia la arquitectura VAE + difusión para una generación de imágenes más eficiente.",
                link: "https://github.com/joaquinmaciias/Laten_Diffusion_Models---Hugging_Face",
                image: "assets/projects/LDM.png",
                imageId: "ldm"
            },
            {
                title: "DDPM con Diffusers",
                tech: "PyTorch, DDPM, Modelos de Difusión",
                description: "Entrenamiento y muestreo con Denoising Diffusion Probabilistic Models; comparación con DDIM y análisis de la calidad de las muestras generadas.",
                link: "https://github.com/joaquinmaciias/Denoising_Diffusion_Probabilistic_Models---DDPM",
                image: "assets/projects/DDPM.png",
                imageId: "ddpm"
            },
            {
                title: "Inicialización de RNN y LSTM",
                tech: "PyTorch, RNN, LSTM, Optimización",
                description: "Estudio del impacto de la inicialización de pesos sobre la estabilidad y convergencia de RNN/LSTM. Experimentos reproducibles comparando esquemas de inicialización.",
                link: "https://github.com/joaquinmaciias/Initialization-RNNs-LSTM",
                image: "assets/projects/Ini_RNN_LSTM.png",
                imageId: "rnn-init"
            }
        ],
        skills: {
            "Lenguajes de Programación": [
                "Python (Avanzado)",
                "SQL",
                "R",
                "HTML/CSS/JS"
            ],
            "IA y Machine Learning": [
                "Machine Learning",
                "Deep Learning",
                "Visión por Computador",
                "Procesamiento del Lenguaje Natural (NLP)",
                "Modelos Generativos",
                "Transformers"
            ],
            "Herramientas y Frameworks": [
                "PyTorch",
                "NumPy",
                "pandas",
                "scikit-learn",
                "OpenCV",
                "Hugging Face",
                "Git",
                "Linux"
            ],
            "Datos y BI": [
                "MySQL",
                "MongoDB",
                "ETL",
                "APIs",
                "Power BI",
                "Tableau",
                "QlikSense",
                "Hue"
            ],
            "Idiomas": [
                "Español (Nativo)",
                "Inglés (Avanzado)"
            ]
        }
    }
};

// ===================================
// Timeline Data (Journey Section)
// ===================================
// Dates use YYYY-MM format.
// type: "academic" | "professional" | "exchange"
// Use end: "present" for ongoing events.
const timelineData = {
    rangeStart: "2020-09",
    rangeEnd: "2026-09",
    events: {
        en: [
            {
                type: "academic",
                title: "BE Mathematical Engineering & AI",
                institution: "Comillas ICAI",
                start: "2020-09",
                end: "2024-06",
                logo: "assets/icons/education/comillas.png",
                fallback: "ICAI"
            },
            {
                type: "academic",
                title: "MSc Advanced Artificial Intelligence",
                institution: "Comillas ICAI",
                start: "2024-09",
                end: "present",
                logo: "assets/icons/education/comillas.png",
                fallback: "ICAI"
            },
            {
                type: "professional",
                title: "Project Member — SocialTech Challenge",
                institution: "Comillas ICAI",
                start: "2023-10",
                end: "2024-06",
                logo: "assets/icons/experience/comillas.png",
                fallback: "ICAI"
            },
            {
                type: "professional",
                title: "Data Analyst Intern",
                institution: "Redsys",
                start: "2024-06",
                end: "2024-08",
                logo: "assets/icons/experience/redsys.png",
                fallback: "RDS"
            },
            {
                type: "professional",
                title: "Internal Audit Intern",
                institution: "BBVA",
                start: "2025-02",
                end: "2025-08",
                logo: "assets/icons/experience/bbva.png",
                fallback: "BBVA"
            }
        ],
        es: [
            {
                type: "academic",
                title: "Grado en Ingeniería Matemática e IA",
                institution: "Comillas ICAI",
                start: "2020-09",
                end: "2024-06",
                logo: "assets/icons/education/comillas.png",
                fallback: "ICAI"
            },
            {
                type: "academic",
                title: "Máster en Inteligencia Artificial Avanzada",
                institution: "Comillas ICAI",
                start: "2024-09",
                end: "present",
                logo: "assets/icons/education/comillas.png",
                fallback: "ICAI"
            },
            {
                type: "professional",
                title: "Project Member — SocialTech Challenge",
                institution: "Comillas ICAI",
                start: "2023-10",
                end: "2024-06",
                logo: "assets/icons/experience/comillas.png",
                fallback: "ICAI"
            },
            {
                type: "professional",
                title: "Becario – Análisis de Datos",
                institution: "Redsys",
                start: "2024-06",
                end: "2024-08",
                logo: "assets/icons/experience/redsys.png",
                fallback: "RDS"
            },
            {
                type: "professional",
                title: "Becario – Auditoría Interna",
                institution: "BBVA",
                start: "2025-02",
                end: "2025-08",
                logo: "assets/icons/experience/bbva.png",
                fallback: "BBVA"
            }
        ]
    }
};

// ===================================
// "Currently" block (footer)
// ===================================
// Edit these values whenever you want. The UI pulls from here.
const currentlyData = {
    en: {
        reading: "—",
        building: "Master's Thesis on Advanced AI",
        focus: "First full-time opportunity in ML / CV / NLP"
    },
    es: {
        reading: "—",
        building: "Trabajo Fin de Máster en IA Avanzada",
        focus: "Primera oportunidad full-time en ML / CV / NLP"
    }
};

// Export for use in script.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { translations, portfolioDataTranslations, timelineData, currentlyData };
}
