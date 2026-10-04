"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import ThemeToggle from "./themeColorButton";
import { useLang } from "./LangProvider";
import { i18n, localeNames } from "@/i18n-config";

function useLocalizedPath() {
  const pathname = usePathname();
  return (locale: string) => {
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/") || `/${locale}`;
  };
}

function LangSwitcher({ lang, label }: { lang: string; label: string }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const localizedPath = useLocalizedPath();

  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={label}
        aria-expanded={open}
        className="w-9 h-9 flex items-center justify-center rounded-full bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-colors text-zinc-700 dark:text-zinc-300"
      >
        <Globe size={18} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.15 }}
            className="absolute end-0 top-full mt-2 glass p-1 min-w-36 flex flex-col z-50"
          >
            {i18n.locales.map((locale) => (
              <Link
                key={locale}
                href={localizedPath(locale)}
                onClick={() => setOpen(false)}
                className={`px-3 py-2 rounded-lg text-sm transition-colors ${lang === locale
                  ? "font-bold bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white"
                  : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                  }`}
              >
                {localeNames[locale]}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileLangList({
  lang,
  onNavigate,
}: {
  lang: string;
  onNavigate: () => void;
}) {
  const localizedPath = useLocalizedPath();
  return (
    <div className="flex flex-wrap gap-1 px-4 py-2">
      {i18n.locales.map((locale) => (
        <Link
          key={locale}
          href={localizedPath(locale)}
          onClick={onNavigate}
          className={`px-3 py-1.5 rounded-full text-xs font-bold transition-colors ${lang === locale
            ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
            : "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
            }`}
        >
          {localeNames[locale]}
        </Link>
      ))}
    </div>
  );
}

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { lang, dict, href } = useLang();

  const links = [
    { href: "/", label: dict.nav.home },
    { href: "/About", label: dict.nav.about },
    { href: "/Project", label: dict.nav.projects },
    { href: "/contact", label: dict.nav.contact },
  ];

  const getStyle = (path: string) => {
    const localized = href(path);
    const isActive = pathname === localized;
    const base =
      "px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300";
    return isActive
      ? `${base} bg-zinc-900 text-white dark:bg-white dark:text-zinc-900`
      : `${base} text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white`;
  };

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[96%] max-w-5xl">
      <nav className="flex items-center justify-between px-4 py-2 rounded-full backdrop-blur-md bg-white/80 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 shadow-xl">
        <Link
          href={href("/")}
          className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white"
        >
          Yvan W<span className="text-amber-500">.</span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link key={l.href} href={href(l.href)} className={getStyle(l.href)}>
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <LangSwitcher lang={lang} label={dict.nav.language} />
          </div>
          <ThemeToggle />
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            className="md:hidden p-2 rounded-full text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-2 p-2 flex flex-col gap-1 glass"
          >
            {links.map((l) => (
              <Link
                key={l.href}
                href={href(l.href)}
                onClick={() => setOpen(false)}
                className={getStyle(l.href)}
              >
                {l.label}
              </Link>
            ))}
            <MobileLangList lang={lang} onNavigate={() => setOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
