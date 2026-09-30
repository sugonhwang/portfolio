"use client";

import { useEffect, useState } from "react";
import Button from "../common/Button";
import { social } from "@/data/social";

const commands = ["Frontend Developer", "React / Next.js Developer", "Security-minded Frontend Developer"];

export default function Hero() {
  const [commandIndex, setCommandIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = commands[commandIndex];

    const timer = setTimeout(
      () => {
        if (!deleting) {
          setText(current.slice(0, text.length + 1));

          if (text.length + 1 === current.length) {
            setTimeout(() => setDeleting(true), 1800);
          }
        } else {
          setText(current.slice(0, text.length - 1));

          if (text.length === 0) {
            setDeleting(false);
            setCommandIndex((prev) => (prev + 1) % commands.length);
          }
        }
      },
      deleting ? 45 : 75,
    );

    return () => clearTimeout(timer);
  }, [text, deleting, commandIndex]);

  return (
    <section className="relative flex min-h-[calc(100vh-80px)] items-center overflow-hidden py-20">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-400/5 blur-[120px]" />
      </div>

      <div className="relative w-full">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Terminal */}
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0d1117] shadow-2xl">
            {/* Terminal Header */}
            <div className="flex items-center gap-2 border-b border-white/10 bg-[#161b22] px-5 py-4">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />

              <span className="ml-3 font-mono text-xs text-zinc-500">sugon@portfolio ~</span>
            </div>

            {/* Terminal Content */}
            <div className="min-h-[430px] p-6 font-mono text-sm sm:p-8 sm:text-base">
              {/* 서버 렌더 시점과 브라우저의 날짜/로케일이 달라도 경고가 나지 않도록 처리 */}
              <p className="text-zinc-500" suppressHydrationWarning>
                Last login: {new Date().toLocaleDateString("en-US")}
              </p>

              <div className="mt-8">
                <p>
                  <span className="text-green-400">sugon@portfolio</span>
                  <span className="text-zinc-500">:~$</span> whoami
                </p>

                <h1 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-6xl">황수곤</h1>
              </div>

              <div className="mt-8">
                <p>
                  <span className="text-green-400">sugon@portfolio</span>
                  <span className="text-zinc-500">:~$</span> role
                </p>

                <div className="mt-4 flex min-h-8 items-center">
                  <span className="text-orange-400">&gt;</span>

                  <span className="ml-3 text-lg text-zinc-200 sm:text-xl">{text}</span>

                  <span className="ml-1 inline-block h-5 w-2 animate-pulse bg-orange-400" />
                </div>
              </div>

              <div className="mt-8 space-y-2 text-zinc-400">
                <p>
                  <span className="text-orange-400">stack</span>: React · Next.js · TypeScript
                </p>

                <p>
                  <span className="text-orange-400">focus</span>: User Experience · Web Development
                </p>

                <p>
                  <span className="text-orange-400">background</span>: Information Security
                </p>
              </div>

              <div className="mt-8">
                <span className="text-green-400">sugon@portfolio</span>
                <span className="text-zinc-500">:~$</span> <span className="animate-pulse">_</span>
              </div>
            </div>
          </div>

          {/* Introduction */}
          <div className="lg:pl-6">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-orange-400">Hello, I&apos;m Sugon</p>

            {/* 두 줄 고정: 줄마다 block + keep-all로 단어 중간 줄바꿈 방지, 오른쪽 좁은 컬럼(lg)에서는 폰트 크기를 한 단계 낮춤 */}
            <h2 className="text-[min(1.75rem,6.8vw)] font-black leading-tight break-keep sm:text-5xl lg:text-[1.75rem] xl:text-4xl">
              <span className="block">사용자에게 필요한 경험을</span>
              <span className="block text-zinc-500">코드로 만들어갑니다.</span>
            </h2>

            <p className="mt-7 max-w-lg leading-8 text-zinc-400">9년간 정보보안 현장에서 서비스가 어떻게 무너지고 지켜지는지 봐왔습니다. 그 경험을 바탕으로 안전하고, 쓰기 편한 화면을 만드는 프론트엔드 개발자입니다.</p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Button href="#projects">View Projects</Button>

              <Button href={social.resume} variant="outline">
                Resume
              </Button>
            </div>

            {/* Tech badges */}
            <div className="mt-12 flex flex-wrap gap-2">
              {["React", "Next.js", "TypeScript", "Tailwind CSS", "Supabase"].map((tech) => (
                <span key={tech} className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-zinc-400 transition hover:border-orange-400/40 hover:text-orange-400">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex justify-center">
          <a href="#about" className="group flex flex-col items-center gap-3 text-xs text-zinc-600 transition hover:text-zinc-300">
            <span>SCROLL TO EXPLORE</span>

            <span className="h-10 w-px bg-zinc-700 transition group-hover:bg-orange-400" />
          </a>
        </div>
      </div>
    </section>
  );
}
