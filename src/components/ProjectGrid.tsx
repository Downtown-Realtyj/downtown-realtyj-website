"use client";

import { useMemo, useState } from "react";
import { statusLabels, type Project, type ProjectStatus } from "../types/projectType";
import ProjectCard from "./ProjectCard";

type Filter = "all" | ProjectStatus;

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<Filter>("all");

  const available = useMemo(
    () => (Object.keys(statusLabels) as ProjectStatus[]).filter((s) => projects.some((p) => p.status === s)),
    [projects]
  );
  const visible = filter === "all" ? projects : projects.filter((p) => p.status === filter);
  const options: { value: Filter; label: string }[] = [
    { value: "all", label: "All" },
    ...available.map((s) => ({ value: s as Filter, label: statusLabels[s] })),
  ];

  return (
    <div>
      <div role="group" aria-label="Filter projects by status" className="mb-8 flex flex-wrap gap-2">
        {options.map((o) => (
          <button
            key={o.value}
            type="button"
            aria-pressed={filter === o.value}
            onClick={() => setFilter(o.value)}
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors cursor-pointer ${
              filter === o.value
                ? "border-brand bg-brand text-midnight"
                : "border-brand/40 text-midnight hover:bg-brand/10"
            }`}
          >
            {o.label}
          </button>
        ))}
      </div>

      <p className="sr-only" aria-live="polite">{visible.length} projects shown</p>

      {visible.length === 0 ? (
        <p className="rounded-xl border border-dashed border-brand/40 p-8 text-center text-midnight/70">
          No projects in this category right now.
        </p>
      ) : (
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p) => (
            <li key={p.slug} className="relative">
              <ProjectCard project={p} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}