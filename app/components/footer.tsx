"use client";
import React from "react";
import Link from "next/link";
import { SiGithub, SiX } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { getCv } from "../data/cv";
import { useLang } from "./LangProvider";

const Footer = () => {
  const { lang, dict, href } = useLang();
  const cv = getCv(lang);

  const openEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    const [user, domain] = cv.email.split("@");
    const [name, ext] = domain.split(".");
    window.location.href = `mailto:${user}@${name}.${ext}`;
  };

  const quickLinks = [
    { path: "/", label: dict.nav.home },
    { path: "/About", label: dict.nav.about },
    { path: "/Project", label: dict.nav.projects },
    { path: "/contact", label: dict.nav.contact },
  ];

  const socials = [
    { url: cv.socials.github, icon: SiGithub, label: "GitHub" },
    { url: cv.socials.linkedin, icon: FaLinkedin, label: "LinkedIn" },
    { url: cv.socials.x, icon: SiX, label: "X" },
  ];

  const heading =
    "text-xs font-bold uppercase tracking-widest text-zinc-900 dark:text-white mb-4";
  const link =
    "text-sm text-zinc-600 dark:text-zinc-400 hover:text-blue-500 transition-colors";

  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4">
        {/* Top */}
        <div className="grid gap-10 md:grid-cols-4 py-12">
          <div className="md:col-span-2">
            <Link
              href={href("/")}
              className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white"
            >
              Yvan W<span className="text-blue-500">.</span>
            </Link>
            <p className="mt-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
              {cv.title}
            </p>
            <p className="mt-1 text-sm text-zinc-500">{dict.footer.tagline}</p>
            <div className="mt-5 flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 transition-colors"
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className={heading}>{dict.footer.navigation}</h3>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l.path}>
                  <Link href={href(l.path)} className={link}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={heading}>{dict.footer.contact}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" onClick={openEmail} className={link}>
                  {dict.footer.emailMe}
                </a>
              </li>
              <li className="text-sm text-zinc-600 dark:text-zinc-400">
                {cv.location}
              </li>
              <li>
                <a href={cv.cvPdf} download className={link}>
                  {dict.common.downloadCv}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-zinc-200 dark:border-zinc-800 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-zinc-500">
          <p>
            © {new Date().getFullYear()} Yvan Wildis Ngone Tchinda.{" "}
            {dict.footer.rights}
          </p>
          <p className="text-center md:text-end">
            {dict.footer.creditBased}
            <a
              href="https://sketchfab.com/3d-models/house-d7498a45f2e84aa397b33a8beab16950"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 dark:text-blue-400 font-medium hover:underline mx-1"
            >
              &ldquo;House&rdquo;
            </a>
            {dict.footer.creditBy}
            <a
              href="https://sketchfab.com/alyona_novikova22"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 dark:text-blue-400 font-medium hover:underline mx-1"
            >
              alyona_novikova22
            </a>
            {dict.footer.creditLicensed}
            <a
              href="https://creativecommons.org/licenses/by/4.0/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 dark:text-blue-400 font-medium hover:underline ms-1"
            >
              CC-BY-4.0
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
