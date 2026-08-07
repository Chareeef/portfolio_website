export const links = {
  email: "mailto:youssef.charif.h@gmail.com",
  github: "https://github.com/Chareeef",
  linkedin: "https://www.linkedin.com/in/youssef-charif-hamidi",
  resume: "/Resume - Youssef Charif Hamidi.pdf",
  resumeFr: "/CV – Youssef Charif Hamidi.pdf",
  remoteOtter: "https://remoteotter.com",
  mathVellum:
    "https://play.google.com/store/apps/details?id=com.mathvellum.app",
} as const;

export const remoteOtterOwnership = [
  {
    title: "Product architecture",
    body: "Architected and deployed the application with Next.js, TypeScript, PostgreSQL, Prisma and NextAuth.",
  },
  {
    title: "Data model & search",
    body: "Designed the schema and PostgreSQL indexes for jobs, companies, users, saved jobs, applications and subscriptions.",
  },
  {
    title: "Ingestion systems",
    body: "Built Python pipelines and scheduled cron jobs to aggregate, normalise, deduplicate and refresh listings.",
  },
  {
    title: "Production operations",
    body: "Implemented authentication, caching, payments, personalised alerts and monitoring, then managed deployment on Linux.",
  },
] as const;

export const supportingProjects = [
  {
    name: "MemFlip",
    index: "01",
    description:
      "An AI-assisted study workspace for drafting editable flashcard decks, organising a searchable library and tracking recall across every completed revision.",
    highlights: [
      "Editable AI drafts with duplicate-aware extension",
      "Manual creation and full deck management",
      "Search, sorting and bulk library actions",
      "Weighted recall scores and interactive revision trends",
    ],
    technology: ["Next.js", "TypeScript", "Groq", "Clerk", "Firestore"],
    image: "/memflip3.png",
    imageAlt:
      "MemFlip study session showing a revealed flashcard with Forgot, Hard, Good and Easy recall controls",
    live: "https://mem-flip.live",
    source: "https://github.com/Chareeef/MemFlip",
  },
  {
    name: "Sadim AI",
    index: "02",
    description:
      "A responsive AI chat application with streamed responses and persistent conversations.",
    highlights: [
      "Streamed model responses",
      "Persistent conversations and generated titles",
      "Sanitised Markdown and syntax-highlighted code",
      "Authentication and cloud persistence",
    ],
    technology: ["Next.js", "TypeScript", "Firebase", "NextAuth", "Groq API"],
    image: "/sadim3.png",
    imageAlt:
      "Sadim AI workspace showing Antoine's saved food-sharing project conversations and active pickup-planning chat",
    live: "https://sadim-ai.com",
    source: "https://github.com/Chareeef/SadimAI",
  },
] as const;

export const capabilities = [
  {
    title: "Product engineering",
    description:
      "Turning product decisions into reliable systems, from architecture and data modelling to search, payments and production operations.",
    tools: [
      "Architecture",
      "Authentication",
      "Payments",
      "Search",
      "Notifications",
      "Deployment",
    ],
  },
  {
    title: "Frontend & mobile",
    description:
      "Crafting polished web and mobile interfaces with clarity, character and visual precision.",
    tools: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Flutter",
      "Dart",
    ],
  },
  {
    title: "Backend & data",
    description:
      "Designing data models, ingestion pipelines and services that stay dependable as products and datasets grow.",
    tools: [
      "PostgreSQL",
      "Prisma",
      "Python",
      "Node.js",
      "Express",
      "Firestore",
      "Redis",
      "MongoDB",
      "MySQL",
      "Flask",
      "Django",
    ],
  },
  {
    title: "Infrastructure & AI",
    description:
      "Operating deployed services and integrating models where they create a clear product advantage.",
    tools: [
      "Linux",
      "systemd",
      "cron",
      "Docker",
      "GitHub Actions",
      "DigitalOcean",
      "AWS",
      "Vercel",
      "Caddy",
      "Nginx",
      "HAProxy",
      "Groq",
      "OpenAI",
      "Cohere",
      "Pinecone",
    ],
  },
] as const;

export const archiveProjects = [
  {
    name: "Simple Shell",
    type: "Unix command interpreter · C",
    href: "https://github.com/Chareeef/simple_shell",
  },
  {
    name: "Printf",
    type: "Formatted output engine · C",
    href: "https://github.com/Chareeef/printf",
  },
  {
    name: "File Manager",
    type: "Async backend service · Express, MongoDB, Redis",
    href: "https://github.com/Chareeef/alx-files_manager",
  },
  {
    name: "Tic-Tac-Toe AI",
    type: "Minimax opponent · Python",
    href: "https://github.com/Chareeef/tic-tac-toe_AI",
  },
] as const;
