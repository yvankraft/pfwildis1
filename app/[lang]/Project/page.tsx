"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { SiGithub } from "react-icons/si";
import { FiExternalLink, FiBookOpen } from "react-icons/fi";
import { getProjects, type ProjectStatus } from "../../data/projects";
import StatusBadge from "../../components/StatusBadge";
import { useLang } from "../../components/LangProvider";

export default function ProjectsPage() {
  const { lang, dict, href } = useLang();
  const projects = getProjects(lang);
  const [filter, setFilter] = useState<ProjectStatus | "all">("all");

  const counts: Record<ProjectStatus | "all", number> = {
    all: projects.length,
    live: projects.filter((p) => p.status === "live").length,
    "in development": projects.filter((p) => p.status === "in development")
      .length,
    prototype: projects.filter((p) => p.status === "prototype").length,
  };

  const filters: { label: string; value: ProjectStatus | "all" }[] = [
    { label: dict.projects.filterAll, value: "all" },
    { label: dict.status.live, value: "live" },
    { label: dict.status.inDevelopment, value: "in development" },
    { label: dict.status.prototype, value: "prototype" },
  ];

  const filtered =
    filter === "all"
      ? projects
      : projects.filter((p) => p.status === filter);

  const featured = projects.find((p) => p.featured && p.status === "live");

  const stats = [
    { label: dict.status.live, value: counts.live },
    { label: dict.status.inDevelopment, value: counts["in development"] },
    { label: dict.status.prototype, value: counts.prototype },
  ];

  return (
    <main className="relative min-h-screen bg-zinc-50 dark:bg-zinc-950 flex flex-col items-center pb-20 overflow-hidden">
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(245,158,11,0.12),transparent_70%)] dark:bg-[radial-gradient(circle,rgba(245,158,11,0.08),transparent_70%)] pointer-events-none" />
      <div className="max-w-6xl w-full px-4 relative">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid lg:grid-cols-5 gap-10 items-end py-16 md:py-24"
        >
          <div className="lg:col-span-3">
            <p className="text-xs uppercase tracking-widest text-amber-600 dark:text-amber-500">
              {dict.projects.eyebrow}
            </p>
            <h1 className="mt-2 text-5xl md:text-7xl font-black tracking-tight text-zinc-900 dark:text-white">
              {dict.projects.title}
            </h1>
            <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400 max-w-xl leading-relaxed">
              {dict.projects.intro}
            </p>
            <div className="mt-8 flex gap-8">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-3xl font-black text-zinc-900 dark:text-white">
                    {s.value}
                  </p>
                  <p className="text-xs uppercase tracking-widest text-zinc-500">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {featured && (
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              href={featured.link}
              target="_blank"
              rel="noopener noreferrer"
              className="lg:col-span-2 glass p-6 block group hover:border-amber-500/50 transition-colors"
            >
              <div className="flex items-center justify-between gap-2">
                <p className="text-xs uppercase tracking-widest text-zinc-500">
                  {dict.projects.featured}
                </p>
                <StatusBadge status={featured.status} />
              </div>
              <h2 className="mt-3 text-2xl font-bold text-zinc-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                {featured.title}
              </h2>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {featured.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {featured.tech.slice(0, 3).map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 text-[10px] font-semibold rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-amber-600 dark:text-amber-400">
                <FiExternalLink size={16} /> {dict.common.liveDemo}
              </span>
            </motion.a>
          )}
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${filter === f.value
                  ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
                  : "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700"
                }`}
            >
              {f.label} ({counts[f.value]})
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filtered.map((project, index) => (
            <motion.div
              layout
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl overflow-hidden shadow-xl"
            >
              {/* Image Preview */}
              <div className="relative h-64 w-full bg-gradient-to-br from-zinc-200 to-zinc-300 dark:from-zinc-800 dark:to-zinc-900 overflow-hidden">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full px-6">
                    <span className="text-4xl font-black uppercase tracking-tight text-zinc-400/60 dark:text-zinc-600/60 text-center select-none">
                      {project.title}
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-amber-600 dark:text-amber-500 uppercase tracking-widest">
                    {project.category}
                  </span>
                  <StatusBadge status={project.status} />
                </div>
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
                <div className="flex flex-wrap gap-4 mt-8 pt-6 border-t border-zinc-100 dark:border-zinc-800">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-bold hover:text-amber-600 dark:hover:text-amber-500 transition-colors"
                    >
                      <FiExternalLink size={18} /> {dict.common.liveDemo}
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-bold hover:text-amber-600 dark:hover:text-amber-500 transition-colors"
                    >
                      <SiGithub size={18} /> {dict.common.code}
                    </a>
                  )}
                  {project.tuto && (
                    <a
                      href={href(project.tuto)}
                      className="flex items-center gap-2 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:opacity-80 transition-opacity uppercase border border-emerald-600/20 px-2 py-1 rounded-md bg-emerald-50 dark:bg-emerald-900/20"
                    >
                      <FiBookOpen size={16} /> {dict.common.tutorial}
                    </a>
                  )}
                  {!project.link && !project.github && !project.tuto && (
                    <span className="text-xs text-zinc-400 dark:text-zinc-500 italic">
                      {dict.common.notPublished}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
