"use client";

import IntroSection from "@/components/IntroSection";
import LocationSection from "@/components/LocationSection";
import RegistrationSection from "@/components/RegistrationSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <IntroSection />
      <LocationSection />
      <RegistrationSection />
    </main>
  );
}
