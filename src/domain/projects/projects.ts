import type { Project } from "./types";

export const projects: Project[] = [
  {
    id: "bettr-now",
    name: "bettr.now",
    tagline: "Know your biological age.",
    description:
      "Know your biological age. Everything your body's telling you, gathered in one place so you can own your health. Spot what matters early. Live longer. Live bettr.now",
    longDescription:
      "bettr.now brings your health data into one place: real blood tests, wearable signals, and AI that reads them like a story instead of a wall of numbers. The result is a clear picture of where you stand today, where you should be, and what to do next. It's built for people who want to own their health without turning it into a full-time job.",
    whyWeBuiltIt:
      "Most personal health tools stop at showing you data. The interesting part - what does this actually mean for me, and what do I do about it - gets left to the reader. bettr.now was built to close that gap: real biomarker science, clear explanations, and a shared language you can bring to your GP.",
    features: [
      "Real blood tests, not surveys - actual biomarker panels",
      "Every result explained in plain language, no medical degree needed",
      "Wearable integration so daily signals count too",
      "Optimal ranges, not just 'normal' - see where you should be",
      "Turn your results into the right questions for your doctor",
    ],
    releaseYear: 2026,
    metaDescription:
      "bettr.now - real blood tests, wearable data, and AI that reads them like a story. Own your health. Built by Sentium.",
    href: "https://bettr.now",
    ctaLabel: "Visit bettr.now",
    accent: "brand-mint",
    platform: "Web",
    status: "live",
    category: "HEALTH & LONGEVITY",
    flagship: true,
    flagshipHighlights: [
      {
        title: "Numbers made clear",
        body: "Turn your results into the right questions for your doctor",
        accent: "brand-mint",
      },
      {
        title: "Synced",
        body: "wearable integration, so your daily signals count too",
        accent: "brand-purple",
      },
      {
        title: "Optimal",
        body: "not just \"normal\" - see where you should be",
        accent: "brand-blue",
      },
    ],
  },
  {
    id: "alfie-puzzles",
    name: "Alfie Puzzles",
    tagline: "Puzzles that grow with your kid.",
    description: "Puzzles that grow with your kid. Ad-free.",
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
    accent: "brand-coral",
    platform: "iOS",
    status: "live",
    category: "KIDS",
  },
  {
    id: "alfie-colouring",
    name: "Alfie Colouring",
    tagline: "Colour, create, save and share the art.",
    description: "Colour, create, save and share the art. Safe and ad-free.",
    longDescription:
      "Most kids' colouring apps recycle the same hundred templates. Alfie Colouring takes a different approach: every page is drawn on demand from whatever your child types or asks for, so the catalogue is effectively infinite. \"A friendly dinosaur eating spaghetti.\" \"My cat as a pirate.\" \"Cement mixer with butterflies.\" The app turns the request into a clean, kid-appropriate line drawing in seconds, ready to colour in the app or print on paper.",
    whyWeBuiltIt:
      "The first version was for our own kid, who burned through every printable sheet on the internet within a fortnight. We realised the bottleneck wasn't drawing tools or storage - it was content. We built something that could draw a new page as fast as a four-year-old can ask for one, and stay friendly enough to be safe by default.",
    features: [
      "Type any idea and get a printable colouring page in seconds",
      "Built-in safeguards keep the requests age-appropriate without parents policing every input",
      "Save, print, or colour directly in the app",
      "No ads, no in-app upsells targeted at children",
      "Designed for ages 3-9 - reading isn't required",
    ],
    releaseYear: 2025,
    metaDescription:
      "Alfie Colouring - an iOS app that draws a new printable colouring page from anything your child can imagine. Built by Sentium as part of the Alfie suite.",
    href: "https://apps.apple.com/gb/app/alfie-colouring/id6762228600",
    ctaLabel: "Get on the App Store",
    accent: "brand-coral",
    platform: "iOS",
    status: "live",
    category: "KIDS",
  },
  {
    id: "treso",
    name: "Treso",
    tagline: "Coming soon.",
    description: "A new finance app in the works.",
    longDescription:
      "A new finance app in the works. More to share soon - drop your email if you'd like to be first to know.",
    whyWeBuiltIt:
      "Because the day-to-day of money should feel less like homework. That's all we're saying for now.",
    features: [
      "Coming soon",
    ],
    releaseYear: 2026,
    metaDescription:
      "Treso - a new finance app by Sentium. Coming soon.",
    href: "",
    ctaLabel: "Get early access",
    accent: "brand-purple",
    platform: "Web",
    status: "coming-soon",
    category: "FINANCE",
    signupEnabled: true,
  },
  {
    id: "makemycard",
    name: "MakeMyCard",
    tagline: "Personalised AI cards.",
    description:
      "Personalised AI cards. Rebuilt, and better - for the moments a generic e-card just won't do.",
    longDescription:
      "MakeMyCard is the answer to the 9pm-the-night-before problem. You need a card. You don't have time to drive to a shop. The supermarket selection feels generic. Hallmark text doesn't sound like you. MakeMyCard takes a few details (who, what for, what kind of person they are, how funny you want it) and produces a card that's actually personal - written copy, design, illustration - in under a minute, ready to send digitally or print.",
    whyWeBuiltIt:
      "Greeting cards are one of those tasks almost everyone postpones and then resents. AI was good enough to write something better than \"happy birthday, hope you have a great year\" but most tools were aimed at marketers, not the panicked-relative use case. We built MakeMyCard for that.",
    features: [
      "Card from prompt to send-ready in under 60 seconds",
      "Tone control - heartfelt, funny, formal, in-jokey - so it sounds like you",
      "Send digitally or download as a print-ready PDF",
      "Design + words generated together, not stitched from templates",
      "Works on any device with a browser - no app to install",
    ],
    releaseYear: 2026,
    metaDescription:
      "MakeMyCard - AI-powered personal greeting cards. Rebuilt and back. Built by Sentium.",
    href: "https://makemycard.io",
    ctaLabel: "Get notified",
    accent: "brand-orange",
    platform: "Web",
    status: "coming-soon-relaunch",
    category: "CREATIVE",
    signupEnabled: true,
  },
  {
    id: "kidwise",
    name: "KidWise",
    tagline: "Practical life skills for the kids growing up.",
    description: "Practical life skills for the kids growing up.",
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
    status: "live",
    category: "EDUCATION",
  },
];

export const flagshipProject = projects.find((p) => p.flagship);
export const gridProjects = projects.filter((p) => !p.flagship);
