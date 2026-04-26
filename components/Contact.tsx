import { FadeIn } from "@/components/FadeIn";
import { Section } from "@/components/Section";
import { SITE } from "@/lib/site";

export function Contact() {
  return (
    <Section id="contact" ariaLabel="Contact" className="py-20 pb-28 sm:py-28 sm:pb-36">
      <FadeIn>
        <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
          Contact
        </h2>
        <p className="mt-4 text-2xl font-medium tracking-tight text-[var(--color-foreground)] sm:text-3xl">
          Open to Senior Frontend / Mobile roles
        </p>
        <p className="mt-4 max-w-xl text-[var(--color-muted)] leading-relaxed">
          If you are hiring for leadership or senior IC positions across web, mobile, or real-time
          product surfaces, I would like to hear from you.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
          <a
            href={`mailto:${SITE.email}`}
            className="inline-flex w-fit items-center rounded-full border border-[var(--color-border)] px-5 py-2.5 text-sm font-medium text-[var(--color-foreground)] transition-colors hover:border-[var(--color-muted)]"
          >
            {SITE.email}
          </a>
          <a
            href={SITE.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center text-sm font-medium text-[#93c5fd] transition-opacity hover:opacity-80"
          >
            LinkedIn →
          </a>
        </div>
      </FadeIn>
    </Section>
  );
}
