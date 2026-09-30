import FadeIn from "../common/FadeIn";
import Section from "../common/Section";
import TerminalWindow from "../common/TerminalWindow";
import SkillBadge from "./SkillBadge";

import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <Section id="skills" title="Skills" subtitle="$ cat package.json">
      <FadeIn>
        <TerminalWindow title="package.json">
          <pre className="overflow-x-auto rounded-xl border border-white/10 bg-[#161B22] p-6 text-sm leading-7 text-zinc-300">
            {JSON.stringify(skills, null, 2)}
          </pre>

          <div className="mt-10 space-y-10">
            <div>
              <h3 className="mb-4 text-xl font-bold">Frontend</h3>

              <div className="flex flex-wrap gap-3">
                {skills.frontend.map((skill) => (
                  <SkillBadge key={skill} name={skill} />
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-bold">Backend</h3>

              <div className="flex flex-wrap gap-3">
                {skills.backend.map((skill) => (
                  <SkillBadge key={skill} name={skill} />
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-bold">Tools</h3>

              <div className="flex flex-wrap gap-3">
                {skills.tools.map((skill) => (
                  <SkillBadge key={skill} name={skill} />
                ))}
              </div>
            </div>
          </div>
        </TerminalWindow>
      </FadeIn>
    </Section>
  );
}
