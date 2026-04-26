"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useCallback } from "react";
import { SITE } from "@/lib/site";

const nav = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#leadership", label: "Leadership" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const { scrollY } = useScroll();
  const reduce = useReducedMotion();
  const headerBg = useTransform(
    scrollY,
    [0, 80],
    ["rgba(10, 10, 11, 0)", "rgba(10, 10, 11, 0.85)"],
  );
  const borderOpacity = useTransform(scrollY, [0, 80], [0, 1]);

  const scrollTo = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <motion.header
      style={reduce ? undefined : { backgroundColor: headerBg }}
      className="fixed inset-x-0 top-0 z-50 backdrop-blur-md supports-[backdrop-filter]:bg-[var(--color-background)]/60"
    >
      {!reduce && (
        <motion.div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-[var(--color-border)]"
          style={{ opacity: borderOpacity }}
        />
      )}
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="#top"
          onClick={(e) => scrollTo(e, "#top")}
          className="font-mono text-xs tracking-tight text-[var(--color-foreground)] transition-opacity hover:opacity-80 sm:text-sm"
        >
          {SITE.name}
        </Link>
        <nav
          className="flex max-w-[65%] flex-wrap justify-end gap-x-2 gap-y-1 sm:max-w-none sm:flex-nowrap sm:gap-4"
          aria-label="Primary"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={(e) => scrollTo(e, item.href)}
              className="whitespace-nowrap rounded-md px-1.5 py-1.5 text-[11px] text-[var(--color-muted)] transition-colors hover:text-[var(--color-foreground)] sm:px-2 sm:text-sm"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
