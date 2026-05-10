export type ProjectAccent =
  | "brand-coral"
  | "brand-orange"
  | "brand-mint"
  | "brand-sky"
  | "brand-blue"
  | "brand-purple"
  | "brand-pink"
  | "brand-gold";

export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  href: string;
  accent: ProjectAccent;
  imageSrc?: string;
  imageAlt?: string;
}
