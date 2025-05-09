import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "이룸교회 중등부 오이코스 초청예배",
  description: "이룸교회 중등부 오이코스 초청예배에 초대합니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
