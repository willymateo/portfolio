import { faHandshakeAngle } from "@fortawesome/free-solid-svg-icons/faHandshakeAngle";
import { faCode } from "@fortawesome/free-solid-svg-icons/faCode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

import { PrimaryButton } from "../shared/Buttons/Primary";
import { MotionDiv } from "../shared/Motion/Div";
import { DotLottie } from "../shared/DotLottie";
import { animaticSCBold } from "@/shared/fonts";
import { MotionH1 } from "../shared/Motion/H1";
import { MotionH2 } from "../shared/Motion/H2";
import { SECTIONS } from "./constants";

const Hero = () => (
  <div className="min-h-screen flex flex-col items-center justify-center justify-items-center gap-10 sm:grid sm:grid-cols-[5fr_4fr] py-20">
    <MotionDiv
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        ease: [0, 0.71, 0.2, 1.01],
        duration: 0.8,
        delay: 0.1,
      }}
      className="sm:order-2"
    >
      <Image
        className="rounded-full sm:order-2"
        alt="Willy Mateo profile photo"
        src="/images/profile.jpeg"
        height={400}
        width={400}
      />
    </MotionDiv>

    <div className="flex flex-col justify-center items-center gap-8 max-w-[600px]">
      <div className="flex flex-col justify-center items-center gap-1">
        <MotionH1
          className={`text-4xl sm:text-5xl lg:text-8xl text-center ${animaticSCBold.className}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.6,
          }}
        >
          I'm Willy Mateo,
        </MotionH1>

        <MotionH2
          className="text-xl sm:text-3xl text-center"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            duration: 0.1,
          }}
        >
          a full-stack developer dedicated to creating innovative web solutions
        </MotionH2>
      </div>

      <DotLottie
        src="https://lottie.host/8aaed915-a5eb-45bc-a378-85773867d9a5/KBhS3N1Eot.lottie"
        className="h-[100px]"
        autoplay
        loop
      />

      <div className="flex flex-col justify-center items-center gap-5">
        <MotionH2
          className="text-xl sm:text-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Let’s build something amazing together.
        </MotionH2>

        <MotionDiv
          className="flex flex-row justify-center items-center gap-5 flex-wrap"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            ease: [0, 0.71, 0.2, 1.01],
            duration: 0.8,
            delay: 0.1,
          }}
        >
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
        </MotionDiv>
      </div>
    </div>
  </div>
);

export { Hero };
