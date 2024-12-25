import { faHandshakeAngle } from "@fortawesome/free-solid-svg-icons/faHandshakeAngle";
import { faRocket } from "@fortawesome/free-solid-svg-icons/faRocket";
import { faCode } from "@fortawesome/free-solid-svg-icons/faCode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

import { PrimaryButton } from "../shared/Buttons/Primary";
import { animaticSCBold } from "@/shared/fonts";
import { MotionH1 } from "../shared/Motion/H1";
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
        <MotionH1
          className={`text-4xl sm:text-5xl lg:text-8xl text-center ${animaticSCBold.className}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          I'm Willy Mateo,
        </MotionH1>

        <h2 className="text-xl sm:text-3xl text-center">
          a full-stack developer dedicated to creating innovative web solutions
        </h2>
      </div>

      <FontAwesomeIcon icon={faRocket} className="w-[24px] h-[24px]" />

      <div className="flex flex-col justify-center items-center gap-5">
        <h2 className="text-xl sm:text-3xl text-center">Let’s build something amazing together.</h2>

        <div className="flex flex-row justify-center items-center gap-5 flex-wrap">
          <Link href={`#${SECTIONS.EXPERIENCE}`}>
            <PrimaryButton>
              <FontAwesomeIcon icon={faCode} className="w-[24px] h-[24px]" />
              Explore my work
            </PrimaryButton>
          </Link>

          <Link href={`#${SECTIONS.GET_IN_TOUCH}`}>
            <PrimaryButton>
              <FontAwesomeIcon icon={faHandshakeAngle} className="w-[24px] h-[24px]" />
              Get in touch
            </PrimaryButton>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export { Hero };
