import { ReactNode } from "react";

interface SectionProps {
  id: string;
  /** 섹션 이름. 터미널 주석(# About)으로 함께 보여줌 */
  title: string;
  /** 섹션 제목 자리에 들어갈 터미널 명령어 (예: "cat profile") */
  command: string;
  children: ReactNode;
}

export default function Section({ id, title, command, children }: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-16 py-24">
      <h2 id={`${id}-title`} className="mb-12 font-mono text-2xl font-bold break-all sm:text-3xl lg:text-4xl">
        <span className="text-green-400">sugon@portfolio</span>
        <span className="text-zinc-500">:~$ </span>
        <span className="text-white">{command}</span>
        <span className="ml-4 align-middle text-base font-normal text-zinc-500 sm:text-lg"># {title}</span>
      </h2>

      {children}
    </section>
  );
}
