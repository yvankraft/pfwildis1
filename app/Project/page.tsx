"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { SiGithub, SiVercel } from "react-icons/si";
import { FiExternalLink, FiBookOpen } from "react-icons/fi";
import { image } from "motion/react-client";

interface Project {
  title: string;
  category: string;
  tech: string[];
  description: string;
  link: string;
  github: string;
  tuto: string;
  image: string; // Enlève le "?" s'il y en avait un
}

const projects = [
  {
    title: "E-Shop Marketplace",
    category: "Full-Stack Development",
    tech: ["Next.js", "React", "Tailwind CSS", "API Logic"],
    description:
      "A scalable e-commerce platform focusing on backend architecture and complex state management.",
    link: "https://e-shop-alpha-ashen.vercel.app/login",
    github: "https://github.com/yvankraft/e-shop.git",
    tuto: "/tuto/e-shop",
    image: "/eshop.png",
  },
  {
    title: "Interactive Resume",
    category: "Web Interaction",
    tech: ["React.js", "JavaScript (ES6+)", "CSS3"],
    description:
      "A dynamic resume developed to demonstrate modern web interactions and smooth user experience.",
    link: "https://yvankraft.github.io/home",
    github: "https://github.com/yvankraft/CV.git",
    tuto: "/tuto/cv",
  },
  {
    title: "Automobile Journal",
    category: "Web Design",
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    description:
      "A responsive web magazine focused on high-performance UI/UX design and mobile-first approach.",
    link: "https://page-web-fawn-five.vercel.app",
    github: "https://github.com/yvankraft/Page_web.git",
    tuto: "/tuto/auto",
    image: "/auto.png",
  },
  {
    title: "Droners Concept",
    category: "Landing Page",
    tech: ["Next.js", "Framer Motion", "Technical Visualization"],
    description:
      "Visualizing technical concepts in the field of unmanned aviation with advanced animations.",
    link: "https://droners-tau.vercel.app", // Ajoute le lien si disponible
    github: "https://github.com/yvankraft/droners.git",
    tuto: "/tuto/droners",
    image: "/drone.png",
  },
  {
    title: "Personal Portfolio",
    category: "Performance & Design",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Three.js"],
    description:
      "My professional portfolio (this site) showcasing technical projects with optimized performance.",
    link: "https://pfwildis1.vercel.app",
    github: "https://github.com/yvankraft/pfwildis1.git",
    tuto: "/tuto/pf",
    image: "/pf.png",
  },
];
export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950 flex flex-col justify-center items-center">
      <div className="max-w-6xl   ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col justify-center items-center h-[100vh] w-[100%] mb-10"
        >
          <video
            src="/bg.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          >
            Your browser does not support the video tag.
          </video>
          <div className="relative z-20 text-center px-6">
            <h1 className="text-6xl font-black uppercase tracking-tighter text-white  ">
              Project
            </h1>
            <p className="text-xl opacity-60 mt-4 max-w-2xl text-white">
              Here I'm not presenting projects, but I'm also giving you the
              opportunity to follow tutorials to recreate these pages if you'd
              like.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl overflow-hidden shadow-xl"
            >
              {/* Image Preview */}
              <div className="relative h-64 w-full bg-zinc-200 dark:bg-zinc-800 overflow-hidden">
                <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-transparent transition-colors z-10" />
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full">
                    No image available
                  </div>
                )}
                <div className="flex items-center justify-center h-full text-zinc-500 italic uppercase font-bold tracking-widest">
                  Preview {project.title}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">
                  {project.category}
                </span>
                <h3 className="text-3xl font-bold mt-2 dark:text-white uppercase">
                  {project.title}
                </h3>
                <p className="mt-4 opacity-70 leading-relaxed min-h-[60px]">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-[10px] font-bold rounded-full uppercase tracking-tighter"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-4 mt-8 pt-6 border-t border-zinc-100 dark:border-zinc-800">
                  <a
                    href={project.link}
                    target="_blank"
                    className="flex items-center gap-2 text-sm font-bold hover:text-blue-600 transition-colors"
                  >
                    <FiExternalLink size={18} /> LIVE DEMO
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-2 text-sm font-bold hover:text-blue-600 transition-colors"
                  >
                    <SiGithub size={18} /> CODE
                  </a>
                  <a
                    href={project.tuto}
                    className="flex items-center gap-2 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:opacity-80 transition-opacity uppercase border border-emerald-600/20 px-2 py-1 rounded-md bg-emerald-50 dark:bg-emerald-900/20"
                  >
                    <FiBookOpen size={16} /> Tutorial
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
