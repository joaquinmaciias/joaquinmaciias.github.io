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
            subtitle: "Forward Deployed Engineer @ Accenture · MSc in Advanced AI @ ICAI",
            description: "Mathematical and AI Engineer building LLM-based agents and applied AI solutions — from prototype to production.",
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
            p1: "Hi! I'm Joaquín, a Mathematical and AI Engineer currently working as a <strong>Forward Deployed Engineer at Accenture</strong>, where I design and implement <strong>LLM-based agents</strong> for enterprise clients. I'm also pursuing an <strong>MSc in Advanced Artificial Intelligence</strong> at <strong>Comillas Pontifical University – ICAI</strong> (Madrid).",
            p2: "Previously I led an <strong>internal Generative-AI pilot at BBVA</strong> (Internal Audit), worked on payments analytics at <strong>Redsys</strong>, and built <strong>kidney tumor segmentation models</strong> with Deep Learning for my Bachelor's Thesis (9.5/10) in collaboration with SYCAI Medical.",
            p3: "I'm passionate about <strong>Applied AI</strong>: AI Agents, Generative Models and Deep Learning, with a special interest in financial technology and AI for healthcare."
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
            subtitle: "Forward Deployed Engineer @ Accenture · Máster en IA Avanzada @ ICAI",
            description: "Ingeniero Matemático y de IA construyendo agentes basados en LLMs y soluciones de IA aplicada — del prototipo a producción.",
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
            p1: "¡Hola! Soy Joaquín, Ingeniero Matemático y de IA. Actualmente trabajo como <strong>Forward Deployed Engineer en Accenture</strong>, donde diseño e implemento <strong>agentes basados en LLMs</strong> para clientes empresariales. Además, curso el <strong>Máster en Inteligencia Artificial Avanzada</strong> en la <strong>Universidad Pontificia Comillas – ICAI</strong> (Madrid).",
            p2: "Anteriormente lideré un <strong>piloto interno de IA Generativa en BBVA</strong> (Auditoría Interna), trabajé en analítica de pagos en <strong>Redsys</strong> y desarrollé <strong>modelos de segmentación de tumores renales</strong> con Deep Learning en mi Trabajo Fin de Grado (9,5/10), en colaboración con SYCAI Medical.",
            p3: "Me apasiona la <strong>IA Aplicada</strong>: Agentes de IA, Modelos Generativos y Deep Learning, con especial interés en tecnología financiera e IA para la salud."
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
                title: "AI Native Software Engineer – Forward Deployed Engineer",
                company: "Accenture",
                location: "Madrid, Spain",
                date: "Sep 2026 – Present",
                description: "Design and implement LLM-based agents for enterprise clients: tool use, retrieval (RAG), orchestration and evaluation, from prototype to production.",
                link: "https://www.accenture.com/",
                logo: "assets/icons/experience/accenture.png",
                fallback: "ACN"
            },
            {
                title: "AI & Data Analytics Intern",
                company: "BBVA",
                location: "Madrid, Spain",
                date: "Feb 2025 – Aug 2025",
                description: "Led the internal pilot of Generative-AI tools (GPT-4-class assistants, Gemini) within Internal Audit: identified concrete audit use cases, drafted a risk-evaluation framework for AI adoption in banking, and raised cross-team awareness of AI-specific risks. Automated recurring control tests with Python data pipelines, reducing manual workload on quarterly reviews.",
                link: "https://www.bbva.com/en/",
                logo: "assets/icons/experience/bbva.png",
                fallback: "BBVA"
            },
            {
                title: "Research Collaboration – Bachelor's Thesis",
                company: "SYCAI Medical",
                location: "Barcelona, Spain",
                date: "Sep 2024 – May 2025",
                description: "Built and evaluated 8 deep learning architectures (2D/3D U-Net, nnU-Net 2D/3D/cascade, Rel-UNet, MONAI Auto3DSeg) for automatic kidney-tumor segmentation on 1,299 CT scans (KiTS19/21/23). The best model (nnU-Net cascade) reached a tumor Dice of 0.85, with uncertainty quantification and Grad-CAM explainability to flag low-confidence regions for clinical review. Grade: 9.5/10.",
                link: "https://www.sycaimedical.com/",
                logo: "assets/icons/experience/sycai.png",
                fallback: "SYC"
            },
            {
                title: "Data Analyst Intern",
                company: "Redsys",
                location: "Madrid, Spain",
                date: "Jun 2024 – Aug 2024",
                description: "Processed large-scale payments data using SQL and Hue, and delivered an interactive Qlik Sense dashboard for acquiring and issuing transactions, defining KPIs with stakeholders and training key users.",
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
                date: "Sep 2025 – Present",
                description: "Master's programme focused on Deep Learning, Computer Vision, NLP, Generative Models and Advanced AI techniques.",
                link: "https://www.comillas.edu/postgrados/master-universitario-en-inteligencia-artificial/#plan",
                logo: "assets/icons/education/comillas.png",
                fallback: "ICAI"
            },
            {
                degree: "BE in Mathematical Engineering and AI",
                institution: "Comillas Pontifical University, ETSI ICAI",
                location: "Madrid, Spain",
                date: "2021 – 2025",
                description: "Four-year programme combining a strong mathematical foundation with applications in Artificial Intelligence. Final Thesis on Deep Learning for medical imaging.",
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
                image: "assets/projects/kidney_demo.png",
                imageId: "kidney"
            },
            {
                title: "Vision Transformer (ViT)",
                tech: "PyTorch, Transformers, Computer Vision",
                description: "From-scratch implementation of Vision Transformers (ViT) in PyTorch. Covers patch embeddings, multi-head attention, training loop and evaluation on image-classification benchmarks.",
                link: "https://github.com/joaquinmaciias/VisionTransformer-PyTorch",
                image: "assets/projects/vit_architecture.png",
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
                image: "assets/projects/LDM_img.png",
                imageId: "ldm"
            },
            {
                title: "DDPM with Diffusers",
                tech: "PyTorch, DDPM, Diffusion Models",
                description: "Training and sampling with Denoising Diffusion Probabilistic Models; comparison with DDIM and quality analysis of generated samples.",
                link: "https://github.com/joaquinmaciias/Denoising_Diffusion_Probabilistic_Models---DDPM",
                image: "assets/projects/DDPM_image.png",
                imageId: "ddpm"
            },
            {
                title: "RNN & LSTM Initialization",
                tech: "PyTorch, RNN, LSTM, Optimization",
                description: "Study of the impact of weight initialization on RNN/LSTM stability and convergence. Reproducible experiments comparing initialization schemes.",
                link: "https://github.com/joaquinmaciias/Initialization-RNNs-LSTM",
                image: "assets/projects/LSTM_models2.png",
                imageId: "rnn-init"
            }
        ],
        skills: {
            "Programming Languages": [
                "Python (Advanced)",
                "SQL",
                "JavaScript"
            ],
            "AI & Machine Learning": [
                "Machine Learning",
                "Deep Learning",
                "Computer Vision",
                "Natural Language Processing",
                "Generative Models",
                "Reinforcement Learning",
                "Geometric AI",
                "Probabilistic AI",
                "Explainable AI",
                "AI Agents"
            ],
            "Tools & Frameworks": [
                "PyTorch",
                "Hugging Face",
                "LangChain",
                "Scikit-learn",
                "NumPy",
                "Pandas",
                "OpenCV"
            ],
            "MLOps & Infrastructure": [
                "Docker",
                "Git",
                "MLflow",
                "Kubernetes",
                "Google Cloud"
            ],
            "Languages": [
                "Spanish (Native)",
                "English (C1 – TOEFL iBT)"
            ]
        }
    },
    es: {
        experience: [
            {
                title: "AI Native Software Engineer – Forward Deployed Engineer",
                company: "Accenture",
                location: "Madrid, España",
                date: "Sep 2026 – Actualidad",
                description: "Diseño e implementación de agentes basados en LLMs para clientes empresariales: uso de herramientas, recuperación (RAG), orquestación y evaluación, del prototipo a producción.",
                link: "https://www.accenture.com/es-es",
                logo: "assets/icons/experience/accenture.png",
                fallback: "ACN"
            },
            {
                title: "Becario – IA y Análisis de Datos",
                company: "BBVA",
                location: "Madrid, España",
                date: "Feb 2025 – Ago 2025",
                description: "Lideré el piloto interno de herramientas de IA Generativa (asistentes tipo GPT-4, Gemini) en Auditoría Interna: identificación de casos de uso concretos, elaboración de un marco de evaluación de riesgos para la adopción de IA en banca y concienciación sobre riesgos específicos de la IA. Automaticé pruebas de control recurrentes con pipelines de datos en Python, reduciendo la carga manual en las revisiones trimestrales.",
                link: "https://www.bbva.com/",
                logo: "assets/icons/experience/bbva.png",
                fallback: "BBVA"
            },
            {
                title: "Colaboración de Investigación – Trabajo Fin de Grado",
                company: "SYCAI Medical",
                location: "Barcelona, España",
                date: "Sep 2024 – May 2025",
                description: "Desarrollo y evaluación de 8 arquitecturas de deep learning (U-Net 2D/3D, nnU-Net 2D/3D/cascade, Rel-UNet, MONAI Auto3DSeg) para la segmentación automática de tumores renales en 1.299 TC (KiTS19/21/23). El mejor modelo (nnU-Net cascade) alcanzó un Dice tumoral de 0,85, con cuantificación de incertidumbre y explicabilidad (Grad-CAM) para señalar regiones de baja confianza a revisión clínica. Nota: 9,5/10.",
                link: "https://www.sycaimedical.com/",
                logo: "assets/icons/experience/sycai.png",
                fallback: "SYC"
            },
            {
                title: "Becario – Departamento de Análisis de Datos",
                company: "Redsys",
                location: "Madrid, España",
                date: "Jun 2024 – Ago 2024",
                description: "Procesamiento de datos de pagos a gran escala con SQL y Hue, y desarrollo de un dashboard interactivo en Qlik Sense para transacciones de adquirencia y emisión, definiendo KPIs con los stakeholders y formando a usuarios clave.",
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
                date: "Sep 2025 – Actualidad",
                description: "Máster centrado en Deep Learning, Visión por Computador, NLP, Modelos Generativos y técnicas avanzadas de Inteligencia Artificial.",
                link: "https://www.comillas.edu/postgrados/master-universitario-en-inteligencia-artificial/#plan",
                logo: "assets/icons/education/comillas.png",
                fallback: "ICAI"
            },
            {
                degree: "Grado en Ingeniería Matemática e Inteligencia Artificial",
                institution: "Universidad Pontificia Comillas, ETSI ICAI",
                location: "Madrid, España",
                date: "2021 – 2025",
                description: "Programa de cuatro años combinando una sólida base matemática con aplicaciones en Inteligencia Artificial. Trabajo Fin de Grado sobre Deep Learning aplicado a imagen médica.",
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
                image: "assets/projects/kidney_demo.png",
                imageId: "kidney"
            },
            {
                title: "Vision Transformer (ViT)",
                tech: "PyTorch, Transformers, Visión por Computador",
                description: "Implementación desde cero de Vision Transformers (ViT) en PyTorch. Cubre patch embeddings, atención multi-cabeza, bucle de entrenamiento y evaluación en benchmarks de clasificación de imágenes.",
                link: "https://github.com/joaquinmaciias/VisionTransformer-PyTorch",
                image: "assets/projects/vit_architecture.png",
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
                image: "assets/projects/LDM_img.png",
                imageId: "ldm"
            },
            {
                title: "DDPM con Diffusers",
                tech: "PyTorch, DDPM, Modelos de Difusión",
                description: "Entrenamiento y muestreo con Denoising Diffusion Probabilistic Models; comparación con DDIM y análisis de la calidad de las muestras generadas.",
                link: "https://github.com/joaquinmaciias/Denoising_Diffusion_Probabilistic_Models---DDPM",
                image: "assets/projects/DDPM_image.png",
                imageId: "ddpm"
            },
            {
                title: "Inicialización de RNN y LSTM",
                tech: "PyTorch, RNN, LSTM, Optimización",
                description: "Estudio del impacto de la inicialización de pesos sobre la estabilidad y convergencia de RNN/LSTM. Experimentos reproducibles comparando esquemas de inicialización.",
                link: "https://github.com/joaquinmaciias/Initialization-RNNs-LSTM",
                image: "assets/projects/LSTM_models2.png",
                imageId: "rnn-init"
            }
        ],
        skills: {
            "Lenguajes de Programación": [
                "Python (Avanzado)",
                "SQL",
                "JavaScript"
            ],
            "IA y Machine Learning": [
                "Machine Learning",
                "Deep Learning",
                "Visión por Computador",
                "Procesamiento del Lenguaje Natural (NLP)",
                "Modelos Generativos",
                "Aprendizaje por Refuerzo",
                "IA Geométrica",
                "IA Probabilística",
                "IA Explicable",
                "Agentes de IA"
            ],
            "Herramientas y Frameworks": [
                "PyTorch",
                "Hugging Face",
                "LangChain",
                "Scikit-learn",
                "NumPy",
                "Pandas",
                "OpenCV"
            ],
            "MLOps e Infraestructura": [
                "Docker",
                "Git",
                "MLflow",
                "Kubernetes",
                "Google Cloud"
            ],
            "Idiomas": [
                "Español (Nativo)",
                "Inglés (C1 – TOEFL iBT)"
            ]
        }
    }
};

// ===================================
// Timeline Data (Journey Section)
// ===================================
// Dates use YYYY-MM format.
// type: "academic" | "professional" | "exchange"
// label (optional): short name shown on the card instead of the institution
// Use end: "present" for ongoing events.
const timelineData = {
    rangeStart: "2021-09",
    rangeEnd: "2026-12",
    events: {
        en: [
            {
                type: "academic",
                title: "BE Mathematical Engineering & AI",
                label: "BE IMAT · ICAI",
                institution: "Comillas ICAI",
                start: "2021-09",
                end: "2025-05",
                logo: "assets/icons/education/comillas.png",
                fallback: "ICAI"
            },
            {
                type: "academic",
                title: "MSc Advanced Artificial Intelligence",
                label: "MSc AI · ICAI",
                institution: "Comillas ICAI",
                start: "2025-09",
                end: "present",
                logo: "assets/icons/education/comillas.png",
                fallback: "ICAI"
            },
            {
                type: "professional",
                title: "Project Member — SocialTech Challenge",
                label: "SocialTech · ICAI",
                institution: "Comillas ICAI",
                start: "2023-10",
                end: "2024-06",
                logo: "assets/icons/experience/comillas.png",
                fallback: "ICAI"
            },
            {
                type: "professional",
                title: "Research Collaboration",
                institution: "SYCAI Medical",
                start: "2024-09",
                end: "2025-05",
                logo: "assets/icons/experience/sycai.png",
                fallback: "SYC"
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
                title: "AI & Data Analytics Intern",
                institution: "BBVA",
                start: "2025-02",
                end: "2025-08",
                logo: "assets/icons/experience/bbva.png",
                fallback: "BBVA"
            },
            {
                type: "professional",
                title: "Forward Deployed Engineer",
                institution: "Accenture",
                start: "2026-09",
                end: "present",
                logo: "assets/icons/experience/accenture.png",
                fallback: "ACN"
            }
        ],
        es: [
            {
                type: "academic",
                title: "Grado en Ingeniería Matemática e IA",
                label: "Grado IMAT · ICAI",
                institution: "Comillas ICAI",
                start: "2021-09",
                end: "2025-05",
                logo: "assets/icons/education/comillas.png",
                fallback: "ICAI"
            },
            {
                type: "academic",
                title: "Máster en Inteligencia Artificial Avanzada",
                label: "Máster IA · ICAI",
                institution: "Comillas ICAI",
                start: "2025-09",
                end: "present",
                logo: "assets/icons/education/comillas.png",
                fallback: "ICAI"
            },
            {
                type: "professional",
                title: "Project Member — SocialTech Challenge",
                label: "SocialTech · ICAI",
                institution: "Comillas ICAI",
                start: "2023-10",
                end: "2024-06",
                logo: "assets/icons/experience/comillas.png",
                fallback: "ICAI"
            },
            {
                type: "professional",
                title: "Colaboración de Investigación",
                institution: "SYCAI Medical",
                start: "2024-09",
                end: "2025-05",
                logo: "assets/icons/experience/sycai.png",
                fallback: "SYC"
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
                title: "Becario – IA y Análisis de Datos",
                institution: "BBVA",
                start: "2025-02",
                end: "2025-08",
                logo: "assets/icons/experience/bbva.png",
                fallback: "BBVA"
            },
            {
                type: "professional",
                title: "Forward Deployed Engineer",
                institution: "Accenture",
                start: "2026-09",
                end: "present",
                logo: "assets/icons/experience/accenture.png",
                fallback: "ACN"
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
        building: "Master's Thesis: Digital Twin with LLMs",
        focus: "Working on Applied AI projects"
    },
    es: {
        reading: "—",
        building: "Trabajo Fin de Máster: Digital Twin con LLMs",
        focus: "Trabajando en proyectos de IA Aplicada"
    }
};

// Export for use in script.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { translations, portfolioDataTranslations, timelineData, currentlyData };
}
