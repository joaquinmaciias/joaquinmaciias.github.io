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
                title: "Algebraic Reasoning Distiller",
                tech: "Qwen2.5-7B, LoRA, SFT + GRPO, RAG, Symbolic Reasoning",
                description: "Multi-agent system for the SAIR Mathematics Distillation Challenge. Decides whether an equational law implies another over all magmas, combining a symbolic prover (term rewriting + finite magma search), a Chroma+SBERT RAG retriever and a Qwen2.5-7B distiller fine-tuned via SFT → GRPO. All heavy computation is offline; at evaluation only a ≤10 KB cheat sheet and a single LLM call are used.",
                link: "https://github.com/joaquinmaciias/Algebraic-Reasoning-Distiller",
                image: "assets/projects/algebraic_arch.png",
                imageId: "algebraic"
            },
            {
                title: "R2-Dreamer — World Models for Continuous Control",
                tech: "PyTorch, World Models, RSSM, Actor-Critic, Imagination Learning",
                description: "Implementation of R2-Dreamer (ICLR 2026), a World Model agent that learns a latent dynamics model and trains its policy entirely in imagination, without a pixel decoder. Evaluated on CarRacing-v3, Hopper-v5 and Walker Walk with strong sample efficiency.",
                link: "https://github.com/joaquinmaciias/driving-world-model",
                image: "assets/projects/car_racing.gif",
                imageId: "world-model"
            },
            {
                title: "DQN & Rainbow DQN — Pixel Control in MuJoCo",
                tech: "PyTorch, Deep Reinforcement Learning, DQN, Rainbow, CNNs",
                description: "DQN and Rainbow DQN agents trained on continuous-control MuJoCo tasks (Hopper, Walker2d, Humanoid) from raw 84×84 pixel observations. Modular Rainbow extensions (Double, Dueling, PER, NoisyNets, C51, n-step) toggled via config. Rainbow achieves ~4× the reward of vanilla DQN on Hopper.",
                link: "https://github.com/joaquinmaciias/DQN-Rainbow-Pixel-Control",
                image: "assets/projects/rainbow_walker2d.gif",
                imageId: "dqn-rainbow"
            },
            {
                title: "SimCLR — Self-Supervised Learning",
                tech: "PyTorch, Contrastive Learning, ResNet-50, LARS, NT-Xent",
                description: "PyTorch implementation and extension of SimCLR on CIFAR-10. Self-supervised pre-training with NT-Xent loss, linear-probe evaluation, latent-space analysis via t-SNE/PCA, plus advanced add-ons: LARS optimizer, synchronized batch norm, square-root LR scaling and extended augmentations (Sobel, solarization, motion blur).",
                link: "https://github.com/joaquinmaciias/Self-Supervised-Learning-with-SiMCLR",
                image: "https://camo.githubusercontent.com/7ca27709a7db7084598e180f824abf04ee60ca438979c06068268a38d7af8ff1/68747470733a2f2f737468616c6c65732e6769746875622e696f2f6173736574732f636f6e74726173746976652d73656c662d737570657276697365642f636f7665722e706e67",
                imageId: "simclr"
            },
            {
                title: "Uncertainty-Aware Brain Tumor Segmentation",
                tech: "PyTorch, U-Net, Bayesian DL, MC Dropout, Deep Ensembles, Laplace",
                description: "Probabilistic deep learning for brain tumor segmentation on BraTS 2018 with explicit uncertainty quantification. Compares deterministic U-Net, Attention Residual U-Net, MC Dropout, Deep Ensembles, Multi-Head U-Net (MH/VIMH), Stochastic Segmentation Networks and last-layer Laplace under a common training and inference pipeline (WT / TC / ET regions).",
                link: "https://github.com/joaquinmaciias/Uncertainty-Aware-BrainTumor-Segmentation",
                image: "assets/projects/brain_tumor.png",
                imageId: "brain-tumor"
            },
            {
                title: "Neural Networks on Riemannian Manifolds",
                tech: "PyTorch, Geometric Deep Learning, SPDNet, GrNet, Riemannian Optimization",
                description: "Geometric deep learning on Riemannian manifolds: SPDNet for Symmetric Positive Definite matrices and GrNet for the Grassmann manifold. Applied to skeleton-based action recognition on the HDM05 motion-capture dataset. Includes natural-gradient optimization and a comparison against Euclidean baselines.",
                link: "https://github.com/joaquinmaciias/riemannian_geometry",
                image: "assets/projects/skeleton_rotation.gif",
                imageId: "riemannian"
            },
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
                title: "Algebraic Reasoning Distiller",
                tech: "Qwen2.5-7B, LoRA, SFT + GRPO, RAG, Razonamiento Simbólico",
                description: "Sistema multi-agente para el SAIR Mathematics Distillation Challenge. Decide si una ley ecuacional implica a otra sobre todos los magmas, combinando un demostrador simbólico (term rewriting + búsqueda finita de magmas), un retriever RAG con Chroma+SBERT y un distilador Qwen2.5-7B fine-tuneado vía SFT → GRPO. Todo el cómputo pesado es offline; en evaluación solo se usa un cheat-sheet de ≤10 KB y una única llamada al LLM.",
                link: "https://github.com/joaquinmaciias/Algebraic-Reasoning-Distiller",
                image: "assets/projects/algebraic_arch.png",
                imageId: "algebraic"
            },
            {
                title: "R2-Dreamer — World Models para Control Continuo",
                tech: "PyTorch, World Models, RSSM, Actor-Critic, Imagination Learning",
                description: "Implementación de R2-Dreamer (ICLR 2026), un agente de World Models que aprende un modelo de dinámica latente y entrena su política íntegramente en imaginación, sin decoder de píxeles. Evaluado en CarRacing-v3, Hopper-v5 y Walker Walk con alta eficiencia muestral.",
                link: "https://github.com/joaquinmaciias/driving-world-model",
                image: "assets/projects/car_racing.gif",
                imageId: "world-model"
            },
            {
                title: "DQN y Rainbow DQN — Control desde Píxeles en MuJoCo",
                tech: "PyTorch, Aprendizaje por Refuerzo Profundo, DQN, Rainbow, CNNs",
                description: "Agentes DQN y Rainbow DQN entrenados en tareas de control continuo de MuJoCo (Hopper, Walker2d, Humanoid) a partir de observaciones en píxeles 84×84. Extensiones Rainbow modulares (Double, Dueling, PER, NoisyNets, C51, n-step) activables por configuración. Rainbow obtiene ~4× la recompensa de DQN clásico en Hopper.",
                link: "https://github.com/joaquinmaciias/DQN-Rainbow-Pixel-Control",
                image: "assets/projects/rainbow_walker2d.gif",
                imageId: "dqn-rainbow"
            },
            {
                title: "SimCLR — Aprendizaje Auto-Supervisado",
                tech: "PyTorch, Aprendizaje Contrastivo, ResNet-50, LARS, NT-Xent",
                description: "Implementación y extensión de SimCLR en PyTorch sobre CIFAR-10. Pre-entrenamiento auto-supervisado con pérdida NT-Xent, evaluación con linear probing, análisis del espacio latente con t-SNE/PCA, y mejoras: optimizador LARS, BatchNorm sincronizado, escalado raíz-cuadrada del LR y aumentos extendidos (Sobel, solarización, motion blur).",
                link: "https://github.com/joaquinmaciias/Self-Supervised-Learning-with-SiMCLR",
                image: "https://camo.githubusercontent.com/7ca27709a7db7084598e180f824abf04ee60ca438979c06068268a38d7af8ff1/68747470733a2f2f737468616c6c65732e6769746875622e696f2f6173736574732f636f6e74726173746976652d73656c662d737570657276697365642f636f7665722e706e67",
                imageId: "simclr"
            },
            {
                title: "Segmentación de Tumores Cerebrales con Incertidumbre",
                tech: "PyTorch, U-Net, DL Bayesiano, MC Dropout, Deep Ensembles, Laplace",
                description: "Deep learning probabilístico para la segmentación de tumores cerebrales en BraTS 2018, cuantificando explícitamente la incertidumbre. Comparativa de U-Net determinista, Attention Residual U-Net, MC Dropout, Deep Ensembles, Multi-Head U-Net (MH/VIMH), Stochastic Segmentation Networks y aproximación de Laplace en la última capa, todo bajo un mismo pipeline (regiones WT / TC / ET).",
                link: "https://github.com/joaquinmaciias/Uncertainty-Aware-BrainTumor-Segmentation",
                image: "assets/projects/brain_tumor.png",
                imageId: "brain-tumor"
            },
            {
                title: "Redes Neuronales en Variedades Riemannianas",
                tech: "PyTorch, Geometric Deep Learning, SPDNet, GrNet, Optimización Riemanniana",
                description: "Deep learning geométrico sobre variedades Riemannianas: SPDNet para matrices simétricas definidas positivas y GrNet sobre la variedad de Grassmann. Aplicado al reconocimiento de acciones basado en esqueletos sobre el dataset HDM05 de motion capture. Incluye optimización con gradiente natural y comparativa contra baselines euclídeos.",
                link: "https://github.com/joaquinmaciias/riemannian_geometry",
                image: "assets/projects/skeleton_rotation.gif",
                imageId: "riemannian"
            },
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
