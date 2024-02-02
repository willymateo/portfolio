import Image from "next/image";

import { SocialNetworks } from "../shared/SocialNetworks";
import { animaticSCBold } from "@/shared/fonts";

const Welcome = () => (
  <div className="h-screen flex flex-col items-center justify-center justify-items-center gap-10 sm:grid sm:grid-cols-[5fr_4fr]">
    <Image
      className="rounded-full sm:order-2"
      alt="Willy Mateo profile photo"
      src="/images/profile.jpeg"
      height={400}
      width={400}
    />

    <div className="flex flex-col justify-center items-center gap-10 order-1">
      <div className="flex flex-col justify-center items-center">
        <h1 className={`text-5xl text-center ${animaticSCBold.className}`}>I'm Willy Mateo,</h1>
        <h2 className="text-3xl text-center">a full-stack developer</h2>
      </div>

      <SocialNetworks />
    </div>
  </div>
);

export { Welcome };
