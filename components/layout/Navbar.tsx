"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Container from "./Container";

const menus = [
  { key: "1", id: "about" },
  { key: "2", id: "experience" },
  { key: "3", id: "projects" },
  { key: "4", id: "skills" },
  { key: "5", id: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  // 현재 화면에 보이는 섹션을 표시 (스크롤 위치 표시)
  useEffect(() => {
    const sections = menus.map(({ id }) => document.getElementById(id)).filter((el): el is HTMLElement => !!el);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // 숫자 키 1~5로 섹션 이동. 입력 중이거나 조합키를 누른 경우에는 가로채지 않음
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
      const target = e.target as HTMLElement | null;
      if (target?.closest("input, textarea, select, [contenteditable='true']")) return;

      const menu = menus.find(({ key }) => key === e.key);
      if (!menu) return;

      const section = document.getElementById(menu.id);
      if (!section) return;
      e.preventDefault();
      section.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
      history.replaceState(null, "", `#${menu.id}`);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0d1117]">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="font-mono text-sm font-semibold tracking-wide">
          <span className="text-orange-400">sugon@portfolio</span>
          :~$
        </Link>

        <nav aria-label="섹션 이동" className="hidden items-center gap-6 font-mono text-sm md:flex">
          {menus.map(({ key, id }) => {
            const isActive = active === id;
            return (
              <a key={id} href={`#${id}`} aria-current={isActive ? "location" : undefined} aria-keyshortcuts={key} className={`flex min-h-11 items-center gap-1.5 transition-colors ${isActive ? "text-orange-400" : "text-zinc-400 hover:text-white"}`}>
                <span className={isActive ? "text-orange-400/70" : "text-zinc-600"}>[{key}]</span>
                ~/{id}
              </a>
            );
          })}
        </nav>

        <button type="button" onClick={() => setOpen((prev) => !prev)} aria-label={open ? "메뉴 닫기" : "메뉴 열기"} aria-expanded={open} aria-controls="mobile-menu" className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 text-zinc-300 transition-colors hover:border-orange-400 hover:text-orange-400 md:hidden">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </Container>

      {open && (
        <nav id="mobile-menu" aria-label="섹션 이동" className="border-t border-white/10 md:hidden">
          <Container className="flex flex-col py-2">
            {menus.map(({ id }) => (
              <a key={id} href={`#${id}`} onClick={() => setOpen(false)} aria-current={active === id ? "location" : undefined} className={`flex min-h-11 items-center font-mono text-sm transition-colors ${active === id ? "text-orange-400" : "text-zinc-300 hover:text-orange-400"}`}>
                <span className="text-orange-400">$ </span>
                cd ~/{id}
              </a>
            ))}
          </Container>
        </nav>
      )}
    </header>
  );
}
