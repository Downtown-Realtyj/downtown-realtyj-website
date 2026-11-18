import {
  Building2,
  Home,
  Castle,
  Mountain,
  ShieldCheck,
  Network,
  BadgeIndianRupee,
  Car,
  TrainFront,
  Plane,
  GraduationCap,
  Store,
  type LucideIcon,
} from "lucide-react";

export const HERO_STATS = [
  { value: "100%", label: "RERA Verified" }, // VERIFY
  { value: "₹0", label: "Brokerage Markup" }, // VERIFY
  { value: "14+", label: "Partner Builders" }, // VERIFY
];

/* ───────────── Property inventory ───────────── */

export type PropertyKind = "flat" | "plot" | "commercial" | "penthouse";
export type LocalityId =
  | "rupaspur"
  | "bailey-road"
  | "danapur"
  | "saguna-more"
  | "gola-road"
  | "khagaul";

export interface Project {
  id: string;
  name: string;
  kind: PropertyKind;
  locality: LocalityId;
  localityLabel: string;
  developer: string;
  configuration: string;
  highlight: { label: string; value: string };
  priceFromLakh: number;
  priceLabel: string;
  tag: string;
  status: string;
  reraNumber: string | null;
  image: string | null;
  imageAlt: string;
}

export const PROJECTS: Project[] = [
  {
    id: "grand-sapphire",
    name: "Grand Sapphire",
    kind: "flat",
    locality: "rupaspur",
    localityLabel: "Rupaspur, Bailey Road, Patna",
    developer: "Deep Sheetal Engineers Pvt. Ltd.",
    configuration: "2 & 3 BHK (1,240 – 1,890 sq.ft.)",
    highlight: { label: "Price basis", value: "Builder listed price (no brokerage)" },
    priceFromLakh: 72,
    priceLabel: "₹72 L+",
    tag: "Partner Developer Project",
    status: "Under construction • Dec 2026",
    reraNumber: null,
    image: null,
    imageAlt: "Grand Sapphire apartment complex, Rupaspur, Patna",
  },
  {
    id: "vasant-vihar-greens",
    name: "Vasant Vihar Greens",
    kind: "plot",
    locality: "danapur",
    localityLabel: "Danapur – Khagaul Road, Patna",
    developer: "Vasant Infra Projects",
    configuration: "Plots (1,200 – 2,400 sq.yd.)",
    highlight: { label: "Infrastructure", value: "40ft roads, parks & guarded gates" },
    priceFromLakh: 38,
    priceLabel: "₹38 L+",
    tag: "Partner Developer Township",
    status: "Immediate registry & possession",
    reraNumber: null,
    image: null,
    imageAlt: "Vasant Vihar Greens gated plotted township, Danapur",
  },
  {
    id: "imperial-heights",
    name: "Imperial Heights",
    kind: "flat",
    locality: "saguna-more",
    localityLabel: "Saguna More, Patna",
    developer: "Patliputra Sky Builders",
    configuration: "3 BHK & 4 BHK luxury residences",
    highlight: { label: "Handover", value: "Occupancy certificate handed over" },
    priceFromLakh: 95,
    priceLabel: "₹95 L+",
    tag: "Partner Developer Project",
    status: "Ready to move in",
    reraNumber: null,
    image: null,
    imageAlt: "Imperial Heights residential tower, Saguna More, Patna",
  },
];

/* ───────────── Finder options ───────────── */

export const KIND_OPTIONS = [
  { value: "all", label: "All types" },
  { value: "flat", label: "Apartments & flats" },
  { value: "plot", label: "Residential township plots" },
  { value: "commercial", label: "Commercial spaces" },
  { value: "penthouse", label: "Penthouses" },
] as const;

export const LOCALITY_OPTIONS = [
  { value: "all", label: "All prime localities" },
  { value: "rupaspur", label: "Rupaspur, Bailey Road" },
  { value: "bailey-road", label: "Bailey Road corridor" },
  { value: "danapur", label: "Danapur – Khagaul Road" },
  { value: "saguna-more", label: "Saguna More" },
  { value: "gola-road", label: "Gola Road" },
  { value: "khagaul", label: "Khagaul" },
] as const;

export const BUDGET_OPTIONS = [
  { value: "all", label: "Any budget", min: 0, max: Infinity },
  { value: "35-50", label: "₹35 – ₹50 Lakhs", min: 35, max: 50 },
  { value: "50-80", label: "₹50 – ₹80 Lakhs", min: 50, max: 80 },
  { value: "80-120", label: "₹80 Lakhs – ₹1.2 Cr", min: 80, max: 120 },
  { value: "120+", label: "₹1.2 Cr +", min: 120, max: Infinity },
] as const;

/* ───────────── Static sections ───────────── */

export interface Category {
  title: string;
  units: string;
  description: string;
  cta: string;
  icon: LucideIcon;
}

export const CATEGORIES: Category[] = [
  {
    title: "2BHK Flats",
    units: "32 Units",
    description: "Ideal for modern families & smart rental yields in Danapur & Bailey Road.",
    cta: "Explore 2BHKs",
    icon: Building2,
  },
  {
    title: "3BHK Flats",
    units: "48 Units",
    description: "Spacious floor plans with dedicated amenities, clubhouse & parking.",
    cta: "Explore 3BHKs",
    icon: Home,
  },
  {
    title: "Premium Apartments",
    units: "12 Units",
    description: "Penthouses and lifestyle residences with skyline views of Rupaspur.",
    cta: "View luxury",
    icon: Castle,
  },
  {
    title: "Residential Plots",
    units: "50+ Plots",
    description: "Gated township plots with wide boulevards & immediate clear registry.",
    cta: "View plots",
    icon: Mountain,
  },
];

export const WHY_CHOOSE = [
  {
    icon: ShieldCheck,
    title: "RERA-registered real estate firm",
    body: "We market only projects registered under the Bihar Real Estate Regulatory Authority, so you can verify every registration yourself.",
    note: "Legal transparency first",
    tone: "emerald",
  },
  {
    icon: Network,
    title: "Multiple developer partnerships",
    body: "One advisory desk to compare projects across Patna's proven developers — objective comparisons without builder pressure.",
    note: "Unbiased portfolio comparisons",
    tone: "neutral",
  },
  {
    icon: BadgeIndianRupee,
    title: "Builder-listed pricing",
    body: "Direct access to developer tariff rates with no hidden brokerage. A line-item breakdown of registry, GST and amenity fees.",
    note: "Direct price integrity",
    tone: "gold",
  },
  {
    icon: Car,
    title: "Personalised property assistance",
    body: "From neighbourhood evaluation and scheduled site visits to home-loan processing and final registry support.",
    note: "Dedicated personal advisor",
    tone: "neutral",
  },
] as const;

export const STEPS = [
  {
    title: "Explore properties",
    body: "Discover verified residential options and plotted layouts matched to your budget, layout and commute.",
  },
  {
    title: "Compare & shortlist",
    body: "Review carpet areas, developer track records, floor plans and approvals side by side with your advisor.",
  },
  {
    title: "Visit properties",
    body: "Your advisor coordinates on-site visits across shortlisted Patna locations so you can judge construction stage and quality.",
  },
  {
    title: "Booking & assistance",
    body: "Get support with price validation, home-loan tie-ups and legal documentation through to registry.",
  },
];

export const LOCALITIES = [
  {
    icon: TrainFront,
    name: "Danapur",
    badge: "High growth",
    body: "Fast-growing transit hub with spacious gated townships and easy Khagaul Road access.",
    count: "12 Developments", // VERIFY
  },
  {
    icon: Plane,
    name: "Bailey Road",
    badge: "Prime lifeline",
    body: "Patna's primary residential artery, close to the airport, AIIMS, shopping centres and leading institutions.",
    count: "18 Developments", // VERIFY
  },
  {
    icon: GraduationCap,
    name: "Rupaspur",
    badge: "Upscale pocket",
    body: "Established neighbourhood with corporate towers, top schools and boutique apartment projects.",
    count: "9 Developments", // VERIFY
  },
  {
    icon: Store,
    name: "Saguna More",
    badge: "Commercial core",
    body: "A busy junction connecting Danapur and Bailey Road, lined with dining, retail and high-rise residences.",
    count: "14 Developments", // VERIFY
  },
];

export const TRUST_POINTS = [
  "Every project is listed with its Bihar RERA registration for public verification.",
  "Direct developer contracts — you sign on builder-approved pricing and payment schedules.",
  "RERA carpet-area disclosure before any booking token is acknowledged.",
  "Transparent breakdown of registry, GST and amenity charges up front.",
];
