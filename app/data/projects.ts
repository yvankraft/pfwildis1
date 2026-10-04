import type { Locale } from "@/i18n-config";
import { t, type Localized } from "@/lib/i18n";

export type ProjectStatus = "live" | "in development" | "prototype";

export interface Project {
  title: string;
  category: string;
  tech: string[];
  description: string;
  status: ProjectStatus;
  link?: string;
  github?: string;
  tuto?: string;
  image?: string;
  featured?: boolean;
}

interface RawProject {
  title: string;
  category: Localized;
  tech: string[];
  description: Localized;
  status: ProjectStatus;
  link?: string;
  github?: string;
  tuto?: string;
  image?: string;
  featured?: boolean;
}

const rawProjects: RawProject[] = [
  {
    title: "Babana",
    category: {
      en: "Mobile Super-App",
      de: "Mobile Super-App",
      fr: "Super-App mobile",
      es: "Super-App móvil",
      zh: "移动超级应用",
      ar: "تطبيق جوال شامل",
    },
    status: "in development",
    featured: true,
    tech: [
      "Expo",
      "React Native",
      "WebRTC",
      "Better Auth",
      "Next.js",
      "next-intl",
    ],
    description: {
      en: "All-in-one delivery super-app: meals, groceries, parcels, on-demand errands, in-app messaging and audio/video calls — with a marketing site and a developer portal.",
      de: "All-in-One-Liefer-Super-App: Essen, Lebensmittel, Pakete, Besorgungen auf Abruf, In-App-Messaging sowie Audio- und Videoanrufe — mit Marketing-Website und Entwicklerportal.",
      fr: "Super-app de livraison tout-en-un : repas, courses, colis, courses à la demande, messagerie intégrée et appels audio/vidéo — avec un site marketing et un portail développeur.",
      es: "Super-app de entregas todo en uno: comidas, compras, paquetes, recados bajo demanda, mensajería integrada y llamadas de audio/vídeo — con sitio de marketing y portal para desarrolladores.",
      zh: "一站式配送超级应用：餐饮、生鲜、包裹、按需跑腿、应用内消息与音视频通话 —— 另含营销官网和开发者门户。",
      ar: "تطبيق توصيل شامل الكل في واحد: وجبات، بقالة، طرود، مشاوير عند الطلب، مراسلة داخل التطبيق ومكالمات صوت وصورة — مع موقع تسويقي وبوابة للمطورين.",
    },
  },
  {
    title: "Bacbac",
    category: {
      en: "Local Marketplace",
      de: "Lokaler Marktplatz",
      fr: "Marketplace locale",
      es: "Mercado local",
      zh: "本地市集",
      ar: "سوق محلي",
    },
    status: "in development",
    featured: true,
    tech: ["Expo", "React Native", "Better Auth", "Next.js", "SQLite"],
    description: {
      en: "Local marketplace to post free listings, discover deals nearby and negotiate directly, as a mobile app with a web companion.",
      de: "Lokaler Marktplatz zum kostenlosen Einstellen von Anzeigen, Entdecken von Angeboten in der Nähe und direktem Verhandeln — als mobile App mit Web-Begleitung.",
      fr: "Marketplace locale pour publier des annonces gratuites, découvrir des bonnes affaires à proximité et négocier directement — sous forme d'app mobile avec un compagnon web.",
      es: "Mercado local para publicar anuncios gratis, descubrir ofertas cercanas y negociar directamente — como app móvil con compañera web.",
      zh: "本地市集应用：免费发布闲置信息、发现附近好货并直接议价 —— 以移动应用为主，配套网页端。",
      ar: "سوق محلي لنشر إعلانات مجانية واكتشاف العروض القريبة والتفاوض مباشرة — كتطبيق جوال مع نسخة ويب مرافقة.",
    },
  },
  {
    title: "Yims Store",
    category: {
      en: "E-Commerce",
      de: "E-Commerce",
      fr: "E-Commerce",
      es: "E-Commerce",
      zh: "电子商务",
      ar: "تجارة إلكترونية",
    },
    status: "live",
    link: "https://yimsstore.vercel.app",
    featured: true,
    tech: [
      "Next.js 16",
      "Prisma",
      "PostgreSQL",
      "Better Auth",
      "TanStack Query",
      "Tailwind CSS",
    ],
    description: {
      en: "Full-featured online store with admin dashboard, authentication, object storage and map-based delivery, covered by unit and end-to-end tests.",
      de: "Voll ausgestatteter Online-Shop mit Admin-Dashboard, Authentifizierung, Objektspeicher und kartenbasierter Lieferung — abgedeckt durch Unit- und End-to-End-Tests.",
      fr: "Boutique en ligne complète avec tableau de bord admin, authentification, stockage d'objets et livraison cartographiée — couverte par des tests unitaires et de bout en bout.",
      es: "Tienda online completa con panel de administración, autenticación, almacenamiento de objetos y entrega basada en mapas — cubierta por tests unitarios y end-to-end.",
      zh: "功能齐全的在线商店：管理后台、身份认证、对象存储与地图配送 —— 由单元测试和端到端测试覆盖。",
      ar: "متجر إلكتروني متكامل مع لوحة تحكم ومصادقة وتخزين كائنات وتوصيل قائم على الخرائط — مغطى باختبارات الوحدة واختبارات شاملة.",
    },
  },
  {
    title: "CrystalNight",
    category: {
      en: "Event Platform",
      de: "Event-Plattform",
      fr: "Plateforme événementielle",
      es: "Plataforma de eventos",
      zh: "活动平台",
      ar: "منصة فعاليات",
    },
    status: "live",
    link: "https://crystalnigth.yvancorps.com",
    featured: true,
    tech: ["Next.js", "Three.js", "GSAP", "Prisma", "Stripe", "Better Auth"],
    description: {
      en: "Event website with reservations, contests, user dashboard and Stripe payments, wrapped in an animated 3D experience.",
      de: "Event-Website mit Reservierungen, Gewinnspielen, Nutzer-Dashboard und Stripe-Zahlungen — verpackt in ein animiertes 3D-Erlebnis.",
      fr: "Site événementiel avec réservations, concours, tableau de bord utilisateur et paiements Stripe — le tout enveloppé dans une expérience 3D animée.",
      es: "Web de eventos con reservas, concursos, panel de usuario y pagos con Stripe — envuelta en una experiencia 3D animada.",
      zh: "活动网站：预订、竞赛、用户面板与 Stripe 支付 —— 包裹在动画化的 3D 体验中。",
      ar: "موقع فعاليات مع حجوزات ومسابقات ولوحة تحكم للمستخدم ومدفوعات Stripe — ضمن تجربة ثلاثية الأبعاد متحركة.",
    },
  },
  {
    title: "E-Shop Marketplace",
    category: {
      en: "Full-Stack Development",
      de: "Full-Stack-Entwicklung",
      fr: "Développement full-stack",
      es: "Desarrollo full-stack",
      zh: "全栈开发",
      ar: "تطوير فول ستاك",
    },
    status: "in development",
    featured: true,
    tech: ["Next.js", "React", "Tailwind CSS", "API Logic"],
    description: {
      en: "A scalable e-commerce platform focusing on backend architecture and complex state management.",
      de: "Eine skalierbare E-Commerce-Plattform mit Fokus auf Backend-Architektur und komplexes State-Management.",
      fr: "Une plateforme e-commerce évolutive axée sur l'architecture backend et la gestion d'état complexe.",
      es: "Una plataforma de e-commerce escalable centrada en la arquitectura backend y la gestión de estado compleja.",
      zh: "一个可扩展的电商平台，专注后端架构与复杂状态管理。",
      ar: "منصة تجارة إلكترونية قابلة للتوسع تركز على معمارية الواجهة الخلفية وإدارة الحالة المعقدة.",
    },
    link: "https://mark.yvancorps.com",
    github: "https://github.com/yvankraft/mark-web",
    tuto: "/tuto/e-shop",
    image: "/eshop.png",
  },
  {
    title: "Library — Visual Web Builder",
    category: {
      en: "Web Builder",
      de: "Web-Baukasten",
      fr: "Constructeur de sites",
      es: "Constructor web",
      zh: "可视化建站工具",
      ar: "منشئ مواقع",
    },
    status: "in development",
    tech: ["Next.js", "Prisma", "Three.js", "TanStack Query", "Tailwind CSS"],
    description: {
      en: "Visual website builder to compose and publish pages from reusable blocks.",
      de: "Visueller Website-Baukasten zum Zusammenstellen und Veröffentlichen von Seiten aus wiederverwendbaren Blöcken.",
      fr: "Constructeur visuel de sites pour composer et publier des pages à partir de blocs réutilisables.",
      es: "Constructor visual de sitios web para componer y publicar páginas a partir de bloques reutilizables.",
      zh: "可视化建站工具：用可复用模块组合并发布页面。",
      ar: "منشئ مواقع مرئي لتجميع الصفحات ونشرها من مكونات قابلة لإعادة الاستخدام.",
    },
  },
  {
    title: "vibeChitech",
    category: {
      en: "Desktop App",
      de: "Desktop-App",
      fr: "Application desktop",
      es: "App de escritorio",
      zh: "桌面应用",
      ar: "تطبيق سطح مكتب",
    },
    status: "in development",
    tech: ["Tauri v2", "React", "Vite", "Zustand", "Next.js"],
    description: {
      en: "Project configurator and roadmap generator for developers: choose type, platform, stack and architecture to get a tailored checklist from brainstorming to maintenance. Local-first, no backend.",
      de: "Projekt-Konfigurator und Roadmap-Generator für Entwickler: Typ, Plattform, Stack und Architektur wählen und eine maßgeschneiderte Checkliste vom Brainstorming bis zur Wartung erhalten. Local-first, ohne Backend.",
      fr: "Configurateur de projet et générateur de feuille de route pour développeurs : choisissez le type, la plateforme, la stack et l'architecture pour obtenir une checklist sur mesure, du brainstorming à la maintenance. Local-first, sans backend.",
      es: "Configurador de proyectos y generador de hojas de ruta para desarrolladores: elige tipo, plataforma, stack y arquitectura para obtener una checklist a medida, desde el brainstorming hasta el mantenimiento. Local-first, sin backend.",
      zh: "面向开发者的项目配置器与路线图生成器：选择类型、平台、技术栈与架构，即可获得从头脑风暴到维护的定制清单。本地优先，无后端。",
      ar: "مكوّن مشاريع ومولّد خرائط طريق للمطورين: اختر النوع والمنصة والحزمة التقنية والمعمارية للحصول على قائمة مهام مخصصة من العصف الذهني إلى الصيانة. محلي أولاً، بدون خادم.",
    },
  },
  {
    title: "Foxholene",
    category: {
      en: "Multiplayer Game",
      de: "Multiplayer-Spiel",
      fr: "Jeu multijoueur",
      es: "Juego multijugador",
      zh: "多人游戏",
      ar: "لعبة جماعية",
    },
    status: "in development",
    tech: ["Babylon.js", "Colyseus", "Node.js", "Redis", "PostgreSQL"],
    description: {
      en: "Top-down 21st-century war MMO inspired by Foxhole: persistent shared world, territory capture, logistics and vehicles.",
      de: "Top-Down-Kriegs-MMO des 21. Jahrhunderts inspiriert von Foxhole: persistente gemeinsame Welt, Gebietseroberung, Logistik und Fahrzeuge.",
      fr: "MMO de guerre du XXIe siècle en vue du dessus, inspiré de Foxhole : monde partagé persistant, conquête de territoires, logistique et véhicules.",
      es: "MMO de guerra del siglo XXI en vista cenital inspirado en Foxhole: mundo compartido persistente, conquista de territorios, logística y vehículos.",
      zh: "受 Foxhole 启发的俯视角 21 世纪战争 MMO：持久共享世界、领土争夺、后勤与载具。",
      ar: "لعبة MMO حربية من منظور علوي مستوحاة من Foxhole: عالم مشترك دائم، احتلال أراضٍ، لوجستيات ومركبات.",
    },
  },
  {
    title: "Yvancorps Studio",
    category: {
      en: "Agency Website",
      de: "Agentur-Website",
      fr: "Site d'agence",
      es: "Web de agencia",
      zh: "机构网站",
      ar: "موقع وكالة",
    },
    status: "in development",
    tech: ["Next.js", "Motion", "Stack Auth", "i18n"],
    description: {
      en: "Multilingual agency showcase built around radical minimalism and smooth motion.",
      de: "Mehrsprachiges Agentur-Showcase rund um radikalen Minimalismus und sanfte Motion.",
      fr: "Vitrine d'agence multilingue articulée autour d'un minimalisme radical et d'animations fluides.",
      es: "Escaparate de agencia multilingüe construido en torno a un minimalismo radical y un movimiento suave.",
      zh: "围绕极简主义与流畅动效打造的多语言机构展示网站。",
      ar: "معرض وكالة متعدد اللغات مبني حول التصميم المتطرف البساطة والحركة السلسة.",
    },
  },
  {
    title: "Background Remover",
    category: {
      en: "AI Tool",
      de: "KI-Tool",
      fr: "Outil IA",
      es: "Herramienta de IA",
      zh: "AI 工具",
      ar: "أداة ذكاء اصطناعي",
    },
    status: "live",
    link: "https://remouve.yvancorps.com",
    tech: ["Next.js", "React", "Tailwind CSS", "Asset optimisation"],
    description: {
      en: "AI-powered background removal web app.",
      de: "KI-gestützte Web-App zum Entfernen von Bildhintergründen.",
      fr: "Application web de suppression d'arrière-plan propulsée par l'IA.",
      es: "Aplicación web de eliminación de fondos impulsada por IA.",
      zh: "AI 驱动的背景移除 Web 应用。",
      ar: "تطبيق ويب لإزالة الخلفيات مدعوم بالذكاء الاصطناعي.",
    },
  },
  {
    title: "Personal Portfolio",
    category: {
      en: "Performance & Design",
      de: "Performance & Design",
      fr: "Performance & Design",
      es: "Rendimiento y diseño",
      zh: "性能与设计",
      ar: "الأداء والتصميم",
    },
    status: "live",
    featured: true,
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Three.js"],
    description: {
      en: "My professional portfolio (this site) showcasing technical projects with optimized performance.",
      de: "Mein professionelles Portfolio (diese Website) mit technischen Projekten und optimierter Performance.",
      fr: "Mon portfolio professionnel (ce site) présentant des projets techniques avec des performances optimisées.",
      es: "Mi portafolio profesional (este sitio) que muestra proyectos técnicos con rendimiento optimizado.",
      zh: "我的专业作品集（本网站），展示优化性能的技术项目。",
      ar: "ملف أعمالي الاحترافي (هذا الموقع) الذي يعرض مشاريع تقنية بأداء محسّن.",
    },
    link: "https://yvancorps.com",
    github: "https://github.com/yvankraft/pfwildis1.git",
    tuto: "/tuto/pf",
    image: "/pf.png",
  },
  {
    title: "Interactive Resume",
    category: {
      en: "Web Interaction",
      de: "Web-Interaktion",
      fr: "Interaction web",
      es: "Interacción web",
      zh: "网页交互",
      ar: "تفاعل ويب",
    },
    status: "live",
    tech: ["React.js", "JavaScript (ES6+)", "CSS3"],
    description: {
      en: "A dynamic resume developed to demonstrate modern web interactions and smooth user experience.",
      de: "Ein dynamischer Lebenslauf, der moderne Web-Interaktionen und eine flüssige Nutzererfahrung demonstriert.",
      fr: "Un CV dynamique conçu pour démontrer des interactions web modernes et une expérience utilisateur fluide.",
      es: "Un currículum dinámico desarrollado para demostrar interacciones web modernas y una experiencia de usuario fluida.",
      zh: "一个动态简历，用于展示现代网页交互与流畅的用户体验。",
      ar: "سيرة ذاتية تفاعلية طُوّرت لعرض تفاعلات ويب حديثة وتجربة مستخدم سلسة.",
    },
    link: "https://cv2.yvancorps.com",
    github: "https://github.com/yvankraft/cv2",
    tuto: "/tuto/cv",
  },
  {
    title: "Droners Concept",
    category: {
      en: "Landing Page",
      de: "Landing Page",
      fr: "Landing Page",
      es: "Landing Page",
      zh: "落地页",
      ar: "صفحة هبوط",
    },
    status: "live",
    tech: ["Next.js", "Framer Motion", "Technical Visualization"],
    description: {
      en: "Visualizing technical concepts in the field of unmanned aviation with advanced animations.",
      de: "Visualisierung technischer Konzepte im Bereich der unbemannten Luftfahrt mit fortgeschrittenen Animationen.",
      fr: "Visualisation de concepts techniques dans le domaine de l'aviation sans pilote avec des animations avancées.",
      es: "Visualización de conceptos técnicos en el campo de la aviación no tripulada con animaciones avanzadas.",
      zh: "以高级动画可视化无人机领域的技术概念。",
      ar: "تصوير المفاهيم التقنية في مجال الطيران بدون طيار برسوم متحركة متقدمة.",
    },
    link: "https://drones.yvancorps.com",
    github: "https://github.com/yvankraft/droners.git",
    tuto: "/tuto/droners",
    image: "/drone.png",
  },
  {
    title: "Automobile Journal",
    category: {
      en: "Web Design",
      de: "Webdesign",
      fr: "Conception web",
      es: "Diseño web",
      zh: "网页设计",
      ar: "تصميم ويب",
    },
    status: "live",
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    description: {
      en: "A responsive web magazine focused on high-performance UI/UX design and mobile-first approach.",
      de: "Ein responsives Web-Magazin mit Fokus auf hochwertiges UI/UX-Design und Mobile-First-Ansatz.",
      fr: "Un webzine responsive axé sur un design UI/UX de haute qualité et une approche mobile-first.",
      es: "Una revista web responsive centrada en un diseño UI/UX de alto nivel y un enfoque mobile-first.",
      zh: "一个响应式网络杂志，专注高性能 UI/UX 设计与移动优先理念。",
      ar: "مجلة ويب متجاوبة تركز على تصميم UI/UX عالي الجودة ونهج يضع الجوال أولاً.",
    },
    link: "https://passion.yvancorps.com",
    github: "https://github.com/yvankraft/Page_web.git",
    tuto: "/tuto/auto",
    image: "/auto.png",
  },
  {
    title: "Aqua",
    category: {
      en: "Creative Coding",
      de: "Creative Coding",
      fr: "Creative coding",
      es: "Programación creativa",
      zh: "创意编程",
      ar: "برمجة إبداعية",
    },
    status: "prototype",
    tech: ["HTML", "CSS", "JavaScript", "Web Audio API"],
    description: {
      en: "Audio-reactive water drop with night and day themes, built as a single dependency-free page.",
      de: "Audio-reaktiver Wassertropfen mit Nacht- und Tag-Themes — als einzelne abhängigkeitsfreie Seite gebaut.",
      fr: "Goutte d'eau audio-réactive avec thèmes jour et nuit, construite en une seule page sans dépendance.",
      es: "Gota de agua reactiva al audio con temas de día y noche, construida como una única página sin dependencias.",
      zh: "音频响应式水滴，带昼夜主题，以零依赖的单页面构建。",
      ar: "قطرة ماء تتفاعل مع الصوت بسمات ليلية ونهارية، مبنية كصفحة واحدة بلا تبعيات.",
    },
  },
  {
    title: "BusinessSim Pro",
    category: {
      en: "Browser Game",
      de: "Browserspiel",
      fr: "Jeu navigateur",
      es: "Juego de navegador",
      zh: "浏览器游戏",
      ar: "لعبة متصفح",
    },
    status: "prototype",
    tech: ["HTML", "CSS", "JavaScript"],
    description: {
      en: "Advanced business management simulation running entirely in the browser.",
      de: "Fortgeschrittene Unternehmens-Simulation, die vollständig im Browser läuft.",
      fr: "Simulation avancée de gestion d'entreprise fonctionnant entièrement dans le navigateur.",
      es: "Simulación avanzada de gestión empresarial que funciona íntegramente en el navegador.",
      zh: "完全在浏览器中运行的高级商业管理模拟游戏。",
      ar: "محاكاة متقدمة لإدارة الأعمال تعمل بالكامل داخل المتصفح.",
    },
  },
];

export function getProjects(lang: Locale): Project[] {
  return rawProjects.map((p) => ({
    ...p,
    category: t(p.category, lang),
    description: t(p.description, lang),
  }));
}
