import Image from "next/image";
import { projects } from "@/data/projects";
import Button from "../common/Button";
import TroubleshootingList from "./TroubleshootingList";

export default function FeaturedProject() {
  const project = projects.find((item) => item.featured);

  if (!project) return null;

  return (
    // 다른 섹션과 같은 터미널 창 형식에, 주황 테두리와 제목 표시줄로 대표 프로젝트임을 구분
    <section id={`project-${project.ls.slug}`} aria-label={`대표 프로젝트: ${project.title}`} className="scroll-mt-20 mb-20 overflow-hidden rounded-2xl border border-orange-400/70 bg-[#0D1117] shadow-[0_30px_80px_rgba(0,0,0,.45)]">
      <div className="flex items-center justify-between border-b border-orange-400/40 bg-[#161B22] px-5 py-3">
        <div className="flex gap-2" aria-hidden="true">
          <div className="h-3 w-3 rounded-full bg-red-400" />
          <div className="h-3 w-3 rounded-full bg-yellow-400" />
          <div className="h-3 w-3 rounded-full bg-green-400" />
        </div>

        <p className="font-mono text-sm text-zinc-400">
          ~/projects/{project.ls.slug} <span className="text-zinc-600">—</span> <span className="font-semibold text-orange-400">featured</span>
        </p>

        <div className="w-10" />
      </div>

      <div className="grid lg:grid-cols-2">
        <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-12">
          <h3 className="text-4xl font-bold sm:text-5xl">{project.title}</h3>

          <p className="mt-3 font-mono text-sm text-zinc-500">
            {project.period} · {project.team}
          </p>

          <p className="mt-6 leading-7 text-zinc-300">{project.description}</p>

          <div className="mt-8">
            <p className="text-sm font-semibold text-orange-400">담당</p>
            <p className="mt-2 leading-7 text-zinc-300">{project.role}</p>
          </div>

          <ul className="mt-6 space-y-2 text-sm leading-6 text-zinc-400">
            {project.contributions.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-orange-400">▸</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {project.troubleshooting && <TroubleshootingList items={project.troubleshooting} className="mt-6" />}

          <p className="mt-6 font-mono text-sm leading-6 text-zinc-400">
            <span className="text-orange-400">stack</span>: {project.stack.join(" · ")}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button href={project.demo}>Live Demo</Button>

            {project.github && (
              <Button href={project.github} variant="outline">
                GitHub
              </Button>
            )}
          </div>
        </div>

        <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} 사이트 열기`} className="group flex min-h-64 items-center justify-center bg-[#0B0F14] p-8 sm:p-12">
          {project.logo && (
            <div className="w-full max-w-md rounded-2xl bg-zinc-100 px-8 py-12 transition-colors duration-200 group-hover:bg-white sm:px-12 sm:py-16">
              <Image src={project.logo} alt={`${project.title} 로고`} width={1111} height={225} className="h-auto w-full" preload />
            </div>
          )}
        </a>
      </div>
    </section>
  );
}
