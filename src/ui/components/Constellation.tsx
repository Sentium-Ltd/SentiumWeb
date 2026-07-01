"use client";

interface Props {
  /** Optional pixel override; otherwise the wrapper fills its parent. */
  size?: number;
  className?: string;
}

interface PlanetConfig {
  id: string;
  color: string;
  connectorTo: [number, number];
  connectorDashed?: boolean;
  labelText?: string;
  subText?: string;
  labelBaseline: [number, number];
  subBaseline: [number, number];
  labelColor?: string;
  orbitCenter: [number, number];
  dotInitial: [number, number];
  dotRadius: number;
  dotDashedOutline?: boolean;
  orbitDuration: string;
  twinkleDelay: string;
}

const PLANETS: PlanetConfig[] = [
  {
    id: "bettr",
    color: "var(--brand-mint)",
    connectorTo: [403, 162],
    labelText: "Bettr.Now",
    subText: "HEALTH",
    labelBaseline: [403, 158],
    subBaseline: [403, 172],
    orbitCenter: [403, 165],
    dotInitial: [403, 133],
    dotRadius: 7,
    orbitDuration: "18s",
    twinkleDelay: "0s",
  },
  {
    id: "alfie",
    color: "var(--brand-coral)",
    connectorTo: [428, 340],
    labelText: "Alfie",
    subText: "KIDS",
    labelBaseline: [428, 336],
    subBaseline: [428, 350],
    orbitCenter: [428, 343],
    dotInitial: [464, 343],
    dotRadius: 7,
    orbitDuration: "22s",
    twinkleDelay: "0.8s",
  },
  {
    id: "treso",
    color: "var(--brand-purple)",
    connectorTo: [245, 432],
    labelText: "Treso",
    subText: "FINANCE",
    labelBaseline: [245, 428],
    subBaseline: [245, 442],
    orbitCenter: [245, 435],
    dotInitial: [245, 467],
    dotRadius: 7,
    orbitDuration: "26s",
    twinkleDelay: "1.6s",
  },
  {
    id: "makemycard",
    color: "var(--brand-orange)",
    connectorTo: [105, 318],
    labelText: "MakeMyCard",
    subText: "CREATIVE",
    labelBaseline: [105, 314],
    subBaseline: [105, 328],
    orbitCenter: [105, 321],
    dotInitial: [73, 321],
    dotRadius: 7,
    orbitDuration: "20s",
    twinkleDelay: "2.4s",
  },
  {
    id: "your-business",
    color: "var(--color-fg)",
    connectorTo: [104, 172],
    connectorDashed: true,
    // labelText / subText intentionally omitted - the spoke is here but the
    // label is not, per design.
    labelBaseline: [104, 168],
    subBaseline: [104, 181],
    orbitCenter: [104, 172],
    dotInitial: [104, 140],
    dotRadius: 8,
    dotDashedOutline: true,
    orbitDuration: "24s",
    twinkleDelay: "3.2s",
  },
];

const CENTER: [number, number] = [260, 260];

const LABEL_FONT_MAIN =
  "var(--font-inter), Inter, system-ui, -apple-system, sans-serif";

const SPARKLE_PATH =
  "M260 222 L267 253 L298 260 L267 267 L260 298 L253 267 L222 260 L253 253 Z";

const AMBIENT_TWINKLES: Array<{
  cx: number;
  cy: number;
  r: number;
  opacity: number;
  delay: string;
}> = [
  { cx: 340, cy: 92, r: 2, opacity: 0.5, delay: "0s" },
  { cx: 150, cy: 110, r: 1.6, opacity: 0.4, delay: "1.6s" },
  { cx: 420, cy: 220, r: 1.8, opacity: 0.4, delay: "2.4s" },
  { cx: 100, cy: 400, r: 1.6, opacity: 0.4, delay: "0.8s" },
];

export function Constellation({ size, className }: Props) {
  return (
    <div
      className={`relative aspect-square select-none mx-auto ${className ?? ""}`}
      style={size ? { width: size, maxWidth: "100%" } : undefined}
      aria-hidden="true"
    >
      {/* Soft glow halo behind the sparkle */}
      <div
        className="absolute inset-[22%] rounded-full blur-3xl opacity-60 pointer-events-none"
        style={{
          background:
            "radial-gradient(closest-side, rgba(245,199,56,0.42), rgba(245,199,56,0.06) 60%, transparent 75%)",
        }}
      />

      <svg
        viewBox="0 0 520 520"
        className="relative w-full h-full overflow-visible"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Static decorative rings */}
        <circle
          cx={CENTER[0]}
          cy={CENTER[1]}
          r="120"
          fill="none"
          stroke="var(--color-fg)"
          strokeOpacity="0.10"
          strokeWidth="1"
          strokeDasharray="2 7"
        />
        <circle
          cx={CENTER[0]}
          cy={CENTER[1]}
          r="190"
          fill="none"
          stroke="var(--color-fg)"
          strokeOpacity="0.06"
          strokeWidth="1"
          strokeDasharray="2 9"
        />

        {/* Static connectors from sparkle to each planet's label */}
        {PLANETS.map((p) => (
          <line
            key={`c-${p.id}`}
            x1={CENTER[0]}
            y1={CENTER[1]}
            x2={p.connectorTo[0]}
            y2={p.connectorTo[1]}
            stroke="var(--color-fg)"
            strokeOpacity={p.connectorDashed ? 0.22 : 0.16}
            strokeWidth="1"
            strokeDasharray={p.connectorDashed ? "2 3" : undefined}
          />
        ))}

        {/* Ambient twinkles - pulse in place */}
        {AMBIENT_TWINKLES.map((t, i) => (
          <circle
            key={`amb-${i}`}
            cx={t.cx}
            cy={t.cy}
            r={t.r}
            fill="var(--color-fg)"
            opacity={t.opacity}
            style={{
              transformBox: "fill-box",
              transformOrigin: "center",
              animation: `constellation-v1-twinkle 4s ease-in-out ${t.delay} infinite`,
            }}
          />
        ))}

        {/* Core glow behind the sparkle */}
        <circle
          cx={CENTER[0]}
          cy={CENTER[1]}
          r="58"
          fill="var(--brand-gold)"
          opacity="0.18"
          style={{
            transformBox: "fill-box",
            transformOrigin: "center",
            animation: "constellation-v1-pulse 5s ease-in-out infinite",
          }}
        />

        {/* Central sparkle - static */}
        <path d={SPARKLE_PATH} fill="var(--brand-gold)" />

        {/* Planet spokes: static labels + locally orbiting dots */}
        {PLANETS.map((p) => (
          <g key={p.id}>
            {p.labelText && (
              <text
                x={p.labelBaseline[0]}
                y={p.labelBaseline[1]}
                textAnchor="middle"
                style={{
                  fontFamily: LABEL_FONT_MAIN,
                  fontSize: 15,
                  fontWeight: 600,
                  letterSpacing: "-0.01em",
                  fill: p.labelColor ?? "var(--color-fg)",
                }}
              >
                {p.labelText}
              </text>
            )}
            {p.subText && (
              <text
                x={p.subBaseline[0]}
                y={p.subBaseline[1]}
                textAnchor="middle"
                style={{
                  fontFamily: LABEL_FONT_MAIN,
                  fontSize: 9.5,
                  fontWeight: 600,
                  letterSpacing: "0.14em",
                  fill: "var(--color-muted)",
                }}
              >
                {p.subText}
              </text>
            )}

            {/* Local orbit group: rotates the dot around the label center */}
            <g
              style={{
                transformBox: "view-box",
                transformOrigin: `${p.orbitCenter[0]}px ${p.orbitCenter[1]}px`,
                animation: `constellation-v1-orbit ${p.orbitDuration} linear infinite`,
                willChange: "transform",
              }}
            >
              {/* Inner group: dot pulses in place while orbit spins */}
              <g
                style={{
                  transformBox: "fill-box",
                  transformOrigin: "center",
                  animation: `constellation-v1-twinkle 4s ease-in-out ${p.twinkleDelay} infinite`,
                }}
              >
                {p.dotDashedOutline ? (
                  <circle
                    cx={p.dotInitial[0]}
                    cy={p.dotInitial[1]}
                    r={p.dotRadius}
                    fill="none"
                    stroke={p.color}
                    strokeWidth="1.6"
                    strokeDasharray="3 3"
                  />
                ) : (
                  <circle
                    cx={p.dotInitial[0]}
                    cy={p.dotInitial[1]}
                    r={p.dotRadius}
                    fill={p.color}
                  />
                )}
              </g>
            </g>
          </g>
        ))}
      </svg>
    </div>
  );
}
