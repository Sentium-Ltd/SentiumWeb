"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface Dot {
  cx: number;
  cy: number;
  r: number;
  fill: string;
}

const CENTER = 90.84;

const DOTS: Dot[] = [
  { cx: 65.46, cy: 31.75, r: 12.34, fill: "#b3ba69" },
  { cx: 90.88, cy: 8.7, r: 8.7, fill: "#5cbf7a" },
  { cx: 32.78, cy: 32.74, r: 8.7, fill: "#3b88d5" },
  { cx: 8.7, cy: 90.81, r: 8.7, fill: "#a354d1" },
  { cx: 32.74, cy: 148.9, r: 8.7, fill: "#ef8f45" },
  { cx: 90.81, cy: 172.98, r: 8.7, fill: "#eda1cf" },
  { cx: 148.9, cy: 148.95, r: 8.7, fill: "#b3ba69" },
  { cx: 172.98, cy: 90.88, r: 8.7, fill: "#ef4d31" },
  { cx: 148.95, cy: 32.78, r: 8.7, fill: "#6dcaee" },
  { cx: 31.11, cy: 67.01, r: 12.34, fill: "#ef4d31" },
  { cx: 31.75, cy: 116.23, r: 12.34, fill: "#6dcaee" },
  { cx: 67.01, cy: 150.58, r: 12.34, fill: "#5cbf7a" },
  { cx: 116.23, cy: 149.94, r: 12.34, fill: "#3b88d5" },
  { cx: 150.58, cy: 114.68, r: 12.34, fill: "#a354d1" },
  { cx: 149.94, cy: 65.46, r: 12.34, fill: "#ef8f45" },
  { cx: 114.68, cy: 31.11, r: 12.34, fill: "#eda1cf" },
];

const SPARKLE_PATH =
  "M113.92,103.07l9.09-3.47c8.03-3.07,8.03-14.43,0-17.5l-9.09-3.47c-4.98-1.9-8.92-5.84-10.82-10.82l-3.47-9.09c-3.07-8.03-14.43-8.03-17.5,0l-3.47,9.09c-1.9,4.98-5.84,8.92-10.82,10.82l-9.09,3.47c-8.03,3.07-8.03,14.43,0,17.5l9.09,3.47c4.98,1.9,8.92,5.84,10.82,10.82l3.47,9.09c3.07,8.03,14.43,8.03,17.5,0l3.47-9.09c1.9-4.98,5.84-8.92,10.82-10.82Z";

export function Constellation({ size = 520 }: { size?: number }) {
  const reduceMotion = useReducedMotion();
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (reduceMotion) return;
    const isCoarse =
      typeof window !== "undefined" &&
      window.matchMedia("(pointer: coarse)").matches;
    if (isCoarse) return;

    const onMove = (e: MouseEvent) => {
      const el = wrapperRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / rect.width;
      const dy = (e.clientY - cy) / rect.height;
      setPointer({
        x: Math.max(-0.5, Math.min(0.5, dx)),
        y: Math.max(-0.5, Math.min(0.5, dy)),
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [reduceMotion]);

  return (
    <div
      ref={wrapperRef}
      className="relative aspect-square select-none"
      style={{ width: size, maxWidth: "100%" }}
      aria-hidden="true"
    >
      {/* Soft glow halo */}
      <div
        className="absolute inset-[18%] rounded-full blur-3xl opacity-50"
        style={{
          background:
            "radial-gradient(closest-side, rgba(245,199,56,0.35), rgba(245,199,56,0.05) 60%, transparent 75%)",
        }}
      />

      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 181.68 181.68"
        className="relative w-full h-full overflow-visible"
        style={{
          filter: "drop-shadow(0 25px 60px rgba(245,199,56,0.18))",
          transformOrigin: `${CENTER}px ${CENTER}px`,
        }}
        animate={
          reduceMotion
            ? undefined
            : {
                rotate: pointer.x * 8,
                scale: 1 + Math.abs(pointer.y) * 0.02,
              }
        }
        transition={{ type: "spring", stiffness: 30, damping: 18 }}
      >
        {/* Faint connecting rings - counter-rotate gently for parallax depth */}
        <motion.g
          style={{ transformOrigin: `${CENTER}px ${CENTER}px` }}
          animate={reduceMotion ? undefined : { rotate: -360 }}
          transition={
            reduceMotion
              ? undefined
              : {
                  duration: 60,
                  repeat: Infinity,
                  ease: "linear",
                }
          }
        >
          <circle
            cx={CENTER}
            cy={CENTER}
            r="82"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.4"
            opacity="0.18"
            strokeDasharray="2 4"
          />
          <circle
            cx={CENTER}
            cy={CENTER}
            r="60"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.4"
            opacity="0.12"
            strokeDasharray="1 3"
          />
        </motion.g>

        {/* Inner group: continuous slow->fast->slow rotation cycle */}
        <motion.g
          style={{ transformOrigin: `${CENTER}px ${CENTER}px` }}
          animate={reduceMotion ? undefined : { rotate: 360 }}
          transition={
            reduceMotion
              ? undefined
              : {
                  duration: 22,
                  repeat: Infinity,
                  ease: [0.45, 0, 0.55, 1],
                }
          }
        >

        {DOTS.map((dot, i) => {
          const phase = (i * 0.27) % 6;

          return (
            <motion.circle
              key={i}
              cx={dot.cx}
              cy={dot.cy}
              r={dot.r}
              fill={dot.fill}
              style={{ transformOrigin: `${dot.cx}px ${dot.cy}px` }}
              animate={
                reduceMotion
                  ? undefined
                  : {
                      scale: [1, 1.08, 1],
                      opacity: [0.92, 1, 0.92],
                    }
              }
              transition={
                reduceMotion
                  ? undefined
                  : {
                      duration: 4 + (i % 5) * 0.4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: phase,
                    }
              }
            />
          );
        })}

        <motion.path
          d={SPARKLE_PATH}
          fill="#f5c738"
          style={{ transformOrigin: `${CENTER}px ${CENTER}px` }}
          animate={
            reduceMotion
              ? undefined
              : {
                  scale: [1, 1.08, 1],
                  rotate: [0, 12, -6, 0],
                }
          }
          transition={
            reduceMotion
              ? undefined
              : {
                  duration: 9,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
        />
        </motion.g>
      </motion.svg>
    </div>
  );
}
