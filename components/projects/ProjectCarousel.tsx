"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    dragFree: true,
  });

  const items = projects.filter((project) => !project.featured);

  const [selected, setSelected] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <>
      <div className="mb-8 flex items-center justify-between">
        <div className="flex gap-2">
          {items.map((project, index) => (
            <button key={project.id} type="button" onClick={() => scrollTo(index)} aria-label={`${project.title} 보기`} aria-current={selected === index} className={`h-2 rounded-full transition-all duration-300 ${selected === index ? "w-10 bg-orange-400" : "w-2 bg-zinc-700 hover:bg-zinc-500"}`} />
          ))}
        </div>

        <div className="flex gap-3">
          <button type="button" onClick={scrollPrev} aria-label="이전 프로젝트" className="rounded-xl border border-white/10 p-3 transition hover:border-orange-400">
            <ChevronLeft size={18} />
          </button>

          <button type="button" onClick={scrollNext} aria-label="다음 프로젝트" className="rounded-xl border border-white/10 p-3 transition hover:border-orange-400">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex gap-6 sm:gap-8">
          {items.map((project) => (
            <div key={project.id} className="w-[85vw] shrink-0 sm:w-[420px]">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
