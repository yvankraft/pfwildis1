"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, Mail, Download, ExternalLink, ArrowRight } from "lucide-react";
import { SiGithub, SiX } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { getCv, type Cv } from "../../data/cv";
import { getProjects } from "../../data/projects";
import StatusBadge from "../../components/StatusBadge";
import { useLang } from "../../components/LangProvider";

const fadeIn = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
} as const;

function SectionTitle({ label, title }: { label: string; title: string }) {
  return (
    <div className="mb-6">
      <p className="text-xs uppercase tracking-widest text-zinc-500">{label}</p>
      <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white mt-1">
        {title}
      </h2>
    </div>
  );
}

function Timeline({
  items,
  type,
}: {
  items: Cv["experience"] | Cv["education"];
  type: "experience" | "education";
}) {
  return (
    <div className="relative ps-6 border-s-2 border-zinc-200 dark:border-zinc-800 space-y-8">
      {items.map((item, i) => {
        const heading = type === "experience"
          ? (item as Cv["experience"][number]).role
          : (item as Cv["education"][number]).degree;
        const sub = type === "experience"
          ? (item as Cv["experience"][number]).company
          : (item as Cv["education"][number]).school;
        return (
          <motion.div key={i} {...fadeIn} className="relative">
            <span className="absolute -start-[31px] top-2 w-3 h-3 rounded-full bg-blue-500 ring-4 ring-blue-500/20" />
            <div className="glass p-6">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="font-bold text-zinc-900 dark:text-white">
                    {heading}
                  </h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    {sub}
                  </p>
                </div>
                <span className="font-mono text-xs px-2 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">
                  {item.period}
                </span>
              </div>
              <ul className="mt-4 space-y-1.5">
                {item.bullets.map((b, j) => (
                  <li
                    key={j}
                    className="text-sm text-zinc-600 dark:text-zinc-400 flex gap-2"
                  >
                    <span className="text-blue-500 mt-0.5">•</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

export default function AboutPage() {
  const { lang, dict, href } = useLang();
  const cv = getCv(lang);
  const projects = getProjects(lang);

  const openEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    const [user, domain] = cv.email.split("@");
    const [name, ext] = domain.split(".");
    window.location.href = `mailto:${user}@${name}.${ext}`;
  };

  const socials = [
    { href: cv.socials.github, icon: SiGithub, label: "GitHub" },
    { href: cv.socials.linkedin, icon: FaLinkedin, label: "LinkedIn" },
    { href: cv.socials.x, icon: SiX, label: "X" },
  ];

  return (
    <main className="min-h-screen px-4 pb-20 max-w-6xl mx-auto">
      {/* Hero */}
      <motion.section {...fadeIn} className="py-12 md:py-20">
        <h1 className="text-5xl md:text-7xl font-black tracking-tight text-zinc-900 dark:text-white">
          {cv.name}
        </h1>
        <p className="mt-3 text-xl md:text-2xl font-medium text-blue-600 dark:text-blue-500">
          {cv.title}
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-zinc-500 dark:text-zinc-400">
          <span className="flex items-center gap-1.5">
            <MapPin size={16} /> {cv.location}
          </span>
          <a
            href="#"
            onClick={openEmail}
            className="flex items-center gap-1.5 hover:text-blue-500 transition-colors"
          >
            <Mail size={16} /> {dict.about.email}
          </a>
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href={cv.cvPdf}
            download
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-900 dark:bg-blue-500 text-white dark:text-zinc-900 font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            <Download size={16} /> {dict.common.downloadCv}
          </a>
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 dark:hover:text-zinc-900 transition-colors"
            >
              <s.icon size={18} />
            </a>
          ))}
        </div>
      </motion.section>

      {/* Profile */}
      <motion.section {...fadeIn} className="mb-16">
        <SectionTitle
          label={dict.about.profileLabel}
          title={dict.about.profileTitle}
        />
        <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-3xl">
          {cv.summary}
        </p>
      </motion.section>

      {/* Grid */}
      <div className="grid lg:grid-cols-3 gap-10">
        {/* Main column */}
        <div className="lg:col-span-2 space-y-16">
          <section>
            <SectionTitle
              label={dict.about.experienceLabel}
              title={dict.about.experienceTitle}
            />
            <Timeline items={cv.experience} type="experience" />
          </section>

          <section>
            <SectionTitle
              label={dict.about.educationLabel}
              title={dict.about.educationTitle}
            />
            <Timeline items={cv.education} type="education" />
          </section>

          <section>
            <SectionTitle
              label={dict.about.projectsLabel}
              title={dict.about.projectsTitle}
            />
            <div className="space-y-4">
              {projects
                .filter((p) => p.featured)
                .map((p) => {
                  const card = (
                    <>
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="font-bold text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {p.title}
                          </h3>
                          <StatusBadge status={p.status} />
                        </div>
                        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                          {p.description}
                        </p>
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {p.tech.map((t) => (
                            <span
                              key={t}
                              className="px-2 py-0.5 text-[10px] font-semibold rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                      {p.link && (
                        <ExternalLink
                          size={18}
                          className="shrink-0 mt-1 text-zinc-400 group-hover:text-blue-500 transition-colors"
                        />
                      )}
                    </>
                  );
                  const cardClass =
                    "glass p-5 flex items-start justify-between gap-4 group hover:border-blue-500/50 transition-colors";
                  return p.link ? (
                    <motion.a
                      key={p.title}
                      {...fadeIn}
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${cardClass} block`}
                    >
                      {card}
                    </motion.a>
                  ) : (
                    <motion.div key={p.title} {...fadeIn} className={cardClass}>
                      {card}
                    </motion.div>
                  );
                })}
            </div>
            <Link
              href={href("/Project")}
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline"
            >
              {dict.common.seeAllProjects} <ArrowRight size={16} />
            </Link>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="space-y-10 lg:sticky lg:top-28 self-start">
          <motion.section {...fadeIn} className="glass p-6">
            <SectionTitle
              label={dict.about.skillsLabel}
              title={dict.about.skillsTitle}
            />
            <div className="space-y-5">
              {Object.entries(cv.skills).map(([cat, items]) => (
                <div key={cat}>
                  <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">
                    {cat}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {items.map((s) => (
                      <span
                        key={s}
                        className="px-2.5 py-1 text-xs font-medium rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section {...fadeIn} className="glass p-6">
            <SectionTitle
              label={dict.about.languagesLabel}
              title={dict.about.languagesTitle}
            />
            <div className="space-y-5">
              {cv.languages.map((l) => (
                <div key={l.name}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="font-semibold text-zinc-900 dark:text-white">
                      {l.name}
                    </span>
                    <span className="text-zinc-500 dark:text-zinc-400">
                      {l.level}
                    </span>
                  </div>
                  <div className="h-2 rounded-full bg-zinc-200 dark:bg-zinc-800 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${l.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="h-full rounded-full bg-blue-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
        </aside>
      </div>
    </main>
  );
}
