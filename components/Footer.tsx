import { SITE } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[var(--color-border)] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-mono text-xs text-[var(--color-muted)]">
          © {year} {SITE.name}. All rights reserved.
        </p>
        <p className="text-center text-xs text-[var(--color-muted)] sm:text-right">
          Built with Next.js, TypeScript, Tailwind CSS & Framer Motion.
        </p>
      </div>
    </footer>
  );
}
