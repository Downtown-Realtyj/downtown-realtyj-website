import type { Project } from "../types/projectType"

export const projects: Project[] = [
  {
    slug: "rr-highline-tower",
    name: "R. R. Highline Tower",
    builder: "R. R. Builders and Infracon",
    status: "ongoing",
    projectRera: "BRERAP195728070226290929E00",
    locality: "Lakhnibigha, Khagaul",
    city: "Patna",
    propertyType: "Residential Apartments",
    priceFrom: undefined, // change it
    possession: undefined, // change it
    summary: "R. R. Highline Tower is a residential apartment project by R. R. Builders and Infracon, located at Lakhnibigha near DRM Office, Khagaul, Danapur, Patna. The project offers a contemporary high-rise residential experience with landscaped green spaces, a swimming pool, indoor sports facilities and a wide range of lifestyle amenities.",
    highlights: [
      "Located at Lakhnibigha, near DRM Office, Khagaul, Danapur",
      "Approximately 1.5 km from Danapur Railway Station",
      "Approximately 4.5 km from Saguna More",
      "Floor plans featuring a first-floor podium and typical floors from the 2nd to 14th floors"
    ],
    amenities: [
      "Swimming Pool",
      "Indoor Sports Area",
      "Health Club",
      "Gymnasium",
      "Jogging Track",
      "Badminton Court",
      "Indoor Games Area",
      "Kids Play Zone",
      "Terrace Garden",
      "Landscaped Green Area",
      "Multipurpose Hall",
      "24x7 Water Supply",
      "24x7 Power Backup",
      "Visitor Car Parking",
      "Fire Safety",
      "Security and Digital Access Monitoring",
      "Lifts",
      "Electric Car Charging Points at Selected Spots"
    ],
    featured: true,
  },
  {
    slug: "grand-sapphire",
    name: "Grand Sapphire",
    builder: "Deep Sheetal Engineers Pvt. Ltd.",
    status: "ongoing",
    projectRera: "BRERAP00527-005/22/R-1680/2024",
    locality: "Danapur-Khagaul Road",
    city: "Patna",
    propertyType: "Residential Apartments and Commercial Shops",
    priceFrom: undefined, // change it
    possession: undefined, // change it
    summary: "Grand Sapphire is a residential-cum-commercial development by Deep Sheetal Engineers Pvt. Ltd., located in the Danapur-Khagaul Road area of Patna. The project features residential apartments and ground-floor commercial shops, complemented by a terrace garden, landscaped spaces, parking and modern lifestyle amenities.",
    highlights: [
      "Residential apartments with ground-floor commercial shops",
      "Approximately 1.5 km from Saguna More",
      "Approximately 4.5 km from Danapur Railway Station",
      "GD Goenka School approximately 0.2 km away",
      "AIIMS Patna approximately 8.5 km away",
      "Patna Airport approximately 8.7 km away"
    ],
    amenities: [
      "Terrace Garden",
      "Rainwater Harvesting",
      "Ample Parking",
      "24x7 Electricity",
      "24x7 Water Supply",
      "Kids Zone",
      "Outdoor Gymnasium",
      "24x7 CCTV Surveillance",
      "Eco-Friendly Campus",
      "Fire-Fighting System",
      "Silent DG Set",
      "Intercom",
      "Gas Pipeline",
      "Vastu-Oriented Design",
      "ISI Lift",
      "Owned Transformer"
    ],
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