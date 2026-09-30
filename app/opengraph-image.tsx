import { ImageResponse } from "next/og";

export const alt = "Sugon Hwang | Frontend Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// 한글 폰트를 따로 불러오지 않도록 OG 이미지는 영문으로 구성
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "80px", background: "#0d1117", color: "#f8fafc", fontFamily: "monospace" }}>
        <div style={{ display: "flex", fontSize: 32, color: "#fb923c" }}>sugon@portfolio:~$ whoami</div>
        <div style={{ display: "flex", marginTop: 32, fontSize: 96, fontWeight: 800 }}>Sugon Hwang</div>
        <div style={{ display: "flex", marginTop: 16, fontSize: 44, color: "#a1a1aa" }}>Frontend Developer · 9y in Information Security</div>
        <div style={{ display: "flex", marginTop: 48, fontSize: 30, color: "#71717a" }}>React · Next.js · TypeScript · Tailwind CSS · Supabase</div>
      </div>
    ),
    size,
  );
}
