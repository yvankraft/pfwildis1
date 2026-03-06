"use client";
import React from "react";

const SocialLinks = () => {
  const socials = [
    {
      name: "GitHub",
      href: "https://github.com/yvankraft",
      color: "hover:text-white",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/yvan-ngone-271b2b30b/",
      color: "hover:text-blue-500",
    },
    {
      name: "Twitter",
      href: "https://x.com/wildisyvan53",
      color: "hover:text-sky-400",
    },
  ];
  return (
    <div className=" flex flex-col gap-6 mb-5">
      {" "}
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank" // Ouvre dans un nouvel onglet
          rel="noopener noreferrer" // Sécurité standard pour les liens externes
          className="mt-4 px-4 py-2 flex flex-row items-center w-auto gap-2 bg-slate-600 hover:bg-slate-500 text-white transition-colors duration-300 group rounded-2xl"
          aria-label={social.name}
        >
          {social.name}
        </a>
      ))}
    </div>
  );
};

const page = () => {
  const openEmail = (e: React.MouseEvent) => {
    e.preventDefault();

    // On sépare l'email en morceaux pour tromper les scripts de scan
    const user = "yvanngone53";
    const domain = "gmail";
    const extension = "com";

    // Le lien ne se crée que dans la mémoire vive au moment du clic
    window.location.href = `mailto:${user}@${domain}.${extension}`;
  };
  return (
    <div className="lg:grid lg:grid-cols-2 gap-8  bg:h-screen pt-24 p-7">
      <div className="bg-transparent h-auto p-8">
        <h1 className="text-9xl text-center text-slate-600 mt-4 mb-4">
          Profile
        </h1>
        <h2> I am Yvan Wildis Ngone Tchinda</h2>
        <p>Junior developer</p>
        <p className="mb-5">
          I am an electronics student who has discovered a passion for creating
          interactive applications and websites.
          <br />I am one of those people who likes to understand the technical
          details hidden behind innovations. It was therefore natural that my
          choice fell on computer science.
          <br />
          Understanding complex ideas and concepts like drone creation and
          translating them into a 3D website is one of the things I'm most
          passionate about in IT.
        </p>
        <a
          href="#"
          onClick={openEmail}
          className="border-slate-300 bg-slate-500 py-1 px-4 rounded-2xl hover:bg-slate-900 text-white"
        >
          E-mail
        </a>
      </div>
      <div
        className="  backdrop-blur-md bg-white/80 dark:bg-zinc-900/80 
                border border-slate-300 dark:border-slate-700 dark:shadow-slate-700 rounded-2xl p-8 "
      >
        <h1 className="text-2xl font-mono mb-4">Links</h1>
        <SocialLinks />
        <p>
          Thank you for taking the time to stay this long, and I hope you have a
          good time.
        </p>
      </div>
    </div>
  );
};

export default page;
