"use client";
import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Download, ArrowUpRight } from "lucide-react";
import { SiGithub, SiX } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { getCv } from "../../data/cv";
import { useLang } from "../../components/LangProvider";

const fadeIn = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
} as const;

export default function ContactPage() {
  const { lang, dict } = useLang();
  const cv = getCv(lang);

  const openEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    const [user, domain] = cv.email.split("@");
    const [name, ext] = domain.split(".");
    window.location.href = `mailto:${user}@${name}.${ext}`;
  };

  const socials = [
    {
      name: "GitHub",
      handle: "@yvankraft",
      url: cv.socials.github,
      icon: SiGithub,
    },
    {
      name: "LinkedIn",
      handle: "Yvan Ngone",
      url: cv.socials.linkedin,
      icon: FaLinkedin,
    },
    {
      name: "X",
      handle: "@wildisyvan53",
      url: cv.socials.x,
      icon: SiX,
    },
  ];

  return (
    <main className="min-h-screen px-4 pb-20 max-w-4xl mx-auto">
      <motion.section {...fadeIn} className="py-12 md:py-20 text-center">
        <p className="text-xs uppercase tracking-widest text-zinc-500">
          {dict.contact.eyebrow}
        </p>
        <h1 className="mt-2 text-5xl md:text-7xl font-black tracking-tight text-zinc-900 dark:text-white">
          {dict.contact.title}
        </h1>
        <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl mx-auto">
          {cv.summary}
        </p>
      </motion.section>

      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <motion.a
          {...fadeIn}
          href="#"
          onClick={openEmail}
          className="glass p-8 flex flex-col items-center justify-center text-center gap-3 group hover:border-amber-500/50 transition-colors"
        >
          <span className="w-12 h-12 flex items-center justify-center rounded-full bg-amber-500/10 text-amber-500 group-hover:bg-amber-500 group-hover:text-white transition-colors">
            <Mail size={22} />
          </span>
          <span className="font-bold text-zinc-900 dark:text-white">
            {dict.contact.emailTitle}
          </span>
          <span className="text-sm text-zinc-500">
            {dict.contact.emailSubtitle}
          </span>
        </motion.a>

        <motion.div
          {...fadeIn}
          className="glass p-8 flex flex-col items-center justify-center text-center gap-3"
        >
          <span className="w-12 h-12 flex items-center justify-center rounded-full bg-amber-500/10 text-amber-500">
            <MapPin size={22} />
          </span>
          <span className="font-bold text-zinc-900 dark:text-white">
            {cv.location}
          </span>
          <span className="text-sm text-zinc-500">
            {dict.contact.locationSubtitle}
          </span>
        </motion.div>
      </div>

      <div className="grid sm:grid-cols-3 gap-4 mb-8">
        {socials.map((s) => (
          <motion.a
            key={s.name}
            {...fadeIn}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            className="glass p-6 flex items-center justify-between group hover:border-amber-500/50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <s.icon
                size={22}
                className="text-zinc-700 dark:text-zinc-300 group-hover:text-amber-500 transition-colors"
              />
              <div>
                <p className="font-bold text-sm text-zinc-900 dark:text-white">
                  {s.name}
                </p>
                <p className="text-xs text-zinc-500">{s.handle}</p>
              </div>
            </div>
            <ArrowUpRight
              size={18}
              className="text-zinc-400 group-hover:text-amber-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
            />
          </motion.a>
        ))}
      </div>

      <motion.div {...fadeIn} className="flex justify-center">
        <a
          href={cv.cvPdf}
          download
          className="flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-900 dark:bg-amber-500 text-white dark:text-zinc-900 font-semibold text-sm hover:opacity-90 transition-opacity"
        >
          <Download size={16} /> {dict.common.downloadCv}
        </a>
      </motion.div>
    </main>
  );
}
