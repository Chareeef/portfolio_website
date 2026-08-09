export const locales = ["en", "fr"] as const;

export type Locale = (typeof locales)[number];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export const capabilityToolLabels: Record<
  Locale,
  Partial<Record<string, string>>
> = {
  en: {},
  fr: {
    Architecture: "Architecture",
    Authentication: "Authentification",
    Payments: "Paiements",
    Search: "Recherche",
    Notifications: "Notifications",
    Deployment: "Déploiement",
  },
};

export const copy = {
  en: {
    meta: {
      title: "Youssef Charif Hamidi — Software Engineer & Product Builder",
      description:
        "Software engineer building production web and mobile applications, including RemoteOtter and MathVellum, with a focus on accessible and meaningful technology.",
    },
    navigation: {
      label: "Primary navigation",
      mobileLabel: "Mobile navigation",
      backToTop: "Youssef Charif Hamidi, back to top",
      open: "Open navigation menu",
      close: "Close navigation menu",
      switchLanguage: "Passer au français",
      flagshipProjects: "Flagship projects",
      flagshipItems: [
        ["RemoteOtter", "#remoteotter"],
        ["MathVellum", "#mathvellum"],
      ],
      otherProjects: "Other projects",
      otherProjectItems: [
        ["MemFlip", "#memflip"],
        ["Sadim AI", "#sadim-ai"],
        ["CodeLog", "#codelog"],
        ["Solana Arbitrage Bot", "#solana-arbitrage-bot"],
        ["Hayat", "#hayat"],
        ["Simple Shell", "#simple-shell"],
      ],
      items: [
        ["Skills", "#capabilities"],
        ["Education", "#education"],
        ["About Me", "#mission-method"],
        ["Contact", "#contact"],
      ],
      resume: "Résumé",
      downloadResume: "Download résumé",
    },
    skip: "Skip to main content",
    hero: {
      scene:
        "A person and their dog look across a distant cosmic horizon.",
      status: "Building ambitious products",
      title: "Engineering",
      titleAccent: "beyond limits.",
      intro:
        "I’m Youssef, a software engineer building resilient web and mobile products that expand what people can do.",
      work: "Explore my work",
      contact: "Start a conversation",
      resume: "Résumé",
    },
    remoteOtter: {
      eyebrow: "Flagship case study · 01",
      description:
        "A production platform helping software engineers discover remote job opportunities.",
      role: "Co-Founder & Full-Stack Engineer",
      dates: "September 2024 — June 2026",
      collaborators: "Built in collaboration with",
      collaboratorConjunction: "and",
      visit: "Visit live product",
      imageAlt:
        "RemoteOtter job discovery page showing search filters, job alerts and remote listings",
      imageCaption:
        "The product brought job discovery, filtering, personalised alerts, saved opportunities and subscriptions into one production system.",
      summary:
        "From architecture and ingestion pipelines to search, subscriptions and Linux infrastructure.",
      stats: [
        ["1M+", "impressions", "in month one"],
        ["40K+", "clicks", "in month one"],
        ["200+", "daily users", "in month one"],
      ],
      technologyLabel: "Technologies used",
      owned: "What I owned",
      ownedTitle:
        "One coherent product system, not a collection of features.",
      ownership: [
        [
          "Product architecture",
          "Architected and deployed the application with Next.js, TypeScript, PostgreSQL, Prisma and NextAuth.",
        ],
        [
          "Data model & search",
          "Designed the schema and PostgreSQL indexes for jobs, companies, users, saved jobs, applications and subscriptions.",
        ],
        [
          "Ingestion systems",
          "Built Python pipelines and scheduled cron jobs to aggregate, normalise, deduplicate and refresh listings.",
        ],
        [
          "Production operations",
          "Implemented authentication, caching, payments, personalised alerts and monitoring, then managed deployment on Linux.",
        ],
      ],
      pipeline: {
        caption: "Listing delivery system",
        refresh: "scheduled refresh",
        steps: [
          ["Sources", "Job boards + ATS"],
          ["Ingest", "Python pipelines"],
          ["Normalise", "Shared data model"],
          ["Deduplicate", "Canonical records"],
          ["Index", "PostgreSQL search"],
          ["Deliver", "Search + alerts"],
        ],
      },
    },
    mathVellum: {
      eyebrow: "Flagship case study · 02",
      description:
        "A structured mathematics editor built to make complex mathematical writing fast, accessible and independent.",
      purpose:
        "MathVellum was originally designed to help people with motor disabilities, who cannot rely on pen and paper, write mathematics independently.",
      play: "View on Google Play",
      engineeringEyebrow: "Engineering the editor",
      engineeringTitle:
        "Mathematics behaves like a structure, not a string.",
      engineeringDescription:
        "Every fraction, root and exponent has shape. The editor had to understand those relationships while keeping navigation, selection and rendering immediate.",
      engineering: [
        [
          "Expression engine",
          "A structured-expression model, interactive renderer, nested cursor and selection system, and layout engine.",
        ],
        [
          "Keyboard-first editing",
          "A custom mathematical keyboard and configurable parser for fast, reusable shortcuts.",
        ],
        [
          "Export pipeline",
          "Accurate LaTeX conversion and vector PDF generation for high-quality mathematical notes.",
        ],
        [
          "Independent by design",
          "Offline persistence, auto-save and privacy-first local processing with no connection required.",
        ],
        [
          "Adaptable interface",
          "Custom shortcuts and multilingual support for different writing and learning workflows.",
        ],
      ],
      productEyebrow: "The product in use",
      productTitle: "A closer look at the editor.",
      screenshots: [
        [
          "MathVellum structured editor with a custom mathematics keyboard and nested expression cursor",
          "Nested editing",
        ],
        [
          "MathVellum vector PDF export settings over a page of mathematical notation",
          "Vector PDF export",
        ],
        [
          "MathVellum default mathematical shortcuts for fractions, roots, powers and integrals",
          "Default shortcuts",
        ],
      ],
      shortcuts: {
        eyebrow: "Live shortcut expansion",
        title: "Type the intent. Get the real structure.",
        headers: ["Keystrokes", "Shortcut parser", "Editable output"],
        recognise: "Recognise",
        match: "Match shortcut · replace token",
        items: [
          [
            "Square root",
            "The cursor lands inside the radicand, ready for the value.",
          ],
          [
            "Fraction",
            "A numerator and denominator are created as one navigable expression.",
          ],
        ],
        note:
          "These are not visual substitutions. MathVellum inserts structured, keyboard-navigable expressions the moment the shortcut is completed.",
        squareRootLabel: "Editable square root",
        fractionLabel: "Editable fraction",
      },
    },
    projects: {
      eyebrow: "Selected work · 03",
      title: "Other systems in orbit",
      description:
        "Focused applications where interface decisions, reliable data and applied AI work together.",
      system: "Supporting system",
      live: "Live site",
      source: "Source repository",
      items: [
        {
          description:
            "An AI-assisted study workspace for drafting editable flashcard decks, organising a searchable library and tracking recall across every completed revision.",
          highlights: [
            "Editable AI drafts with duplicate-aware extension",
            "Manual creation and full deck management",
            "Search, sorting and bulk library actions",
            "Weighted recall scores and interactive revision trends",
          ],
          imageAlts: [
            "MemFlip landing page presenting its AI-assisted flashcard workflow and recall tracking",
            "MemFlip library showing searchable saved decks for several subjects",
            "MemFlip study session showing a Cell Biology flashcard ready to reveal",
          ],
        },
        {
          description:
            "A responsive AI chat application with streamed responses and persistent conversations.",
          highlights: [
            "Streamed model responses",
            "Persistent conversations and generated titles",
            "Sanitised Markdown and syntax-highlighted code",
            "Authentication and cloud persistence",
          ],
          imageAlts: [
            "Sadim AI landing page with the Think further, Move faster product message",
            "Sadim AI secure sign-in screen explaining conversation history and cross-device access",
            "Sadim AI workspace showing saved food-sharing conversations and an active planning chat",
          ],
        },
      ],
      archiveTitle: "Other high-value projects",
      repository: "Repository",
      article: "Medium article",
      collaborators: "Built in collaboration with",
      collaboratorConjunction: "and",
      archiveDescriptions: [
        "A journaling platform for software engineers to record daily progress, maintain coding streaks and engage with the community through posts, comments and likes.",
        "A low-latency Solana arbitrage system built to stream on-chain activity, route across major AMMs and execute opportunities quickly with optimised transaction delivery and automated risk controls.",
        "A blood-donation platform connecting donors with transfusion centres, making it easier to discover nearby centres and view their blood inventory needs.",
        "A Unix command interpreter built from scratch with process execution, PATH resolution, environment-variable handling and careful memory management.",
      ],
    },
    capabilities: {
      eyebrow: "Technical Skills",
      title: "Tools matter most when connected to outcomes.",
      description:
        "I work across product, interface, data and infrastructure, taking ideas from early architecture decisions through production.",
      toolkit: "toolkit",
      items: [
        [
          "Product engineering",
          "Turning product decisions into reliable systems, from architecture and data modelling to search, payments and production operations.",
        ],
        [
          "Frontend & mobile",
          "Crafting polished web and mobile interfaces with clarity, character and visual precision.",
        ],
        [
          "Backend & data",
          "Designing data models, ingestion pipelines and services that stay dependable as products and datasets grow.",
        ],
        [
          "Infrastructure & AI",
          "Operating deployed services and integrating models where they create a clear product advantage.",
        ],
      ],
    },
    mission: {
      eyebrow: "Mission & working method",
      title: "Different interface. Same ambition.",
      paragraphs: [
        "I live with cerebral palsy and work primarily from a tablet. Through Termux and SSH, I connect to an Ubuntu environment and build with Vim and tmux. I also use Codex or Claude Code from the command line to work more efficiently.",
        "That workflow has sharpened my adaptability and my attention to efficient interfaces. My experience has also strengthened my interest in accessibility and independence, not as an abstract feature, but as part of how useful technology should work.",
        "My long-term mission is to build technology that gives people, especially people with disabilities, greater independence, opportunity and freedom.",
      ],
      guides: "What guides my work",
      values: [
        ["Adaptability", "Find the workable interface, then keep moving."],
        ["Clarity", "Reduce friction until the important work is visible."],
        ["Independence", "Build systems that give people meaningful control."],
      ],
      workflow: {
        caption: "Development workflow",
        steps: [
          ["Tablet", "Primary interface"],
          ["Termux", "Local terminal"],
          ["SSH", "Secure connection"],
          ["Ubuntu", "Development environment"],
          ["Vim + tmux", "Focused workspace"],
          ["Production", "Deployed systems"],
        ],
      },
    },
    education: {
      eyebrow: "Education",
      title: "The fundamentals and the habit of learning by building.",
      alxDate: "June 2024 · 12 months",
      alxTitle: "ALX Software Engineering",
      alxDescription:
        "Completed a 12-month programme spanning C and Unix programming, full-stack development, databases, algorithms, Linux and DevOps. Its peer-learning and project-based approach strengthened my habit of learning by building while developing autonomy and a strong teamwork mindset.",
      subjects: [
        "C & Unix programming",
        "Python & JavaScript",
        "HTML & CSS",
        "Data structures & algorithms",
        "SQL & data modelling",
        "REST APIs & backend services",
        "Linux, networking & DevOps",
      ],
      score: "final performance score",
      scoreValue: "145.52%",
      recognition:
        "for advancing disability inclusion in technology.",
      champion: "ALX Community Champion",
      baccalaureateDate: "June 2022",
      baccalaureate: "Baccalauréat",
      field: "Sciences Mathématiques",
      baccalaureateRecognition:
        "After I successfully completed high school, Hespress, a Moroccan national digital news outlet, chose to publish an article about my journey.",
      baccalaureateArticle: "Read the Hespress article",
    },
    contact: {
      scene:
        "A small asteroid carrying a seated fox and a rose drifts gently through a field of stars.",
      eyebrow: "Open channel",
      title: "The next meaningful product is still ahead.",
      description:
        "I am open to software engineering opportunities, ambitious product work and collaborations that create meaningful impact.",
      email: "Email me",
      resume: "Résumé",
    },
    footer: {
      built: "Built with love.",
      back: "Back to horizon",
    },
  },
  fr: {
    meta: {
      title: "Youssef Charif Hamidi — Ingénieur logiciel orienté produit",
      description:
        "Ingénieur logiciel, je conçois et déploie des applications web et mobiles — notamment RemoteOtter et MathVellum — avec une attention particulière portée à l’accessibilité et à l’utilité concrète.",
    },
    navigation: {
      label: "Navigation principale",
      mobileLabel: "Navigation mobile",
      backToTop: "Youssef Charif Hamidi, revenir en haut de page",
      open: "Ouvrir le menu de navigation",
      close: "Fermer le menu de navigation",
      switchLanguage: "Afficher la version anglaise",
      flagshipProjects: "Projets phares",
      flagshipItems: [
        ["RemoteOtter", "#remoteotter"],
        ["MathVellum", "#mathvellum"],
      ],
      otherProjects: "Autres projets",
      otherProjectItems: [
        ["MemFlip", "#memflip"],
        ["Sadim AI", "#sadim-ai"],
        ["CodeLog", "#codelog"],
        ["Bot d’arbitrage Solana", "#solana-arbitrage-bot"],
        ["Hayat", "#hayat"],
        ["Simple Shell", "#simple-shell"],
      ],
      items: [
        ["Compétences", "#capabilities"],
        ["Formation", "#education"],
        ["À propos", "#mission-method"],
        ["Contact", "#contact"],
      ],
      resume: "CV",
      downloadResume: "Télécharger mon CV",
    },
    skip: "Aller au contenu principal",
    hero: {
      scene:
        "Une personne et son chien contemplent un horizon cosmique lointain.",
      status: "Des produits ambitieux. Un impact concret.",
      title: "Ingénierie",
      titleAccent: "sans limites.",
      intro:
        "Je suis Youssef, ingénieur logiciel. Je conçois des produits web et mobiles robustes qui ouvrent de nouvelles possibilités à leurs utilisateurs.",
      work: "Découvrir mes projets",
      contact: "Échangeons",
      resume: "CV",
    },
    remoteOtter: {
      eyebrow: "Étude de cas phare · 01",
      description:
        "Une plateforme en production qui aide les développeurs à trouver des postes en full remote.",
      role: "Cofondateur · Ingénieur full stack",
      dates: "septembre 2024 — juin 2026",
      collaborators: "Réalisé en collaboration avec",
      collaboratorConjunction: "et",
      visit: "Voir le produit",
      imageAlt:
        "Page de recherche RemoteOtter avec filtres, alertes d’emploi et offres en télétravail",
      imageCaption:
        "Une seule plateforme réunit recherche et filtrage des offres, alertes personnalisées, favoris et abonnements.",
      summary:
        "Architecture, pipelines d’ingestion, moteur de recherche, abonnements et infrastructure Linux : j’ai conçu et exploité l’ensemble de la plateforme.",
      stats: [
        ["1 M+", "impressions", "au 1er mois"],
        ["40 k+", "clics", "au 1er mois"],
        ["200+", "utilisateurs/jour", "au 1er mois"],
      ],
      technologyLabel: "Technologies utilisées",
      owned: "Mon périmètre",
      ownedTitle:
        "Un produit pensé comme un système cohérent, et non comme un empilement de fonctionnalités.",
      ownership: [
        [
          "Architecture produit",
          "Conception et mise en production de l’application avec Next.js, TypeScript, PostgreSQL, Prisma et NextAuth.",
        ],
        [
          "Modèle de données et recherche",
          "Conception du schéma et des index PostgreSQL pour les offres, entreprises, comptes, favoris, candidatures et abonnements.",
        ],
        [
          "Systèmes d’ingestion",
          "Développement de pipelines Python et de tâches cron pour agréger, normaliser, dédupliquer et actualiser les offres.",
        ],
        [
          "Exploitation en production",
          "Mise en place de l’authentification, du cache, des paiements, des alertes personnalisées et du monitoring, puis gestion du déploiement sur Linux.",
        ],
      ],
      pipeline: {
        caption: "Pipeline de traitement et de diffusion des offres",
        refresh: "actualisation planifiée",
        steps: [
          ["Sources", "Job boards et ATS"],
          ["Ingestion", "Pipelines Python"],
          ["Normalisation", "Modèle de données unifié"],
          ["Déduplication", "Enregistrements de référence"],
          ["Indexation", "Recherche PostgreSQL"],
          ["Diffusion", "Recherche et alertes"],
        ],
      },
    },
    mathVellum: {
      eyebrow: "Étude de cas phare · 02",
      description:
        "Un éditeur mathématique structuré, conçu pour permettre d’écrire des contenus mathématiques complexes plus rapidement, plus facilement et en toute autonomie.",
      purpose:
        "MathVellum est né d’un besoin précis : permettre aux personnes en situation de handicap moteur qui ne peuvent pas utiliser le papier et le crayon d’écrire des mathématiques en toute autonomie.",
      play: "Voir sur Google Play",
      engineeringEyebrow: "Conception de l’éditeur",
      engineeringTitle:
        "Une expression mathématique est une structure, pas une simple chaîne de caractères.",
      engineeringDescription:
        "Fractions, racines et exposants ont leur propre géométrie. L’éditeur devait comprendre ces relations tout en garantissant une navigation et une sélection fluides, ainsi qu’un rendu immédiat.",
      engineering: [
        [
          "Moteur d’expressions",
          "Un modèle d’expressions structurées, un moteur de rendu interactif, un système de curseur et de sélection imbriqués, ainsi qu’un moteur de mise en page.",
        ],
        [
          "Saisie pensée pour le clavier",
          "Un clavier mathématique sur mesure et un parseur configurable pour interpréter rapidement des raccourcis réutilisables.",
        ],
        [
          "Pipeline d’export",
          "Une conversion LaTeX fidèle et la génération de PDF vectoriels pour produire des notes mathématiques nettes et précises.",
        ],
        [
          "Pensé pour fonctionner en autonomie",
          "Stockage hors ligne, sauvegarde automatique et traitement local respectueux de la vie privée, sans connexion requise.",
        ],
        [
          "Interface adaptable",
          "Raccourcis personnalisables et prise en charge multilingue pour s’adapter à différents usages d’écriture et d’apprentissage.",
        ],
      ],
      productEyebrow: "Le produit à l’usage",
      productTitle: "Au cœur de l’éditeur.",
      screenshots: [
        [
          "Éditeur structuré MathVellum avec clavier mathématique personnalisé et curseur imbriqué",
          "Édition imbriquée",
        ],
        [
          "Réglages d’export PDF vectoriel de MathVellum sur une page de notation mathématique",
          "Export PDF vectoriel",
        ],
        [
          "Raccourcis mathématiques par défaut de MathVellum pour les fractions, racines, puissances et intégrales",
          "Raccourcis par défaut",
        ],
      ],
      shortcuts: {
        eyebrow: "Expansion instantanée des raccourcis",
        title: "Saisissez un raccourci. Obtenez une structure éditable.",
        headers: ["Saisie clavier", "Parseur de raccourcis", "Résultat éditable"],
        recognise: "Détection de",
        match: "Identifier le raccourci · remplacer la saisie",
        items: [
          [
            "Racine carrée",
            "Le curseur se place dans le radicande, prêt pour la saisie.",
          ],
          [
            "Fraction",
            "Le numérateur et le dénominateur sont créés comme une seule expression navigable.",
          ],
        ],
        note:
          "Il ne s’agit pas d’un simple remplacement visuel : dès que le raccourci est saisi, MathVellum insère une expression structurée et entièrement navigable au clavier.",
        squareRootLabel: "Racine carrée éditable",
        fractionLabel: "Fraction éditable",
      },
    },
    projects: {
      eyebrow: "Projets sélectionnés · 03",
      title: "D’autres systèmes en orbite",
      description:
        "Des applications conçues autour d’un besoin précis, où l’expérience utilisateur, la fiabilité des données et l’IA appliquée fonctionnent de concert.",
      system: "Projet complémentaire",
      live: "Voir le site",
      source: "Code source",
      items: [
        {
          description:
            "Un espace de révision assisté par IA pour créer des paquets de flashcards modifiables, organiser une bibliothèque consultable et suivre la mémorisation après chaque révision.",
          highlights: [
            "Brouillons IA modifiables et extension sans doublons",
            "Création manuelle et gestion complète des paquets",
            "Recherche, tri et actions groupées dans la bibliothèque",
            "Scores de mémorisation pondérés et tendances interactives",
          ],
          imageAlts: [
            "Page d’accueil de MemFlip présentant la création de flashcards assistée par IA et le suivi de la mémorisation",
            "Bibliothèque MemFlip affichant des paquets enregistrés et consultables pour plusieurs matières",
            "Session d’étude MemFlip avec une flashcard de biologie cellulaire prête à être révélée",
          ],
        },
        {
          description:
            "Une application de chat IA responsive, avec réponses en streaming et conservation de l’historique des conversations.",
          highlights: [
            "Réponses du modèle en streaming",
            "Conversations persistantes et titres générés",
            "Nettoyage du Markdown et coloration syntaxique du code",
            "Authentification et stockage dans le cloud",
          ],
          imageAlts: [
            "Page d’accueil de Sadim AI avec le message produit Think further, Move faster",
            "Écran de connexion sécurisé de Sadim AI présentant l’historique et l’accès multi-appareils",
            "Espace Sadim AI affichant des conversations enregistrées sur un projet de partage alimentaire et un échange actif",
          ],
        },
      ],
      archiveTitle: "Autres projets à forte valeur",
      repository: "Dépôt GitHub",
      article: "Article Medium",
      collaborators: "Réalisé en collaboration avec",
      collaboratorConjunction: "et",
      archiveDescriptions: [
        "Une plateforme de journal destinée aux ingénieurs logiciel pour consigner leurs progrès quotidiens, maintenir leurs séries de programmation et interagir grâce aux publications, commentaires et mentions J’aime.",
        "Un système d’arbitrage Solana à faible latence conçu pour suivre l’activité on-chain, acheminer les opérations entre les principaux AMM et exécuter rapidement les opportunités grâce à une diffusion optimisée et des contrôles de risque automatisés.",
        "Une plateforme de don de sang qui met en relation les donneurs et les centres de transfusion, facilite la recherche de centres à proximité et rend visibles leurs besoins en stocks de sang.",
        "Un interpréteur de commandes Unix développé de zéro, avec exécution des processus, résolution du PATH, gestion des variables d’environnement et maîtrise rigoureuse de la mémoire.",
      ],
    },
    capabilities: {
      eyebrow: "Compétences techniques",
      title: "Les outils n’ont de valeur que lorsqu’ils servent un résultat.",
      description:
        "J’interviens sur l’ensemble du produit — interfaces, données et infrastructure — des premiers choix d’architecture jusqu’à la mise en production.",
      toolkit: "stack technique",
      items: [
        [
          "Ingénierie produit",
          "Transformer des décisions produit en systèmes fiables : architecture, modélisation des données, recherche, paiements et exploitation en production.",
        ],
        [
          "Frontend et mobile",
          "Créer des interfaces web et mobiles soignées, lisibles et précises, avec une identité visuelle affirmée.",
        ],
        [
          "Backend et data",
          "Concevoir des modèles de données, des pipelines d’ingestion et des services fiables, capables de monter en charge avec le produit et les volumes de données.",
        ],
        [
          "Infrastructure et IA",
          "Exploiter des services en production et intégrer des modèles d’IA lorsqu’ils apportent un avantage produit tangible.",
        ],
      ],
    },
    mission: {
      eyebrow: "Mission et méthode de travail",
      title: "Une interface différente. La même ambition.",
      paragraphs: [
        "Je vis avec une paralysie cérébrale et je travaille principalement depuis une tablette. Avec Termux et SSH, je me connecte à un environnement Ubuntu où je développe avec Vim et tmux. J’utilise également Codex ou Claude Code en ligne de commande pour gagner en efficacité.",
        "Cette façon de travailler a renforcé mon adaptabilité et mon attention à l’efficacité des interfaces. Mon parcours nourrit aussi mon engagement pour l’accessibilité et l’autonomie : non pas comme des options abstraites, mais comme des qualités essentielles d’une technologie réellement utile.",
        "À long terme, je veux concevoir des technologies qui offrent à chacun — et en particulier aux personnes en situation de handicap — davantage d’autonomie, d’opportunités et de liberté.",
      ],
      guides: "Mes principes de travail",
      values: [
        [
          "Adaptabilité",
          "Trouver l’interface qui fonctionne, puis continuer d’avancer.",
        ],
        [
          "Clarté",
          "Réduire les frictions jusqu’à rendre l’essentiel évident.",
        ],
        [
          "Autonomie",
          "Concevoir des systèmes qui donnent aux utilisateurs une véritable maîtrise.",
        ],
      ],
      workflow: {
        caption: "Environnement de développement",
        steps: [
          ["Tablette", "Interface principale"],
          ["Termux", "Terminal local"],
          ["SSH", "Connexion sécurisée"],
          ["Ubuntu", "Environnement de développement"],
          ["Vim + tmux", "Environnement de travail optimisé"],
          ["Production", "Systèmes déployés"],
        ],
      },
    },
    education: {
      eyebrow: "Formation",
      title: "Les fondamentaux et l’habitude d’apprendre en construisant.",
      alxDate: "juin 2024 · 12 mois",
      alxTitle: "Programme Software Engineering — ALX",
      alxDescription:
        "Un cursus intensif de 12 mois couvrant la programmation C et Unix, le développement full stack, les bases de données, les algorithmes, Linux et les pratiques DevOps. Sa pédagogie fondée sur l’apprentissage entre pairs et les projets a renforcé mon habitude d’apprendre en construisant, tout en développant mon autonomie et mon esprit d’équipe.",
      subjects: [
        "Programmation C et Unix",
        "Python et JavaScript",
        "HTML et CSS",
        "Structures de données et algorithmes",
        "SQL et modélisation des données",
        "API REST et services backend",
        "Linux, réseaux et DevOps",
      ],
      score: "score final",
      scoreValue: "145,52 %",
      recognition:
        "pour mon engagement en faveur de l’inclusion des personnes en situation de handicap dans la tech.",
      champion: "ALX Community Champion",
      baccalaureateDate: "juin 2022",
      baccalaureate: "Baccalauréat",
      field: "Sciences mathématiques",
      baccalaureateRecognition:
        "Après avoir obtenu mon baccalauréat, Hespress, média électronique national marocain, a choisi de consacrer un article à mon parcours.",
      baccalaureateArticle: "Lire l’article sur Hespress",
    },
    contact: {
      scene:
        "Un petit astéroïde portant un renard assis et une rose dérive doucement dans un champ d’étoiles.",
      eyebrow: "Canal ouvert",
      title: "Le prochain produit utile reste à construire.",
      description:
        "Je suis ouvert à des postes d’ingénieur logiciel, à des projets produit ambitieux et à des collaborations porteuses d’un impact concret.",
      email: "M’écrire",
      resume: "CV",
    },
    footer: {
      built: "Réalisé avec amour.",
      back: "Retour à l’horizon",
    },
  },
} as const;
