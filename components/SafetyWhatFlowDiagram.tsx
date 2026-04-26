import type { ReactNode } from "react";

/**
 * Illustrative SafetyWhat-style pipeline (no proprietary internals).
 * Cameras → AI violation detection → platform services → IoT / industrial actions.
 */
export function SafetyWhatFlowDiagram({ caption }: { caption: string }) {
  return (
    <figure
      className="mt-8 overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 sm:p-6"
      aria-label={caption}
    >
      <p className="mb-4 font-mono text-[10px] uppercase tracking-wider text-zinc-500">
        Event path - detect → decide → act
      </p>
      <div
        className="flex flex-col gap-2 sm:flex-row sm:items-stretch sm:gap-1"
        role="img"
      >
        <FlowNode
          title="AI cameras"
          subtitle="Workplace"
          accent="zinc"
          visual={<CameraVisual />}
        />
        <Sep />
        <FlowNode
          title="AI analysis"
          subtitle="Check Safety violations"
          accent="blue"
          visual={<PulseVisual />}
        />
        <Sep />
        <FlowNode
          title="Platform services"
          subtitle="Integration layer"
          accent="emerald"
          visual={<DbVisual />}
        />
        <Sep />
        <FlowNode
          title="IoT & controls"
          subtitle="Device actions"
          accent="amber"
          visual={<CoilVisual />}
        />
      </div>

      <div className="relative mt-6 rounded-lg border-2 border-emerald-700/35 bg-zinc-950/60 p-1 sm:p-1.5">
        <div
          className="absolute -top-3 left-1/2 hidden h-6 w-px -translate-x-1/2 bg-zinc-600 sm:block"
          aria-hidden
        />
        <div className="rounded-md border border-dashed border-zinc-600/50 bg-zinc-950/80 p-3 sm:p-5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded border border-emerald-600/50 bg-emerald-950/50 px-2 py-0.5 font-mono text-[9px] font-medium uppercase tracking-wider text-emerald-200/90">
              Serving layer
            </span>
            <span className="text-zinc-600" aria-hidden>
              ·
            </span>
            <span className="rounded border border-blue-600/40 bg-blue-950/40 px-2 py-0.5 font-mono text-[9px] font-medium uppercase tracking-wider text-blue-200/90">
              React operator UI
            </span>
          </div>
          <p className="mt-3 font-mono text-[10px] uppercase tracking-wider text-blue-300/90">
            Operator application
          </p>
          <p className="mt-2 text-sm leading-relaxed text-zinc-400">
          Built a real-time control interface for monitoring safety violations, configuring AI and IoT rules, and managing incident workflows across connected systems.
          Designed and implemented operator-facing dashboards handling live data streams, task flows, and system state transitions for safety-critical environments.
          </p>
          <ul className="mt-3 flex flex-wrap gap-2" aria-hidden>
            {["Javascript","Typescript","React","Zustand", "GraphQL", "D3", "ApexCharts", "Websocket","Formik","Bootstrap","Styled Components","Axios","React Native Watch App"].map((t) => (
              <li
                key={t}
                className="rounded-md border border-zinc-700/80 bg-zinc-900/80 px-2 py-1 font-mono text-[10px] text-zinc-400"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <figcaption className="mt-4 text-center font-mono text-xs text-[var(--color-muted)]">
        {caption}
      </figcaption>
    </figure>
  );
}

function Sep() {
  return (
    <>
      <div className="flex justify-center py-1 text-sm text-zinc-500 sm:hidden" aria-hidden>
        ↓
      </div>
      <svg
        className="mx-1 hidden shrink-0 self-center sm:block"
        width="36"
        height="22"
        viewBox="0 0 36 22"
        fill="none"
        aria-hidden
      >
        <path
          d="M4 11h24"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="text-zinc-500"
        />
        <path
          d="M24 6l6 5-6 5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-zinc-400"
        />
      </svg>
    </>
  );
}

function FlowNode({
  title,
  subtitle,
  accent,
  visual,
}: {
  title: string;
  subtitle: string;
  accent: "zinc" | "blue" | "emerald" | "amber";
  visual: ReactNode;
}) {
  const ring = {
    zinc: "border-zinc-600/50 ring-zinc-600/25 from-zinc-800/90 to-zinc-950",
    blue: "border-blue-500/35 ring-blue-500/20 from-blue-950/55 to-zinc-950",
    emerald: "border-emerald-500/30 ring-emerald-500/15 from-emerald-950/40 to-zinc-950",
    amber: "border-amber-500/35 ring-amber-500/15 from-amber-950/35 to-zinc-950",
  }[accent];

  return (
    <div
      className={`min-h-[108px] flex-1 rounded-lg border bg-gradient-to-b p-3 ring-1 sm:min-h-[118px] sm:p-3.5 ${ring}`}
    >
      <p className="font-mono text-[10px] font-medium uppercase tracking-wider text-zinc-200">
        {title}
      </p>
      <p className="mt-1 text-[11px] leading-snug text-zinc-500">{subtitle}</p>
      <div className="mt-2.5">{visual}</div>
    </div>
  );
}

function CameraVisual() {
  return (
    <div className="flex items-center gap-2" aria-hidden>
      <div className="relative h-10 w-14 rounded-md border border-zinc-600 bg-zinc-900">
        <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border border-zinc-500 bg-zinc-800" />
      </div>
      <span className="text-[9px] text-zinc-600">fps</span>
    </div>
  );
}

function PulseVisual() {
  return (
    <div className="flex w-full items-center gap-1 pt-1.5" aria-hidden>
      <span className="h-1.5 flex-1 rounded-full bg-blue-500/50" />
      <span className="h-1.5 w-6 rounded-full bg-blue-400/70" />
      <span className="h-1.5 flex-1 rounded-full bg-blue-500/35" />
    </div>
  );
}

function DbVisual() {
  return (
    <div className="flex w-full items-center gap-1 pt-1" aria-hidden>
      <span className="h-6 w-2 rounded-sm bg-emerald-600/40" />
      <span className="h-8 w-2 rounded-sm bg-emerald-500/50" />
      <span className="h-5 w-2 rounded-sm bg-emerald-600/35" />
      {/* <span className="ml-1 font-mono text-[8px] text-zinc-600">SQL</span> */}
    </div>
  );
}

function CoilVisual() {
  return (
    <div className="flex flex-wrap gap-1.5 pt-1" aria-hidden>
      <span className="rounded border border-amber-600/40 bg-amber-950/30 px-1.5 py-0.5 font-mono text-[8px] text-amber-200/80">
        Act
      </span>
      <span className="h-6 w-10 rounded border border-dashed border-amber-700/50 bg-zinc-900/80" />
    </div>
  );
}
