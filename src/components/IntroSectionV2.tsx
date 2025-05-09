"use client";

import Lottie from "lottie-react";
import heartAnimation from "../../public/lotti/heart.json";
import locationAnimation from "../../public/lotti/location.json";
import timeAnimation from "../../public/lotti/time.json";

const IntroSectionV2 = () => {
  return (
    <>
      <section className="py-32 px-4 bg-white relative">
        <div className="absolute inset-0 w-full h-full opacity-20 pointer-events-none">
          <Lottie
            animationData={heartAnimation}
            loop={true}
            autoplay={true}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="max-w-4xl mx-auto text-center relative">
          <h1 className="text-4xl font-bold text-gray-800  mb-8">
            이룸교회 중등부
          </h1>
          <h2 className="text-3xl text-purple-500 mb-8">오이코스 초청예배에</h2>
          <h2 className="text-3xl text-purple-500 mb-8">
            여러분을 초대합니다!
          </h2>
        </div>
      </section>
      <section className="py-32 px-4 bg-gray-50 relative">
        <div className="absolute inset-0 w-full h-full opacity-20 pointer-events-none">
          <Lottie
            animationData={timeAnimation}
            loop={true}
            autoplay={true}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="max-w-4xl mx-auto text-center relative">
          <h2 className="text-3xl text-red-400 mb-8">일시</h2>
          <h2 className="text-3xl text-gray-900 mb-8">5월 18일</h2>
          <h2 className="text-3xl text-gray-900 mb-8">10시/12시</h2>
        </div>
      </section>
      <section className="py-32 px-4 bg-white relative">
        <div className="max-w-4xl mx-auto text-center ">
          <h2 className="text-3xl text-blue-700 mb-8">장소</h2>
          <h2 className="text-3xl text-gray-900 mb-8">이룸교회 브릿지성전</h2>
          <h2 className="text-3xl text-gray-900">2층 중예배실</h2>
          <div className="absolute inset-0 w-full h-full opacity-20 pointer-events-none">
            <Lottie
              animationData={locationAnimation}
              loop={true}
              autoplay={true}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default IntroSectionV2;
