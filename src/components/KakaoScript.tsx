"use client";

import Script from "next/script";

export default function KakaoScript() {
  const handleKakaoLoad = () => {
    if (typeof window !== "undefined" && window.Kakao) {
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_APP_KEY);
        console.log("Kakao SDK initialized");
      }
    }
  };

  return (
    <Script
      src="https://t1.kakaocdn.net/kakao_js_sdk/2.6.0/kakao.min.js"
      strategy="afterInteractive"
      onLoad={handleKakaoLoad}
    />
  );
}
