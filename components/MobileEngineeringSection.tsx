import type { ReactNode } from "react";
import { FadeIn } from "@/components/FadeIn";

const TAGS = ["Production", "Enterprise", "IoT", "Offline-first"] as const;

function TagPill({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface-elevated)] px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-[var(--color-muted)]">
      {children}
    </span>
  );
}

function PlatformBadge({ os }: { os: "Android" | "iOS" }) {
  const cls =
    os === "Android"
      ? "border-emerald-700/40 bg-emerald-950/30 text-emerald-200/90"
      : "border-slate-600/50 bg-slate-900/80 text-slate-200";
  return (
    <span
      className={`inline-flex items-center rounded-md border px-2 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wider ${cls}`}
    >
      {os}
    </span>
  );
}

function SubsectionTitle({ children }: { children: ReactNode }) {
  return (
    <h4 className="mt-8 border-b border-[var(--color-border)] pb-2 font-mono text-xs uppercase tracking-[0.15em] text-[var(--color-foreground)] first:mt-0">
      {children}
    </h4>
  );
}

function ProjectBlock({
  title,
  meta,
  children,
}: {
  title: string;
  meta?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="mt-5 rounded-xl border border-[var(--color-border)] bg-[var(--color-background)]/40 p-4 sm:p-5">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <h5 className="text-base font-semibold text-[var(--color-foreground)]">{title}</h5>
        {meta}
      </div>
      <div className="mt-3 space-y-2 text-sm leading-relaxed text-[var(--color-muted)]">{children}</div>
    </div>
  );
}

/** Compact stack glyphs - generic shapes, not official trademarks. */
function TechStackIcons() {
  return (
    <div
      className="mt-6 flex flex-wrap items-center justify-center gap-6 sm:gap-8"
      aria-label="Technology stack: Java, Kotlin, React Native, Flutter"
    >
      <TechIcon label="Java">
        <svg viewBox="0 0 32 32" className="h-8 w-8" fill="none" aria-hidden>
          <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="1.5" className="text-orange-400/90" />
          <path
            d="M11 20c2.5 1.2 8.5 1.2 11 0M12 14c1.8 1 6.2 1 8 0"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            className="text-orange-300/80"
          />
          <path d="M16 8v4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" className="text-orange-200/70" />
        </svg>
      </TechIcon>
      <TechIcon label="Kotlin">
        <svg viewBox="0 0 32 32" className="h-8 w-8" fill="none" aria-hidden>
          <path d="M4 26L16 4l12 22H4z" fill="currentColor" className="text-violet-500/85" />
          <path d="M10 26h14L17 12 10 26z" fill="currentColor" className="text-purple-300/90" />
        </svg>
      </TechIcon>
      <TechIcon label="React Native">
        <svg viewBox="0 0 32 32" className="h-8 w-8" fill="none" aria-hidden>
          <ellipse cx="16" cy="16" rx="12" ry="5" stroke="currentColor" strokeWidth="1.3" className="text-sky-400/85" />
          <ellipse cx="16" cy="16" rx="12" ry="5" stroke="currentColor" strokeWidth="1.3" className="text-sky-400/85" transform="rotate(60 16 16)" />
          <ellipse cx="16" cy="16" rx="12" ry="5" stroke="currentColor" strokeWidth="1.3" className="text-sky-400/85" transform="rotate(-60 16 16)" />
          <circle cx="16" cy="16" r="2.2" fill="currentColor" className="text-sky-300" />
        </svg>
      </TechIcon>
      <TechIcon label="Flutter">
        <svg viewBox="0 0 32 32" className="h-8 w-8" fill="none" aria-hidden>
          <path d="M8 20 L16 8 L24 16 L16 28 Z" fill="currentColor" className="text-sky-500/90" />
          <path d="M16 8 L24 16 L16 16 Z" fill="currentColor" className="text-cyan-300/85" />
        </svg>
      </TechIcon>
    </div>
  );
}

function TechIcon({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-foreground)]"
        aria-hidden
      >
        {children}
      </div>
      <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-muted)]">{label}</span>
    </div>
  );
}

export function MobileEngineeringSection() {
  return (
    <FadeIn>
      <article className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-10">
        <span className="font-mono text-xs text-[var(--color-muted)]">Mobile applications</span>
        <h3 className="mt-3 text-xl font-semibold tracking-tight text-[var(--color-foreground)] sm:text-2xl">
          Mobile Engineering - Native &amp; Cross-Platform
        </h3>

        <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
          Built and delivered multiple mobile applications across Android and iOS ecosystems, ranging
          from early-stage native apps to enterprise-grade and large-scale production systems used in
          real-world operations.
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {TAGS.map((t) => (
            <TagPill key={t}>{t}</TagPill>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">Platforms</span>
          <PlatformBadge os="Android" />
          <PlatformBadge os="iOS" />
        </div>

        <TechStackIcons />

        <SubsectionTitle>A. Published applications (production)</SubsectionTitle>

        <ProjectBlock
          title="React Native - food delivery platform (UAE)"
          meta={
            <div className="flex flex-wrap gap-1.5">
              <TagPill>Production</TagPill>
              <PlatformBadge os="Android" />
              <PlatformBadge os="iOS" />
            </div>
          }
        >
          <ul className="list-disc space-y-1.5 pl-5">
            <li>
              Three coordinated apps: <strong className="text-[var(--color-foreground)]">Customer</strong>,{" "}
              <strong className="text-[var(--color-foreground)]">Restaurant</strong>, and{" "}
              <strong className="text-[var(--color-foreground)]">Delivery</strong> - shared contracts and
              consistent release discipline across the suite.
            </li>
            <li>
              Real-time order tracking, push notifications, and full order lifecycle UX from placement
              through fulfillment.
            </li>
            <li>Shipped to public stores: Google Play and Apple App Store.</li>
          </ul>
        </ProjectBlock>

        <ProjectBlock
          title="React Native - enterprise EHS (Majid Al Futtaim)"
          meta={
            <div className="flex flex-wrap gap-1.5">
              <TagPill>Production</TagPill>
              <TagPill>Offline-first</TagPill>
              <PlatformBadge os="Android" />
              <PlatformBadge os="iOS" />
            </div>
          }
        >
          <ul className="list-disc space-y-1.5 pl-5">
            <li>
              Large-scale production application for field safety operations: audits, workflows, and
              operational visibility where connectivity is never guaranteed.
            </li>
            <li>
             State management architecture with{" "}
              <strong className="text-[var(--color-foreground)]">Redux</strong>-driven state for predictable
              sync and conflict-aware updates.
            </li>
            <li>Implemented <strong className="text-[var(--color-foreground)]">Offline - first</strong>  capabilities using <strong className="text-[var(--color-foreground)]"> Redux Persist</strong> , ensuring state persistence and seamless user experience in low or no connectivity environments.</li>
            <li>Continued engineering support for one year post-launch - stability, fixes, and iteration.</li>
          </ul>
        </ProjectBlock>

        <ProjectBlock
          title="Flutter - cross-platform application"
          meta={
            <div className="flex flex-wrap gap-1.5">
              <TagPill>Production</TagPill>
              <PlatformBadge os="Android" />
              <PlatformBadge os="iOS" />
            </div>
          }
        >
          <p>
            Cross-platform product deployed to <strong className="text-[var(--color-foreground)]">App Store</strong>{" "}
            and <strong className="text-[var(--color-foreground)]">Play Store</strong> with a single codebase and
            platform-appropriate polish.
          </p>
        </ProjectBlock>

        <SubsectionTitle>B. Enterprise &amp; private distribution</SubsectionTitle>

        <ProjectBlock
          title="Kotlin - ERP management systems"
          meta={
            <div className="flex flex-wrap gap-1.5">
              <TagPill>Enterprise</TagPill>
              <PlatformBadge os="Android" />
            </div>
          }
        >
          <p>
            Internal business applications for operations management - distributed through{" "}
            <strong className="text-[var(--color-foreground)]">managed enterprise devices</strong> rather than
            public consumer storefronts, with deployment and update flows suited to IT policy.
          </p>
        </ProjectBlock>

        <ProjectBlock
          title="Kotlin - restaurant management system"
          meta={
            <div className="flex flex-wrap gap-1.5">
              <TagPill>Enterprise</TagPill>
              <PlatformBadge os="Android" />
            </div>
          }
        >
          <p>
            Order handling, inventory, and workflow tooling built for dedicated hardware -{" "}
            <strong className="text-[var(--color-foreground)]">tablet-first</strong> deployment on premises with
            reliability as the default.
          </p>
        </ProjectBlock>

        <ProjectBlock
          title="Android Wear - real-time alerting"
          meta={
            <div className="flex flex-wrap gap-1.5">
              <TagPill>IoT</TagPill>
              <PlatformBadge os="Android" />
            </div>
          }
        >
          <p>
            <strong className="text-[var(--color-foreground)]">BLE</strong>-based alerting paired with a broader IoT
            stack for low-latency signals from the edge to the operator - wearable UX tuned for glanceable,
            interrupt-driven workflows.
          </p>
        </ProjectBlock>

        <SubsectionTitle>C. Early career - native Android (Java)</SubsectionTitle>

        <ProjectBlock
          title="Native Android portfolio (Java)"
          meta={
            <div className="flex flex-wrap gap-1.5">
              <TagPill>Production</TagPill>
              <PlatformBadge os="Android" />
            </div>
          }
        >
          <ul className="list-disc space-y-1.5 pl-5">
            <li>
              Multiple consumer-facing apps across domains such as{" "}
              <strong className="text-[var(--color-foreground)]">tourism</strong>,{" "}
              <strong className="text-[var(--color-foreground)]">Ayurveda</strong>, and{" "}
              <strong className="text-[var(--color-foreground)]">fitness</strong> - end-to-end Android
              engineering in Java.
            </li>
            <li>
              Independent ownership from implementation through Play Store release and ongoing maintenance.
            </li>
          </ul>
        </ProjectBlock>

        <h4 className="mt-10 font-mono text-xs uppercase tracking-wider text-[var(--color-foreground)]">
          Highlights
        </h4>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[var(--color-muted)]">
          <li>End-to-end ownership of the mobile lifecycle: build, release, monitoring, and post-launch support.</li>
          <li>
            Deep experience with both public-store products and enterprise-controlled distribution models.
          </li>
          <li>
            Real-time, offline-first, and IoT-adjacent systems - maps, push, BLE, and resilient sync patterns.
          </li>
          <li>
            Breadth across domains: logistics and food tech, ERP and operations, environmental health and
            safety, and consumer health.
          </li>
        </ul>
      </article>
    </FadeIn>
  );
}
