import FadeIn from "../common/FadeIn";
import Section from "../common/Section";
import TerminalWindow from "../common/TerminalWindow";

import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <Section id="skills" title="Skills" command="cat package.json">
      <FadeIn>
        <TerminalWindow title="package.json">
          <pre className="overflow-x-auto font-mono text-sm leading-7 text-zinc-300 sm:text-base">{JSON.stringify(skills, null, 2)}</pre>
        </TerminalWindow>
      </FadeIn>
    </Section>
  );
}
