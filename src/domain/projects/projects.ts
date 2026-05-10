import type { Project } from "./types";

export const projects: Project[] = [
  {
    id: "alfie-colouring",
    name: "Alfie Colouring",
    tagline: "AI-generated colouring pages for curious kids.",
    description:
      "Part of the Alfie suite of children's apps. Endless, instantly-generated colouring sheets that match whatever your child is into this week.",
    longDescription:
      "Most kids' colouring apps recycle the same hundred templates. Alfie Colouring takes a different approach: every page is generated on the fly from whatever your child types or asks for, so the catalogue is effectively infinite. \"A friendly dinosaur eating spaghetti.\" \"My cat as a pirate.\" \"Cement mixer with butterflies.\" The app turns the request into a clean, kid-appropriate line drawing in seconds, ready to colour in the app or print on paper.",
    whyWeBuiltIt:
      "The first version was for our own kid, who burned through every printable sheet on the internet within a fortnight. We realised the bottleneck wasn't drawing tools or storage - it was content. Generative AI was finally good enough to make new pages as fast as a four-year-old can ask for them, and friendly enough to be safe by default.",
    features: [
      "Type any prompt and get a printable colouring page in a few seconds",
      "Built-in moderation so the requests stay age-appropriate without parents policing every input",
      "Save, print, or colour directly in the app",
      "No ads, no in-app upsells targeted at children",
      "Designed for ages 3-9 - reading isn't required",
    ],
    releaseYear: 2025,
    metaDescription:
      "Alfie Colouring - an iOS app that generates a new printable colouring page from anything your child can imagine. Built by Sentium as part of the Alfie suite.",
    href: "https://apps.apple.com/gb/app/alfie-colouring/id6762228600",
    ctaLabel: "Get on the App Store",
    accent: "brand-coral",
    platform: "iOS",
  },
  {
    id: "alfie-puzzles",
    name: "Alfie Puzzles",
    tagline: "Bite-size puzzle play for curious kids.",
    description:
      "Another from the Alfie suite. Quick, friendly puzzles for the half-hour after school, when little brains still want a workout but bedtime isn't far away.",
    longDescription:
      "Alfie Puzzles is built around a simple idea: kids' attention is a precious resource and most puzzle apps spend it badly. Long tutorials, escalating difficulty curves, dark patterns to keep them playing - all of it at odds with what the half-hour after school actually needs. Puzzles aims for the opposite: a varied set of small, finishable challenges that fit a real child's evening.",
    whyWeBuiltIt:
      "Sibling app to Alfie Colouring. Once kids ran out of patience for drawing, we wanted somewhere else for them to land that wasn't a video. Puzzles - the kind you can finish in five minutes and feel a little proud of - turned out to be the right shape.",
    features: [
      "A range of puzzle types so the same brain doesn't get the same workout twice",
      "Sessions that finish - no infinite levels designed to keep kids glued",
      "Progress feedback that's encouraging without being patronising",
      "No ads, no leaderboards, no social pressure",
      "Plays nicely alongside Alfie Colouring for variety in a single sitting",
    ],
    releaseYear: 2026,
    metaDescription:
      "Alfie Puzzles - an iOS app of bite-size, finishable puzzles for kids. Part of the Alfie suite, built by Sentium.",
    href: "https://apps.apple.com/gb/app/alfie-puzzles/id6762566734",
    ctaLabel: "Get on the App Store",
    accent: "brand-sky",
    platform: "iOS",
  },
  {
    id: "kidwise",
    name: "KidWise",
    tagline: "Practical life skills for the kids growing up next.",
    description:
      "A web app that turns the everyday stuff (money, time, communication, decisions) into bite-size lessons for kids who are about to need them.",
    longDescription:
      "KidWise covers the curriculum nobody actually teaches: how money works, how to plan a week, how to have a difficult conversation, how to make a decision when you don't have all the information. Each topic is a short, app-shaped lesson - the kind a kid will open on their own rather than have inflicted on them. The web-first approach means it works on a Chromebook in a classroom, on a phone after homework, on whatever device a family already has.",
    whyWeBuiltIt:
      "The gap between what schools cover and what kids actually need by the time they hit fifteen has been growing for a while. Most attempts to fix it look like school - longer videos, more reading, the same shape of lesson. KidWise tries the opposite: small, finishable, and not pretending to be a textbook.",
    features: [
      "Bite-size lessons - most under ten minutes, none over twenty",
      "Practical scenarios over theory - what happens, not just what should",
      "Designed for kids age 8-14, with reading level adjusted per topic",
      "Web-first so it works on any device the family already owns",
      "No subscription wall on core content",
    ],
    releaseYear: 2025,
    metaDescription:
      "KidWise - a web app that teaches practical life skills (money, time, communication, decisions) to kids age 8-14. Built by Sentium.",
    href: "https://kidwise.io/",
    ctaLabel: "Visit kidwise.io",
    accent: "brand-blue",
    platform: "Web",
  },
  {
    id: "makemycard",
    name: "MakeMyCard",
    tagline: "AI-powered greeting cards, made in seconds.",
    description:
      "Personal, beautifully crafted greeting cards for any occasion. Written, designed and ready to share in under a minute.",
    longDescription:
      "MakeMyCard is the answer to the 9pm-the-night-before problem. You need a card. You don't have time to drive to a shop. The supermarket selection feels generic. Hallmark text doesn't sound like you. MakeMyCard takes a few details (who, what for, what kind of person they are, how funny you want it) and produces a card that's actually personal - written copy, design, illustration - in under a minute, ready to send digitally or print.",
    whyWeBuiltIt:
      "Greeting cards are one of those tasks almost everyone postpones and then resents. Generative AI was good enough to write something better than \"happy birthday, hope you have a great year\" but most tools were aimed at marketers, not the panicked-relative use case. We built MakeMyCard for that.",
    features: [
      "Card from prompt to send-ready in under 60 seconds",
      "Tone control - heartfelt, funny, formal, in-jokey - so it sounds like you",
      "Send digitally or download as a print-ready PDF",
      "Design + words generated together, not stitched from templates",
      "Works on any device with a browser - no app to install",
    ],
    releaseYear: 2025,
    metaDescription:
      "MakeMyCard - a web app that generates personal greeting cards in under a minute. Built by Sentium.",
    href: "https://makemycard.io",
    ctaLabel: "Visit makemycard.io",
    accent: "brand-mint",
    platform: "Web",
  },
];
