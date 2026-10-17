import Image from "next/image";
import Link from "next/link";
import { MapPin, Building2 } from "lucide-react";
import type { Project } from "../types/projectType";
import RERABadge from "./ReraBadge";
import StatusBadge from "./StatusBadge";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-brand/20 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl">
      <div className="relative aspect-[4/3] bg-midnight">
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.name} by ${project.builder}`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-[radial-gradient(ellipse_at_top_right,rgba(201,168,76,0.25),transparent_70%)]">
            <Building2 className="h-12 w-12 text-brand/60" aria-hidden="true" />
          </div>
        )}
        <div className="absolute left-3 top-3">
          <StatusBadge status={project.status} />
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <h3 className="text-xl font-bold text-midnight">{project.name}</h3>
          <p className="text-sm text-midnight/60">by {project.builder}</p>
        </div>
        <p className="flex items-center gap-1.5 text-sm text-midnight/70">
          <MapPin className="h-4 w-4 text-brand" aria-hidden="true" />
          {project.locality}, {project.city}
        </p>
        <p className="text-sm font-medium text-midnight">{project.propertyType}</p>
        {project.priceFrom && <p className="text-base font-semibold text-brand">{project.priceFrom}</p>}
        <RERABadge projectRera={project.projectRera} variant="light" className="self-start" />
        <Link
          href={`/projects/${project.slug}`}
          className="mt-auto inline-flex pt-2 text-sm font-semibold text-midnight underline-offset-4 hover:text-brand hover:underline after:absolute after:inset-0"
        >
          <span className="sr-only">View details for </span>View Details
        </Link>
      </div>
    </article>
  );
}