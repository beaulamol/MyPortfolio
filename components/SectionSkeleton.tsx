export function SectionSkeleton() {
  return (
    <div
      className="animate-pulse space-y-4 py-20"
      aria-hidden
    >
      <div className="h-3 w-24 rounded bg-[var(--color-border)]" />
      <div className="h-8 max-w-md rounded bg-[var(--color-border)]" />
      <div className="h-24 max-w-2xl rounded bg-[var(--color-surface)]" />
    </div>
  );
}
