import { experiences } from "@/data/experience";
import FadeIn from "../common/FadeIn";
import Section from "../common/Section";

export default function Experience() {
  return (
    <Section id="experience" title="Experience" subtitle="$ git log --career">
      <FadeIn>
        <ol className="space-y-6">
          {experiences.map((item) => (
            <li key={item.company} className="grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-orange-400/40 sm:p-8 lg:grid-cols-[220px_1fr] lg:gap-10">
              <div>
                <p className="font-mono text-sm text-orange-400">{item.period}</p>
                <h3 className="mt-2 text-2xl font-bold">{item.company}</h3>
                <p className="mt-1 text-sm text-zinc-500">{item.role}</p>
              </div>

              <div>
                <p className="leading-7 text-zinc-300">{item.description}</p>

                <ul className="mt-4 grid gap-2 text-sm leading-6 text-zinc-400 md:grid-cols-2">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-2">
                      <span className="text-orange-400">▸</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </FadeIn>
    </Section>
  );
}
