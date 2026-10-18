import type { Troubleshooting } from "@/data/projects";

interface Props {
  items: Troubleshooting[];
  className?: string;
}

// 문제 → 해결 형식으로 트러블슈팅 목록을 보여줌
export default function TroubleshootingList({ items, className = "" }: Props) {
  return (
    <div className={`rounded-xl border border-white/10 bg-white/5 p-4 text-sm ${className}`}>
      <p className="font-mono text-xs font-semibold text-orange-400"># troubleshooting</p>

      <ul className="mt-3 space-y-4">
        {items.map(({ problem, solution }) => (
          <li key={problem}>
            <p className="font-semibold text-zinc-200 break-keep">{problem}</p>
            <p className="mt-1 leading-6 text-zinc-400 break-keep">
              <span className="text-orange-400">→ </span>
              {solution}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
