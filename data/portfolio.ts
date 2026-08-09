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

export const collaborators = [
  {
    name: "Abdelrahman Hany Metawei",
    href: "https://www.linkedin.com/in/abduhany",
  },
  {
    name: "Julien Barbier",
    href: "https://www.linkedin.com/in/julienbarbier",
  },
] as const;

const codeLogCollaborators = [
  {
    name: "Mohamed Lamine Boukhalfa",
    href: "https://www.linkedin.com/in/mohamed-lamine-boukhalfa",
  },
  {
    name: "Khadija Ghadi",
    href: "https://www.linkedin.com/in/khadija-ghadi-017737193",
  },
  {
    name: "Harriet M Mugendi",
    href: "https://www.linkedin.com/in/harriet-m-mugendi-149a006b",
  },
] as const;

const hayatCollaborators = [
  {
    name: "Blain Muema",
    href: "https://www.linkedin.com/in/blain-muema",
  },
  {
    name: "Kenansa Meseret Nigusie",
    href: "https://www.linkedin.com/in/kenc0de",
  },
] as const;

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
    anchor: "memflip",
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
    images: [
      {
        src: "/memflip1.png",
        width: 1536,
        height: 3264,
        position: "top",
      },
      { src: "/memflip2.png", width: 1600, height: 1000 },
      { src: "/memflip3.png", width: 1600, height: 1000 },
    ],
    live: "https://mem-flip.live",
    source: "https://github.com/Chareeef/MemFlip",
  },
  {
    name: "Sadim AI",
    anchor: "sadim-ai",
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
    images: [
      {
        src: "/sadim-home.png",
        width: 1600,
        height: 850,
        position: "center",
      },
      { src: "/sadim-signin.png", width: 1600, height: 1000 },
      { src: "/sadim-chat.png", width: 1600, height: 1000 },
    ],
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
    name: "CodeLog",
    anchor: "codelog",
    tools: ["React", "Flask", "MongoDB", "Redis", "JWT", "Nginx"],
    repository: "https://github.com/Chareeef/CodeLog",
    article: null,
    collaborators: codeLogCollaborators,
  },
  {
    name: "Solana Arbitrage Bot",
    anchor: "solana-arbitrage-bot",
    tools: [
      "Rust",
      "Tokio",
      "Solana SDK",
      "Yellowstone gRPC",
      "Raydium",
      "Meteora",
      "Jupiter",
    ],
    repository: "https://github.com/Chareeef/solana-copy-trading-bot",
    article:
      "https://medium.com/@abdu.hany/building-a-solana-copy-trading-bot-from-our-first-lines-of-rust-to-profitable-automation-ad4f9377a400",
    collaborators,
  },
  {
    name: "Hayat",
    anchor: "hayat",
    tools: [
      "Flask",
      "MySQL",
      "SQLAlchemy",
      "JavaScript",
      "Nginx",
      "HAProxy",
    ],
    repository: "https://github.com/Chareeef/HAYAT",
    article: null,
    collaborators: hayatCollaborators,
  },
  {
    name: "Simple Shell",
    anchor: "simple-shell",
    tools: ["C", "GCC", "Unix", "Valgrind"],
    repository: "https://github.com/Chareeef/simple_shell",
    article: null,
    collaborators: [],
  },
] as const;
