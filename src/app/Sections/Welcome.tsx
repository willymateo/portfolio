import { SocialNetworks } from "../shared/SocialNetworks";
import { animaticSCBold } from "@/shared/fonts";
import Image from "next/image";

const Welcome = () => (
  <div className="h-screen grid grid-cols-[5fr_4fr] justify-items-center items-center gap-10">
    <div className="flex flex-col justify-center items-center gap-10">
      <div className="flex flex-col justify-center items-center">
        <h1 className={`text-5xl ${animaticSCBold.className}`}>I'm Willy Mateo,</h1>
        <h2 className="text-3xl">a full-stack developer</h2>
      </div>

      <SocialNetworks />
    </div>

    <Image
      alt="Willy Mateo profile photo"
      className="rounded-full"
      src="/profile.jpeg"
      height={400}
      width={400}
    />
  </div>
);

export { Welcome };
