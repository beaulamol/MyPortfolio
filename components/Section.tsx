import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
};

export function Section({ id, children, className = "", ariaLabel }: SectionProps) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={`scroll-mt-24 px-4 sm:px-6 lg:px-8 ${className}`}
    >
      <div className="mx-auto max-w-3xl lg:max-w-4xl">{children}</div>
    </section>
  );
}
