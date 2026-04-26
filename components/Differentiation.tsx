import { FadeIn } from "@/components/FadeIn";
import { Section } from "@/components/Section";

const pillars = [
  {
    title: "IoT + frontend depth",
    description:
      "Rare overlap: connected devices, telemetry, and polished operator experiences in one ownership model.",
  },
  {
    title: "Real-time systems",
    description:
      "WebRTC, MQTT, and low-latency UI patterns - designed for reliability when the network is messy.",
  },
  {
    title: "Mobile + web hybrid",
    description:
      "One product mindset across React Native, native stacks, and web - shared contracts and UX coherence.",
  },
  {
    title: "AI-integrated UI",
    description:
      "Dashboards and workflows that make model outputs actionable, explainable, and fast to iterate.",
  },
] as const;

export function Differentiation() {
  return (
    <Section id="differentiation" ariaLabel="What sets me apart" className="py-20 sm:py-28">
      <FadeIn>
        <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
          What sets me apart
        </h2>
        <p className="mt-4 text-2xl font-medium tracking-tight text-[var(--color-foreground)] sm:text-3xl">
        I build real-time, production-grade systems where frontend is the control layer - not just the UI.
        </p>
      </FadeIn>
      <dl className="mt-12 space-y-8">
        {pillars.map((item, i) => (
          <FadeIn key={item.title} delay={i * 0.06}>
            <div className="border-b border-[var(--color-border)] pb-8 last:border-0 last:pb-0">
              <dt className="text-lg font-semibold text-[var(--color-foreground)]">{item.title}</dt>
              <dd className="mt-2 text-[var(--color-muted)] leading-relaxed">{item.description}</dd>
            </div>
          </FadeIn>
        ))}
      </dl>
    </Section>
  );
}
