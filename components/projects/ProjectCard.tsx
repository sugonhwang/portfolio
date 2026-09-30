"use client";

import Image from "next/image";
import { useState } from "react";
import type { Project } from "@/data/projects";
import Button from "../common/Button";

type Props = Project;

export default function ProjectCard({ title, summary, description, period, team, stack, role, contributions, troubleshooting, github, demo, thumbnail, preview }: Props) {
  const [hover, setHover] = useState(false);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-2 hover:border-orange-400/40 hover:shadow-[0_20px_60px_rgba(251,146,60,.12)]">
      {/* Project Image: GIF는 hover 시점에만 불러와 초기 로딩을 가볍게 유지 */}
      <div className="relative aspect-video overflow-hidden border-b border-white/10 bg-zinc-900" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        {thumbnail && <Image src={thumbnail} alt={`${title} 화면`} fill sizes="(max-width: 640px) 85vw, 420px" className={`object-cover transition-all duration-500 ${hover && preview ? "scale-105 opacity-0" : "scale-100 opacity-100"}`} />}

        {preview && hover && <Image src={preview} alt={`${title} 동작 미리보기`} fill unoptimized sizes="420px" className="scale-105 object-cover" />}
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <p className="font-mono text-xs text-zinc-500">
          {period} · {team}
        </p>

        <h3 className="mt-3 text-2xl font-bold sm:text-3xl">{title}</h3>

        <p className="mt-1 text-sm text-orange-400">{summary}</p>

        <p className="mt-4 leading-7 text-zinc-400">{description}</p>

        <p className="mt-5 text-sm leading-6 text-zinc-300">
          <span className="font-semibold text-orange-400">담당 · </span>
          {role}
        </p>

        <ul className="mt-3 space-y-1.5 text-sm leading-6 text-zinc-400">
          {contributions.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="text-orange-400">▸</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {troubleshooting && (
          <p className="mt-4 rounded-xl border border-white/10 bg-white/5 p-3 text-sm leading-6 text-zinc-400">
            <span className="font-semibold text-orange-400">Troubleshooting · </span>
            {troubleshooting}
          </p>
        )}

        <div className="mt-6 flex flex-wrap gap-2">
          {stack.map((tech) => (
            <span key={tech} className="rounded-lg border border-white/10 px-3 py-1 text-sm text-zinc-300">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto flex gap-3 pt-8">
          <Button href={github}>GitHub</Button>

          <Button href={demo} variant="outline">
            Live Demo
          </Button>
        </div>
      </div>
    </article>
  );
}
