import { ShieldCheck, Users, Workflow, Zap } from "lucide-react";

const strengths = [
  {
    icon: ShieldCheck,
    title: "보안 관점의 개발",
    desc: "관리자 권한 체크, 비밀키 관리, 보안 헤더 적용, 취약점 공지에 따른 버전 업데이트처럼 '무너지지 않게 만드는 일'을 기본값으로 챙깁니다.",
  },
  {
    icon: Workflow,
    title: "체계적인 프로세스 감각",
    desc: "9년간 다진 기준 수립 · 문서화 습관으로 이슈 · PR 템플릿과 Git 컨벤션 같은 협업 체계를 먼저 세우고 흔들림 없이 운영합니다.",
  },
  {
    icon: Users,
    title: "주도적인 협업",
    desc: "Keytap 팀장으로서 일정과 역할을 조율하고, 기획 의도를 화면과 구조로 옮기며 디자이너 · 개발자와 소통합니다.",
  },
  {
    icon: Zap,
    title: "빠른 실행력",
    desc: "Next.js · Supabase처럼 처음 다루는 기술도 빠르게 익히고, 직접 부딪혀 배포까지 마친 결과물로 증명합니다.",
  },
];

export default function Strengths() {
  return (
    <div>
      <p className="mb-6 font-mono text-sm text-orange-400">$ whoami --strengths</p>

      {/* 넓은 화면에서는 오른쪽 컬럼이 좁아지므로 한 줄에 하나씩 쌓아 제목이 중간에서 끊기지 않게 함 */}
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
        {strengths.map(({ icon: Icon, title, desc }) => (
          <li key={title} className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-orange-400/40">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-400/10 text-orange-400">
              <Icon size={20} aria-hidden="true" />
            </span>

            <div>
              <h3 className="text-lg font-bold break-keep">{title}</h3>
              <p className="mt-2 text-sm leading-7 text-zinc-400 break-keep">{desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
