import FadeIn from "../common/FadeIn";
import Section from "../common/Section";

import ProfileCard from "./ProfileCard";
import Timeline from "./Timeline";

export default function About() {
  return (
    <Section id="about" title="About" subtitle="$ cat profile">
      <FadeIn>
        <div className="grid gap-12 lg:grid-cols-2">
          <ProfileCard />

          <Timeline />
        </div>
      </FadeIn>
    </Section>
  );
}
