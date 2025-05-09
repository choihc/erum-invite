"use client";

import { motion } from "framer-motion";
import Script from "next/script";
import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    naver: any;
  }
}

const LocationSection = () => {
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const mapRef = useRef<any>(null);

  useEffect(() => {
    if (!isMapLoaded) return;

    const initializeMap = () => {
      try {
        if (
          typeof window === "undefined" ||
          !window.naver ||
          !window.naver.maps
        ) {
          console.log("Naver Maps not loaded yet");
          return;
        }

        if (mapRef.current) {
          console.log("Map already initialized");
          return;
        }

        const map = new window.naver.maps.Map("naverMap", {
          center: new window.naver.maps.LatLng(
            37.3102329915188,
            127.08280997237311
          ),
          zoom: 16,
        });

        new window.naver.maps.Marker({
          position: new window.naver.maps.LatLng(
            37.3102329915188,
            127.08280997237311
          ),
          map: map,
        });

        mapRef.current = map;
      } catch (error) {
        console.error("Error initializing map:", error);
      }
    };

    // 약간의 지연을 주어 DOM이 완전히 준비된 후 지도를 초기화
    const timer = setTimeout(initializeMap, 100);
    return () => clearTimeout(timer);
  }, [isMapLoaded]);

  return (
    <>
      <Script
        strategy="lazyOnload"
        type="text/javascript"
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=jbgn2o8h0j`}
        onLoad={() => {
          console.log("Naver Maps script loaded");
          setIsMapLoaded(true);
        }}
        onError={(e) => {
          console.error("Error loading Naver Maps script:", e);
        }}
      />
      <section className="min-h-screen py-32 px-4 bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-center mb-16">여기로 찾아오라구! 😘</h2>

          <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-8">
            <div className="aspect-h-9">
              <div id="naverMap" style={{ width: "100%", height: "400px" }} />
            </div>
          </div>

          <p className="text-center text-gray-600">
            경기도 용인시 수지구 심곡로 92 이룸교회
          </p>
        </motion.div>
      </section>
    </>
  );
};

export default LocationSection;
