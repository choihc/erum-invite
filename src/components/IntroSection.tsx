"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Lottie from "lottie-react";
import { useRef } from "react";
import animationData from "../../public/lotti/Animation - 1746754003585.json";

const IntroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.2], [1, 1, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.15, 0.3, 0.35], [0, 1, 0]);
  const opacity3 = useTransform(scrollYProgress, [0.3, 0.45, 0.5], [0, 1, 0]);
  const opacity4 = useTransform(scrollYProgress, [0.45, 0.6, 0.65], [0, 1, 0]);
  const opacity5 = useTransform(scrollYProgress, [0.6, 0.75, 0.8], [0, 1, 0]);
  const opacity6 = useTransform(scrollYProgress, [0.75, 0.9, 0.95], [0, 1, 0]);

  const y1 = useTransform(scrollYProgress, [0, 0.15, 0.2], [0, 0, -30]);
  const y2 = useTransform(scrollYProgress, [0.15, 0.3, 0.35], [30, 0, -30]);
  const y3 = useTransform(scrollYProgress, [0.3, 0.45, 0.5], [30, 0, -30]);
  const y4 = useTransform(scrollYProgress, [0.45, 0.6, 0.65], [30, 0, -30]);
  const y5 = useTransform(scrollYProgress, [0.6, 0.75, 0.8], [30, 0, -30]);
  const y6 = useTransform(scrollYProgress, [0.75, 0.9, 0.95], [30, 0, -30]);

  // 스크롤 표시기 투명도
  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={sectionRef} className="h-[600vh] relative">
      <div className="sticky top-0 h-screen flex items-center justify-center bg-white overflow-hidden">
        <div className="absolute inset-0 w-full h-full opacity-10 pointer-events-none">
          <Lottie
            animationData={animationData}
            loop={true}
            autoplay={true}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative w-full">
          <motion.div
            style={{ opacity: opacity1, y: y1 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <h1 className="text-gray-900">어서와! 💕</h1>
          </motion.div>
          <motion.div
            style={{ opacity: opacity2, y: y2 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <h1 className="text-gray-900">이룸교회는</h1>
          </motion.div>
          <motion.div
            style={{ opacity: opacity3, y: y3 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <h1 className="text-gray-900">처음이지? 😎</h1>
          </motion.div>
          <motion.div
            style={{ opacity: opacity4, y: y4 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <h1 className="text-gray-900">
              5월 18일
              <br />
              <br />
              10시/12시
            </h1>
          </motion.div>
          <motion.div
            style={{ opacity: opacity5, y: y5 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <h1 className="text-gray-900">
              아래 지도보고
              <br />
              찾아와!
            </h1>
          </motion.div>
          <motion.div
            style={{ opacity: opacity6, y: y6 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <h1 className="text-gray-900">
              미리 등록하면
              <br />
              선물도 준데! 🤫
            </h1>
          </motion.div>

          {/* 스크롤 표시기 */}
          <motion.div
            style={{ opacity: scrollIndicatorOpacity }}
            className="fixed bottom-4 left-0 right-0 mx-auto flex flex-col items-center gap-2 z-50"
          >
            <motion.div
              className="text-gray-600 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              아래로 스크롤해주세요
            </motion.div>
            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
