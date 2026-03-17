import type { ReactNode } from "react";

type SectionShellProps = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
};

export function SectionShell({ id, eyebrow, title, description, children }: SectionShellProps) {
  return (
    <section id={id} className="section-shell">
      <div className="mb-10 max-w-3xl space-y-4 md:mb-14">
        <p className="font-[var(--font-inter)] text-sm uppercase tracking-[0.28em] text-gold">{eyebrow}</p>
        <h2 className="section-title">{title}</h2>
        {description ? <p className="section-copy">{description}</p> : null}
      </div>
      {children}
    </section>
  );
}
