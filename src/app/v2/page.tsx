"use client";

import ShareButtons from "@/components/ShareButtons";
import dynamic from "next/dynamic";
import Image from "next/image";

const IntroSectionV2 = dynamic(() => import("@/components/IntroSectionV2"), {
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
      <IntroSectionV2 />
      <LocationSection />
      <RegistrationSection />
      <ShareButtons />
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
