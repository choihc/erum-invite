"use client";

import ShareButtons from "@/components/ShareButtons";
import dynamic from "next/dynamic";
import Image from "next/image";

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
      <ShareButtons />
      <div className="w-full flex justify-center pb-32">
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
