import type { Locale } from "@/i18n-config";
import { t, type Localized } from "@/lib/i18n";

export interface Education {
  degree: string;
  school: string;
  period: string;
  bullets: string[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  bullets: string[];
}

export interface Language {
  name: string;
  level: string;
  pct: number;
}

export interface Cv {
  name: string;
  title: string;
  location: string;
  email: string;
  socials: {
    github: string;
    linkedin: string;
    x: string;
  };
  summary: string;
  education: Education[];
  experience: Experience[];
  skills: Record<string, string[]>;
  languages: Language[];
  cvPdf: string;
}

interface RawEducation {
  degree: Localized;
  school: Localized;
  period: Localized;
  bullets: Localized[];
}

interface RawExperience {
  role: Localized;
  company: Localized;
  period: Localized;
  bullets: Localized[];
}

const rawCv: {
  name: string;
  title: Localized;
  location: Localized;
  email: string;
  socials: Cv["socials"];
  summary: Localized;
  education: RawEducation[];
  experience: RawExperience[];
  skills: { category: Localized; items: Localized[] }[];
  languages: { name: Localized; level: Localized; pct: number }[];
  cvPdf: string;
} = {
  name: "Yvan Wildis Ngone Tchinda",
  title: {
    en: "Full-Stack Developer | Electrical Engineering Student",
    de: "Angehender Fachinformatiker | Elektrotechnik-Student",
    fr: "Développeur Full-Stack | Étudiant en génie électrique",
    es: "Desarrollador Full-Stack | Estudiante de ingeniería eléctrica",
    zh: "全栈开发者 | 电气工程学生",
    ar: "مطور فول ستاك | طالب هندسة كهربائية",
  },
  location: {
    en: "Hamm, Germany",
    de: "Hamm, Deutschland",
    fr: "Hamm, Allemagne",
    es: "Hamm, Alemania",
    zh: "德国哈姆",
    ar: "هام، ألمانيا",
  },
  email: "yvanngone53@gmail.com",
  socials: {
    github: "https://github.com/yvankraft",
    linkedin: "https://www.linkedin.com/in/yvan-ngone-271b2b30b/",
    x: "https://x.com/wildisyvan53",
  },
  summary: {
    en: "Passionate full-stack developer and Electrical Engineering student with solid skills in web development and Flutter. I combine a technical understanding of systems with hands-on experience shipping and publishing my own projects (Vercel, GitHub). As a solution-oriented and resilient team player, I am motivated to bring my programming skills and technical mindset to innovative projects and actively help shape the digital transformation.",
    de: "Leidenschaftlicher Full-Stack-Entwickler und Elektrotechnik-Student mit fundierten Kenntnissen in der Webentwicklung und Flutter. Ich kombiniere technisches Systemverständnis mit praktischer Erfahrung in der Umsetzung und Veröffentlichung eigenständiger Projekte (Vercel, GitHub). Als lösungsorientierter und belastbarer Teamplayer bin ich motiviert, meine Programmierkenntnisse und meine technische Auffassungsgabe in innovative Projekte einzubringen und die digitale Transformation aktiv mitzugestalten.",
    fr: "Développeur full-stack passionné et étudiant en génie électrique, avec de solides compétences en développement web et Flutter. Je combine une compréhension technique des systèmes avec une expérience concrète de mise en ligne et de publication de mes propres projets (Vercel, GitHub). Coéquipier résilient et orienté solutions, je suis motivé à mettre mes compétences en programmation et mon esprit technique au service de projets innovants et à contribuer activement à la transformation numérique.",
    es: "Desarrollador full-stack apasionado y estudiante de ingeniería eléctrica, con sólidos conocimientos en desarrollo web y Flutter. Combino la comprensión técnica de los sistemas con experiencia práctica publicando mis propios proyectos (Vercel, GitHub). Como compañero de equipo resistente y orientado a soluciones, estoy motivado a aportar mis habilidades de programación y mi mentalidad técnica a proyectos innovadores y a contribuir activamente a la transformación digital.",
    zh: "充满热情的全栈开发者兼电气工程学生，具备扎实的 Web 开发和 Flutter 技能。我将系统级技术理解与独立发布项目的实践经验相结合（Vercel、GitHub）。作为一名注重解决方案且坚韧的团队成员，我渴望将编程能力和技术思维带入创新项目，积极参与数字化转型。",
    ar: "مطور فول ستاك شغوف وطالب هندسة كهربائية، يمتلك مهارات راسخة في تطوير الويب وFlutter. أجمع بين الفهم التقني للأنظمة وخبرة عملية في تنفيذ ونشر مشاريعي الخاصة (Vercel، GitHub). وبصفتي عضو فريق مرنًا موجّهًا نحو الحلول، أتحمس لتوظيف مهاراتي البرمجية وعقليتي التقنية في مشاريع مبتكرة والمساهمة بفاعلية في التحول الرقمي.",
  },
  education: [
    {
      degree: {
        en: "B.Eng. Electrical Engineering",
        de: "Studium Elektrotechnik (B.Eng.)",
        fr: "B.Eng. Génie électrique",
        es: "Grado en Ingeniería Eléctrica (B.Eng.)",
        zh: "电气工程学士（B.Eng.）在读",
        ar: "بكالوريوس هندسة كهربائية (B.Eng.)",
      },
      school: {
        en: "FH Südwestfalen, Soest",
        de: "FH Südwestfalen, Soest",
        fr: "FH Südwestfalen, Soest",
        es: "FH Südwestfalen, Soest",
        zh: "FH Südwestfalen, Soest",
        ar: "FH Südwestfalen, Soest",
      },
      period: {
        en: "09/2024 – Present",
        de: "09/2024 – Heute",
        fr: "09/2024 – Aujourd'hui",
        es: "09/2024 – Actualidad",
        zh: "2024/09 – 至今",
        ar: "09/2024 – حتى الآن",
      },
      bullets: [
        {
          en: "Focus on technical mathematics, physical foundations and problem solving.",
          de: "Fokus auf technische Mathematik, physikalische Grundlagen und Problemlösung.",
          fr: "Accent sur les mathématiques techniques, les fondements physiques et la résolution de problèmes.",
          es: "Enfoque en matemáticas técnicas, fundamentos físicos y resolución de problemas.",
          zh: "重点学习技术数学、物理基础与问题解决。",
          ar: "تركيز على الرياضيات التقنية والأسس الفيزيائية وحل المشكلات.",
        },
        {
          en: "Confident handling of complex technical plans and calculations.",
          de: "Sicherer Umgang mit komplexen technischen Plänen und Berechnungen.",
          fr: "Maîtrise des plans techniques complexes et des calculs.",
          es: "Manejo seguro de planos técnicos complejos y cálculos.",
          zh: "能够熟练处理复杂的技术图纸与计算。",
          ar: "تعامل واثق مع المخططات والحسابات التقنية المعقدة.",
        },
      ],
    },
    {
      degree: {
        en: "Technical Baccalaureate (Fachabitur) – Refrigeration & Air Conditioning",
        de: "Fachabitur (Technisches Abitur) – Fachrichtung Kälte- und Klimatechnik",
        fr: "Baccalauréat technique (Fachabitur) – Filière froid et climatisation",
        es: "Bachillerato técnico (Fachabitur) – Especialidad en refrigeración y climatización",
        zh: "技术高中文凭（Fachabitur）— 制冷与空调专业",
        ar: "بكالوريا تقنية (Fachabitur) – تخصص التبريد وتكييف الهواء",
      },
      school: {
        en: "Technisches Gymnasium Nylon Ndogpassi, Douala (Cameroon)",
        de: "Technisches Gymnasium Nylon Ndogpassi, Douala (Kamerun)",
        fr: "Technisches Gymnasium Nylon Ndogpassi, Douala (Cameroun)",
        es: "Technisches Gymnasium Nylon Ndogpassi, Douala (Camerún)",
        zh: "Technisches Gymnasium Nylon Ndogpassi，杜阿拉（喀麦隆）",
        ar: "Technisches Gymnasium Nylon Ndogpassi، دوالا (الكاميرون)",
      },
      period: {
        en: "06/2021",
        de: "06/2021",
        fr: "06/2021",
        es: "06/2021",
        zh: "2021/06",
        ar: "06/2021",
      },
      bullets: [
        {
          en: "Main subjects: thermodynamics, technical mechanics and electrical engineering.",
          de: "Schwerpunkte: Thermodynamik, technische Mechanik und Elektrotechnik.",
          fr: "Matières principales : thermodynamique, mécanique technique et électrotechnique.",
          es: "Asignaturas principales: termodinámica, mecánica técnica y electrotecnia.",
          zh: "主修科目：热力学、技术力学与电气工程。",
          ar: "المواد الرئيسية: الديناميكا الحرارية والميكانيكا التقنية والهندسة الكهربائية.",
        },
      ],
    },
  ],
  experience: [
    {
      role: {
        en: "Order Picker / Logistics Assistant (Working Student)",
        de: "Kommissionierer / Logistikhelfer (Werkstudent)",
        fr: "Préparateur de commandes / Assistant logistique (étudiant salarié)",
        es: "Preparador de pedidos / Auxiliar logístico (estudiante trabajador)",
        zh: "拣货员 / 物流助理（勤工俭学）",
        ar: "مجمّع طلبات / مساعد لوجستي (طالب عامل)",
      },
      company: {
        en: "EDEKA Central Warehouse, Hamm",
        de: "EDEKA Zentrallager, Hamm",
        fr: "Entrepôt central EDEKA, Hamm",
        es: "Almacén central EDEKA, Hamm",
        zh: "EDEKA 中央仓库，哈姆",
        ar: "مستودع EDEKA المركزي، هام",
      },
      period: {
        en: "05/2025 – Present",
        de: "05/2025 – Heute",
        fr: "05/2025 – Aujourd'hui",
        es: "05/2025 – Actualidad",
        zh: "2025/05 – 至今",
        ar: "05/2025 – حتى الآن",
      },
      bullets: [
        {
          en: "Active involvement in daily warehouse operations and order picking.",
          de: "Aktive Mitarbeit im operativen Lagerbetrieb und Warenzusammenstellung.",
          fr: "Participation active aux opérations quotidiennes d'entrepôt et à la préparation des commandes.",
          es: "Participación activa en las operaciones diarias del almacén y la preparación de pedidos.",
          zh: "积极参与仓库日常运营与订单拣选。",
          ar: "مشاركة فعالة في العمليات اليومية للمستودع وتجميع الطلبات.",
        },
        {
          en: "High physical resilience and reliability in shift work.",
          de: "Hohe körperliche Belastbarkeit und Zuverlässigkeit im Schichtbetrieb.",
          fr: "Grande résistance physique et fiabilité en travail posté.",
          es: "Alta resistencia física y fiabilidad en el trabajo por turnos.",
          zh: "在轮班工作中展现出色的体能与可靠性。",
          ar: "قدرة تحمل بدنية عالية وموثوقية في نظام الورديات.",
        },
        {
          en: "Precise work under time pressure while following safety regulations.",
          de: "Präzises Arbeiten unter Zeitdruck und Einhaltung von Sicherheitsvorschriften.",
          fr: "Travail précis sous pression tout en respectant les consignes de sécurité.",
          es: "Trabajo preciso bajo presión de tiempo respetando las normas de seguridad.",
          zh: "在时间压力下精准作业并遵守安全规范。",
          ar: "عمل دقيق تحت ضغط الوقت مع الالتزام بلوائح السلامة.",
        },
      ],
    },
    {
      role: {
        en: "Intern – Refrigeration Technology",
        de: "Praktikant im Bereich Kältetechnik",
        fr: "Stagiaire – Froid et climatisation",
        es: "Becario – Tecnología de refrigeración",
        zh: "实习生 — 制冷技术",
        ar: "متدرب – تقنية التبريد",
      },
      company: {
        en: "Afrique Froid et Climatisation, Douala",
        de: "Afrique Froid et Climatisation, Douala",
        fr: "Afrique Froid et Climatisation, Douala",
        es: "Afrique Froid et Climatisation, Douala",
        zh: "Afrique Froid et Climatisation，杜阿拉",
        ar: "Afrique Froid et Climatisation، دوالا",
      },
      period: {
        en: "Summers 2018 – 2021",
        de: "Sommerferien 2018 – 2021",
        fr: "Étés 2018 – 2021",
        es: "Veranos 2018 – 2021",
        zh: "2018–2021 年暑期",
        ar: "صيف 2018 – 2021",
      },
      bullets: [
        {
          en: "Installation and maintenance of air-conditioning and refrigeration systems.",
          de: "Installation und Wartung von Klimaanlagen und Kältesystemen.",
          fr: "Installation et maintenance de systèmes de climatisation et de réfrigération.",
          es: "Instalación y mantenimiento de sistemas de climatización y refrigeración.",
          zh: "空调与制冷系统的安装和维护。",
          ar: "تركيب وصيانة أنظمة تكييف الهواء والتبريد.",
        },
        {
          en: "Support in assembling technical components.",
          de: "Unterstützung bei der Montage technischer Komponenten.",
          fr: "Assistance au montage de composants techniques.",
          es: "Apoyo en el montaje de componentes técnicos.",
          zh: "协助组装技术部件。",
          ar: "المساعدة في تجميع المكونات التقنية.",
        },
      ],
    },
  ],
  skills: [
    {
      category: {
        en: "Programming",
        de: "Programmierung",
        fr: "Programmation",
        es: "Programación",
        zh: "编程",
        ar: "البرمجة",
      },
      items: [
        { en: "JavaScript", de: "JavaScript", fr: "JavaScript", es: "JavaScript", zh: "JavaScript", ar: "JavaScript" },
        { en: "TypeScript", de: "TypeScript", fr: "TypeScript", es: "TypeScript", zh: "TypeScript", ar: "TypeScript" },
        { en: "Dart (Flutter)", de: "Dart (Flutter)", fr: "Dart (Flutter)", es: "Dart (Flutter)", zh: "Dart (Flutter)", ar: "Dart (Flutter)" },
        { en: "HTML5", de: "HTML5", fr: "HTML5", es: "HTML5", zh: "HTML5", ar: "HTML5" },
        { en: "CSS3", de: "CSS3", fr: "CSS3", es: "CSS3", zh: "CSS3", ar: "CSS3" },
        { en: "React", de: "React", fr: "React", es: "React", zh: "React", ar: "React" },
        { en: "Next.js", de: "Next.js", fr: "Next.js", es: "Next.js", zh: "Next.js", ar: "Next.js" },
        {
          en: "Python (basics)",
          de: "Python (Grundkenntnisse)",
          fr: "Python (bases)",
          es: "Python (básico)",
          zh: "Python（基础）",
          ar: "Python (أساسيات)",
        },
      ],
    },
    {
      category: {
        en: "Tools",
        de: "Tools",
        fr: "Outils",
        es: "Herramientas",
        zh: "工具",
        ar: "الأدوات",
      },
      items: [
        { en: "Git", de: "Git", fr: "Git", es: "Git", zh: "Git", ar: "Git" },
        { en: "GitHub", de: "GitHub", fr: "GitHub", es: "GitHub", zh: "GitHub", ar: "GitHub" },
        { en: "Vercel", de: "Vercel", fr: "Vercel", es: "Vercel", zh: "Vercel", ar: "Vercel" },
        { en: "VS Code", de: "VS Code", fr: "VS Code", es: "VS Code", zh: "VS Code", ar: "VS Code" },
        { en: "Figma", de: "Figma", fr: "Figma", es: "Figma", zh: "Figma", ar: "Figma" },
        { en: "Tailwind CSS", de: "Tailwind CSS", fr: "Tailwind CSS", es: "Tailwind CSS", zh: "Tailwind CSS", ar: "Tailwind CSS" },
        { en: "Three.js", de: "Three.js", fr: "Three.js", es: "Three.js", zh: "Three.js", ar: "Three.js" },
        { en: "GSAP", de: "GSAP", fr: "GSAP", es: "GSAP", zh: "GSAP", ar: "GSAP" },
      ],
    },
    {
      category: {
        en: "Office",
        de: "Office",
        fr: "Bureautique",
        es: "Ofimática",
        zh: "办公软件",
        ar: "الأوفيس",
      },
      items: [
        { en: "MS Word", de: "MS Word", fr: "MS Word", es: "MS Word", zh: "MS Word", ar: "MS Word" },
        { en: "MS Excel", de: "MS Excel", fr: "MS Excel", es: "MS Excel", zh: "MS Excel", ar: "MS Excel" },
        { en: "MS PowerPoint", de: "MS PowerPoint", fr: "MS PowerPoint", es: "MS PowerPoint", zh: "MS PowerPoint", ar: "MS PowerPoint" },
      ],
    },
    {
      category: {
        en: "Other",
        de: "Sonstiges",
        fr: "Divers",
        es: "Otros",
        zh: "其他",
        ar: "أخرى",
      },
      items: [
        {
          en: "Technical mathematics",
          de: "Technische Mathematik",
          fr: "Mathématiques techniques",
          es: "Matemáticas técnicas",
          zh: "技术数学",
          ar: "رياضيات تقنية",
        },
        {
          en: "Problem solving",
          de: "Problemlösungskompetenz",
          fr: "Résolution de problèmes",
          es: "Resolución de problemas",
          zh: "问题解决能力",
          ar: "مهارة حل المشكلات",
        },
        {
          en: "Forklift licence",
          de: "Gabelstaplerschein",
          fr: "Permis chariot élévateur",
          es: "Carnet de carretilla elevadora",
          zh: "叉车驾驶证",
          ar: "رخصة رافعة شوكية",
        },
      ],
    },
  ],
  languages: [
    {
      name: {
        en: "French",
        de: "Französisch",
        fr: "Français",
        es: "Francés",
        zh: "法语",
        ar: "الفرنسية",
      },
      level: {
        en: "Native",
        de: "Muttersprache",
        fr: "Langue maternelle",
        es: "Lengua materna",
        zh: "母语",
        ar: "لغة أم",
      },
      pct: 100,
    },
    {
      name: {
        en: "German",
        de: "Deutsch",
        fr: "Allemand",
        es: "Alemán",
        zh: "德语",
        ar: "الألمانية",
      },
      level: {
        en: "C1",
        de: "C1",
        fr: "C1",
        es: "C1",
        zh: "C1",
        ar: "C1",
      },
      pct: 85,
    },
    {
      name: {
        en: "English",
        de: "Englisch",
        fr: "Anglais",
        es: "Inglés",
        zh: "英语",
        ar: "الإنجليزية",
      },
      level: {
        en: "Good knowledge",
        de: "Gute Kenntnisse",
        fr: "Bonnes connaissances",
        es: "Buenos conocimientos",
        zh: "良好掌握",
        ar: "معرفة جيدة",
      },
      pct: 65,
    },
  ],
  cvPdf: "/cv.pdf",
};

export function getCv(lang: Locale): Cv {
  return {
    name: rawCv.name,
    title: t(rawCv.title, lang),
    location: t(rawCv.location, lang),
    email: rawCv.email,
    socials: rawCv.socials,
    summary: t(rawCv.summary, lang),
    education: rawCv.education.map((e) => ({
      degree: t(e.degree, lang),
      school: t(e.school, lang),
      period: t(e.period, lang),
      bullets: e.bullets.map((b) => t(b, lang)),
    })),
    experience: rawCv.experience.map((e) => ({
      role: t(e.role, lang),
      company: t(e.company, lang),
      period: t(e.period, lang),
      bullets: e.bullets.map((b) => t(b, lang)),
    })),
    skills: Object.fromEntries(
      rawCv.skills.map((g) => [
        t(g.category, lang),
        g.items.map((i) => t(i, lang)),
      ])
    ),
    languages: rawCv.languages.map((l) => ({
      name: t(l.name, lang),
      level: t(l.level, lang),
      pct: l.pct,
    })),
    cvPdf: rawCv.cvPdf,
  };
}
