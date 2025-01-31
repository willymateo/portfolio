"use client";

import { faClipboardCheck } from "@fortawesome/free-solid-svg-icons/faClipboardCheck";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons/faEnvelope";
import { faPaste } from "@fortawesome/free-regular-svg-icons/faPaste";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { SOCIAL_NETWORK_LINKS } from "../../shared/SocialNetworks/constants";
import { copyTextToClipBoard } from "@/shared/utils";
import { MotionDiv } from "../../shared/Motion/Div";
import { useActive } from "@/hooks/useActive";
import { Link } from "@/i18n/routing";

const EmailToCopy = () => {
  const { isActive: isCopied, enable: startCopied, disable: stopCopied } = useActive();

  const handleClickCopy = () => {
    copyTextToClipBoard({ text: SOCIAL_NETWORK_LINKS.EMAIL });
    startCopied();

    setTimeout(stopCopied, 3000);
  };

  return (
    <MotionDiv
      className="flex flex-row items-center justify-center flex-wrap gap-x-10 gap-y-3 rounded-xl p-5 max-w-full bg-darkosPortfolio-black/10 dark:bg-darkosPortfolio-gray/10"
      transition={{
        scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
        duration: 0.1,
        delay: 0.1,
      }}
      whileInView={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 0 }}
    >
      <span className="text-ellipsis overflow-hidden whitespace-nowrap">
        {SOCIAL_NETWORK_LINKS.EMAIL}
      </span>

      <div className="flex flex-row items-center justify-center flex-wrap gap-5">
        <Link href={`mailto:${SOCIAL_NETWORK_LINKS.EMAIL}`} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faEnvelope} className="w-[24px] h-[24px]" />
        </Link>

        {isCopied ? (
          <FontAwesomeIcon className="w-[24px] h-[24px] cursor-pointer" icon={faClipboardCheck} />
        ) : (
          <FontAwesomeIcon
            className="w-[24px] h-[24px] cursor-pointer"
            onClick={handleClickCopy}
            icon={faPaste}
          />
        )}
      </div>
    </MotionDiv>
  );
};

export { EmailToCopy };
