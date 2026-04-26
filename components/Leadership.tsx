import { FadeIn } from "@/components/FadeIn";
import { Section } from "@/components/Section";

const points = [
  {
    title: "Mentoring",
    body: "Mentored junior developers through pairing, structured feedback, and clear growth paths.",
  },
  {
    title: "Agile leadership",
    body: "Led Agile teams with predictable cadences, transparent priorities, and shared accountability.",
  },
  {
    title: "Delivery & quality",
    body: "Improved delivery speed and code quality via standards, reviews, and pragmatic automation.",
  },
  {
    title: "Ownership",
    body: "Took end-to-end ownership of technical decisions - from tradeoffs to rollout and follow-through.",
  },
] as const;

export function Leadership() {
  return (
    <Section id="leadership" ariaLabel="Leadership and impact" className="py-20 sm:py-28">
      <FadeIn>
        <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
          Leadership & impact
        </h2>
        <p className="mt-4 max-w-2xl text-xl font-medium tracking-tight text-[var(--color-foreground)] sm:text-2xl">
          People, process, and craft - aligned so teams ship with confidence.
        </p>
      </FadeIn>
      <ul className="mt-12 grid gap-6 sm:grid-cols-2">
        {points.map((p, i) => (
          <FadeIn key={p.title} delay={i * 0.05}>
            <li className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
              <h3 className="text-lg font-semibold text-[var(--color-foreground)]">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">{p.body}</p>
            </li>
          </FadeIn>
        ))}
      </ul>
    </Section>
  );
}
