"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { SentiumMark } from "@/ui/components";

const NAV = [
  { href: "/#ai-native", label: "AI-native" },
  { href: "/#about", label: "About" },
  { href: "/#business", label: "For business" },
  { href: "/#projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "var(--color-header-bg)" : "transparent",
        backdropFilter: scrolled ? "saturate(140%) blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "saturate(140%) blur(12px)" : "none",
        borderBottom: scrolled
          ? "1px solid var(--color-line)"
          : "1px solid transparent",
      }}
    >
      <div className="container-prose flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group" aria-label="Sentium home">
          <SentiumMark size={28} />
          <span className="font-display text-xl tracking-tight">Sentium</span>
        </Link>

        <nav aria-label="Primary" className="hidden sm:flex items-center gap-1">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative px-3 py-2 text-sm font-medium tracking-tight transition-colors rounded-full"
              style={{ color: "var(--color-fg)" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/#contact"
          className="sm:hidden text-sm font-medium underline underline-offset-4"
          style={{ color: "var(--color-fg)" }}
        >
          Contact
        </Link>
      </div>
    </header>
  );
}
