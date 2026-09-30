export interface Experience {
  period: string;
  company: string;
  role: string;
  description: string;
  highlights: string[];
}

export const experiences: Experience[] = [
  {
    period: "2023.07 — 2025.02",
    company: "에이모",
    role: "정보보안 담당자 · Staff",
    description: "정보보안 업무와 인증 심사 대응, 사내 IT 자산 및 보안솔루션 운영을 담당했습니다.",
    highlights: ["ISO 27001 인증 심사 대응 및 부적합 사항 개선", "ZTNA, DLP, 방화벽, 백신 등 보안솔루션 도입 및 운영", "사내 H/W 및 SaaS 자산 관리", "개발서버 OS 업데이트 및 네트워크 문제 해결"],
  },
  {
    period: "2022.11 — 2023.02",
    company: "모티브인텔리전스",
    role: "정보보안 담당자 · 사원",
    description: "회계감사 대응을 위한 내부통제 체계를 구축하고 서비스 보안 프로세스를 정비했습니다.",
    highlights: ["내부 업무 프로세스 및 승인 체계 수립", "서비스 계정 및 권한 관리 프로세스 구축", "서비스 개발·배포·수정에 대한 형상관리 체계 수립", "서비스 보안성 검토 및 DB 접근 권한 분리"],
  },
  {
    period: "2019.02 — 2022.09",
    company: "컬리",
    role: "정보보안 담당자 · Staff",
    description: "사내 보안체계 운영과 ISMS 인증 심사 대응, 임직원 보안 인식 제고 업무를 담당했습니다.",
    highlights: ["임직원 PC 취약점 점검 체계 운영", "분기별 취약점 점검 85% 이상 완료율 3년 연속 달성", "Shell 기반 macOS 취약점 점검 스크립트 자체 개발", "ISMS 인증 심사 대응 및 지적사항 개선", "NAC, DLP, 백신, 방화벽, SSL VPN 등 보안솔루션 운영"],
  },
  {
    period: "2017.05 — 2019.02",
    company: "씨큐윈",
    role: "엔지니어 · 사원",
    description: "보안솔루션 구축과 기술지원 업무를 수행하며 다양한 고객 환경에서 네트워크 및 보안 시스템을 경험했습니다.",
    highlights: ["보안솔루션 구축 및 기술 지원", "NAC 기반 네트워크 접근제어 정책 지원", "고객사별 운영 정책 및 기능 지원", "보안솔루션 도입 제안 및 발표"],
  },
  {
    period: "2015.09 — 2017.02",
    company: "한국통신인터넷기술",
    role: "기술지원 · 사원",
    description: "보안관제와 취약점 분석을 시작으로 정보보안 분야의 실무 경험을 쌓았습니다.",
    highlights: ["보안 이벤트 탐지 및 차단", "최신 보안 동향 및 취약점 분석", "SIEM, FW, IPS, WebShell, APT 솔루션 운영", "보안관제 및 침해 대응"],
  },
];
