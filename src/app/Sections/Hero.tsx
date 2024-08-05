import { EmojiSingRight, Rocket, Suitcase } from "iconoir-react";
import Image from "next/image";
import Link from "next/link";

import { PrimaryButton } from "../shared/Buttons/Primary";
import { animaticSCBold } from "@/shared/fonts";
import { SECTIONS } from "./constants";

const Hero = () => (
  <div className="min-h-screen flex flex-col items-center justify-center justify-items-center gap-10 sm:grid sm:grid-cols-[5fr_4fr] py-20">
    <Image
      className="rounded-full sm:order-2"
      alt="Willy Mateo profile photo"
      src="/images/profile.jpeg"
      height={400}
      width={400}
    />

    <div className="flex flex-col justify-center items-center gap-8 max-w-[600px]">
      <div className="flex flex-col justify-center items-center gap-1">
        <h1 className={`text-4xl sm:text-5xl text-center ${animaticSCBold.className}`}>
          I'm Willy Mateo,
        </h1>

        <h2 className="text-xl sm:text-3xl text-center">
          a full-stack developer dedicated to creating innovative web solutions
        </h2>
      </div>

      <Rocket className="w-12 h-12 text-slate-300" />

      <div className="flex flex-col justify-center items-center gap-5">
        <h2 className="text-xl sm:text-3xl text-center">Let’s build something amazing together.</h2>

        <div className="flex flex-row justify-center items-center gap-5 flex-wrap">
          <Link href={`#${SECTIONS.EXPERIENCE}`}>
            <PrimaryButton>
              <Suitcase />
              Explore my work
            </PrimaryButton>
          </Link>

          <Link href={`#${SECTIONS.GET_IN_TOUCH}`}>
            <PrimaryButton>
              <EmojiSingRight />
              Get in touch
            </PrimaryButton>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export { Hero };
