export type Locale = "en" | "es";

export type Metric = {
  value: string;
  label: string;
  context: string;
};

export type Job = {
  period: string;
  role: string;
  company: string;
  context: string;
  achievements: string[];
  tech: string[];
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type Project = {
  name: string;
  description: string;
  tech: string[];
};

export type UIStrings = {
  nav: {
    experience: string;
    skills: string;
    projects: string;
    contact: string;
    downloadCv: string;
  };
  hero: {
    headline: string;
    getInTouch: string;
  };
  sections: {
    experience: string;
    skills: string;
    projects: string;
    contact: string;
  };
  footer: {
    heading: string;
    subhead: string;
    languagesLabel: string;
    educationLabel: string;
    certificationsLabel: string;
  };
};

export type Content = {
  profile: {
    name: string;
    role: string;
    location: string;
    email: string;
    linkedin: string;
    github: string;
    cvPath: string;
    summary: string;
  };
  metrics: Metric[];
  experience: Job[];
  skillGroups: SkillGroup[];
  projects: Project[];
  languages: string;
  education: string;
  certifications: string;
  ui: UIStrings;
};

const en: Content = {
  profile: {
    name: "Richard Rodas",
    role: "Fullstack Engineer",
    location: "Lima, Peru · Remote (US/Canada)",
    email: "richard@rodasridar.dev",
    linkedin: "https://linkedin.com/in/rodasridar",
    github: "https://github.com/rodasridar",
    cvPath: "/Richard_Rodas_CV_FullStack_Developer.pdf",
    summary:
      "Fullstack Engineer with 5+ years shipping production web apps end to end, from Angular, React and Next.js micro-frontends to Node.js and Nest.js microservices, for top-tier banks, enterprise clients across Latin America, and US",
  },
  metrics: [
    {
      value: "~90%",
      label: "less manual screening",
      context: "AI candidate matching · ManpowerGroup",
    },
    {
      value: "~60%",
      label: "faster transaction processing",
      context: "Biometric digital signature · Globant",
    },
    {
      value: "~60%",
      label: "fewer security vulnerabilities",
      context: "Enterprise SSO · ADEX",
    },
  ],
  experience: [
    {
      period: "2026",
      role: "Senior Full Stack Developer",
      company: "ManpowerGroup",
      context:
        "Global AI-powered talent acquisition suite used by 100K+ recruiters",
      achievements: [
        "Built the Candidate Match module (Angular 21 + TypeScript), the core AI matching feature that processes batches of up to 1,000 candidates per run, cutting manual screening work by ~90%. Integrated third-party services (Vyndly) against a Nest.js backend.",
        "Developed an organization-wide blog and content platform (100K+ users): 20+ UIs across 4 modules, from design to production.",
        "Integrated REST microservices (Nest.js) into the Nx monorepo, connecting Angular modules to backend services.",
        "Automated repetitive content workflows with reusable AI skills, saving ~4 hours per week and standardizing production across teams.",
      ],
      tech: [
        "Angular 21",
        "TypeScript",
        "NgRx",
        "PrimeNG",
        "Nx",
        "Jest",
        "Cypress",
        "Nest.js",
        "Node.js",
        "Azure DevOps",
      ],
    },
    {
      period: "2025-2026",
      role: "Senior Full Stack Developer",
      company: "Globant",
      context:
        "High-security branch platform for agents of a leading regional bank",
      achievements: [
        "Built the frontend of a biometric digital-signature flow (card + biometrics) for signing bank contracts, cutting agents' transaction processing time by ~60%.",
        "Led the frontend of the Angular 14 to 16 migration while keeping the agent platform in production.",
        "Developed secure UIs for sensitive banking operations under strict security and compliance requirements.",
        "Contributed backend REST APIs (Nest.js, TypeScript) within a microservices architecture, owning features beyond the Angular UI.",
      ],
      tech: [
        "Angular 14/16",
        "TypeScript",
        "NgRx",
        "RxJS",
        "Nest.js",
        "Node.js",
        "PostgreSQL",
        "AWS Lambda",
        "Micro-frontends",
      ],
    },
    {
      period: "2024-2025",
      role: "Full Stack Developer",
      company: "Globant",
      context:
        "Digital FX exchange product with preferential rates at a leading regional bank",
      achievements: [
        "Built user-facing UIs for the FX flow inside a micro-frontend architecture (Angular + React), using NgRx/Redux and RxJS for state management.",
        "Executed the Angular 13 to 16 migration and implemented XSRF token protection against CSRF attacks.",
        "Instrumented key flows with GA4 and Adobe Analytics for product and conversion tracking.",
        "Contributed backend REST APIs (Nest.js, TypeScript) within a microservices architecture.",
      ],
      tech: [
        "Angular 13/16",
        "TypeScript",
        "NgRx",
        "RxJS",
        "React",
        "Nest.js",
        "Node.js",
        "PostgreSQL",
        "Micro-frontends",
        "GA4",
      ],
    },
    {
      period: "2023-2024",
      role: "Semi-Senior Full Stack Developer",
      company: "Social Capital Group",
      context:
        "Internal business platforms owned end to end, from UI to database",
      achievements: [
        "Developed and optimized backend microservices (Nest.js) and the Angular frontend within a micro-frontend architecture.",
        "Designed and optimized MySQL databases and data-access layers.",
        "Implemented CI/CD pipelines and supported deployments on AWS (S3, Lambda, RDS).",
      ],
      tech: [
        "Angular",
        "TypeScript",
        "NgRx",
        "Tailwind CSS",
        "Nest.js",
        "Node.js",
        "Docker",
        "AWS",
        "MySQL",
        "Micro-frontends",
      ],
    },
    {
      period: "2023",
      role: "Semi-Senior Full Stack Developer",
      company: "T-ID Solutions",
      context: "Vehicle-identification solutions for the German TÖNNJES group",
      achievements: [
        "Migrated a legacy ASP.NET + Angular monolith to a microservices architecture (Nest.js backend, Angular and React micro-frontends), improving application performance by ~50%.",
        "Performed integration testing and supported escalated technical incidents.",
      ],
      tech: [
        "Angular",
        "React",
        "TypeScript",
        "NgRx",
        "Nest.js",
        "Node.js",
        "PostgreSQL",
        "MongoDB",
        "Azure DevOps",
        "Docker",
      ],
    },
    {
      period: "2022-2023",
      role: "Semi-Senior Full Stack Developer",
      company: "ADEX",
      context:
        "Internal web applications for Peru's leading exporters association",
      achievements: [
        "Designed and built a company-wide Single Sign-On (Angular + Nest.js) that centralized employee access, with a security audit measuring ~60% fewer vulnerabilities.",
        "Delivered dashboards, advanced filters and search improvements across management modules in Agile sprints.",
        "Built components, tests and refactors in React for an internal OKR management system.",
      ],
      tech: [
        "React",
        "Angular",
        "TypeScript",
        "NgRx",
        "Tailwind CSS",
        "Nest.js",
        "Node.js",
        "MySQL",
        "AWS",
        "Figma",
      ],
    },
    {
      period: "2021-2022",
      role: "Junior Full Stack Developer",
      company: "Vida Software",
      context:
        "Multi-tenant SaaS platform for business data analytics with embedded Power BI",
      achievements: [
        "Built frontend features (Angular) and backend services (Node.js/Express) powering the multi-tenant SaaS platform.",
        "Designed and managed the PostgreSQL layer supporting each client's data models and reporting.",
        "Integrated Power BI dashboards so each client could visualize its own business data.",
      ],
      tech: [
        "Node.js",
        "Express",
        "Angular",
        "TypeScript",
        "NgRx",
        "PostgreSQL",
        "REST APIs",
      ],
    },
  ],
  skillGroups: [
    {
      title: "Frontend",
      items: [
        "Angular",
        "TypeScript",
        "RxJS",
        "NgRx",
        "React",
        "Next.js",
        "Micro-frontends",
        "Tailwind CSS",
        "PrimeNG",
      ],
    },
    {
      title: "Backend & Data",
      items: [
        "Node.js",
        "Nest.js",
        "Express",
        "REST APIs",
        "Microservices",
        "PostgreSQL",
        "MySQL",
        "MongoDB",
      ],
    },
    {
      title: "Cloud & DevOps",
      items: [
        "AWS",
        "CloudWatch",
        "Azure DevOps",
        "Docker",
        "CI/CD",
        "Nx",
        "Git",
      ],
    },
    {
      title: "Testing & Practices",
      items: [
        "Jest",
        "Jasmine",
        "Cypress",
        "Karma",
        "Agile / Scrum",
        "XSRF protection",
      ],
    },
  ],
  projects: [
    {
      name: "Magrolabs",
      description:
        "Solo-built and operated the full production stack for a D2C supplement brand: a Node.js/Express/Prisma API, a Next.js storefront, PostgreSQL, payment webhooks, and LLM-powered features with full observability.",
      tech: ["Next.js", "Node.js", "Express", "Prisma", "PostgreSQL", "LLMs"],
    },
  ],
  languages: "Spanish (native) · English (C1) · Portuguese (professional)",
  education:
    "Systems Engineering, Universidad Peruana de Ciencias Aplicadas (2023) · Informatics, CIBERTEC (2022)",
  certifications:
    "Python Data Analytics by Meta · Agile Software Development · Artificial Intelligence Fundamentals",
  ui: {
    nav: {
      experience: "Experience",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
      downloadCv: "Download CV",
    },
    hero: {
      headline: "Fullstack engineering for banking and enterprise.",
      getInTouch: "Get in touch",
    },
    sections: {
      experience: "Experience",
      skills: "Skills",
      projects: "Side Projects",
      contact: "Contact",
    },
    footer: {
      heading:
        "Open to fullstack and frontend roles, remote across US and Canada.",
      subhead:
        "If you are building for banking, enterprise, or AI-powered products, let’s talk.",
      languagesLabel: "Languages",
      educationLabel: "Education",
      certificationsLabel: "Certifications",
    },
  },
};

const es: Content = {
  profile: {
    name: "Richard Rodas",
    role: "Ingeniero Fullstack",
    location: "Lima, Perú · Remoto",
    email: "richard@rodasridar.dev",
    linkedin: "https://linkedin.com/in/rodasridar",
    github: "https://github.com/rodasridar",
    cvPath: "/Richard_Rodas_CV_FullStack_Developer.pdf",
    summary:
      "Ingeniero Fullstack con más de 5 años desarrollando aplicaciones web en producción de punta a punta, desde micro-frontends en Angular, React y Next.js hasta microservicios en Node.js y Nest.js, para bancos de primer nivel, clientes enterprise en Latinoamérica y US.",
  },
  metrics: [
    {
      value: "~90%",
      label: "menos filtrado manual",
      context: "Matching de candidatos con IA · ManpowerGroup",
    },
    {
      value: "~60%",
      label: "procesamiento de transacciones más rápido",
      context: "Firma digital biométrica · Globant",
    },
    {
      value: "~60%",
      label: "menos vulnerabilidades de seguridad",
      context: "SSO corporativo · ADEX",
    },
  ],
  experience: [
    {
      period: "2026",
      role: "Desarrollador Full Stack Senior",
      company: "ManpowerGroup",
      context:
        "Suite global de adquisición de talento con IA usada por más de 100K reclutadores",
      achievements: [
        "Construí el módulo Candidate Match (Angular 21 + TypeScript), la función central de matching con IA que procesa lotes de hasta 1,000 candidatos por corrida y reduce el filtrado manual en ~90%. Integré servicios de terceros (Vyndly) contra un backend en Nest.js.",
        "Desarrollé una plataforma de blog y contenido para toda la organización (100K+ usuarios): más de 20 interfaces en 4 módulos, del diseño a producción.",
        "Integré microservicios REST (Nest.js) en el monorepo Nx, conectando los módulos de Angular con los servicios de backend.",
        "Automaticé flujos repetitivos de creación de contenido con skills de IA reutilizables, ahorrando ~4 horas por semana y estandarizando la producción entre equipos.",
      ],
      tech: [
        "Angular 21",
        "TypeScript",
        "NgRx",
        "PrimeNG",
        "Nx",
        "Jest",
        "Cypress",
        "Nest.js",
        "Node.js",
        "Azure DevOps",
      ],
    },
    {
      period: "2025-2026",
      role: "Desarrollador Full Stack Senior",
      company: "Globant",
      context:
        "Plataforma de sucursal de alta seguridad para agentes de un banco líder de la región",
      achievements: [
        "Construí el frontend de un flujo de firma digital biométrica (tarjeta + biometría) para firmar contratos bancarios, reduciendo en ~60% el tiempo de procesamiento de transacciones de los agentes.",
        "Lideré el frontend de la migración de Angular 14 a 16 manteniendo la plataforma en producción.",
        "Desarrollé interfaces seguras para operaciones bancarias sensibles bajo estrictos requisitos de seguridad y cumplimiento.",
        "Aporté APIs REST de backend (Nest.js, TypeScript) dentro de una arquitectura de microservicios, tomando responsabilidad más allá de la UI en Angular.",
      ],
      tech: [
        "Angular 14/16",
        "TypeScript",
        "NgRx",
        "RxJS",
        "Nest.js",
        "Node.js",
        "PostgreSQL",
        "AWS Lambda",
        "Micro-frontends",
      ],
    },
    {
      period: "2024-2025",
      role: "Desarrollador Full Stack",
      company: "Globant",
      context:
        "Producto digital de cambio de divisas con tipos preferenciales en un banco líder de la región",
      achievements: [
        "Construí interfaces para el flujo de cambio de divisas dentro de una arquitectura de micro-frontends (Angular + React), usando NgRx/Redux y RxJS para el manejo de estado.",
        "Ejecuté la migración de Angular 13 a 16 e implementé protección con token XSRF contra ataques CSRF.",
        "Instrumenté los flujos clave con GA4 y Adobe Analytics para el seguimiento de producto y conversión.",
        "Aporté APIs REST de backend (Nest.js, TypeScript) dentro de una arquitectura de microservicios.",
      ],
      tech: [
        "Angular 13/16",
        "TypeScript",
        "NgRx",
        "RxJS",
        "React",
        "Nest.js",
        "Node.js",
        "PostgreSQL",
        "Micro-frontends",
        "GA4",
      ],
    },
    {
      period: "2023-2024",
      role: "Desarrollador Full Stack Semi-Senior",
      company: "Social Capital Group",
      context:
        "Plataformas internas de negocio, con responsabilidad de punta a punta, de la UI a la base de datos",
      achievements: [
        "Desarrollé y optimicé microservicios de backend (Nest.js) y el frontend en Angular dentro de una arquitectura de micro-frontends.",
        "Diseñé y optimicé bases de datos MySQL y capas de acceso a datos.",
        "Implementé pipelines de CI/CD y apoyé los despliegues en AWS (S3, Lambda, RDS).",
      ],
      tech: [
        "Angular",
        "TypeScript",
        "NgRx",
        "Tailwind CSS",
        "Nest.js",
        "Node.js",
        "Docker",
        "AWS",
        "MySQL",
        "Micro-frontends",
      ],
    },
    {
      period: "2023",
      role: "Desarrollador Full Stack Semi-Senior",
      company: "T-ID Solutions",
      context:
        "Soluciones de identificación vehicular para el grupo alemán TÖNNJES",
      achievements: [
        "Migré un monolito legado de ASP.NET + Angular a una arquitectura de microservicios (backend en Nest.js, micro-frontends en Angular y React), mejorando el rendimiento de la aplicación en ~50%.",
        "Realicé pruebas de integración y di soporte a incidentes técnicos escalados.",
      ],
      tech: [
        "Angular",
        "React",
        "TypeScript",
        "NgRx",
        "Nest.js",
        "Node.js",
        "PostgreSQL",
        "MongoDB",
        "Azure DevOps",
        "Docker",
      ],
    },
    {
      period: "2022-2023",
      role: "Desarrollador Full Stack Semi-Senior",
      company: "ADEX",
      context:
        "Aplicaciones web internas para la principal asociación de exportadores del Perú",
      achievements: [
        "Diseñé y construí un Single Sign-On corporativo (Angular + Nest.js) que centralizó el acceso de los empleados, con una auditoría de seguridad que midió ~60% menos vulnerabilidades.",
        "Entregué dashboards, filtros avanzados y mejoras de búsqueda en los módulos de gestión en sprints ágiles.",
        "Construí componentes, pruebas y refactorizaciones en React para un sistema interno de gestión de OKR.",
      ],
      tech: [
        "React",
        "Angular",
        "TypeScript",
        "NgRx",
        "Tailwind CSS",
        "Nest.js",
        "Node.js",
        "MySQL",
        "AWS",
        "Figma",
      ],
    },
    {
      period: "2021-2022",
      role: "Desarrollador Full Stack Junior",
      company: "Vida Software",
      context:
        "Plataforma SaaS multi-tenant de analítica de datos de negocio con Power BI embebido",
      achievements: [
        "Construí funcionalidades de frontend (Angular) y servicios de backend (Node.js/Express) que impulsaban la plataforma SaaS multi-tenant.",
        "Diseñé y gestioné la capa de PostgreSQL que soportaba los modelos de datos y reportes de cada cliente.",
        "Integré dashboards de Power BI para que cada cliente pudiera visualizar sus propios datos de negocio.",
      ],
      tech: [
        "Node.js",
        "Express",
        "Angular",
        "TypeScript",
        "NgRx",
        "PostgreSQL",
        "REST APIs",
      ],
    },
  ],
  skillGroups: [
    {
      title: "Frontend",
      items: [
        "Angular",
        "TypeScript",
        "RxJS",
        "NgRx",
        "React",
        "Next.js",
        "Micro-frontends",
        "Tailwind CSS",
        "PrimeNG",
      ],
    },
    {
      title: "Backend y Datos",
      items: [
        "Node.js",
        "Nest.js",
        "Express",
        "REST APIs",
        "Microservicios",
        "PostgreSQL",
        "MySQL",
        "MongoDB",
      ],
    },
    {
      title: "Cloud y DevOps",
      items: [
        "AWS",
        "CloudWatch",
        "Azure DevOps",
        "Docker",
        "CI/CD",
        "Nx",
        "Git",
      ],
    },
    {
      title: "Testing y Prácticas",
      items: [
        "Jest",
        "Jasmine",
        "Cypress",
        "Karma",
        "Agile / Scrum",
        "Protección XSRF",
      ],
    },
  ],
  projects: [
    {
      name: "Magrolabs",
      description:
        "Construí y opero en solitario todo el stack de producción de una marca D2C de suplementos: una API en Node.js/Express/Prisma, un storefront en Next.js, PostgreSQL, webhooks de pago y funcionalidades con IA (LLMs) con observabilidad completa.",
      tech: ["Next.js", "Node.js", "Express", "Prisma", "PostgreSQL", "LLMs"],
    },
  ],
  languages: "Español (nativo) · Inglés (C1) · Portugués (profesional)",
  education:
    "Ingeniería de Sistemas, Universidad Peruana de Ciencias Aplicadas (2023) · Informática, CIBERTEC (2022)",
  certifications:
    "Python Data Analytics por Meta · Desarrollo de Software Ágil · Fundamentos de Inteligencia Artificial",
  ui: {
    nav: {
      experience: "Experiencia",
      skills: "Skills",
      projects: "Proyectos",
      contact: "Contacto",
      downloadCv: "Descargar CV",
    },
    hero: {
      headline: "Ingeniería fullstack para banca y empresas.",
      getInTouch: "Conversemos",
    },
    sections: {
      experience: "Experiencia",
      skills: "Skills",
      projects: "Proyectos",
      contact: "Contacto",
    },
    footer: {
      heading:
        "Disponible para roles fullstack y frontend, remoto en EE. UU. y Canadá.",
      subhead:
        "Si estás construyendo para banca, empresa o productos con IA, conversemos.",
      languagesLabel: "Idiomas",
      educationLabel: "Educación",
      certificationsLabel: "Certificaciones",
    },
  },
};

export const content: Record<Locale, Content> = { en, es };

export const navHrefs = {
  experience: "#experience",
  skills: "#skills",
  projects: "#projects",
  contact: "#contact",
} as const;
