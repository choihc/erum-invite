"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

declare global {
  interface Window {
    Kakao: any;
  }
}

const ShareButtons = () => {
  const [isKakaoInitialized, setIsKakaoInitialized] = useState(false);
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareTitle = "이룸교회 중등부 오이코스 초청예배";

  useEffect(() => {
    const checkKakaoInitialized = () => {
      if (
        typeof window !== "undefined" &&
        window.Kakao &&
        window.Kakao.isInitialized()
      ) {
        setIsKakaoInitialized(true);
      }
    };

    // 초기 체크
    checkKakaoInitialized();

    // 주기적으로 체크
    const interval = setInterval(checkKakaoInitialized, 1000);

    return () => clearInterval(interval);
  }, []);

  const shareToInstagram = () => {
    // 인스타그램은 직접 공유가 불가능하므로 클립보드에 복사
    navigator.clipboard.writeText(shareUrl);
    alert("링크가 클립보드에 복사되었습니다. 인스타그램에 붙여넣기 해주세요.");
  };

  const shareToKakao = () => {
    if (
      typeof window !== "undefined" &&
      window.Kakao &&
      window.Kakao.Share &&
      isKakaoInitialized
    ) {
      window.Kakao.Share.sendDefault({
        objectType: "feed",
        content: {
          title: shareTitle,
          description:
            "이룸교회 중등부 오이코스 초청예배에 여러분을 초대합니다.",
          imageUrl: `${window.location.origin}/images/invite.jpeg`,
          link: {
            mobileWebUrl: shareUrl,
            webUrl: shareUrl,
          },
        },
        buttons: [
          {
            title: "자세히 보기",
            link: {
              mobileWebUrl: shareUrl,
              webUrl: shareUrl,
            },
          },
        ],
      });
    } else {
      alert("카카오톡 공유하기를 준비중입니다. 잠시 후 다시 시도해주세요.");
    }
  };

  const shareToSMS = () => {
    const message = `${shareTitle}\n${shareUrl}`;
    window.location.href = `sms:?body=${encodeURIComponent(message)}`;
  };

  return (
    <div className="flex flex-col items-center gap-4 py-8 bg-gray-50">
      <h2 className="text-gray-800">공유하기</h2>
      <div className="flex gap-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={shareToInstagram}
          className="p-3 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-full text-white"
        >
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={shareToKakao}
          className="p-3 bg-yellow-400 rounded-full text-white"
        >
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 3c-4.97 0-9 3.185-9 7.115 0 2.557 1.522 4.82 3.889 6.115-.111.503-.445 1.812-.512 2.102-.078.35.178.388.378.188.155-.155 1.515-1.47 2.155-2.078.645.09 1.31.139 1.99.139 4.97 0 9-3.186 9-7.115C21 6.186 16.97 3 12 3z" />
          </svg>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={shareToSMS}
          className="p-3 bg-green-500 rounded-full text-white"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        </motion.button>
      </div>
    </div>
  );
};

export default ShareButtons;
