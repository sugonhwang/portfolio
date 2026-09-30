"use client";

import TerminalWindow from "../common/TerminalWindow";
import { useTypewriter } from "@/hooks/useTypewriter";

const lines = ["Last login: Today", "", "sugon@portfolio:~$ whoami", "", "황수곤", "", "Frontend Developer", "", "sugon@portfolio:~$ cat intro.md", "", "정보보안에서", "프론트엔드 개발자로."];

export default function Terminal() {
  const typed = useTypewriter(lines);

  return (
    <TerminalWindow title="portfolio.tsx">
      <div className="space-y-2 font-mono text-[15px] leading-8">
        {typed.map((line, index) => (
          <p key={index}>{line || "\u00A0"}</p>
        ))}

        <span className="animate-pulse text-orange-400">▋</span>
      </div>
    </TerminalWindow>
  );
}
