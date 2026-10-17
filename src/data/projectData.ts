import type { Project } from "../types/projectType"

export const projects: Project[] = [
  {
    slug: "sample-project-one",
    name: "TODO Project Name One",
    builder: "TODO Builder Name",
    status: "ongoing",
    projectRera: "TODO-PROJECT-RERA-1",
    locality: "TODO Locality",
    city: "Patna",
    propertyType: "TODO Property Type",
    priceFrom: "TODO Price",
    possession: "TODO Possession Date",
    summary: "TODO: two or three sentences describing the project, as approved by the builder.",
    highlights: ["TODO highlight", "TODO highlight", "TODO highlight"],
    amenities: ["TODO amenity", "TODO amenity", "TODO amenity"],
    featured: true,
  },
  {
    slug: "sample-project-two",
    name: "TODO Project Name Two",
    builder: "TODO Builder Name",
    status: "upcoming",
    projectRera: "TODO-PROJECT-RERA-2",
    locality: "TODO Locality",
    city: "Patna",
    propertyType: "TODO Property Type",
    summary: "TODO: two or three sentences describing the project.",
    highlights: ["TODO highlight", "TODO highlight"],
    amenities: ["TODO amenity", "TODO amenity"],
    featured: true,
  },
];
 
export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
export const featuredProjects = () => projects.filter((p) => p.featured);