import Link from "next/link";
import { ReactNode } from "react";
import clsx from "clsx";

interface Props {
  children: ReactNode;
  href: string;
  variant?: "primary" | "outline";
}

export default function Button({ children, href, variant = "primary" }: Props) {
  const className = clsx("group relative inline-flex items-center justify-center overflow-hidden rounded-xl px-7 py-3 text-sm font-semibold transition-all duration-300", variant === "primary" ? "bg-orange-400 text-black hover:-translate-y-1 hover:bg-orange-300" : "border border-white/10 bg-white/5 text-white hover:-translate-y-1 hover:border-orange-400 hover:text-orange-400");

  const isExternal = /^https?:\/\//.test(href);
  const isAnchor = href.startsWith("#");
  // Resume.pdf 같은 정적 파일은 클라이언트 라우팅 대상이 아니므로 새 탭으로 연다
  const isFile = /\.[a-z0-9]+$/i.test(href);

  if (isExternal || isFile) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }

  if (isAnchor) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
