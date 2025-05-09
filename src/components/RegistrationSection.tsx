"use client";

import { motion } from "framer-motion";

const RegistrationSection = () => {
  return (
    <section className="py-32 px-4 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="mb-8">
          아래 등록하기를 클릭해서
          <br />
          사전 등록하고
          <br />
          선물도 받아가기! 🎁
        </h2>

        <motion.a
          href="https://naver.me/FfeFnMoy"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-blue-700 transition-colors"
        >
          <h3>
            <b>등록하기</b>
          </h3>
        </motion.a>
      </motion.div>
    </section>
  );
};

export default RegistrationSection;
