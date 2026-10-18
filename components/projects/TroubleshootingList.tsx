import type { Troubleshooting } from "@/data/projects";

interface Props {
  items: Troubleshooting[];
  /** 커밋 링크를 만들 GitHub 저장소 주소 */
  repoUrl?: string;
  className?: string;
}

// 문제 → 해결 형식으로 트러블슈팅을 보여주고, 해결 커밋이 있으면 git show 형태로 연결
export default function TroubleshootingList({ items, repoUrl, className = "" }: Props) {
  return (
    <div className={`rounded-xl border border-white/10 bg-white/5 p-4 text-sm ${className}`}>
      <p className="font-mono text-xs font-semibold text-orange-400"># troubleshooting</p>

      <ul className="mt-3 space-y-4">
        {items.map(({ problem, solution, commit }) => (
          <li key={problem}>
            <p className="font-semibold text-zinc-200 break-keep">{problem}</p>
            <p className="mt-1 leading-6 text-zinc-400 break-keep">
              <span className="text-orange-400">→ </span>
              {solution}
            </p>
            {commit && repoUrl && (
              <a href={`${repoUrl}/commit/${commit}`} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center gap-2 font-mono text-xs text-zinc-500 transition-colors hover:text-orange-400">
                <span className="text-green-400">$</span> git show <span className="text-yellow-400">{commit}</span>
                <span aria-hidden="true">↗</span>
                <span className="sr-only">(GitHub에서 커밋 보기, 새 탭)</span>
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
