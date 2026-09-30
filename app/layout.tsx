import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000";

const description = "9년 차 정보보안 경력을 바탕으로 안전하고 쓰기 편한 화면을 만드는 프론트엔드 개발자 황수곤의 포트폴리오";

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
