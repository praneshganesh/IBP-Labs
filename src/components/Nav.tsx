"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

const links = [
  { href: "/#products", label: "Products" },
  { href: "/#philosophy", label: "Philosophy" },
  { href: "/#contact", label: "Contact" },
];

export function LogoMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <span
      className={`${className} grid shrink-0 place-items-center rounded-xl bg-foreground`}
      aria-hidden
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
        <rect x="4" y="4" width="7" height="7" rx="2" fill="#fafaf7" />
        <rect
          x="13"
          y="4"
          width="7"
          height="7"
          rx="2"
          fill="#fafaf7"
          opacity="0.45"
        />
        <rect
          x="4"
          y="13"
          width="7"
          height="7"
          rx="2"
          fill="#fafaf7"
          opacity="0.45"
        />
        <rect x="13" y="13" width="7" height="7" rx="2" fill="#2547d0" />
      </svg>
    </span>
  );
}

export default function Nav() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
  });

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4"
    >
      <nav
        className={`mx-auto flex h-14 max-w-5xl items-center justify-between rounded-2xl border px-4 pl-5 transition-all duration-300 ${
          scrolled
            ? "border-hairline bg-white/85 shadow-[0_8px_30px_-12px_rgba(17,17,20,0.15)] backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <a href="/" className="flex items-center gap-3">
          <LogoMark />
          <span className="flex items-baseline gap-1.5">
            <span className="text-[15px] font-semibold tracking-tight">
              IBP Labs
            </span>
            <span className="hidden text-xs text-muted md:inline">
              — app studio
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-1 sm:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm text-muted transition-colors hover:bg-foreground/[0.04] hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="mailto:hello@ibp-labs.com"
          className="rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
        >
          Get in touch
        </a>
      </nav>
    </motion.header>
  );
}
