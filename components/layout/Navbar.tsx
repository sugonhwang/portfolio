"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Container from "./Container";

const menus = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0d1117]/80 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="font-mono text-sm font-semibold tracking-wide">
          <span className="text-orange-400">sugon@portfolio</span>
          :~$
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {menus.map((menu) => (
            <a key={menu.name} href={menu.href} className="text-sm text-zinc-400 transition hover:text-orange-400">
              {menu.name}
            </a>
          ))}
        </nav>

        <button type="button" onClick={() => setOpen((prev) => !prev)} aria-label={open ? "메뉴 닫기" : "메뉴 열기"} aria-expanded={open} aria-controls="mobile-menu" className="rounded-lg border border-white/10 p-2 text-zinc-300 transition hover:border-orange-400 hover:text-orange-400 md:hidden">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </Container>

      {open && (
        <nav id="mobile-menu" className="border-t border-white/10 md:hidden">
          <Container className="flex flex-col py-2">
            {menus.map((menu) => (
              <a key={menu.name} href={menu.href} onClick={() => setOpen(false)} className="py-3 font-mono text-sm text-zinc-300 transition hover:text-orange-400">
                <span className="text-orange-400">$ </span>
                cd {menu.name.toLowerCase()}
              </a>
            ))}
          </Container>
        </nav>
      )}
    </header>
  );
}
