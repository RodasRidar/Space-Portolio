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

export const profile = {
  name: "Richard Rodas",
  role: "Senior Frontend Engineer",
  location: "Lima, Peru · Remote (US time zones)",
  email: "richard@rodasridar.dev",
  linkedin: "https://linkedin.com/in/rodasridar",
  github: "https://github.com/rodasridar",
  cvPath: "/resume.pdf",
  summary:
    "Over five years shipping production software for banking and enterprise — BCP, Citibanamex, Banco Azteca, and ManpowerGroup's global AI talent platform (100K+ users). Core stack: Angular (v13–v21), TypeScript, RxJS and Tailwind, with React in micro-frontend architectures and a full-stack foundation in .NET and Node.js. I use AI agents as a productivity multiplier, not a substitute for engineering judgment.",
};

export const navLinks = [
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const metrics: Metric[] = [
  {
    value: "~90%",
    label: "less manual screening",
    context: "AI candidate matching · ManpowerGroup",
  },
  {
    value: "~60%",
    label: "faster transaction processing",
    context: "Biometric digital signature · Citibanamex",
  },
  {
    value: "~60%",
    label: "fewer security vulnerabilities",
    context: "Enterprise SSO · ADEX",
  },
];

export const experience: Job[] = [
  {
    period: "2026 — Now",
    role: "Senior Frontend Engineer",
    company: "ManpowerGroup",
    context:
      "Global AI-powered talent acquisition suite used by 100K+ recruiters",
    achievements: [
      "Built Candidate Match (Angular 18 + TypeScript), the core AI matching feature — processes batches of up to 1,000 candidates per run, cutting manual screening work by ~90%.",
      "Delivered an organization-wide blog and content platform: 20+ UIs across 4 modules, from design to production.",
      "Automated repetitive content workflows by building reusable AI skills, saving ~4 hours per week and standardizing production across teams.",
    ],
    tech: ["Angular 18", "TypeScript", "RxJS", "Jest", ".NET 8", "Azure DevOps", "Nx"],
  },
  {
    period: "2025 — 2026",
    role: "Senior Frontend Engineer",
    company: "Globant · Citibanamex",
    context:
      "High-security branch platform for agents of Mexico's leading bank",
    achievements: [
      "Built the frontend of a biometric digital signature flow (card + biometrics) for signing banking contracts, cutting agents' transaction processing time by ~60%.",
      "Led the frontend work of the Angular 14 → 16 migration without taking the platform out of production.",
      "Developed secure UIs for sensitive banking operations under strict security and compliance requirements.",
    ],
    tech: ["Angular 14/16", "TypeScript", "RxJS", "Jest", "Jasmine", "REST APIs"],
  },
  {
    period: "2024 — 2025",
    role: "Frontend Engineer",
    company: "Globant · BCP",
    context:
      "Foreign-exchange product (USD⇄PEN) with preferential rates at Peru's largest bank",
    achievements: [
      "Built new UIs for the FX flow inside a micro-frontend architecture (Angular + React), using NgRx and RxJS for state management.",
      "Executed the app's Angular 13 → 16 migration and implemented XSRF token protection against CSRF attacks.",
      "Instrumented key flows with GA4 and Adobe Analytics, enabling product and conversion tracking.",
    ],
    tech: ["Angular 13/16", "TypeScript", "NgRx", "React", "Micro-frontends", "GA4", "Adobe Analytics"],
  },
  {
    period: "2024 — 2025",
    role: "Frontend Engineer (Freelance)",
    company: "10Pearls · Banco Azteca",
    context:
      "Credit withdrawal PWA (Ionic + Angular) for one of Mexico's largest banks",
    achievements: [
      "Built and maintained core UI components for the credit flow, delivering a mobile-first PWA.",
      "Contributed to the migration from Angular 13 to a micro-frontend architecture (Angular + React).",
      "Implemented full marketing and analytics tagging across the funnel: GA, GTM, Meta Pixel, TikTok Pixel and Google Ads conversions.",
    ],
    tech: ["Angular 13", "Ionic", "TypeScript", "React", "GTM", "GA4", "Jasmine", "Karma"],
  },
  {
    period: "2023 — 2024",
    role: "Full Stack Developer",
    company: "Social Capital Group",
    context: "Internal business platforms, from UI to database",
    achievements: [
      "Built and optimized frontend (Angular 15 + Angular Material) and backend (PHP 8.2), including MySQL schema design and query optimization.",
      "Set up CI/CD pipelines and Docker deployments on AWS, reducing manual deployment work.",
    ],
    tech: ["Angular 15", "Angular Material", "PHP 8.2", "MySQL", "Docker", "AWS", "Figma"],
  },
  {
    period: "2022 — 2023",
    role: "Full Stack Developer",
    company: "ADEX",
    context:
      "Internal web applications for Peru's leading exporters association",
    achievements: [
      "Designed and built a company-wide Single Sign-On (Angular + .NET Core 6) that centralized employee access — a security audit measured ~60% fewer vulnerabilities.",
      "Delivered dashboards, advanced filters and search improvements across management modules in Agile sprints.",
    ],
    tech: ["Angular 15", ".NET Core 6", "C#", "SQL Server 2019", "Tailwind CSS"],
  },
];

export const earlierRoles =
  "Earlier — BI Analyst at Vida Software · Database Programmer Analyst at Market Conexión (2021–2022)";

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    items: [
      "Angular (v13–v21)",
      "TypeScript",
      "RxJS",
      "NgRx",
      "React",
      "Micro-frontends",
      "Ionic",
      "Tailwind CSS",
      "Angular Material",
    ],
  },
  {
    title: "Backend & Data",
    items: [
      ".NET / .NET 8",
      "C#",
      "Node.js / Express",
      "REST APIs",
      "SQL Server",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
    ],
  },
  {
    title: "Testing & Quality",
    items: [
      "Jest",
      "Jasmine",
      "Karma",
      "XSRF protection",
      "Secure banking UIs",
    ],
  },
  {
    title: "AI & Tooling",
    items: [
      "LLMs & AI agents in product",
      "Claude / Copilot / Cursor",
      "GA4 / GTM / Adobe Analytics",
      "Azure DevOps",
      "Docker & CI/CD",
      "Nx",
    ],
  },
];

export const projects: Project[] = [
  {
    name: "Magrolabs",
    description:
      "Production e-commerce API with LLM-powered features and full observability.",
    tech: ["Node.js", "Express", "PostgreSQL", "LLMs"],
  },
  {
    name: "Hermes",
    description:
      "Agentic voice-coding pipeline that turns Telegram voice notes into supervised Claude Code sessions.",
    tech: ["Telegram", "Claude Code", "AI agents"],
  },
];

export const languages =
  "Spanish (native) · English (C1) · Portuguese (professional)";

export const education =
  "Systems Engineering, Universidad Peruana de Ciencias Aplicadas (2023)";

export const certifications =
  "Agile Software Development · Artificial Intelligence Fundamentals";
