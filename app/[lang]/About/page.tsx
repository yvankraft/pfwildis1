"use client";
import * as THREE from "three"; // Importez Three pour les types
import { motion } from "framer-motion";
import { Suspense, useRef, useState, useEffect, useMemo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Environment, Float } from "@react-three/drei";
import { useTheme } from "next-themes";
import { GiCircuitry, GiAutoRepair } from "react-icons/gi";
import { PiEngineBold } from "react-icons/pi";
import { LuPackage } from "react-icons/lu";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiThreedotjs,
  SiGreensock,
  SiFramer,
  SiFigma,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiBlender,
  SiUnity,
  SiDaisyui,
} from "react-icons/si";

// Types
interface Tool {
  name: string;
  cat: string;
  icon: React.ReactNode;
  color: string;
  desc: string;
  doc: string;
  video: string;
  large?: boolean;
}

const tools: Tool[] = [
  // --- Programming Section
  {
    name: "TypeScript",
    cat: "Prog",
    icon: <SiTypescript />,
    color: "#3178C6",
    large: true,
    desc: "A strongly typed superset of JavaScript that scales from small scripts to large enterprise applications, ensuring code reliability.",
    doc: "https://www.typescriptlang.org/",
    video: "zQnBQ4tB3ZA",
  },
  {
    name: "JavaScript",
    cat: "Prog",
    icon: <SiJavascript />,
    color: "#F7DF1E",
    desc: "The core language of the modern web, used to create interactive and complex logic across all digital platforms.",
    doc: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    video: "lkIFF4maKMU",
  },
  {
    name: "HTML",
    cat: "Prog",
    icon: <SiHtml5 />,
    color: "#E34F26",
    desc: "The standard markup language for documents designed to be displayed in a web browser, forming the backbone of all web pages.",
    doc: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    video: "ok-plXXHlWw",
  },
  {
    name: "CSS",
    cat: "Prog",
    icon: <SiCss />,
    color: "#1572B6",
    desc: "A style sheet language used for describing the presentation of a document, including layouts, colors, and fonts.",
    doc: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    video: "OEV8gMkCHXQ",
  },

  // --- Frameworks Section
  {
    name: "Next.js",
    cat: "Frame",
    icon: <SiNextdotjs />,
    color: "#000000",
    large: true,
    desc: "A powerful React framework for production, offering features like Server-Side Rendering (SSR) and Static Site Generation (SSG).",
    doc: "https://nextjs.org/docs",
    video: "Sklc_fQBmcs",
  },
  {
    name: "React",
    cat: "Frame",
    icon: <SiReact />,
    color: "#61DAFB",
    desc: "A JavaScript library for building user interfaces based on a component-driven architecture for high-performance apps.",
    doc: "https://react.dev/",
    video: "Tn6-PIqc4UM",
  },
  {
    name: "Tailwind",
    cat: "Frame",
    icon: <SiTailwindcss />,
    color: "#06B6D4",
    desc: "A utility-first CSS framework for rapidly building custom user interfaces without leaving your HTML.",
    doc: "https://tailwindcss.com/docs",
    video: "mr15Xzb1Ook",
  },
  {
    name: "DaisyUI",
    cat: "Frame",
    icon: <SiDaisyui />,
    color: "#1AD1A5",
    desc: "The most popular component library for Tailwind CSS, adding clean and accessible component classes to the workflow.",
    doc: "https://daisyui.com/",
    video: "lHZwlzOUOZ4",
  },

  // --- Design & Animation Section
  {
    name: "Three.js",
    cat: "Anim",
    icon: <SiThreedotjs />,
    color: "#000000",
    large: true,
    desc: "A cross-browser JavaScript library and API used to create and display animated 3D computer graphics in a web browser.",
    doc: "https://threejs.org/docs/",
    video: "ZHZh6S9b6DY",
  },
  {
    name: "Figma",
    cat: "Anim",
    icon: <SiFigma />,
    color: "#F24E1E",
    desc: "A collaborative interface design tool used to create high-fidelity prototypes and UI/UX designs in real-time.",
    doc: "https://help.figma.com/",
    video: "Cx2dkpBxst8",
  },
  {
    name: "GSAP",
    cat: "Anim",
    icon: <SiGreensock />,
    color: "#88CE02",
    desc: "The industry-standard for high-performance web animations, providing ultra-smooth movement for every element.",
    doc: "https://gsap.com/docs/",
    video: "rOs-TFUeuSg",
  },
  {
    name: "Motion",
    cat: "Anim",
    icon: <SiFramer />,
    color: "#0055FF",
    desc: "A production-ready motion library for React that makes creating fluid transitions and complex gestures simple.",
    doc: "https://www.framer.com/motion/",
    video: "31y7-k3ZG0g",
  },
  {
    name: "Blender",
    cat: "Anim",
    icon: <SiBlender />,
    color: "#F5792A",
    desc: "A professional 3D creation suite used for modeling, animation, rendering, and complex 3D asset development.",
    doc: "https://docs.blender.org/",
    video: "nZ2I-8h0wPQ",
  },
  {
    name: "Unity",
    cat: "Anim",
    icon: <SiUnity />,
    color: "#000000",
    large: true,
    desc: "A powerful real-time development platform for creating immersive 3D/2D games and interactive experiences.",
    doc: "https://docs.unity.com/",
    video: "iqlH4okiQqg",
  },
  {
    name: "Electrical Engineering",
    cat: "Tech",
    icon: <GiCircuitry />,

    color: "#FFD700",
    large: true,
    desc: "Currently studying Electrical Engineering (B.Eng.) at FH Südwestfalen. Focused on technical mathematics, physical foundations, and complex system analysis[cite: 8, 9, 10].",
    doc: "https://en.wikipedia.org/wiki/Electrical_engineering",
    video: "QQewdCJTcIU",
  },
  {
    name: "Thermodynamics",
    cat: "Tech",
    icon: <PiEngineBold />,
    color: "#FF4500",
    desc: "Solid background in thermodynamics and technical mechanics from my technical baccalaureate in Refrigeration and Air Conditioning.",
    doc: "https://en.wikipedia.org/wiki/Thermodynamics",
    video: "fSEFfWf2au0",
  },
  {
    name: "Technical Maintenance",
    cat: "Practical",
    icon: <GiAutoRepair />,
    color: "#808080",
    desc: "Hands-on experience in installing and maintaining cooling systems and technical components[cite: 21].",
    doc: "https://en.wikipedia.org/wiki/Maintenance",
    video: "DzVJiSQNbew",
  },
  {
    name: "Logistics & Precision",
    cat: "Practical",
    icon: <LuPackage />,
    color: "#0056b3",
    desc: "Proven reliability and precision in high-pressure operational environments, ensuring safety and efficiency[cite: 17, 18].",
    doc: "https://en.wikipedia.org/wiki/Logistics",
    video: "MMyZ9Pu01RI",
  },
];

//initialisation du srollTrigger
gsap.registerPlugin(ScrollTrigger);

// Composant interne pour gérer chaque modèle
function SingleModel({
  url,
  position,
}: {
  url: string;
  position?: [number, number, number];
}) {
  const meshRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF(url);

  const { theme } = useTheme();

  useGSAP(() => {
    if (!meshRef.current) return;

    // On crée la timeline ici, elle s'appliquera à cet objet précis
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "body", // Le scroll de toute la page pilote l'objet
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
    });

    tl.to(meshRef.current.position, {
      y: 1,
      ease: "expo",
    })
      .to(meshRef.current.position, {
        z: 1.2,
        ease: "expo",
      })
      .to(meshRef.current.rotation, {
        y: -Math.PI * 0.6, // 90 degrés seulement
        ease: "expo",
      })
      .to(meshRef.current.scale, {
        x: 3,
        y: 3,
        z: 3,
        ease: "expo",
      });
  }, [theme]); // [] pour ne l'exécuter qu'au montage

  return (
    <Float speed={2} rotationIntensity={0.5}>
      <primitive
        ref={meshRef}
        object={scene.clone()}
        position={position}
        scale={2}
      />
    </Float>
  );
}

const page = () => {
  const { theme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(false);
  // État pour savoir quel outil est affiché dans le sidecar
  const [selectedTool, setSelectedTool] = useState<Tool | null>(null);

  const renderGrid = (cat: string, label: string) => (
    <div className="mb-8">
      <h3 className="text-sm font-bold uppercase tracking-widest mb-4 opacity-50 dark:text-white">
        {label}
      </h3>
      <div className="grid grid-cols-3 gap-3">
        {tools
          .filter((t) => t.cat === cat)
          .map((t) => (
            <label
              key={t.name}
              htmlFor="my-sidecar"
              onClick={() => setSelectedTool(t)}
              className={`p-4 rounded-xl border border-slate-300 dark:border-slate-700 flex flex-col items-center justify-center gap-2 transition-all cursor-pointer hover:bg-white/10 group ${t.large ? "col-span-2" : "col-span-1"}`}
            >
              <span
                className="text-2xl transition-transform group-hover:scale-110"
                style={{ color: t.color }}
              >
                {t.icon}
              </span>
              <span className="text-[10px] font-bold uppercase dark:text-white">
                {t.name}
              </span>
            </label>
          ))}
      </div>
    </div>
  );

  return (
    <div className="grid dark:bg-zinc-900">
      <input id="my-sidecar" type="checkbox" className="drawer-toggle" />

      {/* --- CONTENU PRINCIPAL (Scrolled Content) --- */}
      <div className="drawer-content flex flex-col dark:bg-zinc-900">
        {/* Canvas 3D Fixe */}
        <section className="fixed inset-0 h-screen w-full transition-all duration-1000 pointer-events-none bg-transparent dark:bg-from-zinc-900">
          <Canvas camera={{ position: [0, 2, 10], fov: 50 }}>
            {" "}
            {isDarkMode ? (
              <>
                {/* Mode Sombre : Ambiance tamisée avec lumière jaune */}
                <ambientLight intensity={0.5} />
              </>
            ) : (
              <>
                {/* Mode Clair : Éclairage standard */}
                <ambientLight intensity={0.7} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <Environment preset="city" />
              </>
            )}
            <SingleModel url="/turbine.glb" position={[0, -4, -5]} />
          </Canvas>
        </section>

        {/* Sections de texte */}
        <section className="relative pointer-events-auto">
          <div className="h-screen flex flex-col justify-center items-center z-20 ">
            <h1 className=" text-7xl font-bold uppercase tracking-tighter mix-blend-difference text-shadow-white">
              Technic and Sofware
            </h1>
            <p className="text-3xl font-mono tracking-tighter text-shadow-white">
              side by side
            </p>
          </div>
          <div
            className=" lg:w-1/2  p-8 relative z-20 
                backdrop-blur-md bg-white/80 dark:bg-zinc-900/80 
                border border-slate-400 dark:border-slate-700 
                rounded-2xl shadow-2xl mr-[1%] ml-auto dark:shadow-slate-700 mb-50"
          >
            <h2 className="text-3xl font-bold uppercase mb-4 dark:text-white">
              Introdution
            </h2>
            <p className="text-l font-bold uppercase mb-4 dark:text-white">
              who i am?
            </p>
            <p className="mb-4">
              My name is Yvan Wildis Ngone Tchinda and I am a passionate
              individual who develops in my free time.
              <br />
              But before being a developer, I'm a technician, and I think that
              aspect of me contributes a lot to my passion.
              <br />I will present this to you in three different sections.
            </p>
          </div>
          <div
            className=" lg:w-1/2  p-8 relative z-20 
                backdrop-blur-md bg-white/80 dark:bg-zinc-900/80 
                border border-slate-400 dark:border-slate-700 
                rounded-2xl shadow-2xl mr-[1%] ml-auto dark:shadow-slate-700 mb-50"
          >
            <h2 className="text-3xl font-bold uppercase mb-4 dark:text-white">
              Sofware
            </h2>
            <p className="text-l font-bold uppercase mb-4 dark:text-white">
              What makes me credible?
            </p>
            <p className="mb-4">
              From the moment I could afford a laptop, I became interested in
              programming. Although I already had a good foundation in C, I
              really started spending nights programming with HTML and CSS
              thanks to YouTube tutorials. Then I moved on to JavaScript.
              <br />
              Over time I became familiar with frameworks like React and for a
              while I was very interested in React Native. But not for long.
              <br />
              Until recently I mainly used it quickly when I discovered three.js
              then I switched to nextjs to familiarize myself with next and also
              to have fewer problems with Vercel.
              <br />
              App development remains a field that greatly interests me, but for
              the moment I prefer to refine my knowledge of Three.js.
            </p>
          </div>
          {/* Tools Card */}
          <div className="lg:w-1/2 p-8 backdrop-blur-md bg-white/80 dark:bg-zinc-900/80 border border-slate-400 dark:border-slate-700 rounded-2xl shadow-2xl mr-[1%] ml-auto mb-40">
            <h2 className="text-3xl font-bold uppercase mb-4 dark:text-white">
              Tools
            </h2>
            {renderGrid("Prog", "Programmation")}
            {renderGrid("Frame", "Frameworks")}
            {renderGrid("Anim", "Design & Animation")}
          </div>
          <div
            className=" lg:w-1/2  p-8 relative z-20 
                backdrop-blur-md bg-white/80 dark:bg-zinc-900/80 
                border border-slate-400 dark:border-slate-700 
                rounded-2xl shadow-2xl mr-[1%] ml-auto dark:shadow-slate-700"
          >
            <h2 className="text-3xl font-bold uppercase mb-4 dark:text-white">
              Engineering Background
            </h2>
            <p className="text-l font-bold uppercase mb-4 dark:text-white">
              What technical aspect are we going to talk about?
            </p>
            <p className="mb-4">
              Before becoming a programmer, I first went through the field of
              electronics, studying refrigeration and air conditioning in
              secondary school, and subsequently my current studies in
              electronics.
              <br />
              In my opinion, this aspect of my life is what pushes me, day by
              day, to become interested in programming.
              <br />
            </p>
            <p className="text-l font-bold uppercase mb-4 dark:text-white">
              But in practice, what does that mean?
            </p>
            <p className="mb-4">
              It's not the knowledge of a principle, whether it's programming or
              electronic wiring, that motivates me, but rather the fascination
              of learning how human intelligence pushes the boundaries and laws
              of physics.
            </p>
            <p className="text-l font-bold uppercase mb-4 dark:text-white">
              Here is some of my technical knowledge
            </p>
            {renderGrid("Tech", "Engineering & Industrial Skills")}
            {renderGrid("Practical", "Practical")}
          </div>
        </section>
      </div>
      <div className="drawer-side z-[100]">
        <label htmlFor="my-sidecar" className="drawer-overlay"></label>

        <div className="p-0 w-80 md:w-[450px] min-h-full bg-white dark:bg-zinc-950 border-l border-slate-400 dark:border-slate-700 shadow-2xl overflow-y-auto">
          {selectedTool && (
            <div className="flex flex-col h-full animate-in fade-in slide-in-from-right duration-300">
              {/* Vidéo YouTube en en-tête */}
              <div className="w-full aspect-video bg-black">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${selectedTool.video}?&mute=1&modestbranding=1`}
                  title={selectedTool.name}
                  allow="autoplay; encrypted-media"
                />
              </div>

              <div className="p-8 flex flex-col flex-1">
                {/* Titre et Icône */}
                <div className="flex items-center gap-4 mb-6">
                  <span
                    className="text-5xl"
                    style={{ color: selectedTool.color }}
                  >
                    {selectedTool.icon}
                  </span>
                  <div>
                    <h3 className="text-3xl font-black uppercase dark:text-white leading-none">
                      {selectedTool.name}
                    </h3>
                    <span className="text-xs font-bold opacity-50 uppercase tracking-widest">
                      {selectedTool.cat}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <div className="flex-1">
                  <p className="text-lg opacity-80 leading-relaxed dark:text-slate-300 mb-8 border-l-4 border-slate-300 dark:border-slate-700 pl-4 italic">
                    {selectedTool.desc}
                  </p>
                </div>

                {/* Boutons d'action */}
                <div className="mt-auto pt-6 flex flex-col gap-3">
                  <a
                    href={selectedTool.doc}
                    target="_blank"
                    className="btn btn-primary w-full gap-2"
                    style={{
                      backgroundColor: selectedTool.color,
                      borderColor: selectedTool.color,
                    }}
                  >
                    Official Documentation
                  </a>

                  <label
                    htmlFor="my-sidecar"
                    className="btn btn-ghost btn-sm border border-slate-300 dark:border-slate-700"
                  >
                    close
                  </label>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default page;
