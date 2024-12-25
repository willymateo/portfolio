"use client";

import { faClipboardCheck } from "@fortawesome/free-solid-svg-icons/faClipboardCheck";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons/faLaptopCode";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons/faEnvelope";
import { faPaste } from "@fortawesome/free-regular-svg-icons/faPaste";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

import { SocialNetworks } from "@/app/shared/SocialNetworks";
import { DinamicQuote } from "../shared/DinamicQuote";
import { copyTextToClipBoard } from "@/shared/utils";
import { useActive } from "@/hooks/useActive";
import { EMAIL } from "@/shared/constants";
import { SECTIONS } from "./constants";

const GetInTouch = () => {
  const { isActive: isCopied, enable: startCopied, disable: stopCopied } = useActive();

  const handleClickCopy = () => {
    copyTextToClipBoard({ text: EMAIL });
    startCopied();

    setTimeout(stopCopied, 3000);
  };

  return (
    <div id={SECTIONS.GET_IN_TOUCH} className="flex flex-col gap-8">
      <h2 className="text-4xl font-bold">
        <Link href={`#${SECTIONS.GET_IN_TOUCH}`}>Get in touch</Link>
      </h2>

      <div className="flex flex-col gap-5">
        <h3 className="text-2xl">
          Let's build something together{" "}
          <FontAwesomeIcon icon={faLaptopCode} className="w-[35px] h-[35px] inline-block ml-2" />
        </h3>

        <div className="flex flex-col items-stretch justify-center gap-10 lg:flex-row lg:flex-wrap">
          <DinamicQuote className="flex-1" />

          <div className="flex-1 flex flex-col items-center gap-5">
            <div className="flex flex-row items-center justify-center flex-wrap gap-x-10 gap-y-3 rounded-xl bg-black bg-opacity-20 p-5 max-w-full">
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
            </div>

            <p>Or</p>

            <SocialNetworks itemsClassName="p-3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export { GetInTouch };
