export type ProjectAccent =
  | "brand-coral"
  | "brand-orange"
  | "brand-mint"
  | "brand-sky"
  | "brand-blue"
  | "brand-purple"
  | "brand-pink"
  | "brand-gold";

export type ProjectPlatform = "iOS" | "Web";

/** Ship state - drives the badge on the card ("LIVE", "COMING SOON", ...) */
export type ProjectStatus = "live" | "coming-soon" | "coming-soon-relaunch";

/** Short category label used on the card ("KIDS", "HEALTH & LONGEVITY", ...) */
export type ProjectCategory =
  | "KIDS"
  | "HEALTH & LONGEVITY"
  | "FINANCE"
  | "CREATIVE"
  | "EDUCATION";

export interface Project {
  id: string;
  name: string;
  tagline: string;
  /** Short description used on the home grid card */
  description: string;
  /** Longer paragraph used on the project's own page */
  longDescription: string;
  /** Studio-voice "why we built this" story */
  whyWeBuiltIt: string;
  /** 3-5 bullet points of what makes this product distinct */
  features: string[];
  /** Year the product first shipped (or is expected to ship) */
  releaseYear?: number;
  /** Description used in <meta name="description"> for the project page */
  metaDescription: string;
  /** External URL - App Store / product website. Empty string when there isn't one yet. */
  href: string;
  /** Label for the external CTA button on the project page */
  ctaLabel: string;
  accent: ProjectAccent;
  platform: ProjectPlatform;
  status: ProjectStatus;
  category: ProjectCategory;
  /** Renders larger, above the grid */
  flagship?: boolean;
  /** When true, the primary card CTA opens the email signup modal instead of a link */
  signupEnabled?: boolean;
  /** Optional highlight tiles rendered on the flagship card (max 3) */
  flagshipHighlights?: Array<{
    title: string;
    body: string;
    accent: ProjectAccent;
  }>;
  imageSrc?: string;
  imageAlt?: string;
}
