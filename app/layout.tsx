import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000";

const description = "9년간 보안 담당자로 서비스를 지켜온 경험으로, 권한·입력·예외 상황까지 챙기는 프론트엔드 개발자 황수곤의 포트폴리오";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "황수곤 | Frontend Developer",
  description,
  keywords: ["Frontend", "Next.js", "React", "TypeScript", "Portfolio", "황수곤"],
  openGraph: {
    title: "황수곤 | Frontend Developer",
    description,
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
