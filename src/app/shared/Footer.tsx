"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Footer = () => (
  <footer className="flex flex-row items-center justify-center bg-black text-white px-10 py-5 sticky bottom-0 z-[9999]">
    <p className="text-center">
      <span className="mr-6">Designed and developed with</span>
      <span className="absolute">
        <DotLottieReact
          src="https://lottie.host/6815703f-8b6a-427b-9343-c0d7173ad2e3/QqFbLbgOF4.lottie"
          className="h-48 relative bottom-32 left-auto"
          autoplay
          loop
        />
      </span>
      by
      <span className="font-bold ml-2">Willy Mateo</span>
    </p>
  </footer>
);

export { Footer };
