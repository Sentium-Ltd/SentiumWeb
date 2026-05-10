// Generate the social-sharing OG / Twitter card image: public/og-image.png
// 1200x630, branded with the Sentium constellation + tagline.
//
// Run with: node scripts/generate-og.mjs (or npm run og)

import sharp from "sharp";
import { writeFile, readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

const W = 1200;
const H = 630;

// Pull constellation markup from the existing symbol so we stay in sync
// if the brand mark ever changes.
const symbolSvg = await readFile(
  join(ROOT, "public", "branding", "symbol.svg"),
  "utf8"
);
const innerMatch = symbolSvg.match(/<svg[^>]*>([\s\S]*)<\/svg>/);
if (!innerMatch) throw new Error("could not parse symbol.svg");
const constellationInner = innerMatch[1].trim();

// Place the constellation on the right side of the canvas
const markSize = 420;
const markX = W - markSize - 90;
const markY = (H - markSize) / 2;

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <radialGradient id="bgGlow" cx="78%" cy="50%" r="60%">
      <stop offset="0%" stop-color="#f5c738" stop-opacity="0.18"/>
      <stop offset="40%" stop-color="#ef4d31" stop-opacity="0.06"/>
      <stop offset="100%" stop-color="#0e1014" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#ef4d31"/>
      <stop offset="50%" stop-color="#f5c738"/>
      <stop offset="100%" stop-color="#5cbf7a"/>
    </linearGradient>
    <linearGradient id="rule" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#f5c738" stop-opacity="0.7"/>
      <stop offset="100%" stop-color="#f5c738" stop-opacity="0"/>
    </linearGradient>
    <filter id="markShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="20" stdDeviation="22" flood-color="#f5c738" flood-opacity="0.25"/>
    </filter>
  </defs>

  <!-- Base canvas -->
  <rect width="${W}" height="${H}" fill="#0e1014"/>
  <rect width="${W}" height="${H}" fill="url(#bgGlow)"/>

  <!-- Subtle grid line accent on the left edge -->
  <line x1="90" y1="220" x2="190" y2="220" stroke="url(#rule)" stroke-width="2"/>

  <!-- Eyebrow -->
  <text x="90" y="200"
        font-family="Inter, 'Helvetica Neue', Helvetica, Arial, sans-serif"
        font-size="22"
        font-weight="600"
        letter-spacing="3"
        fill="#f5c738">SENTIUM</text>

  <!-- Headline -->
  <text x="90" y="310"
        font-family="'Fraunces', 'Times New Roman', Georgia, serif"
        font-size="84"
        font-weight="600"
        fill="#f4f5f7"
        letter-spacing="-2">A studio for</text>
  <text x="90" y="400"
        font-family="'Fraunces', 'Times New Roman', Georgia, serif"
        font-size="84"
        font-weight="600"
        fill="url(#accent)"
        letter-spacing="-2">everyday software.</text>

  <!-- Tagline / catchphrase -->
  <text x="90" y="480"
        font-family="Inter, 'Helvetica Neue', Helvetica, Arial, sans-serif"
        font-size="28"
        font-weight="500"
        fill="#9aa1ad">We plan. We build. We ship.</text>

  <!-- Domain -->
  <text x="90" y="560"
        font-family="Inter, 'Helvetica Neue', Helvetica, Arial, sans-serif"
        font-size="20"
        font-weight="600"
        letter-spacing="1"
        fill="#f4f5f7">sentium.app</text>

  <!-- Constellation mark -->
  <g transform="translate(${markX}, ${markY}) scale(${markSize / 181.68})" filter="url(#markShadow)">
    ${constellationInner}
  </g>
</svg>`;

const outPath = join(ROOT, "public", "og-image.png");

await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile(outPath);

const stat = await readFile(outPath);
console.log(
  `og-image.png written: ${W}x${H}, ${(stat.byteLength / 1024).toFixed(1)} KB`
);

// Also write the source SVG so it's editable / version-controlled
await writeFile(join(ROOT, "public", "og-image.svg"), svg, "utf8");
console.log("og-image.svg also saved (editable source)");
