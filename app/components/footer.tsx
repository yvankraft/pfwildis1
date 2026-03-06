"use client";
import React from "react";

const Footer = () => {
  const tech = [
    { n: "Next.js", slug: "nextdotjs", c: "FFFFFF" },
    { n: "Three.js", slug: "threedotjs", c: "FFFFFF" },
    { n: "Tailwind CSS", slug: "tailwindcss", c: "06B6D4" },
    { n: "Framer", slug: "framer", c: "0055FF" },
    { n: "GSAP", slug: "greensock", c: "88CE02" },
    { n: "React", slug: "react", c: "61DAFB" },
  ];

  return (
    <footer className="z-[1000] py-10 bg-white border border-slate-200 overflow-hidden rounded-[20px] m-2 dark:bg-zinc-900 dark:border-zinc-800">
      {/* SECTION MARQUEE (Bandeau défilant) */}
      <div className="w-full overflow-hidden relative group">
        <div className="flex w-max animate-[scroll_20s_linear_infinite] group-hover:[animation-play-state:paused]">
          {[...tech, ...tech, ...tech, ...tech].map((t, i) => (
            <div key={i} className="flex items-center mx-10">
              <img
                src={`https://cdn.simpleicons.org/${t.slug}/${t.c}`}
                alt={t.n}
                className="h-6 mr-3 dark:invert"
              />
              <span className="font-bold text-lg dark:text-white">{t.n}</span>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION CREDITS */}
      <div className="text-center mt-8 text-[12px] opacity-60 px-5">
        <div className="mb-4 dark:text-zinc-400">
          <strong>© 2026 CV2.</strong> Tous droits réservés.
        </div>

        <div className="max-w-[600px] mx-auto leading-[1.8] text-slate-500 dark:text-zinc-500">
          <p>
            This work is based on
            <a
              href="https://sketchfab.com/3d-models/house-d7498a45f2e84aa397b33a8beab16950"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 font-medium hover:underline mx-1"
            >
              "House"
            </a>
            by
            <a
              href="https://sketchfab.com/alyona_novikova22"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 font-medium hover:underline mx-1"
            >
              alyona_novikova22
            </a>
            licensed under
            <a
              href="http://creativecommons.org/licenses/by/4.0/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 font-medium hover:underline ml-1"
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
