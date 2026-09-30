const timeline = [
  {
    year: "2015",
    title: "Security Monitoring",
    desc: "보안관제와 취약점 분석으로 정보보안 커리어 시작",
  },
  {
    year: "2017",
    title: "Security Engineer",
    desc: "NAC 등 보안솔루션 구축 및 고객사 기술 지원",
  },
  {
    year: "2019",
    title: "Security Operations",
    desc: "컬리에서 사내 보안체계 운영, ISMS 인증 심사 대응, macOS 점검 스크립트 개발",
  },
  {
    year: "2023",
    title: "Security & IT Management",
    desc: "ISO 27001 인증 대응, ZTNA·DLP 도입, IT 자산 관리",
  },
  {
    year: "2025",
    title: "Frontend Development",
    desc: "멋쟁이사자처럼 프론트엔드 부트캠프 13기 · HOLATAJA, Focus Time 팀 프로젝트",
  },
  {
    year: "2026",
    title: "Keytap",
    desc: "팀장 · 기획 리드로 타건 콘텐츠 플랫폼 기획 및 개발",
  },
];

export default function Timeline() {
  return (
    <div className="relative ml-4">
      {/* Timeline Line */}
      <div className="absolute left-2 top-0 h-full w-px bg-white/10" />

      <div className="space-y-10">
        {timeline.map((item) => (
          <div key={`${item.year}-${item.title}`} className="group relative pl-10">
            {/* Timeline Dot */}
            <div
              className="
                absolute
                left-0
                top-2
                h-4
                w-4
                rounded-full
                border-2
                border-[#0d1117]
                bg-orange-400
                transition-all
                duration-300
                group-hover:scale-125
                group-hover:shadow-[0_0_15px_rgba(251,146,60,.6)]
              "
            />

            {/* Year */}
            <p className="font-mono text-sm text-orange-400">{item.year}</p>

            {/* Title */}
            <h3 className="mt-2 text-xl font-bold transition-colors duration-300 group-hover:text-orange-400">{item.title}</h3>

            {/* Description */}
            <p className="mt-2 leading-7 text-zinc-400">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
