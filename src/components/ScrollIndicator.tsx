"use client";

import { motion, MotionValue } from "framer-motion";

interface ScrollIndicatorProps {
  opacity: MotionValue<number>;
}

const ScrollIndicator = ({ opacity }: ScrollIndicatorProps) => {
  return (
    <motion.div
      style={{ opacity }}
      className="fixed bottom-4 left-0 right-0 mx-auto flex flex-col items-center gap-2 z-50"
    >
      <motion.div className="text-gray-600 text-sm">
        아래로 스크롤해주세요.
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
  );
};

export default ScrollIndicator;
