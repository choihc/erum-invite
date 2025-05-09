"use client";

import IntroSectionV2 from "@/components/IntroSectionV2";
import dynamic from "next/dynamic";
import Image from "next/image";

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
      <IntroSectionV2 />
      <LocationSection />
      <RegistrationSection />
      <div className="w-full flex justify-center py-16 pb-32">
        <Image
          src="/images/invite.jpeg"
          alt="초대장"
          width={300}
          height={400}
          className="rounded-lg shadow-lg"
        />
      </div>
    </main>
  );
}
