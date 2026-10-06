"use client";
import { useLang } from "./LangProvider";
import type { ProjectStatus } from "../data/projects";

const styles: Record<ProjectStatus, string> = {
  live: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
  "in development":
    "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  prototype: "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400",
};

export default function StatusBadge({ status }: { status: ProjectStatus }) {
  const { dict } = useLang();
  const labels: Record<ProjectStatus, string> = {
    live: dict.status.live,
    "in development": dict.status.inDevelopment,
    prototype: dict.status.prototype,
  };
  return (
    <span
      className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${styles[status]}`}
    >
      {labels[status]}
    </span>
  );
}
