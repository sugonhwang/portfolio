import Image from "next/image";
import { projects } from "@/data/projects";
import Button from "../common/Button";

export default function FeaturedProject() {
  const project = projects.find((item) => item.featured);

  if (!project) return null;

  return (
    <section className="mb-20 overflow-hidden rounded-3xl border border-orange-400/20 bg-gradient-to-br from-[#161B22] to-[#0D1117]">
      <div className="grid lg:grid-cols-2">
        <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-12">
          <span className="mb-4 inline-flex w-fit rounded-full bg-orange-400 px-3 py-1 text-xs font-bold text-black">FEATURED PROJECT</span>

          <h3 className="text-4xl font-black sm:text-5xl">{project.title}</h3>

          <p className="mt-3 font-mono text-sm text-zinc-500">
            {project.period} · {project.team}
          </p>

          <p className="mt-6 leading-8 text-zinc-300">{project.description}</p>

          <div className="mt-8">
            <p className="text-sm font-semibold text-orange-400">담당</p>
            <p className="mt-2 leading-7 text-zinc-300">{project.role}</p>
          </div>

          <ul className="mt-6 space-y-2 text-sm leading-7 text-zinc-400">
            {project.contributions.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-orange-400">▸</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {project.troubleshooting && (
            <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4 text-sm leading-7 text-zinc-400">
              <span className="font-semibold text-orange-400">Troubleshooting · </span>
              {project.troubleshooting}
            </div>
          )}

          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span key={tech} className="rounded-lg border border-white/10 px-3 py-1 text-sm text-zinc-300">
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button href={project.demo}>Live Demo</Button>

            <Button href={project.github} variant="outline">
              GitHub
            </Button>
          </div>
        </div>

        <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} 사이트 열기`} className="group flex min-h-64 items-center justify-center bg-[#0B0F14] p-8 sm:p-12">
          {project.logo && (
            <div className="w-full max-w-md rounded-2xl bg-zinc-100 px-8 py-12 shadow-[0_20px_60px_rgba(251,146,60,.12)] transition duration-300 group-hover:-translate-y-1 sm:px-12 sm:py-16">
              <Image src={project.logo} alt={`${project.title} 로고`} width={1111} height={225} className="h-auto w-full" preload />
            </div>
          )}
        </a>
      </div>
    </section>
  );
}
