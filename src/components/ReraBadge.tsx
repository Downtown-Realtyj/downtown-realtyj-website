import { ShieldCheck } from "lucide-react";
import { company, isPlaceholder } from "../data/companyData";

interface RERABadgeProps {
  projectRera?: string;
  variant?: "dark" | "light";
  className?: string;
}

export default function RERABadge({ projectRera, variant = "dark", className = "" }: RERABadgeProps) {
  const number = projectRera ?? company.rera.agentNumber;
  const label = projectRera ? "Project RERA" : "RERA Registered Agent";
  const pending = isPlaceholder(number);

  const tone =
    variant === "dark"
      ? "border-brand/50 bg-midnight/60 text-gold"
      : "border-brand/60 bg-brand/10 text-midnight";

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium sm:text-sm ${tone} ${className}`}
    >
      <ShieldCheck className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
      <span>
        {label}: <span className="font-semibold">{pending ? "number pending" : number}</span>
      </span>
    </span>
  );
}