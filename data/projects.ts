export interface Project {
  id: number;
  title: string;
  summary: string;
  description: string;
  period: string;
  team: string;
  stack: string[];
  role: string;
  contributions: string[];
  troubleshooting?: string;
  github: string;
  demo: string;
  thumbnail?: string;
  preview?: string;
  logo?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Keytap",
    summary: "커뮤니티 기반 타건 콘텐츠 플랫폼",
    description: "구매자는 가격이 아닌 '소리'와 '느낌'으로 키보드를 고릅니다. 타건음·타건감 데이터로 취향에 맞는 키보드를 찾고, 브랜드 공식몰로 연결하는 경험 중심의 키보드 발견 플랫폼입니다. HOLATAJA에서 출발해 기획부터 다시 설계했습니다.",
    period: "2026.02 ~ 진행 중",
    team: "3인 팀 · 팀장 / 기획 리드",
    stack: ["Next.js", "TypeScript", "Supabase", "TanStack Query", "Zustand", "MUI"],
    role: "팀장 · 기획 리드 · 프론트엔드 (타건 사운드 재생 시스템, Supabase API 연동, 관리자 페이지)",
    contributions: [
      "Supabase 브라우저·서버·Admin 클라이언트 분리 및 DB 자동 생성 타입 적용",
      "/admin 접근 시 로그인·관리자 권한 체크로 관리자 영역 보호",
      "관리자 대시보드(통계 카드·차트·인기 제품)와 상품·스위치·브랜드·유저 관리 페이지 구현",
      "스위치별 타건음 선택·재생과 메인 사운드 ON/OFF 토글 구현",
      "찜하기 실시간 동기화 및 위시리스트 비교 모달 실데이터 연동",
    ],
    troubleshooting: "스위치 수정 화면에서 기존에 등록된 사운드가 보이지 않던 문제와, 가격 데이터가 없을 때 상품 카드에 0원이 표시되던 문제를 수정했습니다.",
    github: "https://github.com/KEY-TAP/KEYTAP",
    demo: "https://keytap-mu.vercel.app/",
    logo: "/images/projects/keytap-logo.png",
    featured: true,
  },

  {
    id: 2,
    title: "HOLATAJA",
    summary: "온라인 키보드 타건샵",
    description: "타건음과 스위치 특징을 온라인에서 비교·체험할 수 있는 키보드 쇼핑몰입니다. 멋쟁이사자처럼 프론트엔드 부트캠프 파이널 프로젝트로, Keytap의 출발점이 되었습니다.",
    period: "2025.07 ~ 2025.08",
    team: "4인 팀 프로젝트",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Zustand", "NextAuth"],
    role: "장바구니 · 결제 · 회원가입 흐름과 공통 UI 컴포넌트",
    contributions: [
      "장바구니 조회·수량 조절·삭제(확인 모달) 기능 구현",
      "결제 페이지와 배송지 수정, 반응형 레이아웃 구현",
      "회원가입 폼 주소 검색(다음 우편번호) 연동, 약관 검증, 중복 계정 처리",
      "모달·라디오·체크박스·수량 버튼·사운드 토글 등 공통 컴포넌트 구현",
      "Next.js 보안 취약점 공지에 따라 버전 업데이트(15.3.5 → 15.3.8)",
    ],
    troubleshooting: "주소 API를 사용하면 회원가입이 실패하던 문제를, 폼 데이터에 우편번호 필드가 빠져 있던 원인을 찾아 해결했습니다.",
    github: "https://github.com/sugonhwang/Final-15-HOLATAJA",
    demo: "https://final-15-holataja.vercel.app/products",
    thumbnail: "/images/projects/holataja.png",
    preview: "/images/projects/holataja.gif",
  },

  {
    id: 3,
    title: "Focus Time",
    summary: "타이머 · 스톱워치 · 투두리스트 통합 서비스",
    description: "디지털 디톡스를 위해 타이머, 스톱워치, 투두리스트를 하나로 묶고, 집중 기록을 주간·월간·연간 그래프로 보여주는 서비스입니다.",
    period: "2025.09.22 ~ 2025.09.28",
    team: "4인 팀 프로젝트",
    stack: ["HTML", "CSS", "JavaScript"],
    role: "투두리스트 기능 및 협업 환경 세팅",
    contributions: ["투두리스트 등록·목록 화면 구현 및 localStorage 저장", "Date 메서드를 활용한 날짜 표기", "이슈·PR 템플릿 작성 및 README 정리"],
    github: "https://github.com/team-focus-time/focus-time",
    demo: "https://js-focustime.netlify.app/",
    thumbnail: "/images/projects/focus-time.png",
    preview: "/images/projects/focus-time.gif",
  },
];
