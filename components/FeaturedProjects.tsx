import { FadeIn } from "@/components/FadeIn";
import { MobileEngineeringSection } from "@/components/MobileEngineeringSection";
import { Section } from "@/components/Section";
import { SafetyWhatFlowDiagram } from "@/components/SafetyWhatFlowDiagram";

export function FeaturedProjects() {
  return (
    <Section id="work" ariaLabel="Featured projects" className="py-20 sm:py-28">
      <FadeIn>
        <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
          Featured work
        </h2>
        <p className="mt-4 max-w-2xl text-xl font-medium tracking-tight text-[var(--color-foreground)] sm:text-2xl">
          Case studies focused on architecture, scale, and measurable impact.
        </p>
      </FadeIn>

      <article className="mt-16 rounded-2xl border border-[var(--color-highlight)]/35 bg-[var(--color-surface)] p-6 sm:p-10">
        <FadeIn>
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-[var(--color-highlight)]/15 px-3 py-1 font-mono text-xs font-medium uppercase tracking-wider text-[#93c5fd]">
              Flagship
            </span>
          </div>
          <h3 className="mt-4 text-2xl font-semibold tracking-tight text-[var(--color-foreground)] sm:text-3xl">
            SafetyWhat AI + IoT Platform
          </h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {["B2B", "IoT", "Real-time", "Microservices", "AI"].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface-elevated)] px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-[var(--color-muted)]"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-6 max-w-3xl space-y-4 text-[var(--color-muted)] leading-relaxed">
            <p>
              SafetyWhat is a B2B industrial safety and automation platform designed to integrate with
              existing CCTV and IoT infrastructure. It detects safety violations using AI-enabled video
              analysis and triggers real-time corrective actions through connected industrial systems.
            </p>
            <p>
              I led the frontend architecture and implemented end-to-end IoT integrations, enabling seamless
              communication between AI pipelines, backend services, and real-world industrial devices.
            </p>
          </div>
          <h4 className="mt-6 font-mono text-xs uppercase tracking-wider text-[var(--color-foreground)]">
            Architecture Snapshot
          </h4>
          <ul className="mt-3 grid grid-cols-2 gap-2 text-sm text-[var(--color-muted)]">
            <li>Frontend: React (SPA served via Flask)</li>
            <li>Backend: Flask (integration layer)</li>
            <li>AI Pipeline: NVIDIA DeepStream</li>
            <li>Streaming: MediaMTX</li>
            <li>Messaging: RabbitMQ</li>
            <li>Realtime/Cache: Redis</li>
            <li>IoT Integration: Modbus, MQTT, BLE</li>
            <li>Database: SQLite (Edge), PostgreSQL (scaled)</li>
          </ul>
          <SafetyWhatFlowDiagram caption="Illustrative system flow - not proprietary architecture" />
          <div className="mt-8 border-t border-[var(--color-muted)]/20" />
          <div className="mt-6 grid gap-8 sm:grid-cols-2">
            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-[var(--color-foreground)]">
                Responsibilities
              </h4>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[var(--color-muted)]">
                <li>Owned end-to-end frontend architecture and delivery of the React application, from initial design decisions to production deployment.</li>
                <li>Built an Android wearable application for real-time safety alerts, integrating with IoT systems to trigger vibration and notifications in unsafe conditions.</li>
                <li>Built real-time dashboards and workflows for safety-critical systems, handling live data streams, task flows, and system state transitions for safety-critical environments.</li>
                <li>Designed and implemented IoT integration using Python (device communication, triggers, control flows)</li>
                <li>Built low-latency real-time monitoring interfaces using WebRTC and MQTT streams</li>
                <li>Integrated frontend with IoT and AI-driven backend services.</li>
                <li>Collaborated with AI pipeline (DeepStream) to surface actionable insights in UI</li>
                <li>Optimized complex dashboard rendering, improving performance by 35%+</li>
                <li>Delivered scalable UI supporting Edge, On-Prem, and Cloud deployments</li>
              </ul>
            </div>
            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-[var(--color-foreground)]">
                Impact
              </h4>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[var(--color-muted)]">
                <li>Enabled real-time safety enforcement across industrial environments (factories, oil rigs)</li>
                <li>Reduced incident response latency by 25% through direct IoT-triggered actions</li>
                <li>Improved system responsiveness by 40% under high-frequency event streams</li>
                <li>Delivered a scalable platform supporting multiple deployment models (Edge, On-Prem, Cloud)</li>
                <li>Contributed to production-ready system used in safety-critical environments</li>
              </ul>
            </div>
          </div>
        </FadeIn>
      </article>

      <div className="mt-12 space-y-12">
        <FadeIn>
          <article className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-10">
            <span className="font-mono text-xs text-[var(--color-muted)]">
              Telco · Cloud infrastructure
            </span>
            <h3 className="mt-3 text-xl font-semibold tracking-tight text-[var(--color-foreground)] sm:text-2xl">
              Vodafone Global - Rapid infrastructure provisioning
            </h3>
            <div className="mt-4 max-w-3xl space-y-4 text-[var(--color-muted)] leading-relaxed">
              <p>
                Platform at Vodafone Global that provisions infrastructure in ~3 minutes through an automated
                backend powered by Java-based services and VMware vSphere APIs.
              </p>
              <div>
                <p>I led the frontend delivery of two distinct React applications:</p>
                <ul className="mt-2 list-none space-y-1.5 pl-0 text-sm">
                  <li className="flex gap-2">
                    <span className="text-[var(--color-foreground)]/80" aria-hidden>
                      •
                    </span>
                    <span>
                      Admin application for internal operators managing infrastructure workflows
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[var(--color-foreground)]/80" aria-hidden>
                      •
                    </span>
                    <span>
                      Customer application enabling self-service provisioning and visibility
                    </span>
                  </li>
                </ul>
              </div>
              <p>
                Both applications were designed to handle long-running infrastructure jobs, providing
                real-time feedback and clear state transitions while integrating with backend APIs.
              </p>
            </div>
            <p className="mt-2 text-xs text-[var(--color-muted)]">
              Focus: Frontend architecture and API integration (no backend ownership)
            </p>
            <figure
              className="mt-6 overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)]/40 p-4 sm:p-5"
              aria-label="Illustrative stack: React admin and customer apps to backend services and vSphere SDK"
            >
              <div className="grid gap-3 sm:grid-cols-2" role="img">
                <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-background)]/80 p-3">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-[#93c5fd]">
                    React - Admin
                  </p>
                  <p className="mt-2 text-xs text-[var(--color-muted)]">
                    Internal tooling, approvals, and operational control
                  </p>
                </div>
                <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-background)]/80 p-3">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-[#93c5fd]">
                    React - Customer
                  </p>
                  <p className="mt-2 text-xs text-[var(--color-muted)]">
                    Customer-facing provisioning and visibility
                  </p>
                </div>
              </div>
              <div className="mt-3 flex flex-col items-center gap-2 sm:flex-row sm:justify-center sm:gap-3">
                <span className="text-zinc-500" aria-hidden>
                  ↓
                </span>
                <div className="rounded-lg border border-emerald-700/40 bg-emerald-950/20 px-3 py-2 text-center sm:text-left">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-emerald-200/90">
                    Backend Services (Spring Boot · REST APIs)
                  </p>
                </div>
                <span className="text-zinc-500" aria-hidden>
                  ↓
                </span>
                <div className="rounded-lg border border-amber-700/35 bg-amber-950/20 px-3 py-2 text-center sm:text-left">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-amber-200/85">
                    vSphere Automation SDK (Java)
                  </p>
                </div>
              </div>
              <p className="mt-3 text-center font-mono text-[11px] text-[var(--color-muted)]">
                Target: ~3 minute end-to-end provision (illustrative)
              </p>
              <figcaption className="sr-only">
                Two React applications connect to backend services (Spring Boot, REST APIs), which drive
                VMware vSphere Automation SDK for Java to provision infrastructure quickly.
              </figcaption>
            </figure>
            <div className="mt-8 grid gap-8 sm:grid-cols-2">
              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-[var(--color-foreground)]">
                  Responsibilities
                </h4>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[var(--color-muted)]">
                <li>Built and owned two production-grade React applications (admin + customer)</li>
                <li>Designed UI flows for infrastructure provisioning and lifecycle management</li>
                <li>Integrated frontend with backend APIs powering automated provisioning workflows</li>
                <li>Handled complex async states for long-running jobs (~minutes) with clear user feedback using  <strong>Redux</strong>  for predictable state management</li>
                <li>Developed consistent, scalable UI components using <strong>Chakra UI</strong> and <strong>Bootstrap</strong>, ensuring usability across operator and customer-facing applications</li>
                <li>Ensured consistent API integration across multiple user-facing applications using Axios and GraphQL</li>
                </ul>
              </div>
              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-[var(--color-foreground)]">
                  Impact
                </h4>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[var(--color-muted)]">
                  <li>Enabled end-to-end infrastructure provisioning experience through intuitive UI workflows</li>
                  <li>Reduced operational friction by separating admin and customer experiences</li>
                  <li>Improved visibility into long-running provisioning jobs through real-time UI feedback</li>
                  <li>Contributed to a system capable of provisioning infrastructure in ~3 minutes</li>
                </ul>
              </div>
            </div>
          </article>
        </FadeIn>

        <MobileEngineeringSection />
      </div>
    </Section>
  );
}
