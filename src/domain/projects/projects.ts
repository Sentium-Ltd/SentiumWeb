import type { Project } from "./types";

export const projects: Project[] = [
  {
    id: "alfie-colouring",
    name: "Alfie Colouring",
    tagline: "AI-generated colouring pages for curious kids.",
    description:
      "Part of the Alfie suite of children's apps. Endless, instantly-generated colouring sheets that match whatever your child is into this week.",
    href: "https://apps.apple.com/gb/app/alfie-colouring/id6762228600",
    accent: "brand-coral",
    platform: "iOS",
  },
  {
    id: "alfie-puzzles",
    name: "Alfie Puzzles",
    tagline: "Bite-size puzzle play for curious kids.",
    description:
      "Another from the Alfie suite. Quick, friendly puzzles for the half-hour after school, when little brains still want a workout but bedtime isn't far away.",
    href: "https://apps.apple.com/gb/app/alfie-puzzles/id6762566734",
    accent: "brand-sky",
    platform: "iOS",
  },
  {
    id: "kidwise",
    name: "KidWise",
    tagline: "Practical life skills for the kids growing up next.",
    description:
      "A web app that turns the everyday stuff (money, time, communication, decisions) into bite-size lessons for kids who are about to need them.",
    href: "https://kidwise.io/",
    accent: "brand-blue",
    platform: "Web",
  },
  {
    id: "makemycard",
    name: "MakeMyCard",
    tagline: "AI-powered greeting cards, made in seconds.",
    description:
      "Personal, beautifully crafted greeting cards for any occasion. Written, designed and ready to share in under a minute.",
    href: "https://makemycard.io",
    accent: "brand-mint",
    platform: "Web",
  },
];
