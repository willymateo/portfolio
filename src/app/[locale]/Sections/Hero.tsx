import { faHandshakeAngle } from "@fortawesome/free-solid-svg-icons/faHandshakeAngle";
import { faCode } from "@fortawesome/free-solid-svg-icons/faCode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslations } from "next-intl";
import Image from "next/image";

import { PrimaryButton } from "../shared/Buttons/Primary";
import profile from "@/../public/images/profile.jpg";
import { MotionDiv } from "../shared/Motion/Div";
import { DotLottie } from "../shared/DotLottie";
import { animaticSCBold } from "@/shared/fonts";
import { MotionH1 } from "../shared/Motion/H1";
import { MotionH2 } from "../shared/Motion/H2";
import { SECTIONS } from "./constants";
import { Link } from "@/i18n/routing";

const Hero = () => {
  const t = useTranslations("home.hero");

  return (
    <section className="px-body min-h-screen flex flex-col items-center justify-center justify-items-center gap-10 sm:grid sm:grid-cols-[5fr_4fr] pt-[49px] lg:pt-[65px] pb-[112px] sm:pb-[76px]">
      <MotionDiv
        whileInView={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.5 }}
        transition={{
          ease: [0, 0.71, 0.2, 1.01],
          duration: 0.8,
          delay: 0.1,
        }}
        className="sm:order-2"
      >
        <Image
          className="rounded-full sm:order-2 aspect-square object-cover object-center"
          alt="Willy Mateo profile photo"
          src={profile.src}
          height={400}
          width={400}
        />
      </MotionDiv>

      <div className="flex flex-col justify-center items-center gap-3 lg:gap-8 max-w-[600px]">
        <div className="flex flex-col justify-center items-center gap-1">
          <MotionH1
            className={`text-4xl sm:text-5xl lg:text-8xl text-center ${animaticSCBold.className}`}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{
              duration: 1,
              delay: 0.6,
            }}
          >
            {t("I'm Willy Mateo")},
          </MotionH1>

          <MotionH2
            className="text-xl sm:text-3xl text-center"
            transition={{
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
              duration: 0.1,
            }}
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0 }}
          >
            {t("a full-stack developer dedicated to creating innovative web solutions")}
          </MotionH2>
        </div>

        <DotLottie
          renderConfig={{ freezeOnOffscreen: true }}
          src="/animations/rocket.lottie"
          className="h-[100px]"
          autoplay
          loop
        />

        <div className="flex flex-col justify-center items-center gap-5">
          <MotionH2
            className="text-xl sm:text-3xl text-center"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.4 }}
          >
            {t("Let’s build something amazing together")}.
          </MotionH2>

          <MotionDiv
            className="flex flex-row justify-center items-center gap-5 flex-wrap"
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.5 }}
            transition={{
              ease: [0, 0.71, 0.2, 1.01],
              duration: 0.8,
              delay: 0.1,
            }}
          >
            <Link href={`#${SECTIONS.EXPERIENCE}`}>
              <PrimaryButton>
                <FontAwesomeIcon icon={faCode} className="w-[24px] h-[24px]" />
                {t("Explore my work")}
              </PrimaryButton>
            </Link>

            <Link href={`#${SECTIONS.GET_IN_TOUCH}`}>
              <PrimaryButton>
                <FontAwesomeIcon icon={faHandshakeAngle} className="w-[24px] h-[24px]" />
                {t("Get in touch")}
              </PrimaryButton>
            </Link>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
};

export { Hero };
