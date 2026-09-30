import { ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export default function Section({ id, title, subtitle, children }: SectionProps) {
  return (
    <section id={id} className="py-28">
      <div className="mb-14">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">{title}</p>

        {subtitle && <h2 className="mt-3 text-4xl font-bold lg:text-5xl">{subtitle}</h2>}
      </div>

      {children}
    </section>
  );
}
