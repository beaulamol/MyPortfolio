import { FadeIn } from "@/components/FadeIn";
import { Section } from "@/components/Section";

const groups = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Zustand", "Redux"],
  },
  {
    title: "Mobile",
    items: ["React Native", "Kotlin", "Flutter"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Python (Flask/Django)"],
  },
  {
    title: "DevOps",
    items: ["Docker", "CI/CD"],
  },
  {
    title: "Testing",
    items: ["Jest", "Cypress"],
  },
  {
    title: "AI",
    items: ["Gemma 4","Claude", "OpenAI", "Google Gemini","Cursor"],
  },
  {
    title: "Devices & Hardware",
    items: [
      "Raspberry Pi",
      "Modbus RTU/TCP Relay (8/16/32 Channel)",
  
    ]
  },
  {
    title: "Communication Protocols",
    items: [
      "MQTT",
      "WebRTC",
      "Modbus RTU",
      "Modbus TCP",
      "BLE (Bluetooth Low Energy)"
    ]
  },
  {
    title: "Industrial Interfaces",
    items: [
      "RS485 Communication",
      "USB to RS485 Converters",
      "Ethernet (PoE) to RS485 Converters"
    ]
  },
] as const;

export function Skills() {
  return (
    <Section id="skills" ariaLabel="Skills" className="py-20 sm:py-28">
      <FadeIn>
        <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
          Skills
        </h2>
        <p className="mt-4 max-w-xl text-xl font-medium tracking-tight text-[var(--color-foreground)] sm:text-2xl">
          Depth across the stack, with a frontend-first lens.
        </p>
      </FadeIn>
      <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((g, i) => (
          <FadeIn key={g.title} delay={i * 0.05}>
            <li className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
              <h3 className="font-mono text-xs uppercase tracking-wider text-[var(--color-muted)]">
                {g.title}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-[var(--color-border)] bg-[var(--color-surface-elevated)] px-2.5 py-1 text-sm text-[var(--color-foreground)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          </FadeIn>
        ))}
      </ul>
    </Section>
  );
}
