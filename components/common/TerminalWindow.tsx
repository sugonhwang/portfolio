import { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

export default function TerminalWindow({ title, children }: Props) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0D1117] shadow-[0_30px_80px_rgba(0,0,0,.45)]">
      <div className="flex items-center justify-between border-b border-white/10 bg-[#161B22] px-5 py-3">
        <div className="flex gap-2">
          <div className="h-3 w-3 rounded-full bg-red-400" />
          <div className="h-3 w-3 rounded-full bg-yellow-400" />
          <div className="h-3 w-3 rounded-full bg-green-400" />
        </div>

        <span className="font-mono text-sm text-zinc-500">{title}</span>

        <div className="w-10" />
      </div>

      <div className="p-8">{children}</div>
    </div>
  );
}
