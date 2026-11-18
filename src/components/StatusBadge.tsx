import { statusLabels, type ProjectStatus } from "../types/projectType";

const tones: Record<ProjectStatus, string> = {
  ongoing: "bg-brand text-midnight",
  upcoming: "bg-midnight text-gold border border-brand/60",
  completed: "bg-gold text-midnight",
  "ready-to-move": "bg-emerald-600 text-white",
};

export default function StatusBadge({ status }: { status: ProjectStatus }) {
  return (
    <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${tones[status]}`}>
      {statusLabels[status]}
    </span>
  );
}