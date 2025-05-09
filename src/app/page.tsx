"use client";

import dynamic from "next/dynamic";

const IntroSection = dynamic(() => import("@/components/IntroSection"), {
  ssr: false,
});
const LocationSection = dynamic(() => import("@/components/LocationSection"), {
  ssr: false,
});
const RegistrationSection = dynamic(
  () => import("@/components/RegistrationSection"),
  {
    ssr: false,
  }
);

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <IntroSection />
      <LocationSection />
      <RegistrationSection />
    </main>
  );
}
