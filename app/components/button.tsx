import Link from "next/link";
import React from "react";

const button = ({ text, href }: { text: string; href: string }) => {
  return (
    <Link
      href={href}
      className="px-4 py-2 bg-slate-600 hover:bg-slate-500 text-white transition-colors duration-300 rounded-2xl"
    >
      {text}
    </Link>
  );
};

export default button;
