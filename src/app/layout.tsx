import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "이룸교회 중등부 오이코스 초청예배",
  description: "이룸교회 중등부 오이코스 초청예배에 여러분을 초대합니다.",
  openGraph: {
    title: "이룸교회 중등부 오이코스 초청예배",
    description: "이룸교회 중등부 오이코스 초청예배에 여러분을 초대합니다.",
    images: [
      {
        url: "/images/invite.jpeg",
        width: 1200,
        height: 630,
        alt: "이룸교회 중등부 오이코스 초청예배",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <Script
          src="https://developers.kakao.com/sdk/js/kakao.js"
          strategy="afterInteractive"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
