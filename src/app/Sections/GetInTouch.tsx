"use client";

import { ClipboardCheck, Developer, PasteClipboard, SendMail } from "iconoir-react";
import Link from "next/link";

import { SocialNetworks } from "@/app/shared/SocialNetworks";
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
        <Link href={`#${SECTIONS.GET_IN_TOUCH}`}>GetInTouch</Link>
      </h2>

      <div className="flex flex-col gap-5">
        <h3 className="flex flex-row gap-2 items-center text-2xl">
          <span>Let's build something together</span>
          <Developer />
          <span>!</span>
        </h3>

        <div className="flex flex-col items-center gap-5">
          <div className="flex flex-row items-center justify-center flex-wrap gap-x-10 gap-y-3 rounded-xl bg-black bg-opacity-20 p-5 max-w-full">
            <span className="text-ellipsis overflow-hidden whitespace-nowrap">{EMAIL}</span>

            <div className="flex flex-row gap-5">
              <Link href={`mailto:${EMAIL}`} target="_blank" rel="noreferrer">
                <SendMail />
              </Link>

              {isCopied ? (
                <ClipboardCheck className="cursor-pointer" />
              ) : (
                <PasteClipboard onClick={handleClickCopy} className="cursor-pointer" />
              )}
            </div>
          </div>

          <SocialNetworks itemsClassName="p-3" />
        </div>
      </div>
    </div>
  );
};

export { GetInTouch };
