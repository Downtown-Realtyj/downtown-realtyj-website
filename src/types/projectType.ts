export type ProjectStatus = "ongoing" | "upcoming" | "completed" | "ready-to-move";

export const statusLabels: Record<ProjectStatus, string> = {
  ongoing: "Ongoing",
  upcoming: "Upcoming",
  completed: "Completed",
  "ready-to-move": "Ready to Move",
};

export interface Project {
  slug: string;
  name: string;
  builder: string;
  status: ProjectStatus;
  projectRera: string;
  locality: string;
  city: string;
  propertyType: string;
  priceFrom?: string;
  possession?: string;
  summary: string;
  highlights: string[];
  amenities: string[];
  image?: string;
  featured?: boolean;
}