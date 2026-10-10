"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] as const },
  },
};

function PathToFireCard() {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="w-64 rounded-2xl border border-hairline bg-white p-5 shadow-[0_24px_60px_-24px_rgba(17,17,20,0.18)]"
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-muted">PathToFIRE</span>
        <span className="rounded-full bg-emerald-600/10 px-2 py-0.5 text-[10px] font-medium text-emerald-700">
          Live
        </span>
      </div>
      <p className="mt-3 text-[11px] uppercase tracking-wider text-muted">
        Net worth
      </p>
      <p className="mt-0.5 text-2xl font-semibold tracking-tight">$230,000</p>
      <p className="mt-1 text-xs font-medium text-emerald-600">
        ↑ 12.4% this year
      </p>
      <div className="mt-4 flex items-end gap-1" aria-hidden>
        {[34, 42, 38, 52, 58, 54, 66, 74, 82, 92].map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-sm bg-gradient-to-t from-emerald-500/70 to-emerald-400/40"
            style={{ height: `${h * 0.5}px` }}
          />
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between border-t border-hairline pt-3 text-xs">
        <span className="text-muted">FIRE date</span>
        <span className="font-medium">Jan 2033 · 7.4 yrs</span>
      </div>
    </motion.div>
  );
}

function SaaviCard() {
  const items = [
    { icon: "🔧", text: "AC service due this weekend" },
    { icon: "🚗", text: "Car insurance renews in 21 days" },
    { icon: "📺", text: "Netflix renews in 3 days" },
  ];
  return (
    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      className="w-64 rounded-2xl border border-hairline bg-white p-5 shadow-[0_24px_60px_-24px_rgba(17,17,20,0.18)]"
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-muted">Saavi</span>
        <span className="rounded-full bg-indigo-600/10 px-2 py-0.5 text-[10px] font-medium text-indigo-700">
          Coming soon
        </span>
      </div>
      <p className="mt-3 text-[11px] uppercase tracking-wider text-muted">
        Today&apos;s attention
      </p>
      <div className="mt-3 space-y-2.5">
        {items.map((entry) => (
          <div
            key={entry.text}
            className="flex items-center gap-2.5 rounded-xl bg-foreground/[0.03] px-3 py-2"
          >
            <span className="text-sm" aria-hidden>
              {entry.icon}
            </span>
            <span className="text-xs leading-snug">{entry.text}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between border-t border-hairline pt-3 text-xs">
        <span className="text-muted">Things tracked</span>
        <span className="font-medium">142</span>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-24 sm:pt-44 sm:pb-28">
      {/* Backdrop: dot grid + gradient washes */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(rgba(17,17,20,0.07) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(70% 60% at 50% 30%, black 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(70% 60% at 50% 30%, black 30%, transparent 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[900px] -translate-x-1/2"
        style={{
          background:
            "radial-gradient(50% 50% at 35% 40%, rgba(37,71,208,0.10), transparent 70%), radial-gradient(45% 45% at 70% 45%, rgba(16,185,129,0.09), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-[1.2fr_1fr]">
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.div variants={item}>
              <a
                href="https://www.pathtofire.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-hairline bg-white/70 py-1.5 pr-4 pl-2 text-xs font-medium backdrop-blur transition-colors hover:border-foreground/20"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Now live: PathToFIRE
                <span className="text-muted">→</span>
              </a>
            </motion.div>
            <motion.h1
              variants={item}
              className="mt-7 text-5xl leading-[1.04] tracking-tight text-foreground sm:text-[4.25rem]"
            >
              Personal software,{" "}
              <em className="font-serif italic text-accent">
                thoughtfully engineered.
              </em>
            </motion.h1>
            <motion.p
              variants={item}
              className="mt-7 max-w-xl text-lg leading-relaxed text-muted"
            >
              IBP Labs builds private, AI-powered apps that help people manage
              their wealth, their possessions, and the everyday administration
              of life — without handing their data to someone else&apos;s
              server.
            </motion.p>
            <motion.div
              variants={item}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <a
                href="#products"
                className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
              >
                See our products
              </a>
              <a
                href="#philosophy"
                className="rounded-full border border-hairline bg-white/60 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-foreground/30"
              >
                How we build
              </a>
            </motion.div>
            <motion.div
              variants={item}
              className="mt-12 flex flex-wrap gap-x-10 gap-y-4"
            >
              {[
                ["2", "products in the family"],
                ["100%", "privacy-first by design"],
                ["0", "ads. ever."],
              ].map(([stat, label]) => (
                <div key={label}>
                  <p className="text-2xl font-semibold tracking-tight">
                    {stat}
                  </p>
                  <p className="mt-0.5 text-xs text-muted">{label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Floating product cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="relative hidden h-[480px] lg:block"
            aria-hidden
          >
            <div className="absolute top-4 left-0 -rotate-3">
              <PathToFireCard />
            </div>
            <div className="absolute right-0 bottom-4 rotate-3">
              <SaaviCard />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
