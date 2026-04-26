"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { SITE } from "@/lib/site";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <div
      id="top"
      className="relative flex min-h-[85vh] flex-col justify-center pt-20 pb-16 sm:min-h-[90vh] sm:pt-24"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute -left-1/4 top-1/4 h-[420px] w-[420px] rounded-full opacity-[0.07] blur-3xl"
          style={{ background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)" }}
          aria-hidden
        />
      </div>

      <motion.p
        className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-muted)] sm:text-sm"
        initial={reduce ? false : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        Portfolio
      </motion.p>

      <motion.h1
        className="text-4xl font-semibold tracking-tight text-[var(--color-foreground)] sm:text-5xl lg:text-6xl lg:leading-[1.05]"
        initial={reduce ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
      >
        {SITE.name}
      </motion.h1>

      <motion.p
        className="mt-4 text-lg text-[var(--color-muted)] sm:text-xl"
        initial={reduce ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        {SITE.title}
      </motion.p>

      <motion.p
        className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--color-muted)] sm:text-lg"
        initial={reduce ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      >
        {SITE.tagline}
      </motion.p>

      <motion.div
        className="mt-10 flex flex-wrap gap-3"
        initial={reduce ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
      >
        <Link
          href="#work"
          className="inline-flex items-center justify-center rounded-full bg-[var(--color-foreground)] px-6 py-2.5 text-sm font-medium text-[var(--color-background)] transition-opacity hover:opacity-90"
        >
          View Work
        </Link>
        <Link
          href="#contact"
          className="inline-flex items-center justify-center rounded-full border border-[var(--color-border)] bg-transparent px-6 py-2.5 text-sm font-medium text-[var(--color-foreground)] transition-colors hover:border-[var(--color-muted)]"
        >
          Contact
        </Link>
      </motion.div>
    </div>
  );
}
