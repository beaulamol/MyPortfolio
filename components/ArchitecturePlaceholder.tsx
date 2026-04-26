/**
 * Illustrative architecture strip (no proprietary detail).
 *
 * What you can put here instead:
 * 1. **Sanitized diagram** - Export from Figma / Excalidraw as PNG or WebP (no logos, hostnames, or internal APIs),
 *    put it in `public/diagrams/`, then use `next/image` (see `ArchitectureDiagramExample` below).
 * 2. **Public SVG** - Your own simplified SVG file, imported or inlined.
 * 3. **Keep this component** - Stays abstract and safe for recruiters / public web.
 *
 * @example Replace inner content with an image:
 * ```tsx
 * import Image from "next/image";
 *
 * <figure className="mt-8 ...">
 *   <Image
 *     src="/diagrams/your-sanitized-flow.webp"
 *     alt={caption}
 *     width={1200}
 *     height={360}
 *     className="w-full h-auto rounded-lg border border-[var(--color-border)]"
 *     sizes="(max-width: 768px) 100vw, 896px"
 *   />
 *   <figcaption>...</figcaption>
 * </figure>
 * ```
 */
export function ArchitecturePlaceholder({ caption }: { caption: string }) {
  return (
    <figure
      className="mt-8 overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 sm:p-6"
      aria-label={caption}
    >
      {/* Example layout: left → middle → right with visible flow (not empty “black boxes”) */}
      <div
        className="flex flex-col items-stretch gap-2 sm:flex-row sm:items-center sm:gap-1"
        role="img"
      >
        <DiagramNode
          title="Edge / devices"
          subtitle="Sensors, gateways, BLE"
          variant="edge"
        />
        <FlowSeparator />
        <DiagramNode
          title="Real-time layer"
          subtitle="MQTT · WebRTC streams"
          variant="stream"
        />
        <FlowSeparator />
        <DiagramNode
          title="Apps & dashboards"
          subtitle="Web + mobile clients"
          variant="apps"
        />
      </div>
      <figcaption className="mt-4 text-center font-mono text-xs text-[var(--color-muted)]">
        {caption}
      </figcaption>
    </figure>
  );
}

/** Optional reference: copy into this file or a sibling when you have a real asset. */
export function ArchitectureDiagramExample({
  caption,
  src,
  width,
  height,
}: {
  caption: string;
  /** e.g. "/diagrams/flow.webp" */
  src: string;
  width: number;
  height: number;
}) {
  return (
    <figure
      className="mt-8 overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-2 sm:p-4"
      aria-label={caption}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- example: swap for `import Image from "next/image"` in production */}
      <img
        src={src}
        alt={caption}
        width={width}
        height={height}
        className="mx-auto h-auto w-full max-w-full rounded-lg"
        loading="lazy"
        decoding="async"
      />
      <figcaption className="mt-3 px-2 text-center font-mono text-xs text-[var(--color-muted)]">
        {caption}
      </figcaption>
    </figure>
  );
}

function FlowSeparator() {
  return (
    <>
      <div
        className="flex justify-center py-1 text-sm text-zinc-500 sm:hidden"
        aria-hidden
      >
        ↓
      </div>
      <FlowArrows className="mx-1 hidden shrink-0 sm:block" />
    </>
  );
}

function FlowArrows({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="40"
      height="24"
      viewBox="0 0 40 24"
      fill="none"
      aria-hidden
    >
      <path
        d="M4 12h28"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        className="text-zinc-500"
      />
      <path
        d="M28 7l6 5-6 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-zinc-400"
      />
    </svg>
  );
}

function DiagramNode({
  title,
  subtitle,
  variant,
}: {
  title: string;
  subtitle: string;
  variant: "edge" | "stream" | "apps";
}) {
  const shell =
    variant === "stream"
      ? "border-blue-500/35 bg-gradient-to-b from-blue-950/50 to-zinc-950/80 ring-1 ring-blue-500/20"
      : "border-zinc-600/50 bg-gradient-to-b from-zinc-800/90 to-zinc-950 ring-1 ring-zinc-600/30";

  return (
    <div className={`min-h-[100px] flex-1 rounded-lg border p-3 sm:min-h-[120px] sm:p-4 ${shell}`}>
      <p className="font-mono text-[10px] font-medium uppercase tracking-wider text-zinc-300">
        {title}
      </p>
      <p className="mt-1 text-[11px] leading-snug text-zinc-500">{subtitle}</p>
      <div className="mt-3 flex flex-wrap items-end gap-2" aria-hidden>
        {variant === "edge" && (
          <>
            <MiniDot label="n" />
            <MiniDot label="n" />
            <MiniDot label="n" />
            <span className="ml-1 text-[9px] text-zinc-600">···</span>
          </>
        )}
        {variant === "stream" && (
          <div className="flex w-full items-center gap-1 pt-1">
            <span className="h-1 flex-1 rounded-full bg-blue-500/40" />
            <span className="h-1 w-8 rounded-full bg-blue-400/60" />
            <span className="h-1 flex-1 rounded-full bg-blue-500/30" />
          </div>
        )}
        {variant === "apps" && (
          <div className="flex gap-2 pt-1">
            <div className="h-14 w-9 rounded-md border border-zinc-600/60 bg-zinc-900/80" />
            <div className="hidden h-14 w-16 rounded-md border border-zinc-600/60 bg-zinc-900/80 sm:block" />
          </div>
        )}
      </div>
    </div>
  );
}

function MiniDot({ label }: { label: string }) {
  return (
    <span className="flex h-6 w-6 items-center justify-center rounded-full border border-zinc-600/50 bg-zinc-900/90 font-mono text-[8px] text-zinc-500">
      {label}
    </span>
  );
}
