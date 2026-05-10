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

export interface Project {
  id: string;
  name: string;
  tagline: string;
  /** Short description used on the home carousel card */
  description: string;
  /** Longer paragraph used on the project's own page */
  longDescription: string;
  /** Studio-voice "why we built this" - the noticing-the-problem story */
  whyWeBuiltIt: string;
  /** 3-5 bullet points of what makes this product distinct */
  features: string[];
  /** Year the product first shipped */
  releaseYear?: number;
  /** Description used in <meta name="description"> for the project page */
  metaDescription: string;
  /** External URL (App Store, product website) */
  href: string;
  /** Label for the external CTA button */
  ctaLabel: string;
  accent: ProjectAccent;
  platform: ProjectPlatform;
  imageSrc?: string;
  imageAlt?: string;
}
