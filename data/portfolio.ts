export const links = {
  email: "mailto:youssef.charif.h@gmail.com",
  github: "https://github.com/Chareeef",
  linkedin: "https://www.linkedin.com/in/youssef-charif-hamidi",
  resume: "/youssef-charif-hamidi-resume.pdf",
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
    name: "Sadim AI",
    index: "01",
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
      "Sadim AI chat interface showing a generated technical interview response",
    live: "https://sadim-ai.com",
    source: "https://github.com/Chareeef/SadimAI",
  },
  {
    name: "MemFlip",
    index: "02",
    description:
      "An AI-assisted flashcard application for generating, organising, saving and reviewing study material.",
    highlights: [
      "AI-generated flashcards",
      "Authentication and Firestore persistence",
      "Saved study collections",
      "Responsive review interface",
    ],
    technology: ["Next.js", "TypeScript", "Groq", "Clerk", "Firestore"],
    image: "/memflip3.png",
    imageAlt:
      "MemFlip interface showing a generated collection of AI flashcards",
    live: "https://mem-flip.live",
    source: "https://github.com/Chareeef/MemFlip",
  },
] as const;

export const capabilities = [
  {
    title: "Product engineering",
    description: "From product decisions to reliable production systems.",
    items: [
      ["Architecture", "RemoteOtter product and data model"],
      ["Authentication", "RemoteOtter, Sadim AI and MemFlip"],
      ["Payments", "RemoteOtter subscriptions"],
      ["Search", "RemoteOtter discovery experience"],
      ["Notifications", "Personalised job alerts"],
      ["Deployment", "Production services and monitoring"],
    ],
  },
  {
    title: "Frontend & mobile",
    description: "Interfaces shaped around the job people need to do.",
    items: [
      ["React / Next.js", "Production web applications"],
      ["TypeScript", "RemoteOtter, Sadim AI and MemFlip"],
      ["Tailwind CSS", "Responsive product interfaces"],
      ["Flutter / Dart", "MathVellum structured editor"],
    ],
  },
  {
    title: "Backend & data",
    description:
      "Models, pipelines and services that make products dependable.",
    items: [
      ["PostgreSQL / Prisma", "RemoteOtter schema and indexes"],
      ["Python", "Listing ingestion and normalisation"],
      ["Node.js / Express", "Web services and systems projects"],
      ["Firestore", "Sadim AI and MemFlip persistence"],
      ["Redis / MongoDB / MySQL", "Backend systems and training"],
      ["Flask / Django", "Backend applications"],
    ],
  },
  {
    title: "Infrastructure & AI",
    description:
      "Practical operational experience and focused model integration.",
    items: [
      ["Linux / systemd / cron", "Production services and scheduled jobs"],
      ["Docker / GitHub Actions", "Delivery workflows"],
      ["DigitalOcean / AWS / Vercel", "Cloud deployment"],
      ["Caddy / Nginx / HAProxy", "Web infrastructure"],
      ["Groq", "Sadim AI and MemFlip"],
      ["OpenAI / Cohere / Pinecone", "Applied AI integrations"],
      ["Claude Code", "Developer workflow"],
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
