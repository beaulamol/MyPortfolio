import { FadeIn } from "@/components/FadeIn";
import { Section } from "@/components/Section";

const roles = [
  {
    period: "Recent",
    title: "Frontend Lead",
    org: "Product organization",
    highlights: [
      "Owned frontend strategy for real-time and IoT-heavy products",
      "Led a team of 9 engineers across web and mobile workstreams",
      "Drove delivery timelines, technical standards, and production readiness",
    ],
  },
  {
    period: "Growth",
    title: "Senior Frontend",
    org: "Cross-functional product teams",
    highlights: [
      "Shipped enterprise dashboards and operator tooling at scale",
      "Partnered with backend and platform teams on API and event contracts",
      "Raised bar for testing, observability, and UX consistency",
    ],
  },
  {
    period: "Foundation",
    title: "Software Engineer → Senior",
    org: "Web & mobile products",
    highlights: [
      "Built customer-facing apps with React, React Native, and native stacks",
      "Contributed to architecture decisions and incremental modernization",
    ],
  },
] as const;

export function Experience() {
  return (
    <Section id="experience" ariaLabel="Experience" className="py-20 sm:py-28">
      <FadeIn>
        <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
          Experience
        </h2>
        <p className="mt-4 max-w-2xl text-xl font-medium tracking-tight text-[var(--color-foreground)] sm:text-2xl">
          Career progression with increasing ownership - from hands-on delivery to leading a{" "}
          <span className="text-[var(--color-foreground)]">team of 9 engineers</span>.
        </p>
        <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
          Emphasis on mentoring, stakeholder alignment, and shipping systems that hold up under
          production load.
        </p>
      </FadeIn>

      <ol className="relative mt-14 space-y-12 border-l border-[var(--color-border)] pl-8 sm:pl-10">
        {roles.map((role, i) => (
          <FadeIn key={role.title} delay={i * 0.06}>
            <li className="relative">
              <span
                className="absolute -left-[calc(0.25rem+1px)] top-1.5 h-2 w-2 -translate-x-[calc(50%+0.5px)] rounded-full bg-[var(--color-foreground)] sm:-left-[calc(0.25rem+2px)]"
                aria-hidden
              />
              <p className="font-mono text-xs uppercase tracking-wider text-[var(--color-muted)]">
                {role.period}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-[var(--color-foreground)] sm:text-xl">
                {role.title}
              </h3>
              <p className="mt-1 text-sm text-[var(--color-muted)]">{role.org}</p>
              <ul className="mt-4 space-y-2 text-sm text-[var(--color-muted)]">
                {role.highlights.map((h) => (
                  <li key={h} className="flex gap-2">
                    <span className="text-[var(--color-border)]" aria-hidden>
                      -
                    </span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </li>
          </FadeIn>
        ))}
      </ol>
    </Section>
  );
}
