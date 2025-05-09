"use client";

import IntroSection from "@/components/IntroSection";
import RegistrationSection from "@/components/RegistrationSection";
import dynamic from "next/dynamic";

const LocationSection = dynamic(() => import("@/components/LocationSection"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <IntroSection />
      <LocationSection />
      <RegistrationSection />
    </main>
  );
}
