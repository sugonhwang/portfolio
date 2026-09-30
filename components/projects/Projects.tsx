import FadeIn from "../common/FadeIn";
import Section from "../common/Section";

import FeaturedProject from "./FeaturedProject";
import ProjectCarousel from "./ProjectCarousel";

export default function Projects() {
  return (
    <Section id="projects" title="Projects" subtitle="Featured Work">
      <FadeIn>
        <FeaturedProject />

        <div className="mb-8">
          <h3 className="text-2xl font-bold sm:text-3xl">Previous Projects</h3>

          <p className="mt-3 text-zinc-400">Keytap 이전에 진행했던 프로젝트입니다.</p>
        </div>

        <ProjectCarousel />
      </FadeIn>
    </Section>
  );
}
