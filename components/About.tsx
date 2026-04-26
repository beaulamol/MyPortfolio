import { FadeIn } from "@/components/FadeIn";
import { Section } from "@/components/Section";

export function About() {
  return (
    <Section id="about" ariaLabel="About" className="py-20 sm:py-28">
      <FadeIn>
        <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
          About
        </h2>
        <p className="mt-4 text-2xl font-medium tracking-tight text-[var(--color-foreground)] sm:text-3xl">
          Frontend lead shipping systems at scale.
        </p>
        <div className="mt-8 space-y-4 text-[var(--color-muted)] leading-relaxed">
          <p>
            With <strong className="font-medium text-[var(--color-foreground)]">7+ years</strong>{" "}
            in product engineering, I operate as a{" "}
            <strong className="font-medium text-[var(--color-foreground)]">Frontend Lead</strong>,
            specializing in{" "}
            <strong className="font-medium text-[var(--color-foreground)]">
              React, React Native, TypeScript, and native mobile
            </strong>{" "}
            (including Java and Kotlin Android, plus Flutter). My work centers on{" "}
            <strong className="font-medium text-[var(--color-foreground)]">
              real-time systems, IoT platforms, and AI-driven UI
            </strong>{" "}
            where latency, clarity, and reliability matter.
          </p>
          <p>
            I have led teams through complex delivery cycles, aligning architecture with business
            outcomes and mentoring engineers to raise both velocity and code quality across
            production-scale systems.
          </p>
        </div>
      </FadeIn>
    </Section>
  );
}
