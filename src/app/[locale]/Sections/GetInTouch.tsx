"use client";

import { faClipboardCheck } from "@fortawesome/free-solid-svg-icons/faClipboardCheck";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons/faLaptopCode";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons/faEnvelope";
import { faPaste } from "@fortawesome/free-regular-svg-icons/faPaste";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

import { SocialNetworks } from "@/app/[locale]/shared/SocialNetworks";
import { DinamicQuote } from "../shared/DinamicQuote";
import { copyTextToClipBoard } from "@/shared/utils";
import { MotionDiv } from "../shared/Motion/Div";
import { useActive } from "@/hooks/useActive";
import { EMAIL } from "@/shared/constants";
import { Container } from "./Container";
import { SECTIONS } from "./constants";

const GetInTouch = () => {
  const { isActive: isCopied, enable: startCopied, disable: stopCopied } = useActive();

  const handleClickCopy = () => {
    copyTextToClipBoard({ text: EMAIL });
    startCopied();

    setTimeout(stopCopied, 3000);
  };

  return (
    <Container id={SECTIONS.GET_IN_TOUCH} title="Get in touch">
      <div className="flex flex-col gap-5 w-full">
        <h3 className="text-2xl">
          Let's build something together{" "}
          <FontAwesomeIcon icon={faLaptopCode} className="w-[35px] h-[35px] inline-block ml-2" />
        </h3>

        <div className="grid grid-flow-row auto-rows-min grid-cols-1 gap-x-16 gap-y-10 justify-items-center xl:grid-rows-1 xl:grid-cols-2">
          <DinamicQuote className="col-span-1 row-span-1" />

          <div className="col-span-1 row-span-1 flex flex-col items-center gap-5">
            <MotionDiv
              className="flex flex-row items-center justify-center flex-wrap gap-x-10 gap-y-3 rounded-xl bg-black bg-opacity-20 p-5 max-w-full"
              transition={{
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                duration: 0.1,
                delay: 0.1,
              }}
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0 }}
            >
              <span className="text-ellipsis overflow-hidden whitespace-nowrap">{EMAIL}</span>

              <div className="flex flex-row items-center justify-center flex-wrap gap-5">
                <Link href={`mailto:${EMAIL}`} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faEnvelope} className="w-[24px] h-[24px]" />
                </Link>

                {isCopied ? (
                  <FontAwesomeIcon
                    className="w-[24px] h-[24px] cursor-pointer"
                    icon={faClipboardCheck}
                  />
                ) : (
                  <FontAwesomeIcon
                    className="w-[24px] h-[24px] cursor-pointer"
                    onClick={handleClickCopy}
                    icon={faPaste}
                  />
                )}
              </div>
            </MotionDiv>

            <p>Or</p>

            <SocialNetworks itemsClassName="p-3" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export { GetInTouch };
