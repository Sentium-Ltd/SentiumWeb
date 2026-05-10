// Generate a branded QR code for sentium.app with the Sentium sparkle
// overlaid in the centre. Output: public/branding/qr-sentium.svg
//
// Run with: node scripts/generate-qr.mjs

import QRCode from "qrcode";
import { writeFile, readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

const TARGET_URL = "https://sentium.app/";

const FG = "#0e1014"; // dark modules: brand foreground
const BG = "#ffffff"; // light modules: brand background

const qrSvg = await QRCode.toString(TARGET_URL, {
  type: "svg",
  errorCorrectionLevel: "H", // ~30% recoverable, leaves room for the centre overlay
  margin: 1,
  color: { dark: FG, light: BG },
});

const viewBoxMatch = qrSvg.match(/viewBox="0 0 (\d+(?:\.\d+)?) (\d+(?:\.\d+)?)"/);
if (!viewBoxMatch) throw new Error("could not parse QR viewBox");
const qrSize = parseFloat(viewBoxMatch[1]);

// Symbol overlay sized ~24% of QR (within H error-correction tolerance)
const overlayPct = 0.24;
const overlay = qrSize * overlayPct;
const overlayX = (qrSize - overlay) / 2;
const overlayY = (qrSize - overlay) / 2;

// White rounded backdrop so the symbol reads clearly against QR modules
const backdropPad = overlay * 0.16;
const backdropX = overlayX - backdropPad;
const backdropY = overlayY - backdropPad;
const backdropSize = overlay + backdropPad * 2;
const backdropRadius = backdropSize * 0.22;

// Pull the inner symbol markup (drop the outer <svg> wrapper)
const symbolFile = await readFile(
  join(ROOT, "public", "branding", "symbol.svg"),
  "utf8"
);
const innerMatch = symbolFile.match(/<svg[^>]*>([\s\S]*)<\/svg>/);
if (!innerMatch) throw new Error("could not parse symbol.svg");
const symbolInner = innerMatch[1].trim();

const overlayBlock = [
  `<rect x="${backdropX.toFixed(3)}" y="${backdropY.toFixed(3)}" width="${backdropSize.toFixed(3)}" height="${backdropSize.toFixed(3)}" rx="${backdropRadius.toFixed(3)}" ry="${backdropRadius.toFixed(3)}" fill="${BG}"/>`,
  `<svg x="${overlayX.toFixed(3)}" y="${overlayY.toFixed(3)}" width="${overlay.toFixed(3)}" height="${overlay.toFixed(3)}" viewBox="0 0 181.68 181.68">${symbolInner}</svg>`,
].join("\n  ");

// Inject overlay just before </svg>
const branded = qrSvg.replace(/<\/svg>\s*$/, `\n  ${overlayBlock}\n</svg>\n`);

// Add a comment header
const final = branded.replace(
  /<svg /,
  `<!-- Sentium QR for ${TARGET_URL} - regenerate via scripts/generate-qr.mjs -->\n<svg `
);

await writeFile(join(ROOT, "public", "branding", "qr-sentium.svg"), final, "utf8");

console.log(
  `qr-sentium.svg written (QR ${qrSize}x${qrSize}, overlay ${overlay.toFixed(1)}px @ ${(overlayPct * 100).toFixed(0)}%)`
);
