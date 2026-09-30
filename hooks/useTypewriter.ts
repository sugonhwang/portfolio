"use client";

import { useEffect, useState } from "react";

export function useTypewriter(lines: string[], speed = 35, lineDelay = 300) {
  const [displayed, setDisplayed] = useState<string[]>([]);

  useEffect(() => {
    let lineIndex = 0;
    let charIndex = 0;

    const output: string[] = [];

    function type() {
      if (lineIndex >= lines.length) return;

      const line = lines[lineIndex];

      output[lineIndex] = line.slice(0, charIndex);

      setDisplayed([...output]);

      charIndex++;

      if (charIndex <= line.length) {
        setTimeout(type, speed);
      } else {
        lineIndex++;
        charIndex = 0;
        setTimeout(type, lineDelay);
      }
    }

    type();
  }, [lines, speed, lineDelay]);

  return displayed;
}
