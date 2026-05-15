"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react"; // Pour tes icônes expressives

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Empeche les erreurs d'hydratation (le bouton ne s'affiche qu'une fois chargé côté client)
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-xl bg-zinc-200 dark:bg-zinc-800"
    >
      {theme === "dark" ? (
        <Sun size={20} color="#fbbf24" />
      ) : (
        <Moon size={20} color="#18181b" />
      )}
    </button>
  );
}
